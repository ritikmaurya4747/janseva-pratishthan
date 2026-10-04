import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PartnerProfile } from "../types/partnerTypes";

const renderQuote = (quote: string, highlightWords: string[] = []) => {
  if (highlightWords.length === 0) return quote;

  const escaped = [...highlightWords]
    .sort((a, b) => b.length - a.length)
    .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = quote.split(pattern);

  return parts.map((part, i) =>
    highlightWords.includes(part) ? (
      <span key={i} className="text-amber-300 font-semibold not-italic">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

type PartnerCardProps = {
  partner: PartnerProfile;
  ctaLabel?: string;
};

const PartnerCard = ({ partner, ctaLabel = "Get In Touch" }: PartnerCardProps) => {
  const { md } = partner;
  const ctaHref = md.ctaHref ?? partner.ctaHref;

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#fbf9f4] dark:bg-[#071324] transition-colors duration-300">
      <div className="max-w-7xl mx-auto pl-9 pr-4 sm:px-6 lg:px-8">
        <Reveal
          y={30}
          duration={0.8}
          margin="-100px"
          className="relative bg-linear-to-br from-[#0c2242] to-[#12284c] dark:from-[#081525] dark:to-[#170810] rounded-4xl sm:rounded-4xl p-6 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center shadow-2xl border-none"
        >
          {/* Big quote mark */}
          <div className="absolute -top-8 sm:-top-10 left-8 sm:left-14 pointer-events-none select-none">
            <svg
              viewBox="0 0 409.294 409.294"
              fill="currentColor"
              className="text-white w-16 sm:w-24 h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
            >
              <path d="M0 204.647v175.412h175.412V204.647H58.471c0-64.48 52.461-116.941 116.941-116.941V29.235C78.684 29.235 0 107.919 0 204.647zM409.294 87.706V29.235c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412V204.647H292.353c0-64.48 52.461-116.941 116.941-116.941z" />
            </svg>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6 mt-5 sm:mt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-sm font-semibold tracking-wider uppercase">
              {md.designation}
            </div>

            <blockquote className="text-[1rem] sm:text-[1.125rem] lg:text-[1.18rem] font-sans text-slate-100 dark:text-slate-200 leading-[1.85] sm:leading-[1.95] text-justify font-normal">
              &ldquo;{renderQuote(md.quote, md.highlightWords)}&rdquo;
            </blockquote>

            <div className="space-y-1 pt-3 border-t border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-300 tracking-tight">
                {md.displayName}
              </h3>
              <p className="text-sm font-medium text-slate-300/90">
                {md.background}
              </p>
              <p className="text-sm font-semibold text-amber-300/80">
                {md.designation} — {partner.orgName}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={ctaHref}
                className="inline-block px-7 py-3 max-sm:w-full max-sm:px-4 max-sm:text-center max-sm:tracking-wider rounded-xl font-bold text-sm uppercase tracking-[0.15em] text-stone-950 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 transition-all cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 border-none"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[42%] shrink-0">
            <div className="relative w-full max-lg:max-w-sm max-lg:mx-auto aspect-4/5 rounded-3xl sm:rounded-4xl overflow-hidden shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-1 bg-linear-to-tr from-amber-400 via-yellow-200 to-amber-600">
              <div className="relative w-full h-full rounded-[1.35rem] sm:rounded-[1.85rem] overflow-hidden bg-slate-900">
                <Image
                  src={md.photo}
                  alt={`${md.displayName} - ${md.designation}`}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PartnerCard;