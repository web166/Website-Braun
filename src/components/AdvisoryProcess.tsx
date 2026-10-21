import React from 'react';
import { ArrowRight, MessageSquare, Compass, Search, Lightbulb, CheckCircle, RefreshCw } from 'lucide-react';

interface AdvisoryProcessProps {
  onStartInquiry: () => void;
}

export const AdvisoryProcess: React.FC<AdvisoryProcessProps> = ({ onStartInquiry }) => {
  const steps = [
    {
      num: '01',
      title: 'Unverbindliches Erstgespräch',
      desc: 'Wir lernen uns kennen, klären Ihre drängendsten Fragen und definieren die Zielsetzung. Ohne Verkaufsdruck und ohne Vorabkosten.',
      icon: <MessageSquare className="w-5 h-5 text-[#C5A059]" />
    },
    {
      num: '02',
      title: 'Strukturierte Bedarfsermittlung',
      desc: 'Erfassung Ihrer persönlichen Lebenssituation, Ihres Zeithorizonts, bestehender Verbindlichkeiten und Ihrer individuellen Risikobereitschaft.',
      icon: <Compass className="w-5 h-5 text-[#C5A059]" />
    },
    {
      num: '03',
      title: 'Bestands- & Marktanalyse',
      desc: 'Wir prüfen bestehende Policen auf Deckungslücken oder Sparpotenziale und vergleichen passende Angebote des gesamten zugänglichen Marktes.',
      icon: <Search className="w-5 h-5 text-[#C5A059]" />
    },
    {
      num: '04',
      title: 'Verständliche Besprechung',
      desc: 'Wir stellen Ihnen konkrete Lösungsansätze vor, erläutern Vor- und Nachteile sowie sämtliche Kosten in einer für Laien verständlichen Sprache.',
      icon: <Lightbulb className="w-5 h-5 text-[#C5A059]" />
    },
    {
      num: '05',
      title: 'Entscheidung & Umsetzung',
      desc: 'Sie treffen Ihre Entscheidung in Ruhe. Erst wenn alles für Sie stimmig ist, übernehmen wir die Einreichung und formalen Formalitäten.',
      icon: <CheckCircle className="w-5 h-5 text-[#C5A059]" />
    },
    {
      num: '06',
      title: 'Fortlaufende Betreuung',
      desc: 'Lebensumstände ändern sich: Wir bleiben Ihr verlässlicher Ansprechpartner für Schadensfälle, Vertragsanpassungen und neue Lebensphasen.',
      icon: <RefreshCw className="w-5 h-5 text-[#C5A059]" />
    }
  ];

  return (
    <section id="ablauf" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            <span>Verlässlicher Ablauf</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0c1a2c] font-medium tracking-tight mb-4">
            In 6 Schritten zu geordneten Finanzen.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Ein solider Finanz- und Vorsorgeplan entsteht durch Methode und Sorgfalt, nicht durch Zufall. Erfahren Sie, wie wir gemeinsam von der ersten Bestandsaufnahme zur maßgeschneiderten Lösung gelangen.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#FBFBFA] border border-slate-200 p-6 rounded-sm hover:border-[#C5A059]/40 hover:bg-white transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-slate-300">
                    {step.num}
                  </span>
                  <div className="p-2 rounded bg-white border border-slate-200 shadow-2xs">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-serif text-lg font-semibold text-[#0c1a2c] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Phase {step.num}</span>
                <span>Schleicher &amp; Braun</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="bg-[#0c1a2c] text-white p-7 sm:p-9 rounded-sm border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-medium text-white mb-1">
              Bereit für den ersten Schritt?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Vereinbaren Sie ein unverbindliches Kennenlerngespräch in unseren Geschäftsräumen in Schwäbisch Hall oder auf Wunsch telefonisch.
            </p>
          </div>
          <button
            onClick={onStartInquiry}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#C5A059] text-[#0c1a2c] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#d4b067] transition-colors shrink-0 cursor-pointer shadow-md"
          >
            <span>Jetzt Erstgespräch planen</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
