import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import {
  APPLICATION_FIELDS,
  hasFormErrors,
  sanitizeApplicationData,
  validateApplicationField,
  validateApplicationForm,
  type ApplicationField,
  type ApplicationFormData,
  type FormErrors,
} from '../../lib/formValidation';

interface BewerbungsFormularProps {
  preselectedPosition?: string;
}

const initialFormData: ApplicationFormData = {
  name: '',
  email: '',
  telefon: '',
  position: '',
  nachricht: '',
};

const touchedDefaults: Partial<Record<ApplicationField, boolean>> = {};

export const BewerbungsFormular: React.FC<BewerbungsFormularProps> = ({ preselectedPosition }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    ...initialFormData,
    position: preselectedPosition ?? '',
  });
  const [errors, setErrors] = useState<FormErrors<ApplicationField>>({});
  const [touched, setTouched] = useState<Partial<Record<ApplicationField, boolean>>>(touchedDefaults);
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const updateFieldError = (field: ApplicationField, nextData: ApplicationFormData) => {
    const nextError = validateApplicationField(field, nextData);
    setErrors((prev) => ({ ...prev, [field]: nextError }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = e.target.name as ApplicationField;
    const value = e.target.value;

    setFormData((prev) => {
      const nextData = { ...prev, [field]: value };

      if (touched[field] || value.trim().length > 0) {
        updateFieldError(field, nextData);
      } else if (errors[field]) {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
      }

      return nextData;
    });

    if (submitState === 'error') {
      setSubmitState('idle');
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = e.target.name as ApplicationField;
    setTouched((prev) => ({ ...prev, [field]: true }));
    updateFieldError(field, formData);
  };

  const touchAllFields = () => {
    const nextTouched: Partial<Record<ApplicationField, boolean>> = {};
    for (const field of APPLICATION_FIELDS) {
      nextTouched[field] = true;
    }
    setTouched(nextTouched);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedData = sanitizeApplicationData(formData);
    const nextErrors = validateApplicationForm(sanitizedData);
    touchAllFields();
    setErrors(nextErrors);

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
          formType: 'application',
          ...sanitizedData,
          website: '',
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        errors?: FormErrors<ApplicationField>;
      } | null;

      if (!response.ok || !payload?.ok) {
        if (payload?.errors) {
          setErrors((prev) => ({ ...prev, ...payload.errors }));
        }
        touchAllFields();
        setSubmitState('error');
        return;
      }

      setSubmitState('success');
      setFormData(initialFormData);
      setErrors({});
      setTouched(touchedDefaults);
    } catch (error) {
      console.error('Fehler beim Absenden der Bewerbung:', error);
      setSubmitState('error');
    }
  };

  // Update position when preselectedPosition changes
  useEffect(() => {
    if (preselectedPosition) {
      setFormData((prev) => {
        const nextData = { ...prev, position: preselectedPosition };
        if (touched.position) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            position: validateApplicationField('position', nextData),
          }));
        }
        return nextData;
      });
    }
  }, [preselectedPosition, touched.position]);

  const messageLength = formData.nachricht.trim().length;

  if (submitState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-neutral-50 rounded-3xl p-12 text-center border border-neutral-100"
      >
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-neutral-900 mb-3">Bewerbung erhalten!</h3>
        <p className="text-neutral-600 max-w-md mx-auto">
          Vielen Dank fuer Ihre Bewerbung. Wir melden uns zeitnah bei Ihnen.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-100"
      noValidate
    >
      <h3 className="text-2xl font-bold text-neutral-900 mb-2">Jetzt bewerben</h3>
      <p className="text-neutral-600 mb-8">Kurz ausfuellen - wir melden uns bei Ihnen.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="bew-name" className="block text-sm font-medium text-neutral-700 mb-2">
            Name *
          </label>
          <input
            id="bew-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={80}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'bew-name-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400' : 'border-neutral-200'} bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all`}
            placeholder="Vor- und Nachname"
          />
          {errors.name && <p id="bew-name-error" className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="bew-email" className="block text-sm font-medium text-neutral-700 mb-2">
            E-Mail *
          </label>
          <input
            id="bew-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={120}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'bew-email-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400' : 'border-neutral-200'} bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all`}
            placeholder="ihre@email.de"
          />
          {errors.email && <p id="bew-email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="bew-telefon" className="block text-sm font-medium text-neutral-700 mb-2">
            Telefon
          </label>
          <input
            id="bew-telefon"
            name="telefon"
            type="tel"
            value={formData.telefon}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={30}
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.telefon}
            aria-describedby={errors.telefon ? 'bew-telefon-error' : 'bew-telefon-hint'}
            className={`w-full px-4 py-3 rounded-xl border ${errors.telefon ? 'border-red-400' : 'border-neutral-200'} bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all`}
            placeholder="Optional"
          />
          {errors.telefon ? (
            <p id="bew-telefon-error" className="mt-1 text-sm text-red-500">{errors.telefon}</p>
          ) : (
            <p id="bew-telefon-hint" className="mt-1 text-xs text-neutral-500">Optional, aber bitte nur reale Nummern.</p>
          )}
        </div>

        <div>
          <label htmlFor="bew-position" className="block text-sm font-medium text-neutral-700 mb-2">
            Position *
          </label>
          <select
            id="bew-position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.position}
            aria-describedby={errors.position ? 'bew-position-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border ${errors.position ? 'border-red-400' : 'border-neutral-200'} bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all`}
          >
            <option value="">Bitte waehlen</option>
            <option value="Karosseriebauer (m/w/d)">Karosseriebauer (m/w/d)</option>
            <option value="Fahrzeuglackierer (m/w/d)">Fahrzeuglackierer (m/w/d)</option>
            <option value="Ausbildung">Ausbildung</option>
            <option value="Initiativbewerbung">Initiativbewerbung</option>
          </select>
          {errors.position && <p id="bew-position-error" className="mt-1 text-sm text-red-500">{errors.position}</p>}
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="bew-nachricht" className="block text-sm font-medium text-neutral-700 mb-2">
          Nachricht *
        </label>
        <textarea
          id="bew-nachricht"
          name="nachricht"
          rows={5}
          maxLength={1500}
          value={formData.nachricht}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.nachricht}
          aria-describedby={errors.nachricht ? 'bew-nachricht-error' : 'bew-nachricht-hint'}
          className={`w-full px-4 py-3 rounded-xl border ${errors.nachricht ? 'border-red-400' : 'border-neutral-200'} bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none`}
          placeholder="Kurz zu Ihrer Person und Motivation..."
        />
        {errors.nachricht ? (
          <p id="bew-nachricht-error" className="mt-1 text-sm text-red-500">{errors.nachricht}</p>
        ) : (
          <div id="bew-nachricht-hint" className="mt-1 flex items-center justify-between text-xs text-neutral-500">
            <span>Mindestens 20 Zeichen, maximal 1500.</span>
            <span>{messageLength}/1500</span>
          </div>
        )}
      </div>

      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button
        type="submit"
        disabled={submitState === 'submitting'}
        className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-bold rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {submitState === 'submitting' ? 'Wird gesendet...' : 'Bewerbung absenden'}
        <Send size={18} />
      </button>

      {submitState === 'error' && (
        <div role="alert" className="mt-4 flex items-center gap-2 text-sm text-red-600">
          <AlertCircle size={16} />
          <span>Der Versand hat nicht funktioniert. Bitte erneut versuchen.</span>
        </div>
      )}
    </motion.form>
  );
};
