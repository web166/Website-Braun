import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            <span>Häufige Fragen &amp; Antworten</span>
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0c1a2c] font-medium tracking-tight mb-4">
            Klarheit vor dem ersten Gespräch.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Transparenz beginnt bei den Fragen, die viele Kunden sich vorab stellen. Hier finden Sie offene und verlässliche Antworten zu unserer Arbeitsweise.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-sm bg-[#FBFBFA] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-medium text-[#0c1a2c]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C5A059]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Ihre konkrete Frage ist nicht dabei? Gerne beantworten wir Ihre Anliegen im direkten Austausch: 
          <a href="tel:+497919451959" className="text-[#C5A059] font-medium hover:underline ml-1">
            +49 (791) 94519-59
          </a>
        </div>

      </div>
    </section>
  );
};
