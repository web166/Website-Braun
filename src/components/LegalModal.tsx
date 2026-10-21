import React, { useEffect } from 'react';
import { X, ShieldCheck, Scale, FileText } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { ModalType } from '../types';

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-sm shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0c1a2c] text-white flex items-center justify-between border-b border-[#C5A059]/30 shrink-0">
          <div className="flex items-center space-x-2">
            {type === 'erstinformation' && <ShieldCheck className="w-5 h-5 text-[#C5A059]" />}
            {type === 'impressum' && <Scale className="w-5 h-5 text-[#C5A059]" />}
            {type === 'datenschutz' && <FileText className="w-5 h-5 text-[#C5A059]" />}
            <h3 className="font-serif text-lg font-medium text-white tracking-wide">
              {type === 'erstinformation' && 'Gewerberechtliche Erstinformation'}
              {type === 'impressum' && 'Impressum & Pflichtangaben'}
              {type === 'datenschutz' && 'Datenschutzerklärung nach DSGVO'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          {/* ERSTINFORMATION */}
          {type === 'erstinformation' && (
            <div className="space-y-5">
              <div className="p-3 bg-amber-50 rounded border border-amber-200 text-amber-900 text-xs">
                <strong>Gesetzliche Erstinformation</strong> gemäß § 15 Versicherungsvermittlungsverordnung (VersVermV), § 12 Finanzanlagenvermittlungsverordnung (FinVermV) und § 11 Immobiliardarlehensvermittlungsverordnung (ImmVermV).
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  1. Angaben zum Unternehmen
                </h4>
                <p>
                  <strong>{COMPANY_DETAILS.name}</strong><br />
                  Geschäftsführer: {COMPANY_DETAILS.managingDirectors.join(' & ')}<br />
                  Büroanschrift: {COMPANY_DETAILS.officeAddress.street}, {COMPANY_DETAILS.officeAddress.zip} {COMPANY_DETAILS.officeAddress.city}<br />
                  Firmensitz: {COMPANY_DETAILS.registeredSeat.street}, {COMPANY_DETAILS.registeredSeat.zip} {COMPANY_DETAILS.registeredSeat.city}<br />
                  Telefon: {COMPANY_DETAILS.phone} | Telefax: {COMPANY_DETAILS.fax}<br />
                  E-Mail: {COMPANY_DETAILS.email} | Internet: {COMPANY_DETAILS.web}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  2. Status und Tätigkeitsart
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Versicherungsmakler mit Erlaubnis nach § 34d Abs. 1 GewO:</strong> Als Versicherungsmakler sind wir treuhänderischer Sachwalter des Kunden und vermitteln ungebunden Versicherungsschutz aus dem am Markt zugänglichen Angebot.
                  </li>
                  <li>
                    <strong>Finanzanlagenvermittler mit Erlaubnis nach § 34f Abs. 1 Satz 1 Nr. 1 GewO:</strong> Vermittlung von Anteilen oder Aktien an inländischen offenen Investmentvermögen, offenen EU-Investmentvermögen oder ausländischen offenen Investmentvermögen (z.B. Investmentfonds &amp; ETFs).
                  </li>
                  <li>
                    <strong>Immobiliardarlehensvermittler mit Erlaubnis nach § 34i Abs. 1 GewO:</strong> Vermittlung von grundpfandrechtlich abgesicherten Verbraucherdarlehen und Baufinanzierungen.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  3. Zuständige Erlaubnis- und Aufsichtsbehörde
                </h4>
                <p>
                  {COMPANY_DETAILS.supervisoryAuthority}<br />
                  Website: www.heilbronn.ihk.de
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  4. Gemeinsame Registerstelle
                </h4>
                <p>
                  Deutscher Industrie- und Handelskammertag (DIHK) e.V., Breite Straße 29, 10178 Berlin<br />
                  Auskunft über das Vermittlerregister online: <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] underline">www.vermittlerregister.info</a>
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  5. Schlichtungsstellen / Außergerichtliche Streitbeilegung
                </h4>
                <p>
                  Versicherungsombudsmann e.V., Postfach 08 06 32, 10006 Berlin (www.versicherungsombudsmann.de)<br />
                  Ombudsmann Private Kranken- und Pflegeversicherung, Postfach 06 02 22, 10052 Berlin (www.pkv-ombudsmann.de)
                </p>
              </div>
            </div>
          )}

          {/* IMPRESSUM */}
          {type === 'impressum' && (
            <div className="space-y-5">
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  Angaben gemäß § 5 TMG
                </h4>
                <p>
                  <strong>{COMPANY_DETAILS.name}</strong><br />
                  Büroanschrift: {COMPANY_DETAILS.officeAddress.street}, {COMPANY_DETAILS.officeAddress.zip} {COMPANY_DETAILS.officeAddress.city}<br />
                  Firmensitz: {COMPANY_DETAILS.registeredSeat.street}, {COMPANY_DETAILS.registeredSeat.zip} {COMPANY_DETAILS.registeredSeat.city}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  Vertreten durch
                </h4>
                <p>
                  Geschäftsführer: Stefan Braun, Thomas Schleicher
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  Kontakt
                </h4>
                <p>
                  Telefon: {COMPANY_DETAILS.phone}<br />
                  Zweitnummer: {COMPANY_DETAILS.phoneSecondary}<br />
                  Telefax: {COMPANY_DETAILS.fax}<br />
                  E-Mail: {COMPANY_DETAILS.email}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  Berufsbezeichnung &amp; berufsrechtliche Regelungen
                </h4>
                <p>
                  Berufsbezeichnung: Versicherungsmakler (§ 34d Abs. 1 GewO), Finanzanlagenvermittler (§ 34f Abs. 1 S. 1 Nr. 1 GewO), Immobiliardarlehensvermittler (§ 34i Abs. 1 GewO); verliehen in der Bundesrepublik Deutschland.<br />
                  Zuständige Kammer: IHK Heilbronn-Franken.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  Haftung für Inhalte und Links
                </h4>
                <p className="text-slate-600">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir übernehmen keine Gewähr für die Richtigkeit extern verlinkter Webseiten Dritter.
                </p>
              </div>
            </div>
          )}

          {/* DATENSCHUTZ */}
          {type === 'datenschutz' && (
            <div className="space-y-5">
              <div className="p-3 bg-slate-100 rounded text-xs text-slate-700">
                <strong>Datenschutzhinweis:</strong> Der Schutz Ihrer persönlichen Daten ist uns ein elementares Anliegen. Wir verarbeiten Ihre Daten stets im Einklang mit der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  1. Verantwortlicher
                </h4>
                <p>
                  {COMPANY_DETAILS.name}, {COMPANY_DETAILS.officeAddress.street}, {COMPANY_DETAILS.officeAddress.zip} {COMPANY_DETAILS.officeAddress.city}<br />
                  E-Mail: {COMPANY_DETAILS.email}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  2. Erhebung von Daten über das Kontaktformular
                </h4>
                <p>
                  Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  3. Datensparsamkeit bei Finanzdaten
                </h4>
                <p>
                  Über allgemeine Webformulare fordern wir zu keinem Zeitpunkt vertrauliche Zugangsdaten, Kontonummern, PINs oder TANs an. Die vertiefte Dokumentation Ihrer finanziellen Verhältnisse erfolgt ausschließlich im Rahmen der persönlichen, gesicherten Beratung.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  4. Ihre Rechte
                </h4>
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0c1a2c] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#1a2d47] transition-colors cursor-pointer"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
};
