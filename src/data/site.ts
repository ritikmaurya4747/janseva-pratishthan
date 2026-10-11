import { LEADERSHIP } from "./leadership";

export interface Leader {
  name: string;
  displayName: string;
  role: string;
  background: string;
  photo: string;
  quote: string;
  hindiQuote: string;
}

export interface Founder extends Leader {
  visionSummary: string;
}

export interface GeneralSecretary extends Leader {
  pillars: string[];
  secretaryEmail: string;
  title: string;
  governanceCards: { icon: string; title: string; text: string }[];
}

export interface ContactInfo {
  address: string;
  email: string;
  supportEmail: string;
  phone: string;
  helpline: string;
  whatsapp: string;
  hours: string;
  mediaEmail: string;
  whatsappLink: string;
}

export interface SiteMetric {
  value: string;
  label: string;
  desc: string;
}

export interface FoundationInfo {
  name: string;
  hindiName: string;
  tagline: string;
  taglineHindi: string;
  missionStatement: string;
  coreBelief: string;
  founder: Founder;
  generalSecretary: GeneralSecretary;
  contact: ContactInfo;
  metrics: SiteMetric[];
  trustHighlights: string[];
}

/** Name, role, background and photo come from the leadership list so they live in one place. */
const leaderBasics = (id: string) => {
  const { displayName, role, background, photo } = LEADERSHIP.find(
    (m) => m.id === id,
  )!;
  return { displayName, role, background, photo };
};

export const FOUNDATION_INFO: FoundationInfo = {
  name: "Janseva Pratishthan Foundation",
  hindiName: "जनसेवा प्रतिष्ठान फाउंडेशन",
  tagline: "Small Steps, Big Impact.",
  taglineHindi: "छोटे कदम, बड़ा बदलाव।",
  missionStatement:
    "Dedicated to empowering communities, transforming lives, and fostering lasting change through compassion, service, and collective action.",
  coreBelief: "Inequality Is Not Inevitable, It Can Be Changed.",
  founder: {
    ...leaderBasics("founder-section"),
    ...{
      name: "Shabbir Shaikh",
      quote:
        "True transformation begins at the grassroots, where compassion meets decisive action. Through our six pillars—Sports, Healthcare, Social Justice & Welfare, Anti-Cyber Crime, Anti-Drugs De-Addiction, and Youth Empowerment—we strive to build an equitable society where every young person is shielded, skilled, and empowered to lead with dignity.",
      hindiQuote:
        "सच्चा सामाजिक बदलाव ज़मीनी स्तर से शुरू होता है—जब हम खेलकूद, स्वास्थ्य, सामाजिक न्याय, साइबर सुरक्षा, नशा मुक्ति और युवा सशक्तिकरण के ज़रिए हर युवा को सुरक्षा, स्वाभिमान और उज्ज्वल भविष्य प्रदान करते हैं।",
      visionSummary:
        "Janseva Pratishthan Foundation was born from a simple but powerful belief: nation-building begins with serving people. Our mission is to create a healthier, safer, educated, empowered and socially responsible India by connecting social service with decisive action and measurable impact.",
    },
  },
  generalSecretary: {
    ...leaderBasics("general-secretary-section"),
    ...{
      name: "Deepak Parki",
      quote:
        "True leadership in social service is measured by transparency in governance and unwavering consistency on the ground. At Janseva Pratishthan Foundation, our administrative machinery is driven by a single commitment: ensuring every intervention—be it putting a digital laptop in the hands of a meritorious student, delivering urgent medical aid, or steering youth away from drugs—is executed with complete integrity, auditability, and speed. Our doors are always open to volunteers, partners, and citizens who believe that lasting transformation happens when administrative rigor meets genuine human empathy.",
      hindiQuote:
        "सामाजिक सेवा में नेतृत्व का असली पैमाना ज़मीनी पारदर्शिता और निष्ठा है। जनसेवा प्रतिष्ठान में हमारा संकल्प है कि हर राहत और सशक्तिकरण अंतिम व्यक्ति तक बिना किसी देरी और पूरी ईमानदारी से पहुंचे।",
      pillars: [
        "Organisational Administration & Programme Coordination",
        "Youth Engagement, Health, Fitness & Sports Awareness",
        "Coordination with Educational Institutions & Community Organisations",
        "Strengthening the Foundation's Grassroots Implementation Network",
      ],
      secretaryEmail: "secretary@jansevapratishthan.org",
      title: "Administration, Programme Execution & Youth Engagement",
      governanceCards: [
        {
          icon: "Sparkles",
          title: "80G Tax Exemption",
          text: "All donations are 50% tax exempt under Section 80G of the Income Tax Act with immediate digitally signed receipts.",
        },
        {
          icon: "FileText",
          title: "Audited Financials",
          text: "Annual accounts and utilization certificates are audited annually by certified Chartered Accountants.",
        },
      ],
    },
  },
  contact: {
    address:
      "Registered Trust Office, South Extension / Connaught Place District, New Delhi - 110001, India",
    email: "contact@jansevapratishthan.org",
    supportEmail: "info@jansevapratishthan.org",
    phone: "+91 98101 23456",
    helpline: "+91 11 4567 8900",
    whatsapp: "+919810123456",
    hours: "Monday – Saturday: 9:30 AM – 6:30 PM IST",
    mediaEmail: "media@jansevapratishthan.org",
    whatsappLink: "https://wa.me/919810123456",
  },
  metrics: [
    {
      value: "50+",
      label: "Laptops & Digital Kits Distributed",
      desc: "Equipping underprivileged girls with tech tools",
    },
    {
      value: "10,000+",
      label: "Beneficiaries Touched",
      desc: "Across Delhi NCR & rural intervention clusters",
    },
    {
      value: "10",
      label: "Core Impact Pillars",
      desc: "From women empowerment to healthcare & environment",
    },
    {
      value: "100%",
      label: "Transparent Governance",
      desc: "80G tax-exempted & audited trust structure",
    },
  ],
  trustHighlights: [
    "50+ Laptops Donated",
    "Project Swabhiman",
    "Niti Aayog Darpan",
  ],
};
