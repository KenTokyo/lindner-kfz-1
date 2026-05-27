import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Paintbrush, Wrench, Send, CheckCircle, AlertCircle } from 'lucide-react';
import {
  hasFormErrors,
  sanitizeAppointmentData,
  validateAppointmentField,
  validateAppointmentForm,
  type AppointmentField,
  type AppointmentFormData,
  type FormErrors,
} from '../../lib/formValidation';

type Category = 'karosserie' | 'autoservice';

interface TerminanfrageModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: Category | null;
}

const initialFormData: AppointmentFormData = {
  name: '',
  email: '',
  telefon: '',
  kennzeichen: '',
  wunschtermin: '',
  nachricht: '',
};

const initialTouched: Partial<Record<AppointmentField, boolean>> = {};

export const TerminanfrageModal: React.FC<TerminanfrageModalProps> = ({
  isOpen,
  onClose,
  initialCategory = null,
}) => {
  const [step, setStep] = useState<1 | 2>(initialCategory ? 2 : 1);
  const [category, setCategory] = useState<Category | null>(initialCategory);
  const [formData, setFormData] = useState<AppointmentFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors<AppointmentField>>({});
  const [touched, setTouched] = useState<Partial<Record<AppointmentField, boolean>>>(initialTouched);
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const modalRef = useRef<HTMLDivElement>(null);

  // Reset state when modal opens/closes or initialCategory changes
  useEffect(() => {
    if (isOpen) {
      if (initialCategory) {
        setCategory(initialCategory);
        setStep(2);
      } else {
        setCategory(null);
        setStep(1);
      }
      setFormData(initialFormData);
      setErrors({});
      setTouched(initialTouched);
      setSubmitState('idle');
    }
  }, [isOpen, initialCategory]);

  // Lock body scroll and handle escape key when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const updateFieldError = (field: AppointmentField, nextData: AppointmentFormData) => {
    const nextError = validateAppointmentField(field, nextData);
    setErrors((prev) => ({ ...prev, [field]: nextError }));
  };

  const handleCategorySelect = (cat: Category) => {
    setCategory(cat);
    setStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const field = name as AppointmentField;

    setFormData((prev) => {
      const nextData = { ...prev, [field]: value };

      if (touched[field] || value.trim().length > 0) {
        updateFieldError(field, nextData);
      } else if (errors[field]) {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
      }

      return nextData;
    });
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as AppointmentField;
    setTouched((prev) => ({ ...prev, [field]: true }));
    updateFieldError(field, formData);
  };

  const validateAndTouchAll = (data: AppointmentFormData): FormErrors<AppointmentField> => {
    const nextErrors = validateAppointmentForm(data);
    setTouched({
      name: true,
      email: true,
      telefon: true,
      kennzeichen: true,
      wunschtermin: true,
      nachricht: true,
    });
    setErrors(nextErrors);
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedData = sanitizeAppointmentData(formData);
    const nextErrors = validateAndTouchAll(sanitizedData);

    if (hasFormErrors(nextErrors)) {
      setSubmitState('idle');
      return;
    }

    setSubmitState('submitting');

    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'appointment',
          category,
          ...sanitizedData,
          website: '',
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        errors?: FormErrors<AppointmentField>;
      } | null;

      if (!response.ok || !payload?.ok) {
        if (payload?.errors) {
          setErrors((prev) => ({ ...prev, ...payload.errors }));
          setTouched({
            name: true,
            email: true,
            telefon: true,
            kennzeichen: true,
            wunschtermin: true,
            nachricht: true,
          });
        }
        setSubmitState('error');
        return;
      }

      setSubmitState('success');
    } catch (error) {
      console.error('Fehler beim Absenden der Terminanfrage:', error);
      setSubmitState('error');
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleBackToStep1 = () => {
    setStep(1);
    setCategory(null);
  };

  const categoryLabel =
    category === 'karosserie'
      ? 'Karosserie & Lack'
      : category === 'autoservice'
        ? 'Autoservice'
        : 'Nicht angegeben';
  const messageLength = formData.nachricht.trim().length;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label="Terminanfrage"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Schliessen"
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5 text-neutral-500" />
            </button>

            {/* Step 1: Category Selection */}
            {step === 1 && (
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">Terminanfrage</h2>
                <p className="text-neutral-600 mb-8">
                  Wählen Sie den Bereich, der zu Ihrem Anliegen passt &ndash;<br />
                  Ihre Anfrage landet ohne Umwege bei uns.
                </p>

                <div className="grid gap-4">
                  <button
                    onClick={() => handleCategorySelect('karosserie')}
                    className="group flex items-center gap-4 p-5 rounded-xl border border-neutral-200 hover:border-secondary hover:shadow-md transition-all text-left cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0 group-hover:bg-secondary/90 transition-colors">
                      <Paintbrush className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Karosserie & Lack</h3>
                      <p className="text-sm text-neutral-500">Unfall, Karosserie, Lackierung</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleCategorySelect('autoservice')}
                    className="group flex items-center gap-4 p-5 rounded-xl border border-neutral-200 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all text-left cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0 group-hover:bg-secondary/90 transition-colors">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Autoservice</h3>
                      <p className="text-sm text-neutral-500">Inspektion, Mechanik, Reparaturen</p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Form */}
            {step === 2 && submitState !== 'success' && (
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={handleBackToStep1}
                    className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
                  >
                    &larr; Zurueck
                  </button>
                  <span className="text-sm text-neutral-300">|</span>
                  <span className="text-sm font-medium text-neutral-700">{categoryLabel}</span>
                </div>

                <h2 className="text-2xl font-bold mb-2">Terminanfrage</h2>
                <p className="text-neutral-600 mb-6">
                  Fuellen Sie das Formular aus - wir melden uns mit einem Terminvorschlag.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name */}
                  <div>
                    <label htmlFor="ta-name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Name *
                    </label>
                    <input
                      id="ta-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      maxLength={80}
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'ta-name-error' : undefined}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-neutral-200'} focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all`}
                      placeholder="Max Mustermann"
                    />
                    {errors.name && (
                      <p id="ta-name-error" role="alert" className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="ta-email" className="block text-sm font-medium text-neutral-700 mb-1">
                      E-Mail *
                    </label>
                    <input
                      id="ta-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      maxLength={120}
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'ta-email-error' : undefined}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-neutral-200'} focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all`}
                      placeholder="max@beispiel.de"
                    />
                    {errors.email && (
                      <p id="ta-email-error" role="alert" className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Telefon */}
                  <div>
                    <label htmlFor="ta-telefon" className="block text-sm font-medium text-neutral-700 mb-1">
                      Telefon <span className="text-neutral-400">(optional)</span>
                    </label>
                    <input
                      id="ta-telefon"
                      type="tel"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      maxLength={30}
                      autoComplete="tel"
                      inputMode="tel"
                      aria-invalid={!!errors.telefon}
                      aria-describedby={errors.telefon ? 'ta-telefon-error' : 'ta-telefon-hint'}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.telefon ? 'border-red-400' : 'border-neutral-200'} focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all`}
                      placeholder="030 1234567"
                    />
                    {errors.telefon ? (
                      <p id="ta-telefon-error" role="alert" className="mt-1 text-sm text-red-500">{errors.telefon}</p>
                    ) : (
                      <p id="ta-telefon-hint" className="mt-1 text-xs text-neutral-500">Bitte nur normale Telefonnummern eingeben.</p>
                    )}
                  </div>

                  {/* Kennzeichen */}
                  <div>
                    <label htmlFor="ta-kennzeichen" className="block text-sm font-medium text-neutral-700 mb-1">
                      Kennzeichen <span className="text-neutral-400">(optional)</span>
                    </label>
                    <input
                      id="ta-kennzeichen"
                      type="text"
                      name="kennzeichen"
                      value={formData.kennzeichen}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      maxLength={20}
                      aria-invalid={!!errors.kennzeichen}
                      aria-describedby={errors.kennzeichen ? 'ta-kennzeichen-error' : undefined}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.kennzeichen ? 'border-red-400' : 'border-neutral-200'} focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all`}
                      placeholder="B-XX 1234"
                    />
                    {errors.kennzeichen && (
                      <p id="ta-kennzeichen-error" role="alert" className="mt-1 text-sm text-red-500">{errors.kennzeichen}</p>
                    )}
                  </div>

                  {/* Wunschtermin */}
                  <div>
                    <label htmlFor="ta-wunschtermin" className="block text-sm font-medium text-neutral-700 mb-1">
                      Wunschtermin <span className="text-neutral-400">(optional)</span>
                    </label>
                    <input
                      id="ta-wunschtermin"
                      type="text"
                      name="wunschtermin"
                      value={formData.wunschtermin}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      maxLength={80}
                      aria-invalid={!!errors.wunschtermin}
                      aria-describedby={errors.wunschtermin ? 'ta-wunschtermin-error' : undefined}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.wunschtermin ? 'border-red-400' : 'border-neutral-200'} focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all`}
                      placeholder="z.B. naechste Woche, ab 14 Uhr"
                    />
                    {errors.wunschtermin && (
                      <p id="ta-wunschtermin-error" role="alert" className="mt-1 text-sm text-red-500">{errors.wunschtermin}</p>
                    )}
                  </div>

                  {/* Nachricht */}
                  <div>
                    <label htmlFor="ta-nachricht" className="block text-sm font-medium text-neutral-700 mb-1">
                      Anliegen / Nachricht *
                    </label>
                    <textarea
                      id="ta-nachricht"
                      name="nachricht"
                      value={formData.nachricht}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      rows={4}
                      maxLength={1200}
                      aria-required="true"
                      aria-invalid={!!errors.nachricht}
                      aria-describedby={errors.nachricht ? 'ta-nachricht-error' : 'ta-nachricht-hint'}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.nachricht ? 'border-red-400' : 'border-neutral-200'} focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none`}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    />
                    {errors.nachricht ? (
                      <p id="ta-nachricht-error" role="alert" className="mt-1 text-sm text-red-500">{errors.nachricht}</p>
                    ) : (
                      <div id="ta-nachricht-hint" className="mt-1 flex items-center justify-between text-xs text-neutral-500">
                        <span>Bitte kurz und konkret beschreiben.</span>
                        <span>{messageLength}/1200</span>
                      </div>
                    )}
                  </div>

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitState === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {submitState === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Terminanfrage absenden
                      </>
                    )}
                  </button>

                  {submitState === 'error' && (
                    <div role="alert" className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.</span>
                    </div>
                  )}
                </form>
              </div>
            )}

            {/* Success State */}
            {submitState === 'success' && (
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">Vielen Dank!</h2>
                <p className="text-neutral-600 mb-2">
                  Ihre Terminanfrage fuer <strong>{categoryLabel}</strong> wurde erfolgreich gesendet.
                </p>
                <p className="text-neutral-500 text-sm mb-8">
                  Wir melden uns schnellstmoeglich mit einem Terminvorschlag bei Ihnen.
                </p>
                <button
                  onClick={handleClose}
                  className="px-8 py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all cursor-pointer"
                >
                  Schliessen
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
