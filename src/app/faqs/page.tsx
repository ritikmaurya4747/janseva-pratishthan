import type { Metadata } from "next";
import { FaqsView } from "@/views/FaqsView";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Legal structure, 80G tax deductions, programs and volunteering — answers to common questions.",
};

export default function FaqsPage() {
  return <FaqsView />;
}
