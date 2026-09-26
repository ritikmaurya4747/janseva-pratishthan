import { PartnerProfile } from "@/app/wellness-partner/type/partnerTypes";
import { Activity, Brain, HeartPulse, Stethoscope } from "lucide-react";


export const WELLNESS_PARTNER: PartnerProfile = {
  slug: "wellness-partner",
  heroBadge: "Official Wellness Partner",
  orgName: "Influx Healthtech Ltd.",
  tagline: "Advancing Preventive Healthcare & Wellness at the Grassroots",
  about:
    "Influx Healthtech Ltd. partners with Janseva Pratishthan Foundation to bring accessible, technology-enabled healthcare and wellness support to underserved communities — strengthening the foundation's Healthcare and Anti-Drugs De-Addiction pillars through clinical expertise and structured outreach programs.",
  logo: "/dr-munir-chandniwala.png", 
  partnershipSince: "2023",
  stats: [
    { value: "50+", label: "Wellness Camps Conducted" },
    { value: "5,000+", label: "Beneficiaries Supported" },
    { value: "12", label: "Districts Covered" },
  ],
  services: [
    {
      icon: HeartPulse,
      title: "Community Health Camps",
      description:
        "Free health screenings and consultations delivered directly in underserved communities.",
    },
    {
      icon: Brain,
      title: "Mental Health Support",
      description:
        "Counselling and psychological first-aid for individuals affected by trauma, addiction, or crisis.",
    },
    {
      icon: Activity,
      title: "De-Addiction Rehabilitation",
      description:
        "Clinical and community-based recovery support aligned with the foundation's Anti-Drugs De-Addiction pillar.",
    },
    {
      icon: Stethoscope,
      title: "Preventive Care Awareness",
      description:
        "Workshops and outreach programs on nutrition, hygiene, and preventive healthcare practices.",
    },
  ],
  md: {
    displayName: "Dr. Munir Chandniwala",
    designation: "Managing Director",
    background: "Influx Healthtech Ltd. — Healthcare Administration & Public Wellness Strategy",
    quote:
      "Wellness cannot remain a privilege of the few — it has to reach the last mile. Our partnership with Janseva Pratishthan Foundation lets Influx Healthtech bring structured Healthcare access and Anti-Drugs De-Addiction support directly into communities that need it most, backed by real clinical rigor and genuine follow-through.",
    highlightWords: ["Healthcare", "Anti-Drugs De-Addiction"],
    photo: "/dr-munir-chandniwala.png",
  },
  ctaLabel: "Partner With Us",
  ctaHref: "/join-us",
};