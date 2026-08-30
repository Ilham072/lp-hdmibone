# ARCHITECTURE.md

## Website Himpunan Dai Muda Indonesia Kabupaten Bone

**Document Version:** 1.0  
**Status:** Draft / MVP Architecture  
**Project:** Website HDMI Kabupaten Bone  
**Architecture Style:** Static-first, Content-driven, SEO-first  
**Primary Framework:** Astro  
**Language:** TypeScript  
**Styling:** Tailwind CSS  

---

# 1. Architecture Overview

Website HDMI Kabupaten Bone dibangun dengan pendekatan **static-first** dan **content-driven**.

Pada tahap awal, website berfungsi sebagai:

- Website profil organisasi
- Landing page
- Media informasi kegiatan
- Portal berita
- Portal artikel
- Galeri organisasi

Pada fase MVP, konten berita dan artikel disimpan melalui **Astro Content Collections** menggunakan Markdown atau MDX.

Arsitektur harus tetap memungkinkan website dikembangkan menjadi sistem publikasi berbasis CMS tanpa perlu membangun ulang frontend dari awal.

Prinsip utama:

```text
Build simple now.
Keep migration path open.
Avoid premature complexity.
```

---

# 2. Architecture Goals

Arsitektur harus memenuhi tujuan berikut:

1. Memiliki performa tinggi.
2. SEO-friendly.
3. Mobile-first.
4. Mudah dikembangkan.
5. Mudah dipelihara.
6. Biaya operasional awal rendah.
7. Tidak membutuhkan server aplikasi pada MVP.
8. Mendukung berita dan artikel.
9. Mendukung migrasi ke Headless CMS.
10. Memiliki struktur kode yang jelas.
11. Meminimalkan JavaScript di browser.
12. Mendukung image optimization.
13. Aman dari ketergantungan backend yang tidak diperlukan.

---

# 3. Recommended Technology Stack

## 3.1 Frontend Framework

**Astro**

Alasan:

- Static Site Generation sangat cocok untuk website organisasi.
- Performa tinggi.
- JavaScript client-side minimal.
- SEO-friendly.
- Mendukung Content Collections.
- Mudah digunakan untuk website berbasis artikel.
- Dapat dikembangkan menjadi hybrid/server-rendered jika diperlukan.

---

## 3.2 Programming Language

**TypeScript**

Digunakan untuk:

- Type safety
- Content schema
- Utility
- Component props
- API integration di masa depan

---

## 3.3 Styling

**Tailwind CSS**

Digunakan untuk:

- Layout
- Responsive design
- Typography
- Spacing
- Color
- Component styling

Design token utama tidak boleh tersebar secara acak.

Token seperti:

- warna
- radius
- typography
- spacing
- shadow

harus mengacu ke `DESIGN_SYSTEM.md`.

---

# 4. High-Level Architecture

## MVP

```text
User Browser
     │
     ▼
CDN / Static Hosting
     │
     ▼
Astro Generated Website
     │
     ├── Homepage
     ├── Tentang
     ├── Program
     ├── Berita
     ├── Artikel
     ├── Galeri
     └── Kontak
            │
            ▼
     Content Collections
            │
       Markdown / MDX
```

Website di-build menjadi file static seperti:

```text
HTML
CSS
JavaScript
Images
XML
JSON
```

File kemudian didistribusikan melalui CDN.

---

# 5. Future Architecture

Ketika organisasi membutuhkan dashboard admin dan beberapa editor:

```text
                 ┌──────────────────┐
                 │      Visitor     │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Astro Frontend   │
                 └────────┬─────────┘
                          │
                 ┌────────┴────────┐
                 │                 │
                 ▼                 ▼
          Static Content       Headless CMS
                                   │
                  ┌────────────────┼────────────────┐
                  ▼                ▼                ▼
               Articles          News            Media
                  │                │                │
                  └────────────────┴────────────────┘
                                   │
                                   ▼
                               Database
```

Frontend Astro tetap digunakan.

Perubahan utama terjadi pada data source.

---

# 6. Rendering Strategy

Gunakan:

**Static Site Generation (SSG)**

untuk mayoritas halaman.

Halaman seperti:

```text
/
/tentang
/program
/berita
/berita/[slug]
/artikel
/artikel/[slug]
/galeri
/kontak
```

dihasilkan saat build.

Keuntungan:

- cepat
- murah
- scalable
- SEO bagus
- surface attack kecil

---

# 7. Astro Islands Strategy

Gunakan JavaScript client-side hanya jika benar-benar diperlukan.

Contoh komponen interaktif:

```text
MobileMenu
Search
GalleryLightbox
ArticleFilter
Pagination enhancement
```

Komponen statis seperti:

```text
Hero
AboutSection
ArticleCard
NewsCard
Footer
ProgramCard
```

tidak perlu hydration.

Prinsip:

```text
Server/Static by default.
Client JavaScript by exception.
```

---

# 8. Project Structure

Struktur awal direkomendasikan:

```text
/
├── public/
│   ├── favicon/
│   ├── icons/
│   ├── images/
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── article/
│   │   ├── news/
│   │   └── gallery/
│   │
│   ├── content/
│   │   ├── artikel/
│   │   ├── berita/
│   │   └── config.ts
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ArticleLayout.astro
│   │   └── NewsLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── tentang.astro
│   │   ├── program.astro
│   │   ├── galeri.astro
│   │   ├── kontak.astro
│   │   │
│   │   ├── berita/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   │
│   │   └── artikel/
│   │       ├── index.astro
│   │       └── [slug].astro
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── utils/
│   │   ├── date.ts
│   │   ├── seo.ts
│   │   └── content.ts
│   │
│   ├── config/
│   │   └── site.ts
│   │
│   └── types/
│
├── docs/
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   ├── DESIGN_SYSTEM.md
│   ├── UI_SPEC.md
│   ├── SEO_SPEC.md
│   └── CONTENT.md
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

# 9. Component Architecture

Gunakan prinsip:

```text
Page
 ↓
Section
 ↓
Reusable Component
 ↓
Primitive UI
```

Contoh homepage:

```text
HomePage
│
├── Navbar
├── HeroSection
├── AboutSection
├── VisionMissionSection
├── ProgramsSection
├── LatestNewsSection
├── FeaturedArticlesSection
├── StatisticsSection
├── GallerySection
├── CollaborationCTA
└── Footer
```

---

# 10. Component Organization

## Common

Komponen reusable:

```text
Button
Container
SectionHeading
Badge
Breadcrumb
SocialShare
EmptyState
```

---

## Layout

```text
Navbar
MobileNavigation
Footer
PageHeader
```

---

## Content

```text
ArticleCard
NewsCard
ArticleMeta
AuthorCard
CategoryBadge
RelatedContent
```

---

## Home

Komponen khusus homepage:

```text
HeroSection
AboutSection
ProgramsSection
LatestNewsSection
FeaturedArticleSection
StatisticsSection
GalleryPreview
CollaborationCTA
```

---

# 11. Layout Architecture

Gunakan layout terpisah untuk tipe halaman.

## BaseLayout

Digunakan untuk halaman umum.

Tanggung jawab:

- HTML shell
- SEO metadata
- Navbar
- Footer
- global styles

---

## ArticleLayout

Digunakan untuk artikel.

Tanggung jawab:

- title
- author
- publication date
- cover
- article typography
- reading time
- sharing
- related content

---

## NewsLayout

Digunakan untuk berita.

Tanggung jawab:

- title
- date
- reporter/author
- featured image
- content
- gallery
- related news

---

# 12. Content Architecture

Konten dibagi menjadi dua tipe utama:

```text
berita
artikel
```

Jangan menyatukan keduanya secara semantik walaupun struktur datanya mirip.

---

# 13. News Content Schema

Contoh:

```ts
{
  title: string
  slug?: string
  excerpt: string
  cover: ImageMetadata
  category: string
  author: string
  publishedAt: Date
  updatedAt?: Date
  tags?: string[]
  featured?: boolean
  draft?: boolean
  seoTitle?: string
  seoDescription?: string
}
```

---

# 14. Article Content Schema

Contoh:

```ts
{
  title: string
  slug?: string
  excerpt: string
  cover: ImageMetadata
  author: string
  category: string
  tags?: string[]
  publishedAt: Date
  updatedAt?: Date
  featured?: boolean
  draft?: boolean
  seoTitle?: string
  seoDescription?: string
}
```

---

# 15. Example Content

Contoh file:

```text
src/content/berita/upgrading-hdmi-bone.md
```

```yaml
---
title: "Upgrading dan Rapat Kerja HDMI Kabupaten Bone"
excerpt: "HDMI Kabupaten Bone melaksanakan kegiatan upgrading dan rapat kerja pengurus."
category: "Kegiatan"
author: "HDMI Bone"
publishedAt: 2026-08-25
featured: true
draft: false
---
```

---

# 16. Slug Strategy

URL artikel tidak boleh menggunakan ID database.

Gunakan human-readable slug.

Contoh:

```text
/berita/upgrading-hdmi-kabupaten-bone
```

bukan:

```text
/berita/12345
```

Slug:

- lowercase
- menggunakan dash
- singkat
- deskriptif
- stabil setelah publish

---

# 17. URL Architecture

Gunakan:

```text
/

/tentang

/program

/berita

/berita/[slug]

/artikel

/artikel/[slug]

/kategori/[slug]

/tag/[slug]

/galeri

/kontak
```

Jika category/tag belum dibutuhkan pada MVP, route dapat ditambahkan pada fase publishing berikutnya.

---

# 18. Data Access Layer

Jangan membaca Content Collections langsung di seluruh component.

Buat utility layer.

Contoh:

```text
src/utils/content.ts
```

Fungsi yang direkomendasikan:

```ts
getPublishedNews()
getLatestNews()
getFeaturedNews()

getPublishedArticles()
getLatestArticles()
getFeaturedArticles()

getRelatedArticles()
getRelatedNews()
```

Tujuan:

Ketika Markdown diganti CMS, perubahan cukup dilakukan di data access layer.

---

# 19. Content Repository Pattern

Gunakan abstraction sederhana:

```text
UI
 │
 ▼
Content Service
 │
 ├── Astro Content Collections
 │
 └── Future CMS
```

Jangan membuat abstraction yang terlalu kompleks pada MVP.

Tujuan utamanya hanya mencegah coupling berlebihan.

---

# 20. Site Configuration

Informasi organisasi tidak boleh tersebar di banyak file.

Gunakan:

```text
src/config/site.ts
```

Contoh data:

```ts
export const siteConfig = {
  name: "Himpunan Dai Muda Indonesia Kabupaten Bone",
  shortName: "HDMI Bone",
  description: "...",
  domain: "https://...",
  email: "himpunandaimudaindonesiabone@gmail.com",
  instagram: "@hdmi.bone",
}
```

Dapat dikembangkan dengan:

```text
address
phone
social links
organization schema
default SEO image
```

---

# 21. SEO Architecture

SEO merupakan concern tingkat layout, bukan ditulis manual secara berulang di setiap halaman.

Buat utility:

```text
src/utils/seo.ts
```

dan component:

```text
SEO.astro
```

Metadata:

- title
- description
- canonical
- Open Graph
- Twitter card
- robots
- image

---

# 22. SEO Title Strategy

Format halaman umum:

```text
{Page Title} | HDMI Kabupaten Bone
```

Contoh:

```text
Tentang Kami | HDMI Kabupaten Bone
```

Artikel:

```text
{Article Title} | HDMI Kabupaten Bone
```

---

# 23. Canonical URL

Setiap halaman harus memiliki canonical URL.

Contoh:

```text
https://domain.id/artikel/peran-dai-muda-di-era-digital
```

Canonical dibuat dari:

```text
site base URL + Astro.url pathname
```

---

# 24. Structured Data Architecture

Gunakan JSON-LD.

## Homepage

```text
Organization
WebSite
```

## Article

```text
Article
BreadcrumbList
```

## News

```text
NewsArticle
BreadcrumbList
```

Implementasi dibuat reusable melalui component/helper.

---

# 25. Sitemap

Gunakan sitemap otomatis saat build.

Sitemap harus mencakup:

- static pages
- published articles
- published news
- category pages jika tersedia

Draft tidak boleh masuk sitemap.

---

# 26. Robots

Production:

```text
User-agent: *
Allow: /
```

Admin area di masa depan:

```text
Disallow: /admin/
```

Staging environment harus diatur agar tidak ter-index.

---

# 27. Image Architecture

Gambar merupakan bagian penting dari website HDMI karena banyak dokumentasi kegiatan.

Gunakan Astro image optimization jika memungkinkan.

Prioritas:

```text
AVIF
WebP
fallback
```

---

# 28. Image Rules

Setiap image:

- memiliki width
- memiliki height
- memiliki alt
- responsive
- optimized

Hindari:

```html
<img src="/large-image.jpg">
```

tanpa dimensi.

---

# 29. Image Directory Strategy

Gambar static umum:

```text
public/images/
```

Gambar yang membutuhkan Astro optimization:

```text
src/assets/images/
```

Gambar konten:

```text
src/assets/images/news/
src/assets/images/articles/
src/assets/images/gallery/
```

Jika menggunakan CMS nantinya, gambar dapat berasal dari CMS/CDN.

---

# 30. Image Naming

Gunakan format:

```text
upgrading-hdmi-bone-2026.webp
```

bukan:

```text
IMG_834748.jpg
```

---

# 31. Responsive Architecture

Gunakan strategi mobile-first.

Breakpoint mengikuti Tailwind.

Prinsip:

```text
base → mobile
sm
md
lg
xl
2xl
```

Jangan mendesain desktop terlebih dahulu kemudian "dipaksa" mengecil.

---

# 32. Typography Architecture

Artikel menggunakan typography system khusus.

Direkomendasikan memiliki class wrapper seperti:

```text
.prose-content
```

Atau Tailwind Typography jika dependency tersebut memang digunakan.

Article body perlu membatasi lebar baca:

```text
~65–75 characters per line
```

---

# 33. Accessibility Architecture

Komponen reusable wajib mempertimbangkan:

- semantic HTML
- keyboard interaction
- focus states
- ARIA hanya jika diperlukan
- alt text
- heading hierarchy

Navigation:

```html
<nav>
```

Main content:

```html
<main>
```

Article:

```html
<article>
```

Footer:

```html
<footer>
```

---

# 34. State Management

MVP tidak membutuhkan global state management.

Gunakan:

- Astro props
- URL state
- local component state untuk island interaktif

Jangan memasang Redux/Zustand atau state library lain tanpa kebutuhan nyata.

---

# 35. Search Architecture

Search tidak wajib pada MVP awal.

Fase selanjutnya dapat menggunakan:

### Option A

Client-side static search index.

Cocok jika jumlah artikel masih kecil.

### Option B

Search service/CMS API.

Digunakan jika jumlah konten meningkat.

Jangan menambahkan search infrastructure kompleks di MVP.

---

# 36. Analytics Architecture

Analytics harus bersifat optional dan privacy-conscious.

Integrasi dilakukan melalui environment variable atau config.

Contoh:

```text
PUBLIC_ANALYTICS_ID
```

Analytics tidak boleh menghambat rendering utama.

---

# 37. Environment Variables

Gunakan `.env` untuk nilai environment-specific.

Contoh:

```text
PUBLIC_SITE_URL
PUBLIC_ANALYTICS_ID
CMS_API_URL
CMS_API_TOKEN
```

Token rahasia tidak boleh menggunakan prefix `PUBLIC_`.

---

# 38. Environment

Minimal memiliki:

```text
development
production
```

Jika workflow berkembang:

```text
development
staging
production
```

---

# 39. Security Architecture

Karena MVP berupa static website:

- tidak memiliki database publik
- tidak memiliki authentication
- tidak memiliki server session
- tidak menerima input sensitif

Ini secara signifikan mengurangi attack surface.

---

# 40. Security Rules

Tidak boleh:

- menyimpan API secret di repository
- expose CMS token ke browser
- menaruh credential di source code
- menjalankan HTML user-generated tanpa sanitasi

---

# 41. Markdown Security

Pada MVP hanya pengurus/developer yang mengontrol Markdown.

Jika nanti konten berasal dari CMS multi-editor:

- sanitize HTML
- whitelist embed
- validate external URL
- batasi script injection

---

# 42. Contact Form Architecture

Contact form bukan requirement utama MVP.

Jika dibutuhkan:

```text
Browser
   │
   ▼
Serverless Function / Form Provider
   │
   ▼
Email
```

Jangan menaruh credential email langsung di frontend.

---

# 43. Deployment Architecture

Recommended:

```text
Git Repository
      │
      ▼
CI/CD Build
      │
      ▼
Astro Build
      │
      ▼
Static Hosting / CDN
      │
      ▼
User
```

---

# 44. Hosting Requirements

Hosting harus mendukung:

- custom domain
- HTTPS
- CDN
- cache
- automatic deployment
- environment variables
- redirect configuration

Contoh platform yang kompatibel:

- Cloudflare Pages
- Netlify
- Vercel
- static hosting lainnya

Pemilihan final tidak harus dikunci di awal.

---

# 45. CI/CD

Workflow ideal:

```text
git push
   │
   ▼
repository
   │
   ▼
automatic build
   │
   ▼
deploy
```

Branch:

```text
main
```

untuk production.

Jika diperlukan:

```text
develop
```

untuk staging/development.

---

# 46. Build Validation

Sebelum deployment:

```text
npm run build
```

harus berhasil tanpa error.

Jika tersedia:

```text
npm run check
```

juga harus lulus.

---

# 47. Performance Architecture

Prioritas utama:

1. Static rendering
2. Minimal JavaScript
3. Image optimization
4. Font optimization
5. Lazy loading
6. CDN
7. caching

---

# 48. Font Strategy

Hindari terlalu banyak font weight.

Ideal:

```text
1 primary font family
1 optional accent/display font
```

Self-hosting dapat dipertimbangkan untuk performa dan privasi.

---

# 49. JavaScript Budget

JavaScript tidak boleh dikirim ke browser hanya karena component membutuhkan markup.

Gunakan hydration directive hanya untuk component interaktif.

Contoh:

```astro
<MobileMenu client:load />
```

bukan seluruh homepage menggunakan client rendering.

---

# 50. Error Handling

Static pages:

Jika slug tidak ditemukan:

```text
404
```

Sediakan custom:

```text
404.astro
```

Isi:

- pesan sederhana
- link kembali
- search/article link jika tersedia

---

# 51. Draft Content

Konten dengan:

```text
draft: true
```

tidak boleh:

- muncul di listing
- dibuat sebagai public page
- masuk sitemap
- muncul pada related content

---

# 52. Publication Logic

Published content:

```text
draft = false
publishedAt <= current date
```

Jika tanggal publikasi berada di masa depan, konten dianggap scheduled dan tidak ditampilkan pada production build kecuali mekanisme schedule sudah diterapkan.

---

# 53. Timezone

Gunakan timezone organisasi:

```text
Asia/Makassar
UTC+08:00
WITA
```

Tanggal publikasi harus ditampilkan konsisten.

Contoh:

```text
25 Agustus 2026
```

---

# 54. Date Utilities

Formatting tanggal tidak boleh dilakukan manual di setiap component.

Gunakan:

```text
src/utils/date.ts
```

Contoh:

```ts
formatDate()
formatArticleDate()
```

---

# 55. Pagination

Jika jumlah artikel masih kecil:

```text
single listing page
```

Ketika konten bertambah:

```text
/artikel/page/2
/berita/page/2
```

Atau mengikuti Astro pagination API.

---

# 56. Related Content

Related content dihitung berdasarkan:

1. kategori sama
2. tag sama
3. bukan artikel aktif
4. published
5. terbaru

Pada MVP tidak perlu recommendation engine.

---

# 57. Author Architecture

Awal:

Author dapat berupa metadata sederhana.

Contoh:

```yaml
author: "HDMI Bone"
```

Jika jumlah penulis bertambah, migrasikan menjadi content collection tersendiri:

```text
src/content/authors/
```

---

# 58. Category Architecture

Pada awal, kategori dapat menggunakan string enum/schema.

Contoh:

```text
Dakwah
Organisasi
Kegiatan
Sosial
Pendidikan
Kolaborasi
```

Jika kebutuhan berkembang, category dapat menjadi entity tersendiri di CMS.

---

# 59. Gallery Architecture

MVP:

```text
Static gallery
```

Data bisa berupa file konfigurasi/collection.

Future:

```text
CMS Media Library
      │
      ▼
Gallery Album
      │
      ▼
Gallery Images
```

---

# 60. CMS Migration Strategy

Migrasi CMS hanya dilakukan jika:

- publikasi semakin sering
- lebih dari satu editor
- pengurus non-teknis perlu publish sendiri
- media library mulai besar
- workflow draft/review diperlukan

---

# 61. CMS Requirements

CMS masa depan minimal harus mendukung:

- article
- news
- author
- category
- tag
- image/media
- draft
- publish
- scheduled publication
- SEO metadata

---

# 62. CMS Integration Layer

Jangan mengakses CMS langsung dari UI component.

Gunakan:

```text
src/services/
```

Contoh:

```text
content-service.ts
cms-service.ts
```

Sehingga:

```text
Component
   │
   ▼
Content Service
   │
   ▼
CMS API
```

---

# 63. Future Database

Database tidak diperlukan pada MVP.

Jika CMS self-hosted digunakan di masa depan, database kemungkinan dibutuhkan.

Database dipilih berdasarkan CMS/backend yang dipilih.

Jangan menambahkan database sebelum kebutuhan muncul.

---

# 64. Authentication

MVP tidak memiliki authentication.

Jika CMS menggunakan SaaS:

Authentication dikelola CMS.

Jika custom admin dibuat:

authentication harus dilakukan server-side dengan:

- secure password hashing
- session/token security
- authorization
- CSRF protection jika relevan
- rate limiting

---

# 65. Roles Future

Kemungkinan role:

```text
Super Admin
Editor
Author
```

### Super Admin

Mengelola seluruh sistem.

### Editor

Review dan publish konten.

### Author

Membuat dan mengedit draft sendiri.

Role belum menjadi bagian MVP.

---

# 66. Editorial Workflow Future

Ideal:

```text
Draft
  │
  ▼
Review
  │
  ▼
Scheduled / Published
```

Ini baru diperlukan ketika tim publikasi tumbuh.

---

# 67. Dependency Policy

Sebelum memasang dependency:

1. cek apakah Astro/native browser API bisa menyelesaikan kebutuhan
2. evaluasi bundle impact
3. evaluasi maintenance
4. evaluasi security
5. hanya instal jika memberikan manfaat nyata

Hindari dependency hanya untuk utility kecil.

---

# 68. Code Quality Rules

Gunakan:

- TypeScript strictness yang masuk akal
- reusable component
- clear naming
- single responsibility
- no dead code
- no duplicated content queries

---

# 69. Naming Convention

Component:

```text
PascalCase
```

Contoh:

```text
ArticleCard.astro
HeroSection.astro
```

Utility:

```text
camelCase
```

File utility:

```text
kebab-case.ts
```

atau pola yang konsisten sepanjang project.

---

# 70. CSS Strategy

Prioritas:

```text
Tailwind utility classes
```

Gunakan `global.css` untuk:

- CSS reset tambahan
- font
- global variables
- article typography
- reusable low-level patterns

Hindari file CSS per component jika tidak diperlukan.

---

# 71. Design Tokens

Design token harus dikonfigurasi melalui Tailwind/CSS variables.

Contoh:

```text
--color-primary
--color-secondary
--color-accent
--color-background
--color-foreground
```

Nilai final mengacu pada:

```text
DESIGN_SYSTEM.md
```

---

# 72. API Architecture

MVP tidak membutuhkan API internal.

Future CMS menggunakan external/content API.

Jika API custom diperlukan nanti:

```text
Frontend
   │
   ▼
API layer
   │
   ▼
Application service
   │
   ▼
Database
```

Tidak boleh mengakses database langsung dari client.

---

# 73. Cache Strategy

Static asset menggunakan cache CDN.

Untuk fingerprinted assets:

```text
long-term cache
```

HTML dapat menggunakan cache lebih pendek sesuai platform hosting.

---

# 74. Redirect Strategy

Jika slug berubah, buat permanent redirect:

```text
301
```

Jangan biarkan artikel lama menjadi 404 jika sudah pernah di-index Google.

---

# 75. Content URL Stability

Setelah artikel dipublikasikan:

- hindari mengganti slug
- title boleh diperbarui
- slug dipertahankan

Kecuali ada alasan SEO/struktur yang kuat.

---

# 76. Social Share

Share button hanya membuat URL menuju platform.

Tidak perlu SDK sosial media besar.

Prioritas:

```text
WhatsApp
Facebook
X
Telegram
Copy link
```

---

# 77. Open Graph Image

Setiap artikel sebaiknya memiliki cover.

Jika tidak tersedia:

gunakan default:

```text
HDMI Bone OG Image
```

Default ditentukan melalui site configuration.

---

# 78. Browser Support

Target browser modern:

- Chrome
- Edge
- Firefox
- Safari
- mobile Chrome
- mobile Safari

Tidak perlu mendukung Internet Explorer.

---

# 79. Observability

MVP minimal membutuhkan:

- hosting build log
- deploy status
- analytics jika diperlukan

Tidak perlu application monitoring kompleks karena website static.

---

# 80. Backup

Markdown/MDX tersimpan dalam Git repository sehingga Git menjadi backup utama content source.

Jika CMS digunakan:

CMS/database harus memiliki:

- automatic backup
- export content
- media backup

---

# 81. Disaster Recovery

MVP:

```text
Git repository
      │
      ▼
Rebuild
      │
      ▼
Redeploy
```

Website dapat direstore dari repository tanpa database.

---

# 82. Content Ownership

Semua konten organisasi harus berada dalam akun/repository yang dapat diakses organisasi.

Jangan membuat website bergantung pada akun personal developer sebagai satu-satunya akses.

---

# 83. Domain Architecture

Gunakan domain resmi HTTPS.

Canonical domain hanya satu.

Contoh:

```text
https://domain.id
```

Redirect:

```text
http → https
www → canonical domain
```

atau kebalikannya sesuai keputusan domain final.

---

# 84. Architecture Decisions

## ADR-001 — Astro

**Decision:** menggunakan Astro.

**Reason:**

- content-first
- SEO
- performance
- static generation
- low client JavaScript

---

## ADR-002 — TypeScript

**Decision:** menggunakan TypeScript.

**Reason:**

- type safety
- maintainability
- content schema reliability

---

## ADR-003 — Tailwind CSS

**Decision:** menggunakan Tailwind.

**Reason:**

- rapid UI implementation
- responsive design
- consistent design tokens

---

## ADR-004 — Content Collections for MVP

**Decision:** berita/artikel disimpan melalui Astro Content Collections.

**Reason:**

- tidak membutuhkan database
- version controlled
- simple
- low operational cost

---

## ADR-005 — No Database on MVP

**Decision:** tidak menggunakan database.

**Reason:**

Belum ada fitur yang membutuhkan persistence runtime.

---

## ADR-006 — No CMS Initially

**Decision:** CMS tidak menjadi dependency MVP.

**Reason:**

Menghindari complexity sebelum editorial workflow benar-benar membutuhkannya.

---

## ADR-007 — Static First

**Decision:** halaman publik di-render static.

**Reason:**

- performance
- SEO
- scalability
- security
- lower cost

---

# 85. Non-Goals

Arsitektur MVP tidak ditujukan untuk:

- membership system
- forum
- social network
- payment
- donation system
- real-time chat
- multi-tenant SaaS
- mobile application
- complex backend
- custom authentication

---

# 86. MVP Technical Definition of Done

Architecture MVP dianggap berhasil jika:

- Astro project berjalan.
- TypeScript aktif.
- Tailwind terintegrasi.
- Static build berhasil.
- Routing utama tersedia.
- Content Collections tersedia.
- Article/news dynamic route berfungsi.
- Draft filtering bekerja.
- SEO metadata tersedia.
- sitemap tersedia.
- optimized image digunakan.
- responsive layout berjalan.
- 404 tersedia.
- production deployment berhasil.
- tidak ada secret di repository.
- architecture dapat dipindahkan ke CMS tanpa redesign besar pada UI.

---

# 87. Recommended Development Order

## Step 1 — Foundation

```text
Astro
TypeScript
Tailwind
Project structure
Site config
Global layout
```

## Step 2 — Design Foundation

```text
Design tokens
Typography
Button
Container
Navbar
Footer
```

## Step 3 — Homepage

```text
Hero
About
Programs
News preview
Article preview
Gallery
CTA
```

## Step 4 — Content System

```text
Content Collections
News schema
Article schema
Content utilities
```

## Step 5 — Content Pages

```text
News listing
News detail
Article listing
Article detail
```

## Step 6 — Organization Pages

```text
About
Program
Gallery
Contact
```

## Step 7 — SEO

```text
Metadata
Canonical
Open Graph
JSON-LD
Sitemap
robots
```

## Step 8 — Optimization

```text
Images
Fonts
Accessibility
Lighthouse
Core Web Vitals
```

## Step 9 — Deployment

```text
Domain
HTTPS
CDN
CI/CD
Production verification
```

---

# 88. Future Evolution

Arsitektur dirancang berkembang secara bertahap:

```text
PHASE 1
Static Organization Website
        │
        ▼
PHASE 2
Content Publishing Website
        │
        ▼
PHASE 3
Headless CMS
        │
        ▼
PHASE 4
Editorial Workflow
        │
        ▼
PHASE 5
HDMI Digital Da'wah Platform
```

Tidak semua fase harus dikerjakan sekaligus.

Setiap fase hanya dilakukan ketika kebutuhan organisasi membenarkannya.

---

# 89. Architecture Principle Summary

```text
Static-first
Content-first
SEO-first
Mobile-first
Performance-first
Accessible by default
Minimal JavaScript
No premature backend
No premature database
CMS-ready
Maintainable
Progressive architecture
```

---

# 90. Related Documents

Dokumen ini harus dibaca bersama:

```text
docs/PRD.md
docs/DESIGN_SYSTEM.md
docs/UI_SPEC.md
docs/SEO_SPEC.md
docs/CONTENT.md
```

## Responsibility

### PRD.md

Menentukan:

**apa yang dibangun dan mengapa.**

### ARCHITECTURE.md

Menentukan:

**bagaimana sistem dibangun.**

### DESIGN_SYSTEM.md

Menentukan:

**bagaimana bahasa visual website bekerja.**

### UI_SPEC.md

Menentukan:

**bagaimana halaman dan interaction dibentuk.**

### SEO_SPEC.md

Menentukan:

**bagaimana website ditemukan melalui search engine.**

### CONTENT.md

Menentukan:

**apa yang harus ditampilkan dan bagaimana konten disusun.**

---

# 91. Final Architecture Decision

Untuk MVP HDMI Kabupaten Bone, arsitektur yang digunakan:

```text
Astro
+ TypeScript
+ Tailwind CSS
+ Astro Content Collections
+ Markdown / MDX
+ Static Site Generation
+ Static Hosting / CDN
```

Dengan jalur pengembangan:

```text
Markdown / MDX
       │
       ▼
Content Service
       │
       ▼
Astro UI
```

yang di masa depan dapat berubah menjadi:

```text
Headless CMS
       │
       ▼
Content Service
       │
       ▼
Astro UI
```

tanpa perlu membangun ulang keseluruhan frontend.

Arsitektur ini dipilih untuk menjaga website HDMI tetap:

**cepat, ringan, mudah dirawat, murah dioperasikan, SEO-friendly, dan siap berkembang.**
