import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingControls } from "@/components/layout/FloatingControls";
import { FOUNDATION_INFO } from "@/data";

const siteTitle = `${FOUNDATION_INFO.name} | Small Steps, Big Impact`;

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${FOUNDATION_INFO.name}`,
  },
  description: FOUNDATION_INFO.missionStatement,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: siteTitle,
    description: FOUNDATION_INFO.missionStatement,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: FOUNDATION_INFO.missionStatement,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#103264" },
    { media: "(prefers-color-scheme: dark)", color: "#060e1c" },
  ],
};

// Runs before hydration so the saved theme is applied without a flash.
const themeInitScript = `
(function() {
  try {
    var dark = localStorage.getItem('jp_theme') === 'dark';
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.classList.toggle('light', !dark);
  } catch (e) {}
})();
`;

/**
 * Root layout — a Server Component.
 * Header / FloatingControls are client components, Footer is a server component,
 * and all React context lives inside <Providers>.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-[#fbf9f4] text-slate-900 antialiased selection:bg-amber-500/20 selection:text-amber-900">
        <Providers>
          <div className="min-h-screen flex flex-col transition-colors duration-300 w-full max-w-full overflow-x-hidden bg-[#fbf9f4] text-slate-900 selection:bg-amber-500/20 selection:text-amber-900 dark:bg-[#050e1c] dark:text-slate-100 dark:selection:bg-amber-500/30 dark:selection:text-amber-200">
            <Header />
            <main className="flex-grow w-full max-w-full overflow-x-hidden">
              {children}
            </main>
            <FloatingControls />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
