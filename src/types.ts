/* -------------------------------------------------------------------------- */
/*  Shared domain types — every JSON file in src/data is typed against these.  */
/* -------------------------------------------------------------------------- */

export type Bilingual = { en: string; hi?: string };

export interface NavItem {
  id: string;
  href: string;
  label: string;
  hindiLabel: string;
  hasMegaMenu?: boolean;
}

export interface WorkMenuItem {
  id: string;
  title: string;
  hindiTitle: string;
  desc: string;
  icon: string;
  tag?: string;
}

export interface WorkMenuSection {
  subtitle: string;
  subtitleHindi: string;
  items: WorkMenuItem[];
}

export interface FocusArea {
  id: string;
  title: string;
  hindiTitle?: string;
  category:
    | "empowerment"
    | "education"
    | "health"
    | "environment"
    | "relief"
    | "community";
  shortDesc: string;
  fullDesc: string;
  stats: string;
  iconName: string;
  accentColor: string;
  tag: string;
  initiatives: string[];
}

export interface BannerField {
  id: string;
  label: string;
  short: string;
  color: string;
  gem: string;
}

export interface FoundationEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  status: "past" | "upcoming";
  category: string;
  image: string;
  highlight: string;
  summary: string;
  attendees: string;
  badge: string;
}

export interface HomeEvent {
  id: string;
  category: "Past" | "Upcoming" | "Ongoing";
  date: { month: string; day: string; year: string };
  title: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "donation" | "volunteering" | "tax" | "programs";
}

export interface DonationOption {
  amount: number;
  label: string;
  impact: string;
  popular?: boolean;
}

export interface DonationCauseConfig {
  id: string;
  name: string;
  hindiName: string;
  tagline: string;
  hindiTagline: string;
  iconName: string;
  badge?: string;
  tiers: DonationOption[];
  monthlyTiers: DonationOption[];
}

export interface LegalDocument {
  title: string;
  registrationNumber: string;
  issuingAuthority: string;
  validity: string;
  description: string;
}

export interface AdvisoryMember {
  id: string;
  name: string;
  hindiName?: string;
  designation: string;
  hindiDesignation?: string;
  credentials: string;
  photo: string;
  category:
    | "governance"
    | "health"
    | "education"
    | "empowerment"
    | "relief"
    | "youth-safety";
  details: string;
  hindiDetails?: string;
  expertise: string[];
  quote?: string;
  experienceYears?: number;
}

export interface AdvisoryCategory {
  id: string;
  label: string;
  hindiLabel: string;
  longLabel?: string;
  longHindiLabel?: string;
  icon?: string;
  iconColor?: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  category:
    | "MEDIA RELEASE"
    | "COMMUNITY IMPACT"
    | "INITIATIVE LAUNCH"
    | "ANNUAL REPORT";
  title: string;
  hindiTitle?: string;
  excerpt: string;
  date: string;
  location: string;
  readTime: string;
  imageUrl: string;
  imageCaption?: string;
  author: string;
  lead: string;
  contentSections: { heading?: string; body: string }[];
  quote?: { text: string; author: string; role: string };
  highlights?: string[];
  stats?: { label: string; value: string }[];
  tagColor?: string;
}

export interface HeroSlide {
  id: string;
  pillLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  causeId?: string;
  image: string;
  imageAlt: string;
}

export type PillarIconType =
  | "sports"
  | "health"
  | "social-justice"
  | "cyber-crime"
  | "anti-drugs"
  | "education"
  | "environment"
  | "urban"
  | "rural"
  | "disaster"
  | "women"
  | "arts";

export interface PillarSliderItem {
  id: string;
  title: string;
  hindiTitle: string;
  sublabel: string;
  category: string;
  iconType: PillarIconType;
}

export interface ImpactPillar {
  id: string;
  title: string;
  hindiTitle: string;
  tag: string;
  image: string;
  colSpan: string;
  heightClass?: string;
}

export interface TreeBranch {
  id: string;
  label: string;
  sublabel: string;
  short: string;
  color: string;
  gem: string;
  ribbon: {
    ribbonId: string;
    x: number;
    y: number;
    width: number;
    textX: number;
    textColor: string;
    fontSize: number;
    letterSpacing: number;
  };
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  isVerified: boolean;
  initiativeTag?: string;
  avatarColor?: string;
}
