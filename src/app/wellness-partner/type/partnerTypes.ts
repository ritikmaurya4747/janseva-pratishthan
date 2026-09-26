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
    background: string;
    quote: string;
    highlightWords?: string[];
    photo: string;
  };
  ctaLabel: string;
  ctaHref: string;
};