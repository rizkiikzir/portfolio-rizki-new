# Technical Architecture — Website Portofolio Pribadi Muhammad Rizki

**Versi Dokumen:** 1.0  
**Tanggal:** 21 November 2026  
**Status:** Draft — Awaiting Approval  
**Acuan Utama:** `docs/design-brief-final.md` (Design Brief v1.2) dan `docs/design-system.md` (Design System v1.1)

---

## Daftar Isi

1. [Tujuan dan Prinsip Arsitektur](#1-tujuan-dan-prinsip-arsitektur)
2. [Stack Teknologi](#2-stack-teknologi)
3. [Strategi Rendering dan Routing](#3-strategi-rendering-dan-routing)
4. [Arsitektur Konten dan Internasionalisasi](#4-arsitektur-konten-dan-internasionalisasi)
5. [Struktur Direktori](#5-struktur-direktori)
6. [Arsitektur Komponen dan Styling](#6-arsitektur-komponen-dan-styling)
7. [SEO dan Metadata](#7-seo-dan-metadata)
8. [Aset, Performa, dan Aksesibilitas](#8-aset-performa-dan-aksesibilitas)
9. [Privasi dan Batasan Fitur Rilis Awal](#9-privasi-dan-batasan-fitur-rilis-awal)
10. [Pengujian dan Quality Checks](#10-pengujian-dan-quality-checks)
11. [Build dan Deployment](#11-build-dan-deployment)
12. [Informasi yang Masih Dibutuhkan](#12-informasi-yang-masih-dibutuhkan)
13. [Kriteria Penerimaan Arsitektur](#13-kriteria-penerimaan-arsitektur)
14. [Referensi Teknis](#14-referensi-teknis)

---

## 1. Tujuan dan Prinsip Arsitektur

Dokumen ini menjelaskan fondasi teknis untuk membangun website portofolio pribadi Muhammad Rizki berdasarkan keputusan visual dan pengalaman pengguna yang telah ditetapkan dalam Design Brief v1.2 dan Design System v1.1.

Arsitektur harus mendukung website portofolio yang:

- Cepat dimuat dan nyaman digunakan pada desktop, tablet, maupun mobile.
- Mengutamakan konten profil dan proyek, bukan fungsi aplikasi yang kompleks.
- Memiliki homepage satu halaman dengan navigasi anchor serta halaman detail untuk tiga proyek utama.
- Mendukung Bahasa Indonesia sebagai bahasa default dan Bahasa Inggris sebagai pilihan kedua.
- Menghasilkan HTML yang telah dirender saat proses build agar konten utama dan metadata tersedia tanpa menunggu JavaScript di browser.
- Mudah dipahami, diperbarui, dan dipelihara oleh pemilik website yang masih mengembangkan kemampuan coding.
- Mengikuti Design System yang sudah disetujui tanpa menambahkan pola visual atau fitur yang tidak diminta.

### Prinsip Arsitektur

1. **Content-first:** sebagian besar halaman berisi teks, gambar, dan informasi proyek.
2. **Static-first:** gunakan halaman statis hasil build; server dan database tidak diperlukan untuk rilis awal.
3. **Progressive enhancement:** konten dan navigasi utama tetap dapat digunakan tanpa interaksi JavaScript yang kompleks.
4. **Minimal dependencies:** gunakan fitur bawaan framework dan browser sebelum menambahkan library.
5. **Single source of truth:** token desain, data profil, data pengalaman, dan data proyek disimpan secara terstruktur agar tidak tersebar dan berulang di banyak file.
6. **Maintainability:** struktur folder dan komponen dibuat jelas, tetapi tidak dipecah menjadi abstraksi yang tidak diperlukan.
7. **Truthful content:** jangan membuat klaim, statistik, tanggal, tangkapan layar, atau detail kontribusi proyek yang belum dikonfirmasi.

---

## 2. Stack Teknologi

### 2.1 Stack yang Direkomendasikan

| Bagian | Teknologi | Tanggung Jawab | Alasan |
|---|---|---|---|
| Framework website | **Astro** | Struktur halaman, layout, komponen, routing, dan proses build | Cocok untuk website yang berfokus pada konten dan menghasilkan HTML statis. |
| Bahasa utama | **TypeScript** | Data terstruktur, props komponen, dan logika kecil | Membantu mendeteksi kesalahan tipe dan menjaga konsistensi data. |
| Markup | **HTML semantik melalui Astro components** | Struktur konten dan elemen antarmuka | Ringan, mudah diperiksa, dan mendukung aksesibilitas. |
| Styling | **Vanilla CSS** | Design tokens, layout, responsive design, dan state visual | Memberi kontrol langsung terhadap Design System tanpa menambahkan framework CSS. |
| Interaksi browser | **JavaScript/TypeScript seperlunya** | Menu mobile dan interaksi kecil lainnya | Hanya digunakan ketika HTML dan CSS tidak cukup. |
| Rendering | **Static Site Generation (SSG)** | Membuat halaman HTML ketika build | Sesuai untuk portofolio dengan konten yang tidak berubah secara real-time. |
| Package manager | **npm** | Instalasi dan pengelolaan dependency | Menggunakan tooling Node.js yang umum dan mudah diikuti. |
| Version control | **Git dan GitHub** | Riwayat perubahan dan penyimpanan repository | Memudahkan pencadangan, kolaborasi, dan deployment otomatis. |

### 2.2 Teknologi yang Tidak Digunakan pada Rilis Awal

Untuk menjaga project tetap sederhana, rilis awal **tidak menggunakan**:

- React atau framework UI tambahan. Komponen Astro sudah cukup untuk kebutuhan website ini.
- Tailwind CSS atau framework CSS lain. Styling mengikuti token dan aturan Vanilla CSS pada Design System.
- Backend/API khusus.
- Database.
- CMS atau sistem administrasi konten.
- State-management library.
- Authentication atau login.
- Analytics dan tracking.
- Contact form.

Teknologi tersebut tidak dilarang untuk selamanya. Namun, penambahannya harus didasarkan pada kebutuhan baru yang nyata dan disetujui, bukan sekadar mengikuti tren.

### 2.3 Runtime Pengembangan

- Sistem operasi pengembangan: Windows.
- Editor: Visual Studio Code.
- Terminal: terminal bawaan VS Code atau Windows PowerShell.
- Runtime: Node.js versi LTS yang memenuhi persyaratan versi Astro stabil pada saat instalasi.
- Package manager: npm.

**Catatan versi:** dokumentasi instalasi Astro yang diperiksa pada 21 November 2026 mencantumkan Node.js `v22.23.4` atau lebih tinggi sebagai prasyarat. Periksa kembali persyaratan resmi saat instalasi karena persyaratan versi dapat berubah.

---

## 3. Strategi Rendering dan Routing

### 3.1 Rendering

Gunakan **Astro static output** (`output: 'static'`). Halaman akan dirender menjadi HTML pada saat proses build dan hasilnya disimpan ke direktori `dist/`.

Konsekuensi arsitektur:

- Homepage dan halaman detail proyek tersedia sebagai file HTML hasil build.
- Konten utama tidak bergantung pada JavaScript untuk ditampilkan.
- Metadata halaman dapat dimasukkan ke HTML ketika build.
- Tidak diperlukan server aplikasi yang terus berjalan untuk menyajikan konten portofolio.
- Perubahan konten harus diikuti proses build dan deployment ulang.

Tidak ada kebutuhan untuk server-side rendering (SSR) atau on-demand rendering pada rilis awal.

### 3.2 Routing Homepage dan Detail Proyek

Astro menggunakan file-based routing dari direktori `src/pages/`.

Rute Bahasa Indonesia yang harus dipertahankan:

| Halaman | URL |
|---|---|
| Homepage | `/` |
| Emosi Deteksi | `/proyek/emosi-deteksi` |
| SIM-YANTEK | `/proyek/sim-yantek` |
| Teras Kita | `/proyek/teras-kita` |

Rute Bahasa Inggris menggunakan prefix `/en/` agar versi Indonesia tetap menjadi rute default dan URL yang telah ditetapkan tidak berubah:

| Halaman | URL |
|---|---|
| Homepage English | `/en/` |
| Emosi Deteksi English | `/en/projects/emosi-deteksi` |
| SIM-YANTEK English | `/en/projects/sim-yantek` |
| Teras Kita English | `/en/projects/teras-kita` |

Slug proyek dipertahankan pada kedua bahasa untuk mempermudah pemetaan halaman yang sama. Label navigasi dan konten halaman tetap diterjemahkan sesuai bahasa yang aktif.

### 3.3 Konfigurasi Routing i18n

Gunakan fitur i18n bawaan Astro dengan:

- Locale yang didukung: `id` dan `en`.
- Default locale: `id`.
- `prefixDefaultLocale: false`, sehingga URL Bahasa Indonesia tidak memakai prefix `/id/`.
- URL Bahasa Inggris memakai prefix `/en/`.
- Setiap halaman harus memiliki pasangan bahasa yang sesuai sebelum language switcher mengarahkan pengunjung ke versi tersebut.

Rancangan konfigurasi awal `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

Konfigurasi ini merupakan rancangan arsitektur. File konfigurasi final akan dibuat dan diuji setelah project Astro diinisialisasi.

### 3.4 Pembuatan Halaman Detail Proyek

Gunakan dynamic route Astro dengan `getStaticPaths()` untuk menghasilkan tiga halaman detail proyek dari data yang tersimpan di source project.

Setiap slug yang didukung harus menghasilkan halaman statis saat build. Slug yang tidak dikenal tidak boleh menampilkan data proyek yang salah; tampilkan halaman 404.

---

## 4. Arsitektur Konten dan Internasionalisasi

### 4.1 Pengelolaan Konten

Konten portofolio disimpan sebagai data lokal menggunakan file TypeScript. Tidak diperlukan database, CMS, atau API eksternal.

Data yang direncanakan:

- Profil singkat dan informasi hero.
- Pengalaman kerja dan magang.
- Daftar proyek.
- Pendidikan.
- Organisasi.
- Kelompok keterampilan.
- Navigasi dan label antarmuka.

Pisahkan data dari komponen tampilan. Dengan demikian, perubahan deskripsi atau terjemahan tidak mengharuskan perubahan pada struktur layout.

### 4.2 Struktur Data Multibahasa

Data yang ditampilkan kepada pengunjung harus memiliki teks Bahasa Indonesia dan Bahasa Inggris. Gunakan struktur bertipe yang jelas, misalnya objek `id` dan `en` dalam satu entri data.

Contoh pola data konseptual:

```ts
export type LocalizedText = {
  id: string;
  en: string;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  summary: LocalizedText;
};
```

Contoh tersebut hanya menunjukkan pola tipe data, bukan isi final seluruh data proyek.

### 4.3 Aturan Konten

- Bahasa Indonesia menjadi konten default.
- Bahasa Inggris harus merupakan terjemahan yang wajar, bukan terjemahan mesin yang mengubah makna pengalaman.
- Nama proyek, nama institusi, nama teknologi, dan nama organisasi tetap menggunakan nama resminya.
- Tanggal, angka, IPK, nilai, hasil pengujian, dan kontribusi proyek tidak boleh direka.
- Informasi yang belum tersedia ditandai sebagai kebutuhan konten internal dan tidak ditampilkan sebagai klaim faktual di website.
- Language switcher mengarah ke halaman padanan dalam bahasa lain, bukan sekadar mengganti label tombol.
- Pilihan bahasa tidak boleh menyebabkan pengunjung diarahkan secara paksa berdasarkan deteksi browser pada rilis awal. Homepage root tetap menggunakan Bahasa Indonesia.

---

## 5. Struktur Direktori

Struktur berikut merupakan target struktur project setelah Astro diinisialisasi. Folder dan file akan dibuat bertahap ketika implementasi dimulai; tidak perlu membuat semuanya secara manual sekarang.

```text
portfolio-muhammad-rizki/
├── docs/
│   ├── design-brief-final.md
│   ├── design-system.md
│   └── technical-architecture.md
│
├── public/
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── profile/
│   │       └── projects/
│   │           ├── emosi-deteksi/
│   │           ├── sim-yantek/
│   │           └── teras-kita/
│   │
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── ButtonLink.astro
│   │   ├── SectionHeading.astro
│   │   ├── HeroSection.astro
│   │   ├── ExperienceList.astro
│   │   ├── ProjectShowcase.astro
│   │   ├── TechnologyTag.astro
│   │   └── SiteFooter.astro
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ProjectLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├── proyek/
│   │   │   └── [slug].astro
│   │   └── en/
│   │       ├── index.astro
│   │       └── projects/
│   │           └── [slug].astro
│   │
│   ├── data/
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── education.ts
│   │   ├── organizations.ts
│   │   ├── skills.ts
│   │   └── navigation.ts
│   │
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── components.css
│   │
│   └── scripts/
│       └── mobile-menu.ts
│
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

### Catatan Struktur

- `docs/` menyimpan dokumen perencanaan yang sudah disetujui dan dokumen arsitektur.
- `public/` menyimpan aset yang disajikan apa adanya, seperti favicon dan `robots.txt`.
- `src/assets/images/` menyimpan gambar lokal yang akan diproses oleh pipeline aset Astro.
- `components/` menyimpan bagian UI yang dapat digunakan ulang.
- `layouts/` menyimpan kerangka halaman umum dan halaman detail proyek.
- `pages/` menentukan URL website melalui file-based routing.
- `data/` menyimpan konten portofolio terstruktur dan terpisah dari tampilan.
- `styles/` menyimpan token warna, tipografi, layout, responsive rules, dan styling komponen.
- `scripts/` hanya menyimpan script browser yang benar-benar diperlukan.

Nama atau jumlah file dapat disederhanakan saat implementasi jika terbukti tidak diperlukan. Penyederhanaan tidak boleh mengubah keputusan desain atau rute yang telah ditetapkan.

---

## 6. Arsitektur Komponen dan Styling

### 6.1 Layout Utama

**`BaseLayout.astro`** bertanggung jawab atas:

- Struktur HTML dasar.
- Atribut bahasa dokumen (`lang="id"` atau `lang="en"`).
- Metadata SEO dasar.
- Pemanggilan stylesheet global.
- Header, slot konten halaman, dan footer.

**`ProjectLayout.astro`** menggunakan fondasi BaseLayout dan menyediakan struktur artikel/detail proyek yang konsisten tanpa mengubah karakter editorial.

### 6.2 Komponen UI

| Komponen | Tanggung Jawab |
|---|---|
| `SiteHeader.astro` | Header sticky, logo teks, navigasi desktop, dan pemicu menu mobile. |
| `LanguageSwitcher.astro` | Tautan antara halaman Bahasa Indonesia dan padanan Bahasa Inggris. |
| `ButtonLink.astro` | Gaya tautan yang tampil sebagai tombol primary, secondary, atau text link sesuai kebutuhan. |
| `SectionHeading.astro` | Nomor section, judul, dan divider editorial. |
| `HeroSection.astro` | Intro, headline, CTA, tautan sosial, dan foto/placeholder. |
| `ExperienceList.astro` | Daftar pengalaman kerja dan magang tanpa card berulang. |
| `ProjectShowcase.astro` | Showcase proyek dengan komposisi desktop alternating dan urutan mobile yang disetujui. |
| `TechnologyTag.astro` | Label teknologi dengan warna dan tipografi sesuai Design System. |
| `SiteFooter.astro` | Informasi penutup dan tautan yang memang sudah tersedia. |

Jangan membuat satu komponen card generik untuk membungkus seluruh section. Komponen harus mengikuti pola editorial dalam Design System.

### 6.3 Styling

Gunakan Vanilla CSS dengan pembagian tanggung jawab:

- `tokens.css`: tujuh token warna resmi, font family, spacing scale, container gutter, dan token motion yang disetujui.
- `global.css`: reset dasar, `box-sizing`, tipografi global, elemen HTML, container, dan aturan responsive umum.
- `components.css`: styling komponen dan variasi state.

Aturan penting:

- Nilai token harus merujuk pada Design System v1.1; jangan membuat salinan nilai yang berbeda di banyak file.
- Terapkan `box-sizing: border-box` pada `*`, `*::before`, dan `*::after`.
- Container menggunakan max-width 1200px dan gutter 20px (mobile), 40px (tablet), serta 32px (desktop).
- Column gap mengikuti 16px (mobile), 24px (tablet), dan 32px (desktop).
- Breakpoint utama: mobile di bawah 768px, tablet 768–1023px, desktop mulai 1024px.
- Jangan memperkenalkan warna, font, shadow, radius, atau efek visual baru tanpa persetujuan.

### 6.4 JavaScript dan Interaksi

JavaScript hanya digunakan ketika diperlukan. Interaksi yang direncanakan pada rilis awal:

- Membuka dan menutup menu navigasi mobile.
- Mengelola state `aria-expanded` dan atribut aksesibilitas menu.
- Menutup menu mobile setelah pengunjung memilih tautan.
- Mendukung navigasi anchor dan language switcher melalui tautan HTML biasa.

Menu harus tetap mempunyai struktur tautan HTML yang dapat diakses. Hindari memuat framework JavaScript besar hanya untuk menu mobile atau pergantian bahasa.

---

## 7. SEO dan Metadata

### 7.1 Metadata Per Halaman

Setiap halaman harus mempunyai:

- `<title>` unik dan relevan.
- Meta description yang unik dan faktual.
- Canonical URL setelah domain website ditentukan.
- `lang` dokumen yang sesuai dengan bahasa halaman.
- Open Graph title, description, URL, dan image jika aset gambar yang sesuai sudah tersedia.
- Alternate language (`hreflang`) untuk halaman padanan Indonesia dan Inggris.

### 7.2 Static Metadata

Metadata harus dihasilkan ke HTML ketika build, bukan baru dimasukkan setelah JavaScript berjalan di browser.

Homepage dan setiap halaman detail proyek memiliki metadata masing-masing. Jangan menggunakan satu judul dan deskripsi yang sama untuk seluruh halaman.

### 7.3 Domain, Sitemap, dan Robots

- Domain produksi belum ditentukan. Jangan membuat URL domain final atau canonical palsu.
- Setelah domain tersedia, tetapkan konfigurasi `site` Astro dan buat sitemap.
- `robots.txt` harus mencerminkan domain dan sitemap produksi yang sebenarnya.
- Jangan memblokir halaman portofolio yang memang ingin ditampilkan kepada recruiter.

---

## 8. Aset, Performa, dan Aksesibilitas

### 8.1 Gambar dan Media

- Foto profil harus menggunakan foto asli Muhammad Rizki setelah file diberikan.
- Selama foto asli belum tersedia, gunakan placeholder visual sesuai Design System; jangan membuat atau mengambil foto profil pengganti dari AI/stock.
- Screenshot proyek harus berasal dari proyek yang benar-benar dikerjakan atau disetujui pemiliknya.
- Gambar informatif wajib memiliki alt text yang deskriptif dan faktual.
- Gambar dekoratif wajib menggunakan `alt=""`.
- Gunakan optimasi gambar Astro untuk gambar lokal yang mendukung pipeline tersebut.
- Foto hero yang tampil di area awal halaman tidak boleh sengaja ditunda pemuatannya; gambar proyek di bawah fold dapat menggunakan lazy loading yang sesuai.
- Tetapkan dimensi atau rasio gambar agar layout tidak bergeser saat gambar dimuat.
- Jangan menggunakan video autoplay atau animasi latar belakang berulang.

### 8.2 Performa

- Utamakan HTML dan CSS; kirim JavaScript hanya untuk interaksi yang diperlukan.
- Hindari library besar yang tidak memberikan manfaat jelas.
- Optimalkan ukuran dan format gambar.
- Gunakan font yang telah ditetapkan: DM Serif Display, DM Sans, dan DM Mono. Muat hanya weight/style yang benar-benar dipakai.
- Periksa hasil build dan perilaku halaman pada perangkat desktop serta mobile.
- Jangan mengorbankan keterbacaan atau aksesibilitas demi skor performa.

### 8.3 Aksesibilitas Implementasi

Implementasi harus mengikuti target WCAG 2.1 Level AA dan aturan tambahan yang telah disepakati dalam Design System v1.1, termasuk:

- Kontras teks normal minimum 4.5:1 dan teks besar minimum 3:1.
- Kontras non-teks minimum 3:1 untuk komponen antarmuka dan objek grafis yang diperlukan untuk memahami atau mengoperasikan antarmuka.
- Indikator keyboard `:focus-visible` yang jelas.
- Struktur landmark dan heading HTML semantik.
- Satu H1 per halaman.
- Area interaksi minimum 44×44 CSS px sebagai standar internal wajib.
- Alt text gambar informatif dan alt kosong pada gambar dekoratif.
- Dukungan `prefers-reduced-motion`.
- Menu mobile yang dapat dioperasikan menggunakan keyboard dan pembaca layar.

Kepatuhan penuh tidak boleh diklaim sebelum implementasi diuji, baik secara otomatis maupun manual.

---

## 9. Privasi dan Batasan Fitur Rilis Awal

Untuk rilis awal:

- Tidak ada analytics atau tracking.
- Tidak ada contact form.
- Tidak ada database atau pengumpulan data pengunjung.
- Tidak ada login atau autentikasi.
- Tidak ada backend/API khusus.
- Link email `mailto:` hanya ditampilkan setelah alamat email yang benar diberikan.
- Tombol unduh CV hanya ditampilkan atau diaktifkan setelah file CV PDF final tersedia.
- Link sosial hanya menggunakan URL profil yang sudah dikonfirmasi.

Website menampilkan informasi profesional yang telah disetujui pemilik. Jangan menambahkan data pribadi atau klaim yang belum diberikan.

---

## 10. Pengujian dan Quality Checks

Pengujian dilakukan bertahap selama implementasi dan sebelum deployment.

### 10.1 Pemeriksaan Fungsional

- Semua tautan navigasi anchor mengarah ke section yang benar.
- Semua tautan proyek membuka halaman detail yang sesuai.
- Semua halaman tersedia dalam Bahasa Indonesia dan Bahasa Inggris.
- Language switcher menuju halaman padanan yang benar.
- Menu mobile dapat dibuka, ditutup, dan digunakan dengan keyboard.
- Tautan sosial hanya mengarah ke profil yang benar.
- Link CV dan email tidak ditampilkan sebelum aset/informasi final tersedia.
- Rute yang tidak dikenal menampilkan halaman 404.

### 10.2 Pemeriksaan Visual dan Responsive

Periksa sekurang-kurangnya pada lebar viewport berikut:

- Mobile kecil: 320px.
- Mobile umum: 375px dan 390px.
- Tablet: 768px dan 1023px.
- Desktop: 1024px, 1440px, dan lebih lebar.

Pastikan tidak ada horizontal overflow, teks terpotong, gambar terdistorsi, atau urutan konten yang melanggar Design System.

### 10.3 Pemeriksaan Teknis

- Jalankan development server dan pastikan tidak ada error build.
- Jalankan `npm run build` secara berkala.
- Periksa output HTML untuk memastikan title, description, canonical, dan hreflang dihasilkan dengan benar.
- Periksa tautan yang rusak dan aset yang gagal dimuat.
- Uji keyboard navigation dan `prefers-reduced-motion`.
- Gunakan alat otomatis seperti Lighthouse atau axe sebagai bantuan, bukan satu-satunya bukti aksesibilitas.
- Lakukan pemeriksaan manual sebelum menyatakan website siap dipublikasikan.

### 10.4 Script Project yang Diperlukan

Script dasar yang direncanakan pada `package.json`:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

Script tambahan untuk pemeriksaan TypeScript/Astro dapat ditambahkan ketika dependency pemeriksa yang sesuai dipasang dan dikonfigurasi. Jangan menambahkan script yang tidak dapat dijalankan.

---

## 11. Build dan Deployment

### 11.1 Proses Build

- Development lokal menggunakan `npm run dev`.
- Build produksi menggunakan `npm run build`.
- Preview hasil build lokal menggunakan `npm run preview`.
- Hasil build statis berada di direktori `dist/` secara default.

### 11.2 Target Hosting

Website dapat dipublikasikan ke hosting statis yang mendukung output HTML, CSS, JavaScript, dan aset dari direktori `dist/`.

**Target hosting belum dikunci dalam dokumen ini.** Pemilihan penyedia hosting dilakukan setelah website lolos pengujian lokal, domain diketahui, dan repository GitHub siap dihubungkan.

Persyaratan deployment minimum:

- Menggunakan build command `npm run build`.
- Menggunakan direktori output `dist`.
- Mendukung routing file statis dan halaman 404.
- Dapat dihubungkan ke repository GitHub untuk deployment setelah perubahan di-commit dan di-push.
- Domain produksi dan HTTPS dikonfigurasi sebelum canonical URL dan sitemap final diterbitkan.

Tidak diperlukan adapter SSR selama website tetap menggunakan strategi static output.

---

## 12. Informasi yang Masih Dibutuhkan

Informasi berikut belum boleh ditebak dan perlu dilengkapi ketika masuk ke tahap implementasi/konten:

1. Foto profil asli yang akan digunakan.
2. Screenshot atau gambar pendukung dari masing-masing proyek.
3. Deskripsi final kontribusi pribadi pada SIM-YANTEK dan detail teknologi yang memang digunakan.
4. Deskripsi dan terjemahan final konten proyek dalam Bahasa Inggris.
5. Alamat email yang akan ditampilkan, jika memang ingin ditampilkan.
6. File CV PDF final apabila tombol unduh CV akan diaktifkan.
7. Domain produksi setelah diputuskan.
8. Detail tanggal pengalaman kerja/organisasi yang belum tersedia.

Konten yang belum dikonfirmasi tidak boleh diisi dengan informasi rekaan. Placeholder hanya digunakan selama pengembangan dan harus diganti atau dihilangkan sebelum publikasi.

---

## 13. Kriteria Penerimaan Arsitektur

Technical Architecture dapat disetujui apabila seluruh poin berikut terpenuhi:

- [ ] Astro ditetapkan sebagai framework utama.
- [ ] TypeScript digunakan untuk data dan logika yang membutuhkan tipe.
- [ ] Styling menggunakan Vanilla CSS berdasarkan Design System v1.1.
- [ ] Output website menggunakan static generation.
- [ ] Rute Bahasa Indonesia yang sudah disepakati tetap dipertahankan.
- [ ] Bahasa Inggris menggunakan prefix `/en/` dan memiliki halaman padanan.
- [ ] Konten dipisahkan dari komponen tampilan.
- [ ] Struktur direktori mendukung halaman, komponen, data, aset, dan styling tanpa abstraksi berlebihan.
- [ ] SEO metadata dirender saat build.
- [ ] Tidak ada backend, database, contact form, analytics, atau tracking pada rilis awal.
- [ ] Aturan performa, responsive, aksesibilitas, dan privasi tercakup.
- [ ] Proses build dan deployment mempunyai langkah yang dapat diuji.
- [ ] Tidak ada keputusan dalam dokumen ini yang bertentangan dengan Design Brief v1.2 atau Design System v1.1.

**Status persetujuan:** menunggu pemeriksaan dan persetujuan Muhammad Rizki. Jangan memulai implementasi aplikasi sebelum dokumen ini disetujui.

---

## 14. Referensi Teknis

Dokumentasi resmi yang menjadi rujukan untuk rancangan ini:

- Astro — Install and set up: https://docs.astro.build/en/install-and-setup/
- Astro — Routing: https://docs.astro.build/en/guides/routing/
- Astro — Internationalization (i18n) Routing: https://docs.astro.build/en/guides/internationalization/
- Astro — Configuration Reference: https://docs.astro.build/en/reference/configuration-reference/
- Astro — Deploy your Astro Site: https://docs.astro.build/en/guides/deploy/

---

*Dokumen ini merupakan rancangan Technical Architecture untuk website portofolio pribadi Muhammad Rizki.*  
*Disusun pada 21 November 2026 — Draft, menunggu pemeriksaan dan persetujuan.*
