
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-purple-900/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Early Adopters Say</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white/[0.03] p-8 rounded-3xl border border-white/10 relative">
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-purple-500/30" />
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-purple-400">{t.role}</p>
                </div>
              </div>
              <p className="text-purple-100/70 italic leading-relaxed">
                "{t.content}"
              </p>
              <div className="absolute top-6 right-8 text-purple-900/40 text-6xl font-serif">
                &rdquo;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
