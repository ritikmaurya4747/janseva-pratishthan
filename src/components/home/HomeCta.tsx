import Link from "next/link";
import { Heart, Users } from "lucide-react";
import { ROUTES } from "@/lib/routes";

/** Server Component — closing donate / volunteer call to action. */
export function HomeCta() {
  return (
    <section className="py-16 dark:bg-gradient-to-r dark:from-[#050e1c] dark:via-[#21070e] dark:to-[#050e1c] bg-[#f1e9d8] border-t border-transparent hover:border-amber-300/60 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold dark:text-white text-slate-900">
          Be the Catalyst for Grassroots Change
        </h2>
        <p className="text-sm dark:text-slate-200 text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Whether through volunteering your skills, partnering for corporate
          CSR, or sponsoring a child&apos;s education kit with 80G tax
          exemption, your step creates an everlasting ripple.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href={ROUTES.donate}
            className="px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 shadow-[0_0_20px_rgba(212,175,55,0.4)] border-none transition-all flex items-center gap-2 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-stone-950" />
            <span>Make a Contribution</span>
          </Link>
          <Link
            href={ROUTES.joinUs}
            className="px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider dark:text-amber-200 dark:bg-gradient-to-r dark:from-[#0c2242] dark:to-[#240810] dark:hover:from-[#132d54] dark:hover:to-[#330b16] text-amber-900 bg-amber-100 hover:bg-amber-200 border border-transparent hover:border-amber-300/60 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Users className="w-4 h-4 dark:text-amber-300 text-amber-800" />
            <span>Join Volunteer Movement</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
