import type { Metadata } from "next";
import { NewsListView } from "@/views/NewsListView";

export const metadata: Metadata = {
  title: "News & Media Center",
  description:
    "Official press releases, on-ground impact reports and media updates from Janseva Pratishthan Foundation.",
};

export default function NewsPage() {
  return <NewsListView />;
}
