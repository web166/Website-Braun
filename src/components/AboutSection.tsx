import React from 'react';
import { Building2, User, Award, ShieldCheck, MapPin, CheckCircle, Scale } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { ModalType } from '../types';

interface AboutSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="ueber-uns" className="py-20 bg-[#FBFBFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            <span>Über Schleicher &amp; Braun</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0c1a2c] font-medium tracking-tight mb-4">
            Erfahrung, Regionalität und persönliche Verantwortung.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Hinter Schleicher &amp; Braun GmbH stehen keine anonymen Vorstände, sondern die beiden Geschäftsführer Stefan Braun und Thomas Schleicher – mit fester Verankerung in Schwäbisch Hall und jahrzehntelanger Praxis im Finanzwesen.
          </p>
        </div>

        {/* 2 Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Authentic Profile Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* MD Stefan Braun */}
            <div className="bg-white border border-slate-200 p-6 sm:p-7 rounded-sm shadow-xs flex items-start space-x-5">
              <div className="w-14 h-14 rounded bg-[#0c1a2c] text-[#C5A059] flex items-center justify-center shrink-0 border border-[#C5A059]/40 font-serif text-xl font-bold">
                SB
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#C5A059]">
                  Geschäftsführer
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#0c1a2c]">
                  Stefan Braun
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed pt-1">
                  Über 30 Jahre Erfahrung in der ganzheitlichen Finanz- und Vorsorgeberatung. Spezialisiert auf persönliche Risikoanalyse, Altersvorsorgekonzepte und maßgeschneiderte Finanzarchitektur.
                </p>
              </div>
            </div>

            {/* MD Thomas Schleicher */}
            <div className="bg-white border border-slate-200 p-6 sm:p-7 rounded-sm shadow-xs flex items-start space-x-5">
              <div className="w-14 h-14 rounded bg-[#0c1a2c] text-[#C5A059] flex items-center justify-center shrink-0 border border-[#C5A059]/40 font-serif text-xl font-bold">
                TS
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#C5A059]">
                  Geschäftsführer
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#0c1a2c]">
                  Thomas Schleicher
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed pt-1">
                  Langjährige Expertise in der Vermittlung von Sachwerten, Baufinanzierungen und Unternehmensabsicherung. Ihr Ansprechpartner für strukturierte Vermögensfragen und Immobiliardarlehen.
                </p>
              </div>
            </div>

            {/* Standort Schwäbisch Hall */}
            <div className="p-4 rounded bg-slate-100 border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Büro: Stauffenbergstraße 35–37, 74523 Schwäbisch Hall</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">IHK Heilbronn-Franken</span>
            </div>

          </div>

          {/* Right Column: Values & Core Philosophy */}
          <div className="lg:col-span-6 bg-white border border-slate-200 p-8 sm:p-10 rounded-sm shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-medium text-[#0c1a2c]">
              Unsere Grundsätze für Ihre finanzielle Sicherheit
            </h3>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              In einer Branche, die oft von kurzfristigen Provisionsinteressen und aggressiven Vertriebsvorgaben geprägt ist, setzen wir bewusst auf Beständigkeit, Klarheit und eine partnerschaftliche Zusammenarbeit auf Augenhöhe.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#0c1a2c] text-[#C5A059] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Transparenz vor Abschluss
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Wir legen Vergütungsmodelle, Kosten und Risiken vollständig offen, bevor Sie irgendeine Verpflichtung eingehen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#0c1a2c] text-[#C5A059] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Keine spekulativen Versprechungen
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Wir versprechen weder garantierte Höchstrenditen noch unfehlbare Markttrends. Jede Anlageentscheidung erfordert eine ehrliche Auseinandersetzung mit Risiken.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#0c1a2c] text-[#C5A059] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Echte Inhaberberatung
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Sie sprechen direkt mit den Entscheidungsträgern des Unternehmens und haben über Jahre hinweg denselben verlässlichen Ansprechpartner.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onOpenModal('erstinformation')}
                className="text-xs font-semibold text-[#0c1a2c] hover:text-[#C5A059] transition-colors underline decoration-slate-300 underline-offset-4 cursor-pointer"
              >
                Gewerberechtliche Erstinformation einsehen →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
