import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../../data/services';

interface ServiceFAQProps {
  faqs: FAQItem[];
}

export const ServiceFAQ: React.FC<ServiceFAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-neutral-50 rounded-3xl">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
            Häufige Fragen
          </h2>
          <p className="text-neutral-600">
            Antworten auf die wichtigsten Fragen rund um unsere Leistungen.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-neutral-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-neutral-50 transition-colors"
              >
                <span className="font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} role="region" className="px-5 pb-5">
                  <p className="text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
