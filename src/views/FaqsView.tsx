import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaqExplorer } from "@/components/faqs/FaqExplorer";
import { FoundationLogo } from "@/components/FoundationLogo";
import { ROUTES } from "@/lib/routes";

/** Server Component for /faqs. Search, filters and the accordion are a client island. */
export function FaqsView() {
  return (
    <div
      id="faqs-page"
      className="min-h-screen dark:bg-[#050e1c] bg-[#fbf9f4] dark:text-slate-100 text-slate-800 py-12 lg:py-16 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-gradient-to-r dark:from-blue-950 dark:to-[#2c0812] bg-amber-100/80 border border-transparent hover:border-amber-300/60 dark:border-none dark:text-amber-300 text-amber-900 text-sm font-semibold uppercase tracking-widest shadow-sm">
            <FoundationLogo size="xs" showLabel={false} />
            <span>Help & Clarity</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our legal structure, tax
            deductions under Section 80G, on-ground programs, and volunteering
            opportunities.
          </p>
        </div>

        {/* Search + filters + accordion (client island) */}
        <FaqExplorer />

        {/* Bottom Helpdesk CTA Box */}
        <div className="p-6 rounded-2xl dark:bg-gradient-to-r dark:from-[#0c2242] dark:via-[#240810] dark:to-[#0c2242] bg-gradient-to-r from-amber-100/90 via-rose-50/80 to-amber-100/90 border border-transparent hover:border-amber-300/60 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-colors">
          <div>
            <h4 className="font-display text-lg font-bold dark:text-white text-slate-900">
              Have a specific question not listed here?
            </h4>
            <p className="text-sm dark:text-amber-200 text-amber-800 mt-0.5">
              Connect directly with our foundation trustee desk via WhatsApp or
              email.
            </p>
          </div>
          <Link
            href={ROUTES.contact}
            className="px-5 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer border-none"
          >
            <span>Reach Foundation Desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
