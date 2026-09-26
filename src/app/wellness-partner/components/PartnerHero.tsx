import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { PartnerProfile } from "@/data/partner";

const PartnerHero = ({ partner }: { partner: PartnerProfile }) => {
    return (
        <section className="relative w-full pt-16 sm:pt-24 pb-12 sm:pb-16 bg-[#fbf9f4] dark:bg-[#071324] transition-colors duration-300 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal
                    y={30}
                    duration={0.8}
                    margin="-100px"
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-700 dark:text-amber-300 text-sm font-semibold tracking-wider uppercase mb-6">
                        {partner.heroBadge}
                    </div>

                    {partner.logo && (
                        <div className="relative w-40 h-16 sm:w-48 sm:h-20 mx-auto mb-6">
                            <Image
                                src={partner.logo}
                                alt={`${partner.orgName} logo`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}

                    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                        {partner.orgName}
                    </h1>
                    <p className="text-lg sm:text-xl font-semibold text-[#87101c] dark:text-amber-300 mb-6">
                        {partner.tagline}
                    </p>
                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {partner.about}
                    </p>

                    {partner.partnershipSince && (
                        <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                            Official Partner since {partner.partnershipSince}
                        </p>
                    )}
                </Reveal>

                {partner.stats.length > 0 && (
                    <Reveal
                        y={30}
                        duration={0.8}
                        margin="-100px"
                        className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
                    >
                        {partner.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="royal-blue-card rounded-2xl p-5 text-center"
                            >
                                <p className="text-2xl sm:text-3xl font-display font-bold text-[#103264] dark:text-amber-300">
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </Reveal>
                )}
            </div>
        </section>
    );
}
export default PartnerHero;