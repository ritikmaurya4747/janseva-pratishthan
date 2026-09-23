import type { Metadata } from "next";
import { EventsView } from "@/views/EventsView";

export const metadata: Metadata = {
  title: "Events & Community Drives",
  description:
    "Milestone ceremonies, laptop distributions, health camps and winter blanket drives by Janseva Pratishthan Foundation.",
};

export default function EventsPage() {
  return <EventsView />;
}
