import type { Metadata } from "next";
import { FaqsView } from "@/views/FaqsView";
import { FAQS_DATA } from "@/data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Legal structure, 80G tax deductions, programs and volunteering — answers to common questions.",
};

export default function FaqsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqsView />
    </>
  );
}