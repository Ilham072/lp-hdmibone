# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Website Himpunan Dai Muda Indonesia Kabupaten Bone

**Document Version:** 1.0  
**Status:** Draft / MVP  
**Organization:** Himpunan Dai Muda Indonesia Kabupaten Bone  
**Project Type:** Organization Profile Website & Content Publishing Platform  
**Initial Scope:** Landing Page / Organization Profile  
**Future Scope:** News, Articles, Publications, CMS, and Digital Da'wah Platform

---

# 1. Product Overview

## 1.1 Background

Himpunan Dai Muda Indonesia Kabupaten Bone membutuhkan media digital resmi yang dapat digunakan untuk memperkenalkan organisasi kepada masyarakat, mempublikasikan kegiatan, menyampaikan informasi organisasi, serta menjadi media dakwah dan publikasi digital.

Pada tahap awal, website akan dibangun sebagai website profil organisasi dengan landing page yang informatif, profesional, ringan, dan mudah diakses melalui perangkat desktop maupun mobile.

Website sejak awal harus memiliki fondasi teknis dan struktur informasi yang memungkinkan pengembangan lebih lanjut menjadi portal publikasi yang mendukung berita, artikel, tulisan dakwah, dokumentasi kegiatan, dan sistem pengelolaan konten.

Website tidak hanya berfungsi sebagai profil organisasi, tetapi dalam jangka panjang diharapkan menjadi salah satu pusat informasi dan media digital Himpunan Dai Muda Indonesia Kabupaten Bone.

---

# 2. Product Vision

Membangun website resmi HDMI Kabupaten Bone sebagai pusat informasi, dokumentasi kegiatan, publikasi dakwah, dan media komunikasi organisasi yang profesional, modern, mudah diakses, serta memiliki visibilitas yang baik di mesin pencari.

Website diharapkan berkembang dari:

```text
Organization Profile Website
```

menjadi:

```text
Digital Publication & Da'wah Platform
```

---

# 3. Product Goals

Tujuan utama website adalah:

1. Membangun identitas digital resmi HDMI Kabupaten Bone.
2. Memperkenalkan profil organisasi kepada masyarakat.
3. Menampilkan visi, misi, program, dan aktivitas HDMI.
4. Menjadi pusat dokumentasi kegiatan organisasi.
5. Menampilkan berita dan informasi terbaru.
6. Menjadi media publikasi artikel dan tulisan dakwah.
7. Meningkatkan kredibilitas organisasi.
8. Mempermudah masyarakat mengetahui aktivitas HDMI.
9. Membuka peluang kolaborasi dengan organisasi, instansi, komunitas, dan masyarakat.
10. Membangun fondasi SEO untuk meningkatkan jangkauan konten HDMI melalui mesin pencari.

---

# 4. Target Users

## 4.1 Masyarakat Umum

Pengunjung yang ingin mengetahui HDMI, kegiatan organisasi, agenda, berita, atau membaca artikel.

### Kebutuhan

- Memahami HDMI dengan cepat.
- Mengetahui kegiatan terbaru.
- Membaca berita dan artikel.
- Menemukan kontak organisasi.
- Mengetahui cara berkolaborasi atau berkomunikasi dengan HDMI.

---

## 4.2 Anggota dan Pengurus HDMI

Pengurus dan anggota yang membutuhkan media resmi untuk melihat atau membagikan informasi organisasi.

### Kebutuhan

- Media publikasi resmi.
- Dokumentasi kegiatan.
- Informasi program organisasi.
- Artikel dan berita yang dapat dibagikan melalui media sosial.

---

## 4.3 Calon Anggota

Generasi muda yang tertarik terhadap kegiatan dakwah atau ingin mengetahui lebih jauh mengenai HDMI.

### Kebutuhan

- Memahami organisasi.
- Melihat aktivitas HDMI.
- Mengetahui program.
- Mengetahui cara bergabung atau menghubungi organisasi.

---

## 4.4 Instansi / Mitra

Pemerintah, organisasi masyarakat, lembaga pendidikan, komunitas, masjid, perusahaan, dan pihak lainnya yang berpotensi melakukan kolaborasi.

### Kebutuhan

- Melihat kredibilitas organisasi.
- Melihat kegiatan dan program.
- Mengetahui struktur organisasi.
- Menemukan informasi kontak resmi.

---

## 4.5 Pembaca Artikel

Pengunjung yang menemukan website melalui Google atau media sosial.

### Kebutuhan

- Membaca artikel dengan nyaman.
- Menemukan artikel terkait.
- Membagikan artikel.
- Mengetahui siapa penulis artikel.
- Menjelajahi kategori tulisan.

---

# 5. Scope Development

Pengembangan website dibagi menjadi beberapa tahap.

---

# 6. Phase 1 — MVP Website

Phase pertama berfokus pada pembangunan website profil HDMI Kabupaten Bone.

## 6.1 Homepage

Homepage menjadi pusat informasi utama website.

Homepage minimal memiliki section:

### Navbar

Menu utama:

- Beranda
- Tentang
- Program
- Berita
- Artikel
- Galeri
- Kontak

Pada MVP, menu Berita dan Artikel dapat menggunakan konten statis atau content collection jika sistem publikasi belum terhubung ke CMS.

Navbar harus memiliki:

- Logo HDMI
- Navigation menu
- Mobile menu
- CTA jika diperlukan

---

## 6.2 Hero Section

Hero menjadi area pertama yang dilihat pengunjung.

Konten:

- Headline utama
- Deskripsi singkat HDMI
- CTA utama
- CTA sekunder
- Visual organisasi / dokumentasi kegiatan

Contoh CTA:

```text
Kenali HDMI
Lihat Kegiatan
```

---

## 6.3 Tentang HDMI

Section yang menjelaskan secara singkat:

- Apa itu HDMI
- Peran HDMI
- Tujuan organisasi
- Identitas organisasi

Pengunjung harus dapat memahami HDMI dalam waktu singkat tanpa membaca halaman panjang.

---

## 6.4 Visi dan Misi

Menampilkan:

- Visi organisasi
- Misi organisasi

Tampilan dibuat ringkas dan mudah dibaca.

---

## 6.5 Program / Bidang Gerakan

Menampilkan program atau bidang utama HDMI.

Contoh:

- Dakwah
- Kaderisasi
- Pendidikan
- Sosial
- Digital Dakwah
- Kolaborasi

Setiap program dapat memiliki:

- Nama
- Ikon
- Deskripsi
- Link detail jika tersedia

---

## 6.6 Kegiatan Terbaru

Homepage menampilkan beberapa kegiatan terbaru.

Konten:

- Thumbnail
- Nama kegiatan
- Tanggal
- Ringkasan
- Link detail

Pada MVP data dapat berasal dari content file.

Pada pengembangan selanjutnya data berasal dari CMS.

---

# 7. News Module

Website harus disiapkan untuk mendukung berita organisasi.

## 7.1 News Listing

Route:

```text
/berita
```

Menampilkan seluruh berita HDMI.

Informasi:

- Thumbnail
- Judul
- Tanggal
- Kategori
- Ringkasan
- Link detail

---

## 7.2 News Detail

Route:

```text
/berita/[slug]
```

Struktur halaman:

- Judul
- Featured image
- Tanggal publikasi
- Penulis
- Isi berita
- Dokumentasi tambahan
- Share
- Related news

---

## 7.3 News Category

Contoh kategori:

- Kegiatan
- Organisasi
- Dakwah
- Sosial
- Pendidikan
- Kolaborasi
- Pengumuman

---

# 8. Article Module

Artikel harus dipisahkan dari berita.

Berita berisi informasi mengenai aktivitas organisasi.

Artikel berisi tulisan, opini, kajian, edukasi, atau konten dakwah.

---

## 8.1 Article Listing

Route:

```text
/artikel
```

Menampilkan:

- Artikel terbaru
- Artikel pilihan
- Kategori
- Pencarian jika dibutuhkan

---

## 8.2 Article Detail

Route:

```text
/artikel/[slug]
```

Konten:

- Judul
- Cover
- Author
- Tanggal
- Reading time
- Article content
- Tags
- Share
- Related articles

---

# 9. Gallery

Route:

```text
/galeri
```

Menampilkan dokumentasi kegiatan HDMI.

Galeri dapat dikelompokkan berdasarkan:

- Event
- Tahun
- Program

Pada MVP dapat menggunakan kumpulan foto statis.

Pada pengembangan berikutnya dapat terintegrasi dengan CMS.

---

# 10. Organization Profile Page

Route:

```text
/tentang
```

Halaman dapat berisi:

- Sejarah HDMI
- Profil organisasi
- Visi
- Misi
- Nilai organisasi
- Struktur organisasi
- Pengurus
- Program kerja

---

# 11. Contact

Route:

```text
/kontak
```

Menampilkan:

- Instagram
- Email
- Website
- WhatsApp jika digunakan
- Lokasi sekretariat jika diperlukan
- Contact form pada pengembangan selanjutnya

Informasi awal:

```text
Instagram:
@hdmi.bone

Website:
daimuda.org

Email:
himpunandaimudaindonesiabone@gmail.com
```

---

# 12. Footer

Footer minimal berisi:

- Logo HDMI
- Deskripsi singkat
- Quick links
- Social media
- Contact
- Copyright

---

# 13. Phase 2 — Content Platform

Setelah MVP stabil, website dikembangkan menjadi platform publikasi.

Fitur:

- News publishing
- Article publishing
- Categories
- Tags
- Authors
- Search
- Featured articles
- Related contents
- Pagination
- Social sharing
- RSS feed
- Sitemap otomatis

---

# 14. Phase 3 — CMS

Pengurus dapat mengelola website tanpa mengubah source code.

## CMS Features

### Authentication

- Login admin
- Role management

### Article Management

Admin dapat:

- Membuat artikel
- Mengedit artikel
- Menghapus artikel
- Menyimpan draft
- Publish
- Schedule publication

### News Management

Admin dapat:

- Membuat berita
- Upload cover
- Upload gambar
- Mengatur kategori
- Publish

### Media Library

Admin dapat:

- Upload foto
- Menghapus foto
- Memilih featured image
- Mengelola media

---

# 15. Content Status

Konten harus mendukung status:

```text
draft
published
scheduled
```

---

# 16. Content Model

## Post

```text
id
title
slug
excerpt
content
featured_image
content_type
category
tags
author
status
published_at
created_at
updated_at
seo_title
seo_description
```

---

# 17. Author Model

```text
id
name
slug
photo
bio
social_media
```

Author digunakan untuk artikel maupun berita.

---

# 18. Category Model

```text
id
name
slug
description
```

---

# 19. Tag Model

```text
id
name
slug
```

---

# 20. SEO Requirements

Website harus dibangun dengan pendekatan SEO-first.

Minimal mendukung:

- Semantic HTML
- Unique page title
- Meta description
- Canonical URL
- Open Graph
- Twitter/X metadata
- XML sitemap
- robots.txt
- Structured data
- Breadcrumb
- Semantic heading
- SEO-friendly slug
- Image alt text

---

# 21. Structured Data

Homepage:

```text
Organization
WebSite
```

Artikel:

```text
Article
```

Berita:

```text
NewsArticle
```

Navigasi:

```text
BreadcrumbList
```

---

# 22. URL Structure

Struktur URL harus sederhana dan mudah dibaca.

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

Hindari URL seperti:

```text
/post?id=123
```

---

# 23. Search Engine Indexing

Halaman yang harus dapat di-index:

- Homepage
- Profile
- Program
- News
- Articles
- Categories
- Public author pages

Halaman admin tidak boleh di-index.

---

# 24. Social Media Optimization

Setiap berita dan artikel harus memiliki Open Graph metadata sehingga ketika dibagikan ke:

- WhatsApp
- Facebook
- X
- Telegram
- LinkedIn

akan tampil:

- Cover
- Judul
- Deskripsi
- URL

---

# 25. Performance Requirements

Target Google Lighthouse:

```text
Performance       ≥ 90
Accessibility     ≥ 90
Best Practices    ≥ 90
SEO               ≥ 95
```

---

# 26. Core Web Vitals

Website harus memperhatikan:

- LCP
- CLS
- INP

Optimasi dilakukan melalui:

- Image optimization
- Lazy loading
- Static generation
- Minimal JavaScript
- Efficient fonts

---

# 27. Responsive Design

Pendekatan:

```text
Mobile First
```

Website harus nyaman pada:

- Smartphone
- Tablet
- Laptop
- Desktop

Target minimum:

```text
320px mobile width
```

---

# 28. Accessibility

Minimal mendukung:

- Semantic HTML
- Alt image
- Keyboard navigation
- Visible focus state
- Accessible form label
- Sufficient contrast
- Proper heading hierarchy

---

# 29. Content Experience

Karena website akan memiliki artikel panjang, pengalaman membaca menjadi prioritas.

Halaman artikel harus memiliki:

- Typography nyaman
- Line height cukup
- Lebar konten tidak terlalu besar
- Heading hierarchy jelas
- Image caption
- Blockquote
- List
- Related article

---

# 30. Design Direction

Karakter desain website:

- Islami
- Modern
- Bersih
- Profesional
- Muda
- Elegan
- Editorial
- Tidak terlalu ramai

Website tidak harus menggunakan terlalu banyak ornamen Islami.

Identitas Islam dapat ditampilkan melalui:

- Typography
- Photography
- Content
- Geometry ringan
- Color system
- Visual storytelling

---

# 31. Brand Identity

Visual harus mengikuti identitas HDMI.

Warna utama:

```text
Primary Teal     #07B5A2
Primary Deep     #00A890
Orange Accent    #F0A123
Secondary Green  #1A8E45
```

Hal yang harus konsisten:

- Logo
- Warna
- Typography
- Icon
- Photography
- Spacing
- Button
- Card

Detail mengacu pada:

```text
DESIGN_SYSTEM.md
```

---

# 32. Recommended Technology

Frontend:

```text
Astro
```

Language:

```text
TypeScript
```

Styling:

```text
Tailwind CSS
```

Content pada MVP:

```text
Astro Content Collections
```

Format:

```text
Markdown / MDX
```

---

# 33. Initial Architecture

```text
Browser
   │
   ▼
Astro Website
   │
   ├── Landing Page
   ├── Organization Page
   ├── News
   ├── Articles
   └── Gallery
          │
          ▼
 Astro Content Collections
          │
       Markdown / MDX
```

---

# 34. Future Architecture

Ketika CMS dibutuhkan:

```text
User
 │
 ▼
Astro Frontend
 │
 ▼
Headless CMS
 │
 ├── Articles
 ├── News
 ├── Authors
 ├── Categories
 └── Media
```

Frontend tidak perlu dibangun ulang.

Yang berubah hanya sumber datanya.

---

# 35. Analytics

Website disiapkan agar nantinya dapat menggunakan web analytics.

Metrics yang perlu dipantau:

- Visitors
- Page views
- Article views
- Popular articles
- Traffic source
- Device
- Search traffic
- Engagement

---

# 36. CTA

Beberapa CTA utama:

```text
Kenali HDMI
Lihat Kegiatan
Baca Artikel
Ikuti Kegiatan Kami
Mari Berkolaborasi
```

---

# 37. Sitemap MVP

```text
Home
│
├── Tentang
│   ├── Profil
│   ├── Visi Misi
│   └── Pengurus
│
├── Program
│
├── Berita
│   └── Detail Berita
│
├── Artikel
│   └── Detail Artikel
│
├── Galeri
│
└── Kontak
```

---

# 38. Homepage Information Architecture

```text
Navbar

Hero

Tentang HDMI

Visi / Nilai

Program

Kegiatan Terbaru

Artikel Pilihan

Jejak Gerak HDMI

Galeri

CTA Kolaborasi

Footer
```

---

# 39. Non-Functional Requirements

Website harus:

- Cepat
- Stabil
- Aman
- Responsive
- SEO-friendly
- Mudah dirawat
- Mudah dikembangkan
- Tidak bergantung pada JavaScript berlebihan

---

# 40. MVP Definition

MVP dianggap selesai apabila:

- Homepage tersedia.
- Website responsive.
- Navigasi berjalan.
- Tentang HDMI tersedia.
- Program HDMI tersedia.
- Berita dapat ditampilkan.
- Detail berita dapat dibuka.
- Artikel dapat ditampilkan.
- Detail artikel dapat dibuka.
- Galeri tersedia.
- Kontak tersedia.
- Metadata SEO tersedia.
- Sitemap tersedia.
- Website dapat di-deploy.
- Lighthouse memiliki hasil yang baik.
- Konten dapat ditambahkan melalui Markdown/MDX.

CMS tidak menjadi blocker MVP.

---

# 41. Out of Scope MVP

Fitur berikut belum menjadi prioritas pada MVP:

- User registration
- Member dashboard
- Sistem keanggotaan
- Forum
- Komentar artikel
- Donation/payment
- Mobile application
- Newsletter automation
- Advanced CMS
- Multiple organization management

Fitur tersebut dapat dievaluasi pada fase selanjutnya.

---

# 42. Development Principle

## Content First

Website dibangun untuk mendukung penyampaian informasi.

## SEO First

Semua konten publik harus mudah ditemukan melalui mesin pencari.

## Mobile First

Pengalaman pengguna smartphone menjadi prioritas.

## Performance First

Website harus ringan dan cepat.

## Progressive Development

Jangan membangun fitur kompleks sebelum kebutuhan muncul.

---

# 43. Development Roadmap

## Phase 1 — Foundation

- Project setup
- Design system
- Homepage
- Responsive layout
- Content collection

## Phase 2 — Organization Content

- Tentang
- Program
- Pengurus
- Kontak
- Galeri

## Phase 3 — Publishing

- News
- Articles
- Categories
- Tags
- Author

## Phase 4 — SEO & Optimization

- Sitemap
- Structured data
- Metadata
- Open Graph
- Performance

## Phase 5 — CMS

CMS ditambahkan jika frekuensi publikasi meningkat dan terdapat beberapa editor.

---

# 44. Success Metrics

## Technical

- Lighthouse Performance ≥ 90
- Lighthouse SEO ≥ 95
- Responsive seluruh halaman
- Tidak terdapat broken link
- Halaman ter-index Google

## Content

- Informasi organisasi tersedia lengkap.
- Kegiatan dapat dipublikasikan.
- Artikel dapat dipublikasikan.
- Konten mudah dibagikan.

## Organization

Website digunakan sebagai media resmi HDMI Kabupaten Bone dan menjadi referensi ketika masyarakat atau mitra mencari informasi mengenai organisasi.

---

# 45. Long-Term Direction

Website HDMI Kabupaten Bone tidak hanya diarahkan menjadi website profil organisasi.

Dalam jangka panjang website dapat menjadi:

```text
Media Dakwah Digital HDMI
```

yang berisi:

- Berita organisasi
- Artikel
- Kajian
- Opini
- Materi dakwah
- Khutbah
- Video
- Agenda
- Dokumentasi
- Profil dai
- Publikasi kegiatan

Dengan demikian website dapat berkembang menjadi aset digital organisasi yang terus memiliki nilai meskipun kepengurusan berganti.

---

# 46. Project Documentation

Dokumentasi pengembangan:

```text
docs/
│
├── PRD.md
├── ARCHITECTURE.md
├── DESIGN_SYSTEM.md
├── UI_SPEC.md
├── SEO_SPEC.md
└── CONTENT.md
```

### PRD.md

Menentukan apa yang dibangun dan mengapa.

### ARCHITECTURE.md

Menentukan bagaimana sistem dibangun.

### DESIGN_SYSTEM.md

Menentukan bahasa visual website.

### UI_SPEC.md

Menentukan struktur halaman dan interaction.

### SEO_SPEC.md

Menentukan strategi dan implementasi SEO.

### CONTENT.md

Menentukan isi, struktur, dan kebutuhan konten website.
