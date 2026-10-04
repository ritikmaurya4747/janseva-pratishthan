import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { RevealLink } from "@/components/ui/Reveal";
import { T } from "@/components/ui/T";
import { ACTION_CARDS, IMPACT_PILLARS } from "@/data";
import { Icon } from "@/lib/icons";
import { pillarHref } from "@/lib/routes";

/** Server Component — photo grid + CTA cards are plain Links; only the reveal animation is client-side. */
const AreasOfImpactSection = () => {
  return (
    <section className="relative w-full  bg-[#fbf9f4] dark:bg-[#071324] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PART 1: AREAS OF IMPACT */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#a47b1e] dark:text-amber-400">
            <T en="PILLARS OF TRANSFORMATION" hi="परिवर्तन के आधार स्तंभ" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            <T en="Areas Of Impact" hi="प्रभाव के प्रमुख क्षेत्र" />
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            <T
              en="Our initiatives are carefully crafted to address the multifaceted needs of the youth, families, and communities we serve."
              hi="हमारी पहलें हमारे समाज, युवाओं और परिवारों की बहुआयामी आवश्यकताओं को संबोधित करने के लिए समर्पित हैं।"
            />
          </p>
        </div>

        {/* Bento Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 mb-20 sm:mb-28">
          {IMPACT_PILLARS.map((pillar, idx) => (
            <RevealLink
              key={pillar.id}
              href={pillarHref(pillar.id)}
              delay={idx * 0.08}
              className={`group relative ${pillar.colSpan} ${pillar.heightClass} rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 p-1 bg-linear-to-tr from-amber-400/90 via-yellow-200 to-amber-600/90`}
            >
              <div className="relative w-full h-full rounded-xl sm:rounded-[1.35rem] overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300" />

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:text-amber-300 group-hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 space-y-1">
                  <span className="inline-block text-sm font-semibold text-amber-300 uppercase tracking-wider">
                    {pillar.tag}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-amber-200 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300/90 font-medium">
                    {pillar.hindiTitle}
                  </p>
                </div>
              </div>
            </RevealLink>
          ))}
        </div>

        {/* PART 2: MAKE AN IMPACT TODAY */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            <T en="Make an Impact Today" hi="आज ही बदलाव का हिस्सा बनें" />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6  pb-16 sm:pb-24">
          {ACTION_CARDS.map((card, idx) => (
            <RevealLink
              key={card.id}
              href={card.href}
              duration={0.4}
              delay={idx * 0.08}
              className="group relative bg-white dark:bg-[#0c2242] rounded-2xl sm:rounded-3xl p-8 text-center flex flex-col items-center justify-center space-y-4 shadow-md hover:shadow-xl dark:shadow-none border border-slate-200/80 dark:border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer w-full"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#fbf5e8] dark:bg-amber-400/15 flex items-center justify-center text-[#9a7018] dark:text-amber-300 group-hover:scale-110 group-hover:bg-[#faeed6] dark:group-hover:bg-amber-400/25 transition-all duration-300">
                <Icon
                  name={card.icon}
                  className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]"
                />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                <T en={card.title} hi={card.hindiTitle} />
              </h3>
              <p className="text-sm sm:text-[0.82rem] text-slate-500 dark:text-slate-300 leading-relaxed text-center">
                <T en={card.desc} hi={card.hindiDesc} />
              </p>
            </RevealLink>
          ))}
        </div>
      </div>
    </section>
  );
}
export default AreasOfImpactSection;