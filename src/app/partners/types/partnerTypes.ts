import { LucideIcon } from "lucide-react";

export type PartnerService = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type PartnerStat = {
  value: string;
  label: string;
};

export type PartnerProfile = {
  /** Used in the URL: /partners/[slug] */
  slug: string;
  heroBadge: string;
  orgName: string;
  tagline: string;
  about: string;
  logo?: string;
  partnershipSince?: string;
  stats: PartnerStat[];
  services: PartnerService[];
  md: {
    displayName: string;
    designation: string;
    /** Expertise line only — org name is NOT repeated here, it already appears in the role line below the name */
    background: string;
    quote: string;
    highlightWords?: string[];
    photo: string;
    /** MD-specific contact link. Falls back to the partner's own ctaHref if not set. */
    ctaHref?: string;
  };
  ctaLabel: string;
  ctaHref: string;
};