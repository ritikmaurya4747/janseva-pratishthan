"use client";

import { useLanguage } from "@/context/LanguageContext";

/**
 * Tiny client "leaf" for bilingual text.
 * Lets Server Components render translatable copy without becoming client components:
 *   <T en="Home" hi="होम" />
 */
export function T({ en, hi }: { en: string; hi?: string }) {
  const { t } = useLanguage();
  return <>{t(en, hi)}</>;
}
