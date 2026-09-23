import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { CategoryIcon } from "@/components/advisory/CategoryIcon";
import { FallbackImage } from "@/components/ui/FallbackImage";
import { T } from "@/components/ui/T";
import {
  ADVISORY_CREDENTIALS,
  ADVISORY_MEMBERS,
  getAdvisoryCategory,
  getAdvisoryMember,
} from "@/data";
import { ROUTES, advisorHref } from "@/lib/routes";

/** Server Component for /advisory-panel/[slug]. Member data comes from advisory.json. */
export function AdvisoryMemberView({ slug }: { slug: string }) {
  const member = getAdvisoryMember(slug);
  if (!member) notFound();

  const category = getAdvisoryCategory(member.category);
  const categoryLabel = category?.longLabel ?? "Advisory Council";
  const categoryLabelHindi = category?.longHindiLabel ?? "सलाहकार परिषद";
  const otherAdvisors = ADVISORY_MEMBERS.filter((m) => m.id !== member.id);

  return (
    <div
      id="advisory-member-detail-page"
      className="min-h-screen dark:bg-[#050e1c] dark:text-slate-100 bg-[#fbf9f4] text-slate-900 py-8 sm:py-12 lg:py-16 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Navigation & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
          >
            <Link
              href={ROUTES.home}
              className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors border-none bg-transparent cursor-pointer p-0"
            >
              <T en={"Home"} hi={"होम"} />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href={ROUTES.advisory}
              className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors border-none bg-transparent cursor-pointer p-0"
            >
              <T en={"Advisory Panel"} hi={"सलाहकार समिति"} />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-amber-700 dark:text-amber-300 line-clamp-1">
              <T en={member.name} hi={member.hindiName} />
            </span>
          </nav>

          <Link
            href={ROUTES.advisory}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider dark:bg-white/10 hover:dark:bg-amber-400/20 dark:text-amber-300 bg-white hover:bg-amber-50 text-amber-900 border border-slate-200 dark:border-white/10 shadow-sm transition-all cursor-pointer w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              <T en={"Back to Advisory Panel"} hi={"सभी सलाहकार देखें"} />
            </span>
          </Link>
        </div>

        {/* Main Member Profile Dossier */}
        <div className="rounded-3xl dark:bg-[#08182e] bg-white border border-slate-200 dark:border-amber-400/30 p-6 sm:p-10 lg:p-12 shadow-2xl space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Portrait & Key Credentials */}
            <div className="lg:col-span-4 space-y-6">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-600 shadow-xl">
                <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-900">
                  <FallbackImage
                    src={member.photo}
                    fallbackName={member.name}
                    alt={`${member.name} - ${member.designation}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {member.experienceYears && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold dark:bg-black/80 bg-white/95 dark:text-amber-300 text-amber-900 backdrop-blur-md shadow-md border border-amber-400/40">
                      {member.experienceYears}+{" "}
                      <T en={"Yrs Experience"} hi={"वर्ष अनुभव"} />
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-black/80 text-white backdrop-blur-md border border-white/20">
                    <CategoryIcon category={member.category} size="w-4 h-4" />
                    <span>
                      <T en={categoryLabel} hi={categoryLabelHindi} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Summary Cards */}
              <div className="rounded-2xl dark:bg-white/5 bg-slate-50 border border-slate-200/80 dark:border-white/10 p-5 space-y-3.5">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 border-b border-slate-200 dark:border-white/10 pb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>
                    <T en={"Council Credentials"} hi={"संस्थागत स्थिति"} />
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  {ADVISORY_CREDENTIALS.map((row) => (
                    <div key={row.label} className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">
                        <T en={row.label} hi={row.hindiLabel} />
                      </span>
                      <span className={`font-semibold ${row.valueClass}`}>
                        <T en={row.value} hi={row.hindiValue} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Full Detail, Quote, Bio, and Expertise */}
            <div className="lg:col-span-8 space-y-6">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider dark:bg-amber-400/10 dark:text-amber-300 bg-amber-100 text-amber-900 border border-amber-400/30">
                <CategoryIcon category={member.category} size="w-4 h-4" />
                <span>
                  <T en={categoryLabel} hi={categoryLabelHindi} />
                </span>
              </div>

              {/* Title & Designations */}
              <div className="space-y-2">
                <h1 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-slate-900 tracking-tight leading-tight">
                  <T en={member.name} hi={member.hindiName} />
                </h1>

                <p className="font-sans text-base sm:text-xl font-bold text-amber-700 dark:text-amber-300">
                  <T en={member.designation} hi={member.hindiDesignation} />
                </p>

                <p className="font-sans text-xs sm:text-sm font-medium dark:text-slate-300 text-slate-600 leading-normal">
                  {member.credentials}
                </p>
              </div>

              {/* Quote Block */}
              {member.quote && (
                <div className="p-5 sm:p-6 rounded-2xl dark:bg-gradient-to-r dark:from-amber-400/15 dark:to-transparent bg-amber-50/80 border-l-4 border-amber-400 dark:border-amber-400 space-y-2">
                  <Quote className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <p className="text-sm sm:text-base italic dark:text-amber-100 text-slate-800 leading-relaxed font-sans">
                    "{member.quote}"
                  </p>
                </div>
              )}

              {/* Comprehensive Bio & Counsel Focus */}
              <div className="space-y-3 pt-2">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  <T
                    en={"Full Background & Strategic Advisory Counsel"}
                    hi={"विस्तृत पृष्ठभूमि एवं परामर्श अधिदेश"}
                  />
                </h2>
                <div className="space-y-4 text-sm sm:text-base dark:text-slate-200 text-slate-700 leading-relaxed">
                  <p>
                    <T en={member.details} hi={member.hindiDetails} />
                  </p>
                  <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                    <T
                      en={
                        "Serving as an independent honorary counsel to Janseva Pratishthan Foundation, their guidance directly oversees field efficacy, compliance with Section 80G/12A standards, and continuous alignment with compassionate grassroots empowerment."
                      }
                      hi={
                        "जनसेवा प्रतिष्ठान के स्वतंत्र सलाहकार के रूप में, वे यह सुनिश्चित करते हैं कि फाउंडेशन के सभी कार्य वैधानिक नियमों, 80G आयकर शुचिता और ज़मीनी प्रभाव के उच्चतम मानकों के अनुरूप संचालित हों।"
                      }
                    />
                  </p>
                </div>
              </div>

              {/* Core Domains of Oversight / Expertise */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/10">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  <T
                    en={"Core Domains of Oversight & Focus"}
                    hi={"निगरानी एवं विशेषज्ञता के प्रमुख क्षेत्र"}
                  />
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {member.expertise.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold dark:bg-white/10 dark:text-amber-200 bg-amber-100 text-amber-950 border border-amber-400/30 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-4">
                <Link
                  href={ROUTES.contact}
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider dark:bg-amber-400 dark:text-slate-950 bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg hover:shadow-xl transition-all cursor-pointer border-none"
                >
                  <T
                    en={"Contact Advisory Office"}
                    hi={"सचिवालय से संपर्क करें"}
                  />
                </Link>

                <Link
                  href={ROUTES.donate}
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider dark:bg-white/10 dark:hover:bg-white/20 dark:text-white bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 dark:border-white/10 shadow transition-all cursor-pointer"
                >
                  <T
                    en={"Support Programs (80G Tax Exemption)"}
                    hi={"80G कर छूट के साथ दान करें"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Other Advisory Members Carousel/Grid */}
        <div className="space-y-6 pt-6 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
            <div>
              <h3 className="font-sans text-xl sm:text-2xl font-bold dark:text-white text-slate-900">
                <T
                  en={"Other Esteemed Advisory Members"}
                  hi={"सलाहकार परिषद के अन्य सदस्य"}
                />
              </h3>
              <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 font-sans">
                <T
                  en={
                    "Distinguished professionals stewarding our mission across healthcare, legal, education & disaster response"
                  }
                  hi={
                    "जनसेवा प्रतिष्ठान को मार्गदर्शन देने वाले अन्य प्रतिष्ठित विशेषज्ञ"
                  }
                />
              </p>
            </div>

            <Link
              href={ROUTES.advisory}
              className="text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-300 hover:underline inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 font-sans"
            >
              <span>
                <T en={"View All"} hi={"सभी देखें"} />
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherAdvisors.slice(0, 4).map((other) => (
              <Link
                key={other.id}
                href={advisorHref(other.id)}
                className="group rounded-2xl dark:bg-[#0c2242] bg-white border border-slate-200 dark:border-white/10 hover:border-amber-400/60 p-4 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between font-sans"
              >
                <div className="space-y-3">
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900">
                    <FallbackImage
                      src={other.photo}
                      fallbackName={other.name}
                      alt={other.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <h4 className="font-sans text-sm font-bold dark:text-white text-slate-900 group-hover:text-amber-500 transition-colors line-clamp-1">
                      <T en={other.name} hi={other.hindiName} />
                    </h4>
                    <p className="font-sans text-xs font-semibold text-amber-700 dark:text-amber-300 line-clamp-1">
                      {other.designation}
                    </p>
                    <p className="font-sans text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {other.credentials}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-300">
                  <span>
                    <T en={"View Profile"} hi={"प्रोफ़ाइल देखें"} />
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
