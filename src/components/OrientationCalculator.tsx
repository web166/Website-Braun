import React, { useState } from 'react';
import { CheckSquare, ArrowRight, RotateCcw, FileText, Sparkles, Send, ShieldAlert, Check } from 'lucide-react';

interface OrientationCalculatorProps {
  onTransferToContact: (data: { situation: string; topics: string[]; status: string; summary: string }) => void;
}

export const OrientationCalculator: React.FC<OrientationCalculatorProps> = ({ onTransferToContact }) => {
  const [selectedSituation, setSelectedSituation] = useState<string>('Familie mit Kindern');
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Altersvorsorge & Sparpläne', 'Absicherung / Berufsunfähigkeit']);
  const [currentStatus, setCurrentStatus] = useState<string>('Bestehende Verträge überprüfen');
  const [copied, setCopied] = useState<boolean>(false);

  const situations = [
    'Berufsstart / Junge Erwachsene',
    'Familie mit Kindern',
    'Selbstständig / Freiberufler',
    'Immobilieninteressent / Bauherr',
    'Ruhestandsphase / 55+'
  ];

  const availableTopics = [
    'Absicherung / Berufsunfähigkeit',
    'Altersvorsorge & Sparpläne',
    'Vermögensaufbau mit ETFs / Fonds',
    'Immobilienfinanzierung / Zinsbindung',
    'Krankenversicherung / Zusatzschutz',
    'Gewerbliche Absicherung'
  ];

  const statusOptions = [
    'Erste allgemeine Orientierung',
    'Bestehende Verträge überprüfen',
    'Konkrete Entscheidung steht an (z.B. Immobilienkauf)'
  ];

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      if (selectedTopics.length > 1) {
        setSelectedTopics(selectedTopics.filter((t) => t !== topic));
      }
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const getRecommendedDocuments = () => {
    const docs: string[] = [];
    if (selectedTopics.some((t) => t.includes('Altersvorsorge') || t.includes('Absicherung'))) {
      docs.push('Aktuelle Renteninformation der Deutschen Rentenversicherung');
      docs.push('Übersicht bestehender Lebens- & Rentenversicherungspolicen');
    }
    if (selectedTopics.some((t) => t.includes('Immobilienfinanzierung'))) {
      docs.push('Nachweis über Eigenkapital & letzte 3 Gehaltsabrechnungen');
      docs.push('Objektdaten (Exposé, Kaufpreis, Grundbuchauszug falls vorhanden)');
    }
    if (selectedTopics.some((t) => t.includes('Vermögensaufbau'))) {
      docs.push('Bestehende Depotauszüge zur Kosten- & Risikoprüfung');
    }
    if (selectedTopics.some((t) => t.includes('Krankenversicherung'))) {
      docs.push('Angaben zur bisherigen gesetzlichen oder privaten Krankenversicherung');
    }
    if (docs.length === 0) {
      docs.push('Bestehende Versicherungsordner oder Policenübersicht');
    }
    return Array.from(new Set(docs));
  };

  const handleTransfer = () => {
    const summary = `Guten Tag Herr Braun, Herr Schleicher,\n\nich interessiere mich für eine unverbindliche Beratung.\n- Lebenssituation: ${selectedSituation}\n- Relevante Themen: ${selectedTopics.join(', ')}\n- Ausgangssituation: ${currentStatus}\n\nBitte teilen Sie mir mögliche Termine für ein Erstgespräch mit.`;
    onTransferToContact({
      situation: selectedSituation,
      topics: selectedTopics,
      status: currentStatus,
      summary
    });
  };

  const handleReset = () => {
    setSelectedSituation('Familie mit Kindern');
    setSelectedTopics(['Altersvorsorge & Sparpläne', 'Absicherung / Berufsunfähigkeit']);
    setCurrentStatus('Bestehende Verträge überprüfen');
  };

  return (
    <section id="bedarfs-check" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            <span>Interaktiver Schnell-Check</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4 text-white">
            Ihr persönlicher Orientierungs-Kompass.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            In wenigen Klicks zur passenden Vorbereitung: Wählen Sie Ihre aktuelle Lebensphase und Ihre Schwerpunkte. Sie erhalten sofort eine Einschätzung, welche Unterlagen für ein Erstgespräch nützlich sind.
          </p>
        </div>

        {/* 2 Columns: Configurator & Result Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3 Steps Form */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 p-6 sm:p-8 rounded-sm shadow-xl space-y-8">
            
            {/* Step 1: Lebenssituation */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-[#0c1a2c] border border-[#C5A059] text-[#C5A059] flex items-center justify-center text-[11px] font-mono">1</span>
                  <span>Ihre aktuelle Lebensphase:</span>
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {situations.map((sit) => (
                  <button
                    key={sit}
                    type="button"
                    onClick={() => setSelectedSituation(sit)}
                    className={`text-left px-3.5 py-2.5 rounded text-xs transition-all duration-150 cursor-pointer border ${
                      selectedSituation === sit
                        ? 'bg-[#C5A059]/15 border-[#C5A059] text-white font-medium'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {sit}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Themengebiete */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-[#0c1a2c] border border-[#C5A059] text-[#C5A059] flex items-center justify-center text-[11px] font-mono">2</span>
                  <span>Wichtigste Fragestellungen (Mehrfachauswahl):</span>
                </label>
                <span className="text-[11px] text-slate-400">
                  {selectedTopics.length} gewählt
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableTopics.map((topic) => {
                  const isChecked = selectedTopics.includes(topic);
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => toggleTopic(topic)}
                      className={`text-left px-3.5 py-2.5 rounded text-xs transition-all duration-150 cursor-pointer border flex items-center justify-between ${
                        isChecked
                          ? 'bg-slate-800 border-[#C5A059] text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <span className="truncate pr-2">{topic}</span>
                      <div className={`w-4 h-4 rounded-xs border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#C5A059] border-[#C5A059] text-[#0c1a2c]' : 'border-slate-700 bg-slate-950'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Aktueller Status */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-[#0c1a2c] border border-[#C5A059] text-[#C5A059] flex items-center justify-center text-[11px] font-mono">3</span>
                  <span>Ihr Ausgangsstatus:</span>
                </label>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {statusOptions.map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setCurrentStatus(st)}
                    className={`text-left px-3.5 py-2.5 rounded text-xs transition-all duration-150 cursor-pointer border ${
                      currentStatus === st
                        ? 'bg-[#C5A059]/15 border-[#C5A059] text-white font-medium'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Reset Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center space-x-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Auswahl zurücksetzen</span>
              </button>
            </div>

          </div>

          {/* Right Column: Dynamic Consultation Dossier Preview */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#122238] border border-slate-700/80 p-7 sm:p-8 rounded-sm shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-xs font-serif uppercase tracking-wider text-white font-semibold">
                    Ihre Gesprächsvorbereitung
                  </span>
                </div>
                <span className="text-[10px] text-[#C5A059] font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  SCHLEICHER &amp; BRAUN
                </span>
              </div>

              {/* Selected Overview */}
              <div className="py-5 space-y-3 text-xs border-b border-slate-800">
                <div>
                  <span className="text-slate-400">Lebenslage:</span>
                  <div className="text-white font-medium mt-0.5">{selectedSituation}</div>
                </div>
                <div>
                  <span className="text-slate-400">Fokusthemen:</span>
                  <div className="text-slate-200 font-medium mt-0.5 flex flex-wrap gap-1">
                    {selectedTopics.map((t) => (
                      <span key={t} className="bg-slate-800 text-[#E5D1A4] px-2 py-0.5 rounded text-[11px] border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-slate-400">Ausgangssituation:</span>
                  <div className="text-slate-300 mt-0.5">{currentStatus}</div>
                </div>
              </div>

              {/* Recommended Documents Checklist */}
              <div className="py-5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#C5A059] mb-3 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sinnvolle Vorbereitung / Unterlagen:</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {getRecommendedDocuments().map((doc, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0"></span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Transfer to Contact CTA */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <button
                type="button"
                onClick={handleTransfer}
                className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-[#C5A059] text-[#0c1a2c] font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-[#d4b067] active:bg-[#b08c43] transition-colors cursor-pointer shadow-lg shadow-black/30 group"
              >
                <span>Angaben ins Kontaktformular übernehmen</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-slate-400 text-center leading-tight">
                Keine automatische Speicherung oder Datenweitergabe. Die Eingaben werden lediglich in Ihren Anfrageentwurf unten eingesetzt.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
