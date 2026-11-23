# Design System — Website Portofolio Pribadi Muhammad Rizki

**Versi Dokumen:** 1.1  
**Tanggal:** 21 November 2026  
**Status:** Final Draft — Hasil Konsolidasi, Menunggu Persetujuan Pemilik  
**Acuan Utama:** `docs/design-brief-final.md` (Design Brief v1.2)

---

## Daftar Isi

1. [Filosofi Desain](#1-filosofi-desain)
2. [Sistem Tipografi](#2-sistem-tipografi)
3. [Sistem Warna](#3-sistem-warna)
4. [Sistem Spacing dan Tata Letak](#4-sistem-spacing-dan-tata-letak)
5. [Panduan Komponen](#5-panduan-komponen)
6. [Perilaku Responsif](#6-perilaku-responsif)
7. [Gerakan dan Interaksi](#7-gerakan-dan-interaksi)
8. [Standar Aksesibilitas](#8-standar-aksesibilitas)
9. [Ringkasan Keputusan Design System](#9-ringkasan-keputusan-design-system)

---

## 1. Filosofi Desain

### Konsep: Editorial Swiss Minimalist

Website portofolio Muhammad Rizki dibangun dengan pendekatan **Editorial Swiss Minimalist** kontemporer. Konsep ini memadukan kejelasan struktur, proporsi rasional, dan ketegasan tipografi khas *International Typographic Style* dengan fleksibilitas media web modern.

Portofolio diposisikan bukan sebagai etalase grafis yang ramai, melainkan sebagai **dokumen editorial interaktif yang elegan, jujur, dan berwibawa**—serupa monograf atau publikasi profil profesional bermutu tinggi.

### Karakter Visual Utama

1. **Profesional dan autentik:** menyajikan fakta riil tanpa rekayasa, metrik palsu, atau klaim berlebihan. Desain mencerminkan ketelitian seorang lulusan Sarjana Terapan Teknik Informatika.
2. **Bersih dan tenang:** menghilangkan elemen dekoratif tanpa fungsi. *Whitespace* menjadi ruang bernapas yang membantu mengarahkan fokus pembaca.
3. **Berkarakter dan modern:** perpaduan display serif humanis pada judul dan sans-serif fungsional pada konten menciptakan ritme visual yang kuat tanpa terasa dingin.
4. **Editorial, bukan template generik:** menggunakan ritme asimetris yang seimbang serta komposisi gambar dan teks yang bervariasi. Hindari pola portofolio developer yang terlalu umum.

### Prinsip yang Dihindari

- Tidak menggunakan *card layout* berulang untuk membungkus seluruh konten.
- Tidak menggunakan animasi *floating*, paralaks berlebihan, partikel visual, atau dekorasi kanvas yang tidak memiliki fungsi.
- Tidak menggunakan avatar berbentuk lingkaran.
- Tidak menggunakan *skill bar*, persentase kecakapan, atau rating bintang untuk menggambarkan kemampuan.
- Tidak menggunakan palet gelap berlebihan dengan aksen neon.
- Tidak menggunakan bayangan dekoratif (*no drop-shadows*).

---

## 2. Sistem Tipografi

Tipografi merupakan pilar visual utama dalam pendekatan Editorial Swiss Minimalist. Sistem ini menggunakan tiga keluarga huruf dari Google Fonts (keluarga DM), masing-masing dengan fungsi yang spesifik.

### Pemilihan Keluarga Huruf (*Font Families*)

| Peran Tipografi | Keluarga Huruf | Fallback Font | Alasan Pemilihan dan Karakteristik |
|---|---|---|---|
| **Display heading dan nama hero** | `DM Serif Display` | `Georgia, "Times New Roman", serif` | Serif dengan kontras tajam dan proporsi klasik yang memberikan bobot editorial serta karakter manusiawi. |
| **Heading, body text, navigasi, dan UI** | `DM Sans` | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` | Sans-serif geometris dan netral yang mudah dibaca pada layar digital. |
| **Metadata, label teknis, dan nomor section** | `DM Mono` | `"SF Mono", "Fira Code", Menlo, Consolas, monospace` | Monospace yang rapi untuk timestamp, label teknis, tag teknologi, dan penomoran editorial. |

### Deklarasi CSS Font Family

```css
:root {
  --font-display: "DM Serif Display", Georgia, serif;
  --font-body: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "DM Mono", "SF Mono", Menlo, Consolas, monospace;
}
```

### Skala Tipografi (*Type Scale*)

Skala tipografi menggunakan **acuan skala modular yang disesuaikan secara manual (*tailored modular scale*)**. Ukuran disusun untuk menciptakan hierarki yang tegas dan proporsional pada desktop, kemudian dirapatkan pada mobile demi efisiensi ruang tanpa mengorbankan keterbacaan.

#### Spesifikasi Tipografi Desktop (≥1024px)

| Token / Tingkat | Font Family | Ukuran Font | Line Height | Font Weight | Letter Spacing | Penggunaan |
|---|---|---:|---:|---:|---:|---|
| `display-hero` | `DM Serif Display` | `3.75rem` (60px) | `1.10` | 400 (Regular) | `-0.025em` | Nama Muhammad Rizki pada hero. |
| `h1` / `title-page` | `DM Serif Display` | `2.75rem` (44px) | `1.15` | 400 (Regular) | `-0.02em` | Judul utama halaman detail proyek. |
| `h2` / `section-title` | `DM Sans` | `2.00rem` (32px) | `1.25` | 700 (Bold) | `-0.015em` | Judul section utama pada homepage. |
| `h3` / `item-title` | `DM Sans` | `1.50rem` (24px) | `1.30` | 600 (SemiBold) | `-0.01em` | Judul proyek, peran pengalaman, dan nama institusi. |
| `h4` / `sub-title` | `DM Sans` | `1.20rem` (19.2px) | `1.40` | 600 (SemiBold) | `0em` | Subjudul proyek dan kategori keahlian. |
| `body-large` | `DM Sans` | `1.125rem` (18px) | `1.60` | 400 (Regular) | `0em` | Paragraf intro hero dan paragraf pembuka artikel. |
| `body-default` | `DM Sans` | `1.00rem` (16px) | `1.65` | 400 (Regular) | `0em` | Body text standar dan deskripsi pengalaman. |
| `body-small` | `DM Sans` | `0.875rem` (14px) | `1.55` | 400 / 500 | `0.01em` | Metadata, caption, dan catatan kaki. |
| `ui-nav` | `DM Sans` | `0.9375rem` (15px) | `1.00` | 500 (Medium) | `0.01em` | Menu navigasi dan tombol interaktif. |
| `mono-label` | `DM Mono` | `0.8125rem` (13px) | `1.40` | 500 (Medium) | `0.04em` | Nomor section, tag teknologi, dan timestamp. |

#### Spesifikasi Tipografi Mobile (<768px)

| Token / Tingkat | Font Family | Ukuran Font | Line Height | Font Weight | Letter Spacing | Penyesuaian Mobile |
|---|---|---:|---:|---:|---:|---|
| `display-hero` | `DM Serif Display` | `2.50rem` (40px) | `1.15` | 400 | `-0.02em` | Diperkecil agar proporsional dan tidak overflow. |
| `h1` / `title-page` | `DM Serif Display` | `2.125rem` (34px) | `1.20` | 400 | `-0.015em` | Judul artikel proyek pada layar mobile. |
| `h2` / `section-title` | `DM Sans` | `1.625rem` (26px) | `1.30` | 700 | `-0.01em` | Judul section yang lebih ringkas. |
| `h3` / `item-title` | `DM Sans` | `1.25rem` (20px) | `1.35` | 600 | `-0.005em` | Judul entri dan judul proyek. |
| `h4` / `sub-title` | `DM Sans` | `1.0625rem` (17px) | `1.40` | 600 | `0em` | Subjudul kategori. |
| `body-large` | `DM Sans` | `1.00rem` (16px) | `1.60` | 400 | `0em` | Teks intro mobile. |
| `body-default` | `DM Sans` | `0.9375rem` (15px) | `1.60` | 400 | `0em` | Body text pada layar sempit. |
| `body-small` | `DM Sans` | `0.8125rem` (13px) | `1.50` | 400 / 500 | `0.01em` | Metadata dan keterangan ringkas. |
| `ui-nav` | `DM Sans` | `1.125rem` (18px) | `1.20` | 500 | `0.01em` | Teks navigasi drawer mobile. |
| `mono-label` | `DM Mono` | `0.75rem` (12px) | `1.40` | 500 | `0.04em` | Label teknis dan tag teknologi. |

### Aturan Tipografi dan Tata Huruf

1. **Panjang baris optimal (*measure*):** paragraf body text dibatasi sekitar 65–70 karakter per baris, dengan lebar maksimum sekitar `38rem` atau 600px untuk teks berukuran 16px.
2. **Hierarki vertikal:** jarak antara heading dan paragraf di bawahnya harus lebih rapat daripada jarak heading terhadap konten sebelumnya.
3. **Format tanggal dan angka:** angka teknis seperti IPK, durasi, dan nilai dapat menggunakan fitur tabular numbers atau `DM Mono` ketika disajikan dalam tabel atau perbandingan.

---

## 3. Sistem Warna

Sistem warna menggunakan **tepat tujuh token warna resmi** yang disetujui dalam Design Brief v1.2. Tidak ada penambahan token warna utama, saturasi acak, atau gradien dekoratif.

### Token Warna Resmi

| Nama CSS Token | Nilai Hex | Format RGB | Peran Semantik dan Panduan Penggunaan |
|---|---|---|---|
| `--color-bg` | `#F7F7F3` | `rgb(247, 247, 243)` | Latar belakang dasar halaman (*warm off-white*), memberi nuansa kertas dan mengurangi kesan putih yang terlalu tajam. |
| `--color-surface` | `#FFFFFF` | `rgb(255, 255, 255)` | Permukaan untuk elemen fungsional seperti navigasi sticky, dialog, drawer, dan panel yang memang memerlukan pemisahan. |
| `--color-text-primary` | `#1C2421` | `rgb(28, 36, 33)` | Tinta utama bernada sejuk untuk nama hero, heading, body text, dan label penting. |
| `--color-text-secondary` | `#66716C` | `rgb(102, 113, 108)` | Teks sekunder untuk caption, timestamp, metadata lokasi, dan deskripsi pendukung pada latar yang memiliki kontras memadai. |
| `--color-accent` | `#476F67` | `rgb(71, 111, 103)` | Aksen utama untuk link, status navigasi aktif, outline fokus, dan latar tombol CTA primer. |
| `--color-accent-soft` | `#E6EFEB` | `rgb(230, 239, 235)` | Latar aksen lembut untuk chip keahlian, section tertentu, dan hover state ringan. |
| `--color-border` | `#DCE2DC` | `rgb(220, 226, 220)` | Garis pembatas struktural dan divider editorial yang halus. |

### Deklarasi CSS Color Tokens

```css
:root {
  --color-bg: #F7F7F3;
  --color-surface: #FFFFFF;
  --color-text-primary: #1C2421;
  --color-text-secondary: #66716C;
  --color-accent: #476F67;
  --color-accent-soft: #E6EFEB;
  --color-border: #DCE2DC;
}
```

### Matriks Kontras dan Evaluasi Aksesibilitas

Rasio berikut digunakan sebagai acuan kombinasi warna teks dan latar. Status AAA pada tabel merujuk pada ambang kontras teks WCAG untuk kombinasi yang diuji.

| Foreground (Teks) | Background (Latar) | Rasio Kontras | Status untuk Teks Normal | Evaluasi dan Aturan Penggunaan |
|---|---|---:|---|---|
| `#1C2421` (`--color-text-primary`) | `#F7F7F3` (`--color-bg`) | **14.77:1** | **AAA** | Pasangan standar untuk body text dan heading di latar utama. |
| `#1C2421` (`--color-text-primary`) | `#FFFFFF` (`--color-surface`) | **15.86:1** | **AAA** | Untuk teks di atas permukaan putih. |
| `#1C2421` (`--color-text-primary`) | `#E6EFEB` (`--color-accent-soft`) | **13.53:1** | **AAA** | Wajib digunakan untuk teks normal di atas latar soft teal. |
| `#66716C` (`--color-text-secondary`) | `#F7F7F3` (`--color-bg`) | **4.72:1** | **AA** | Dapat digunakan untuk caption dan metadata di latar utama. |
| `#66716C` (`--color-text-secondary`) | `#FFFFFF` (`--color-surface`) | **5.07:1** | **AA** | Dapat digunakan untuk metadata di atas permukaan putih. |
| `#476F67` (`--color-accent`) | `#F7F7F3` (`--color-bg`) | **5.23:1** | **AA** | Cocok untuk link teks, ikon, dan aksen di latar utama. |
| `#476F67` (`--color-accent`) | `#E6EFEB` (`--color-accent-soft`) | **4.79:1** | **AA** | Cocok untuk teks aksen di atas latar soft teal. |
| `#FFFFFF` (`--color-surface`) | `#476F67` (`--color-accent`) | **5.62:1** | **AA** | Digunakan untuk teks putih pada tombol primer. |
| `#66716C` (`--color-text-secondary`) | `#E6EFEB` (`--color-accent-soft`) | **4.32:1** | **Tidak memenuhi AA untuk teks normal** | **Hindari kombinasi ini.** Gunakan `--color-text-primary` untuk teks di atas soft teal. |

**Aturan kombinasi warna yang wajib diikuti:**

- Teks normal memerlukan rasio kontras minimum **4.5:1**.
- Teks besar memerlukan rasio kontras minimum **3.0:1**. Teks besar berarti minimal 18pt regular atau 14pt bold, setara kira-kira 24 CSS px regular atau 18.67 CSS px bold.
- Jangan gunakan `--color-text-secondary` di atas `--color-accent-soft` untuk teks normal karena rasionya hanya 4.32:1.
- Untuk menjaga konsistensi dan menghindari salah pemakaian, gunakan `--color-text-primary` sebagai warna teks di atas `--color-accent-soft`, termasuk pada chip keahlian dan placeholder foto.
- Warna `--color-border` merupakan divider dan batas struktural dekoratif. Warna ini **tidak boleh menjadi satu-satunya indikator** untuk mengenali batas kontrol interaktif, status aktif, atau fokus keyboard. Komponen interaktif yang membutuhkan batas visual harus menggunakan warna dengan kontras memadai terhadap latarnya.

---

## 4. Sistem Spacing dan Tata Letak

Sistem layout menggunakan grid modular berbasis kelipatan **4px dan 8px** untuk membentuk ritme yang konsisten di seluruh breakpoint.

### Skala Spacing (*Spacing Scale*)

```css
:root {
  --space-1: 0.25rem;   /* 4px  - Micro spacing, tag gap minimal */
  --space-2: 0.50rem;   /* 8px  - Inner tag padding, tight element gap */
  --space-3: 0.75rem;   /* 12px - Button vertical padding, small gap */
  --space-4: 1.00rem;   /* 16px - Default gap, small grid gutter */
  --space-5: 1.50rem;   /* 24px - Medium gap, section sub-spacing */
  --space-6: 2.00rem;   /* 32px - Item spacing, inner spacing */
  --space-7: 3.00rem;   /* 48px - Subsection spacing, large gap */
  --space-8: 4.00rem;   /* 64px - Editorial block separation */
  --space-9: 5.00rem;   /* 80px - Minimum desktop section padding */
  --space-10: 6.00rem;  /* 96px - Generous desktop section padding */
  --space-11: 7.50rem;  /* 120px - Hero section top padding */

  /* Dedicated container gutters: padding tepi kontainer */
  --container-gutter-mobile: 1.25rem;  /* 20px */
  --container-gutter-tablet: 2.50rem;  /* 40px */
  --container-gutter-desktop: 2.00rem; /* 32px */
}
```

### Sistem Grid dan Breakpoints

| Breakpoint | Rentang Resolusi | Kolom Grid | Gutter Antar Kolom | Container Gutter |
|---|---|---:|---:|---:|
| **Mobile** | `320px`–`767px` | 1 kolom (stack) | `16px` | `20px` |
| **Tablet** | `768px`–`1023px` | 8 kolom | `24px` | `40px` |
| **Desktop** | `≥1024px` | 12 kolom | `32px` | `32px` |

Lebar maksimum kontainer adalah **1200px**, dengan posisi terpusat pada desktop.

### Pengaturan Kontainer (*Max Width Container*)

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: var(--container-gutter-mobile);
}

@media (min-width: 768px) {
  .container {
    padding-inline: var(--container-gutter-tablet);
  }
}

@media (min-width: 1024px) {
  .container {
    padding-inline: var(--container-gutter-desktop);
  }
}
```

`box-sizing: border-box` memastikan lebar maksimum kontainer mencakup padding. Jika aturan `box-sizing` sudah diterapkan secara global pada proyek, deklarasi tersebut tidak perlu diulang.

### Ritme Vertikal dan Pemisah Section (*Section Spacing*)

1. **Jarak antar-section:** pada desktop minimal `80px` (`--space-9`), dengan rekomendasi ideal `96px–112px`. Pada mobile, jarak vertikal berkisar `56px–64px`.
2. **Pemisah struktural:** pergantian section dapat ditandai dengan garis horizontal tipis `1px` menggunakan `--color-border` yang melintasi kontainer, atau pergantian latar yang lembut antara `--color-bg` dan `--color-accent-soft`.
3. Hindari border box tebal sebagai pemisah utama antarseksi.

---

## 5. Panduan Komponen

Komponen mengikuti estetika publikasi editorial: batas tepi yang tertahan, tipografi rapi, dan tombol tegas tanpa bayangan dekoratif (*no drop-shadows*).

### 5.1 Navigasi (*Header & Navigation*)

- **Perilaku:** header menempel di bagian atas layar (*sticky top*).
- **Latar dan garis tepi:** gunakan `--color-surface` dengan transparansi `rgba(255, 255, 255, 0.95)` dan *backdrop blur* ringan `8px`. Garis bawah menggunakan border `1px` `--color-border`.
- **Tinggi bar:** `64px` pada desktop dan `56px` pada mobile.
- **Elemen navigasi:**
  - Kiri: logo teks atau inisial nama, misalnya “MUHAMMAD RIZKI” atau “M. RIZKI”, menggunakan DM Sans 600, uppercase, ukuran `14px`, dan letter-spacing `0.05em`.
  - Desktop: link anchor menuju Tentang, Pengalaman, Proyek, Keahlian, Pendidikan, Organisasi, dan Kontak.
  - Active state: link aktif menggunakan `--color-accent` dan garis bawah halus `2px`.
  - Sisi kanan: language toggle `ID | EN`.
  - Mobile: ikon hamburger dengan garis bersih `2px`. Saat dibuka, drawer muncul dari kanan atau atas dengan transisi halus dan latar `--color-surface`.

#### Language Toggle (`ID | EN`)

- `ID` dan `EN` dipisahkan oleh karakter pipa (`|`).
- Bahasa aktif menggunakan weight 700 dan warna `--color-accent`.
- Bahasa tidak aktif menggunakan weight 400 dan warna `--color-text-secondary`, lalu berubah ke `--color-text-primary` saat hover.

### 5.2 Tombol (*Buttons*)

Tombol memiliki bentuk tegas dengan `border-radius` maksimal `4px`; nilai utama yang digunakan adalah `2px`.

| Tipe Tombol | Visual Default | Visual Hover | Visual Focus (`:focus-visible`) | Penggunaan |
|---|---|---|---|---|
| **Primary Button** | Background `--color-accent`; teks `--color-surface`; tanpa border; radius `2px`. | Background menggunakan turunan warna accent yang lebih gelap, misalnya `color-mix(in srgb, var(--color-accent) 85%, var(--color-text-primary))`; tanpa transform; transisi `200ms ease`. | Outline `2px solid var(--color-accent)` dengan offset `3px`. | CTA utama, misalnya “Lihat Proyek”. |
| **Secondary Button** | Background transparan; teks dan border `--color-accent`; border `1.5px`; radius `2px`. | Background `--color-accent-soft`; teks tetap `--color-accent`; transisi `200ms ease`. | Outline `2px solid var(--color-accent)` dengan offset `3px`. | CTA sekunder, misalnya “Unduh CV” setelah file tersedia. |
| **Text Link** | Teks `--color-text-primary`; garis bawah `1px solid --color-border` dengan jarak `4px`. | Teks dan garis bawah berubah ke `--color-accent`; ketebalan garis `1.5px`; transisi `200ms ease`. | Outline `2px solid var(--color-accent)` dengan offset `2px`. | Link detail proyek dan link kembali. |

Warna hover tombol primer harus tetap berasal dari turunan `--color-accent`, bukan token warna utama baru. Pastikan kontras teks tombol tetap memadai pada state default maupun hover.

**State tombol Unduh CV:** jika file PDF CV belum tersedia, tombol harus disembunyikan atau dinonaktifkan dengan visual opacity `0.45` dan cursor `not-allowed`. Jangan menautkan file kosong atau dummy.

### 5.3 Hero Section dan Profile Portrait

- **Desktop (≥1024px):** gunakan grid dua kolom asimetris.
  - Kolom kiri (sekitar 58%): label kategori (`mono-label`), nama display DM Serif Display `60px`, headline sekitar dua baris, paragraf pengantar ringkas, grup CTA, dan tautan sosial.
  - Kolom kanan (sekitar 42%): foto potret editorial berbentuk persegi panjang dengan rasio `3:4`.
- **Mobile (<768px):** gunakan stack satu kolom. Teks pengantar dan CTA tampil lebih dahulu, kemudian foto potret di bawah grup CTA.

#### Spesifikasi Frame Foto Potret (3:4 Editorial Crop)

- Rasio aspek tetap `3:4`, misalnya `360px × 480px`.
- Sudut tegas: `border-radius: 0` atau maksimal `2px`. Jangan gunakan avatar lingkaran.
- Bingkai luar opsional: outline `1px solid var(--color-border)` dengan jarak `8px` dari foto.
- Gunakan foto asli. Jangan menggantinya dengan foto AI, ilustrasi, atau stock photo.

**Placeholder jika foto asli belum tersedia:**

- Gunakan elemen `<div>` dengan rasio aspek `3:4`.
- Background `--color-accent-soft` (`#E6EFEB`).
- Border `1px dashed var(--color-accent)`.
- Teks tengah: `FOTO PROFIL — BELUM TERSEDIA`, menggunakan DM Mono `13px`, weight 500, dan warna `--color-text-primary` (`#1C2421`). Rasio kontras pasangan teks/latar adalah `13.53:1`.
- Placeholder berupa elemen non-gambar dan tidak menggunakan atribut `alt`.

### 5.4 Showcase Proyek (*Alternating Editorial Layout*)

Showcase proyek homepage tidak menggunakan card grid tiga kolom yang seragam. Setiap proyek disajikan dalam komposisi editorial bergantian.

#### Komposisi A — Gambar di Kiri, Narasi di Kanan

Digunakan untuk **Proyek 1 (Emosi Deteksi)** dan **Proyek 3 (Teras Kita)**.

- Grid desktop 12 kolom.
- Area visual: kolom 1–7, menggunakan screenshot proyek dalam frame yang bersih dengan rasio `16:10` atau `3:2`.
- Area konten: kolom 8–12, berisi nomor proyek, judul (`h3`), subjudul kategori, ringkasan 2–3 kalimat, tag teknologi, dan tautan “Lihat Detail Proyek →”.

#### Komposisi B — Narasi di Kiri, Gambar di Kanan

Digunakan untuk **Proyek 2 (SIM-YANTEK)**.

- Grid desktop 12 kolom.
- Area konten: kolom 1–5, berisi nomor proyek, judul, keterangan bahwa pengerjaan dilakukan dengan bimbingan mentor magang PLN, tag teknologi yang sudah terverifikasi, dan tautan detail.
- Area visual: kolom 6–12, menampilkan screenshot sistem dengan rasio yang konsisten, disarankan `16:10`.

#### Tampilan Mobile

Seluruh proyek menjadi stack vertikal satu kolom dengan urutan yang sama:

1. Nomor dan judul proyek.
2. Gambar proyek.
3. Ringkasan dan tag teknologi.
4. Link detail proyek.

Informasi, screenshot, teknologi, dan kontribusi pada setiap proyek harus faktual. Jangan mengarang fitur, metrik, atau kontribusi yang belum dikonfirmasi.

### 5.5 Technology Tags / Chips

- **Bentuk:** badge persegi panjang dengan `border-radius: 4px`.
- **Background:** `--color-accent-soft` (`#E6EFEB`).
- **Teks:** `--color-text-primary` (`#1C2421`), DM Mono, ukuran `12px` pada mobile dan `13px` pada desktop, weight 500.
- **Border:** `1px solid rgba(71, 111, 103, 0.15)`.
- **Padding:** `4px 10px`.
- Jangan menambahkan persentase kecakapan, rating bintang, atau progress bar.

### 5.6 Timeline Pengalaman (*Experience List*)

Pengalaman disajikan sebagai daftar editorial terstruktur, bukan kotak-kotak kartu.

- **Kolom kiri (desktop sekitar 30%):** tanggal atau durasi dan lokasi, menggunakan DM Mono `13px` serta `--color-text-secondary` pada latar dengan kontras memadai.
- **Kolom kanan (desktop sekitar 70%):** judul peran (`h3`), nama organisasi menggunakan DM Sans 600 dan `--color-accent`, serta poin deskripsi yang menjelaskan tindakan, alat, dan kontribusi.
- Gunakan garis tipis vertikal atau horizontal sebagai pemisah editorial.
- Tanggal, durasi, dan kontribusi yang belum diketahui tidak boleh dibuat-buat.

### 5.7 Section Heading dan Editorial Metadata

Setiap section homepage dibuka dengan pola editorial yang konsisten.

```html
<header class="section-header">
  <span class="section-number">01 / RIWAYAT</span>
  <h2 class="section-title">Pengalaman Kerja</h2>
  <div class="section-divider"></div>
</header>
```

- **Nomor section (`.section-number`):** DM Mono `13px`, warna `--color-accent`, letter-spacing `0.08em`, uppercase.
- **Judul section (`.section-title`):** DM Sans `32px` pada desktop dan `26px` pada mobile, weight 700, warna `--color-text-primary`.
- **Divider (`.section-divider`):** garis `1px` `--color-border` selebar kontainer.

### 5.8 Prinsip Pemakaian Card (*Card Usage Rule*)

Jangan membungkus seluruh konten ke dalam card berborder tebal yang berulang. Card hanya digunakan secara terbatas untuk:

1. Kartu ringkasan kontak di footer, hanya jika memang diperlukan dan tetap sesuai pendekatan editorial.
2. Dialog atau drawer menu navigasi mobile.
3. Blockquote atau callout untuk informasi faktual tertentu, misalnya sorotan IPK 3.58.

**Contact form tidak digunakan pada rilis awal** sesuai Design Brief v1.2. Selebihnya, gunakan tipografi, garis editorial, dan whitespace untuk membentuk hierarki konten.

---

## 6. Perilaku Responsif

Website dirancang dengan filosofi *responsive-first* agar nyaman digunakan recruiter melalui smartphone maupun layar workstation.

### Matriks Perubahan Layout Antar-Breakpoint

| Elemen Antarmuka | Mobile (<768px) | Tablet (768px–1023px) | Desktop (≥1024px) |
|---|---|---|---|
| **Grid utama** | 1 kolom vertikal | 8 kolom | 12 kolom, max-width 1200px |
| **Hero layout** | Stack: teks dan CTA dahulu, foto di bawah | 2 kolom proporsional, teks sekitar 50% dan foto 50% | 2 kolom asimetris, teks sekitar 58% dan foto 42% |
| **Ukuran potret** | Lebar mengikuti kontainer, maksimum sekitar 320px; tinggi mengikuti rasio 3:4 (sekitar 426px) | Lebar sekitar 300px; tinggi sekitar 400px | Lebar sekitar 360–380px; tinggi sekitar 480–506px |
| **Showcase proyek** | Stack: nomor dan judul, gambar, ringkasan dan tag, link detail | Grid 8 kolom berimbang | Komposisi editorial bergantian A dan B |
| **Navigasi atas** | Ikon hamburger dan drawer | Link teks ringkas dan toggle bahasa | Link teks penuh dan toggle bahasa ID/EN |
| **Padding section** | Vertikal `56px–64px` | Vertikal `72px–80px` | Vertikal `80px–112px` |
| **Gutter antar kolom** | `16px` | `24px` | `32px` |
| **Container gutter** | `20px` | `40px` | `32px` |

---

## 7. Gerakan dan Interaksi

Interaksi pada Editorial Swiss Minimalist bersifat **tenang, presisi, dan fungsional**. Gerakan memberikan umpan balik status, bukan mendominasi perhatian pembaca.

### Aturan Waktu dan Kurva Easing

```css
:root {
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 300ms;
  --ease-editorial: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-standard: ease;
}
```

- **Transisi standar:** `200ms–250ms`, menggunakan `ease` atau `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Hover link teks:** perubahan warna dari `--color-text-primary` menjadi `--color-accent` dalam `200ms`.
- **Hover tombol:** perubahan kecerahan atau warna latar turunan token, tanpa pembesaran skala.
- **Hover visual proyek:** perubahan opacity atau kecerahan yang sangat halus, misalnya `brightness(1.02)`, hanya saat visual berada di dalam tautan detail yang dapat diakses.
- **Scroll entry animation:** gunakan *fade-in-up* secara selektif, dengan translasi maksimal `12px` ke `0px`, durasi sekitar `300ms`, dan opacity `0` ke `1`. Terapkan hanya pada section atau heading utama saat memasuki viewport, misalnya melalui `IntersectionObserver`.

### Kepatuhan `prefers-reduced-motion`

Preferensi pengurangan gerakan pada sistem operasi pengguna harus dihormati.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Larangan Mutlak Gerakan

- Tidak menggunakan video autoplay.
- Tidak menggunakan animasi latar belakang berulang, partikel kanvas, atau efek dekoratif yang terus bergerak.
- Tidak menggunakan efek ketikan mesin tik (*typewriter effect*) yang menghambat pembacaan.
- Tidak menggunakan animasi melayang atau paralaks berlebihan.

---

## 8. Standar Aksesibilitas

Aksesibilitas merupakan bagian dari integritas desain. Target rancangan adalah **WCAG 2.1 Level AA**. Dokumen desain ini menetapkan aturan visual dan struktural; kepatuhan akhir hanya dapat dinyatakan setelah implementasi diuji.

### 8.1 Rasio Kontras Visual

- Teks normal wajib memiliki rasio kontras minimal **4.5:1**.
- Teks besar wajib memiliki rasio kontras minimal **3.0:1**. Teks besar berarti minimal 18pt regular atau 14pt bold, setara sekitar 24 CSS px regular atau 18.67 CSS px bold.
- Ikuti matriks kontras pada Bagian 3. Teks normal di atas `--color-accent-soft` wajib menggunakan `--color-text-primary` (`13.53:1`).
- Jangan gunakan `--color-text-secondary` di atas `--color-accent-soft` untuk teks normal karena rasionya `4.32:1`.
- **Kontras non-teks (WCAG 2.1 SC 1.4.11):** informasi visual yang diperlukan untuk mengidentifikasi komponen antarmuka dan statusnya, serta bagian grafis yang diperlukan untuk memahami konten, wajib memiliki rasio kontras minimal **3:1 terhadap warna yang bersebelahan**. Ketentuan ini berlaku pada implementasi visual kontrol dan indikatornya; jangan mengandalkan `--color-border` yang berkontras rendah sebagai satu-satunya pembeda.

### 8.2 Indikator Fokus Visual Keyboard (*Focus Indicator*)

- Semua elemen interaktif seperti `<a>`, `<button>`, dan kontrol input harus memiliki indikator fokus keyboard yang terlihat saat dijangkau menggunakan tombol `Tab`.
- Gunakan indikator fokus yang jelas dan pisahkan tampilannya dari efek hover pointer.

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}
```

- Jangan menghilangkan outline fokus (`outline: none` atau `outline: 0`) tanpa menyediakan indikator pengganti yang setara dan terlihat jelas.

### 8.3 Struktur Semantik HTML5

- Gunakan landmark HTML5 sesuai fungsinya: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, dan `<footer>`.
- Gunakan satu `<h1>` utama per halaman, diikuti hierarki heading yang runtut: `<h2>` untuk section dan `<h3>` untuk sub-item.
- Jangan melompati tingkat heading, misalnya dari `<h2>` langsung ke `<h4>`.

### 8.4 Target Area Sentuh (*Touch Target Size*)

- Tombol, kontrol interaktif, ikon menu, dan tautan navigasi mobile **wajib** memiliki area interaksi minimal **44 × 44 CSS px**.
- Ukuran 44 × 44 CSS px merupakan standar desain internal yang lebih ketat dan selaras dengan WCAG 2.1 Success Criterion 2.5.5 Level AAA, dengan tetap memperhatikan pengecualian yang tercantum pada kriteria tersebut.
- Standar internal ini tidak boleh digunakan sebagai bukti tunggal bahwa seluruh situs telah memenuhi WCAG.

### 8.5 Aksesibilitas Gambar dan Media

- Semua gambar informatif wajib memiliki atribut `alt` yang faktual dan deskriptif, misalnya `alt="Tangkapan layar antarmuka aplikasi Emosi Deteksi"` atau `alt="Foto potret Muhammad Rizki"`.
- Gambar atau ornamen yang murni dekoratif wajib menggunakan `alt=""` agar diabaikan pembaca layar.
- Placeholder berupa elemen `<div>` non-gambar tidak menggunakan atribut `alt`. Teks di dalam placeholder harus tetap tersedia sebagai teks HTML.

### 8.6 Pengujian Sebelum Klaim Kepatuhan

Sebelum menyatakan situs memenuhi WCAG 2.1 Level AA, lakukan pengujian pada implementasi akhir, termasuk:

- Pemeriksaan kontras warna pada seluruh kombinasi yang benar-benar digunakan.
- Navigasi keyboard dan visibilitas fokus.
- Penggunaan pembaca layar untuk struktur, label, dan alternatif gambar.
- Pemeriksaan responsif dan pembesaran teks.
- Audit otomatis menggunakan alat seperti Lighthouse atau axe, dilengkapi pemeriksaan manual.

Dokumen Design System saja tidak cukup untuk menyatakan kepatuhan penuh.

---

## 9. Ringkasan Keputusan Design System

Tabel berikut merangkum keputusan yang menjadi acuan implementasi antarmuka portofolio Muhammad Rizki.

| Kategori | Keputusan Resmi |
|---|---|
| **Arah dan estetika** | Editorial Swiss Minimalist kontemporer; warm off-white, tipografi editorial, restrained borders, dan tanpa bayangan dekoratif (*no drop-shadows*). |
| **Tipografi display** | DM Serif Display — `60px` desktop dan `40px` mobile untuk nama hero. |
| **Tipografi teks dan UI** | DM Sans — body text desktop `16px`, line-height `1.65`, dengan panjang baris sekitar 65–70 karakter. |
| **Tipografi teknis** | DM Mono — `13px` desktop untuk nomor section, timestamp, dan label teknologi; `12px` mobile. |
| **Skala tipografi** | Tailored modular scale yang disesuaikan secara manual untuk desktop dan mobile. |
| **Tujuh token warna** | `--color-bg: #F7F7F3`; `--color-surface: #FFFFFF`; `--color-text-primary: #1C2421`; `--color-text-secondary: #66716C`; `--color-accent: #476F67`; `--color-accent-soft: #E6EFEB`; `--color-border: #DCE2DC`. |
| **Aturan kontras** | Teks normal minimal `4.5:1`; teks besar minimal `3.0:1`. Teks normal di atas accent-soft wajib memakai text-primary (`13.53:1`). |
| **Grid dan kontainer** | 12 kolom desktop, 8 kolom tablet, 1 kolom mobile; max-width `1200px`; `box-sizing: border-box`. |
| **Container gutter** | `20px` mobile, `40px` tablet, `32px` desktop. |
| **Gutter antar kolom** | `16px` mobile, `24px` tablet, `32px` desktop. |
| **Foto potret hero** | Crop persegi panjang rasio `3:4`; desktop di kanan (sekitar 42%), mobile di bawah teks dan CTA; tidak menggunakan avatar lingkaran. |
| **Showcase proyek** | Layout alternating pada desktop: proyek 1 dan 3 gambar di kiri; proyek 2 narasi di kiri. Pada mobile: nomor dan judul, gambar, ringkasan dan tag, link detail. |
| **Halaman detail proyek** | `/proyek/emosi-deteksi`, `/proyek/sim-yantek`, dan `/proyek/teras-kita`; metadata title, description, dan Open Graph tersedia melalui prerender/static generation sesuai Design Brief. |
| **Tag keahlian** | Chip berlatar accent-soft dengan teks text-primary; tanpa persentase, rating bintang, atau progress bar. |
| **Pengalaman kerja** | Daftar editorial terstruktur dengan divider tipis, bukan kumpulan card. |
| **Pemakaian card** | Terbatas pada ringkasan kontak footer bila diperlukan, drawer/dialog mobile, dan callout faktual. Tidak ada contact form pada rilis awal. |
| **Tombol dan interaksi** | Primary button menggunakan accent dan turunan warna accent untuk hover; radius utama `2px`; focus-visible terpisah dari hover. |
| **Gerakan** | Transisi umumnya `200–250ms`; token durasi `150ms`, `250ms`, dan `300ms`; dukungan `prefers-reduced-motion`; tanpa autoplay, animasi latar berulang, atau typewriter effect. |
| **Aksesibilitas** | Target desain WCAG 2.1 Level AA; kontras teks dan non-teks sesuai kriteria, focus indicator terlihat, struktur semantik, alt text yang sesuai, dan target sentuh wajib `44 × 44 CSS px` sebagai standar internal. Implementasi wajib diuji sebelum klaim kepatuhan. |

---

**Dokumen ini merupakan hasil konsolidasi Design System v1.0 dan revisi Antigravity menjadi satu draf Design System v1.1 yang konsisten.**  
**Disusun pada 21 November 2026 — Menunggu pemeriksaan dan persetujuan Muhammad Rizki sebelum menjadi acuan final implementasi.**
