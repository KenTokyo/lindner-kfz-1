import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../../data/reviews';

export const ReviewCards: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
            Ausgewählte Stimmen
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Was unsere Kunden über uns sagen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12)' }}
              className={`relative overflow-hidden rounded-2xl p-7 border border-neutral-100 flex flex-col transition-colors duration-300 ${
                index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'
              }`}
            >
              {/* Gradient accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-300" />

              {/* Decorative watermark quote icon */}
              <Quote
                size={48}
                className="absolute top-4 right-4 text-neutral-100 pointer-events-none"
                strokeWidth={1.5}
              />

              <p className="relative text-neutral-700 leading-relaxed mb-8 flex-grow text-[15px]">
                &bdquo;{review.quote}&ldquo;
              </p>

              <div className="relative mt-auto">
                {/* Star rating with subtle glow background */}
                <div className="inline-flex gap-0.5 mb-4 px-2.5 py-1 rounded-full bg-amber-50">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {/* Initials avatar circle */}
                  <div className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-neutral-900 text-sm leading-tight">
                      {review.name}
                    </span>
                    <span className="text-xs text-neutral-400 mt-0.5">
                      {review.source}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
