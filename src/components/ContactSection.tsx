import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Printer, Shield, Send, CheckCircle2, AlertCircle, Copy, ExternalLink } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { ModalType } from '../types';

interface ContactSectionProps {
  prefilledTopic?: string;
  prefilledMessage?: string;
  onOpenModal: (type: ModalType) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledTopic,
  prefilledMessage,
  onOpenModal
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('Allgemeine Anfrage & Erstgespräch');
  const [message, setMessage] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    phone: string;
    topic: string;
    message: string;
    date: string;
  } | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Update when prefilled props change
  useEffect(() => {
    if (prefilledTopic) {
      setTopic(prefilledTopic);
    }
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
  }, [prefilledTopic, prefilledMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!name.trim()) {
      setErrorMsg('Bitte geben Sie Ihren Namen an.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Bitte geben Sie eine gültige E-Mail-Adresse an.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('Bitte formulieren Sie kurz Ihr Anliegen.');
      return;
    }
    if (!privacyAccepted) {
      setErrorMsg('Bitte bestätigen Sie die Datenschutzerklärung.');
      return;
    }

    // Capture submitted inquiry data
    setSubmittedData({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      topic,
      message: message.trim(),
      date: new Date().toLocaleString('de-DE')
    });
  };

  const handleCopyInquiry = () => {
    if (!submittedData) return;
    const textToCopy = `Anfrage an Schleicher & Braun GmbH\nDatum: ${submittedData.date}\nName: ${submittedData.name}\nE-Mail: ${submittedData.email}\nTelefon: ${submittedData.phone || 'Keine Angabe'}\nBereich: ${submittedData.topic}\n\nNachricht:\n${submittedData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  const handleOpenMailClient = () => {
    if (!submittedData) return;
    const mailSubject = encodeURIComponent(`Beratungsanfrage: ${submittedData.topic} - ${submittedData.name}`);
    const mailBody = encodeURIComponent(
      `Guten Tag Herr Braun, Herr Schleicher,\n\nhier ist meine Terminanfrage:\n\nName: ${submittedData.name}\nE-Mail: ${submittedData.email}\nTelefon: ${submittedData.phone || 'Nicht angegeben'}\nThema: ${submittedData.topic}\n\nNachricht:\n${submittedData.message}\n\nMit freundlichen Grüßen,\n${submittedData.name}`
    );
    window.location.href = `mailto:${COMPANY_DETAILS.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  const handleNewInquiry = () => {
    setSubmittedData(null);
    setMessage('');
  };

  const topicsList = [
    'Allgemeine Anfrage & Erstgespräch',
    'Persönliche Absicherung & Risikoschutz',
    'Altersvorsorge & Ruhestandsplanung',
    'Vermögensaufbau & Geldanlage (§ 34f)',
    'Immobilienfinanzierung & Wohneigentum (§ 34i)',
    'Überprüfung bestehender Verträge (Bestandsanalyse)'
  ];

  return (
    <section id="kontakt" className="py-20 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            <span>Direkter Kontakt</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0c1a2c] font-medium tracking-tight mb-4">
            Sprechen wir über Ihre finanzielle Zukunft.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Ob konkrete Baufinanzierung, Optimierung Ihrer Vorsorge oder ein unverbindlicher Erst-Check: Wir freuen uns auf das Gespräch mit Ihnen in Schwäbisch Hall oder telefonisch.
          </p>
        </div>

        {/* 2 Columns: Contact Information & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Office Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 p-7 sm:p-8 rounded-sm shadow-sm space-y-6">
              
              <div className="border-b border-slate-100 pb-5">
                <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold">
                  Büro &amp; Geschäftsräume
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#0c1a2c] mt-1">
                  Schleicher &amp; Braun GmbH
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Geschäftsführer: Stefan Braun &amp; Thomas Schleicher
                </p>
              </div>

              {/* Contact List */}
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded bg-slate-100 text-[#C5A059] mt-0.5 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">Büroanschrift:</div>
                    <div className="text-xs text-slate-600">
                      {COMPANY_DETAILS.officeAddress.street}
                      <br />
                      {COMPANY_DETAILS.officeAddress.zip} {COMPANY_DETAILS.officeAddress.city}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded bg-slate-100 text-[#C5A059] mt-0.5 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">Telefon Zentrale:</div>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone.replace(/[\s()-]/g, '')}`}
                      className="text-xs text-[#0c1a2c] font-medium hover:text-[#C5A059] transition-colors"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                    <div className="text-[11px] text-slate-400">
                      Alternativ: {COMPANY_DETAILS.phoneSecondary}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded bg-slate-100 text-[#C5A059] mt-0.5 shrink-0">
                    <Printer className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">Telefax:</div>
                    <div className="text-xs text-slate-600">{COMPANY_DETAILS.fax}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded bg-slate-100 text-[#C5A059] mt-0.5 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">E-Mail:</div>
                    <a
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="text-xs text-[#0c1a2c] font-medium hover:text-[#C5A059] transition-colors"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Registered Seat Notice */}
              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                <div>
                  <strong>Firmensitz lt. Register:</strong> {COMPANY_DETAILS.registeredSeat.street}, {COMPANY_DETAILS.registeredSeat.zip} {COMPANY_DETAILS.registeredSeat.city}
                </div>
                <div>
                  <strong>Zuständige Erlaubnisbehörde:</strong> {COMPANY_DETAILS.supervisoryAuthority}
                </div>
              </div>

            </div>

            {/* Privacy Box */}
            <div className="p-5 rounded bg-slate-100/80 border border-slate-200/80 text-xs text-slate-600 flex items-start space-x-3">
              <Shield className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-semibold text-slate-800">Datensparsamkeit garantiert:</span>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Bitte übermitteln Sie keine vertraulichen Bankkontodaten, Passwörter oder vollständigen Depotnummern über dieses Formular. Relevante Unterlagen sichten wir gemeinsam im persönlichen Termin.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form or Confirmed Inquiry Dossier */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-7 sm:p-9 rounded-sm shadow-sm">
            
            {!submittedData ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="font-serif text-xl font-medium text-[#0c1a2c]">
                    Unverbindliche Beratungsanfrage
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Füllen Sie die Felder aus – wir melden uns zeitnah für eine Terminabstimmung bei Ihnen.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Ihr vollständiger Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="z.B. Julia & Michael Weber"
                      className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-300 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Ihre E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ihre.adresse@beispiel.de"
                      className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-300 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Telefonnummer (optional für Rückruf)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="z.B. +49 170 1234567"
                      className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-300 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors"
                    />
                  </div>

                  {/* Topic Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Themenbereich
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-300 bg-white focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors"
                    >
                      {topicsList.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Ihre Nachricht / Kurze Schilderung Ihres Anliegens *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Beschreiben Sie kurz, worum es Ihnen geht (z.B. anstehende Baufinanzierung, Überprüfung der Altersvorsorge oder Wechsel in die Selbstständigkeit)..."
                    className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-300 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors resize-y"
                  ></textarea>
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start space-x-2 pt-1">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 rounded text-[#C5A059] focus:ring-[#C5A059] cursor-pointer"
                  />
                  <label htmlFor="privacy" className="text-xs text-slate-600 leading-snug cursor-pointer">
                    Ich habe die{' '}
                    <button
                      type="button"
                      onClick={() => onOpenModal('datenschutz')}
                      className="text-[#0c1a2c] font-semibold underline hover:text-[#C5A059]"
                    >
                      Datenschutzerklärung
                    </button>{' '}
                    gelesen und stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-[#C5A059] text-[#0c1a2c] text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#d4b067] active:bg-[#b08c43] transition-all duration-200 shadow-md shadow-black/10 cursor-pointer group"
                  >
                    <span>Unverbindliche Anfrage jetzt absenden</span>
                    <Send className="w-4 h-4 text-[#0c1a2c] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            ) : (
              /* Verified Inquiry Receipt Dossier */
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-900">
                      Ihre Beratungsanfrage wurde erfolgreich erfasst!
                    </h4>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      Vielen Dank, {submittedData.name}. Ihre Angaben liegen bereit zur direkten Übermittlung an Herrn Braun und Herrn Schleicher.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded border border-slate-200 space-y-3 text-xs">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-semibold uppercase tracking-wider">Erfassungsdatum:</span>
                    <span className="font-mono text-slate-700">{submittedData.date}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
                    <div>
                      <span className="text-slate-500">Name:</span>
                      <div className="font-medium text-slate-900">{submittedData.name}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">E-Mail:</span>
                      <div className="font-medium text-slate-900">{submittedData.email}</div>
                    </div>
                  </div>
                  <div className="border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Bereich:</span>
                    <div className="font-medium text-[#0c1a2c]">{submittedData.topic}</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Ihre Nachricht:</span>
                    <div className="mt-1 p-3 bg-white rounded border border-slate-200 text-slate-700 whitespace-pre-line font-mono text-[11px]">
                      {submittedData.message}
                    </div>
                  </div>
                </div>

                {/* Actions: Mail Client & Copy */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleOpenMailClient}
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-[#0c1a2c] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#1a2d47] transition-colors cursor-pointer"
                  >
                    <span>Im eigenen Mailprogramm öffnen</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                  </button>

                  <button
                    onClick={handleCopyInquiry}
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-white text-slate-800 text-xs font-semibold tracking-wider rounded-sm border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>{copySuccess ? 'In die Zwischenablage kopiert!' : 'Anfragetext kopieren'}</span>
                  </button>
                </div>

                <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                  <span>Sie können uns auch direkt anrufen: <strong>{COMPANY_DETAILS.phone}</strong></span>
                  <button
                    onClick={handleNewInquiry}
                    className="text-[#C5A059] hover:underline font-medium cursor-pointer"
                  >
                    Neue Anfrage erstellen
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
