import type { Metadata } from "next";
import { AdvisoryPanelView } from "@/views/AdvisoryPanelView";

export const metadata: Metadata = {
  title: "Advisory Panel",
  description:
    "The honorary council of jurists, doctors, educationists and veterans guiding Janseva Pratishthan Foundation.",
};

export default function AdvisoryPanelPage() {
  return <AdvisoryPanelView />;
}
