import type { Metadata } from "next";
import { RegistrationView } from "@/views/RegistrationView";

export const metadata: Metadata = {
  title: "Trust Registration & 80G",
  description:
    "Official registrations, 12A / 80G tax exemption, MCA CSR-1 and NGO Darpan accreditation details.",
};

export default function RegistrationPage() {
  return <RegistrationView />;
}
