import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, Scale } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { ModalType } from '../types';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
  onNavigateContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal, onNavigateContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081220] text-slate-300 border-t border-slate-800 text-xs">
      
      {/* Top Footer with 4 Columns */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/aistudio/logo-transparent.png"
                alt="Schleicher & Braun GmbH"
                className="h-16 w-auto object-contain bg-white/95 p-1 rounded-sm shadow-sm"
              />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Persönliche Beratung und individuelle Lösungen in den Bereichen Versicherungen, finanzielle Vorsorge, Vermögensaufbau und Baufinanzierung in Schwäbisch Hall.
            </p>

            <div className="pt-2 text-[11px] text-[#C5A059] flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zertifizierter Maklerstatus nach § 34d, § 34f, § 34i GewO</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2.5 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Themen &amp; Navigation
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#leistungen" className="hover:text-white transition-colors">
                  Leistungsspektrum
                </a>
              </li>
              <li>
                <a href="#lebensphasen" className="hover:text-white transition-colors">
                  Beratung nach Lebensphasen
                </a>
              </li>
              <li>
                <a href="#bedarfs-check" className="hover:text-white transition-colors">
                  Bedarfs- &amp; Orientierungs-Check
                </a>
              </li>
              <li>
                <a href="#transparenz" className="hover:text-white transition-colors">
                  Maklerstatus vs. Bankvertreter
                </a>
              </li>
              <li>
                <a href="#ablauf" className="hover:text-white transition-colors">
                  Der 6-Schritte-Ablauf
                </a>
              </li>
              <li>
                <a href="#ueber-uns" className="hover:text-white transition-colors">
                  Über Stefan Braun &amp; Thomas Schleicher
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Häufige Fragen (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Office (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Standort &amp; Kontakt
            </div>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 shrink-0" />
                <span>
                  {COMPANY_DETAILS.officeAddress.street}
                  <br />
                  {COMPANY_DETAILS.officeAddress.zip} {COMPANY_DETAILS.officeAddress.city}
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone.replace(/[\s()-]/g, '')}`} className="hover:text-white">
                  {COMPANY_DETAILS.phone}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white">
                  {COMPANY_DETAILS.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onNavigateContact}
                className="px-3.5 py-2 rounded-xs bg-slate-800 text-white text-[11px] font-semibold tracking-wider uppercase hover:bg-slate-700 transition-colors cursor-pointer border border-slate-700"
              >
                Termin anfragen
              </button>
            </div>
          </div>

          {/* Col 4: Regulatory & Authority (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Aufsicht &amp; Kammer
            </div>
            <div className="text-[11px] text-slate-400 leading-normal space-y-1">
              <div>Aufsichtsbehörde:</div>
              <div className="text-slate-300 font-medium">IHK Heilbronn-Franken</div>
              <div className="text-[10px] text-slate-500 pt-1">
                Eintragungen im Vermittlerregister gemäß §§ 34d, 34f, 34i GewO einsehbar unter www.vermittlerregister.info
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-[#C5A059] transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Nach oben</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#050b14] border-t border-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. Alle Rechte vorbehalten.
          </div>

          <div className="flex items-center space-x-5">
            <button
              onClick={() => onOpenModal('erstinformation')}
              className="hover:text-white transition-colors underline decoration-slate-600 underline-offset-2 cursor-pointer"
            >
              Erstinformation (§ 15 VersVermV)
            </button>
            <button
              onClick={() => onOpenModal('impressum')}
              className="hover:text-white transition-colors underline decoration-slate-600 underline-offset-2 cursor-pointer"
            >
              Impressum
            </button>
            <button
              onClick={() => onOpenModal('datenschutz')}
              className="hover:text-white transition-colors underline decoration-slate-600 underline-offset-2 cursor-pointer"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
