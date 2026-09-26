import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Heart,
  ShieldCheck,
  Users,
} from "lucide-react";
import { FoundationLogo } from "@/components/FoundationLogo";
import { FOCUS_AREAS, STATUTORY_POINTS, getFocusArea } from "@/data";
import { Icon } from "@/lib/icons";
import { ROUTES, donateHref, pillarHref } from "@/lib/routes";

/**
 * Server Component for /our-work/[slug].
 * The route param is the only input — the pillar itself is looked up from pillars.json.
 */
export function PillarDetailView({ slug }: { slug: string }) {
  const pillar = getFocusArea(slug);
  if (!pillar) notFound();

  return (
    <div
      id="pillar-dedicated-page"
      className="min-h-screen dark:bg-[#050e1c] dark:text-slate-100 bg-[#fbf9f4] text-slate-900 py-10 lg:py-14"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumbs & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-none pb-2">
          <div className="flex items-center gap-2 text-sm dark:text-slate-400 text-slate-500">
            <Link
              href={ROUTES.home}
              className="dark:hover:text-amber-200 hover:text-amber-800 transition-colors cursor-pointer border-none"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href={ROUTES.ourWork}
              className="dark:hover:text-amber-200 hover:text-amber-800 transition-colors cursor-pointer border-none"
            >
              Our Work
            </Link>
            <span>/</span>
            <span className="dark:text-amber-300 text-amber-800 font-semibold">
              {pillar.title}
            </span>
          </div>

          <Link
            href={ROUTES.ourWork}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl dark:bg-[#0c2242] dark:hover:bg-[#153461] dark:text-amber-200 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-transparent hover:border-amber-300/60 text-sm font-semibold shadow-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All 10 Pillars</span>
          </Link>
        </div>

        {/* Dedicated Program Hero Card */}
        <div className="relative rounded-3xl overflow-hidden dark:bg-linear-to-br dark:from-[#0c2242] dark:via-[#240810] dark:to-[#0c2242] bg-white border border-transparent hover:border-amber-300/60 p-6 sm:p-12 shadow-xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-14 h-14 max-sm:shrink-0 rounded-2xl flex items-center justify-center shadow-lg border-none"
                style={{
                  backgroundColor: `${pillar.accentColor}25`,
                  color: pillar.accentColor,
                }}
              >
                <Icon name={pillar.iconName} className="w-7 h-7" />
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.24em] max-sm:tracking-widest dark:text-amber-400 text-amber-800 block">
                  Janseva Pratishthan Impact Pillar
                </span>
                <span className="text-sm px-2.5 py-0.5 rounded-full dark:bg-blue-950 dark:text-amber-200 bg-amber-100 text-amber-900 font-semibold uppercase tracking-wider border-none shadow-sm">
                  {pillar.tag}
                </span>
              </div>
            </div>

            <div className="px-4 py-2 rounded-xl dark:bg-[#08182e]/80 bg-amber-50 border border-transparent hover:border-amber-300/60 shadow text-right max-sm:w-full max-sm:text-left">
              <span className="text-sm uppercase tracking-wider dark:text-slate-400 text-slate-500 block">
                Impact Reach
              </span>
              <span className="text-base sm:text-lg font-bold dark:text-amber-300 text-amber-800">
                {pillar.stats}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-3xl sm:text-5xl font-bold dark:text-white text-slate-900 tracking-tight">
              {pillar.title}
            </h1>
            {pillar.hindiTitle && (
              <p className="text-lg sm:text-xl dark:text-amber-300 text-amber-800 font-medium">
                {pillar.hindiTitle}
              </p>
            )}
            <p className="text-sm sm:text-base dark:text-slate-300 text-slate-700 max-w-3xl leading-relaxed pt-1">
              {pillar.shortDesc}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={donateHref(pillar.id)}
              className="px-7 py-3.5 max-sm:w-full max-sm:justify-center max-sm:px-4 max-sm:text-center rounded-xl font-bold text-sm uppercase tracking-wider text-slate-950 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 shadow-[0_0_25px_rgba(212,175,55,0.45)] border-none transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 fill-slate-950" />
              <span>Sponsor / Support this Initiative (80G)</span>
            </Link>
            <Link
              href={ROUTES.joinUs}
              className="px-6 py-3.5 max-sm:w-full max-sm:justify-center max-sm:px-4 max-sm:text-center rounded-xl font-semibold text-sm tracking-wider dark:text-amber-200 dark:bg-[#08182e] dark:hover:bg-[#122e59] text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Users className="w-4 h-4 dark:text-amber-300 text-amber-800" />
              <span>Volunteer for this Program</span>
            </Link>
          </div>
        </div>

        {/* Program In-Depth Narrative & Mission Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Comprehensive Narrative */}
            <div className="rounded-2xl dark:bg-linear-to-br dark:from-[#0c2242]/90 dark:to-[#1b080f]/90 bg-white border border-slate-200/80 p-6 sm:p-8 shadow-md space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold dark:text-white text-slate-900">
                Program Vision & Grassroots Strategy
              </h3>
              <p className="text-sm dark:text-slate-200 text-slate-700 leading-relaxed">
                {pillar.fullDesc}
              </p>
              <p className="text-sm dark:text-slate-300 text-slate-600 leading-relaxed pt-2">
                Under the stewardship of Founder Shabbir Shaikh, this initiative
                operates with uncompromised transparency. Every rupee
                contributed directly supports beneficiaries on the ground
                without bureaucratic overheads.
              </p>
            </div>

            {/* Active Initiatives Checklist */}
            <div className="rounded-2xl dark:bg-linear-to-br dark:from-[#0c2242]/90 dark:to-[#1b080f]/90 bg-white border border-slate-200/80 p-6 sm:p-8 shadow-md space-y-5">
              <h3 className="font-display text-lg sm:text-xl font-bold dark:text-amber-200 text-amber-900">
                Core On-Ground Initiatives & Interventions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillar.initiatives.map((item) => (
                  <div
                    key={item}
                    className="p-4 rounded-xl dark:bg-[#08182e] bg-slate-50 border border-slate-200/60 flex items-start gap-3 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm dark:text-slate-200 text-slate-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Statutory Certification & Trust */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl dark:bg-[#08182e] bg-white border border-slate-200/80 shadow-md space-y-4">
              <div className="flex items-center gap-2.5 dark:text-amber-300 text-amber-800">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <h4 className="text-sm font-bold uppercase tracking-wider">
                  Statutory Transparency
                </h4>
              </div>
              <ul className="space-y-3 text-sm dark:text-slate-300 text-slate-600">
                {STATUTORY_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={ROUTES.registration}
                className="block w-full py-2.5 rounded-xl dark:bg-amber-400/20 dark:hover:bg-amber-400/30 dark:text-amber-200 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-transparent hover:border-amber-300/60 text-sm font-semibold transition-colors cursor-pointer text-center"
              >
                View Trust Certificates
              </Link>
            </div>

            {/* Quick Donor Callout */}
            <div className="p-6 rounded-2xl dark:bg-linear-to-b dark:from-[#1a0812] dark:to-[#0c2242] bg-linear-to-b from-amber-50 to-amber-100/70 border border-transparent hover:border-amber-300/60 shadow-md text-center space-y-3">
              <FoundationLogo size="sm" showLabel={false} className="mx-auto" />
              <h4 className="font-display text-base font-bold dark:text-white text-slate-900">
                Join Our Mission
              </h4>
              <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Every small contribution creates ripples of lasting change
                across India.
              </p>
              <Link
                href={donateHref(pillar.id)}
                className="block w-full max-sm:px-4 max-sm:tracking-wide max-sm:text-center py-3 rounded-xl font-bold text-sm uppercase tracking-wider text-slate-950 bg-linear-to-r from-amber-300 to-yellow-400 shadow-md border-none cursor-pointer"
              >
                Contribute Today
              </Link>
            </div>
          </div>
        </div>

        {/* Explore Other Focus Pillars Navigation Carousel */}
        <div className="pt-8 border-none space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] dark:text-amber-300 text-amber-800 block">
                Other Focus Areas
              </span>
              <h3 className="font-display text-xl font-bold dark:text-white text-slate-900">
                Explore More Pillars
              </h3>
            </div>
            <Link
              href={ROUTES.ourWork}
              className="text-sm dark:text-amber-300 dark:hover:text-amber-100 text-amber-800 hover:text-amber-950 font-semibold cursor-pointer border-none"
            >
              View All 10 →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {FOCUS_AREAS.filter((c) => c.id !== pillar.id)
              .slice(0, 3)
              .map((other) => (
                <Link
                  key={other.id}
                  href={pillarHref(other.id)}
                  className="text-left p-5 rounded-2xl dark:bg-[#08182e] dark:hover:bg-[#122e57] bg-white hover:bg-amber-50 border border-slate-200/80 shadow-sm transition-all space-y-2 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold uppercase tracking-wider dark:text-amber-300 text-amber-800">
                      {other.tag}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="font-display text-base font-bold dark:text-white dark:group-hover:text-amber-200 text-slate-900 group-hover:text-amber-800 transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-sm dark:text-slate-400 text-slate-500 line-clamp-2 leading-relaxed">
                    {other.shortDesc}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
