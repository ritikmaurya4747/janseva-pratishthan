import type { Metadata } from "next";
import { OurWorkView } from "@/views/OurWorkView";

export const metadata: Metadata = {
  title: "Our 10 Focus Pillars",
  description:
    "From digital classrooms and laptop distribution to village upliftment and stray rescue — explore every focus pillar of Janseva Pratishthan Foundation.",
};

export default function OurWorkPage() {
  return <OurWorkView />;
}
