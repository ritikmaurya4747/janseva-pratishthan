import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { NewsArticleView } from "@/views/NewsArticleView";
import { NEWS_ARTICLES, getNewsArticleBySlug } from "@/data";
import { newsHref } from "@/lib/routes";

type Props = { params: Promise<{ slug: string }> };

/** Pre-render every article in news.json. Other slugs are resolved on demand (see below). */
export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
      type: "article",
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);
  if (!article) notFound();
  // Old/short/partial slugs (e.g. the article id) → canonical URL
  if (article.slug !== decodeURIComponent(slug))
    permanentRedirect(newsHref(article.slug));
  return <NewsArticleView slug={article.slug} />;
}
