// ============================================================
// ADVISORY COUNCIL – COMPLETE DATA (Array of Objects Format)
// ============================================================

export interface AdvisoryMember {
  id: string;
  name: string;
  hindiName: string;
  designation: string;
  hindiDesignation: string;
  credentials: string;
  photo: string;
  category: string;
  experienceYears: number;
  details: string;
  hindiDetails: string;
  expertise: string[];
  quote: string;
}

export interface CharterPillar {
  title: string;
  hindiTitle: string;
  desc: string;
}

export interface AdvisoryCharter {
  title: string;
  hindiTitle: string;
  summary: string;
  hindiSummary: string;
  pillars: CharterPillar[];
}

export interface AdvisorCategory {
  id: string;
  label: string;
  hindiLabel: string;
  longLabel?: string;
  longHindiLabel?: string;
  icon?: string;
  iconColor?: string;
}

export interface AdvisorHighlight {
  label: string;
  hindiLabel: string;
  iconColor: string;
}

export interface AdvisorStat {
  value: string;
  label: string;
  hindiLabel: string;
}

export interface AdvisorCredential {
  label: string;
  hindiLabel: string;
  value: string;
  hindiValue: string;
  valueClass: string;
}

// ============================================================
// MEMBERS ARRAY
// ============================================================
export const ADVISORY_MEMBERS: AdvisoryMember[] = [
  {
    id: "hon-shri-krishna-prakash",
    name: "Hon. Shri. Krishna Prakash, IPS",
    hindiName: "सम्मत श्री कृष्ण प्रकाश, आईपीएस",
    designation: "Chief Advisor – Janseva Pratishthan Foundation",
    hindiDesignation: "मुख्य सलाहकार – जनसेवा प्रतिष्ठान फाउंडेशन",
    credentials: "Additional Director General of Police – Training & Special Units, Maharashtra | Senior Maharashtra-cadre IPS Officer | President of Hockey Maharashtra | Ironman Triathlon 2017",
    photo: "/Hon. Shri. Krishna Prakash.png",
    category: "governance",
    experienceYears: 28,
    details: "A senior Maharashtra-cadre IPS officer, Shri Krishna Prakash has held important leadership responsibilities within Maharashtra Police and currently serves as Additional Director General of Police, Training & Special Units, Maharashtra. His role focuses on strengthening professional police training, developing capabilities, and preparing the police force to respond effectively to evolving security and societal challenges. As Chief Advisor to Janseva Pratishthan Foundation, his guidance supports the Foundation's initiatives in public safety, youth empowerment, cyber awareness, anti-drug campaigns, women's safety, community engagement, fitness, and disciplined citizenship. His association brings valuable experience in police training, leadership, public service, and community-oriented initiatives, strengthening the Foundation's commitment to building a safer, healthier, and more empowered society.",
    hindiDetails: "वरिष्ठ महाराष्ट्र कैडर के आईपीएस अधिकारी श्री कृष्ण प्रकाश ने महाराष्ट्र पुलिस में महत्वपूर्ण नेतृत्व दायित्वों का निर्वहन किया है और वर्तमान में अपर पुलिस महानिदेशक – प्रशिक्षण एवं विशेष इकाइयाँ, महाराष्ट्र के रूप में कार्यरत हैं। उनका कार्य पेशेवर पुलिस प्रशिक्षण को सुदृढ़ करना, क्षमता विकास और बदलती सुरक्षा एवं सामाजिक चुनौतियों का प्रभावी ढंग से सामना करने के लिए पुलिस बल को तैयार करना है। जनसेवा प्रतिष्ठान फाउंडेशन के मुख्य सलाहकार के रूप में, उनका मार्गदर्शन सार्वजनिक सुरक्षा, युवा सशक्तिकरण, साइबर जागरूकता, नशा मुक्ति अभियान, महिला सुरक्षा, सामुदायिक भागीदारी, फिटनेस और अनुशासित नागरिकता जैसी पहलों में सहायक है। उनका जुड़ाव पुलिस प्रशिक्षण, नेतृत्व, लोक सेवा और समुदाय-उन्मुख पहलों का मूल्यवान अनुभव लाता है, जो फाउंडेशन की एक सुरक्षित, स्वस्थ और अधिक सशक्त समाज के निर्माण की प्रतिबद्धता को मजबूत करता है।",
    expertise: [
      "Police Leadership & Training",
      "Public Safety & Security",
      "Youth Empowerment",
      "Cyber Awareness & Anti-Drug Campaigns",
      "Women's Safety & Community Engagement",
      "Fitness & Disciplined Citizenship"
    ],
    quote: "Training is the foundation of excellence and the symbol of professionalism."
  },
  {
    id: "hon-shri-sameer-wankhede-irs",
    name: "Hon. Shri. Sameer Wankhede, IRS",
    hindiName: "सम्मत श्री समीर वानखेड़े, आईआरएस",
    designation: "Advisor – Janseva Pratishthan Foundation",
    hindiDesignation: "सलाहकार – जनसेवा प्रतिष्ठान फाउंडेशन",
    credentials: "Additional Commissioner – Department of Revenue, Government of India | Indian Revenue Service (2008 Batch) | Ex-Zonal Director, Narcotics Control Bureau, Mumbai | Formerly with DRI, NIA & Customs",
    photo: "/Hon. Shri. Sameer Wankhede.png",
    category: "anti-drug",
    experienceYears: 18,
    details: "Hon. Shri. Sameer Dnyandev Wankhede is an Indian Revenue Service officer of the 2008 batch, currently posted as Additional Commissioner under the Department of Revenue, Ministry of Finance. He has served in several important enforcement and investigative assignments, including the Customs Department, Directorate of Revenue Intelligence (DRI), National Investigation Agency (NIA), and Narcotics Control Bureau (NCB), where he served as Zonal Director, Mumbai. As Advisor to Janseva Pratishthan Foundation, his experience contributes strategic guidance to the Foundation's Nasha-Mukta Bharat (Drug-Free India) initiatives — particularly in anti-drug awareness, youth empowerment, community education, responsible citizenship, and prevention of substance abuse. His association strengthens the Foundation's mission to promote a drug-free, disciplined, educated, and empowered society while supporting grassroots awareness initiatives among children, youth, families, and communities.",
    hindiDetails: "सम्मत श्री समीर ज्ञानदेव वानखेड़े भारतीय राजस्व सेवा (2008 बैच) के अधिकारी हैं और वर्तमान में राजस्व विभाग, वित्त मंत्रालय के अंतर्गत अपर आयुक्त के पद पर कार्यरत हैं। उन्होंने सीमा शुल्क विभाग, राजस्व आसूचना निदेशालय (DRI), राष्ट्रीय अन्वेषण अभिकरण (NIA) और नारकोटिक्स कंट्रोल ब्यूरो (NCB) में महत्वपूर्ण प्रवर्तन एवं जांच कार्यों में सेवा दी है, जहाँ उन्होंने मुंबई में क्षेत्रीय निदेशक के रूप में कार्य किया। जनसेवा प्रतिष्ठान फाउंडेशन के सलाहकार के रूप में, उनका अनुभव फाउंडेशन के 'नशा-मुक्त भारत' अभियान — विशेषकर नशा विरोधी जागरूकता, युवा सशक्तिकरण, सामुदायिक शिक्षा, जिम्मेदार नागरिकता और मादक द्रव्यों के सेवन की रोकथाम — में रणनीतिक मार्गदर्शन प्रदान करता है। उनका जुड़ाव फाउंडेशन के एक नशा-मुक्त, अनुशासित, शिक्षित और सशक्त समाज के निर्माण के मिशन को मजबूत करता है।",
    expertise: [
      "Anti-Drug & Nasha-Mukta Bharat",
      "Youth Empowerment",
      "Community Education",
      "Revenue Enforcement & Investigation",
      "Responsible Citizenship",
      "Substance Abuse Prevention"
    ],
    quote: "Protect your dreams. Reject drugs. Choose education, discipline and a healthier future."
  },
  {
    id: "shri-prashant-karulkar",
    name: "Shri. Prashant Karulkar",
    hindiName: "श्री प्रशांत करुलकर",
    designation: "Advisor & Mentor – Janseva Pratishthan Foundation",
    hindiDesignation: "सलाहकार एवं मार्गदर्शक – जनसेवा प्रतिष्ठान फाउंडेशन",
    credentials: "Director – Karulkar Pratishthan (Est. 1969) | Entrepreneur | Philanthropist | Social Transformer | Community Development Advocate",
    photo: "/Shri. Prashant Karulkar.png",
    category: "philanthropy",
    experienceYears: 20,
    details: "Shri. Prashant Karulkar is an entrepreneur, philanthropist, and social reformer associated with Karulkar Pratishthan, a family foundation established in 1969 with a longstanding focus on welfare and education for underprivileged communities. Through Karulkar Pratishthan, his social initiatives have included support for education, rural and tribal development, employment, environmental initiatives, and community welfare. The foundation has also undertaken humanitarian support during the COVID-19 period, including food, shelter, medical, and emergency assistance. As Advisor & Mentor to Janseva Pratishthan Foundation, his experience in social service, entrepreneurship, philanthropy, and community-oriented initiatives provides valuable strategic guidance for programs focused on education, youth empowerment, social welfare, rural development, employment opportunities, and nation-building. His mentorship strengthens the Foundation's vision of connecting social responsibility with sustainable community development, creating opportunities, and empowering people at the grassroots level.",
    hindiDetails: "श्री प्रशांत करुलकर एक उद्यमी, परोपकारी और समाज सुधारक हैं, जो करुलकर प्रतिष्ठान से जुड़े हैं — एक पारिवारिक फाउंडेशन जिसकी स्थापना 1969 में वंचित समुदायों के कल्याण और शिक्षा के उद्देश्य से की गई थी। करुलकर प्रतिष्ठान के माध्यम से उनकी सामाजिक पहलों में शिक्षा, ग्रामीण एवं आदिवासी विकास, रोजगार, पर्यावरणीय पहल और सामुदायिक कल्याण को समर्थन शामिल रहा है। फाउंडेशन ने कोविड-19 काल में भोजन, आश्रय, चिकित्सा और आपातकालीन सहायता सहित मानवीय सहायता भी प्रदान की है। जनसेवा प्रतिष्ठान फाउंडेशन के सलाहकार एवं मार्गदर्शक के रूप में, सामाजिक सेवा, उद्यमिता, परोपकार और समुदाय-उन्मुख पहलों में उनका अनुभव शिक्षा, युवा सशक्तिकरण, सामाजिक कल्याण, ग्रामीण विकास, रोजगार के अवसर और राष्ट्र निर्माण पर केंद्रित कार्यक्रमों के लिए मूल्यवान रणनीतिक मार्गदर्शन प्रदान करता है। उनका मार्गदर्शन फाउंडेशन की सामाजिक जिम्मेदारी को सतत सामुदायिक विकास से जोड़ने, अवसर पैदा करने और जमीनी स्तर पर लोगों को सशक्त बनाने की दृष्टि को मजबूत करता है।",
    expertise: [
      "Philanthropy & Social Service",
      "Rural & Tribal Development",
      "Education & Youth Empowerment",
      "Employment Generation",
      "Community Welfare",
      "Environmental Initiatives"
    ],
    quote: "Believe in yourself, that's where the magic begins."
  },
  {
    id: "dr-deepnarayan-shukla",
    name: "Dr. Deepnarayan Shukla",
    hindiName: "डॉ. दीपनारायण शुक्ला",
    designation: "Advisor – Doctors Wing & Health Awareness",
    hindiDesignation: "सलाहकार – डॉक्टर्स विंग एवं स्वास्थ्य जागरूकता",
    credentials: "Ex-Dean – Poddar Ayurvedic College | Ayurveda & Healthcare Education | Public Health Awareness | Preventive Healthcare",
    photo: "/Dr. Deepnarayan Shukla.png",
    category: "health",
    experienceYears: 30,
    details: "Dr. Deepnarayan Shukla is an experienced Ayurvedic medical and academic professional who has served as Dean of Poddar Ayurvedic College. His association with medical education and Ayurveda brings valuable knowledge to community-oriented healthcare and health-awareness initiatives. As Advisor to the Doctors Wing & Health Awareness division of Janseva Pratishthan Foundation, Dr. Shukla provides guidance for initiatives promoting preventive healthcare, Ayurveda and holistic wellness, health education, medical awareness camps, healthy living, and community health outreach. His guidance supports the Foundation in developing doctor-led health awareness programs, reaching underserved communities, and encouraging people — especially children, youth, women, and senior citizens — to adopt healthier lifestyles and seek timely healthcare.",
    hindiDetails: "डॉ. दीपनारायण शुक्ला एक अनुभवी आयुर्वेदिक चिकित्सा एवं शैक्षणिक पेशेवर हैं, जिन्होंने पोद्दार आयुर्वेदिक कॉलेज के डीन के रूप में सेवा दी है। चिकित्सा शिक्षा और आयुर्वेद से उनका जुड़ाव समुदाय-उन्मुख स्वास्थ्य सेवा और स्वास्थ्य जागरूकता पहलों के लिए मूल्यवान ज्ञान प्रदान करता है। जनसेवा प्रतिष्ठान फाउंडेशन के डॉक्टर्स विंग एवं स्वास्थ्य जागरूकता प्रभाग के सलाहकार के रूप में, डॉ. शुक्ला निवारक स्वास्थ्य सेवा, आयुर्वेद एवं समग्र कल्याण, स्वास्थ्य शिक्षा, चिकित्सा जागरूकता शिविरों, स्वस्थ जीवन शैली और सामुदायिक स्वास्थ्य आउटरीच को बढ़ावा देने वाली पहलों के लिए मार्गदर्शन प्रदान करते हैं। उनका मार्गदर्शन फाउंडेशन को डॉक्टर-नेतृत्व वाले स्वास्थ्य जागरूकता कार्यक्रम विकसित करने, वंचित समुदायों तक पहुँचने और विशेषकर बच्चों, युवाओं, महिलाओं एवं वरिष्ठ नागरिकों को स्वस्थ जीवन शैली अपनाने और समय पर स्वास्थ्य सेवा प्राप्त करने के लिए प्रोत्साहित करने में सहायता करता है।",
    expertise: [
      "Ayurveda & Holistic Wellness",
      "Preventive Healthcare",
      "Medical Education & Training",
      "Health Awareness Camps",
      "Community Health Outreach",
      "Healthy Living & Nutrition"
    ],
    quote: "Health is the foundation of a strong, productive and empowered society."
  },
  {
    id: "dr-munir-chandniwala",
    name: "Dr. Munir Chandniwala",
    hindiName: "डॉ. मुनीर चांदनीवाला",
    designation: "Advisor & Wellness Partner – Janseva Pratishthan Foundation",
    hindiDesignation: "सलाहकार एवं वेलनेस पार्टनर – जनसेवा प्रतिष्ठान फाउंडेशन",
    credentials: "Chairman & Managing Director – Influx Healthtech Limited | Pharmacist | Nutraceutical & Wellness Entrepreneur | Healthcare Manufacturing & Innovation",
    photo: "/Dr. Munir Chandniwala.jpeg",
    category: "health",
    experienceYears: 25,
    details: "Dr. Munir Abdul Ganee Chandniwala is the Founder and Managing Director of Influx Healthtech Limited, a healthcare-focused contract development and manufacturing company working across nutraceuticals, dietary supplements, cosmetics, Ayurvedic/herbal products, veterinary nutrition, and homecare. He holds a Bachelor of Pharmacy, a postgraduate qualification in Management & Business Administration, and a Ph.D.; he is a registered pharmacist with the Maharashtra State Pharmacy Council and has extensive experience in the nutraceutical, Ayurvedic, cosmetics, and healthcare-manufacturing sectors. He has also completed a Diploma in Nutrition. As Advisor & Wellness Partner to Janseva Pratishthan Foundation, Dr. Chandniwala provides strategic guidance for initiatives focused on health awareness, nutrition education, preventive wellness, sports nutrition, healthy lifestyles, youth fitness, and community health programs. His association helps the Foundation develop doctor-, nutrition-, and wellness-oriented awareness campaigns — particularly for children, youth, women, athletes, and underserved communities — supporting the broader vision of a healthier, fitter, and more empowered India.",
    hindiDetails: "डॉ. मुनीर अब्दुल गनी चांदनीवाला इनफ्लक्स हेल्थटेक लिमिटेड के संस्थापक एवं प्रबंध निदेशक हैं — एक स्वास्थ्य-केंद्रित कॉन्ट्रैक्ट डेवलपमेंट एवं मैन्युफैक्चरिंग कंपनी जो न्यूट्रास्यूटिकल्स, आहार पूरक, कॉस्मेटिक्स, आयुर्वेदिक/हर्बल उत्पाद, पशु पोषण और होमकेयर के क्षेत्र में कार्यरत है। उन्होंने बैचलर ऑफ फार्मेसी, प्रबंधन एवं व्यवसाय प्रशासन में स्नातकोत्तर योग्यता और पीएच.डी. प्राप्त की है; वे महाराष्ट्र राज्य फार्मेसी परिषद के साथ पंजीकृत फार्मासिस्ट हैं और न्यूट्रास्यूटिकल, आयुर्वेदिक, कॉस्मेटिक्स एवं स्वास्थ्य-निर्माण क्षेत्रों में उनका व्यापक अनुभव है। उन्होंने पोषण में डिप्लोमा भी पूरा किया है। जनसेवा प्रतिष्ठान फाउंडेशन के सलाहकार एवं वेलनेस पार्टनर के रूप में, डॉ. चांदनीवाला स्वास्थ्य जागरूकता, पोषण शिक्षा, निवारक वेलनेस, खेल पोषण, स्वस्थ जीवन शैली, युवा फिटनेस और सामुदायिक स्वास्थ्य कार्यक्रमों पर केंद्रित पहलों के लिए रणनीतिक मार्गदर्शन प्रदान करते हैं। उनका जुड़ाव फाउंडेशन को विशेषकर बच्चों, युवाओं, महिलाओं, खिलाड़ियों एवं वंचित समुदायों के लिए डॉक्टर-, पोषण- एवं वेलनेस-उन्मुख जागरूकता अभियान विकसित करने में सहायता करता है, जो एक स्वस्थ, फिट और अधिक सशक्त भारत की व्यापक दृष्टि का समर्थन करता है।",
    expertise: [
      "Nutraceuticals & Dietary Supplements",
      "Nutrition Education & Wellness",
      "Preventive Healthcare",
      "Sports Nutrition & Youth Fitness",
      "Ayurvedic & Herbal Products",
      "Healthcare Manufacturing & Innovation"
    ],
    quote: "Better health begins with better awareness, better nutrition and a commitment to wellness."
  },
];

// ============================================================
// ADVISORY CHARTER
// ============================================================
export const ADVISORY_CHARTER: AdvisoryCharter = {
  title: "Advisory Council Mandate & Ethics Charter",
  hindiTitle: "सलाहकार परिषद अधिदेश एवं आचार संहिता",
  summary: "The Advisory Panel of Janseva Pratishthan Foundation serves as an independent, honorary body of distinguished jurists, medical practitioners, educational policy scholars, and defense veterans. Their mandate is to provide governance oversight, strategic counsel, and ensure uncompromised statutory integrity across all foundation initiatives.",
  hindiSummary: "जनसेवा प्रतिष्ठान फाउंडेशन की सलाहकार समिति प्रतिष्ठित न्यायविदों, डॉक्टरों, शिक्षाविदों और सैन्य अधिकारियों की एक स्वतंत्र व मानद परिषद है, जो ट्रस्ट के कार्यक्रमों में पारदर्शिता, प्रभावशीलता और उच्च नैतिक मानकों को सुनिश्चित करती है।",
  pillars: [
    {
      title: "Honorary & Independent",
      hindiTitle: "मानद एवं निष्पक्ष परामर्श",
      desc: "All advisory members serve in a purely honorary, pro-bono capacity to preserve neutral, ethical, and fearless guidance."
    },
    {
      title: "Statutory 80G & Legal Integrity",
      hindiTitle: "वैधानिक 80G एवं विधिक शुचिता",
      desc: "Active review of audit reports, tax filings, legal charters, and regulatory disclosures to guarantee complete public trust."
    },
    {
      title: "Last-Mile Impact Audits",
      hindiTitle: "ज़मीनी प्रभाव का प्रत्यक्ष मूल्यांकन",
      desc: "Regular field inspections of laptop distributions, Swabhiman tailoring centers, and mobile medical camps."
    },
    {
      title: "Strategic Horizon Planning",
      hindiTitle: "दीर्घकालिक सामाजिक दृष्टि",
      desc: "Architecting 5-year intervention roadmaps to address emerging challenges like cyber crime, substance abuse, and digital inequality."
    }
  ]
};

// ============================================================
// CATEGORIES
// ============================================================
export const ADVISOR_CATEGORIES: AdvisorCategory[] = [
  {
    id: "all",
    label: "All Advisors",
    hindiLabel: "सभी सलाहकार"
  },
  {
    id: "governance",
    label: "Legal & Governance",
    hindiLabel: "विधिक एवं शासन",
    longLabel: "Legal & Statutory Governance",
    longHindiLabel: "विधिक एवं वैधानिक शासन",
    icon: "Scale",
    iconColor: "text-amber-500"
  },
  {
    id: "health",
    label: "Healthcare",
    hindiLabel: "स्वास्थ्य एवं चिकित्सा",
    longLabel: "Public Health & Medicine",
    longHindiLabel: "जनस्वास्थ्य एवं चिकित्सा",
    icon: "HeartPulse",
    iconColor: "text-rose-500"
  },
  {
    id: "education",
    label: "Education & STEM",
    hindiLabel: "शिक्षा एवं डिजिटल",
    longLabel: "Education & Digital Literacy",
    longHindiLabel: "बालिका शिक्षा एवं डिजिटल साक्षरता",
    icon: "GraduationCap",
    iconColor: "text-emerald-500"
  },
  {
    id: "empowerment",
    label: "Women Empowerment",
    hindiLabel: "महिला सशक्तिकरण",
    longLabel: "Women Empowerment & Enterprise",
    longHindiLabel: "महिला सशक्तिकरण एवं स्वावलंबन",
    icon: "Sparkles",
    iconColor: "text-sky-500"
  },
  {
    id: "relief",
    label: "Disaster & Logistics",
    hindiLabel: "आपदा एवं रसद",
    longLabel: "Disaster Relief & Logistics",
    longHindiLabel: "आपदा प्रबंधन एवं रसद",
    icon: "ShieldCheck",
    iconColor: "text-blue-500"
  },
  {
    id: "youth-safety",
    label: "Youth & Cyber Safety",
    hindiLabel: "युवा एवं साइबर सुरक्षा",
    longLabel: "Youth & Cyber Security",
    longHindiLabel: "युवा संरक्षण एवं साइबर सुरक्षा",
    icon: "Award",
    iconColor: "text-purple-500"
  }
];

// ============================================================
// HIGHLIGHTS
// ============================================================
export const ADVISOR_HIGHLIGHTS: AdvisorHighlight[] = [
  {
    label: "100% Honorary & Pro-Bono",
    hindiLabel: "100% मानद एवं गैर-लाभकारी",
    iconColor: "text-emerald-500"
  },
  {
    label: "80G & 12A Statutory Audit",
    hindiLabel: "80G एवं 12A वैधानिक शुचिता",
    iconColor: "text-amber-500"
  },
  {
    label: "Field Ground Verification",
    hindiLabel: "प्रत्यक्ष ज़मीनी निरीक्षण",
    iconColor: "text-sky-500"
  }
];

// ============================================================
// STATS
// ============================================================
export const ADVISOR_STATS: AdvisorStat[] = [
  {
    value: "8+",
    label: "Senior Advisors",
    hindiLabel: "विशेषज्ञ सलाहकार"
  },
  {
    value: "25+",
    label: "Avg Yrs Experience",
    hindiLabel: "औसत वर्ष अनुभव"
  },
  {
    value: "100%",
    label: "Honorary Service",
    hindiLabel: "मानद सेवा"
  },
  {
    value: "80G",
    label: "Audited Compliance",
    hindiLabel: "ऑडिटेड अनुपालन"
  }
];

// ============================================================
// CREDENTIALS
// ============================================================
export const ADVISOR_CREDENTIALS: AdvisorCredential[] = [
  {
    label: "Status",
    hindiLabel: "भूमिका",
    value: "100% Honorary (Pro-Bono)",
    hindiValue: "100% मानद (Pro-Bono)",
    valueClass: "text-emerald-600 dark:text-emerald-400"
  },
  {
    label: "Mandate",
    hindiLabel: "प्राथमिक अधिदेश",
    value: "Strategic Governance",
    hindiValue: "रणनीतिक एवं वैधानिक",
    valueClass: "dark:text-slate-200 text-slate-800"
  },
  {
    label: "Compliance",
    hindiLabel: "अनुपालन",
    value: "80G & 12A Certified",
    hindiValue: "80G & 12A Certified",
    valueClass: "text-amber-700 dark:text-amber-300"
  }
];