import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { AdvisoryPanelSection } from "@/components/advisory/AdvisoryPanelSection";
import { FoundationLogo } from "@/components/FoundationLogo";
import { SecretaryPhoto } from "@/components/ui/SecretaryPhoto";
import { FOUNDATION_INFO, STORY } from "@/data";
import { ROUTES } from "@/lib/routes";

const { founder, generalSecretary: secretary } = FOUNDATION_INFO;

/**
 * Server Component for /our-story.
 * Client islands: <SecretaryPhoto> (reads localStorage) and <AdvisoryPanelSection> (filters).
 */
export function OurStoryView() {
  return (
    <div
      id="our-story-page"
      className="min-h-screen dark:bg-[#050e1c] dark:text-slate-100 bg-[#fbf9f4] text-slate-900 py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-linear-to-r dark:from-blue-950 dark:to-[#2c0812] bg-amber-100 text-amber-900 border border-transparent hover:border-amber-300/60 text-sm font-semibold uppercase tracking-widest shadow-sm">
            <FoundationLogo size="xs" showLabel={false} />
            <span>The Genesis & The Vision</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 tracking-tight">
            Our Story: Turning Compassion Into Lasting Change
          </h1>
          <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
            "Inequality is not inevitable; it can be changed." Discover how a
            personal pledge evolved into a nationwide movement uplifting women,
            children, and neglected communities.
          </p>
        </div>

        {/* Founder Feature Section */}
        <div className="rounded-3xl dark:bg-linear-to-r dark:from-[#0c2242] dark:via-[#240810] dark:to-[#0c2242] bg-white border border-slate-200/90 dark:border-amber-400/20 p-6 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Founder Avatar & Bio Card with Photo */}
            <div className="lg:col-span-5 xl:col-span-4 text-center lg:text-left space-y-4 lg:border-r border-slate-200 dark:border-white/10 lg:pr-8">
              <div className="relative w-full max-w-70 sm:max-w-[320px] aspect-4/5 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl p-1 bg-linear-to-tr from-amber-400 via-yellow-100 to-amber-600">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src={founder.photo}
                    alt={`${founder.displayName} - ${founder.role}`}
                    fill
                    priority
                    sizes="(min-width: 640px) 320px, 280px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">
                  Founder & Chairperson
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold dark:text-white text-slate-900">
                  Shabbir Shaikh
                </h2>
                <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-500">
                  Social Activist, Humanitarian & Grassroots Philanthropist
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
                {STORY.founderTags.map((tag, index) => (
                  <span
                    key={tag}
                    className={
                      index === 0
                        ? "text-xs px-2.5 py-1 rounded-full dark:bg-amber-950/80 dark:text-amber-200 bg-amber-100 text-amber-900 font-semibold shadow-sm border border-amber-400/30"
                        : "text-xs px-2.5 py-1 rounded-full dark:bg-blue-950/80 dark:text-amber-200 bg-blue-100 text-blue-900 font-semibold shadow-sm border border-blue-400/30"
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Founder Narrative */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-600 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />A Letter from
                the Founder
              </div>
              <blockquote className="font-editorial text-lg sm:text-xl dark:text-amber-100/95 text-slate-800 italic leading-relaxed">
                &ldquo;{founder.quote}&rdquo;
              </blockquote>
              <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                "Having worked closely with families across grassroots
                settlements, I recognized that lasting upliftment requires an
                unyielding, 360-degree shield for our communities. A talented
                youngster denied sports coaching and gear, a family trapped
                without access to basic healthcare, vulnerable citizens deprived
                of legal protection, or youth falling prey to digital scams and
                substance abuse—these are urgent, interconnected challenges that
                we cannot ignore."
              </p>
              <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                "Janseva Pratishthan Foundation was established with a singular
                conviction: to convert compassion into accountable, transparent
                frontline service. Through our six core pillars—Sports, Health,
                Social Justice & Welfare, Anti-Cyber Crime, Anti-Drugs, and
                Youth Empowerment—we measure our impact not by grand claims, but
                by the tangible security, dignity, and aspirations restored in
                every life we touch."
              </p>
              <div className="pt-4 mt-2 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-display font-bold dark:text-amber-200 text-slate-900 text-sm">
                    Mr. Shabbir Shaikh
                  </p>
                  <p className="text-xs dark:text-slate-400 text-slate-500">
                    Founder & Chairperson — Janseva Pratishthan Foundation
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Statutory Trust Founder
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* General Secretary Profile & Operational Commitment */}
        <div className="rounded-3xl dark:bg-linear-to-br dark:from-[#0c2242] dark:via-[#112745] dark:to-[#1a0710] bg-white border border-slate-200/90 dark:border-amber-400/20 p-6 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Secretary Narrative */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-4 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-600 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                Message from General Secretary
              </div>
              <blockquote className="font-editorial text-lg sm:text-xl dark:text-amber-100/95 text-slate-800 italic leading-relaxed">
                &ldquo;{secretary.quote}&rdquo;
              </blockquote>
              <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                "From transparent 80G tax certifications and rigorous statutory
                compliance to daily grassroots logistics, our mission is to
                ensure zero intermediate leakage. When a patron or donor places
                trust in Janseva Pratishthan Foundation, our administrative duty
                is to turn every single rupee into verified, life-changing
                interventions for youth, women, and marginalized families."
              </p>

              {/* Strategic Operational Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {secretary.pillars.slice(0, 2).map((pillar) => (
                  <div
                    key={pillar}
                    className="flex items-start gap-2.5 p-3 rounded-xl dark:bg-white/5 bg-slate-50 border border-slate-200/80 dark:border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 mt-2 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-display font-bold dark:text-amber-200 text-slate-900 text-sm">
                    Mr. Deepak Parki
                  </p>
                  <p className="text-xs dark:text-slate-400 text-slate-500">
                    General Secretary — Executive Operations & Governance
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Executive Operations Head
                </div>
              </div>
            </div>

            {/* Secretary Bio Sidebar with Full-Sized Portrait matching Founder */}
            <div className="lg:col-span-5 xl:col-span-4 text-center lg:text-left space-y-4 lg:border-l border-slate-200 dark:border-white/10 lg:pl-8 order-1 lg:order-2">
              <div className="relative w-full max-w-70 sm:max-w-[320px] aspect-4/5 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl p-1 bg-linear-to-tr from-amber-400 via-yellow-100 to-amber-600">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
                  <SecretaryPhoto
                    className="object-cover object-top"
                    sizes="(min-width: 640px) 320px, 280px"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">
                  General Secretary
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold dark:text-white text-slate-900">
                  Deepak Parki
                </h2>
                <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-500">
                  Executive Operations, Governance & Institutional Strategy
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
                {STORY.secretaryTags.map((tag, index) => (
                  <span
                    key={tag}
                    className={
                      index === 0
                        ? "text-xs px-2.5 py-1 rounded-full dark:bg-amber-950/80 dark:text-amber-200 bg-amber-100 text-amber-900 font-semibold shadow-sm border border-amber-400/30"
                        : "text-xs px-2.5 py-1 rounded-full dark:bg-blue-950/80 dark:text-amber-200 bg-blue-100 text-blue-900 font-semibold shadow-sm border border-blue-400/30"
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Guiding Principles Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-sm font-bold uppercase tracking-widest dark:text-amber-300 text-amber-800">
              Core Tenets
            </span>
            <h3 className="font-display text-3xl font-bold dark:text-white text-slate-900">
              The Principles That Guide Every Action
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STORY.principles.map((pr, idx) => (
              <div
                key={pr.title}
                className="p-6 rounded-2xl dark:bg-linear-to-br dark:from-[#0c2242]/90 dark:to-[#1d070f]/90 bg-white border border-slate-200/80 transition-all space-y-2.5 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg dark:bg-amber-400/20 dark:text-amber-300 bg-amber-100 text-amber-900 flex items-center justify-center text-sm font-bold font-mono border border-transparent hover:border-amber-300/60">
                    0{idx + 1}
                  </div>
                  <h4 className="font-display text-lg font-bold dark:text-white text-slate-900">
                    {pr.title}
                  </h4>
                </div>
                <p className="text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Honorary Advisory Panel Section */}
        <div className="pt-8">
          <AdvisoryPanelSection />
        </div>

        {/* Governance & Trust Commitment */}
        <div className="rounded-2xl dark:bg-linear-to-br dark:from-[#0a1b33] dark:to-[#1f060d] bg-linear-to-br from-amber-100/90 via-amber-50 to-amber-100/90 border border-transparent hover:border-amber-300/60 p-8 text-center space-y-4 max-w-4xl mx-auto shadow-xl">
          <ShieldCheck className="w-10 h-10 text-amber-500 mx-auto" />
          <h3 className="font-display text-2xl font-bold dark:text-white text-slate-900">
            100% Commitment to Financial & Moral Integrity
          </h3>
          <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed max-w-2xl mx-auto">
            The Janseva Pratishthan Foundation is governed by a distinguished
            board of educators, legal advisors, and community workers. Every
            rupee received is accounted for under statutory Indian charitable
            laws, with third-party audits and public utilization reporting.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href={ROUTES.registration}
              className="px-5 py-2.5 rounded-xl dark:bg-amber-400/20 dark:hover:bg-amber-400/30 dark:text-amber-200 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-transparent hover:border-amber-300/60 text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              View Statutory Registrations & 80G
            </Link>
            <Link
              href={ROUTES.donate}
              className="px-5 py-2.5 rounded-xl bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 text-slate-950 text-sm font-bold uppercase tracking-wider hover:from-amber-200 hover:to-yellow-100 transition-colors shadow cursor-pointer border-none"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
