import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FOUNDATION_INFO } from "@/data";
import { PARTNERS } from "@/data/partner";

export const metadata: Metadata = {
  title: "Our Partners",
  description: `Organizations partnering with ${FOUNDATION_INFO.name} to deliver impact at scale.`,
};

const PartnersPage = () => {
  return (
    <div className="pt-16 sm:pt-24 pb-16 sm:pb-24 bg-[#fbf9f4] dark:bg-[#071324] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Our Partners
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Organizations working alongside {FOUNDATION_INFO.name} to deliver
            real impact across our six pillars.
          </p>
        </div>

        {PARTNERS.length === 0 ? (
          <p className="text-center text-slate-500 dark:text-slate-400">
            Partner profiles coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((partner) => (
              <Link
                key={partner.slug}
                href={`/partners/${partner.slug}`}
                className="royal-card rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
              >
                {partner.logo && (
                  <div className="relative w-28 h-16 mb-4">
                    <Image
                      src={partner.logo}
                      alt={partner.orgName}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {partner.orgName}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-amber-600 dark:text-amber-300 font-semibold">
                  {partner.heroBadge}
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {partner.tagline}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnersPage;