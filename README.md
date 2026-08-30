# Website HDMI Kabupaten Bone

Website resmi Himpunan Dai Muda Indonesia Kabupaten Bone.

Project ini dibangun sebagai MVP website profil organisasi, publikasi berita, artikel, galeri, dan kontak. Struktur awal memakai data dummy serta materi visual yang sudah diberikan, sehingga konten real bisa diganti bertahap tanpa mengubah fondasi website.

## Domain Utama

```text
https://daimudabone.id
```

Domain ini sudah dipakai sebagai canonical URL di konfigurasi Astro dan metadata SEO.

## Teknologi

- Astro
- TypeScript
- Tailwind CSS
- Astro Content Collections
- Markdown untuk berita dan artikel

## Menjalankan Project

Install dependency:

```bash
npm install
```

Jalankan server lokal:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Cek TypeScript dan Astro:

```bash
npm run check
```

## Struktur Folder Utama

```text
public/
  images/
    logo-hdmi-bone.png
    content/

src/
  components/
    article/
    common/
    layout/
    news/
  config/
    site.ts
  content/
    artikel/
    berita/
    config.ts
  layouts/
    BaseLayout.astro
  pages/
    artikel/
    berita/
    index.astro
    tentang.astro
    program.astro
    galeri.astro
    kontak.astro
    404.astro
  styles/
    global.css
  utils/

docs/
  PRD.md
  ARCHITECTURE.md
  DESIGN_SYSTEM_HDMI.md
  UI_SPEC.md
  SEO_SPEC.md
  CONTENT.md

TODO.md
```

## Route Website

- `/`
- `/tentang`
- `/program`
- `/berita`
- `/berita/[slug]`
- `/artikel`
- `/artikel/[slug]`
- `/galeri`
- `/kontak`
- `/sitemap-index.xml`
- `/404.html`

## Mengubah Data Organisasi

Data global organisasi berada di:

```text
src/config/site.ts
```

Gunakan file ini untuk mengubah nama organisasi, domain, email, Instagram, logo, dan metadata dasar.

## Menambah Berita

Tambahkan file Markdown baru di:

```text
src/content/berita/
```

Contoh frontmatter:

```yaml
---
title: "Judul Berita"
excerpt: "Ringkasan singkat berita."
cover: "/images/logo-hdmi-bone.png"
coverAlt: "Deskripsi gambar"
author: "Tim Publikasi HDMI Bone"
category: "Kegiatan"
tags: ["kaderisasi", "organisasi"]
publishedAt: 2026-08-30
featured: false
draft: false
seoDescription: "Deskripsi SEO singkat."
---
```

Isi berita ditulis di bawah frontmatter.

## Menambah Artikel

Tambahkan file Markdown baru di:

```text
src/content/artikel/
```

Contoh frontmatter:

```yaml
---
title: "Judul Artikel"
excerpt: "Ringkasan singkat artikel."
cover: "/images/logo-hdmi-bone.png"
coverAlt: "Deskripsi gambar"
author: "HDMI Kabupaten Bone"
category: "Dakwah"
tags: ["dakwah", "pembinaan"]
publishedAt: 2026-08-30
featured: false
draft: false
seoDescription: "Deskripsi SEO singkat."
---
```

## Aturan Konten

- Gunakan `draft: true` untuk konten yang belum siap tampil.
- Konten dengan tanggal `publishedAt` di masa depan tidak ditampilkan.
- Jangan publish angka statistik, nama pengurus, jabatan, lokasi, atau kontak sebelum diverifikasi.
- Gunakan gambar asli HDMI jika tersedia.
- Setiap gambar penting wajib memiliki `coverAlt` atau alt text yang jelas.

## SEO

Website sudah memiliki fondasi:

- Unique page title
- Meta description
- Canonical URL
- Open Graph metadata
- Twitter/X metadata
- Organization schema
- Article schema
- NewsArticle schema
- Sitemap manual di `/sitemap-index.xml`
- `robots.txt`

## Status Saat Ini

Versi awal sudah memiliki struktur MVP dengan data dummy:

- Homepage
- Tentang
- Program
- Berita listing dan detail
- Artikel listing dan detail
- Galeri
- Kontak
- 404
- Sitemap

Daftar pekerjaan berikutnya ada di:

```text
TODO.md
```
