import { Reveal } from "@/components/ui/Reveal";
import { FOUNDATION_INFO } from "@/data";
import { ROUTES } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";

const { founder } = FOUNDATION_INFO;

export function FounderSection() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#fbf9f4] dark:bg-[#071324] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal
          y={30}
          duration={0.8}
          margin="-100px"
          className="relative bg-linear-to-br from-[#0c2242] to-[#12284c] dark:from-[#081525] dark:to-[#170810] rounded-rounded-4xl sm:rounded-rounded-4xl p-6 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center shadow-2xl border-none"
        >
          {/* Big opening quote mark */}
          <div className="absolute -top-8 sm:-top-10 left-8 sm:left-14 pointer-events-none select-none">
            <svg
              viewBox="0 0 409.294 409.294"
              fill="currentColor"
              className="text-white w-16 sm:w-24 h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
            >
              <path d="M0 204.647v175.412h175.412V204.647H58.471c0-64.48 52.461-116.941 116.941-116.941V29.235C78.684 29.235 0 107.919 0 204.647zM409.294 87.706V29.235c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412V204.647H292.353c0-64.48 52.461-116.941 116.941-116.941z" />
            </svg>
          </div>

          {/* Left Text Content */}
          <div className="flex-1 space-y-6 mt-4 sm:mt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-sm font-semibold tracking-wider uppercase">
              Founder&apos;s Vision & Pledge
            </div>

            <blockquote className="text-[1rem] sm:text-[1.125rem] lg:text-[1.18rem] font-sans text-slate-100 dark:text-slate-200 leading-[1.85] sm:leading-[1.95] text-left sm:text-justify lg:text-left font-normal">
              &ldquo;True social transformation begins at the grassroots, where
              empathy meets decisive, transparent action. At Janseva Pratishthan
              Foundation, our work is dedicated to building an equitable and
              resilient society across six vital frontiers: nurturing youth
              potential through{" "}
              <span className="text-amber-300 font-semibold not-italic">
                Sports
              </span>
              , delivering accessible{" "}
              <span className="text-amber-300 font-semibold not-italic">
                Healthcare
              </span>
              , championing{" "}
              <span className="text-amber-300 font-semibold not-italic">
                Social Justice & Welfare
              </span>
              , defending citizens from{" "}
              <span className="text-amber-300 font-semibold not-italic">
                Cyber Crime
              </span>
              , spearheading grassroots{" "}
              <span className="text-amber-300 font-semibold not-italic">
                Anti-Drugs De-Addiction
              </span>{" "}
              drives, and creating future-ready leaders through{" "}
              <span className="text-amber-300 font-semibold not-italic">
                Youth Empowerment
              </span>
              . When we protect a young person&apos;s dignity, health, and
              dreams today, we secure the foundation of an entire nation.&rdquo;
            </blockquote>

            <div className="space-y-1 pt-3 border-t border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-300 tracking-tight">
                {founder.displayName}
              </h3>
              <p className="text-sm font-medium text-slate-300/90">
                {founder.background}
              </p>
              <p className="text-sm font-semibold text-amber-300/80">
                {founder.role} — {FOUNDATION_INFO.name}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={ROUTES.ourStory}
                className="inline-block px-7 py-3 max-sm:w-full max-sm:px-4 max-sm:text-center max-sm:tracking-wider rounded-xl font-bold text-sm uppercase tracking-[0.15em] text-stone-950 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 transition-all cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 border-none"
              >
                READ FULL FOUNDER&apos;S LETTER
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[42%] shrink-0">
            <div className="relative w-full max-lg:max-w-sm max-lg:mx-auto aspect-4/5 rounded-rounded-3xl sm:rounded-4xl overflow-hidden shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image
                src={founder.photo}
                alt={`${founder.displayName} - Founder`}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 border border-black/5 dark:border-white/10 rounded-3xl sm:rounded-4xl pointer-events-none" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
