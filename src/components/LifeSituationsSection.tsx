import React from 'react';
import { ArrowRight, UserCheck, Users, Briefcase, Award } from 'lucide-react';
import { LIFE_SITUATIONS } from '../data/companyData';

interface LifeSituationsSectionProps {
  onSelectSituation: (situationTitle: string) => void;
}

export const LifeSituationsSection: React.FC<LifeSituationsSectionProps> = ({ onSelectSituation }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'start':
        return <UserCheck className="w-5 h-5 text-[#C5A059]" />;
      case 'familie':
        return <Users className="w-5 h-5 text-[#C5A059]" />;
      case 'selbstaendig':
        return <Briefcase className="w-5 h-5 text-[#C5A059]" />;
      case 'ruhestand':
        return <Award className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <UserCheck className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="lebensphasen" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            <span>Orientierung nach Lebenslagen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0c1a2c] font-medium tracking-tight mb-4">
            Ihre Lebenssituation bestimmt den Plan – nicht umgekehrt.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Finanzentscheidungen sind keine isolierten Produkte, sondern Reaktionen auf Lebensabschnitte. Wir betrachten, wo Sie heute stehen und welche Meilensteine als Nächstes anstehen.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LIFE_SITUATIONS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FBFBFA] border border-slate-200 p-7 sm:p-8 rounded-sm hover:border-[#C5A059]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded bg-white border border-slate-200 shadow-2xs">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Fokusphase
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#0c1a2c] mb-1">
                  {item.title}
                </h3>
                <div className="text-xs text-[#C5A059] font-medium mb-4">
                  {item.subtitle}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Topics */}
                <div className="border-t border-slate-200/80 pt-4 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Typische Fragestellungen:
                  </div>
                  <ul className="space-y-1.5">
                    {item.keyTopics.map((topic, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer / CTA */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 italic max-w-[200px] sm:max-w-xs">
                  {item.recommendation}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectSituation(item.title)}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-sm bg-[#0c1a2c] text-white text-xs font-semibold hover:bg-[#1a2d47] transition-all cursor-pointer border border-[#C5A059]/40 hover:border-[#C5A059] shadow-xs group"
                >
                  <span>Gespräch anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
