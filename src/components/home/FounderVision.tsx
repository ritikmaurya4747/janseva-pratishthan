import { FOUNDATION_INFO } from "@/data";
import { ROUTES } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";
import FoundationLogo from "../FoundationLogo";

export function FounderVision() {
  return (
    <section className="py-20 dark:bg-[#040a14] bg-[#f7f2e7] border-none transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-6 sm:p-12 rounded-3xl dark:bg-linear-to-br dark:from-[#0c2242] dark:via-[#240810] dark:to-[#07152b] bg-white border border-transparent hover:border-amber-300/60 shadow-xl text-center space-y-6">
          {/* Founder Profile Avatar with Coat-of-Arms Crest Ring */}
          <div className="relative inline-block mx-auto">
            <div className="w-24 h-24 rounded-full bg-linear-to-tr from-amber-400 via-yellow-100 to-amber-600 p-1 mx-auto shadow-2xl">
              <div className="w-full h-full rounded-full dark:bg-[#081528] bg-slate-900 flex items-center justify-center overflow-hidden">
                <FoundationLogo size="md" showLabel={false} />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-rose-900 border-none text-sm font-bold text-amber-200 uppercase shadow">
              JPF
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-sm font-bold uppercase tracking-widest dark:text-amber-300 text-amber-800">
              Founder & Chairperson
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold dark:text-white text-slate-900">
              {FOUNDATION_INFO.founder.name}
            </h3>
            <p className="text-sm dark:text-slate-300 text-slate-600">
              {FOUNDATION_INFO.founder.background}
            </p>
          </div>

          <blockquote className="font-editorial text-lg sm:text-xl dark:text-amber-100/95 text-slate-800 italic max-w-3xl mx-auto leading-relaxed">
            "{FOUNDATION_INFO.founder.quote}"
          </blockquote>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href={ROUTES.ourStory}
              className="px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 text-stone-950 hover:from-amber-200 hover:to-yellow-100 transition-all shadow-md border-none cursor-pointer"
            >
              Read Shabbir&apos;s Story & The Foundation Genesis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
