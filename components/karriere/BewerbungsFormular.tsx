import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

interface BewerbungsFormularProps {
  preselectedPosition?: string;
}

interface FormData {
  name: string;
  email: string;
  telefon: string;
  position: string;
  nachricht: string;
}

export const BewerbungsFormular: React.FC<BewerbungsFormularProps> = ({ preselectedPosition }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    telefon: '',
    position: preselectedPosition ?? '',
    nachricht: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Frontend-only: simulate submission
    timerRef.current = setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  // Update position when preselectedPosition changes
  React.useEffect(() => {
    if (preselectedPosition) {
      setFormData((prev) => ({ ...prev, position: preselectedPosition }));
    }
  }, [preselectedPosition]);

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-neutral-50 rounded-3xl p-12 text-center border border-neutral-100"
      >
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-neutral-900 mb-3">Bewerbung erhalten!</h3>
        <p className="text-neutral-600 max-w-md mx-auto">
          Vielen Dank für Ihre Bewerbung. Wir melden uns zeitnah bei Ihnen.
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
    >
      <h3 className="text-2xl font-bold text-neutral-900 mb-2">Jetzt bewerben</h3>
      <p className="text-neutral-600 mb-8">Kurz ausfüllen – wir melden uns bei Ihnen.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="bew-name" className="block text-sm font-medium text-neutral-700 mb-2">
            Name *
          </label>
          <input
            id="bew-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
            placeholder="Vor- und Nachname"
          />
        </div>
        <div>
          <label htmlFor="bew-email" className="block text-sm font-medium text-neutral-700 mb-2">
            E-Mail *
          </label>
          <input
            id="bew-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
            placeholder="ihre@email.de"
          />
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
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
            placeholder="Optional"
          />
        </div>
        <div>
          <label htmlFor="bew-position" className="block text-sm font-medium text-neutral-700 mb-2">
            Position
          </label>
          <select
            id="bew-position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
          >
            <option value="">Bitte wählen</option>
            <option value="Karosseriebauer (m/w/d)">Karosseriebauer (m/w/d)</option>
            <option value="Fahrzeuglackierer (m/w/d)">Fahrzeuglackierer (m/w/d)</option>
            <option value="Ausbildung">Ausbildung</option>
            <option value="Initiativbewerbung">Initiativbewerbung</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="bew-nachricht" className="block text-sm font-medium text-neutral-700 mb-2">
          Nachricht *
        </label>
        <textarea
          id="bew-nachricht"
          name="nachricht"
          required
          rows={5}
          value={formData.nachricht}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
          placeholder="Kurz zu Ihrer Person und Motivation..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-bold rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? 'Wird gesendet...' : 'Bewerbung absenden'}
        <Send size={18} />
      </button>
    </motion.form>
  );
};
