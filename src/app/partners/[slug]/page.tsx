import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { FOUNDATION_INFO } from "@/data";
import { getPartnerBySlug, PARTNERS } from "@/data/partner";
import PartnerHero from "../components/Partnerhero";
import PartnerCard from "../components/Partnercard";
import PartnerServices from "../components/Partnerservices";


type PartnerPageProps = {
  params: Promise<{ slug: string }>;
};

// Pre-renders a static page for every partner in the PARTNERS array.
export function generateStaticParams() {
  return PARTNERS.map((partner) => ({ slug: partner.slug }));
}

export async function generateMetadata({
  params,
}: PartnerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  if (!partner) return {};

  return {
    title: partner.orgName,
    description: partner.tagline,
  };
}

const PartnerDetailPage = async ({ params }: PartnerPageProps) => {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);

  if (!partner) notFound();

  return (
    <div>
      <PartnerHero  partner={partner} />
      <PartnerCard partner={partner} />
      <PartnerServices services={partner.services} />

      {/* Contact CTA */}
      <section className="w-full py-16 sm:py-20 bg-[#fbf9f4] dark:bg-[#071324]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Want To Partner With Us Too?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Organizations working in health, wellness, or grassroots welfare
            are welcome to explore a formal partnership with{" "}
            {FOUNDATION_INFO.name}.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={partner.ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm uppercase tracking-[0.15em] text-stone-950 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 transition-all cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 border-none"
            >
              <span>{partner.ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" /> {FOUNDATION_INFO.contact.email}
            </span>
            <span className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> {FOUNDATION_INFO.contact.phone}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerDetailPage;