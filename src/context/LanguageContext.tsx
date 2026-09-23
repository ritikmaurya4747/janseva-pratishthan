"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface LanguageContextValue {
  isHindi: boolean;
  toggleLanguage: () => void;
  /** Returns the Hindi text when Hindi is active and a translation exists. */
  t: (en: string, hi?: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [isHindi, setIsHindi] = useState(false);

  const toggleLanguage = useCallback(() => setIsHindi((prev) => !prev), []);
  const t = useCallback(
    (en: string, hi?: string) => (isHindi && hi ? hi : en),
    [isHindi],
  );

  return (
    <LanguageContext.Provider value={{ isHindi, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
