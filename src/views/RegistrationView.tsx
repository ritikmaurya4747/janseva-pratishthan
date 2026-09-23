import { Fragment } from "react";
import Link from "next/link";
import { Award, CheckCircle2, Heart } from "lucide-react";
import { FoundationLogo } from "@/components/FoundationLogo";
import { LegalDocsGrid } from "@/components/registration/LegalDocsGrid";
import { LEGAL_80G_BENEFITS, TRANSPARENCY_CHARTER } from "@/data";
import { ROUTES } from "@/lib/routes";

/** Server Component for /registration. The certificate viewer is a client island. */
export function RegistrationView() {
  return (
    <div
      id="registration-page"
      className="min-h-screen dark:bg-[#050e1c] dark:text-slate-100 bg-[#fbf9f4] text-slate-900 py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-gradient-to-r dark:from-blue-950 dark:to-[#2c0812] bg-amber-100 text-amber-900 border border-transparent hover:border-amber-300/60 text-sm font-semibold uppercase tracking-widest shadow-sm">
            <FoundationLogo size="xs" showLabel={false} />
            <span>Statutory Compliance & Accreditation</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 tracking-tight">
            Trust Registration & 80G Transparency
          </h1>
          <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
            The Janseva Pratishthan Foundation operates under strict legal,
            statutory, and ethical governance. Review our official
            registrations, certifications, and government recognitions below.
          </p>
        </div>

        {/* 80G & 12A Highlight Banner */}
        <div className="rounded-3xl dark:bg-gradient-to-r dark:from-[#0c2242] dark:via-[#240810] dark:to-[#0c2242] bg-white border border-transparent hover:border-amber-300/60 p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-sm font-bold uppercase tracking-wider bg-amber-400 text-slate-950 px-2.5 py-1 rounded shadow">
                Tax Benefit for Indian Citizens & Corporates
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold dark:text-white text-slate-900">
                50% Tax Exemption Under Section 80G
              </h2>
              <p className="text-sm dark:text-slate-200 text-slate-700 leading-relaxed">
                All donations made to the Janseva Pratishthan Foundation qualify
                for a deduction under Section 80G of the Income Tax Act, 1961.
                As soon as your contribution is verified, an official 80G
                receipt along with our statutory exemption order number is
                issued automatically to your email for filing your annual income
                tax return.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-sm dark:text-amber-200 text-amber-800">
                {LEGAL_80G_BENEFITS.map((benefit) => (
                  <span key={benefit} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center gap-3">
              <Link
                href={ROUTES.donate}
                className="w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 shadow-[0_0_20px_rgba(212,175,55,0.4)] border-none transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-slate-950" />
                <span>Make an 80G Donation</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Certificates grid + viewer modal (client island) */}
        <LegalDocsGrid />

        {/* Ethical Transparency Charter */}
        <div className="p-8 rounded-3xl dark:bg-gradient-to-r dark:from-[#0c2242] dark:via-[#210810] dark:to-[#0c2242] bg-white border border-transparent hover:border-amber-300/60 space-y-4 max-w-4xl mx-auto text-center shadow-xl">
          <Award className="w-10 h-10 text-amber-500 mx-auto" />
          <h3 className="font-display text-2xl font-bold dark:text-white text-slate-900">
            Our Public Transparency Charter
          </h3>
          <p className="text-sm dark:text-slate-300 text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {TRANSPARENCY_CHARTER.map((line, index) => (
              <Fragment key={line}>
                {index + 1}. {line}
                {index < TRANSPARENCY_CHARTER.length - 1 && <br />}
              </Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
