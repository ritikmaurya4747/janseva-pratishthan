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
    background: "Social Activist, Humanitarian & Grassroots Philanthropist",
    role: "Founder & Chairperson",
    quote:
      "True social transformation begins at the grassroots, where empathy meets decisive, transparent action. At Janseva Pratishthan Foundation, our work is dedicated to building an equitable and resilient society across six vital frontiers: nurturing youth potential through Sports, delivering accessible Healthcare, championing Social Justice & Welfare, defending citizens from Cyber Crime, spearheading grassroots Anti-Drugs De-Addiction drives, and creating future-ready leaders through Youth Empowerment. When we protect a young person's dignity, health, and dreams today, we secure the foundation of an entire nation.",
    highlightWords: [...CORE_PILLARS],
    photo: "/shabbir.jpg",
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
    ctaHref: "/join-us",
  },

  {
    id: "general-secretary-section",
    roleLabel: "National General Secretary",
    displayName: "Mr. Deepak Parki",
    background:
      "Executive Administration, Strategic Operations & Grassroots Mobilization",
    role: "General Secretary",
    quote:
      "True leadership in social service is measured by transparency in governance and unwavering consistency on the ground. Whether it's placing a laptop in the hands of a meritorious student, running a Healthcare outreach camp, or steering a young person away from addiction through our Anti-Drugs De-Addiction program, our administrative machinery is driven by a single commitment: every intervention across our six pillars — Sports, Healthcare, Social Justice & Welfare, Cyber Crime, Anti-Drugs De-Addiction, and Youth Empowerment — is executed with complete integrity, auditability, and speed.",
    highlightWords: [...CORE_PILLARS, "integrity", "auditability"],
    photo: "/deepakparki.png",
    ctaLabel: "CONNECT WITH SECRETARY'S OFFICE",
    ctaHref: "/join-us",
  },

  {
    id: "treasurer-section",
    roleLabel: "National Treasurer",
    displayName: "Ms. Shazia Mushtaq",
    background: "Financial Governance, Audits & Donor Stewardship",
    role: "National Treasurer",
    quote:
      "Every rupee donated carries someone's trust. Whether it funds a Sports scholarship, a Healthcare camp, a Cyber Crime helpline, or a bed at our Anti-Drugs De-Addiction center, my responsibility is to make sure that trust is honored — through clean books, independent audits, and complete transparency with every donor who believes in our mission of Social Justice & Welfare and Youth Empowerment.",
    highlightWords: [...CORE_PILLARS, "independent audits", "transparency"],
    photo: "/Shazia-Mushtaq.png",
    ctaLabel: "CONNECT WITH TREASURER'S OFFICE",
    ctaHref: "/join-us",
  },
];