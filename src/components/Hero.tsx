import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ModalType } from '../types';

interface HeroProps {
  onNavigateContact: () => void;
  onOpenModal?: (type: ModalType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateContact }) => {
  return (
    <section className="relative bg-[#0c1a2c] text-white overflow-hidden min-h-[90vh] lg:min-h-screen flex items-center pt-36 sm:pt-40 lg:pt-44 pb-20 lg:pb-28">
      
      {/* Background Team Image: Spans the ENTIRE header fullscreen with 40% reduced blue transparency */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/aistudio/Teambild_51c5cc45.jpg"
          alt="Schleicher & Braun Team – Hand in Hand für Ihre finanzielle Sicherheit"
          className="w-full h-full object-cover object-center sm:object-[center_30%] opacity-90 lg:opacity-95 scale-100 transition-all duration-700 filter saturate-[1.10] contrast-[1.05]"
        />
        {/* Layered corporate navy blue gradients with 40% reduced opacity for much clearer photo visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2c]/60 via-[#0c1a2c]/45 to-[#0c1a2c]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2c]/60 via-transparent to-[#0c1a2c]/45"></div>
        <div className="absolute inset-0 bg-[#0c1a2c]/10"></div>
      </div>

      {/* Subtle architectural grid lines background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Decorative hairline architectural lines */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-[#C5A059]/20 via-[#C5A059]/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Left Content: Positioning, Headline, CTAs, and Core Principles */}
        <div className="max-w-2xl lg:max-w-3xl">
          <div className="flex flex-col items-start">
            
            {/* Trust Pill / Location Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-[#C5A059]/30 text-xs text-[#E5D1A4] font-medium tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
              <span>Schwäbisch Hall &amp; Region</span>
              <span className="text-slate-600">•</span>
              <span>Persönliche Betreuung</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15] mb-6 drop-shadow-md">
              Finanzielle Entscheidungen <br className="hidden sm:inline" />
              <span className="italic text-[#C5A059] font-normal">verdienen Vertrauen.</span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mb-8 drop-shadow-sm">
              Schleicher &amp; Braun begleitet Privatkunden, Familien und Unternehmer bei Fragen zu Absicherung, Altersvorsorge, Vermögensaufbau und Immobilienfinanzierung – persönlich, verständlich und ohne anonyme Verkaufszwänge.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onNavigateContact}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-sm bg-[#C5A059] text-[#0c1a2c] text-sm font-bold tracking-wider uppercase hover:bg-[#d4b067] active:bg-[#b08c43] transition-all duration-200 shadow-lg shadow-black/20 cursor-pointer group"
              >
                <span>Unverbindliches Erstgespräch vereinbaren</span>
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#leistungen"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm bg-slate-800/90 text-slate-200 text-sm font-medium tracking-wide border border-slate-700/80 hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all duration-200"
              >
                <span>Leistungsspektrum &amp; Zulassungen</span>
              </a>
            </div>

            {/* Quick Guarantees & Realities */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/90 w-full text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Gesetzlicher Maklerstatus</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Freie Anbieterauswahl</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Feste Ansprechpartner</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
