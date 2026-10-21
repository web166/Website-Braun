import React from 'react';
import { Scale, Check, X, Minus, HelpCircle, Shield, Award } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const TransparencyMatrix: React.FC = () => {
  const criteria = [
    {
      title: 'Rechtliche Rolle & Pflicht',
      makler: 'Sachwalter des Kunden: Gesetzlich verpflichtet, ausschließlich Ihre Interessen zu vertreten (BGH-Grundsatzurteil).',
      vertreter: 'Vertreter des Anbieters: Steht rechtlich im Lager einer bestimmten Versicherung oder Bank.',
      portal: 'Vergleichsportal / Leadverkäufer: Standardisierte Masken, keine individuelle Rechtsvertretung.'
    },
    {
      title: 'Auswahl am Markt',
      makler: 'Freie Anbieterauswahl aus Hunderten von Gesellschaften, Tarifen und Bankpartnern.',
      vertreter: 'Beschränkt auf das konzerneigene Produktsortiment des Arbeitgebers.',
      portal: 'Nur Gesellschaften, die Schnittstellen und Werbeprovisionen an das Portal zahlen.'
    },
    {
      title: 'Begleitung im Leistungs- & Schadensfall',
      makler: 'Persönliche Betreuung in Schwäbisch Hall: Wir unterstützen bei der Schadenregulierung und Durchsetzung.',
      vertreter: 'Oft Weiterleitung an das zentrale Schaden-Callcenter der Gesellschaft.',
      portal: 'Keine persönliche Vor-Ort-Begleitung. Der Kunde muss sich direkt mit der Versicherung auseinandersetzen.'
    },
    {
      title: 'Vergütung & Kosten',
      makler: 'Transparente Offenlegung vor Abschluss. Keine versteckten Gebühren im Erstgespräch.',
      vertreter: 'In den Konzernbeiträgen eingerechnet, selten im Detail aufgeschlüsselt.',
      portal: 'Finanziert über Werbeeinnahmen und Provisionen, oft sortiert nach Margen.'
    },
    {
      title: 'Gesetzliche Haftung für die Beratung',
      makler: 'Volle Dokumentationspflicht und eigene Vermögensschadenhaftpflichtversicherung zu Ihrem Schutz.',
      vertreter: 'Haftung liegt formal beim vertretenen Konzern.',
      portal: 'Häufig weitreichende Haftungsausschlüsse für Berechnungsfehler in den AGB.'
    }
  ];

  return (
    <section id="transparenz" className="py-20 bg-[#FBFBFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            <span>Rechtliche Transparenz</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0c1a2c] font-medium tracking-tight mb-4">
            Der entscheidende Unterschied: Wer vertritt wirklich Ihre Interessen?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            In Deutschland entscheidet der rechtliche Status über die Ausrichtung der Beratung. Als freie Makler nach § 34d GewO sind wir gesetzlich Ihr Sachwalter – nicht der Vertreter einer Versicherungsgesellschaft.
          </p>
        </div>

        {/* Comparison Table / Matrix */}
        <div className="bg-white rounded-sm border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 uppercase tracking-wider">
            <div className="p-4 md:col-span-4 flex items-center space-x-2">
              <Scale className="w-4 h-4 text-slate-500" />
              <span>Kriterium</span>
            </div>
            <div className="p-4 md:col-span-4 bg-[#0c1a2c] text-[#C5A059] flex items-center justify-between border-x border-[#0c1a2c]">
              <span>Schleicher &amp; Braun (Freier Makler)</span>
              <span className="text-[10px] bg-[#C5A059]/20 text-[#C5A059] px-2 py-0.5 rounded font-mono">SACHWALTER</span>
            </div>
            <div className="p-4 md:col-span-4 flex items-center justify-between text-slate-500">
              <span>Gebundener Vertreter / Onlineportal</span>
              <span className="text-[10px] text-slate-400 font-mono">STANDARD</span>
            </div>
          </div>

          {/* Matrix Rows */}
          <div className="divide-y divide-slate-100">
            {criteria.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm">
                
                {/* Criterion Name */}
                <div className="p-4 md:col-span-4 bg-slate-50/50 font-semibold text-slate-900 flex items-center">
                  <span>{item.title}</span>
                </div>

                {/* Schleicher & Braun Column (Highlighted) */}
                <div className="p-4 md:col-span-4 bg-[#0c1a2c]/[0.02] border-x border-slate-200/80 text-slate-800 flex items-start space-x-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span className="leading-relaxed font-normal">{item.makler}</span>
                </div>

                {/* Other Providers Column */}
                <div className="p-4 md:col-span-4 text-slate-600 bg-white space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-slate-400 font-mono text-xs mt-0.5">•</span>
                    <span className="leading-relaxed text-xs">{item.vertreter}</span>
                  </div>
                  <div className="flex items-start space-x-2 pt-1 border-t border-slate-100">
                    <span className="text-slate-400 font-mono text-xs mt-0.5">•</span>
                    <span className="leading-relaxed text-xs text-slate-500">{item.portal}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="p-5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-[#C5A059]" />
              <span>Grundlage: § 34d Abs. 1 GewO i.V.m. BGH-Sachwalterurteil vom 22.05.1985 (IVa ZR 190/83).</span>
            </span>
            <span className="font-mono text-[11px] text-slate-400">
              Schleicher &amp; Braun GmbH • Schwäbisch Hall
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
