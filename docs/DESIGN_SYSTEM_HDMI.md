---
version: 1.0
name: HDMI-Bone-Design-System
description: Design system resmi untuk website Himpunan Dai Muda Indonesia Kabupaten Bone. Mengusung karakter modern, muda, bersih, profesional, Islami, dan editorial dengan teal sebagai warna utama, orange sebagai aksen, serta hijau sebagai warna pendukung.
---

# DESIGN_SYSTEM.md

## Himpunan Dai Muda Indonesia Kabupaten Bone

**Document Version:** 1.0  
**Status:** Initial Design System  
**Product:** HDMI Kabupaten Bone Website  
**Design Direction:** Modern Islamic · Youthful · Editorial · Clean · Professional  
**Implementation Target:** Astro + TypeScript + Tailwind CSS  

---

# 1. Design Philosophy

Website HDMI Kabupaten Bone harus terlihat sebagai media organisasi Islam yang:

- modern
- muda
- terpercaya
- aktif
- bersih
- mudah dibaca
- tidak terlalu dekoratif
- kuat sebagai media publikasi berita dan artikel

Identitas Islami tidak diterjemahkan melalui ornamen berlebihan.

Gunakan identitas melalui:

- warna
- tipografi
- fotografi kegiatan
- komposisi
- geometri ringan
- whitespace
- konten
- aksen visual yang terkontrol

Prinsip:

```text
Modern, bukan futuristik.
Islami, bukan ornamental berlebihan.
Muda, bukan playful berlebihan.
Profesional, bukan kaku.
Editorial, bukan portal berita yang padat.
```

---

# 2. Brand Color System

## 2.1 Core Brand Colors

```yaml
colors:
  primary: "#07B5A2"
  primary-deep: "#00A890"
  secondary: "#1A8E45"
  accent: "#F0A123"
```

### Primary — HDMI Teal

**HEX:** `#07B5A2`

Digunakan sebagai:

- identitas utama
- highlight
- active navigation
- icon accent
- section decoration
- badge tertentu
- tombol utama jika menggunakan teks gelap
- elemen grafis

Primary tidak harus memenuhi seluruh area halaman.

Gunakan secara terkontrol agar tetap terasa premium.

---

### Primary Deep / Gradient End

**HEX:** `#00A890`

Digunakan sebagai:

- pasangan gradient
- hover/deeper teal
- background brand section
- graphical accent
- active visual state

---

### Secondary — HDMI Green

**HEX:** `#1A8E45`

Digunakan untuk:

- elemen bernuansa dakwah
- program sosial
- indikator positif
- tag/kategori tertentu
- icon sekunder
- decorative highlight

Hijau bukan pesaing warna primary.

Teal tetap menjadi warna brand dominan.

---

### Accent — HDMI Orange

**HEX:** `#F0A123`

Digunakan secara hemat untuk:

- highlight CTA
- eyebrow
- small badge
- icon
- angka statistik
- decorative marker
- hover detail
- informasi penting

Orange tidak digunakan sebagai background section besar secara berulang.

---

# 3. Signature Gradient

Gradient resmi:

```css
linear-gradient(
  135deg,
  #07B5A2 0%,
  #00A890 100%
)
```

Token:

```yaml
gradient:
  primary: "linear-gradient(135deg, #07B5A2 0%, #00A890 100%)"
```

Gradient boleh digunakan pada:

- hero accent
- CTA band
- highlight panel
- icon background
- decorative shape
- featured card

Jangan gunakan gradient pada:

- seluruh card
- setiap button
- seluruh section
- body background
- artikel body

Prinsip:

```text
Gradient is an accent, not the entire identity.
```

---

# 4. Neutral Color System

Warna netral digunakan agar warna brand memiliki ruang.

```yaml
colors:
  ink: "#0F172A"
  heading: "#0F172A"
  body: "#475569"
  muted: "#64748B"
  subtle: "#94A3B8"

  canvas: "#FFFFFF"
  canvas-soft: "#F6FAF9"
  surface-teal: "#EAF8F6"
  surface-green: "#ECF7EF"
  surface-orange: "#FFF6E6"

  border: "#DCE8E5"
  border-strong: "#C8D9D5"

  dark-surface: "#073B35"
  dark-surface-soft: "#0C4C43"
```

---

# 5. Color Roles

## Light Surface

```text
Background       #FFFFFF
Heading          #0F172A
Body             #475569
Muted            #64748B
Border           #DCE8E5
```

## Brand Surface

```text
Primary          #07B5A2
Primary Deep     #00A890
```

Untuk teks kecil di atas `#07B5A2` dan `#F0A123`, gunakan:

```text
#0F172A
```

karena memberikan kontras yang lebih baik daripada putih.

---

# 6. Accessibility Color Rule

Jangan otomatis menggunakan teks putih hanya karena background berwarna.

### Primary

```text
Background: #07B5A2
Preferred text: #0F172A
```

### Accent

```text
Background: #F0A123
Preferred text: #0F172A
```

### Secondary Green

Untuk body text kecil, hindari kombinasi kontras rendah.

Lebih aman menggunakan:

```text
Background: #ECF7EF
Text: #166534
```

atau gunakan hijau sebagai border/icon.

---

# 7. Color Usage Ratio

Rekomendasi visual:

```text
60% Neutral / White
25% Teal family
10% Green
5% Orange accent
```

Ini bukan aturan matematis absolut, tetapi menjadi panduan agar visual tidak terlalu ramai.

---

# 8. Typography

## 8.1 Primary Font

Direkomendasikan:

**Plus Jakarta Sans**

Fallback:

```css
"Plus Jakarta Sans",
Inter,
system-ui,
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
sans-serif
```

Alasan:

- modern
- bersih
- youthful
- nyaman untuk UI
- nyaman untuk berita
- memiliki karakter lebih hangat dibanding sans-serif yang terlalu corporate

---

# 9. Typography Tokens

```yaml
typography:

  display-xxl:
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: "-0.03em"

  display-xl:
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"

  display-lg:
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"

  display-md:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: "-0.015em"

  heading-lg:
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.25

  heading-md:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.30

  heading-sm:
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35

  body-lg:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.70

  body-md:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65

  body-md-strong:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.50

  body-sm:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55

  body-sm-strong:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.45

  caption:
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.50

  button:
    fontSize: 15px
    fontWeight: 600
    lineHeight: 20px
```

---

# 10. Typography Principles

### Headlines

- sentence case
- bold
- pendek
- kuat
- tidak menggunakan uppercase panjang

### Body

Prioritaskan readability.

Untuk artikel:

```text
font-size: 17–18px
line-height: 1.7–1.8
max-width: 68–72ch
```

### Eyebrow

Eyebrow boleh uppercase.

Contoh:

```text
TENTANG HDMI
PROGRAM KAMI
BERITA TERBARU
```

Gunakan:

```text
12–14px
weight 700
letter-spacing 0.08em
```

Warna:

```text
#00A890
```

atau:

```text
#F0A123
```

---

# 11. Radius System

Website menggunakan rounded geometry yang ramah tetapi tidak terlalu playful.

```yaml
rounded:
  none: 0px
  sm: 6px
  md: 10px
  lg: 14px
  xl: 20px
  2xl: 28px
  pill: 999px
  full: 9999px
```

---

# 12. Radius Rules

### Button

Gunakan:

```text
999px
```

untuk CTA pendek.

### Card

Gunakan:

```text
14px – 20px
```

### Large Feature Card

Gunakan:

```text
20px – 28px
```

### Image

Ikuti card parent.

Jangan menggunakan rounded radius berbeda-beda tanpa alasan.

---

# 13. Spacing System

Base unit:

```text
4px
```

Tokens:

```yaml
spacing:
  0: 0px
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px
  20: 80px
  24: 96px
  28: 112px
  32: 128px
```

---

# 14. Section Spacing

Desktop:

```text
80px – 112px vertical
```

Mobile:

```text
56px – 72px vertical
```

Homepage hero dapat menggunakan:

```text
96px – 128px
```

jika viewport mencukupi.

---

# 15. Container System

Maximum content width:

```text
1200px
```

Optional wide layout:

```text
1280px
```

Gutter:

```text
Mobile: 20px
Tablet: 32px
Desktop: 40px
```

Article content:

```text
680px – 760px
```

---

# 16. Grid

Gunakan 12-column desktop grid secara konseptual.

Common patterns:

```text
Hero       6 + 6
Feature    5 + 7
Cards      4 + 4 + 4
News       4 + 4 + 4
Article    8 + 4
```

Mobile:

```text
single column
```

---

# 17. Responsive Breakpoints

Rekomendasi mengikuti Tailwind:

```text
sm   640px
md   768px
lg   1024px
xl   1280px
2xl  1536px
```

Design tetap:

```text
mobile-first
```

---

# 18. Elevation

Gunakan shadow secara ringan.

```yaml
shadow:
  xs: "0 1px 2px rgba(15, 23, 42, 0.04)"
  sm: "0 4px 12px rgba(15, 23, 42, 0.06)"
  md: "0 12px 32px rgba(15, 23, 42, 0.08)"
  lg: "0 20px 48px rgba(15, 23, 42, 0.10)"
```

---

# 19. Elevation Principle

Default card:

```text
border + no shadow
```

Featured card:

```text
subtle shadow
```

Floating UI:

```text
medium shadow
```

Jangan memberikan shadow besar ke semua komponen.

---

# 20. Navigation

## Navbar

```yaml
nav-bar:
  backgroundColor: "#FFFFFF"
  textColor: "#0F172A"
  borderColor: "#DCE8E5"
  heightDesktop: "72px"
  heightMobile: "64px"
```

Navbar dapat menggunakan:

```text
white + translucent blur
```

saat sticky.

Contoh:

```css
background: rgba(255,255,255,.88);
backdrop-filter: blur(14px);
```

---

# 21. Navigation Link

Default:

```text
#475569
```

Hover:

```text
#00A890
```

Active:

```text
#00A890
```

Active indicator opsional:

```text
2px teal line
```

---

# 22. Logo Area

Logo harus memiliki breathing room.

Jangan:

- terlalu kecil
- terlalu rapat dengan link
- menambahkan efek shadow
- mengubah warna logo tanpa kebutuhan

---

# 23. Button System

## Primary Button

```yaml
button-primary:
  backgroundColor: "#07B5A2"
  textColor: "#0F172A"
  hoverBackground: "#00A890"
  rounded: "999px"
  padding: "12px 20px"
  fontWeight: 600
```

Gunakan untuk:

- CTA utama
- lihat kegiatan
- baca artikel utama
- kolaborasi

---

# 24. Dark Primary Button

Untuk kebutuhan kontras tinggi pada section terang:

```yaml
button-dark:
  backgroundColor: "#073B35"
  textColor: "#FFFFFF"
  hoverBackground: "#0C4C43"
  rounded: "999px"
```

---

# 25. Secondary Button

```yaml
button-secondary:
  backgroundColor: "#FFFFFF"
  textColor: "#0F172A"
  borderColor: "#C8D9D5"
  rounded: "999px"
```

Hover:

```text
background #F6FAF9
border #07B5A2
```

---

# 26. Accent Button

Gunakan terbatas.

```yaml
button-accent:
  backgroundColor: "#F0A123"
  textColor: "#0F172A"
  hoverBackground: "#E69512"
  rounded: "999px"
```

Cocok untuk:

- CTA khusus
- event
- agenda
- kampanye

Jangan bersaing dengan primary CTA pada viewport yang sama.

---

# 27. Text Link

```yaml
link:
  textColor: "#008D7E"
  hoverColor: "#006F64"
```

Link harus tetap dapat dikenali tanpa hanya mengandalkan warna.

Untuk article body:

```text
underline
underline-offset: 3px
```

---

# 28. Card System

## Content Card

```yaml
card-content:
  backgroundColor: "#FFFFFF"
  textColor: "#0F172A"
  borderColor: "#DCE8E5"
  rounded: "20px"
  padding: "24px"
```

---

# 29. News Card

Struktur:

```text
Image
Category + Date
Title
Excerpt
Read more
```

Rules:

- image ratio 16:10 atau 4:3
- title maksimal 2–3 baris
- excerpt maksimal 2–3 baris
- card dapat flat
- hover memberi sedikit elevation

---

# 30. Article Card

Article card lebih editorial dibanding news card.

Featured article dapat memiliki:

```text
large image
large title
category
author
reading time
```

---

# 31. Program Card

```yaml
program-card:
  backgroundColor: "#F6FAF9"
  iconBackground: "#EAF8F6"
  iconColor: "#00A890"
  titleColor: "#0F172A"
  bodyColor: "#475569"
  rounded: "20px"
```

Variasi kategori dapat menggunakan green secara selektif.

---

# 32. Featured Card

Featured card boleh menggunakan gradient.

```yaml
featured-card:
  background: "linear-gradient(135deg, #07B5A2 0%, #00A890 100%)"
  textColor: "#0F172A"
  rounded: "28px"
```

Jika menggunakan foto:

gunakan overlay yang menjaga readability.

---

# 33. Statistics Card

Gunakan angka besar.

```text
Number: #00A890
Label: #475569
```

Orange `#F0A123` dapat digunakan sebagai marker atau underline.

---

# 34. Badge System

## Teal Badge

```text
background #EAF8F6
text #00796D
```

## Green Badge

```text
background #ECF7EF
text #166534
```

## Orange Badge

```text
background #FFF6E6
text #8A5400
```

Gunakan badge untuk:

- kategori
- status
- event type
- content metadata

---

# 35. Input System

```yaml
text-input:
  backgroundColor: "#FFFFFF"
  textColor: "#0F172A"
  borderColor: "#DCE8E5"
  rounded: "12px"
  padding: "12px 16px"
```

Focus:

```text
border #07B5A2
ring rgba(7,181,162,.18)
```

---

# 36. Search Input

Search artikel/berita dapat menggunakan pill-like container.

```text
height 48–52px
radius 999px
```

Search icon:

```text
#64748B
```

Focus:

```text
#00A890
```

---

# 37. Section Backgrounds

Gunakan ritme:

```text
White
↓
Soft Teal
↓
White
↓
Featured / Gradient
↓
White
↓
Dark Footer
```

Jangan membuat setiap section memiliki warna berbeda.

---

# 38. Hero System

Hero harus memiliki banyak ruang.

Recommended structure:

```text
Eyebrow
Headline
Supporting paragraph
CTA group
Visual / photography
```

---

# 39. Hero Typography

Desktop:

```text
48–64px
```

Mobile:

```text
36–42px
```

Headline sebaiknya tidak terlalu panjang.

Maksimal visual:

```text
3–4 lines mobile
2–3 lines desktop
```

---

# 40. Hero Accent

Gunakan salah satu:

- gradient shape
- thin orange line
- teal highlighted word
- photographic crop
- subtle Islamic geometry

Jangan gunakan semuanya bersamaan.

---

# 41. Islamic Geometry

Islamic geometry boleh digunakan sebagai decorative element.

Rules:

```text
opacity 3–8%
large scale
minimal
not repeated densely
```

Warna:

```text
#00A890
```

atau putih pada brand surface.

Tujuannya memberi karakter, bukan menjadi motif utama.

---

# 42. Photography

Photography menjadi elemen penting.

Prioritaskan:

- kegiatan asli HDMI
- dai muda
- audiens
- aktivitas sosial
- diskusi
- kajian
- kegiatan lapangan
- kolaborasi

Hindari generic stock photo jika dokumentasi asli tersedia.

---

# 43. Image Treatment

Recommended:

```text
natural color
balanced exposure
warm-neutral skin tone
moderate contrast
```

Jangan memberi teal filter yang kuat pada semua foto.

Brand color lebih baik hadir melalui layout daripada memaksa warna foto.

---

# 44. Image Geometry

Hero:

```text
4:3
3:2
```

News:

```text
16:10
```

Article featured:

```text
16:9
```

Gallery:

```text
mixed editorial grid
```

Radius:

```text
16–24px
```

---

# 45. Icons

Style:

```text
outline
simple
1.75–2px stroke
rounded terminals
```

Gunakan satu library icon secara konsisten.

Icon brand:

```text
#00A890
```

Secondary icon:

```text
#1A8E45
```

Accent icon:

```text
#F0A123
```

---

# 46. Article Reading Experience

Artikel harus menjadi salah satu pengalaman terbaik di website.

Content width:

```text
68–72ch
```

Body:

```text
17–18px
line-height 1.75
```

Spacing antar paragraf:

```text
20–24px
```

---

# 47. Article Headings

```text
H1 40–52px desktop
H2 28–32px
H3 22–24px
H4 18–20px
```

Mobile H1:

```text
32–38px
```

---

# 48. Blockquote

Gunakan:

```text
left border 4px #F0A123
background #FFF6E6
```

atau:

```text
left border 4px #07B5A2
background #EAF8F6
```

Jangan menggunakan quotation mark dekoratif terlalu besar.

---

# 49. Article Metadata

Metadata:

- author
- published date
- reading time
- category

Gunakan:

```text
14px
#64748B
```

Category dapat menggunakan badge.

---

# 50. Breadcrumb

Typography:

```text
14px
```

Default:

```text
#64748B
```

Current:

```text
#0F172A
```

Separator:

```text
/
```

atau chevron.

---

# 51. Footer

Footer menggunakan dark teal, bukan warna hitam murni.

```yaml
footer:
  backgroundColor: "#073B35"
  textColor: "#FFFFFF"
  mutedTextColor: "#B8D3CD"
  linkHoverColor: "#F0A123"
```

Ini menjaga footer tetap dekat dengan identitas HDMI.

---

# 52. Footer Accent

Gunakan:

```text
thin gradient line
```

di bagian atas footer:

```css
linear-gradient(90deg, #07B5A2, #00A890, #1A8E45, #F0A123)
```

Boleh digunakan hanya sebagai detail tipis.

---

# 53. CTA Band

CTA besar sebelum footer dapat menggunakan:

```text
background gradient primary
```

atau dark teal.

CTA band tidak perlu banyak elemen.

Struktur:

```text
Headline
Description
CTA
```

---

# 54. Loading States

Skeleton:

```text
#EEF4F2
```

Animation:

```text
subtle pulse
```

Jangan menggunakan spinner besar jika skeleton lebih sesuai.

---

# 55. Focus State

Semua elemen interaktif harus memiliki focus-visible state.

```css
outline: 3px solid rgba(7, 181, 162, .30);
outline-offset: 3px;
```

---

# 56. Hover Motion

Motion harus halus.

Duration:

```text
150–250ms
```

Recommended easing:

```text
ease-out
```

Card hover:

```text
translateY(-2px)
```

Maksimal:

```text
translateY(-4px)
```

---

# 57. Animation

Gunakan secukupnya.

Allowed:

- subtle fade
- slight translate
- image scale 1.02
- accordion transition
- menu reveal

Avoid:

- excessive parallax
- continuous floating objects
- bouncing CTA
- scroll hijacking

---

# 58. Accessibility

Minimum target:

```text
WCAG AA
```

Semua komponen harus:

- keyboard accessible
- memiliki focus state
- menggunakan semantic HTML
- memiliki alt text
- tidak hanya mengandalkan warna
- mempertahankan contrast

---

# 59. Touch Targets

Minimum target:

```text
44 × 44px
```

Navigation dan button mobile wajib nyaman disentuh.

---

# 60. Component Tokens

```yaml
components:

  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.heading}"
    borderColor: "{colors.border}"
    height: "72px"

  nav-link:
    textColor: "{colors.body}"
    hoverColor: "{colors.primary-deep}"

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    hoverBackground: "{colors.primary-deep}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"

  button-dark:
    backgroundColor: "{colors.dark-surface}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "12px 20px"

  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border-strong}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"

  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"

  card-content:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border}"
    rounded: "{rounded.xl}"
    padding: "{spacing.6}"

  card-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "{spacing.6}"

  card-featured:
    background: "{gradient.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.8}"

  program-card:
    backgroundColor: "{colors.canvas-soft}"
    iconBackgroundColor: "{colors.surface-teal}"
    iconColor: "{colors.primary-deep}"
    rounded: "{rounded.xl}"
    padding: "{spacing.6}"

  article-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border}"
    focusColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "12px 16px"

  badge-primary:
    backgroundColor: "{colors.surface-teal}"
    textColor: "#00796D"
    rounded: "{rounded.pill}"

  badge-secondary:
    backgroundColor: "{colors.surface-green}"
    textColor: "#166534"
    rounded: "{rounded.pill}"

  badge-accent:
    backgroundColor: "{colors.surface-orange}"
    textColor: "#8A5400"
    rounded: "{rounded.pill}"

  footer:
    backgroundColor: "{colors.dark-surface}"
    textColor: "#ffffff"
```

---

# 61. Tailwind Semantic Color Mapping

Disarankan jangan menggunakan langsung:

```html
bg-[#07B5A2]
```

di seluruh codebase.

Gunakan semantic token.

Contoh:

```text
bg-primary
bg-primary-deep
bg-secondary
bg-accent

text-heading
text-body
text-muted

bg-surface
bg-surface-soft

border-default
```

Tujuan:

jika branding berubah, code tidak perlu diubah satu per satu.

---

# 62. Recommended Tailwind Mapping

```js
colors: {
  primary: {
    DEFAULT: "#07B5A2",
    deep: "#00A890",
    soft: "#EAF8F6",
  },

  secondary: {
    DEFAULT: "#1A8E45",
    soft: "#ECF7EF",
  },

  accent: {
    DEFAULT: "#F0A123",
    soft: "#FFF6E6",
  },

  ink: "#0F172A",

  body: "#475569",

  muted: "#64748B",

  surface: {
    DEFAULT: "#FFFFFF",
    soft: "#F6FAF9",
  },

  border: {
    DEFAULT: "#DCE8E5",
    strong: "#C8D9D5",
  },

  dark: {
    DEFAULT: "#073B35",
    soft: "#0C4C43",
  },
}
```

---

# 63. Homepage Visual Rhythm

Recommended:

```text
Navbar
↓
Hero — White / subtle teal accent
↓
About — White
↓
Vision / Values — Soft teal
↓
Programs — White
↓
Latest News — White
↓
Featured Article — Gradient / featured card
↓
Statistics — Soft neutral
↓
Gallery — White
↓
Collaboration CTA — Dark teal / gradient
↓
Footer — Dark teal
```

---

# 64. News Listing

Layout desktop:

```text
Featured news
↓
3-column news grid
```

Mobile:

```text
single column
```

Filters/categories:

```text
pill chips
```

Active:

```text
background #07B5A2
text #0F172A
```

---

# 65. Article Listing

Lebih editorial daripada news.

Recommended:

```text
1 featured article
+
2 secondary articles
+
article list
```

Jangan membuat seluruh artikel menggunakan card identik jika ingin tampilan media yang lebih premium.

---

# 66. Empty State

```yaml
empty-state:
  backgroundColor: "#F6FAF9"
  textColor: "#475569"
  iconColor: "#00A890"
  rounded: "20px"
```

---

# 67. Error State

Error color boleh menggunakan semantic red terpisah karena ini warna fungsi, bukan brand.

```text
Error: #DC2626
Error Soft: #FEF2F2
```

---

# 68. Success State

Untuk success gunakan keluarga hijau:

```text
#1A8E45
```

Surface:

```text
#ECF7EF
```

---

# 69. Warning State

Gunakan keluarga orange:

```text
#F0A123
```

Surface:

```text
#FFF6E6
```

---

# 70. Information State

Gunakan teal:

```text
#07B5A2
```

Surface:

```text
#EAF8F6
```

---

# 71. Do's

### Do

- Jadikan teal `#07B5A2` sebagai warna brand dominan.
- Gunakan `#00A890` untuk gradient dan state teal yang lebih dalam.
- Gunakan orange `#F0A123` sebagai aksen kecil yang bernilai tinggi.
- Gunakan green `#1A8E45` sebagai secondary dan semantic success.
- Pertahankan white space yang luas.
- Gunakan card radius 14–20px secara konsisten.
- Gunakan pill untuk CTA dan filter.
- Gunakan foto kegiatan asli HDMI.
- Jadikan artikel nyaman dibaca.
- Gunakan dark teal untuk footer dan CTA besar.
- Gunakan semantic tokens di codebase.
- Gunakan gradient sebagai signature accent, bukan dekorasi di semua tempat.

---

# 72. Don'ts

### Don't

- Jangan menggunakan empat brand colors dalam satu card.
- Jangan membuat seluruh website penuh teal.
- Jangan menggunakan orange sebagai background section besar berulang.
- Jangan membuat green dan teal memiliki hierarki visual yang sama.
- Jangan menggunakan gradient pada semua button.
- Jangan menggunakan shadow berat di semua card.
- Jangan menggunakan ornamen Islami terlalu padat.
- Jangan membuat body text menggunakan warna brand.
- Jangan menggunakan terlalu banyak radius berbeda.
- Jangan menggunakan stock photo jika dokumentasi HDMI tersedia.
- Jangan menaruh teks putih di atas `#07B5A2` tanpa memeriksa contrast.
- Jangan hard-code hex berulang kali dalam komponen.

---

# 73. Brand Hierarchy

Urutan kepentingan warna:

```text
1. Teal #07B5A2
2. Deep Teal #00A890
3. Green #1A8E45
4. Orange #F0A123
```

Secara konseptual:

```text
TEAL
Brand / identity

GREEN
Dakwah / growth / positive

ORANGE
Energy / youth / emphasis
```

---

# 74. Signature Visual Language

Website HDMI dikenali melalui kombinasi:

```text
Teal identity
+
Orange micro-accent
+
Dark teal footer
+
Large editorial photography
+
Rounded cards
+
Pill CTA
+
Strong modern typography
+
Generous whitespace
```

Bukan melalui ornamen yang berlebihan.

---

# 75. Final Design Direction

Keseluruhan tampilan harus terasa:

```text
Young
Islamic
Modern
Trustworthy
Editorial
Active
Clean
Human
```

Targetnya bukan sekadar:

```text
website organisasi
```

tetapi:

```text
professional digital media platform
for HDMI Kabupaten Bone
```

yang dapat berkembang menjadi:

```text
Organization Website
↓
News Platform
↓
Article Platform
↓
Digital Da'wah Media
```

tanpa kehilangan konsistensi visual.

---

# 76. Related Documentation

Design system ini digunakan bersama:

```text
docs/PRD.md
docs/ARCHITECTURE.md
docs/UI_SPEC.md
docs/SEO_SPEC.md
docs/CONTENT.md
```

`DESIGN_SYSTEM.md` adalah sumber utama seluruh keputusan visual.

Jika implementasi UI berbeda dengan design system tanpa alasan spesifik, design system menjadi referensi utama.
