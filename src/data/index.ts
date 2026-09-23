/**
 * Global data layer.
 *
 * Every piece of content lives in a JSON file next to this one. Components
 * never receive data through props — they import exactly what they need from
 * here (`import { FOCUS_AREAS } from '@/data'`). This file only adds types and
 * a few lookup helpers on top of the raw JSON.
 */
import type {
  AdvisoryCategory,
  AdvisoryMember,
  BannerField,
  DonationCauseConfig,
  DonationOption,
  FAQItem,
  FocusArea,
  FoundationEvent,
  HeroSlide,
  HomeEvent,
  ImpactPillar,
  LegalDocument,
  NavItem,
  NewsArticle,
  PillarSliderItem,
  ReviewItem,
  TreeBranch,
  WorkMenuSection,
} from "@/types";

import site from "./site.json";
import navigation from "./navigation.json";
import pillars from "./pillars.json";
import home from "./home.json";
import events from "./events.json";
import faqs from "./faqs.json";
import legal from "./legal.json";
import donation from "./donation.json";
import advisory from "./advisory.json";
import news from "./news.json";
import story from "./story.json";
import joinUs from "./joinUs.json";
import contact from "./contact.json";
import treeOfLife from "./treeOfLife.json";

/* ------------------------------ Site / brand ------------------------------ */
export const FOUNDATION_INFO = site;

/* ------------------------------- Navigation ------------------------------- */
export const MAIN_NAV = navigation.mainNav as NavItem[];
export const WORK_MENU = {
  ...navigation.workMenu,
  sections: navigation.workMenu.sections as WorkMenuSection[],
};
export const FOOTER_LINKS = navigation.footer;
export const FLOATING_CONTROLS = navigation.floatingControls;

/* ------------------------------ Focus pillars ----------------------------- */
export const FOCUS_AREAS = pillars.focusAreas as FocusArea[];
export const PILLAR_CATEGORIES = pillars.categories;
export const OFFICIAL_BANNER_FIELDS =
  pillars.officialBannerFields as BannerField[];
export const SWABHIMAN_STATS = pillars.swabhimanStats;
export const STATUTORY_POINTS = pillars.statutoryPoints;

export const getFocusArea = (id: string) =>
  FOCUS_AREAS.find((area) => area.id === id);

/* ---------------------------------- Home ---------------------------------- */
export const HERO_SLIDES = home.heroSlides as HeroSlide[];
export const PILLARS_SLIDER = home.pillarsSlider as PillarSliderItem[];
export const IMPACT_PILLARS = home.impactPillars as ImpactPillar[];
export const ACTION_CARDS = home.actionCards;
export const VISION_MISSION = home.visionMission;
export const TREE_BRANCHES = home.treeBranches as TreeBranch[];
export const TREE_ANATOMY = home.treeAnatomy;
export const TREE_GEOMETRY = treeOfLife;
export const HOME_EVENTS = {
  tabs: home.homeEvents.tabs as HomeEvent["category"][],
  items: home.homeEvents.items as HomeEvent[],
};
export const WHERE_WE_WORK = home.whereWeWork;
export const REVIEWS = {
  items: home.reviews.items as ReviewItem[],
  roleOptions: home.reviews.roleOptions,
};

/* ------------------------------ Events / FAQs ----------------------------- */
export const FOUNDATION_EVENTS = events as FoundationEvent[];
export const FAQS_DATA = faqs.items as FAQItem[];
export const FAQ_CATEGORIES = faqs.categories;

/* ---------------------------------- Legal --------------------------------- */
export const LEGAL_DOCS = legal.documents as LegalDocument[];
export const LEGAL_80G_BENEFITS = legal.benefits80G;
export const TRANSPARENCY_CHARTER = legal.transparencyCharter;

/* -------------------------------- Donation -------------------------------- */
export const DONATION_TIERS = donation.defaultTiers as DonationOption[];
export const MONTHLY_DONATION_TIERS =
  donation.defaultMonthlyTiers as DonationOption[];
export const DONATION_CAUSES: DonationCauseConfig[] = donation.causes.map(
  (cause) => ({
    ...cause,
    tiers: ("tiers" in cause
      ? cause.tiers
      : DONATION_TIERS) as DonationOption[],
    monthlyTiers: ("monthlyTiers" in cause
      ? cause.monthlyTiers
      : MONTHLY_DONATION_TIERS) as DonationOption[],
  }),
);
export const DONATION_FAQS = donation.faqs;
export const DONATION_UPI = donation.upi;
export const DONATION_BANK = donation.bank;
export const PAYMENT_METHODS = donation.paymentMethods as {
  id: "upi" | "bank" | "card";
  label: string;
  icon: string;
}[];

/* -------------------------------- Advisory -------------------------------- */
export const ADVISORY_MEMBERS = advisory.members as AdvisoryMember[];
export const ADVISORY_CHARTER = advisory.charter;
export const ADVISORY_CATEGORIES = advisory.categories as AdvisoryCategory[];
export const ADVISORY_HIGHLIGHTS = advisory.highlights;
export const ADVISORY_STATS = advisory.stats;
export const ADVISORY_CREDENTIALS = advisory.credentials;

export const getAdvisoryMember = (id: string) =>
  ADVISORY_MEMBERS.find((member) => member.id === id);
export const getAdvisoryCategory = (id: string) =>
  ADVISORY_CATEGORIES.find((category) => category.id === id);

/* ---------------------------------- News ---------------------------------- */
export const NEWS_ARTICLES = news.articles as NewsArticle[];
export const NEWS_CATEGORIES = news.categories;

/** Turns any title into a URL-friendly slug. */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

/** Finds an article by exact slug, id, slugified title or a partial slug. */
export function getNewsArticleBySlug(rawSlug: string): NewsArticle | undefined {
  if (!rawSlug) return undefined;
  const clean = decodeURIComponent(rawSlug).toLowerCase().trim();

  const exact = NEWS_ARTICLES.find(
    (a) => a.slug.toLowerCase() === clean || a.id.toLowerCase() === clean,
  );
  if (exact) return exact;

  const byTitle = NEWS_ARTICLES.find((a) => slugify(a.title) === clean);
  if (byTitle) return byTitle;

  return NEWS_ARTICLES.find((a) => {
    const aSlug = a.slug.toLowerCase();
    const tSlug = slugify(a.title);
    return (
      aSlug.includes(clean) ||
      clean.includes(aSlug) ||
      tSlug.includes(clean) ||
      clean.includes(tSlug) ||
      a.id.includes(clean)
    );
  });
}

/* ------------------------------ Story / Join ------------------------------ */
export const STORY = story;
export const JOIN_US = joinUs;
export const CONTACT_PAGE = contact;
