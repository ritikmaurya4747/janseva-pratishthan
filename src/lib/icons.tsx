import type { LucideIcon, LucideProps } from "lucide-react";
import {
  Award,
  Briefcase,
  Building2,
  Clock,
  Compass,
  CreditCard,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  HandHeart,
  Heart,
  HeartPulse,
  Leaf,
  Mail,
  MapPin,
  Palette,
  Phone,
  QrCode,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

/**
 * JSON files store icons by name ("Sparkles", "HeartPulse" …).
 * This registry maps those names to real lucide components so the
 * data stays serialisable and components just call <Icon name="…" />.
 */
const ICONS: Record<string, LucideIcon> = {
  Award,
  Briefcase,
  Building2,
  Clock,
  Compass,
  CreditCard,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  HandHeart,
  Heart,
  HeartPulse,
  Leaf,
  Mail,
  MapPin,
  Palette,
  Phone,
  QrCode,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
};

type IconProps = LucideProps & { name: string; fallback?: LucideIcon };

export function Icon({ name, fallback = HandHeart, ...props }: IconProps) {
  const Component = ICONS[name] ?? fallback;
  return <Component {...props} />;
}
