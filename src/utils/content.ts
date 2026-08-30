import { getCollection, type CollectionEntry } from "astro:content";

type NewsEntry = CollectionEntry<"berita">;
type ArticleEntry = CollectionEntry<"artikel">;

function isPublished(entry: NewsEntry | ArticleEntry) {
  return !entry.data.draft && entry.data.publishedAt <= new Date();
}

function newestFirst<T extends NewsEntry | ArticleEntry>(items: T[]) {
  return items.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
  );
}

export async function getPublishedNews() {
  return newestFirst((await getCollection("berita")).filter(isPublished));
}

export async function getLatestNews(limit = 3) {
  return (await getPublishedNews()).slice(0, limit);
}

export async function getFeaturedNews() {
  return (await getPublishedNews()).find((item) => item.data.featured);
}

export async function getRelatedNews(currentSlug: string, limit = 3) {
  const current = (await getPublishedNews()).find((item) => item.slug === currentSlug);
  return (await getPublishedNews())
    .filter((item) => item.slug !== currentSlug)
    .sort((a, b) => {
      const categoryScore = Number(b.data.category === current?.data.category) - Number(a.data.category === current?.data.category);
      if (categoryScore !== 0) return categoryScore;
      return b.data.publishedAt.getTime() - a.data.publishedAt.getTime();
    })
    .slice(0, limit);
}

export async function getPublishedArticles() {
  return newestFirst((await getCollection("artikel")).filter(isPublished));
}

export async function getLatestArticles(limit = 3) {
  return (await getPublishedArticles()).slice(0, limit);
}

export async function getFeaturedArticles() {
  return (await getPublishedArticles()).find((item) => item.data.featured);
}

export async function getRelatedArticles(currentSlug: string, limit = 3) {
  const current = (await getPublishedArticles()).find((item) => item.slug === currentSlug);
  return (await getPublishedArticles())
    .filter((item) => item.slug !== currentSlug)
    .sort((a, b) => {
      const categoryScore = Number(b.data.category === current?.data.category) - Number(a.data.category === current?.data.category);
      if (categoryScore !== 0) return categoryScore;
      return b.data.publishedAt.getTime() - a.data.publishedAt.getTime();
    })
    .slice(0, limit);
}
