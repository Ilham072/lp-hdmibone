# UI_SPEC.md

## Website Himpunan Dai Muda Indonesia Kabupaten Bone

**Document Version:** 1.0  
**Status:** Initial UI Specification  
**Project:** HDMI Kabupaten Bone Website  
**Design Basis:** `PRD.md`, `ARCHITECTURE.md`, `DESIGN_SYSTEM.md`  
**Primary Stack:** Astro + TypeScript + Tailwind CSS  
**Design Direction:** Modern Islamic · Youthful · Editorial · Clean · Professional  
**Responsive Strategy:** Mobile First

---

# 1. Purpose

Dokumen ini menerjemahkan kebutuhan produk dan design system menjadi spesifikasi UI yang dapat digunakan langsung saat implementasi.

UI Spec menentukan:

- struktur setiap halaman
- hierarchy informasi
- komponen yang digunakan
- responsive behavior
- interaction state
- loading / empty / error state
- pola berita dan artikel
- aturan visual antar-section
- accessibility expectation
- batasan implementasi UI

Dokumen ini bukan pengganti `DESIGN_SYSTEM.md`.

`DESIGN_SYSTEM.md` menentukan bahasa visual.

`UI_SPEC.md` menentukan bagaimana bahasa visual tersebut diterapkan ke setiap halaman.

---

# 2. Global UI Principles

Semua halaman mengikuti prinsip:

```text
Content first
Mobile first
SEO friendly
Readable
Fast
Accessible
Consistent
Minimal JavaScript
```

Visual harus terasa:

```text
muda
modern
Islami
terpercaya
aktif
editorial
bersih
```

Jangan membuat website terasa seperti:

- dashboard admin
- portal berita lama yang padat
- template masjid generik
- landing page startup yang terlalu glossy

---

# 3. Global Color Roles

Gunakan semantic token dari `DESIGN_SYSTEM.md`.

```text
Primary Teal       #07B5A2
Primary Deep       #00A890
Secondary Green    #1A8E45
Accent Orange      #F0A123

Heading            #0F172A
Body               #475569
Muted              #64748B
Canvas             #FFFFFF
Canvas Soft        #F6FAF9
Border             #DCE8E5
Dark Surface       #073B35
```

Primary gradient:

```css
linear-gradient(135deg, #07B5A2 0%, #00A890 100%)
```

---

# 4. Global Layout

## 4.1 Container

Default maximum width:

```text
1200px
```

Wide maximum:

```text
1280px
```

Horizontal gutter:

```text
Mobile    20px
Tablet    32px
Desktop   40px
```

---

# 5. Global Vertical Rhythm

Desktop section spacing:

```text
80px–112px
```

Mobile:

```text
56px–72px
```

Hero:

```text
Desktop 96px–128px
Mobile 64px–80px
```

Jangan membuat section terlalu rapat.

Whitespace adalah bagian utama identitas visual.

---

# 6. Global Page Shell

Semua public page menggunakan:

```text
Navbar
Main
Footer
```

Optional:

```text
Breadcrumb
CTA band
```

Struktur:

```html
<header>
  <nav />
</header>

<main>
  ...
</main>

<footer />
```

---

# 7. Navbar

## Desktop

Height:

```text
72px
```

Content:

```text
Logo
Navigation
CTA
```

Navigation:

```text
Beranda
Tentang
Program
Berita
Artikel
Galeri
Kontak
```

CTA opsional:

```text
Mari Berkolaborasi
```

---

# 8. Navbar Behavior

Default:

```text
background white
```

Sticky:

```text
position sticky
top 0
z-index high
```

Scrolled state:

```text
background rgba(255,255,255,.88)
backdrop blur
bottom border
```

Active route:

```text
text primary-deep
```

Optional active indicator:

```text
2px teal line
```

---

# 9. Mobile Navigation

Navbar mobile:

```text
Logo
Menu button
```

Height:

```text
64px
```

Menu opens as:

```text
full-width dropdown / overlay
```

Navigation items:

```text
44px minimum touch height
```

CTA tampil di bagian bawah menu.

Mobile menu tidak boleh memiliki animasi berat.

---

# 10. Footer

Background:

```text
#073B35
```

Top accent:

```text
thin gradient line
```

Desktop structure:

```text
Brand column
Quick Links
Program / Content
Contact
Social Media
```

Bottom:

```text
Copyright
Legal / Privacy if needed
```

Mobile:

```text
single column
```

Text muted:

```text
#B8D3CD
```

Link hover:

```text
#F0A123
```

---

# 11. Global Section Header

Reusable component:

```text
SectionEyebrow
SectionTitle
SectionDescription
Optional Action
```

Example:

```text
BERITA TERBARU
Kabar terbaru dari HDMI Bone
Ikuti aktivitas, program, dan gerakan HDMI Kabupaten Bone.
[Lihat semua]
```

Desktop:

Action dapat berada di kanan.

Mobile:

Action pindah ke bawah heading.

---

# 12. Eyebrow

Style:

```text
12–14px
700
uppercase
letter-spacing 0.08em
```

Warna:

```text
#00A890
```

atau orange untuk section khusus.

---

# 13. Button Usage

Primary CTA:

```text
bg-primary
text-ink
pill
```

Secondary:

```text
white
border
dark text
pill
```

Accent:

```text
orange
dark text
pill
```

Dalam satu viewport, hindari lebih dari satu CTA accent yang kuat.

---

# 14. Page Routes

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

# 15. Homepage Overview

Homepage hierarchy:

```text
Navbar
Hero
About
Vision / Values
Programs
Latest News
Featured Articles
Impact / Statistics
Gallery
Collaboration CTA
Footer
```

Tidak semua section harus memiliki background berbeda.

Recommended rhythm:

```text
White
White
Soft Teal
White
White
Featured Gradient
Soft Neutral
White
Dark CTA
Dark Footer
```

---

# 16. Homepage — Hero

## Goal

Pengunjung harus memahami:

```text
siapa HDMI
apa yang HDMI lakukan
apa yang bisa dilakukan selanjutnya
```

dalam beberapa detik pertama.

---

# 17. Hero Structure

Desktop:

```text
┌─────────────────────┬─────────────────────┐
│ Eyebrow             │                     │
│ Headline            │     Photography     │
│ Supporting Text     │      / Visual       │
│ CTA CTA             │                     │
└─────────────────────┴─────────────────────┘
```

Grid:

```text
6 + 6
```

atau:

```text
5 + 7
```

---

# 18. Hero Content

Recommended:

```text
Eyebrow
HIMPUNAN DAI MUDA INDONESIA KABUPATEN BONE

Headline
Muda Berdakwah, Bergerak Membangun Peradaban

Description
2–3 baris maksimum.

CTA Primary
Kenali HDMI

CTA Secondary
Lihat Kegiatan
```

Copy final mengikuti `CONTENT.md`.

---

# 19. Hero Visual

Prioritas:

```text
foto kegiatan asli HDMI
```

Treatment:

```text
large editorial image
rounded 24–28px
```

Optional accent:

```text
subtle gradient shape
orange marker
low-opacity Islamic geometry
```

Gunakan maksimal satu sistem dekorasi dominan.

---

# 20. Hero Mobile

Urutan:

```text
Eyebrow
Headline
Description
CTA group
Image
```

Headline:

```text
36–42px
```

CTA:

```text
stack or wrap
full width only if needed
```

Image:

```text
4:3
```

---

# 21. About Section

Goal:

Memberikan pemahaman singkat tentang HDMI.

Structure:

```text
Image / visual
+
Eyebrow
Title
2–3 paragraphs / concise description
CTA
```

Desktop:

```text
5 + 7
```

Mobile:

```text
image
content
```

Background:

```text
white
```

---

# 22. Vision / Values Section

Gunakan:

```text
canvas-soft / surface-teal
```

Structure:

```text
Section title
Vision statement
3–4 values
```

Value item:

```text
Icon
Title
Short description
```

Jangan membuat card terlalu berat.

Value item boleh flat di atas background section.

---

# 23. Programs Section

Recommended desktop:

```text
3 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

Program card:

```text
Icon
Program name
Short description
Optional arrow/link
```

Hover:

```text
border teal
translateY(-2px)
```

---

# 24. Program Card Variants

Default:

```text
soft neutral surface
```

Icon:

```text
teal
```

Program sosial dapat menggunakan:

```text
green accent
```

Program/kegiatan prioritas dapat menggunakan:

```text
orange micro-accent
```

Jangan memberi setiap card warna berbeda.

---

# 25. Latest News Section

Desktop:

```text
Section Header

Featured / first news
+
2 secondary news
```

atau:

```text
3-column grid
```

Jika konten cukup banyak, gunakan layout editorial:

```text
1 large
2 small
```

daripada tiga card identik.

---

# 26. News Card

Structure:

```text
Image
Category
Date
Title
Excerpt
Read more
```

Image:

```text
16:10
```

Title:

```text
max visual 3 lines
```

Excerpt:

```text
max visual 2–3 lines
```

Metadata:

```text
14px muted
```

---

# 27. News Card Hover

Desktop:

```text
image scale 1.02
card translateY(-2px)
title → primary-deep
```

Duration:

```text
200ms
```

Mobile tidak bergantung pada hover untuk memahami interaksi.

---

# 28. Featured Articles Section

Section ini membedakan artikel dari berita.

Recommended:

```text
Featured article large
+
2 article summaries
```

Featured article:

```text
large image
category
headline
excerpt
author
reading time
CTA
```

Boleh menggunakan gradient background secara terkontrol.

---

# 29. Impact / Statistics Section

Content examples:

```text
Jumlah Dai
Kegiatan
Program
Kolaborasi
```

Data harus berasal dari content yang valid.

Layout:

```text
4 columns desktop
2 columns tablet
2 / 1 columns mobile
```

Number:

```text
large
teal
```

Orange hanya sebagai marker kecil.

---

# 30. Gallery Preview Section

Homepage gallery bukan full gallery.

Gunakan:

```text
editorial collage
```

Contoh desktop:

```text
large image
+
2 stacked images
+
1 medium image
```

Mobile:

```text
horizontal scroll
```

atau:

```text
2-column masonry-like grid
```

CTA:

```text
Lihat Galeri
```

---

# 31. Collaboration CTA

Ditempatkan sebelum footer.

Background:

```text
dark teal
```

atau primary gradient.

Structure:

```text
Headline
Short description
CTA
```

Text harus sangat ringkas.

Hindari banyak card/ornament.

---

# 32. About Page — `/tentang`

Page structure:

```text
Page Hero
Organization Overview
History
Vision & Mission
Values
Organization Structure
Leadership / Management
CTA
```

Jika data pengurus belum lengkap, section dapat disembunyikan.

---

# 33. About Page Hero

Layout:

```text
Eyebrow
Title
Short description
Optional photography
```

Tidak perlu hero sebesar homepage.

---

# 34. History Section

Gunakan prose + image.

Jika sejarah memiliki beberapa milestone:

gunakan timeline ringan.

Timeline tidak harus interaktif.

---

# 35. Vision & Mission

Vision:

```text
large quote-style panel
```

Mission:

```text
numbered list
```

Jangan tampilkan misi sebagai banyak card kecil jika hanya teks.

---

# 36. Organization Structure

Jika struktur cukup sederhana:

```text
cards
```

Jika kompleks:

```text
hierarchical list / organization chart
```

Pada mobile:

hindari chart horizontal yang membutuhkan zoom.

Gunakan stacked hierarchy.

---

# 37. Leadership Card

Content:

```text
Photo
Name
Position
Optional short bio
```

Image:

```text
4:5
```

Card:

```text
white
border
20px radius
```

---

# 38. Program Page — `/program`

Structure:

```text
Page Hero
Program intro
Program categories/cards
Featured activity
CTA
```

Program card dapat lebih besar dibanding homepage.

Content:

```text
Icon
Program name
Description
Scope / activity examples
Optional related news
```

---

# 39. News Listing — `/berita`

Structure:

```text
Page Header
Featured News
Category Filter
News Grid/List
Pagination
CTA / Footer
```

---

# 40. News Page Header

Content:

```text
Eyebrow
Berita
Description
```

Optional:

```text
Search
```

Search hanya ditampilkan jika fitur benar-benar tersedia.

---

# 41. News Featured Area

Desktop:

```text
large image left
content right
```

atau full-width editorial card.

Content:

```text
Category
Date
Headline
Excerpt
Read article
```

---

# 42. News Category Filter

Use:

```text
pill chips
```

Example:

```text
Semua
Kegiatan
Organisasi
Dakwah
Sosial
Pendidikan
Kolaborasi
```

Active:

```text
bg-primary
text-ink
```

Mobile:

```text
horizontal scroll
```

Jangan memaksa wrap panjang jika mengganggu layout.

---

# 43. News Grid

Desktop:

```text
3 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

Gap:

```text
24–32px
```

---

# 44. News Detail — `/berita/[slug]`

Structure:

```text
Breadcrumb
Article Header
Featured Image
Article Body
Inline Gallery if available
Share
Related News
CTA
```

---

# 45. News Detail Header

Width:

```text
max ~900px
```

Content:

```text
Category
H1
Excerpt
Author
Published date
Updated date if needed
```

H1 desktop:

```text
40–52px
```

Mobile:

```text
32–38px
```

---

# 46. Featured Image Detail

Width:

```text
up to content container / wide container
```

Ratio:

```text
16:9
```

Radius:

```text
20–24px
```

Caption jika ada:

```text
14px muted
```

---

# 47. Article Body

Main reading column:

```text
680–760px
```

Body:

```text
17–18px
line-height 1.75
```

Elements supported:

```text
p
h2
h3
h4
ul
ol
blockquote
figure
figcaption
table
a
strong
em
```

---

# 48. Article Body Spacing

Paragraph gap:

```text
20–24px
```

Heading:

```text
top margin 40–56px
bottom margin 16–20px
```

Image:

```text
32–40px vertical
```

---

# 49. Blockquote

Variant teal:

```text
border-left teal
background surface-teal
```

Variant orange:

```text
border-left orange
background surface-orange
```

Default gunakan teal.

---

# 50. Share Section

Supported:

```text
WhatsApp
Facebook
X
Telegram
Copy Link
```

Desktop:

```text
inline
```

Mobile:

```text
wrap
```

Jangan memasang SDK social media besar hanya untuk share URL.

---

# 51. Related News

Display:

```text
3 cards desktop
1 column mobile
```

Tidak menampilkan current article.

---

# 52. Article Listing — `/artikel`

Article page harus lebih editorial dan reading-focused daripada berita.

Structure:

```text
Page Header
Featured Article
Categories
Latest Articles
Pagination
```

Optional search future.

---

# 53. Featured Article Layout

Desktop:

```text
Image 7 columns
Content 5 columns
```

Content:

```text
Category
Title
Excerpt
Author
Reading time
CTA
```

Mobile:

```text
image
content
```

---

# 54. Article List

Recommended:

```text
horizontal article rows
```

untuk memberikan variasi dari news cards.

Desktop article row:

```text
thumbnail
content
metadata
```

Mobile:

```text
stacked
```

---

# 55. Article Detail — `/artikel/[slug]`

Structure:

```text
Breadcrumb
Article Header
Featured Image
Article Body
Author Box
Tags
Share
Related Articles
```

---

# 56. Article Header

Content:

```text
Category
H1
Excerpt
Author
Published date
Reading time
```

Optional:

```text
Updated date
```

---

# 57. Author Box

Structure:

```text
Avatar
Name
Short bio
Optional social
```

Background:

```text
canvas-soft
```

Radius:

```text
20px
```

---

# 58. Tags

Use compact pill.

```text
background soft-neutral
border
```

Jangan gunakan terlalu banyak warna.

---

# 59. Gallery Page — `/galeri`

Structure:

```text
Page Header
Optional Filter
Gallery Grid
Album / Lightbox if available
```

Filter:

```text
Semua
Kegiatan
Dakwah
Sosial
Pelatihan
Kolaborasi
```

sesuaikan data sebenarnya.

---

# 60. Gallery Grid

Desktop:

```text
3–4 columns
```

Tablet:

```text
2–3 columns
```

Mobile:

```text
2 columns
```

Image ratios dapat beragam secara editorial tetapi layout harus tetap stabil.

---

# 61. Gallery Item

Content:

```text
Image
Optional event title
Date
```

Hover:

```text
subtle overlay
```

Mobile:

tap membuka detail/lightbox jika fitur tersedia.

---

# 62. Contact Page — `/kontak`

Structure:

```text
Page Header
Contact Information
Social Media
Optional Contact Form
Optional Map / Location
```

Pada MVP tanpa form:

gunakan direct contact.

---

# 63. Contact Information

Cards / rows:

```text
Email
Instagram
Website
WhatsApp if used
Location if public
```

Icon:

```text
teal
```

Links harus clickable.

---

# 64. Contact Form Future

Fields:

```text
Nama
Email / WhatsApp
Subjek
Pesan
```

CTA:

```text
Kirim Pesan
```

States:

```text
default
focus
validation error
loading
success
```

---

# 65. Search UI Future

Jika search diimplementasikan:

Desktop:

```text
pill search input
```

Mobile:

```text
full width
```

Empty state:

```text
Tidak ada hasil ditemukan.
```

Hindari search jika jumlah konten belum cukup untuk membenarkan fitur.

---

# 66. Pagination

Desktop:

```text
Previous
1
2
3
...
Next
```

Mobile:

```text
Previous
current / total
Next
```

Touch target:

```text
44px minimum
```

---

# 67. Breadcrumb

Use on:

```text
News Detail
Article Detail
deep pages if added
```

Not mandatory on homepage.

Example:

```text
Beranda / Artikel / Judul Artikel
```

Current title boleh dipotong secara visual.

---

# 68. Content Empty State

Jika belum ada berita:

```text
Icon
Belum ada berita
Berita terbaru HDMI akan tampil di sini.
```

Tidak menampilkan blank section.

---

# 69. Content Loading

Karena MVP SSG, loading state hampir tidak diperlukan.

Untuk future search/filter client-side:

gunakan skeleton ringan.

---

# 70. Error State

## 404

Structure:

```text
404
Halaman tidak ditemukan
Short description
[Kembali ke Beranda]
[Lihat Artikel]
```

Visual tetap konsisten dengan brand.

---

# 71. Image Loading

Use:

```text
lazy loading
```

kecuali:

```text
hero image
critical LCP image
```

Hero image harus diprioritaskan.

---

# 72. Responsive Rules

## Mobile `< 640px`

- single column
- navigation collapses
- full readable width
- image before/after copy sesuai hierarchy
- card gap 16–20px
- horizontal chip scroll allowed
- no hover dependency

## Tablet `768px+`

- 2-column content where useful
- moderate spacing
- navigation may remain collapsed depending width

## Desktop `1024px+`

- full nav
- editorial multi-column layouts
- larger section spacing
- 3-column grids

---

# 73. Mobile Typography

Hero H1:

```text
36–42px
```

Page H1:

```text
32–38px
```

Section H2:

```text
28–32px
```

Body:

```text
16–18px
```

Jangan mengecilkan article body di bawah 16px.

---

# 74. Mobile CTA

CTA group:

```text
wrap
```

Untuk layar sangat kecil:

```text
primary full-width
secondary full-width
```

jika diperlukan.

Jangan memaksa dua tombol sempit dalam satu baris.

---

# 75. Accessibility Requirements

Semua halaman:

- satu `h1`
- heading order logis
- semantic landmarks
- image alt
- visible focus
- keyboard navigation
- WCAG AA color contrast
- 44px touch target
- meaningful link labels

Jangan gunakan:

```text
Klik di sini
Selengkapnya
```

tanpa konteks jika link dapat dibuat lebih deskriptif.

Contoh:

```text
Baca berita selengkapnya
```

---

# 76. Motion

Allowed:

```text
fade
translate 2–4px
image scale 1.02
accordion transition
mobile menu transition
```

Duration:

```text
150–250ms
```

Respect:

```css
prefers-reduced-motion
```

---

# 77. Component Inventory

Minimum reusable components:

```text
Container
Section
SectionHeader
Button
Badge
Breadcrumb

Navbar
MobileMenu
Footer

HeroSection
AboutSection
ProgramsSection
LatestNewsSection
FeaturedArticlesSection
StatisticsSection
GalleryPreview
CollaborationCTA

NewsCard
FeaturedNews
ArticleCard
FeaturedArticle
ProgramCard
LeadershipCard
AuthorCard

ShareButtons
Pagination
EmptyState
```

---

# 78. Component API Principle

Component props harus semantic.

Good:

```text
title
description
href
image
category
publishedAt
```

Avoid:

```text
blueText
marginTopLarge
leftBox
```

Visual variant menggunakan:

```text
variant
size
tone
```

---

# 79. UI State Standards

Interactive component minimal memiliki:

```text
default
hover
focus-visible
active
disabled
```

Form component:

```text
default
focus
error
disabled
success
```

---

# 80. Card Click Behavior

Jangan membuat seluruh card `<div>` clickable melalui JavaScript.

Gunakan semantic anchor.

Recommended:

```html
<article>
  <a href="...">
    ...
  </a>
</article>
```

Pastikan nested links tidak konflik.

---

# 81. Content Density

Homepage:

```text
low–medium density
```

News listing:

```text
medium density
```

Article detail:

```text
low density / high readability
```

Footer:

```text
medium density
```

Jangan memadatkan konten hanya agar semua terlihat dalam satu viewport.

---

# 82. Image Fallback

Jika berita/artikel tidak memiliki cover:

gunakan:

```text
default HDMI editorial placeholder
```

Jangan menggunakan broken image.

Placeholder harus brand-consistent dan tidak terlalu dekoratif.

---

# 83. Category Color Rules

Jangan membuat setiap kategori memiliki warna brand berbeda.

Default:

```text
teal badge
```

Optional semantic use:

```text
social / growth → green
event / highlight → orange
```

Tetap maksimal 2–3 tone dalam satu viewport.

---

# 84. Dark Section Rules

Pada dark teal:

```text
Heading white
Body #DCEBE8
Link white / accent
CTA orange or white
```

Jangan gunakan teal primary sebagai text kecil di atas dark teal jika contrast lemah.

---

# 85. Content CTA Rules

Homepage:

```text
Kenali HDMI
Lihat Kegiatan
Baca Artikel
Lihat Semua Berita
Lihat Galeri
Mari Berkolaborasi
```

Jangan menggunakan CTA generik berulang:

```text
Learn More
See More
Read More
```

tanpa konteks.

---

# 86. SEO-Aware UI Rules

H1 hanya satu per halaman.

Article/news title = H1.

Section titles:

```text
H2
```

Card titles:

```text
H3
```

Breadcrumb menggunakan semantic navigation.

Image alt harus menggambarkan isi gambar.

---

# 87. Homepage Mobile Priority

Urutan konten mobile tidak harus sama persis dengan desktop jika hierarchy lebih baik.

Priority:

```text
Identity
Activity
Program
Content
Credibility
Gallery
CTA
```

---

# 88. MVP UI Scope

MVP wajib:

```text
Responsive Navbar
Homepage
Tentang
Program
Berita Listing
Berita Detail
Artikel Listing
Artikel Detail
Galeri
Kontak
Footer
404
```

---

# 89. Out of Scope UI MVP

Belum wajib:

```text
Admin dashboard
Login
Member area
Comment section
Dark mode
Advanced search
Bookmark
Notification
Real-time chat
Donation/payment UI
Complex animation
Personalization
```

---

# 90. Implementation Rules

1. Gunakan semantic Tailwind tokens.
2. Hindari hard-coded hex di component.
3. Jangan menambahkan dependency UI tanpa alasan kuat.
4. Astro component menjadi default.
5. Client hydration hanya untuk interaksi nyata.
6. Reuse section patterns.
7. Jangan menyalin markup card berulang.
8. Mobile diuji sejak awal.
9. Article readability diuji terpisah.
10. Accessibility diuji sebelum release.

---

# 91. Page-Level Definition of Done

Setiap halaman dianggap selesai jika:

- responsive
- sesuai hierarchy
- semua route bekerja
- tidak overflow horizontal
- typography konsisten
- CTA jelas
- focus state terlihat
- image memiliki alt
- loading/fallback aman
- mobile navigation aman
- Lighthouse tidak terdampak buruk oleh UI
- konten tetap terbaca tanpa JavaScript client

---

# 92. Homepage Definition of Done

Homepage selesai jika:

- hero jelas
- identitas HDMI terlihat
- program tampil
- latest news tampil
- featured article tampil
- impact/statistics tampil jika data tersedia
- gallery preview tampil
- collaboration CTA tampil
- seluruh section responsive
- tidak terasa terlalu ramai

---

# 93. News Definition of Done

News system selesai jika:

- listing tersedia
- featured news tersedia bila ada
- card metadata jelas
- detail readable
- breadcrumb tersedia
- share tersedia
- related news tersedia
- draft tidak tampil

---

# 94. Article Definition of Done

Article system selesai jika:

- listing editorial
- featured article tersedia
- reading width nyaman
- typography long-form konsisten
- author metadata tampil
- reading time tampil bila tersedia
- share tersedia
- related articles tersedia
- tags dapat tampil
- draft tidak tampil

---

# 95. Visual QA Checklist

Sebelum release, cek:

```text
[ ] Teal menjadi brand dominan
[ ] Orange tidak berlebihan
[ ] Green tidak bersaing dengan primary
[ ] Semua body text readable
[ ] Teks di atas teal/orange memiliki contrast cukup
[ ] Spacing section konsisten
[ ] Radius card konsisten
[ ] Shadow tidak berlebihan
[ ] Foto asli HDMI menjadi prioritas
[ ] Ornamen Islami subtle
[ ] Mobile tidak overflow
[ ] CTA tidak terlalu banyak
[ ] Article typography nyaman
[ ] Footer dark teal konsisten
```

---

# 96. Recommended Initial Build Sequence

```text
1. Global Layout
2. Navbar
3. Footer
4. UI primitives
5. Homepage Hero
6. Homepage sections
7. News Card + Listing
8. News Detail
9. Article Card + Listing
10. Article Detail
11. About
12. Program
13. Gallery
14. Contact
15. 404
16. Responsive polish
17. Accessibility polish
18. Visual QA
```

---

# 97. Design Source of Truth

Urutan referensi ketika ada konflik:

```text
PRD.md
↓
DESIGN_SYSTEM.md
↓
UI_SPEC.md
↓
Implementation
```

Untuk keputusan visual spesifik:

```text
DESIGN_SYSTEM.md
```

menjadi sumber utama.

Untuk struktur halaman:

```text
UI_SPEC.md
```

menjadi sumber utama.

---

# 98. Final UI Direction

Website HDMI Kabupaten Bone harus terasa seperti:

```text
official organization website
+
modern editorial publication
+
digital da'wah platform
```

bukan sekadar landing page.

UI harus cukup sederhana untuk MVP, tetapi struktur visualnya harus tetap siap berkembang menjadi platform berita dan artikel yang jauh lebih besar tanpa redesign total.
