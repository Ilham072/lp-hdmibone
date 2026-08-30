# TODO - Website HDMI Kabupaten Bone

Dokumen ini disusun dari spesifikasi di `docs/PRD.md`, `docs/ARCHITECTURE.md`, `docs/DESIGN_SYSTEM_HDMI.md`, `docs/UI_SPEC.md`, `docs/SEO_SPEC.md`, dan `docs/CONTENT.md`.

Prioritas utama saat ini adalah menyelesaikan MVP static-first berbasis Astro, TypeScript, Tailwind CSS, dan Astro Content Collections. CMS, dashboard admin, dan fitur publikasi kompleks masuk fase lanjutan.

## 0. Keputusan Awal yang Perlu Dikunci

- [x] Tentukan domain production canonical: `https://daimudabone.id`.
- [x] Pastikan apakah `daimuda.org` menjadi domain utama atau hanya referensi organisasi. Domain utama saat ini: `daimudabone.id`.
- [x] Siapkan logo HDMI resmi dalam format web.
- [ ] Kumpulkan foto kegiatan asli HDMI untuk hero, berita, artikel, dan galeri.
- [ ] Validasi kontak resmi yang boleh dipublikasikan:
  - [ ] Email: `himpunandaimudaindonesiabone@gmail.com`
  - [ ] Instagram: `@hdmi.bone`
  - [ ] Website: `daimuda.org`
  - [ ] WhatsApp, jika ada
  - [ ] Alamat sekretariat, jika boleh dipublikasikan
- [ ] Validasi apakah organisasi sudah memiliki visi dan misi formal.
- [ ] Validasi final data pengurus periode 2026-2031. Versi awal sudah dibuat dari materi visual yang diberikan.
- [ ] Hindari klaim statistik atau capaian tanpa data resmi.

## 1. Foundation Project

- [x] Inisialisasi project Astro.
- [x] Aktifkan TypeScript.
- [x] Integrasikan Tailwind CSS.
- [x] Tambahkan konfigurasi `astro.config.mjs`.
- [x] Tambahkan `site` production URL setelah domain final tersedia.
- [ ] Buat struktur folder sesuai arsitektur:
  - [ ] `public/`
  - [ ] `src/assets/images/`
  - [ ] `src/components/common/`
  - [ ] `src/components/layout/`
  - [ ] `src/components/home/`
  - [ ] `src/components/article/`
  - [ ] `src/components/news/`
  - [ ] `src/components/gallery/`
  - [ ] `src/content/berita/`
  - [ ] `src/content/artikel/`
  - [ ] `src/layouts/`
  - [ ] `src/pages/`
  - [ ] `src/styles/`
  - [ ] `src/utils/`
  - [ ] `src/config/`
- [x] Buat `src/config/site.ts` untuk data organisasi agar tidak tersebar di banyak file.
- [x] Buat `src/styles/global.css`.
- [x] Tambahkan `robots.txt`.
- [ ] Tambahkan favicon dan aset dasar.

## 2. Design System Implementation

- [ ] Konfigurasikan semantic color token di Tailwind:
  - [ ] `primary`
  - [ ] `primary.deep`
  - [ ] `primary.soft`
  - [ ] `secondary`
  - [ ] `accent`
  - [ ] `ink`
  - [ ] `body`
  - [ ] `muted`
  - [ ] `surface`
  - [ ] `border`
  - [ ] `dark`
- [ ] Implementasikan font utama Plus Jakarta Sans atau fallback system font.
- [ ] Definisikan style global untuk typography, focus state, dan article prose.
- [ ] Buat primitive UI:
  - [ ] `Container`
  - [ ] `Section`
  - [ ] `SectionHeader`
  - [ ] `Button`
  - [ ] `Badge`
  - [ ] `Breadcrumb`
  - [ ] `EmptyState`
- [ ] Pastikan komponen tidak memakai hard-coded hex berulang.
- [ ] Pastikan warna teal dominan, orange hanya aksen, dan footer memakai dark teal.

## 3. Global Layout

- [ ] Buat `BaseLayout.astro`.
- [ ] Buat `ArticleLayout.astro`.
- [ ] Buat `NewsLayout.astro`.
- [ ] Buat `Navbar`.
- [ ] Buat mobile navigation dengan touch target minimal 44px.
- [ ] Buat `Footer`.
- [ ] Tambahkan CTA kolaborasi yang dapat digunakan ulang.
- [ ] Pastikan semua halaman memiliki landmark semantic:
  - [ ] `header`
  - [ ] `nav`
  - [ ] `main`
  - [ ] `footer`

## 4. Content System

- [ ] Buat Astro Content Collections.
- [ ] Definisikan schema `berita`.
- [ ] Definisikan schema `artikel`.
- [ ] Field minimal content:
  - [ ] `title`
  - [ ] `excerpt`
  - [ ] `cover`
  - [ ] `author`
  - [ ] `category`
  - [ ] `tags`
  - [ ] `publishedAt`
  - [ ] `updatedAt`
  - [ ] `featured`
  - [ ] `draft`
  - [ ] `seoTitle`
  - [ ] `seoDescription`
- [ ] Buat utility `src/utils/content.ts`.
- [ ] Implementasikan fungsi content:
  - [ ] `getPublishedNews()`
  - [ ] `getLatestNews()`
  - [ ] `getFeaturedNews()`
  - [ ] `getPublishedArticles()`
  - [ ] `getLatestArticles()`
  - [ ] `getFeaturedArticles()`
  - [ ] `getRelatedNews()`
  - [ ] `getRelatedArticles()`
- [ ] Pastikan `draft: true` tidak tampil di listing, detail, sitemap, dan related content.
- [ ] Pastikan konten future-dated tidak tampil di production.
- [ ] Buat utility tanggal `src/utils/date.ts` dengan timezone `Asia/Makassar`.

## 5. Homepage

- [ ] Buat route `/`.
- [ ] Implementasikan homepage sections:
  - [ ] Hero
  - [ ] About HDMI
  - [ ] Why HDMI Bone
  - [ ] Paradigm
  - [ ] Strategic Pillars
  - [ ] Programs
  - [ ] Latest News
  - [ ] Featured Articles
  - [ ] Impact/Statistics, hanya jika data resmi tersedia
  - [ ] Gallery Preview
  - [ ] Collaboration CTA
- [ ] Gunakan headline utama:
  - [ ] `Membentang Jalan Cahaya, Menjemput Fajar Peradaban`
- [ ] Gunakan CTA utama:
  - [ ] `Kenali HDMI`
  - [ ] `Lihat Gerakan Kami`
- [ ] Jangan publish angka placeholder statistik.
- [ ] Pastikan hero jelas di mobile dan desktop.

## 6. Halaman Organisasi

- [ ] Buat route `/tentang`.
- [ ] Isi halaman tentang:
  - [ ] Page hero
  - [ ] Mengapa HDMI hadir di Bone
  - [ ] Dakwah sebagai tugas peradaban
  - [ ] Dakwah berbasis pembinaan
  - [ ] Arah besar gerakan
  - [ ] Nilai inti
- [x] Struktur organisasi versi awal dari materi visual yang diberikan
- [ ] Jangan melabeli rumusan editorial sebagai visi/misi formal sebelum divalidasi.
- [ ] Buat route `/program`.
- [ ] Tampilkan cluster program:
  - [ ] Penguatan Kader dan Dai
  - [ ] Dakwah Generasi Muda
  - [ ] Dakwah Digital
  - [ ] Masjid sebagai Pusat Pembinaan
  - [ ] Penguatan Keluarga
  - [ ] Dakwah Sosial
- [ ] Gunakan label aman seperti `Arah Program` atau `Program yang Dikembangkan` untuk rencana yang belum aktif.
- [ ] Buat route `/kontak`.
- [ ] Tampilkan hanya kontak yang sudah terverifikasi.
- [ ] Pastikan email, Instagram, website, dan WhatsApp jika ada berbentuk link clickable.

## 7. News Module

- [ ] Buat route `/berita`.
- [ ] Buat route `/berita/[slug]`.
- [ ] Buat komponen:
  - [ ] `NewsCard`
  - [ ] `FeaturedNews`
  - [ ] `NewsMeta`
  - [ ] `RelatedNews`
- [ ] Listing berita menampilkan:
  - [ ] Thumbnail
  - [ ] Kategori
  - [ ] Tanggal
  - [ ] Judul
  - [ ] Ringkasan
  - [ ] Link detail
- [ ] Detail berita menampilkan:
  - [ ] Breadcrumb
  - [ ] Judul
  - [ ] Featured image
  - [ ] Tanggal publikasi
  - [ ] Author/byline
  - [ ] Isi berita
  - [ ] Share buttons
  - [ ] Related news
- [ ] Buat minimal sample berita Markdown untuk validasi route.
- [ ] Gunakan schema JSON-LD `NewsArticle`.

## 8. Article Module

- [ ] Buat route `/artikel`.
- [ ] Buat route `/artikel/[slug]`.
- [ ] Buat komponen:
  - [ ] `ArticleCard`
  - [ ] `FeaturedArticle`
  - [ ] `ArticleMeta`
  - [ ] `AuthorBox`
  - [ ] `RelatedArticles`
- [ ] Listing artikel menampilkan:
  - [ ] Featured article
  - [ ] Kategori
  - [ ] Artikel terbaru
  - [ ] Empty state bila belum ada konten
- [ ] Detail artikel menampilkan:
  - [ ] Breadcrumb
  - [ ] Judul
  - [ ] Excerpt
  - [ ] Featured image
  - [ ] Author
  - [ ] Tanggal
  - [ ] Reading time
  - [ ] Tags
  - [ ] Share buttons
  - [ ] Related articles
- [ ] Buat minimal sample artikel Markdown untuk validasi route.
- [ ] Gunakan schema JSON-LD `Article`.
- [ ] Pastikan lebar baca artikel sekitar 68-72ch.

## 9. Gallery

- [ ] Buat route `/galeri`.
- [x] Siapkan data galeri statis untuk MVP.
- [ ] Kelompokkan galeri bila data tersedia:
  - [ ] Kaderisasi
  - [ ] Kajian
  - [ ] Dakwah Masyarakat
  - [ ] Generasi Muda
  - [ ] Sosial
  - [ ] Organisasi
  - [ ] Kolaborasi
- [ ] Setiap item galeri memiliki:
  - [x] Image
  - [x] Alt text
  - [x] Nama kegiatan
  - [ ] Lokasi, jika tersedia
  - [ ] Tanggal, jika tersedia
  - [ ] Caption singkat
- [ ] Tambahkan empty state jika dokumentasi belum tersedia.

## 10. SEO & Metadata

- [ ] Buat komponen/helper SEO.
- [ ] Implementasikan metadata public page:
  - [ ] Unique title
  - [ ] Meta description
  - [ ] Canonical URL
  - [ ] Open Graph
  - [ ] Twitter/X card
  - [ ] Robots meta jika perlu
- [ ] Buat utility `src/utils/seo.ts`.
- [ ] Implementasikan JSON-LD:
  - [ ] `Organization`
  - [ ] `WebSite`
  - [ ] `BreadcrumbList`
  - [ ] `NewsArticle`
  - [ ] `Article`
- [ ] Integrasikan `@astrojs/sitemap`.
- [ ] Pastikan sitemap hanya berisi halaman public dan konten published.
- [ ] Tambahkan sitemap reference di `robots.txt`.
- [ ] Buat route `404.astro` dengan status 404.
- [ ] Pastikan root HTML memakai `lang="id"`.
- [ ] Pastikan hanya ada satu H1 per halaman.

## 11. Images & Assets

- [ ] Buat strategi folder image:
  - [ ] `public/images/`
  - [ ] `src/assets/images/news/`
  - [ ] `src/assets/images/articles/`
  - [ ] `src/assets/images/gallery/`
- [ ] Gunakan nama file deskriptif, bukan nama kamera mentah.
- [ ] Optimasi image ke WebP/AVIF jika memungkinkan.
- [ ] Semua meaningful image wajib punya alt text.
- [ ] Decorative image memakai `alt=""`.
- [ ] Set width dan height untuk mencegah CLS.
- [ ] Hero/LCP image tidak lazy-loaded.
- [ ] Image below fold menggunakan lazy loading.
- [ ] Siapkan default HDMI editorial placeholder untuk cover yang kosong.
- [ ] Siapkan default OG image 1200x630.

## 12. Accessibility & UI QA

- [ ] Semua link dan button memiliki focus-visible state.
- [ ] Navigasi dapat digunakan dengan keyboard.
- [ ] Touch target mobile minimal 44px.
- [ ] Heading hierarchy valid.
- [ ] Body text memiliki kontras WCAG AA.
- [ ] Tidak ada overflow horizontal di mobile 320px.
- [ ] CTA tidak terlalu banyak dalam satu viewport.
- [ ] Card memakai anchor semantic, bukan clickable `div` dengan JavaScript.
- [ ] Motion menghormati `prefers-reduced-motion`.
- [ ] Empty state tersedia untuk berita, artikel, dan galeri.
- [ ] 404 memiliki link kembali ke Beranda dan Artikel.

## 13. Performance

- [ ] Minimalkan JavaScript client-side.
- [ ] Hydration hanya untuk interaksi nyata seperti mobile menu.
- [ ] Hindari dependency UI berat tanpa kebutuhan jelas.
- [ ] Optimasi font dan gunakan `font-display: swap`.
- [ ] Jalankan build production.
- [ ] Audit Lighthouse:
  - [ ] Performance >= 90
  - [ ] Accessibility >= 90
  - [ ] Best Practices >= 90
  - [ ] SEO >= 95
- [ ] Cek Core Web Vitals:
  - [ ] LCP
  - [ ] CLS
  - [ ] INP

## 14. Deployment

- [ ] Pilih platform static hosting/CDN:
  - [ ] Cloudflare Pages
  - [ ] Netlify
  - [ ] Vercel
  - [ ] Static hosting lain
- [ ] Konfigurasikan domain dan HTTPS.
- [ ] Konfigurasikan redirect HTTP ke HTTPS.
- [ ] Konfigurasikan redirect www/non-www sesuai canonical domain.
- [ ] Set environment variable:
  - [ ] `PUBLIC_SITE_URL`
  - [ ] `PUBLIC_ANALYTICS_ID`, jika dipakai
- [ ] Jalankan `npm run build` sebelum deployment.
- [ ] Verifikasi production route:
  - [ ] `/`
  - [ ] `/tentang`
  - [ ] `/program`
  - [ ] `/berita`
  - [ ] `/artikel`
  - [ ] `/galeri`
  - [ ] `/kontak`
  - [ ] `404`
  - [ ] `robots.txt`
  - [ ] sitemap

## 15. Production SEO Validation

- [ ] Domain production benar.
- [ ] HTTPS aktif.
- [ ] Canonical URL benar di semua halaman.
- [ ] Tidak ada staging canonical.
- [ ] `robots.txt` dapat diakses.
- [ ] Sitemap dapat diakses.
- [ ] Draft tidak muncul di sitemap.
- [ ] 404 benar-benar return 404.
- [ ] OG preview berfungsi saat dibagikan.
- [ ] JSON-LD valid.
- [ ] Semua gambar penting memiliki alt.
- [ ] Tidak ada broken link.
- [ ] Submit sitemap ke Google Search Console.
- [ ] Inspect homepage, template berita, dan template artikel di Search Console.

## 16. Content Checklist Sebelum Publish

### Berita

- [ ] Judul jelas dan faktual.
- [ ] Slug deskriptif.
- [ ] Excerpt tersedia.
- [ ] Tanggal publish tersedia.
- [ ] Author/byline tersedia.
- [ ] Lokasi disebut jika relevan.
- [ ] Nama kegiatan jelas.
- [ ] Pihak terlibat benar.
- [ ] Featured image tersedia.
- [ ] Alt image benar.
- [ ] SEO title dicek.
- [ ] Meta description dicek.
- [ ] OG image dicek.
- [ ] `draft: false` hanya setelah siap publish.

### Artikel

- [ ] Search intent jelas.
- [ ] Satu ide utama.
- [ ] Judul natural dan tidak clickbait.
- [ ] Slug bersih.
- [ ] Excerpt tersedia.
- [ ] Struktur H2/H3 rapi.
- [ ] Intro menjawab konteks.
- [ ] Isi cukup substantif.
- [ ] Internal link relevan.
- [ ] Author tersedia.
- [ ] Published date tersedia.
- [ ] Featured image tersedia.
- [ ] Alt image benar.
- [ ] SEO title dicek.
- [ ] Meta description dicek.
- [ ] Article schema valid.
- [ ] `draft: false` hanya setelah siap publish.

## 17. MVP Definition of Done

- [ ] Homepage tersedia.
- [ ] Semua route utama tersedia.
- [ ] Website responsive dari 320px sampai desktop.
- [ ] Navbar dan mobile menu berjalan.
- [ ] Footer tersedia.
- [ ] Tentang HDMI tersedia.
- [ ] Program HDMI tersedia.
- [ ] Berita listing dan detail tersedia.
- [ ] Artikel listing dan detail tersedia.
- [ ] Galeri tersedia.
- [ ] Kontak tersedia.
- [ ] Content dapat ditambahkan lewat Markdown/MDX.
- [ ] Draft filtering bekerja.
- [ ] Metadata SEO tersedia.
- [ ] Sitemap tersedia.
- [ ] Robots tersedia.
- [ ] 404 tersedia.
- [ ] Build production berhasil.
- [ ] Lighthouse target terpenuhi.
- [ ] Website dapat di-deploy.

## 18. Fase Lanjutan Setelah MVP

- [ ] Category pages.
- [ ] Tag pages.
- [ ] Author pages.
- [ ] RSS feed.
- [ ] Search artikel/berita.
- [ ] Pagination.
- [ ] Automated OG image generation.
- [ ] Analytics.
- [ ] Google Search Console monitoring.
- [ ] Headless CMS.
- [ ] Admin authentication.
- [ ] Role management.
- [ ] Media library.
- [ ] Editorial workflow:
  - [ ] Draft
  - [ ] Review
  - [ ] Scheduled
  - [ ] Published
- [ ] Backup dan export content CMS.

## 19. Out of Scope MVP

- [ ] User registration.
- [ ] Member dashboard.
- [ ] Sistem keanggotaan.
- [ ] Forum.
- [ ] Komentar artikel.
- [ ] Donation/payment.
- [ ] Mobile application.
- [ ] Newsletter automation.
- [ ] Advanced CMS.
- [ ] Multiple organization management.
