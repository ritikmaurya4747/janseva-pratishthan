export interface StoryPrinciple {
  title: string;
  desc: string;
}

export interface StoryGoal {
  id: string;
  number: string;
  title: string;
  target: string;
  tagline: string;
  description: string;
  icon: string;
  highlightMetric: string;
  initiatives: string[];
}

export interface StoryIdea {
  id: string;
  title: string;
  tag: string;
  concept: string;
  icon: string;
  keyPillars: string[];
}

export interface StoryApproachStep {
  phase: string;
  title: string;
  summary: string;
  activities: string[];
}

export interface StoryCommitment {
  id: string;
  title: string;
  stat: string;
  statLabel: string;
  badge: string;
  icon: string;
  description: string;
}

export const STORY_PRINCIPLES: StoryPrinciple[] = [
  {
    title: "Dignity Over Dependency",
    desc: "We reject disempowering handouts. Every program—from Swabhiman tailoring to computer education—is designed to confer self-respect, marketable competence, and lifelong agency.",
  },
  {
    title: "Direct Grassroots Execution",
    desc: "Our volunteers work in frontline contact with slum clusters, rural panchayats, and government schools, eliminating bureaucratic friction and administrative waste.",
  },
  {
    title: "Digital Equality as a Right",
    desc: "In the modern AI and knowledge era, digital literacy is as fundamental as the alphabet. We are dedicated to ensuring girls from low-income families have laptops, coding skills, and internet access.",
  },
  {
    title: "Boundless Compassion",
    desc: "True empathy extends to all sentient beings. Whether tending to street animals on cold winter nights or planting native tree canopies, our compassion knows no arbitrary boundaries.",
  },
];

export const STORY_FOUNDER_TAGS: string[] = [
  "Grassroots Philanthropist",
  "Community & Youth Shield",
];

export const STORY_SECRETARY_TAGS: string[] = [
  "Institutional Governance",
  "Grassroots Mobilization",
];

export const STORY_GOALS: StoryGoal[] = [
  {
    id: "digital-empowerment",
    number: "01",
    title: "Universal Digital Literacy & STEM Inclusion",
    target: "10,000+ Girls & Youths",
    tagline: "Bridging the Digital Divide",
    description:
      "Equipping underprivileged girls and students across slum clusters and rural schools with laptops, coding classes, and foundational digital tools to build high-income modern careers.",
    icon: "GraduationCap",
    highlightMetric: "50+ Laptops Donated so far | Target: 500+ in 2026-27",
    initiatives: [
      "Project Swabhiman Digital Classrooms",
      "Free coding & office software bootcamps",
      "Refurbished laptop distribution drives",
    ],
  },
  {
    id: "preventative-healthcare",
    number: "02",
    title: "Last-Mile Health & Medical Aid",
    target: "50,000+ Underprivileged Citizens",
    tagline: "Accessible Preventative Care",
    description:
      "Organizing routine free multi-specialty medical checkups, diagnostic testing, dental & eye screening camps, and emergency health support in underserved settlements.",
    icon: "HeartPulse",
    highlightMetric: "25+ Free Camps Conducted | Free Eye & Dental Kits",
    initiatives: [
      "Doorstep diagnostic checkup camps",
      "Emergency medical fund assistance",
      "Mother and child nutritional outreach",
    ],
  },
  {
    id: "anti-drug-youth-sports",
    number: "03",
    title: "Drug-Free Society & Sports Revival",
    target: "100+ Youth Sports Squads",
    tagline: "Channeling Energy into Excellence",
    description:
      "Shielding vulnerable youngsters from narcotics and street crime by mobilizing them into competitive sports leagues, athletic training, and empathetic de-addiction counselling.",
    icon: "Trophy",
    highlightMetric: "20+ Local Sports Clubs Supported | Regular Tournaments",
    initiatives: [
      "Free sports gear & nutrition for young athletes",
      "Community de-addiction counselling centers",
      "Grassroots Janseva Premier League tournaments",
    ],
  },
  {
    id: "women-self-reliance",
    number: "04",
    title: "Women Empowerment & Micro-Livelihoods",
    target: "5,000+ Women Artisans & Entrepreneurs",
    tagline: "Financial Autonomy with Dignity",
    description:
      "Running free stitching, embroidery, handicraft, and small-business vocational centers enabling marginalized women to earn sustainable independent incomes with honor.",
    icon: "Sparkles",
    highlightMetric: "100+ Sewing Machines Distributed | 4 Active Hubs",
    initiatives: [
      "Swabhiman Sewing & Craft Vocational Centers",
      "Micro-enterprise financial literacy workshops",
      "Marketplace access for self-help group products",
    ],
  },
];

export const STORY_IDEAS: StoryIdea[] = [
  {
    id: "dignity-over-charity",
    title: "Dignity Over Dependency",
    tag: "Core Conviction",
    concept:
      "Passive charity creates perpetual dependence. Our idea is to replace handouts with capacity building—providing skills, equipment, and digital agency so individuals stand proudly on their own feet.",
    icon: "Heart",
    keyPillars: [
      "Marketable Skill Impartation",
      "Tool & Asset Ownership",
      "Preserving Self-Respect",
    ],
  },
  {
    id: "middlemen-elimination",
    title: "Zero Intermediary Leakage",
    tag: "Execution Model",
    concept:
      "Conventional philanthropy loses immense resources to bureaucratic overhead. Our volunteers maintain direct personal contact with every beneficiary family, ensuring 100% of aid reaches the intended hands.",
    icon: "ShieldCheck",
    keyPillars: [
      "Direct Doorstep Handover",
      "Open Public Beneficiary Lists",
      "Photographic & Geotagged Auditing",
    ],
  },
  {
    id: "technology-as-equalizer",
    title: "Technology as the Great Equalizer",
    tag: "Innovation",
    concept:
      "AI, computer coding, and digital devices must not be confined to elite metropolitan schools. Putting a laptop into the hands of a girl from a slum cluster fundamentally re-writes her generational trajectory.",
    icon: "Globe",
    keyPillars: [
      "Free Hardware Redistribution",
      "Modern Digital Literacy",
      "Cyber Safety Awareness",
    ],
  },
  {
    id: "collective-citizenship",
    title: "Collective Grassroots Mobilization",
    tag: "Community Voice",
    concept:
      "Sustainable community reform cannot be managed from a distant corporate desk. We empower local youths, mothers, and educators to act as ground wardens who champion change from within.",
    icon: "Users",
    keyPillars: [
      "Hyperlocal Youth Cadres",
      "Mothers' Advisory Circles",
      "Active Civic Engagement",
    ],
  },
];

export const STORY_APPROACH: StoryApproachStep[] = [
  {
    phase: "Phase 1: Ground-Zero Audit",
    title: "Hyperlocal Survey & Needs Mapping",
    summary:
      "We do not guess community needs from an office. Our frontline teams conduct door-to-door household assessments in identified slum clusters and remote villages to uncover the real structural bottlenecks.",
    activities: [
      "Door-to-door socio-economic audit",
      "Identification of out-of-school girls and dropouts",
      "Healthcare deficit and vulnerability mapping",
    ],
  },
  {
    phase: "Phase 2: Collaborative Design",
    title: "Co-Creating Solutions with the Community",
    summary:
      "Every initiative is co-developed alongside village elders, local women's groups, and youth leaders to ensure cultural fit, genuine enthusiasm, and deep local ownership.",
    activities: [
      "Consultative townhalls with local families",
      "Selection of community-managed training venues",
      "Tailoring curriculum to local employment demands",
    ],
  },
  {
    phase: "Phase 3: Direct Action & Deployment",
    title: "Transparent Distribution & Hands-On Training",
    summary:
      "Laptops, sewing machines, medical supplies, and sports kits are distributed in open, celebratory community gatherings with zero third-party brokers or commission agents.",
    activities: [
      "Public ceremony handovers with signed registries",
      "Structured multi-month practical instruction",
      "Dedicated mentorship by qualified trainers",
    ],
  },
  {
    phase: "Phase 4: Multi-Year Mentorship",
    title: "Longitudinal Tracking & Outcome Audits",
    summary:
      "Our responsibility doesn't end with a handover. We track students' academic scores, women's monthly household income growth, and youth career placements over years.",
    activities: [
      "Quarterly beneficiary progress check-ins",
      "Income uplift and employment tracking",
      "Transparent donor utilization reporting",
    ],
  },
];

export const STORY_COMMITMENTS: StoryCommitment[] = [
  {
    id: "financial-probity",
    title: "100% Financial Accountability & 80G",
    stat: "100%",
    statLabel: "Audited & Tax Compliant",
    badge: "Tax Exemption",
    icon: "FileText",
    description:
      "All donations are 50% tax exempt under Section 80G of the Income Tax Act. Annual accounts are independently audited by registered Chartered Accountants and published for public transparency.",
  },
  {
    id: "secular-inclusivity",
    title: "Zero-Discrimination & Universal Equality",
    stat: "Zero",
    statLabel: "Tolerance for Bias",
    badge: "Universal Fraternity",
    icon: "ShieldCheck",
    description:
      "We serve every individual with equal reverence regardless of caste, faith, gender, or social status, strictly guided by the constitutional ideals of human dignity and social justice.",
  },
  {
    id: "last-mile-promise",
    title: "Direct Last-Mile Delivery Guarantee",
    stat: "0%",
    statLabel: "Brokerage / Leakage",
    badge: "Direct Handover",
    icon: "HandHeart",
    description:
      "Every rupee, laptop, medicine bottle, and training hour is targeted with pinpoint precision directly to verified beneficiaries with zero intermediate diversion.",
  },
  {
    id: "child-protection-safety",
    title: "Rigorous Child & Youth Safeguarding",
    stat: "24/7",
    statLabel: "Safeguarding Vigil",
    badge: "POCSO Compliant",
    icon: "ShieldAlert",
    description:
      "All Janseva centers enforce strict child protection policies, clean and secure premises, background-verified trainers, and a zero-tolerance stance towards harassment or abuse.",
  },
];

export const STORY = {
  principles: STORY_PRINCIPLES,
  founderTags: STORY_FOUNDER_TAGS,
  secretaryTags: STORY_SECRETARY_TAGS,
  goals: STORY_GOALS,
  ideas: STORY_IDEAS,
  approach: STORY_APPROACH,
  commitments: STORY_COMMITMENTS,
};
