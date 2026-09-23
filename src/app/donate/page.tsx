import type { Metadata } from "next";
import { Suspense } from "react";
import { DonateView } from "@/views/DonateView";

export const metadata: Metadata = {
  title: "Donate (80G Tax Exempt)",
  description:
    "Support laptops for girls, mobile health camps, Project Swabhiman and more — every donation is 50% tax exempt under 80G.",
};

export default function DonatePage() {
  // DonateView reads ?cause= with useSearchParams → needs a Suspense boundary for static rendering.
  return (
    <Suspense>
      <DonateView />
    </Suspense>
  );
}
