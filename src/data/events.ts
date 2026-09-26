export interface EventItem {
  id: string;
  slug: string;
  category: "Past" | "Upcoming" | "Ongoing";
  date: {
    month: string;
    day: string;
    year: string;
  };
  title: string;
  imageUrl: string;
  summary?: string;
  highlight?: string;
  location?: string;
  attendees?: string;
}

export const FOUNDATION_EVENTS_LIST: EventItem[] = [
  {
    id: "1",
    slug: "shabbir-shaikh-new-chapter-janseva",
    category: "Past",
    date: { month: "AUG", day: "19", year: "2026" },
    title: "From spotlight to purpose: Shabbir Shaikh begins a new chapter with Janseva Pratishthan",
    imageUrl: "/shabir-sports.jpeg",
    summary: "From monumental milestone ceremonies to community drives, witness our compassion transformed into action.",
    highlight: "50 Laptops Distributed to Girls in STEM.",
    location: "Mumbai, Maharashtra",
    attendees: "500+ Community Members"
  },
  {
    id: "2",
    slug: "shabbir-shaikh-spotlight-to-purpose",
    category: "Past",
    date: { month: "AUG", day: "19", year: "2026" },
    title: "From spotlight to purpose: Shabbir Shaikh begins a new chapter with Janseva Pratishthan",
    imageUrl: "/IMG_1208.JPG.jpeg",
    summary: "A landmark moment as Shabbir Shaikh embarks on a journey of social impact and community upliftment.",
    highlight: "New chapter launched with Janseva Pratishthan.",
    location: "Mumbai, Maharashtra",
    attendees: "500+ Community Members"
  },
  {
    id: "3",
    slug: "shabbir-shaikh-meaningful-change-one-small-decision",
    category: "Past",
    date: { month: "AUG", day: "12", year: "2026" },
    title: "I believe meaningful change can begin with just one small decision: Shabbir Shaikh on giving back to society",
    imageUrl: "/IMG_1349 (1).JPG.jpeg",
    summary: "An inspiring session on how small decisions can spark large-scale social transformation.",
    highlight: "Inspired 300+ volunteers to join social causes.",
    location: "Pune, Maharashtra",
    attendees: "300+ Attendees"
  },
  {
    id: "4",
    slug: "shabbir-shaikh-new-chapter-janseva-pratishthan",
    category: "Past",
    date: { month: "AUG", day: "11", year: "2026" },
    title: "From spotlight to purpose: Shabbir Shaikh begins a new chapter with Janseva Pratishthan",
    imageUrl: "/IMG_2396 (1).JPG.jpeg",
    summary: "A celebration of purpose-driven leadership and a renewed commitment to serving communities.",
    highlight: "Community outreach program inaugurated.",
    location: "Mumbai, Maharashtra",
    attendees: "400+ Supporters"
  },
  {
    id: "5",
    slug: "mega-health-camp-wellness-workshop-rural-clusters-maharashtra",
    category: "Upcoming",
    date: { month: "OCT", day: "24", year: "2026" },
    title: "Mega Health Camp & Wellness Workshop across 15 Rural Clusters in Maharashtra",
    imageUrl: "/IMG_2398.JPG.jpeg",
    summary: "Providing free mobile medical camps, preventive screenings, and nutrition aid.",
    highlight: "Targeting over 2,500 rural beneficiaries.",
    location: "15 Rural Clusters, Maharashtra",
    attendees: "Expected 2,500+"
  },
  {
    id: "6",
    slug: "project-swabhiman-annual-scholarship-girl-students",
    category: "Upcoming",
    date: { month: "NOV", day: "12", year: "2026" },
    title: "Project Swabhiman: Annual Scholarship Distribution Ceremony for Girl Students",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
    summary: "Empowering young girls through education with scholarships, mentorship, and learning resources.",
    highlight: "200+ scholarships to be awarded this year.",
    location: "Delhi NCR",
    attendees: "Expected 600+"
  },
  {
    id: "7",
    slug: "digital-literacy-drive-stem-classes-delhi-ncr",
    category: "Ongoing",
    date: { month: "SEP", day: "01", year: "2026" },
    title: "Digital Literacy Drive: Weekly STEM Classes for Underprivileged Youth in Delhi NCR",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    summary: "Weekly hands-on STEM and coding classes bridging the digital divide for underserved youth.",
    highlight: "500+ students enrolled in ongoing batches.",
    location: "Delhi NCR",
    attendees: "500+ Students"
  },
  {
    id: "8",
    slug: "green-earth-initiative-urban-afforestation-tree-plantation",
    category: "Ongoing",
    date: { month: "SEP", day: "15", year: "2026" },
    title: "Green Earth Initiative: Continuous Urban Afforestation & Tree Plantation Campaign",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
    summary: "A continuous drive to plant, nurture, and protect trees across urban landscapes.",
    highlight: "10,000+ saplings planted and growing.",
    location: "Multiple Cities, India",
    attendees: "1,000+ Volunteers"
  }
];