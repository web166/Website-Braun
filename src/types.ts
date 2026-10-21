export type ServiceCategory = 'absicherung' | 'vorsorge' | 'vermoegen' | 'finanzierung';

export interface ServiceItem {
  id: ServiceCategory;
  title: string;
  shortDesc: string;
  tagline: string;
  iconName: string;
  points: string[];
  scope: string[];
  importantNotice?: string;
}

export interface LifeSituation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyTopics: string[];
  recommendation: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export type ModalType = 'impressum' | 'erstinformation' | 'datenschutz' | null;
