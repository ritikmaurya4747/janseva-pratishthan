import type { Metadata } from "next";
import { ContactView } from "@/views/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Janseva Pratishthan Foundation secretariat by phone, email, WhatsApp or the contact form.",
};

export default function ContactPage() {
  return <ContactView />;
}
