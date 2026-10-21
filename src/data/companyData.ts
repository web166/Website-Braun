import { ServiceItem, LifeSituation, FaqItem } from '../types';

export const COMPANY_DETAILS = {
  name: 'Schleicher & Braun GmbH',
  claim: 'Finanzdienstleistungen mit Vertrauen',
  managingDirectors: ['Stefan Braun', 'Thomas Schleicher'],
  officeAddress: {
    street: 'Stauffenbergstraße 35–37',
    city: 'Schwäbisch Hall',
    zip: '74523',
    label: 'Büroanschrift & Beratung'
  },
  registeredSeat: {
    street: 'Bibersfelder Straße 6',
    city: 'Schwäbisch Hall',
    zip: '74523',
    label: 'Firmensitz laut Register'
  },
  phone: '+49 (791) 94519-59',
  phoneSecondary: '+49 (7977) 91999-51',
  fax: '+49 (791) 94519-60',
  email: 'info@sundb-gmbh.de',
  web: 'https://www.finanzdienstleistungen-vertrauen.com',
  experienceYears: 'Über 30 Jahre Branchenerfahrung',
  regulatoryInfo: [
    {
      type: 'Versicherungsmakler',
      paragraph: '§ 34d Abs. 1 GewO',
      desc: 'Erlaubnis nach § 34d Abs. 1 GewO als Versicherungsmakler (Sachwalter des Kunden)'
    },
    {
      type: 'Finanzanlagenvermittler',
      paragraph: '§ 34f Abs. 1 Satz 1 Nr. 1 GewO',
      desc: 'Erlaubnis nach § 34f Abs. 1 S. 1 Nr. 1 GewO (Anteile oder Aktien an Investmentvermögen / Fonds & ETFs)'
    },
    {
      type: 'Immobiliardarlehensvermittler',
      paragraph: '§ 34i Abs. 1 GewO',
      desc: 'Erlaubnis nach § 34i Abs. 1 GewO (Verbraucher- und Immobiliardarlehensvermittlung)'
    }
  ],
  supervisoryAuthority: 'Industrie- und Handelskammer Heilbronn-Franken, Ferdinand-Braun-Straße 20, 74074 Heilbronn'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'absicherung',
    title: 'Persönliche Absicherung & Risikoschutz',
    tagline: 'Existenzbedrohende Risiken verlässlich absichern',
    shortDesc: 'Strukturierter Schutz vor unvorhersehbaren Lebensereignissen für Sie, Ihre Familie und Sachwerte.',
    iconName: 'ShieldCheck',
    points: [
      'Berufsunfähigkeits- & Grundfähigkeitsabsicherung',
      'Private Haftpflicht-, Hausrat- & Wohngebäudeversicherung',
      'Krankenvoll- & Krankenzusatzversicherungen',
      'Risikolebensversicherung & Hinterbliebenenschutz',
      'Gewerbliche Absicherung für Selbstständige & Betriebe'
    ],
    scope: [
      'Ganzheitliche Bestandsaufnahme bestehender Policen',
      'Identifikation von gefährlichen Deckungslücken und teuren Doppelversicherungen',
      'Unabhängiger Bedingungsvergleich nach aktuellen Leistungsstandards'
    ],
    importantNotice: 'Versicherungsschutz muss sich flexibel an veränderte Lebensphasen anpassen. Nicht jede Police ist für jeden Lebensabschnitt notwendig.'
  },
  {
    id: 'vorsorge',
    title: 'Altersvorsorge & Ruhestandsplanung',
    tagline: 'Langfristige finanzielle Unabhängigkeit gestalten',
    shortDesc: 'Konzepte zur Schließung der individuellen Rentenlücke unter Berücksichtigung von Inflation und Steuern.',
    iconName: 'Clock3',
    points: [
      'Private Rentenversicherungen mit flexiblen Auszahlungsoptionen',
      'Basisrente (Rürup) für Freiberufler, Selbstständige und Gutverdiener',
      'Strukturierung bestehender Lebens- und Rentenverträge',
      'Absicherung im Pflegefall und Erhalt des Familienvermögens',
      'Strategische Planung des geordneten Ruhestandsübergangs'
    ],
    scope: [
      'Ermittlung der realistischen Nettorentenlücke (Kaufkraftbereinigt)',
      'Vergleich verschiedener Schichtensysteme der Altersvorsorge',
      'Kosten- und Renditetransparenz bei Fondspolicen'
    ],
    importantNotice: 'Jede Vorsorgelösung unterliegt steuerlichen Rahmenbedingungen. Entscheidungen erfordern eine fundierte Betrachtung des persönlichen Zeithorizonts.'
  },
  {
    id: 'vermoegen',
    title: 'Vermögensaufbau & Geldanlage',
    tagline: 'Kapitalanlage mit Weitblick und Risikoverständnis',
    shortDesc: 'Fundierte Begleitung nach § 34f GewO mit breiter Diversifikation, transparenten Kosten und klarem Anlagehorizont.',
    iconName: 'TrendingUp',
    points: [
      'Breit diversifizierte ETF- und Investmentfondskonzepte',
      'Präzise Bestimmung des individuellen Risikoprofils & Anlagehorizonts',
      'Sparpläne für kontinuierlichen Kapitalaufbau (auch für Kinder/Enkel)',
      'Überprüfung bestehender Depots und Kostenstrukturen',
      'Disziplinierte Anlagestrategie ohne spekulative Modeerscheinungen'
    ],
    scope: [
      'Gesetzlich vorgeschriebene Geeignetheitsprüfung vor jeder Vermittlung',
      'Verständliche Erläuterung des Rendite-Risiko-Zusammenhangs',
      'Transparente Offenlegung sämtlicher Produkt- und Vermittlungskosten'
    ],
    importantNotice: 'Kapitalanlagen sind mit Marktrisiken verbunden und können im Wert schwanken. Wir versprechen keine unrealistischen Renditen, sondern setzen auf Risikostreuung.'
  },
  {
    id: 'finanzierung',
    title: 'Immobilienfinanzierung & Wohneigentum',
    tagline: 'Solide Finanzierungsarchitektur für Ihr Eigenheim',
    shortDesc: 'Objektive Beratung nach § 34i GewO bei Kauf, Neubau, Sanierung oder anstehender Anschlussfinanzierung.',
    iconName: 'Home',
    points: [
      'Neubau- & Erwerbsfinanzierung für Wohnimmobilien',
      'Umschuldung, Prolongation & Forward-Darlehen zur Zinssicherung',
      'Einbindung von KfW-Förderprogrammen und Bausparlösungen',
      'Kalkulation realistischer Tilgungs- und Sondertilgungsoptionen',
      'Abstimmung von Darlehensbelastung und persönlichem Budget'
    ],
    scope: [
      'Vergleich von Konditionen zahlreicher regionaler und überregionaler Bankpartner',
      'Prüfung von Zinsänderungsrisiken nach Ablauf der Zinsbindungsfrist',
      'Begleitung vom Erstkonzept bis zur Auszahlung'
    ],
    importantNotice: 'Eine solide Finanzierung muss auch bei unvorhergesehenen Lebensereignissen tragfähig bleiben. Zinssicherheit und Tilgungstempo stehen im Vordergrund.'
  }
];

export const LIFE_SITUATIONS: LifeSituation[] = [
  {
    id: 'start',
    title: 'Berufsstart & Eigenständigkeit',
    subtitle: 'Das Fundament richtig legen',
    description: 'Wer ins Berufsleben startet oder sich selbstständig macht, steht vor einer Fülle an Angeboten. Wichtig ist jetzt, existenzielle Risiken abzusichern, statt unnötige Sparverträge anzuhäufen.',
    keyTopics: ['Berufsunfähigkeit frühzeitig und gesund sichern', 'Echte Privathaftpflicht', 'Erster systematischer Sparplan'],
    recommendation: 'Priorität auf Arbeitskraftschutz und Schuldenfreiheit legen.'
  },
  {
    id: 'familie',
    title: 'Familie, Partnerschaft & Eigenheim',
    subtitle: 'Verantwortung für mehrere Köpfe tragen',
    description: 'Mit Kindern und Immobilienerwerb ändern sich die Prioritäten schlagartig: Hinterbliebenenschutz, Zinsbindungsfristen und laufende Belastbarkeit des Haushaltsbudgets stehen im Mittelpunkt.',
    keyTopics: ['Risikolebensversicherung für den Ernstfall', 'Langfristig kalkulierte Baufinanzierung', 'Absicherung des Haushaltsvermögens'],
    recommendation: 'Kein Risiko ohne Absicherung: Tilgungsraten und Absicherungsschutz aufeinander abstimmen.'
  },
  {
    id: 'selbstaendig',
    title: 'Selbstständige & Freiberufler',
    subtitle: 'Eigenverantwortliche Vorsorge ohne Scheuklappen',
    description: 'Ohne gesetzliche Pflichtkassen und automatische Rentenbeiträge erfordert die unternehmerische Existenz eine maßgeschneiderte Vorsorge- und Haftungsarchitektur.',
    keyTopics: ['Basisrente mit Steuervorteilen', 'Krankenversicherung & Krankentagegeld', 'Gewerbliche Haftungsabsicherung'],
    recommendation: 'Privates und geschäftliches Vermögen strikt trennen und steuerliche Freiräume nutzen.'
  },
  {
    id: 'ruhestand',
    title: 'Ruhestandsplanung & Vermögensordnung',
    subtitle: 'Erreichtes sichern und gelassen nach vorne blicken',
    description: 'In den Jahren vor oder während des Ruhestands verschiebt sich der Fokus von aggressiver Renditejagd hin zu Kapitalerhalt, planbaren Auszahlungen und geordneter Vermögensübertragung.',
    keyTopics: ['Auszahlungspläne mit Inflationsausgleich', 'Überprüfung veralteter Policen', 'Vorsorgevollmachten & Pflegeabsicherung'],
    recommendation: 'Liquiditätsreserven sicherstellen und Wertschwankungsrisiken im Alter dosieren.'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Status & Unabhängigkeit',
    question: 'Was unterscheidet Sie als Makler von einem Bank- oder Versicherungsvertreter?',
    answer: 'Als freie Makler nach § 34d GewO sind wir rechtlich sogenannte „Sachwalter des Kunden“. Das bedeutet: Wir stehen gesetzlich in Ihrem Lager und vertreten Ihre Interessen gegenüber den Gesellschaften – im Gegensatz zu Agenturvertretern, die an eine einzige Gesellschaft gebunden sind und deren Produkte verkaufen müssen.'
  },
  {
    category: 'Kosten & Vergütung',
    question: 'Wie werden die Beratungs- und Vermittlungsleistungen vergütet?',
    answer: 'Bei der Vermittlung von Versicherungen und Darlehen erfolgt die Vergütung in der Regel über die im Produkt einkalkulierte Courtage bzw. Vermittlungsprovision des jeweiligen Produktgebers. Für Sie entstehen beim Erstgespräch keine gesonderten Beratungsgebühren. Sämtliche Kosten werden stets vor Vertragsabschluss transparent und nachvollziehbar offengelegt.'
  },
  {
    category: 'Bestandsprüfung',
    question: 'Kann ich bestehende Versicherungen und Verträge bei Ihnen überprüfen lassen?',
    answer: 'Ja, das ist sogar einer der häufigsten Beratungsanlässe. Wir prüfen Ihren aktuellen Versicherungsordner auf Überversicherungen, Deckungslücken, veraltete Klauseln und unnötige Kosten. Was gut und günstig ist, bleibt selbstverständlich bestehen.'
  },
  {
    category: 'Geldanlage',
    question: 'Garantieren Sie bestimmte Renditen bei ETF- und Fondsanlagen?',
    answer: 'Nein, seriöse Finanzberatung gibt niemals Renditegarantien. Jede Geldanlage an den Kapitalmärkten unterliegt Wertschwankungen. Unsere Aufgabe nach § 34f GewO ist es, Ihr Risikoprofil ehrlich zu erfassen, Ihr Vermögen breit zu diversifizieren, Kosten zu minimieren und einen Anlagehorizont zu wählen, der zu Ihren Lebenszielen passt.'
  },
  {
    category: 'Baufinanzierung',
    question: 'Welche Unterlagen sind für eine erste Finanzierungsprüfung hilfreich?',
    answer: 'Für eine erste Orientierung genügen Angaben zum monatlichen Nettoeinkommen, Eigenkapital, Kaufpreis bzw. Baukosten der Immobilie und eventuell bestehenden Verbindlichkeiten. In der Detailprüfung unterstützen wir Sie bei der Zusammenstellung aller bankrelevanten Unterlagen.'
  },
  {
    category: 'Ablauf',
    question: 'Wie läuft das erste Beratungsgespräch bei Schleicher & Braun ab?',
    answer: 'Im ersten Gespräch lernen wir uns kennen und besprechen Ihre aktuelle Lebenssituation sowie Ihre Fragen und Wünsche. Es findet kein sofortiger Verkaufsabschluss statt. Sie entscheiden in Ruhe, ob und wie Sie mit uns zusammenarbeiten möchten.'
  }
];
