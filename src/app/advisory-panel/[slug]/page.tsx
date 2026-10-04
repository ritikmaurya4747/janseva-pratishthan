import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AdvisoryMemberView from "../components/AdvisoryMemberView";
import { ADVISORY_MEMBERS } from "@/data/advisory";
import { getAdvisoryMember } from "@/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ADVISORY_MEMBERS.map((member) => ({ slug: member.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getAdvisoryMember(slug);
  if (!member) return {};
  return {
    title: `${member.name} — ${member.designation}`,
    description: member.details,
  };
}

export default async function AdvisoryMemberPage({ params }: Props) {
  const { slug } = await params;
  if (!getAdvisoryMember(slug)) notFound();
  return <AdvisoryMemberView slug={slug} />;
}
