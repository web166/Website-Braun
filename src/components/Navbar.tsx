import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/companyData';
import { ModalType } from '../types';

interface NavbarProps {
  onOpenModal: (type: ModalType) => void;
  onNavigateContact: (subject?: string) => void;
  onSelectService?: (serviceTitle: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onNavigateContact, onSelectService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const megaMenuContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuContainerRef.current && !megaMenuContainerRef.current.contains(event.target as Node)) {
        setServicesMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceImages: Record<string, string> = {
    absicherung: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
    vorsorge: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    vermoegen: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80',
    finanzierung: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  };

  const handleServiceClick = (serviceTitle: string) => {
    setServicesMenuOpen(false);
    setMobileMenuOpen(false);
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      const elem = document.getElementById('leistungen');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    /* Floating Header Container (Fliegende Menüleiste in exaktem Grau des Logos mit 3D-Logo) */
    <header className="fixed top-4 sm:top-5 inset-x-0 z-50 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 pointer-events-none transition-all duration-300">
      
      {/* Floating Card Wrapper (Exakt Grau harmonisiert) */}
      <div
        ref={megaMenuContainerRef}
        className={`relative pointer-events-auto rounded-xl sm:rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'shadow-2xl shadow-slate-950/30 ring-1 ring-black/10'
            : 'shadow-xl shadow-slate-900/20'
        }`}
      >
        {/* Main Floating Navbar (EXAKT DAS GRAU #D9DBDA AUS DEM LOGO-STREIFEN) */}
        <nav
          className={`w-full bg-[#d9dbda] rounded-xl sm:rounded-2xl px-3 sm:px-6 transition-all duration-300 border border-[#c4c7ca] ${
            isScrolled ? 'py-2 sm:py-2.5' : 'py-3 sm:py-3.5'
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4 flex-nowrap w-full">
            
            {/* 3D PROTRUDING LOGO: Extends both ABOVE into white bar and BELOW the menubar in 3D */}
            <a
              href="#"
              className="relative z-30 flex items-center shrink-0 -my-6 sm:-my-7 lg:-my-8 group pr-2"
              title="Schleicher & Braun GmbH – Finanzdienstleistungen mit Vertrauen"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* 3D Sphere with authentic lighting and zero rectangular color differences */}
                <div className="relative shrink-0">
                  <img
                    src="/assets/aistudio/logo-sphere.png"
                    alt="Schleicher & Braun 3D Signet"
                    className="h-16 sm:h-20 lg:h-24 w-auto object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] group-hover:drop-shadow-[0_12px_22px_rgba(38,71,150,0.4)] group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                {/* Brand Typography in exact brand royal navy #264796 */}
                <div className="flex flex-col justify-center select-none">
                  <div className="flex items-baseline space-x-1 sm:space-x-1.5">
                    <span className="font-sans font-black tracking-wide text-xs sm:text-sm lg:text-base text-[#264796] uppercase leading-none">
                      Schleicher &amp; Braun
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-[#0c1a2c]">
                      GmbH
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-slate-700 uppercase mt-0.5 sm:mt-1">
                    Finanzdienstleistungen
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Nav Links (High contrast dark corporate navy on the logo grey #D8DADA) */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 text-xs xl:text-sm font-semibold text-[#0c1a2c] whitespace-nowrap shrink-0">
              
              {/* Mega-Menu Trigger: LEISTUNGEN */}
              <button
                type="button"
                onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
                onMouseEnter={() => setServicesMenuOpen(true)}
                className={`flex items-center space-x-1 py-1.5 px-2.5 rounded-sm transition-colors cursor-pointer ${
                  servicesMenuOpen
                    ? 'text-[#254695] bg-[#c8cbce] font-bold shadow-2xs'
                    : 'hover:text-[#254695] hover:bg-[#cbcfd2]'
                }`}
                aria-expanded={servicesMenuOpen}
              >
                <span>Leistungen</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesMenuOpen ? 'rotate-180 text-[#254695]' : 'text-slate-600'}`} />
              </button>

              <a href="#bedarfs-check" className="hover:text-[#254695] hover:bg-[#cbcfd2] py-1.5 px-2.5 rounded-sm transition-colors">
                Bedarfs-Check
              </a>
              <a href="#ueber-uns" className="hover:text-[#254695] hover:bg-[#cbcfd2] py-1.5 px-2.5 rounded-sm transition-colors">
                Über uns
              </a>
              <a href="#faq" className="hover:text-[#254695] hover:bg-[#cbcfd2] py-1.5 px-2.5 rounded-sm transition-colors font-bold text-[#0c1a2c]">
                FAQ
              </a>
            </div>

            {/* Action CTA Button (Clearly separated, shrink-0, in Royal Blue #254695 / Navy) */}
            <div className="hidden sm:flex items-center shrink-0 ml-1">
              <button
                type="button"
                onClick={() => onNavigateContact()}
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-sm bg-[#0c1a2c] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#254695] active:bg-[#07101c] transition-all duration-200 border border-[#C5A059]/50 hover:border-[#C5A059] shadow-md cursor-pointer group shrink-0"
              >
                <span>Erstgespräch anfragen</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1.5 text-[#C5A059] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center space-x-1.5 shrink-0">
              <button
                type="button"
                onClick={() => onNavigateContact()}
                className="sm:hidden px-2.5 py-1.5 bg-[#0c1a2c] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm border border-[#C5A059]/40 shadow-xs"
              >
                Kontakt
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-md text-slate-800 hover:text-black hover:bg-[#cbcfd2] focus:outline-none cursor-pointer"
                aria-label="Menü öffnen"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* MEGA MENU DROPDOWN (Positioned relative to the whole floating navbar card) */}
          {servicesMenuOpen && (
            <div
              onMouseLeave={() => setServicesMenuOpen(false)}
              className="hidden lg:block absolute left-0 right-0 top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-slate-300 overflow-hidden animate-fadeIn z-50 ring-1 ring-black/10"
            >
              {/* Top Bar inside Dropdown */}
              <div className="bg-slate-100 px-6 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs">
                <span className="font-serif font-semibold text-slate-900 tracking-wide">
                  Unsere 4 Kernbereiche als unabhängige Makler &amp; Vermittler
                </span>
                <span className="text-[11px] font-mono text-[#254695] font-semibold">
                  Erlaubnisse nach § 34d • § 34f • § 34i GewO (IHK Heilbronn-Franken)
                </span>
              </div>

              {/* 4 Service Cards Grid with Images */}
              <div className="p-6 grid grid-cols-4 gap-4 bg-white">
                {SERVICES.map((srv) => {
                  const imgUrl = serviceImages[srv.id];
                  return (
                    <div
                      key={srv.id}
                      onClick={() => handleServiceClick(srv.title)}
                      className="group/card flex flex-col justify-between rounded-sm border border-slate-200 overflow-hidden hover:border-[#254695] hover:shadow-md transition-all duration-200 cursor-pointer bg-[#FBFBFA]"
                    >
                      <div>
                        {/* Card Image */}
                        <div className="h-28 w-full overflow-hidden relative">
                          <img
                            src={imgUrl}
                            alt={srv.title}
                            className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                          <span className="absolute bottom-2 left-2 text-[10px] font-mono uppercase bg-[#0c1a2c]/90 text-[#E5D1A4] px-1.5 py-0.5 rounded border border-[#C5A059]/40">
                            {srv.id === 'absicherung' && '§ 34d Abs. 1'}
                            {srv.id === 'vorsorge' && '§ 34d Abs. 1'}
                            {srv.id === 'vermoegen' && '§ 34f Abs. 1'}
                            {srv.id === 'finanzierung' && '§ 34i Abs. 1'}
                          </span>
                        </div>

                        {/* Card Content */}
                        <div className="p-3">
                          <h4 className="font-serif text-sm font-semibold text-[#0c1a2c] group-hover/card:text-[#254695] transition-colors leading-snug mb-1">
                            {srv.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-2.5">
                            {srv.shortDesc}
                          </p>

                          {/* Bullets */}
                          <ul className="space-y-1 text-[10px] sm:text-[11px] text-slate-600 mb-2 border-t border-slate-100 pt-2">
                            {srv.points.slice(0, 2).map((p, idx) => (
                              <li key={idx} className="flex items-center space-x-1.5 truncate">
                                <span className="w-1 h-1 rounded-full bg-[#254695] shrink-0"></span>
                                <span className="truncate">{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="px-3 py-2 bg-slate-100/90 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#0c1a2c] group-hover/card:text-[#254695]">
                        <span>Details &amp; Beratung</span>
                        <ArrowRight className="w-3 h-3 text-[#254695] group-hover/card:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mega Menu Footer Banner */}
              <div className="bg-[#0c1a2c] text-white px-6 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded bg-slate-800 flex items-center justify-center border border-[#C5A059]/40 text-[#C5A059] font-serif text-xs font-bold">
                    S&B
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Stefan Braun &amp; Thomas Schleicher – Persönlich in Schwäbisch Hall
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Unabhängige Beratung als Sachwalter des Kunden ohne Verkaufsdruck.
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <a
                    href="#bedarfs-check"
                    onClick={() => setServicesMenuOpen(false)}
                    className="text-xs text-[#E5D1A4] hover:underline"
                  >
                    Bedarfs-Check starten →
                  </a>
                  <button
                    onClick={() => {
                      setServicesMenuOpen(false);
                      onNavigateContact();
                    }}
                    className="px-3.5 py-1.5 bg-[#C5A059] text-[#0c1a2c] text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#d4b067] transition-colors cursor-pointer"
                  >
                    Beratung anfragen
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* Mobile Dropdown Menu (Inside floating card) */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-[#c6c9cb] mt-3 pt-4 pb-2 animate-fadeIn max-h-[75vh] overflow-y-auto">
              
              {/* Quick Contact Header inside Mobile Menu */}
              <div className="mb-3 p-3 bg-white rounded-sm border border-slate-300 text-xs text-slate-800 flex items-center justify-between shadow-2xs">
                <span className="font-bold text-[#254695]">{COMPANY_DETAILS.phone}</span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal('erstinformation');
                  }}
                  className="text-[#254695] font-semibold underline"
                >
                  IHK-Erstinformation
                </button>
              </div>

              {/* Accordion for Leistungen on Mobile with images */}
              <div className="mb-3 border border-slate-300 rounded-sm overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full p-3 bg-slate-100 text-left font-bold text-xs sm:text-sm text-[#0c1a2c] flex items-center justify-between cursor-pointer"
                >
                  <span>Leistungen im Überblick</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#254695]' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="p-2.5 space-y-2 bg-white">
                    {SERVICES.map((srv) => (
                      <div
                        key={srv.id}
                        onClick={() => handleServiceClick(srv.title)}
                        className="flex items-center space-x-2.5 p-2 rounded border border-slate-200 hover:bg-slate-50 cursor-pointer"
                      >
                        <img
                          src={serviceImages[srv.id]}
                          alt={srv.title}
                          className="w-10 h-10 object-cover rounded shrink-0"
                        />
                        <div className="overflow-hidden">
                          <div className="text-xs font-bold text-[#0c1a2c] truncate">
                            {srv.title}
                          </div>
                          <div className="text-[10px] text-[#254695] font-mono">
                            {srv.id === 'absicherung' && '§ 34d Abs. 1 GewO'}
                            {srv.id === 'vorsorge' && '§ 34d Abs. 1 GewO'}
                            {srv.id === 'vermoegen' && '§ 34f Abs. 1 GewO'}
                            {srv.id === 'finanzierung' && '§ 34i Abs. 1 GewO'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Mobile Nav Links */}
              <div className="flex flex-col space-y-2 pb-3 border-b border-[#c6c9cb] text-xs sm:text-sm font-semibold text-[#0c1a2c]">
                <a
                  href="#bedarfs-check"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#254695]"
                >
                  Interaktiver Bedarfs-Check
                </a>
                <a
                  href="#ueber-uns"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#254695]"
                >
                  Über Stefan Braun &amp; Thomas Schleicher
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#254695]"
                >
                  Häufige Fragen (FAQ)
                </a>
              </div>

              {/* Mobile Actions */}
              <div className="pt-3 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateContact();
                  }}
                  className="w-full text-center py-2.5 px-3 bg-[#0c1a2c] text-white text-xs font-bold tracking-wider uppercase rounded-sm border border-[#C5A059] cursor-pointer shadow-sm"
                >
                  Erstgespräch vereinbaren
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateContact('Rückruf anfordern (Telefontermin)');
                  }}
                  className="w-full text-center py-2 px-3 bg-white text-slate-800 text-xs font-semibold tracking-wider rounded-sm border border-slate-300 cursor-pointer"
                >
                  Rückruf anfordern
                </button>
              </div>

            </div>
          )}
        </nav>

      </div>
    </header>
  );
};
