import { LEADERSHIP } from "@/data/leadership";
import Link from "next/link";
import { LeadershipCard } from './../../app/leadership/components/LeadershipSection';
import { ArrowRight } from "lucide-react";

/**
 * Home page shows only the Founder's full hero card (same UI as everyone
 * else on /leadership), plus a single CTA that takes the visitor to the
 * full leadership team page. Keeps the home page light while still giving
 * the Founder — the face of the foundation — prime placement.
 */
const FounderSection = () => {
  const founder = LEADERSHIP.find((member) => member.id === "founder-section");
  if (!founder) return null;

  return (
    <>
      <LeadershipCard member={founder} imageOnLeft={false} />

      <div className="w-full flex justify-center pb-16 sm:pb-24 mt-8 bg-[#fbf9f4] dark:bg-[#071324]px-0 max-sm:px-12">
        <Link
          href={"/leadership"}
          className="flex items-center justify-center gap-2 px-7 py-3 max-sm:w-full max-sm:px-4 max-sm:text-center max-sm:tracking-wider rounded-xl font-bold text-sm uppercase tracking-[0.15em] text-stone-950 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 transition-all cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 border-none"
        >
          <span>Meet Our Full Leadership Team</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </>
  );
}

export default FounderSection;