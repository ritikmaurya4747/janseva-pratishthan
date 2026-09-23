import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingControls } from "@/components/layout/FloatingControls";
import { FOUNDATION_INFO } from "@/data";

// TODO: domain change ho to sirf yahan update karo
const siteUrl = "https://jansevapratishthan.org";

const siteTitle = `${FOUNDATION_INFO.name} | Small Steps, Big Impact`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: `%s | ${FOUNDATION_INFO.name}`,
  },

  description: FOUNDATION_INFO.missionStatement,

  keywords: [
    "NGO India",
    "non profit organization",
    "charity foundation India",
    FOUNDATION_INFO.name,
    "social work NGO",
    "donation for education",
    "child welfare NGO",
    "community service foundation",
    "CSR partner NGO",
  ],

  authors: [{ name: FOUNDATION_INFO.name, url: siteUrl }],
  creator: FOUNDATION_INFO.name,
  publisher: FOUNDATION_INFO.name,
  applicationName: FOUNDATION_INFO.name,
  category: "Non-Profit Organization",

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: FOUNDATION_INFO.name,
    title: siteTitle,
    description: FOUNDATION_INFO.missionStatement,
    locale: "en_IN",
    images: [
      {
        url: "/logo_512.png", // TEMP: proper 1200x630 wide OG banner baad mein banwana
        width: 512,
        height: 512,
        alt: `${FOUNDATION_INFO.name} - Small Steps, Big Impact`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: FOUNDATION_INFO.missionStatement,
    images: ["/logo_512.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },

  // TODO: Google Search Console se real verification code milte hi yahan uncomment karo
  // verification: {
  //   google: "your-real-code-here",
  // },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#103264" },
    { media: "(prefers-color-scheme: dark)", color: "#060e1c" },
  ],
};

// NGO ke liye structured data — Google ko organization/charity samajhne mein help karta hai
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: FOUNDATION_INFO.name,
  url: siteUrl,
  logo: `${siteUrl}/logo_512.png`,
  description: FOUNDATION_INFO.missionStatement,
  // TODO: social links milte hi is field ko wapas add karo
  // sameAs: [
  sameAs: [
    "https://www.instagram.com/JANSEVAPRATISHTHAN/",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-[#fbf9f4] text-slate-900 antialiased selection:bg-amber-500/20 selection:text-amber-900">
        <Providers>
          <div className="min-h-screen flex flex-col transition-colors duration-300 w-full max-w-full overflow-x-hidden bg-[#fbf9f4] text-slate-900 selection:bg-amber-500/20 selection:text-amber-900 dark:bg-[#050e1c] dark:text-slate-100 dark:selection:bg-amber-500/30 dark:selection:text-amber-200">
            <Header />
            <main className="grow w-full max-w-full overflow-x-hidden">
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