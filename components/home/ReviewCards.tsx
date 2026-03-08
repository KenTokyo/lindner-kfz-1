import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../../data/reviews';

export const ReviewCards: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
            Ausgewählte Stimmen
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Was unsere Kunden über uns sagen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 flex flex-col"
            >
              <Quote size={24} className="text-neutral-200 mb-4 shrink-0" />

              <p className="text-neutral-700 leading-relaxed mb-6 flex-grow">
                „{review.quote}"
              </p>

              <div className="mt-auto">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-900 text-sm">{review.name}</span>
                  <span className="text-xs text-neutral-400">{review.source}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
