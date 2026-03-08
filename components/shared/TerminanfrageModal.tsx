import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Paintbrush, Wrench, Send, CheckCircle, AlertCircle } from 'lucide-react';

type Category = 'karosserie' | 'autoservice';

interface TerminanfrageModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: Category | null;
}

interface FormData {
  name: string;
  email: string;
  telefon: string;
  kennzeichen: string;
  wunschtermin: string;
  nachricht: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  telefon: '',
  kennzeichen: '',
  wunschtermin: '',
  nachricht: '',
};

export const TerminanfrageModal: React.FC<TerminanfrageModalProps> = ({
  isOpen,
  onClose,
  initialCategory = null,
}) => {
  const [step, setStep] = useState<1 | 2>(initialCategory ? 2 : 1);
  const [category, setCategory] = useState<Category | null>(initialCategory);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
      setSubmitState('idle');
    }
  }, [isOpen, initialCategory]);

  const modalRef = useRef<HTMLDivElement>(null);

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

  const handleCategorySelect = (cat: Category) => {
    setCategory(cat);
    setStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on input
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }

    if (!formData.nachricht.trim()) {
      newErrors.nachricht = 'Bitte beschreiben Sie kurz Ihr Anliegen.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitState('submitting');

    // Simulate submission (no backend yet)
    setTimeout(() => {
      setSubmitState('success');
    }, 1500);
  };

  const handleClose = () => {
    onClose();
  };

  const handleBackToStep1 = () => {
    setStep(1);
    setCategory(null);
  };

  const categoryLabel = category === 'karosserie' ? 'Karosserie & Lack' : 'Autoservice';

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
              aria-label="Schließen"
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5 text-neutral-500" />
            </button>

            {/* Step 1: Category Selection */}
            {step === 1 && (
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">Terminanfrage</h2>
                <p className="text-neutral-600 mb-8">Worum geht es?</p>

                <div className="grid gap-4">
                  <button
                    onClick={() => handleCategorySelect('karosserie')}
                    className="group flex items-center gap-4 p-5 rounded-xl border border-neutral-200 hover:border-neutral-900 hover:shadow-md transition-all text-left cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-neutral-800 transition-colors">
                      <Paintbrush className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Karosserie & Lack</h3>
                      <p className="text-sm text-neutral-500">
                        Unfall, Karosserie, Lackierung
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleCategorySelect('autoservice')}
                    className="group flex items-center gap-4 p-5 rounded-xl border border-neutral-200 hover:border-neutral-900 hover:shadow-md transition-all text-left cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-neutral-800 transition-colors">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Autoservice</h3>
                      <p className="text-sm text-neutral-500">
                        Inspektion, Mechanik, Reparaturen
                      </p>
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
                    &larr; Zurück
                  </button>
                  <span className="text-sm text-neutral-300">|</span>
                  <span className="text-sm font-medium text-neutral-700">
                    {categoryLabel}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-2">Terminanfrage</h2>
                <p className="text-neutral-600 mb-6">
                  Füllen Sie das Formular aus – wir melden uns mit einem Terminvorschlag.
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
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                      placeholder="030 1234567"
                    />
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
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                      placeholder="B-XX 1234"
                    />
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
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                      placeholder="z.B. nächste Woche, ab 14 Uhr"
                    />
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
                      rows={4}
                      aria-required="true"
                      aria-invalid={!!errors.nachricht}
                      aria-describedby={errors.nachricht ? 'ta-nachricht-error' : undefined}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.nachricht ? 'border-red-400' : 'border-neutral-200'} focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none`}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    />
                    {errors.nachricht && (
                      <p id="ta-nachricht-error" role="alert" className="mt-1 text-sm text-red-500">{errors.nachricht}</p>
                    )}
                  </div>

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
                  Ihre Terminanfrage für <strong>{categoryLabel}</strong> wurde erfolgreich gesendet.
                </p>
                <p className="text-neutral-500 text-sm mb-8">
                  Wir melden uns schnellstmöglich mit einem Terminvorschlag bei Ihnen.
                </p>
                <button
                  onClick={handleClose}
                  className="px-8 py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all cursor-pointer"
                >
                  Schließen
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
