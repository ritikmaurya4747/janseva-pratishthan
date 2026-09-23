# Janseva Pratishthan Foundation — Next.js 16 (App Router)

Vite wala concept (ek `navigation.ts` resolver + 85 duplicate page folders + props drilling) hata ke
project ab pure Next.js conventions par hai. UI / Tailwind classes wahi hain.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint       # TypeScript check
npm run format     # Prettier
```

## Folder structure

```
src/
├── app/                      # Sirf routes (sab Server Components)
│   ├── layout.tsx            # Header / Footer / FloatingControls + <Providers>
│   ├── page.tsx              # /
│   ├── our-work/page.tsx     # /our-work
│   ├── our-work/[slug]/      # /our-work/women-empowerment  (generateStaticParams)
│   ├── news/  news/[slug]/   # /news/<article-slug>
│   ├── advisory-panel/  advisory-panel/[slug]/
│   ├── events/ our-story/ volunteer/ faqs/ contact/ registration/ donate/
│   └── not-found.tsx
├── views/                    # Page-level components (HomeView, OurWorkView, …) — props nahi lete
├── components/
│   ├── layout/               # Header (client), Footer (server), FloatingControls (client)
│   ├── home/                 # Home ke sections (har section apna data khud import karta hai)
│   ├── advisory/ news/ our-work/ events/ faqs/ contact/ registration/   # chhote client islands
│   └── ui/                   # Reveal, T, FallbackImage, SecretaryPhoto
├── data/                     # ⭐ Saara content JSON me + index.ts (typed exports & helpers)
├── context/                  # ThemeContext, LanguageContext (client)
├── lib/                      # routes.ts (saare URLs), icons.tsx (icon name → lucide)
└── types.ts
```

## Rules jo follow kiye gaye hain

| Rule | Kaise |
| --- | --- |
| Props avoid | Har component `import { … } from '@/data'` karta hai; navigation `<Link>` se. Sirf `[slug]` pages route ka `slug` view ko dete hain. |
| Global data | `src/data/*.json` → `src/data/index.ts` se typed constants (`FOCUS_AREAS`, `HERO_SLIDES`, `MAIN_NAV` …). |
| `map()` | Nav, footer links, hero slides, tree ribbons, cards, form options, bank details, FAQs, stats — sab JSON se map. |
| `<Link>` | Saare internal links. `mailto:`, `tel:`, WhatsApp, Google Maps jaan-boojh kar `<a>` hain (external). |
| `<Image>` | Saari images `next/image`. Remote hosts `next.config.ts → images.remotePatterns` me. |
| Server vs client | `'use client'` sirf jahan state / events / browser API / motion hai. Static sections server par; animation ke liye `<Reveal>` aur text ke liye `<T>` chhote client "leaf" hain. |
| Slugs | `generateStaticParams` + `generateMetadata` + `notFound()`. Pillar / advisor me `dynamicParams = false`. |

## Naya content / URL add karna

- **Naya pillar** → `data/pillars.json → focusAreas` me object add karo. `/our-work/<id>` page automatically ban jayega.
- **Nayi news** → `data/news.json → articles`. `/news/<slug>` automatically.
- **Naya advisor** → `data/advisory.json → members`.
- **Nav / footer link** → `data/navigation.json`.
- **Purana URL redirect** → `data/redirects.json` (next.config.ts isse permanent redirects banata hai).
- **Donate me cause preselect** → `<Link href={donateHref('education')}>` (`/donate?cause=education`).
- **Naya icon** → `lib/icons.tsx` registry me add karo, phir JSON me naam se use karo.

## Purane URLs

Purane Vite aliases (`/project-swabhiman`, `/our10-focus-pillars`, `/volunter`, `/advisory-board/:slug`,
`/80g-certificate`, …) ab 308 permanent redirect dete hain. Poori list: `src/data/redirects.json`.
