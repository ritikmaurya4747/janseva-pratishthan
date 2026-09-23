import type { NextConfig } from "next";
import legacyRedirects from "./src/data/redirects.json";

/**
 * Old Vite-era alias URLs (/project-swabhiman, /our10-focus-pillars, /volunter …)
 * now permanently redirect to the real Next.js routes instead of needing
 * 85 duplicate page folders. Edit src/data/redirects.json to add more.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
  },
  async redirects() {
    return legacyRedirects.flatMap(({ destination, sources }) =>
      sources.map((source) => ({ source, destination, permanent: true })),
    );
  },
};

export default nextConfig;
