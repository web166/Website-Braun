import React, { useState, useEffect } from 'react';
import { ShieldCheck, Clock3, TrendingUp, Home, CheckCircle2, ArrowRight, AlertCircle, Info, Scale, Check } from 'lucide-react';
import { SERVICES, COMPANY_DETAILS } from '../data/companyData';
import { ServiceCategory } from '../types';

interface ServicesSectionProps {
  activeTab?: ServiceCategory;
  onTabChange?: (category: ServiceCategory) => void;
  onSelectServiceForContact: (category: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  activeTab: externalActiveTab,
  onTabChange,
  onSelectServiceForContact
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState<ServiceCategory>('absicherung');

  const currentTab = externalActiveTab || internalActiveTab;

  const handleTabChange = (category: ServiceCategory) => {
    if (onTabChange) {
      onTabChange(category);
    } else {
      setInternalActiveTab(category);
    }
  };

  const serviceImages: Record<string, string> = {
    absicherung: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    vorsorge: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    vermoegen: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1000&q=80',
    finanzierung: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
  };

  const getIcon = (id: ServiceCategory) => {
    switch (id) {
      case 'absicherung':
        return <ShieldCheck className="w-5 h-5 text-[#C5A059]" />;
      case 'vorsorge':
        return <Clock3 className="w-5 h-5 text-[#C5A059]" />;
      case 'vermoegen':
        return <TrendingUp className="w-5 h-5 text-[#C5A059]" />;
      case 'finanzierung':
        return <Home className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  const activeService = SERVICES.find((s) => s.id === currentTab) || SERVICES[0];

  return (
    <section id="leistungen" className="py-20 bg-[#FBFBFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            <span>Geprüfte Vermittlertätigkeiten</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0c1a2c] font-medium tracking-tight mb-4">
            Strukturierte Beratung mit gesetzlicher Zulassung.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Als inhabergeführte Finanzdienstleistungs-GmbH begleiten wir Sie in vier klar definierten, erlaubnispflichtigen Tätigkeitsbereichen nach Gewerbeordnung (GewO). Kein anonymer Vergleichsrechner, sondern persönliche Haftung und verlässliche Betreuung in Schwäbisch Hall.
          </p>
        </div>

        {/* 3 Statutory Permits Overview Grid (Professional, No AI-Slop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-2xs hover:border-[#C5A059]/60 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-[#0c1a2c] border border-slate-200">
                § 34d Abs. 1 GewO
              </span>
              <Scale className="w-4 h-4 text-[#C5A059]" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#0c1a2c] mb-1">
              Versicherungsmakler
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gesetzlicher <strong>Sachwalter des Kunden</strong>. Wir sind an keine Versicherungsgesellschaft gebunden, prüfen Marktbedingungen unabhängig und vertreten Ihre Interessen auch im Schadensfall.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-2xs hover:border-[#C5A059]/60 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-[#0c1a2c] border border-slate-200">
                § 34f Abs. 1 S. 1 Nr. 1 GewO
              </span>
              <TrendingUp className="w-4 h-4 text-[#C5A059]" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#0c1a2c] mb-1">
              Finanzanlagenvermittler
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Erlaubnis zur Vermittlung von <strong>Anteilen an offenen Investmentvermögen (Fonds &amp; ETFs)</strong>. Gesetzliche Geeignetheitsprüfung, Risikoprofilierung und vollständige Kostentransparenz nach FinVermV.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-2xs hover:border-[#C5A059]/60 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-[#0c1a2c] border border-slate-200">
                § 34i Abs. 1 GewO
              </span>
              <Home className="w-4 h-4 text-[#C5A059]" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#0c1a2c] mb-1">
              Immobiliardarlehensvermittler
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unabhängige Vermittlung von <strong>Baufinanzierungen &amp; Realkrediten</strong>. Vergleich von Zinskonditionen hunderter Bankpartner, Einbindung staatlicher Fördermittel (KfW) und langfristige Zinsbindung.
            </p>
          </div>
        </div>

        {/* Desktop & Mobile Tab Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-slate-200/80 rounded-sm mb-8">
          {SERVICES.map((s) => {
            const isActive = currentTab === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => handleTabChange(s.id)}
                className={`flex items-center space-x-2.5 px-4 py-3 rounded-xs text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#0c1a2c] shadow-xs font-bold border-b-2 border-[#C5A059]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-medium'
                }`}
              >
                <div className="shrink-0">{getIcon(s.id)}</div>
                <span className="text-xs sm:text-sm truncate">{s.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Card with Visual Image */}
        <div className="bg-white rounded-sm border border-slate-200/90 shadow-sm overflow-hidden">
          
          {/* Top Visual Banner with Image */}
          <div className="h-48 sm:h-64 w-full relative overflow-hidden">
            <img
              src={serviceImages[activeService.id]}
              alt={activeService.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2c] via-[#0c1a2c]/50 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-xs font-mono font-medium text-[#E5D1A4] uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 border border-[#C5A059]/40 mb-2 inline-block">
                  {activeService.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  {activeService.title}
                </h3>
              </div>
              <span className="text-xs text-slate-300 font-mono hidden sm:block">
                Schleicher &amp; Braun GmbH • Schwäbisch Hall
              </span>
            </div>
          </div>

          <div className="p-7 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left 7 Columns: Description & Offerings */}
              <div className="lg:col-span-7">
                <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
                  {activeService.shortDesc}
                </p>

                <div className="border-t border-slate-100 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3.5">
                    Konkret erfasste Beratungs- &amp; Vermittlungsleistungen:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {activeService.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consultation Scope */}
                <div className="bg-slate-50 p-4 sm:p-5 rounded border border-slate-200/80 mb-6">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-900 mb-2">
                    <Info className="w-3.5 h-3.5 text-slate-600" />
                    <span>Unser Vorgehen in diesem Bereich:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {activeService.scope.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0c1a2c]"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <button
                  type="button"
                  onClick={() => onSelectServiceForContact(activeService.title)}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0c1a2c] text-white text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-[#1a2d47] active:bg-[#07101c] transition-colors cursor-pointer group shadow-xs"
                >
                  <span>Beratung zu „{activeService.title.split('&')[0].trim()}“ anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right 5 Columns: Transparency & Legal Notes */}
              <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-7 rounded border border-slate-200 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold tracking-wider uppercase text-slate-800 mb-3">
                    <AlertCircle className="w-4 h-4 text-[#C5A059]" />
                    <span>Gesetzlicher Verbraucher-Hinweis</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {activeService.importantNotice}
                  </p>

                  <div className="border-t border-slate-200 pt-4 space-y-3">
                    <div className="text-xs font-semibold text-slate-900">
                      Garantierte Grundsätze bei Schleicher &amp; Braun:
                    </div>
                    <div className="space-y-2 text-xs text-slate-600">
                      <p className="flex items-start space-x-2">
                        <span className="text-[#C5A059] font-bold">✓</span>
                        <span>Kein Verkaufsdruck, kein Abschlusszwang im Erstgespräch</span>
                      </p>
                      <p className="flex items-start space-x-2">
                        <span className="text-[#C5A059] font-bold">✓</span>
                        <span>Ausführliche Prüfung bereits vorhandener Verträge auf Doppelversicherung</span>
                      </p>
                      <p className="flex items-start space-x-2">
                        <span className="text-[#C5A059] font-bold">✓</span>
                        <span>Vollständige Offenlegung sämtlicher Vergütungen vor Vertragsunterzeichnung</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500 font-mono">
                  Zuständige Kammer: IHK Heilbronn-Franken
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Note on External Comparison Calculators */}
        <div className="mt-8 p-4 rounded bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 flex items-start space-x-3">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Transparenz-Hinweis:</strong> Wir distanzieren uns ausdrücklich von unpersönlichen Online-Vergleichsrechnern, die oft nur wenige Kooperationspartner berücksichtigen. Jede Empfehlung von Schleicher &amp; Braun basiert auf einer individuellen Prüfung Ihrer persönlichen Situation und den tatsächlichen Versicherungsbedingungen.
          </p>
        </div>

      </div>
    </section>
  );
};
