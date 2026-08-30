import { getPublishedArticles, getPublishedNews } from "@/utils/content";
import { siteConfig } from "@/config/site";

const staticPages = ["/", "/tentang", "/program", "/berita", "/artikel", "/galeri", "/kontak"];

function url(path: string) {
  return new URL(path, siteConfig.domain).toString();
}

export async function GET() {
  const news = await getPublishedNews();
  const articles = await getPublishedArticles();
  const paths = [
    ...staticPages,
    ...news.map((item) => `/berita/${item.slug}`),
    ...articles.map((item) => `/artikel/${item.slug}`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${url(path)}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
