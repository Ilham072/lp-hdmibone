# SEO_SPEC.md

## Website Himpunan Dai Muda Indonesia Kabupaten Bone

**Document Version:** 1.0  
**Status:** Initial SEO Specification  
**Project:** HDMI Kabupaten Bone Website  
**Primary Stack:** Astro + TypeScript + Tailwind CSS  
**Content System (MVP):** Astro Content Collections + Markdown / MDX  
**SEO Direction:** Technical SEO + Local Relevance + Editorial Authority  
**Target Market:** Indonesia, dengan prioritas Kabupaten Bone dan Sulawesi Selatan  
**Primary Language:** Bahasa Indonesia (`id-ID`)

---

# 1. Purpose

Dokumen ini mendefinisikan standar SEO untuk website Himpunan Dai Muda Indonesia Kabupaten Bone.

SEO tidak diperlakukan sebagai optimasi tambahan setelah website selesai.

SEO menjadi bagian dari:

- arsitektur
- routing
- content model
- editorial workflow
- performance
- metadata
- internal linking
- image handling
- structured data
- deployment

Tujuan utama:

```text
Membuat website HDMI mudah ditemukan,
mudah dipahami search engine,
mudah dibagikan,
dan tetap memberikan pengalaman baca yang baik.
```

---

# 2. SEO Objectives

Website harus mampu:

1. Muncul ketika masyarakat mencari HDMI Kabupaten Bone.
2. Membangun identitas resmi organisasi di search engine.
3. Mengindeks berita kegiatan HDMI.
4. Mengembangkan traffic organik melalui artikel.
5. Membangun topical authority pada tema dakwah, kepemudaan, sosial, pendidikan, dan kegiatan organisasi.
6. Memperkuat relevansi lokal Kabupaten Bone.
7. Memudahkan konten dibagikan melalui WhatsApp dan media sosial.
8. Menjaga indexing tetap bersih.
9. Memastikan draft, staging, dan halaman internal tidak ter-index.
10. Mempertahankan URL dan metadata yang stabil.

---

# 3. SEO Strategy

SEO website dibagi menjadi empat layer:

```text
Technical SEO
      │
      ├── Crawlability
      ├── Indexability
      ├── Sitemap
      ├── Canonical
      ├── Performance
      └── Structured Data

Content SEO
      │
      ├── Search intent
      ├── Topic coverage
      ├── Internal linking
      ├── Headings
      └── Editorial quality

Local SEO
      │
      ├── Kabupaten Bone
      ├── Sulawesi Selatan
      ├── Organization identity
      └── Location relevance

Distribution SEO
      │
      ├── Open Graph
      ├── Social sharing
      ├── Google Search
      └── RSS / future distribution
```

---

# 4. Search Positioning

Website HDMI tidak hanya menargetkan keyword nama organisasi.

Target dibagi menjadi:

## Brand Search

Contoh:

```text
HDMI Bone
HDMI Kabupaten Bone
Himpunan Dai Muda Indonesia Bone
Dai Muda Bone
Himpunan Dai Muda Indonesia Kabupaten Bone
```

## Organization Activity Search

Contoh:

```text
kegiatan HDMI Bone
dakwah pemuda Bone
kegiatan dai muda Bone
pelatihan dai muda Bone
program dakwah Kabupaten Bone
```

## Informational / Article Search

Contoh:

```text
peran dai muda
dakwah di era digital
dakwah generasi muda
pemuda dan dakwah
strategi dakwah digital
materi dakwah pemuda
```

Keyword final harus ditentukan berdasarkan isi aktual artikel, bukan dipaksakan ke semua halaman.

---

# 5. Search Intent

Setiap halaman harus memiliki search intent yang jelas.

## Homepage

Intent:

```text
Navigational + Organizational
```

User ingin mengetahui:

- apa itu HDMI
- HDMI Bone
- kegiatan HDMI
- kontak organisasi

---

## Berita

Intent:

```text
Current / Informational
```

User mencari:

- kegiatan
- acara
- pelantikan
- rapat kerja
- program
- kolaborasi
- kabar organisasi

---

## Artikel

Intent:

```text
Informational / Evergreen
```

User mencari pengetahuan, wawasan, atau pembahasan tertentu.

---

# 6. News vs Article SEO

Berita dan artikel tidak boleh dianggap tipe konten yang sama secara editorial.

## Berita

Route:

```text
/berita/[slug]
```

Primary schema:

```text
NewsArticle
```

Fokus:

- kegiatan aktual
- fakta
- tanggal
- tempat
- pihak terlibat
- dokumentasi
- author/byline
- relevansi organisasi

---

## Artikel

Route:

```text
/artikel/[slug]
```

Primary schema:

```text
Article
```

Fokus:

- evergreen content
- topical depth
- search intent
- internal linking
- author identity
- readability
- long-term organic traffic

---

# 7. URL Architecture

Gunakan URL:

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

Future:

```text
/kategori/[slug]
/tag/[slug]
/penulis/[slug]
```

---

# 8. URL Principles

URL harus:

- lowercase
- human-readable
- pendek
- deskriptif
- menggunakan hyphen
- stabil setelah publish

Good:

```text
/artikel/peran-dai-muda-di-era-digital
```

Bad:

```text
/artikel?id=39281
```

Bad:

```text
/artikel/peran_dai_muda_final_baru
```

---

# 9. Slug Rules

Slug dibuat dari topik inti.

Contoh title:

```text
Peran Dai Muda dalam Menjawab Tantangan Dakwah di Era Digital
```

Slug:

```text
peran-dai-muda-era-digital
```

Tidak harus menyalin semua kata dari title.

Hindari:

- tanggal di slug kecuali relevan
- kata filler berlebihan
- slug sangat panjang
- penggantian slug setelah artikel di-index

---

# 10. URL Stability

Setelah konten publish:

```text
slug dianggap permanen
```

Jika slug benar-benar harus berubah:

```text
old URL
   │
   ▼
301 Redirect
   │
   ▼
new URL
```

Jangan membiarkan URL lama menjadi 404.

---

# 11. Canonical URL

Semua halaman indexable harus memiliki:

```html
<link rel="canonical" href="ABSOLUTE_URL" />
```

Canonical harus:

- self-referencing untuk halaman utama
- absolute
- HTTPS
- menggunakan domain canonical
- sesuai trailing slash policy

Contoh:

```text
https://example.org/artikel/peran-dai-muda-era-digital
```

---

# 12. Astro Site Configuration

Production URL harus ditetapkan pada:

```text
astro.config.mjs
```

Konsep:

```js
export default defineConfig({
  site: "https://domain-resmi-hdmi.example",
})
```

`site` digunakan sebagai sumber untuk:

- canonical URL
- sitemap
- absolute URL generation

Domain final ditentukan saat deployment.

---

# 13. Domain Canonicalization

Pilih satu canonical domain.

Misalnya salah satu:

```text
https://example.org
```

atau:

```text
https://www.example.org
```

Semua varian lain harus redirect.

```text
HTTP → HTTPS

www ↔ non-www
```

sesuai keputusan canonical.

---

# 14. Trailing Slash

Pilih satu policy dan konsisten.

Contoh:

```text
/artikel/judul
```

atau:

```text
/artikel/judul/
```

Jangan memiliki dua URL indexable untuk konten yang sama.

---

# 15. HTML Language

Root HTML:

```html
<html lang="id">
```

atau:

```html
<html lang="id-ID">
```

Gunakan satu format secara konsisten.

Untuk website ini direkomendasikan:

```text
id
```

karena primary content menggunakan Bahasa Indonesia.

---

# 16. Page Title

Setiap halaman wajib memiliki `<title>` unik.

Format umum:

```text
{Page Title} | HDMI Kabupaten Bone
```

Contoh:

```text
Tentang Kami | HDMI Kabupaten Bone
```

---

# 17. Homepage Title

Recommended:

```text
HDMI Kabupaten Bone | Himpunan Dai Muda Indonesia
```

Alternatif dapat disesuaikan setelah domain dan positioning final.

Homepage tidak cukup menggunakan:

```text
Beranda
```

---

# 18. News Title

Format:

```text
{Judul Berita} | HDMI Kabupaten Bone
```

Example:

```text
HDMI Bone Gelar Upgrading dan Rapat Kerja Pengurus | HDMI Kabupaten Bone
```

---

# 19. Article Title

Format:

```text
{Judul Artikel} | HDMI Kabupaten Bone
```

Jangan memasukkan keyword yang tidak relevan hanya untuk SEO.

---

# 20. Title Editorial Guideline

Title harus:

- spesifik
- menggambarkan isi
- tidak clickbait
- tidak berulang
- tidak keyword stuffing
- tetap natural dalam Bahasa Indonesia

Target editorial:

```text
sekitar 45–65 karakter bila memungkinkan
```

Ini hanya target penulisan, bukan batas teknis Google.

Search engine dapat menampilkan atau membentuk title link berbeda berdasarkan konteks.

---

# 21. Meta Description

Setiap halaman penting harus memiliki meta description.

Content detail wajib memiliki unique description.

Recommended editorial target:

```text
~120–160 karakter
```

Ini bukan hard limit.

Meta description harus:

- menjelaskan isi
- natural
- spesifik
- memberikan alasan untuk membuka halaman
- tidak menduplikasi semua halaman

---

# 22. Meta Description Example

News:

```text
HDMI Kabupaten Bone melaksanakan Upgrading dan Rapat Kerja pengurus sebagai langkah penguatan organisasi dan penyusunan program kerja.
```

Article:

```text
Membahas peran strategis dai muda dalam menjawab perubahan pola komunikasi dan tantangan dakwah di era digital.
```

---

# 23. SEO Metadata Model

Setiap content item mendukung:

```text
seoTitle
seoDescription
canonical
noindex
```

Jika `seoTitle` kosong:

```text
fallback → title
```

Jika `seoDescription` kosong:

```text
fallback → excerpt
```

---

# 24. Page Metadata Interface

Concept:

```ts
type SeoMetadata = {
  title: string
  description: string
  canonical?: string
  image?: string
  type?: "website" | "article"
  noindex?: boolean
}
```

---

# 25. Open Graph

Semua halaman public memiliki:

```text
og:title
og:description
og:url
og:type
og:image
og:site_name
og:locale
```

Recommended:

```text
og:locale = id_ID
```

---

# 26. Open Graph Type

General pages:

```text
website
```

News/article:

```text
article
```

---

# 27. Open Graph Image

Recommended aspect:

```text
1.91:1
```

Standard editorial asset:

```text
1200 × 630 px
```

Setiap berita/artikel idealnya memiliki cover sendiri.

Fallback:

```text
default HDMI social share image
```

---

# 28. Open Graph Image Content

Ideal:

```text
Photography
+
short headline if needed
+
HDMI identity
```

Jangan menaruh terlalu banyak teks.

File harus:

- optimized
- memiliki absolute URL
- dapat diakses crawler
- bukan temporary URL

---

# 29. X / Twitter Metadata

Gunakan:

```text
twitter:card
twitter:title
twitter:description
twitter:image
```

Default:

```text
summary_large_image
```

Jika akun resmi tersedia di masa depan, tambahkan metadata account yang relevan.

---

# 30. Structured Data Strategy

Gunakan JSON-LD.

Schema utama:

```text
Organization
WebSite
BreadcrumbList
NewsArticle
Article
Person / Organization author
```

Jangan menambahkan schema yang tidak sesuai isi halaman.

---

# 31. Organization Structured Data

Homepage harus menjelaskan organisasi resmi.

Recommended properties:

```text
@context
@type
name
alternateName
url
logo
description
sameAs
contactPoint
```

Tambahkan address hanya jika alamat sekretariat memang dipublikasikan secara resmi.

---

# 32. Organization Example

Conceptual example:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Himpunan Dai Muda Indonesia Kabupaten Bone",
  "alternateName": "HDMI Bone",
  "url": "https://domain.example",
  "logo": "https://domain.example/logo.png",
  "sameAs": [
    "https://instagram.com/..."
  ]
}
```

Data aktual tidak boleh diinventarisasi tanpa sumber resmi.

---

# 33. Website Structured Data

Homepage dapat memiliki:

```text
WebSite
```

Recommended:

```text
name
url
publisher
```

Jangan memasang `SearchAction` jika website belum memiliki search yang benar-benar berfungsi.

---

# 34. NewsArticle Structured Data

Setiap detail berita menggunakan:

```text
NewsArticle
```

Recommended properties:

```text
headline
image
datePublished
dateModified
author
publisher
mainEntityOfPage
description
```

---

# 35. Article Structured Data

Setiap detail artikel menggunakan:

```text
Article
```

Recommended:

```text
headline
image
datePublished
dateModified
author
publisher
mainEntityOfPage
description
```

---

# 36. Article Author

Author dapat berupa:

```text
Person
```

atau:

```text
Organization
```

Jika tulisan dibuat secara institusional:

```text
HDMI Kabupaten Bone
```

Jika penulis individu tersedia:

gunakan nama penulis sebenarnya.

---

# 37. Author Identity

Jika website sudah memiliki author page:

```text
/penulis/[slug]
```

Structured data author dapat menunjuk ke URL author tersebut.

Author page dapat berisi:

- nama
- foto
- bio
- artikel
- social profile jika memang dipublikasikan

---

# 38. Publication Dates

Berita/artikel harus memiliki:

```text
datePublished
```

Jika konten diubah secara substantif:

```text
dateModified
```

Tanggal visual di halaman dan structured data harus konsisten.

---

# 39. Timezone

Gunakan:

```text
Asia/Makassar
UTC+08:00
WITA
```

Structured date:

```text
ISO 8601
```

Concept:

```text
2026-08-25T10:00:00+08:00
```

---

# 40. Byline

News/article harus menampilkan byline bila tersedia.

Example:

```text
Oleh HDMI Kabupaten Bone
25 Agustus 2026
```

atau:

```text
Oleh Nama Penulis
25 Agustus 2026
```

---

# 41. Breadcrumb Structured Data

Detail content:

```text
Beranda
>
Berita
>
Judul
```

atau:

```text
Beranda
>
Artikel
>
Judul
```

Breadcrumb visual dan structured data harus selaras.

---

# 42. Heading Structure

Setiap halaman:

```text
1 × H1
```

Page section:

```text
H2
```

Card/content subsection:

```text
H3
```

Jangan memilih heading berdasarkan ukuran visual.

Styling dan semantics dipisahkan.

---

# 43. Homepage Heading

Example:

```text
H1: Muda Berdakwah, Bergerak Membangun Peradaban
```

Section:

```text
H2: Tentang HDMI
H2: Program Kami
H2: Berita Terbaru
H2: Artikel Pilihan
```

---

# 44. Article Heading

```text
H1
Article title

H2
Main sections

H3
Subsections
```

Jangan lompat dari H1 langsung ke H4.

---

# 45. Internal Linking Strategy

Internal link harus membantu:

- user discovery
- topic context
- crawler discovery

Main internal paths:

```text
Homepage → latest news
Homepage → featured articles
News → related news
Article → related articles
Article → supporting articles
Program → related news
About → program
```

---

# 46. Contextual Internal Links

Artikel harus dapat menghubungkan artikel terkait secara natural.

Example:

```text
Pembahasan ini berkaitan dengan strategi dakwah digital...
```

Anchor text:

```text
strategi dakwah digital
```

lebih baik daripada:

```text
klik di sini
```

---

# 47. Related Content

Logic:

```text
same category
+
shared tags
+
published
+
not current
```

Maksimal recommended:

```text
3–4 items
```

---

# 48. External Links

Gunakan link keluar hanya jika:

- relevan
- memberikan sumber
- memberikan konteks
- menuju pihak terkait

Jangan menambahkan outbound links hanya untuk SEO.

---

# 49. Image SEO

Setiap meaningful image wajib memiliki:

```text
alt
```

Alt harus menjelaskan gambar.

Good:

```text
Pengurus HDMI Kabupaten Bone mengikuti kegiatan upgrading pada 25 Agustus 2026
```

Bad:

```text
image1
```

Bad:

```text
HDMI HDMI Bone dakwah dai muda SEO
```

---

# 50. Decorative Images

Decorative image:

```text
alt=""
```

Jangan memberikan alt SEO pada ornamen visual murni.

---

# 51. Image Filename

Gunakan:

```text
upgrading-hdmi-bone-2026.webp
```

bukan:

```text
IMG_937362.JPG
```

Filename membantu maintenance dan semantic clarity.

---

# 52. Image Optimization

Gunakan:

```text
WebP / AVIF
```

dengan fallback bila diperlukan.

Set:

```text
width
height
```

untuk menghindari layout shift.

---

# 53. Image Loading

LCP / hero:

```text
prioritized
not lazy
```

Below fold:

```text
loading="lazy"
```

---

# 54. Image Captions

Berita dengan dokumentasi penting sebaiknya mendukung:

```text
figure
figcaption
```

Caption digunakan untuk:

- konteks
- nama kegiatan
- lokasi
- waktu
- pihak terkait

---

# 55. Sitemap

Gunakan XML sitemap.

Astro:

```text
@astrojs/sitemap
```

Sitemap mencakup:

- homepage
- public pages
- published news
- published articles
- category pages yang indexable
- author pages jika sudah dibuat dan bernilai

---

# 56. Sitemap Exclusions

Jangan masukkan:

```text
draft
scheduled future content
404
preview
admin
internal tools
noindex pages
staging routes
```

---

# 57. Sitemap Location

Production:

```text
/sitemap-index.xml
```

atau output resmi yang dihasilkan integration Astro.

Tambahkan sitemap reference di `robots.txt`.

---

# 58. robots.txt

Production concept:

```txt
User-agent: *
Allow: /

Sitemap: https://domain.example/sitemap-index.xml
```

Admin future dapat dibatasi crawling:

```txt
Disallow: /admin/
```

Tetapi halaman sensitif tetap harus diamankan dengan authentication dan `noindex` bila relevan.

`robots.txt` bukan mekanisme keamanan.

---

# 59. Noindex Strategy

Gunakan:

```html
<meta name="robots" content="noindex, nofollow" />
```

untuk halaman yang benar-benar tidak boleh ter-index jika halaman tetap dapat diakses crawler.

Examples:

```text
preview
staging
internal result pages
temporary pages
```

---

# 60. Staging SEO

Staging harus:

```text
noindex
```

dan idealnya:

```text
authentication protected
```

Jangan hanya mengandalkan `robots.txt`.

Staging tidak boleh memiliki canonical yang mengacaukan production.

---

# 61. Draft Content

Draft:

```text
draft: true
```

harus:

- tidak dibuat sebagai public route
- tidak muncul listing
- tidak masuk sitemap
- tidak masuk RSS
- tidak muncul related content

---

# 62. Scheduled Content

Jika:

```text
publishedAt > current production time
```

content tidak ditampilkan sebelum waktu publish.

Timezone:

```text
Asia/Makassar
```

---

# 63. Pagination SEO

Jika pagination dibutuhkan:

```text
/berita/page/2
/artikel/page/2
```

Setiap page:

- memiliki unique URL
- self canonical
- crawlable
- berisi real content

Jangan canonical semua pagination ke halaman pertama.

---

# 64. Category Pages

Category page hanya dibuat/index jika:

- memiliki cukup content
- memiliki purpose jelas
- bukan thin page

Example:

```text
/artikel/kategori/dakwah
```

atau sesuai routing final.

---

# 65. Tag Pages

Tag pages lebih ketat.

Jangan otomatis membuat ratusan tag page.

Tag hanya indexable jika:

- digunakan konsisten
- memiliki cukup artikel
- benar-benar membantu navigasi
- tidak menghasilkan duplicate/thin taxonomy

Default MVP:

```text
tag route belum wajib
```

---

# 66. Search Result Pages

Jika search ditambahkan:

```text
/search?q=...
```

default recommended:

```text
noindex
```

karena search result internal dapat menghasilkan banyak URL tipis/duplikatif.

---

# 67. 404 SEO

404 harus:

- return HTTP 404
- tidak redirect ke homepage
- memiliki navigation
- memiliki CTA menuju content

UI:

```text
Halaman tidak ditemukan
[Kembali ke Beranda]
[Lihat Artikel]
```

---

# 68. Redirects

Gunakan:

```text
301
```

untuk perubahan URL permanen.

Use cases:

- slug berubah
- route berubah
- domain migration
- duplicate URL normalization

---

# 69. Performance SEO

SEO technical target:

```text
Performance ≥ 90
SEO ≥ 95
```

Target tersebut adalah project quality target, bukan jaminan ranking.

---

# 70. Core Web Vitals

Prioritas:

```text
LCP
INP
CLS
```

Optimization:

- SSG
- minimal JS
- optimized images
- correct dimensions
- efficient fonts
- CDN
- minimal third-party scripts

---

# 71. JavaScript

Content utama harus tersedia di HTML hasil render.

Jangan membuat artikel membutuhkan client-side JavaScript untuk dibaca.

Astro default:

```text
static HTML first
```

---

# 72. Mobile SEO

Website menggunakan:

```text
responsive design
```

Bukan URL terpisah seperti:

```text
m.example.com
```

Content mobile dan desktop harus sama secara substantif.

---

# 73. Font Performance

Recommended:

- limited font families
- limited weights
- self-host where useful
- preload only critical font
- use `font-display: swap`

Jangan preload semua font.

---

# 74. RSS

Ketika berita/artikel sudah aktif, recommended membuat feed:

```text
/rss.xml
```

atau feed terpisah jika dibutuhkan.

Potential:

```text
/news.xml
/articles.xml
```

Pada MVP satu feed utama cukup.

---

# 75. Google Search Console

Setelah production:

1. Verify domain.
2. Submit sitemap.
3. Inspect homepage.
4. Inspect article/news templates.
5. Monitor indexing.
6. Monitor Core Web Vitals.
7. Monitor structured data enhancement.
8. Review crawl/index errors.

---

# 76. Analytics

Analytics harus membantu memahami:

- organic visitors
- landing page
- article traffic
- news traffic
- traffic source
- engagement
- device

Jangan memasang analytics yang membuat performa turun signifikan.

---

# 77. Google News Consideration

News content sebaiknya memiliki:

- clear publication date
- author/byline
- publisher identity
- unique URL
- original content
- accessible article body
- clear headline
- relevant imagery

Structured data:

```text
NewsArticle
```

membantu search engine memahami content type.

Website tidak boleh menganggap penggunaan schema otomatis menjamin placement di Google News atau Top Stories.

---

# 78. E-E-A-T Supporting Signals

Website harus memperkuat trust melalui:

- organisasi yang jelas
- halaman Tentang
- kontak resmi
- author/byline
- tanggal publikasi
- date modified bila relevan
- referensi sumber jika dibutuhkan
- dokumentasi asli
- transparansi editorial

Tidak perlu menulis istilah "E-E-A-T" di UI.

---

# 79. Local SEO Signals

Karena organisasi berbasis Kabupaten Bone, relevant content dapat menyebut lokasi secara natural.

Examples:

```text
Kabupaten Bone
Bone, Sulawesi Selatan
```

Gunakan hanya ketika memang relevan terhadap halaman.

Jangan memasukkan "Bone" di semua paragraf secara paksa.

---

# 80. Organization Identity Consistency

Nama organisasi harus konsisten:

Primary:

```text
Himpunan Dai Muda Indonesia Kabupaten Bone
```

Short:

```text
HDMI Kabupaten Bone
```

Optional:

```text
HDMI Bone
```

Gunakan short name secara konsisten.

---

# 81. Contact Identity

Informasi resmi yang sudah tersedia:

```text
Instagram:
@hdmi.bone

Website:
daimuda.org

Email:
himpunandaimudaindonesiabone@gmail.com
```

Jika website project menggunakan domain berbeda dari `daimuda.org`, relasi keduanya perlu didefinisikan sebelum production agar tidak menciptakan identitas domain yang membingungkan.

---

# 82. Content Quality Rule

Jangan publish halaman hanya untuk menargetkan keyword.

Setiap halaman harus memberikan:

```text
real information
+
clear purpose
+
original value
```

---

# 83. News Editorial SEO Checklist

Sebelum berita publish:

```text
[ ] Judul jelas
[ ] Slug deskriptif
[ ] Excerpt tersedia
[ ] Featured image tersedia
[ ] Alt image benar
[ ] Tanggal publish tersedia
[ ] Author/byline tersedia
[ ] Lokasi disebut jika relevan
[ ] Nama kegiatan jelas
[ ] Internal link jika relevan
[ ] SEO title dicek
[ ] Meta description dicek
[ ] OG image dicek
[ ] NewsArticle schema valid
[ ] Tidak draft
```

---

# 84. Article Editorial SEO Checklist

Sebelum artikel publish:

```text
[ ] Search intent jelas
[ ] Topik utama jelas
[ ] Judul natural
[ ] Slug bersih
[ ] Excerpt
[ ] H1 hanya satu
[ ] H2/H3 terstruktur
[ ] Intro menjawab konteks
[ ] Article body cukup substantif
[ ] Internal links relevan
[ ] Sources bila diperlukan
[ ] Author
[ ] Published date
[ ] Featured image
[ ] Image alt
[ ] SEO title
[ ] Meta description
[ ] OG image
[ ] Article schema valid
```

---

# 85. Content Structure — News

Recommended:

```text
Headline
Lead
Context
Main event
Key statements / information
Closing
Related information
```

Jangan memanjangkan berita hanya untuk mengejar word count.

---

# 86. Content Structure — Article

Recommended:

```text
Title
Intro
Main question/context
H2
Content
H2
Content
H2
Content
Conclusion / reflection
Related articles
```

Word count bukan KPI utama.

Completeness dan relevance lebih penting.

---

# 87. Featured Snippet Readiness

Jika artikel menjawab pertanyaan:

gunakan jawaban yang:

- jelas
- langsung
- terstruktur
- tidak bertele-tele

Possible formats:

```text
short paragraph
numbered steps
bullets
table
```

Gunakan hanya jika sesuai content.

---

# 88. Tables

Table digunakan untuk data yang benar-benar tabular.

Harus:

- semantic
- responsive
- memiliki header
- mudah dibaca mobile

Jangan mengubah semua informasi menjadi table untuk SEO.

---

# 89. Duplicate Content

Hindari:

- content sama di berita dan artikel
- multiple URL untuk artikel sama
- copied content tanpa value
- taxonomy pages tipis
- parameter URL crawlable tanpa alasan

Canonical membantu duplicate handling, tetapi struktur URL yang bersih tetap prioritas.

---

# 90. Content Republishing

Jika artikel diperbarui:

- pertahankan URL
- update content
- update `dateModified`
- jangan ubah `datePublished` seolah artikel baru kecuali memang publication baru

---

# 91. Content Deletion

Jika content:

## Tidak relevan dan tidak ada replacement

Return:

```text
410
```

dapat dipertimbangkan.

## Memiliki replacement relevan

Gunakan:

```text
301
```

ke replacement.

Jangan redirect semua deleted content ke homepage.

---

# 92. SEO Component Architecture

Recommended:

```text
src/components/SEO.astro
```

Input:

```text
title
description
canonical
image
type
noindex
articleMetadata
```

Responsibility:

- title
- description
- canonical
- robots
- Open Graph
- Twitter/X metadata

---

# 93. Structured Data Components

Recommended:

```text
src/components/seo/
├── OrganizationSchema.astro
├── ArticleSchema.astro
├── NewsArticleSchema.astro
└── BreadcrumbSchema.astro
```

atau helper TypeScript jika lebih sederhana.

Jangan membuat abstraction yang terlalu rumit.

---

# 94. SEO Utilities

Recommended:

```text
src/utils/seo.ts
```

Possible functions:

```text
buildCanonicalUrl()
buildPageTitle()
getSeoDescription()
buildOpenGraphImageUrl()
buildArticleSchema()
```

---

# 95. Content Schema SEO Fields

Recommended frontmatter:

```yaml
title:
excerpt:
cover:
author:
category:
tags:
publishedAt:
updatedAt:
featured:
draft:
seoTitle:
seoDescription:
```

Canonical override hanya ditambahkan jika ada kasus khusus.

---

# 96. Example Article Frontmatter

```yaml
---
title: "Peran Dai Muda di Era Digital"
excerpt: "Membahas peran dai muda dalam menjawab perubahan pola komunikasi masyarakat di era digital."
author: "HDMI Kabupaten Bone"
category: "Dakwah"
publishedAt: 2026-08-30
draft: false
seoTitle: "Peran Dai Muda di Era Digital"
seoDescription: "Membahas peran strategis dai muda dalam menjawab perubahan pola komunikasi dan tantangan dakwah di era digital."
---
```

---

# 97. Example News Frontmatter

```yaml
---
title: "HDMI Bone Gelar Upgrading dan Rapat Kerja Pengurus"
excerpt: "HDMI Kabupaten Bone melaksanakan upgrading dan rapat kerja untuk memperkuat kapasitas pengurus dan menyusun program organisasi."
author: "HDMI Kabupaten Bone"
category: "Kegiatan"
publishedAt: 2026-08-25
draft: false
---
```

---

# 98. Sitemap Implementation — Astro

Recommended:

```text
@astrojs/sitemap
```

Concept:

```js
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://domain.example",
  integrations: [
    sitemap()
  ]
});
```

Filter route jika diperlukan untuk mencegah halaman tertentu masuk sitemap.

---

# 99. Production SEO Validation

Sebelum launch:

```text
[ ] Production domain correct
[ ] HTTPS works
[ ] www/non-www redirect correct
[ ] Canonical correct
[ ] No staging canonical
[ ] robots.txt accessible
[ ] Sitemap accessible
[ ] Sitemap contains public pages
[ ] Draft absent
[ ] 404 returns 404
[ ] Redirect rules tested
[ ] One H1 per page
[ ] Titles unique
[ ] Descriptions populated
[ ] OG metadata valid
[ ] Social image works
[ ] JSON-LD valid
[ ] Images optimized
[ ] Alt text checked
[ ] Mobile tested
[ ] Lighthouse checked
```

---

# 100. Search Console Validation

After launch:

```text
[ ] Property verified
[ ] Sitemap submitted
[ ] Homepage requested/index inspected
[ ] News template inspected
[ ] Article template inspected
[ ] Canonical selection monitored
[ ] Structured data errors monitored
[ ] Coverage/indexing monitored
[ ] Core Web Vitals monitored
```

---

# 101. Structured Data Testing

Test important pages using:

```text
Google Rich Results Test
```

Validate raw schema when needed using:

```text
Schema.org validator
```

Errors harus diselesaikan.

Warnings dievaluasi berdasarkan relevance.

---

# 102. SEO Monitoring Metrics

Primary:

```text
Indexed pages
Organic clicks
Organic impressions
CTR
Average position
Organic landing pages
Brand queries
Non-brand queries
Article organic traffic
```

Secondary:

```text
Core Web Vitals
404 count
Crawl issues
Structured data errors
```

---

# 103. Initial Keyword Clusters

Ini adalah starting framework, bukan final keyword research.

## Brand

```text
HDMI Bone
HDMI Kabupaten Bone
Himpunan Dai Muda Indonesia Bone
```

## Dakwah

```text
dai muda
dakwah pemuda
dakwah generasi muda
dakwah era digital
```

## Local

```text
dakwah Bone
kegiatan dakwah Bone
dai muda Bone
kegiatan Islam Bone
```

## Organization Activity

```text
pelatihan dai
kaderisasi dai
kegiatan sosial Islam
program dai muda
```

Keyword harus divalidasi berdasarkan content dan kebutuhan editorial.

---

# 104. Content Cluster Strategy

Future content dapat dibangun menjadi cluster.

Example:

```text
Dakwah Digital
│
├── Peran Dai Muda di Era Digital
├── Etika Berdakwah di Media Sosial
├── Strategi Menyampaikan Pesan Dakwah Digital
├── Tantangan Dakwah Generasi Z
└── Pemanfaatan Teknologi untuk Dakwah
```

Internal links menghubungkan artikel dalam cluster.

---

# 105. Content Pillars

Potential pillar:

```text
Dakwah
Kepemudaan
Pendidikan
Sosial
Organisasi
Digital Dakwah
```

Ini harus diselaraskan dengan program dan strategi konten HDMI.

---

# 106. Editorial Cadence

SEO tidak mensyaratkan publish setiap hari.

Prioritas:

```text
quality
consistency
relevance
```

Recommended operational principle:

```text
lebih baik sedikit artikel berkualitas
daripada banyak content tipis.
```

---

# 107. No Keyword Stuffing

Hindari copy seperti:

```text
HDMI Bone adalah organisasi dai muda Bone terbaik untuk dakwah Bone dan kegiatan dai muda Bone...
```

Gunakan bahasa natural.

Keyword muncul jika memang relevan.

---

# 108. No Hidden SEO Content

Dilarang:

- hidden keyword text
- text dengan warna sama background
- massive footer keyword list
- doorway pages
- generated thin pages

---

# 109. No Fake Freshness

Jangan mengubah tanggal artikel hanya agar terlihat baru.

`dateModified` digunakan bila memang ada pembaruan signifikan.

---

# 110. SEO Decision Priority

Jika terjadi konflik antara:

```text
SEO trick
vs
User experience
```

pilih:

```text
User experience + valid search-engine best practice
```

Jangan menerapkan optimasi hanya karena dianggap "SEO" tanpa manfaat nyata.

---

# 111. MVP SEO Scope

MVP wajib memiliki:

```text
Unique title
Meta description
Canonical
Open Graph
Twitter/X card
Organization schema
Article schema
NewsArticle schema
Breadcrumb schema
Sitemap
robots.txt
SEO-friendly URL
Image alt
Image optimization
Semantic headings
404
Redirect support
Mobile responsiveness
Performance optimization
```

---

# 112. Future SEO Scope

Future:

```text
Author pages
Category landing pages
RSS expansion
Google News optimization
Editorial content clusters
Advanced analytics
Content performance dashboard
Automated OG image generation
Search
Multilingual SEO if needed
```

---

# 113. SEO Definition of Done

SEO implementation dianggap siap jika:

1. Semua public route memiliki metadata.
2. Canonical valid.
3. Sitemap hanya berisi indexable pages.
4. robots.txt valid.
5. Draft tidak dapat ditemukan crawler.
6. Structured data sesuai content type.
7. News menggunakan `NewsArticle`.
8. Articles menggunakan `Article`.
9. Organization identity konsisten.
10. Social share preview berfungsi.
11. Search Console dapat menerima sitemap.
12. Tidak ada duplicate production URL signifikan.
13. Mobile dan performance target terpenuhi.
14. Content dapat dibaca tanpa client JavaScript.
15. SEO dapat dikelola melalui content metadata tanpa mengedit layout setiap kali publish.

---

# 114. Relationship with Other Documents

```text
PRD.md
│
├── Product goals
│
▼
ARCHITECTURE.md
│
├── Technical structure
│
▼
DESIGN_SYSTEM.md
│
├── Visual language
│
▼
UI_SPEC.md
│
├── Page hierarchy
│
▼
SEO_SPEC.md
│
├── Search visibility
│
▼
CONTENT.md
   Editorial content
```

---

# 115. Final SEO Direction

SEO HDMI Kabupaten Bone menggunakan prinsip:

```text
Technical foundation first
+
Strong organization identity
+
Useful local relevance
+
Original news
+
Evergreen articles
+
Clear authorship
+
Strong internal linking
+
Fast static delivery
```

Tujuan akhirnya bukan hanya mendapatkan ranking.

Tujuan akhirnya adalah membangun:

```text
official and discoverable digital presence
```

serta secara bertahap menjadikan website HDMI sebagai:

```text
rujukan digital
untuk aktivitas organisasi,
dakwah,
kepemudaan,
dan publikasi HDMI Kabupaten Bone.
```
