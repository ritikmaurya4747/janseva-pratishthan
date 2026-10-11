export type LeadershipMember = {
  /** Used as the section's DOM id, e.g. for anchor links */
  id: string;
  /** Small uppercase pill above the quote, e.g. "Founder & National President" */
  roleLabel: string;
  displayName: string;
  /** Short line under the name, e.g. "Social Activist, Humanitarian..." */
  background: string;
  /** Short role tag under the name, e.g. "Founder & Chairperson" */
  role: string;
  /** Plain quote text — no JSX needed, highlighting is handled separately */
  quote: string;
  /** Words/phrases inside `quote` to highlight in amber (optional) */
  highlightWords?: string[];
  photo: string;
  ctaLabel: string;
  ctaHref: string;
};

/**
 * The foundation's six core pillars — kept as a single source so every
 * leader's quote highlights the same set of terms consistently.
 */
export const CORE_PILLARS = [
  "Sports",
  "Healthcare",
  "Social Justice & Welfare",
  "Cyber Crime",
  "Anti-Drugs De-Addiction",
  "Youth Empowerment",
] as const;

export const LEADERSHIP: LeadershipMember[] = [
  {
    id: "founder-section",
    roleLabel: "Founder & National President",
    displayName: "Mr. Shabbir Shaikh",
    background:
      "Social Leader • Youth Leader • Fitness & Community Development Advocate",
    role: "Founder & National President",
    quote:
      "True transformation begins at the grassroots when compassion becomes action, opportunity reaches the underserved, and every citizen gets the dignity, security and confidence to build a better future.",
    highlightWords: ["grassroots", "compassion becomes action", "dignity, security and confidence"],
    photo: "/shabbir.png",
    ctaLabel: "READ FULL FOUNDER'S LETTER",
    ctaHref: "/our-story",
  },

  {
    id: "vice-president-section",
    roleLabel: "National Vice President",
    displayName: "Mr. Anurag Shukla",
    background: "Regional Operations & Strategic Partnerships",
    role: "National Vice President",
    quote:
      "Every district we reach is a promise kept. Our role is to make sure the foundation's vision doesn't stay on paper — it shows up on the ground: a Sports academy opening in a small town, a Healthcare camp reaching a village that has never seen one, a Cyber Crime awareness drive in a local school, and an Anti-Drugs De-Addiction center giving a family its child back. Wherever we expand, we carry the same commitment to Social Justice & Welfare and Youth Empowerment that this foundation was built on.",
    highlightWords: [...CORE_PILLARS],
    photo: "/anurag.png",
    ctaLabel: "CONNECT WITH VP'S OFFICE",
    ctaHref: "/volunteer",
  },

  {
    id: "general-secretary-section",
    roleLabel: "National General Secretary",
    displayName: "Mr. Deepak Parki",
    background: "Professional Fitness Enthusiast | B.Ed. in English Language",
    role: "National General Secretary",
    quote:
      "To contribute towards creating a healthier, disciplined, educated, and socially responsible society, while empowering young people through education, fitness, sports, awareness, and meaningful community participation.",
    highlightWords: ["healthier, disciplined, educated", "empowering young people", "community participation"],
    photo: "/deepakparki.png",
    ctaLabel: "CONNECT WITH SECRETARY'S OFFICE",
    ctaHref: "/volunteer",
  },

  {
    id: "treasurer-section",
    roleLabel: "National Treasurer",
    displayName: "Ms. Shazia Mushtaq",
    background:
      "Financial Stewardship • Accountability • Transparency • Governance • Service",
    role: "National Treasurer",
    quote:
      "Responsible resources create stronger organisations, and stronger organisations create greater capacity to serve society.",
    highlightWords: ["Responsible resources", "stronger organisations", "serve society"],
    photo: "/Shazia-Mushtaq.png",
    ctaLabel: "CONNECT WITH TREASURER'S OFFICE",
    ctaHref: "/volunteer",
  },
];