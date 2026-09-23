/**
 * Single source of truth for every internal URL.
 * Use these helpers with <Link href={...}> instead of hard-coding paths.
 */
export const ROUTES = {
  home: "/",
  ourWork: "/our-work",
  events: "/events",
  news: "/news",
  ourStory: "/our-story",
  joinUs: "/volunteer",
  faqs: "/faqs",
  contact: "/contact",
  registration: "/registration",
  advisory: "/advisory-panel",
  donate: "/donate",
} as const;

/** /our-work/[slug] */
export const pillarHref = (id: string) => `${ROUTES.ourWork}/${id}`;

/** /news/[slug] */
export const newsHref = (slug: string) => `${ROUTES.news}/${slug}`;

/** /advisory-panel/[slug] */
export const advisorHref = (id: string) => `${ROUTES.advisory}/${id}`;

/** /donate?cause=education — the donate page preselects the cause from the query string. */
export const donateHref = (causeId?: string) =>
  causeId
    ? `${ROUTES.donate}?cause=${encodeURIComponent(causeId)}`
    : ROUTES.donate;

/** Highlights a nav item for its own page and all nested pages. */
export function isActivePath(pathname: string, href: string) {
  if (href === ROUTES.home) return pathname === ROUTES.home;
  return pathname === href || pathname.startsWith(`${href}/`);
}
