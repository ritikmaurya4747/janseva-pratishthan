import type { Metadata } from "next";
import { JoinUsView } from "@/views/JoinUsView";

export const metadata: Metadata = {
  title: "Volunteer, CSR & Youth Ambassadors",
  description:
    "Volunteer on the ground, partner through CSR, or become a Youth Ambassador with Janseva Pratishthan Foundation.",
};

export default function VolunteerPage() {
  return <JoinUsView />;
}
