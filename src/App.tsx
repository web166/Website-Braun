import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { LifeSituationsSection } from './components/LifeSituationsSection';
import { OrientationCalculator } from './components/OrientationCalculator';
import { TransparencyMatrix } from './components/TransparencyMatrix';
import { AdvisoryProcess } from './components/AdvisoryProcess';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ModalType, ServiceCategory } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [activeServiceTab, setActiveServiceTab] = useState<ServiceCategory>('absicherung');
  const [contactTopic, setContactTopic] = useState<string>('Allgemeine Anfrage & Erstgespräch');
  const [contactMessage, setContactMessage] = useState<string>('');

  const scrollToContact = (customMessage?: string) => {
    if (customMessage) {
      setContactMessage(customMessage);
    }
    const contactElem = document.getElementById('kontakt');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromNav = (serviceTitle: string) => {
    // Map service title to tab id
    if (serviceTitle.includes('Absicherung')) {
      setActiveServiceTab('absicherung');
    } else if (serviceTitle.includes('Altersvorsorge')) {
      setActiveServiceTab('vorsorge');
    } else if (serviceTitle.includes('Vermögen') || serviceTitle.includes('Geldanlage')) {
      setActiveServiceTab('vermoegen');
    } else if (serviceTitle.includes('Finanzierung') || serviceTitle.includes('Wohneigentum')) {
      setActiveServiceTab('finanzierung');
    }

    const elem = document.getElementById('leistungen');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setContactTopic(serviceTitle);
    setContactMessage(`Guten Tag Herr Braun, Herr Schleicher,\n\nich interessiere mich für eine persönliche Beratung im Bereich „${serviceTitle}“. Bitte kontaktieren Sie mich für eine Terminabstimmung.`);
    scrollToContact();
  };

  const handleSelectSituationForContact = (situationTitle: string) => {
    setContactTopic('Allgemeine Anfrage & Erstgespräch');
    setContactMessage(`Guten Tag Herr Braun, Herr Schleicher,\n\nich befinde mich aktuell in der Lebensphase „${situationTitle}“ und möchte meine finanzielle Absicherung bzw. Vorsorge strukturiert betrachten.`);
    scrollToContact();
  };

  const handleTransferCalculatorData = (data: { situation: string; topics: string[]; status: string; summary: string }) => {
    setContactTopic(data.topics[0] || 'Allgemeine Anfrage & Erstgespräch');
    setContactMessage(data.summary);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#1E293B]">
      {/* Navigation with Prominent Top Bar and Mega-Menu */}
      <Navbar
        onOpenModal={(type) => setActiveModal(type)}
        onNavigateContact={(subject) => {
          if (subject) setContactTopic(subject);
          scrollToContact(subject ? `Guten Tag Herr Braun, Herr Schleicher,\n\nich bitte um einen telefonischen Rückruf zwecks Terminvereinbarung zu: ${subject}.` : undefined);
        }}
        onSelectService={handleSelectServiceFromNav}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onNavigateContact={() => scrollToContact()}
          onOpenModal={(type) => setActiveModal(type)}
        />

        {/* 4 Core Service Domains with Tab Switch and Verified Permits */}
        <ServicesSection
          activeTab={activeServiceTab}
          onTabChange={setActiveServiceTab}
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* Advisory by Life Situations */}
        <LifeSituationsSection
          onSelectSituation={handleSelectSituationForContact}
        />

        {/* Interactive Feature: Orientation & Needs Check */}
        <OrientationCalculator
          onTransferToContact={handleTransferCalculatorData}
        />

        {/* Unique Feature: Broker vs Agent Transparency Matrix */}
        <TransparencyMatrix />

        {/* Transparent 6-Step Advisory Process */}
        <AdvisoryProcess
          onStartInquiry={() => scrollToContact()}
        />

        {/* Company Profile, Stefan Braun & Thomas Schleicher */}
        <AboutSection
          onOpenModal={(type) => setActiveModal(type)}
        />

        {/* Detailed FAQ */}
        <FaqSection />

        {/* High-Trust Contact Form & Direct Office Information */}
        <ContactSection
          prefilledTopic={contactTopic}
          prefilledMessage={contactMessage}
          onOpenModal={(type) => setActiveModal(type)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenModal={(type) => setActiveModal(type)}
        onNavigateContact={() => scrollToContact()}
      />

      {/* Legal Modals (Impressum, Erstinformation, Datenschutz) */}
      <LegalModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
