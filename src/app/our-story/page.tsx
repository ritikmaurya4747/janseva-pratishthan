import type { Metadata } from "next";
import { OurStoryView } from "@/views/OurStoryView";

export const metadata: Metadata = {
  title: "Our Story & Leadership",
  description:
    "How a personal pledge became a grassroots movement — meet our Founder, General Secretary and honorary Advisory Council.",
};

export default function OurStoryPage() {
  return <OurStoryView />;
}
