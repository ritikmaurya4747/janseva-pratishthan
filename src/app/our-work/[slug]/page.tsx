import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PillarDetailView } from "@/views/PillarDetailView";
import { FOCUS_AREAS, getFocusArea } from "@/data";

type Props = { params: Promise<{ slug: string }> };

/** Pre-render one static page per focus pillar (pillars.json). */
export function generateStaticParams() {
  return FOCUS_AREAS.map((area) => ({ slug: area.id }));
}

/** Unknown slugs → 404 instead of rendering on demand. */
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getFocusArea(slug);
  if (!pillar) return {};
  return { title: pillar.title, description: pillar.shortDesc };
}

export default async function PillarPage({ params }: Props) {
  const { slug } = await params;
  if (!getFocusArea(slug)) notFound();
  return <PillarDetailView slug={slug} />;
}
