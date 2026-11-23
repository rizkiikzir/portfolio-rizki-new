# Design Brief — Website Portofolio Pribadi Muhammad Rizki

**Versi dokumen:** 1.2  
**Tanggal:** 21 November 2026  
**Status:** Revised — Awaiting Rizki's Approval

---

## Daftar Isi

1. [Gambaran Umum Proyek](#1-gambaran-umum-proyek)
2. [Tujuan](#2-tujuan)
3. [Target Audiens](#3-target-audiens)
4. [Positioning dan Tone](#4-positioning-dan-tone)
5. [Arah Desain](#5-arah-desain)
6. [Arsitektur Informasi](#6-arsitektur-informasi)
7. [Struktur Halaman dan Kebutuhan Konten](#7-struktur-halaman-dan-kebutuhan-konten)
8. [User Journey Utama](#8-user-journey-utama)
9. [Functional Requirements](#9-functional-requirements)
10. [Non-Functional Requirements](#10-non-functional-requirements)
11. [Aturan Integritas Konten](#11-aturan-integritas-konten)
12. [Acceptance Criteria](#12-acceptance-criteria)
13. [Placeholder dan Open Items](#13-placeholder-dan-open-items)

---

## 1. Gambaran Umum Proyek

Proyek ini adalah **website portofolio pribadi profesional** untuk **Muhammad Rizki**, lulusan Sarjana Terapan Teknik Informatika dari Politeknik Negeri Lhokseumawe (2026). Situs ini berfungsi sebagai kehadiran digital utama Rizki ketika melamar posisi entry-level di bidang pengembangan perangkat lunak, IT support, geographic information systems (GIS), dan computer vision.

Website harus menyajikan informasi yang terverifikasi, jujur, dan akurat mengenai pendidikan, pengalaman kerja, keahlian teknis, keterlibatan organisasi, dan proyek pilihan Rizki. Ini bukan template generik, melainkan website editorial yang dirancang khusus untuk mencerminkan pendekatan kerja Rizki yang teliti, profesional, dan berorientasi pada teknologi.

Homepage adalah **satu halaman scrollable** dengan navigasi berbasis anchor. Konten detail proyek disajikan di **route halaman yang berdedikasi dan dapat dibagikan** (lihat §6). Homepage bersifat statis dan scrollable; route proyek adalah halaman terpisah dengan metadata masing-masing.

| | |
|---|---|
| **Bahasa default situs** | Bahasa Indonesia |
| **Bahasa kedua situs** | English (via toggle) |
| **Bilingual** | Ya — teks Indonesia ditulis terlebih dahulu; English adalah terjemahan setia, bukan rewrite |
| **Bahasa dokumen perencanaan ini** | Bahasa Indonesia |

---

## 2. Tujuan

### Tujuan Utama

Memberikan recruiter dan hiring manager kesan pertama yang jelas, kredibel, dan profesional mengenai kemampuan teknis dan karakter Rizki dalam 30 detik pertama membuka situs.

### Tujuan Sekunder

- Menampilkan keahlian teknis nyata melalui kualitas dan presentasi situs itu sendiri.
- Menyajikan proyek pilihan dengan atribusi yang akurat — membedakan pekerjaan personal dari kontribusi tim dan mentor.
- Menyediakan jalur yang mudah dan tanpa hambatan untuk menghubungi Rizki, mengunduh CV, dan mengunjungi profil profesionalnya (GitHub, LinkedIn).
- Membangun fondasi personal brand yang dapat diperbarui Rizki secara mandiri seiring perkembangan kariernya.

### Non-Goals

- Bukan platform blog atau penerbitan konten.
- Bukan situs e-commerce atau pemesanan layanan.
- Bukan portofolio lengkap dari setiap proyek yang pernah dikerjakan.
- Tidak ada analytics atau tracking di rilis awal.
- Tidak ada contact form di rilis awal.

---

## 3. Target Audiens

### Audiens Primer

| Segmen | Deskripsi | Kebutuhan Utama |
|---|---|---|
| **Recruiter / HR** | Talent scout agensi atau internal yang memindai banyak profil dengan cepat | Nama, headline, keahlian, CV yang dapat diunduh, kontak |
| **Hiring Manager** | Technical lead yang mengevaluasi kandidat untuk peran spesifik | Detail proyek, kompetensi yang terbukti, kredensial pendidikan |
| **Tech Team** | Senior engineer atau peers yang meninjau kedalaman teknis | Link GitHub, metodologi proyek, technology stack |

### Audiens Sekunder

| Segmen | Deskripsi |
|---|---|
| **Koneksi Akademik / Kampus** | Dosen, alumni, dan teman kuliah yang merujuk Rizki ke peluang kerja |
| **Jaringan Profesional** | Rekan dari magang PLN, Diva Computer, KOMIT DigiHub, IECLOP |

### Konteks Audiens

- Sebagian besar dibuka di desktop selama jam kerja; mobile harus tetap sepenuhnya dapat digunakan.
- Kemungkinan tiba via link profil LinkedIn, CV yang dibagikan, atau referral langsung.
- Waktu terbatas; membaca sekilas sebelum membaca detail; mengandalkan hirarki visual untuk menemukan fakta kunci.
- Tidak selalu teknis — pembaca HR harus dapat memahami situs tanpa jargon.

---

## 4. Positioning dan Tone

### Positioning Statement

Muhammad Rizki adalah **lulusan teknologi yang versatile dan berorientasi pada detail**, dengan pengalaman langsung dalam computer vision, pemrosesan data GIS, IT support, dan pengembangan perangkat lunak secara kolaboratif — siap untuk peran entry-level di mana ia dapat berkontribusi, belajar, dan berkembang.

### Tone of Voice

- **Profesional** tanpa terasa kaku.
- **Jujur** — tidak ada klaim berlebihan, tidak ada metrik yang dikarang.
- **Hangat dan manusiawi** — pembaca harus merasa sedang mengenal seseorang yang nyata.
- **Ringkas** — setiap kalimat harus earn its place.
- **Bilingual-native** — teks Indonesia ditulis lebih dulu, diterjemahkan ke English; bukan sebaliknya.

### Yang Bukan Merupakan Situs Ini

- Bukan corporate-cold.
- Bukan kasual atau berbasis meme.
- Bukan portofolio seni visual (tidak ada animasi berat atau motion design sekadar untuk pertunjukan).
- Bukan generic dark-mode developer portfolio dengan neon code rain.

---

## 5. Arah Desain

### Visual Language: Editorial Swiss Minimalist

Desain terinspirasi dari prinsip grafis Swiss abad pertengahan yang diterapkan pada konteks web kontemporer — seperti résumé yang tersusun rapi dan ditingkatkan menjadi dokumen editorial interaktif. Setiap keputusan tata letak harus terasa dipertimbangkan, bukan dihasilkan secara otomatis.

### Design Tokens (Final — Tidak Ada Alternatif)

Berikut adalah **tujuh design token yang dikonfirmasi dan final**. Tidak ada nilai warna alternatif, pendekatan, atau tambahan yang diizinkan. Semua token dideklarasikan sebagai CSS custom properties di `:root`.

| Token | Hex | Peran dan Penggunaan |
|---|---|---|
| `--color-bg` | `#F7F7F3` | Latar halaman — warm off-white, dasar setiap section |
| `--color-surface` | `#FFFFFF` | Permukaan card dan panel di atas background |
| `--color-text-primary` | `#1C2421` | Heading, body copy, label utama — near-black dengan cool undertone |
| `--color-text-secondary` | `#66716C` | Caption, metadata, timestamp, label sekunder |
| `--color-accent` | `#476F67` | Aksen interaktif utama — link, hover states, active indicators, tombol CTA terisi |
| `--color-accent-soft` | `#E6EFEB` | Soft teal wash — section background, skill chip fill, hover background |
| `--color-border` | `#DCE2DC` | Divider struktural, tepi card, horizontal rule halus |

> **Hasil Verifikasi Kontras WCAG AA:** Rasio kontras minimum 4.5:1 untuk body text, 3:1 untuk large text (≥18px regular / ≥14px bold).
> - `#1C2421` di atas `#F7F7F3` dan `#FFFFFF`: lolos dengan margin yang sangat nyaman.
> - `#66716C` di atas `#F7F7F3`: 4,72:1 — memenuhi WCAG AA.
> - `#476F67` di atas `#E6EFEB`: 4,79:1 — memenuhi WCAG AA.
> - `#66716C` di atas `#E6EFEB`: 4,32:1 — tidak memenuhi AA untuk teks normal.
> Oleh karena itu, teks di atas latar `--color-accent-soft` (seperti teks placeholder) wajib menggunakan `--color-text-primary` atau `--color-accent`, bukan `--color-text-secondary`.

### Tipografi

| Peran | Rekomendasi | Fallback |
|---|---|---|
| **Display / Nama** | Geometric atau humanist serif (mis. Playfair Display, Cormorant Garamond, DM Serif Display) | Georgia, serif |
| **Heading** | Clean geometric sans-serif (mis. Inter, DM Sans, Plus Jakarta Sans) | Helvetica Neue, sans-serif |
| **Body** | Sans-serif yang sama dengan heading, weight lebih ringan | Arial, sans-serif |
| **Monospace / Label kode** | Monospace halus untuk technology tags (mis. JetBrains Mono, Fira Code) | Courier New, monospace |

**Type scale:** Gunakan modular scale yang disiplin (mis. rasio 1.25). Hirarki jelas: H1 → H2 → H3 → body → caption. Maksimal 3 font family di seluruh situs.

**Panjang baris:** Body text dibatasi ~65–70 karakter per baris.

### Layout dan Grid

| Breakpoint | Grid |
|---|---|
| **Desktop** (≥1024px) | 12 kolom, max content width ~1200px, centered |
| **Tablet** (768–1023px) | 8 kolom |
| **Mobile** (<768px) | Single-column, full-width, padding yang lapang |

Section padding minimum 80px atas/bawah di desktop. Section dipisahkan oleh whitespace dan pergeseran warna background yang sangat halus (mis. `--color-bg` → `--color-accent-soft`) — bukan card border yang berat.

### Imagery

**Foto profil:** Satu foto profesional Muhammad Rizki dengan rectangular editorial crop (rasio 3:4). Tidak ada circular avatar atau mask di breakpoint mana pun. Foto diperlakukan sebagai elemen tipografi, dikaitkan ke grid.

**Placeholder foto:** Jika foto belum tersedia, gunakan elemen `<div>` berteks label yang terlihat, berukuran sama (3:4), dengan fill `--color-accent-soft` dan teks "FOTO PROFIL — BELUM TERSEDIA" menggunakan `--color-text-primary`. Placeholder ini adalah elemen non-gambar dan tidak memerlukan atribut `alt`. Ketika foto asli dipasang, tambahkan `alt="Foto profil Muhammad Rizki"`.

**Gambar proyek:** Disajikan dalam flat layout atau device frame yang bersih — tidak ada 3D perspective mockup. Komposisi editorial: alternating image-left/text-right dan image-right/text-left (lihat §7.4).

**Icons:** Icon set yang sederhana dan konsisten (mis. Lucide, Heroicons, atau Phosphor Icons). Tidak ada emoji sebagai ikon UI.

### Motion dan Interaction

- **Scroll animations:** Subtle fade-in-up saat section masuk viewport — tidak ada fly-in dramatis atau parallax.
- **Hover states:** `--color-accent` underlines atau background shift pada link dan project entries. Tidak ada scale transform pada teks.
- **Transitions:** 200–300ms ease. Tidak pernah mengalihkan perhatian.
- **Reduced motion:** Hormati `prefers-reduced-motion`. Ketika aktif, semua CSS transitions dan scroll animations dinonaktifkan atau dikurangi menjadi instant crossfade.
- Tidak ada auto-playing video atau looping background animations.

---

## 6. Arsitektur Informasi

### Site Map

```
/ (Homepage — satu halaman scrollable dengan anchor navigation)
│
├── #beranda      Hero — Foto, Nama, Headline, Intro, CTAs
├── #tentang      Tentang — Narasi ringkas, highlight faktual
├── #pengalaman   Pengalaman — PT PLN UP3 Lhokseumawe, Diva Computer
├── #proyek       Proyek — Editorial showcase 3 proyek pilihan
├── #keahlian     Keahlian dan Teknologi — Dikelompokkan, berbentuk tag
├── #pendidikan   Pendidikan — PNL (Sarjana Terapan), SMK N 1 TJA
├── #organisasi   Organisasi — KOMIT DigiHub, IECLOP
└── #kontak       Kontak — Email, GitHub, LinkedIn, unduh CV

/proyek/emosi-deteksi    Halaman detail — Emosi Deteksi (URL dapat dibagikan)
/proyek/sim-yantek       Halaman detail — SIM-YANTEK (URL dapat dibagikan)
/proyek/teras-kita       Halaman detail — Teras Kita (URL dapat dibagikan)
```

Halaman detail proyek (`/proyek/...`) adalah **halaman penuh yang berdedikasi** — bukan modal. Setiap halaman memiliki URL, `<title>`, meta description, dan Open Graph tags sendiri sehingga dapat dibagikan langsung dalam lamaran kerja atau pesan LinkedIn. Link "← Kembali ke Proyek" mengembalikan pengguna ke `/#proyek`.

**Strategi metadata untuk social crawlers:** Metadata Open Graph dan `<title>` pada halaman detail proyek harus tersedia dalam HTML yang dirender sebelum JavaScript dieksekusi — via prerendering atau static generation. Build strategy yang dipilih harus mendukung kebutuhan ini.

### Navigasi

- **Primary nav:** Sticky top navigation bar on scroll, background `--color-surface` dengan bottom border `--color-border` yang sangat halus. Items: Beranda, Tentang, Pengalaman, Proyek, Keahlian, Pendidikan, Organisasi, Kontak.
- **Language toggle:** Terlihat tapi tidak mencolok — `ID | EN` — di sisi kanan nav.
- **Mobile nav:** Hamburger menu → full-screen atau slide-in drawer dengan item yang sama.
- **Active section highlighting:** Nav item menggunakan warna `--color-accent` ketika section yang sesuai terlihat di viewport (via IntersectionObserver).
- **Halaman detail proyek:** Link nav mengarah kembali ke section homepage melalui anchor (mis. `/#proyek`, `/#kontak`).

---

## 7. Struktur Halaman dan Kebutuhan Konten

### 7.1 Hero (`#beranda`)

**Tujuan:** First impression. Menyampaikan identitas, peran, dan kredibilitas dalam 10 detik.

**Layout:**

| Breakpoint | Tata Letak |
|---|---|
| Desktop (≥1024px) | Dua kolom: **teks dan CTAs di KIRI** (~55–60% lebar), **foto di KANAN** (~40–45% lebar) |
| Tablet (768–1023px) | Dua kolom yang lebih sempit; foto dapat dikecilkan |
| Mobile (<768px) | Single column: **teks dan CTAs terlebih dahulu**, foto profil di bawah |

Foto profil tidak pernah circular. Selalu rectangular editorial crop dengan rasio 3:4.

**Elemen konten:**

| Elemen | Konten | Catatan |
|---|---|---|
| **Nama** | Muhammad Rizki | Tipe display, elemen tipografi terbesar di halaman |
| **Headline** | Lulusan Sarjana Terapan Teknik Informatika yang tertarik pada pengembangan perangkat lunak, pengolahan data, dan teknologi. | Status lulusan 2026. Tidak menggunakan kata "mahasiswa". |
| **Intro singkat** | 2–3 kalimat: siapa dia, apa yang ia selesaikan, apa yang ia tawarkan. Tanpa inflasi metrik. | Orang pertama, default Indonesia |
| **Foto profil** | Rectangular editorial 3:4, setting profesional | `[PLACEHOLDER: foto-profil-rizki.jpg]` — gunakan div berlabel teks jika foto belum tersedia |
| **CTA Utama** | "Lihat Proyek" → scroll ke `#proyek` | Tombol terisi `--color-accent` |
| **CTA Sekunder** | "Unduh CV" → unduh PDF | Tombol outline warna accent. **Sembunyikan atau nonaktifkan jika PDF belum tersedia.** |
| **CTA Tersier** | Link ke LinkedIn dan GitHub | Icon + teks, halus |

---

### 7.2 Tentang (`#tentang`)

**Tujuan:** Memberikan gambaran yang lebih penuh tentang Rizki sebagai pribadi dan profesional, tanpa padding.

**Panduan konten:**

- Satu hingga dua paragraf ringkas orang pertama: latar belakang, bidang studi, minat (computer vision, data/GIS, pengembangan perangkat lunak), dan jenis peluang yang dicari.
- Didukung oleh satu set kecil highlight faktual (mis. IPK, tahun lulus, bidang magang, satu proyek unggulan) yang ditampilkan sebagai callout data point — bukan prosa panjang.
- Tidak ada klaim kepribadian generik tanpa bukti pendukung.
- Ditulis dalam bahasa Indonesia; terjemahan English mengikuti dalam mode bilingual.

> Konten ini memerlukan narasi dari Rizki (lihat §13, item 15).

---

### 7.3 Pengalaman (`#pengalaman`)

**Tujuan:** Menunjukkan paparan profesional di dunia nyata.

**Layout:** Vertical timeline atau structured list. Setiap entri: judul peran, nama organisasi, durasi, lokasi, dan deskripsi berbentuk poin-poin.

**Panduan deskripsi:** Gunakan struktur *tindakan + konteks/alat + kontribusi yang terverifikasi*. Dampak kualitatif dapat diterima. Jangan karang angka, hasil, atau pencapaian.

#### Entri 1 — PT PLN (Persero) UP3 Lhokseumawe

| Field | Konten |
|---|---|
| **Peran** | Praktikan / Intern (Magang) |
| **Organisasi** | PT PLN (Persero) UP3 Lhokseumawe |
| **Lokasi** | Lhokseumawe, Aceh |
| **Durasi** | `[PLACEHOLDER: tanggal mulai – tanggal selesai]` |
| **Deskripsi** | • Memproses dan memvalidasi data jaringan kelistrikan menggunakan GIS untuk mendukung akurasi data aset. • Memperbarui data pada sistem SIUJANG. • Mengolah data administratif menggunakan Microsoft Excel. • Mendukung administrasi operasional menggunakan AMS PLN. |
| **Logo** | `[PLACEHOLDER: logo-pln.png]` |

> Jangan tambahkan nama proyek, dataset spesifik, hasil kinerja, kuantitas, atau hasil terukur yang tidak dikonfirmasi Rizki. Tanggal harus dari Rizki — jangan diestimasi.

#### Entri 2 — Diva Computer

| Field | Konten |
|---|---|
| **Peran** | Teknisi IT / IT Support |
| **Organisasi** | Diva Computer |
| **Lokasi** | `[PLACEHOLDER: kota/lokasi]` |
| **Durasi** | `[PLACEHOLDER: tanggal mulai – tanggal selesai]` |
| **Deskripsi** | • Memeriksa kondisi perangkat keras (hardware) komputer dan mengidentifikasi kerusakan. • Menginstal dan mengonfigurasi perangkat lunak (software). • Melakukan pemeliharaan perangkat komputer. • Mengidentifikasi dan menyelesaikan masalah (troubleshooting) perangkat. |
| **Logo** | `[PLACEHOLDER: logo-diva-computer.png]` |

> Jangan menyatakan pemeliharaan dilakukan "secara berkala" atau pada jadwal tertentu kecuali dikonfirmasi. Jangan tambahkan detail jumlah perangkat, klien, atau hasil terukur.

---

### 7.4 Proyek (`#proyek`)

**Tujuan:** Menunjukkan apa yang telah Rizki bangun atau kontribusikan, dengan atribusi jujur dan detail yang cukup bagi hiring manager untuk menilai ruang lingkup.

**Layout showcase:** Project showcase menggunakan **alternating editorial layout**, bukan card grid yang seragam. Setiap entri proyek menempati section full-width dengan salah satu dari dua komposisi:

- **Komposisi A (gambar kiri):** Thumbnail/screenshot proyek di kiri; judul, deskripsi, technology tags, dan link "Lihat Detail" di kanan.
- **Komposisi B (gambar kanan):** Judul dan deskripsi di kiri; thumbnail di kanan.

Urutan: Emosi Deteksi → Komposisi A, SIM-YANTEK → Komposisi B, Teras Kita → Komposisi A.

Di mobile, semua proyek stack ke single-column: gambar di atas, teks di bawah.

**Layout halaman detail** (`/proyek/[slug]`): Full editorial article layout — header besar dengan judul dan kategori, gambar hero, body sections untuk overview, peran, teknologi, dan links. Link "← Kembali ke Proyek" selalu terlihat di bagian atas.

#### Proyek 1 — Emosi Deteksi

Emosi Deteksi adalah **proyek tugas akhir** Rizki. Tanggung jawab spesifik dan status proyek masih menunggu konfirmasi tertulis dari Rizki sebelum dipublikasikan.

**Entri showcase:**

| Field | Konten |
|---|---|
| **Judul** | Emosi Deteksi |
| **Subjudul** | Pengenalan Emosi Wajah Secara Real-Time |
| **Kategori** | Computer Vision · Machine Learning |
| **Ringkasan** | Sistem pengenalan ekspresi emosi wajah secara real-time menggunakan model deep learning berbasis CNN. |
| **Teknologi (tags)** | Python, OpenCV, TensorFlow, Keras, CNN, LightExNet, Haar Cascade |
| **Thumbnail** | `[PLACEHOLDER: screenshot-emosi-deteksi.png]` |
| **Link** | "Lihat Detail →" → `/proyek/emosi-deteksi` |

**Halaman detail — `/proyek/emosi-deteksi`:**

| Field | Konten |
|---|---|
| **Judul halaman** | Emosi Deteksi — Pengenalan Emosi Wajah Secara Real-Time |
| **GitHub** | https://github.com/rizkiikzir/emosi-deteksi |
| **Peran Rizki** | Proyek tugas akhir. `[PLACEHOLDER: spesifikasikan apakah dikerjakan solo atau dalam tim, dan apa yang dikerjakan sendiri oleh Rizki.]` |
| **Tanggung jawab** | `[PLACEHOLDER: hanya tugas yang dikonfirmasi Rizki. Kandidat yang perlu dikonfirmasi: persiapan dataset, pelatihan model, evaluasi performa model, implementasi antarmuka real-time.]` |
| **Teknologi** | Python, OpenCV, TensorFlow, Keras, CNN, LightExNet, Haar Cascade |
| **Status** | `[PLACEHOLDER: selesai / dalam pengembangan]` |
| **Gambar hero** | `[PLACEHOLDER: screenshot-emosi-deteksi-detail.png]` |

> Jangan cantumkan persentase akurasi, ukuran dataset, parameter arsitektur model, atau perbandingan benchmark kecuali Rizki menyediakan angka terverifikasi. URL GitHub sudah terverifikasi — gunakan apa adanya.

#### Proyek 2 — SIM-YANTEK

SIM-YANTEK dikembangkan selama **magang di PT PLN (Persero) UP3 Lhokseumawe** dengan bimbingan mentor. Rizki berkontribusi pada bagian tertentu dari aplikasi ini — bukan sebagai pengembang tunggal.

**Entri showcase:**

| Field | Konten |
|---|---|
| **Judul** | SIM-YANTEK |
| **Subjudul** | Sistem Informasi Manajemen Layanan Teknik |
| **Kategori** | Web Development · Software Engineering |
| **Ringkasan** | Aplikasi manajemen layanan teknik yang dikembangkan selama magang di PT PLN, dengan bimbingan mentor. |
| **Teknologi (tags)** | `[PLACEHOLDER: konfirmasi stack teknologi dengan Rizki]` |
| **Thumbnail** | `[PLACEHOLDER: screenshot-sim-yantek.png]` |
| **Link** | "Lihat Detail →" → `/proyek/sim-yantek` |

**Halaman detail — `/proyek/sim-yantek`:**

| Field | Konten |
|---|---|
| **Judul halaman** | SIM-YANTEK — Sistem Informasi Manajemen Layanan Teknik |
| **Konteks** | Dikembangkan selama magang di PT PLN (Persero) UP3 Lhokseumawe, dengan bimbingan mentor. Bukan produk solo Rizki. |
| **Peran Rizki** | Berkontribusi pada pengembangan fitur atau modul tertentu di bawah bimbingan mentor. |
| **Tanggung jawab** | `[PLACEHOLDER: jelaskan kontribusi spesifik Rizki — fitur apa, modul apa]` |
| **Teknologi** | `[PLACEHOLDER: konfirmasi stack teknologi dengan Rizki]` |
| **Status** | `[PLACEHOLDER: status proyek]` |
| **Link** | `[PLACEHOLDER: link repositori atau demo jika dapat dibagikan secara publik]` |
| **Gambar hero** | `[PLACEHOLDER: screenshot-sim-yantek-detail.png]` |

> Selalu atribusikan aplikasi sebagai upaya kolaboratif dengan bimbingan mentor. Jangan pernah mengklaim kepemilikan penuh atau tunggal.

#### Proyek 3 — Teras Kita

**Entri showcase:**

| Field | Konten |
|---|---|
| **Judul** | Teras Kita |
| **Subjudul** | Desain UI dan Eksplorasi Landing Page |
| **Kategori** | UI Design · Frontend Exploration |
| **Ringkasan** | Desain antarmuka di Figma dan eksplorasi implementasi landing page menggunakan Flutter/Dart. |
| **Teknologi (tags)** | Figma, Flutter, Dart |
| **Thumbnail** | `[PLACEHOLDER: screenshot-teras-kita.png]` |
| **Link** | "Lihat Detail →" → `/proyek/teras-kita` |

**Halaman detail — `/proyek/teras-kita`:**

| Field | Konten |
|---|---|
| **Judul halaman** | Teras Kita — Desain UI dan Eksplorasi Landing Page |
| **Peran Rizki** | Desainer UI — perancangan tampilan antarmuka di Figma. Eksplorasi implementasi desain ke dalam landing page menggunakan Flutter/Dart. Bukan aplikasi produksi yang diluncurkan penuh. |
| **Tanggung jawab** | • Merancang wireframe dan mockup UI menggunakan Figma. • Mengeksplorasi implementasi desain ke dalam kode halaman arahan (landing page) menggunakan Flutter/Dart. |
| **Teknologi** | Figma, Flutter, Dart |
| **Status** | `[PLACEHOLDER: status proyek — eksplorasi / selesai sebagian]` |
| **Figma Prototype** | `[PLACEHOLDER: link Figma prototype jika dapat dibagikan secara publik]` |
| **Gambar hero** | `[PLACEHOLDER: screenshot-teras-kita-detail.png]` |

> Jangan menyiratkan aplikasi produksi yang diluncurkan penuh. Ruang lingkupnya adalah kontribusi desain UI Figma dan eksplorasi landing page — representasikan secara akurat.

---

### 7.5 Keahlian dan Teknologi (`#keahlian`)

**Tujuan:** Memberikan tampilan cepat dan mudah dipindai tentang toolset Rizki berdasarkan penggunaan yang terverifikasi.

**Layout:** Dikelompokkan berdasarkan kategori. Setiap skill ditampilkan sebagai labeled tag/chip dengan background `--color-accent-soft` dan teks `--color-text-primary`. Tidak ada progress bar, persentase rating, atau skor profisiensi. Label kategori menggunakan teks polos.

**Daftar keahlian yang dikurasi (hanya berdasarkan penggunaan terverifikasi):**

| Kategori | Teknologi dan Tools |
|---|---|
| **Web Fundamentals** | HTML, CSS |
| **Bahasa Pemrograman dan Query** | Python, JavaScript, TypeScript, SQL, Dart |
| **Framework, Runtime dan Dev Tools** | React, Vite, Flutter, FastAPI, Node.js |
| **AI dan Computer Vision** | TensorFlow, Keras, OpenCV, CNN, Haar Cascade, LightExNet |
| **Data dan GIS** | PostgreSQL, SQLite, MySQL, ArcGIS, SIUJANG, AMS PLN, Microsoft Excel |
| **IT Support dan Hardware** | Troubleshooting perangkat keras, instalasi Windows, jaringan dasar |
| **Desain dan Kolaborasi** | Figma, Canva, GitHub, VS Code |

Daftar keahlian ini menunjukkan teknologi dan tools yang pernah digunakan dalam proyek, magang, atau perkuliahan, bukan klaim tingkat penguasaan yang sama untuk setiap item. Beberapa framework, runtime, dan development tools digunakan dengan tingkat bantuan dan panduan yang bervariasi. Tidak ada skor persentase atau rating profisiensi subjektif. Jangan menambahkan teknologi di luar daftar terverifikasi.

---

### 7.6 Pendidikan (`#pendidikan`)

**Tujuan:** Menampilkan kredensial akademik dengan jelas dan akurat.

**Layout:** Vertical list, urutan reverse-chronological.

#### Politeknik Negeri Lhokseumawe

| Field | Konten |
|---|---|
| **Institusi** | Politeknik Negeri Lhokseumawe |
| **Program** | Sarjana Terapan Teknik Informatika (D4 — setara Sarjana / Bachelor-equivalent) |
| **Tahun Lulus** | 2026 |
| **IPK** | 3.58 / 4.00 |
| **Logo** | `[PLACEHOLDER: logo-pnl.png]` |
| **Mata kuliah / highlight** | `[PLACEHOLDER opsional: konfirmasi dengan Rizki jika ingin ditampilkan]` |

#### SMK Negeri 1 Tanah Jambo Aye

| Field | Konten |
|---|---|
| **Institusi** | SMK Negeri 1 Tanah Jambo Aye |
| **Program** | Teknik Komputer dan Jaringan |
| **Periode** | 2019 – 2022 |
| **Nilai Akhir** | 91.35 |
| **Logo** | `[PLACEHOLDER: logo-smkn1-tja.png]` |

---

### 7.7 Organisasi (`#organisasi`)

**Tujuan:** Menunjukkan keterlibatan komunitas dan kontribusi di luar akademik.

**Layout:** Card atau structured list. Setiap entri: nama organisasi, peran, periode, deskripsi singkat partisipasi.

#### KOMIT DigiHub

| Field | Konten |
|---|---|
| **Organisasi** | KOMIT DigiHub |
| **Peran** | Anggota |
| **Periode** | 2024 – 2025 |
| **Deskripsi** | Berpartisipasi sebagai anggota. Berkontribusi dalam pembuatan poster dan materi visual menggunakan Figma. |
| **Logo** | `[PLACEHOLDER: logo-komit-digihub.png]` |

#### IECLOP

| Field | Konten |
|---|---|
| **Organisasi** | IECLOP |
| **Peran** | Anggota |
| **Periode** | 2022 – 2024 |
| **Deskripsi** | Berpartisipasi dalam sesi pembelajaran rutin (Jumat/Sabtu) dan beberapa kegiatan organisasi yang berfokus pada pembelajaran bahasa — termasuk bahasa Inggris, Jepang, Thai, dan bahasa lainnya. |
| **Logo** | `[PLACEHOLDER: logo-ieclop.png]` |

> Jangan cantumkan jabatan kepemimpinan untuk salah satu entri. Peran Rizki di keduanya dikonfirmasi sebagai Anggota. Jangan tambahkan kegiatan atau acara yang tidak dikonfirmasi Rizki.

---

### 7.8 Kontak (`#kontak`)

**Tujuan:** Menghilangkan semua hambatan untuk menghubungi Rizki.

**Layout:** Section yang bersih dan terpusat. Metode kontak terdaftar dengan jelas. Tidak ada contact form di rilis awal — link `mailto:` sudah cukup.

| Channel | Konten |
|---|---|
| **Email** | `[PLACEHOLDER: alamat email profesional Rizki — jangan dibuat-buat atau ditebak]` |
| **GitHub** | https://github.com/rizkiikzir |
| **LinkedIn** | https://www.linkedin.com/in/muhammad-rizki-0b67b324a/ |
| **Unduh CV** | `[PLACEHOLDER: rizki-cv.pdf]` — berlabel "Unduh CV (PDF)". **Sembunyikan atau nonaktifkan link ini jika file PDF belum tersedia; jangan arahkan ke file kosong atau dummy.** |

**Teks CTA:** "Tertarik bekerja sama atau memiliki peluang yang cocok? Hubungi saya melalui salah satu kanal berikut."

---

## 8. User Journey Utama

### Journey 1 — Recruiter Quick Scan (< 60 detik)

```
Tiba di Hero
  → Membaca nama dan headline
  → Menelusuri pengalaman PLN dan Diva Computer
  → Menghubungi Rizki melalui kanal yang tersedia
```

**Kondisi sukses:** Recruiter mendapatkan CV Rizki jika tersedia atau dapat terhubung melalui LinkedIn maupun kanal kontak aktif dalam 60 detik.

### Journey 2 — Hiring Manager Technical Evaluation (3–5 menit)

```
Tiba di Hero
  → Membaca intro
  → Navigasi ke #proyek
    → Klik "Lihat Detail" di Emosi Deteksi
      → /proyek/emosi-deteksi: membaca peran (tugas akhir), teknologi, metodologi
      → Klik link GitHub untuk mereview repositori
    → Kembali via "← Kembali ke Proyek"
    → Scan entri SIM-YANTEK — mencatat kontribusi yang dibimbing mentor
  → Navigasi ke #keahlian — konfirmasi kesesuaian teknologi dengan peran yang dibuka
  → Cek #pendidikan — verifikasi IPK 3.58, lulusan 2026
  → Klik ikon GitHub di nav/kontak untuk mereview profil
```

**Kondisi sukses:** Hiring manager memiliki konteks terverifikasi yang cukup untuk memutuskan apakah akan melanjutkan Rizki ke wawancara.

### Journey 3 — Peer / Network Referral (1–2 menit)

```
Tiba via shared link
  → Membaca #tentang — konfirmasi latar belakang dan karakter
  → Cek #organisasi — mengenali jaringan profesional bersama (KOMIT DigiHub, IECLOP)
  → Membagikan tautan LinkedIn atau kanal kontak yang tersedia untuk meneruskan referral
```

**Kondisi sukses:** Peer dapat memverifikasi siapa Rizki dengan cepat dan meneruskan link atau kontak ke pihak ketiga.

### Journey 4 — Direct Project Link (30 detik)

```
Tiba langsung di /proyek/emosi-deteksi (atau route proyek lain) via link yang dibagikan
  → Membaca halaman detail proyek lengkap
  → Klik GitHub untuk melihat repositori
  → Menggunakan nav untuk menjelajahi sisa portofolio
```

**Kondisi sukses:** Route proyek yang dapat dibagikan memungkinkan Rizki menautkan proyek spesifik dalam lamaran kerja, postingan LinkedIn, atau pesan — tanpa mengharuskan penerima scroll seluruh portofolio.

---

## 9. Functional Requirements

### FR-01 — Language Toggle

- Situs mendukung Bahasa Indonesia (default) dan English.
- Toggle yang terlihat (`ID | EN`) di navigasi mengalihkan semua teks UI dan string konten.
- Preferensi bahasa persisten saat refresh halaman (via `localStorage`).
- Halaman detail proyek menghormati bahasa yang aktif.

### FR-02 — Smooth Scroll Navigation

- Mengklik item nav utama scroll dengan mulus ke anchor section yang sesuai.
- Section yang aktif di-highlight di navigation bar saat scroll (via IntersectionObserver).

### FR-03 — CV Download

- Tombol/link berlabel "Unduh CV" (dan "Download CV" dalam English) memicu unduhan langsung file PDF.
- Jika file PDF belum tersedia, tombol ini harus **disembunyikan atau dinonaktifkan** — tidak boleh mengarah ke file kosong atau dummy. File harus digantikan dengan dokumen nyata sebelum situs dipublikasikan.

### FR-04 — Project Detail Routes

- Setiap proyek memiliki route yang dapat dinavigasi dan dibagikan:
  - `/proyek/emosi-deteksi`
  - `/proyek/sim-yantek`
  - `/proyek/teras-kita`
- Ini bukan modal. Ini adalah halaman penuh dengan `<title>`, meta description, dan Open Graph tags masing-masing.
- Metadata ini harus tersedia dalam HTML yang dirender sebelum JavaScript dieksekusi (via prerendering atau static generation).
- Setiap halaman detail menyertakan link "← Kembali ke Proyek" yang mengembalikan pengguna ke `/#proyek`.
- Tombol back browser mengembalikan ke lokasi sebelumnya dengan benar.

### FR-05 — External Links

- Link GitHub dan LinkedIn dibuka di tab baru (`target="_blank"`).
- Semua external link menyertakan `rel="noopener noreferrer"`.
- Link email menggunakan `mailto:` setelah alamat email dikonfirmasi. Selama email masih berupa placeholder, link email boleh disembunyikan.

### FR-06 — Responsive Layout

- Situs sepenuhnya dapat digunakan pada breakpoint berikut:
  - Mobile: 320px – 767px
  - Tablet: 768px – 1023px
  - Desktop: 1024px ke atas
- Layout hero: teks KIRI, foto KANAN di desktop; teks terlebih dahulu, foto di bawah di mobile.

### FR-07 — Accessibility

- Semua gambar asli memiliki atribut `alt` yang deskriptif. Foto profil: `alt="Foto profil Muhammad Rizki"`. Placeholder foto (elemen div non-gambar) tidak memerlukan atribut `alt`.
- Semua elemen interaktif dapat dinavigasi dengan keyboard dengan focus indicator yang terlihat jelas menggunakan `--color-accent`.
- Kontras warna memenuhi minimum WCAG 2.1 AA untuk semua kombinasi teks/background.
- `prefers-reduced-motion` dihormati — semua CSS transitions dan scroll animations dinonaktifkan atau dikurangi menjadi instant crossfade ketika media query ini aktif.

### FR-08 — Print / PDF-Friendly (Nice-to-Have, Post-Launch)

- `@media print` stylesheet yang menyembunyikan navigasi, menghapus background, dan menyajikan konten dalam format monochrome yang terbaca.
- Tidak diperlukan untuk rilis awal.

---

## 10. Non-Functional Requirements

### NFR-01 — Performance

- Lighthouse Performance score target: ≥ 90 di desktop, ≥ 75 di mobile. Ini adalah target optimasi yang perlu diuji, bukan gating condition untuk deployment.
- LCP target: < 2.5 detik pada koneksi 4G standar.
- Foto profil dioptimasi: format WebP, terkompresi, disajikan dengan `srcset` yang sesuai untuk berbagai ukuran viewport.
- Tidak ada CSS framework bulk yang tidak digunakan.

### NFR-02 — Maintainability

- Semua konten (copy, tanggal, URL, data proyek) disimpan dalam file data atau konten terpisah (mis. modul JSON/JS/TS), tidak di-hardcode di dalam markup komponen.
- Kode terstruktur dengan jelas dan diberi komentar untuk developer yang bukan penulis asli.

### NFR-03 — Hosting

- Dapat di-deploy ke static hosting provider (mis. Vercel, Netlify, GitHub Pages) dengan biaya operasional nol.
- Tidak diperlukan database server-side atau autentikasi.
- Build strategy yang dipilih harus mendukung prerendering atau static generation untuk route `/proyek/[slug]`.

### NFR-04 — SEO

- `<title>` halaman utama: `Muhammad Rizki — Sarjana Terapan Teknik Informatika · Portfolio`
- Meta description: Deskripsi Indonesia yang ringkas, ≤ 155 karakter.
- Pola `<title>` halaman proyek: `[Nama Proyek] — Muhammad Rizki · Portfolio`
- Open Graph tags di halaman utama dan semua halaman detail proyek (`og:title`, `og:description`, `og:image`, `og:url`). Ketentuan `og:image`:
  - Homepage menggunakan foto profil Rizki.
  - Halaman detail proyek menggunakan gambar hero proyek masing-masing.
  - Jika gambar proyek belum tersedia, gunakan fallback image yang sesuai.
- Struktur HTML5 semantik: `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`.

### NFR-05 — Privasi dan Keamanan

- Tidak ada analytics atau tracking scripts di rilis awal.
- Tidak ada data pengguna yang dikumpulkan. Tidak ada cookies yang diset oleh situs.
- Jika analytics ditambahkan di rilis mendatang, hanya tools yang menghormati privasi dan tanpa cookie yang boleh dipertimbangkan (mis. Plausible, Fathom). Google Analytics tidak boleh ditambahkan tanpa mekanisme consent yang eksplisit.

### NFR-06 — Browser Compatibility

- Dirender dengan benar di dua versi terbaru Chrome, Firefox, Safari, dan Edge.

---

## 11. Aturan Integritas Konten

Aturan-aturan ini tidak dapat dinegosiasikan dan harus diterapkan sepanjang desain, penulisan konten, dan pengembangan. Tidak ada pengecualian.

| Aturan | Persyaratan |
|---|---|
| **Tidak ada metrik yang dikarang** | Jangan tambahkan persentase akurasi, ukuran dataset, jumlah pengguna, atau benchmark kinerja kecuali Rizki menyediakan angka terverifikasi secara tertulis. |
| **Tidak ada durasi yang dikarang** | Tanggal mulai/selesai pekerjaan harus dari Rizki, tidak diestimasi. Gunakan `[PLACEHOLDER]` sampai dikonfirmasi. |
| **Tidak ada testimonial yang dibuat-buat** | Tidak ada kutipan yang dikaitkan ke supervisor, klien, atau rekan tanpa persetujuan eksplisit dan kata-kata nyata mereka. |
| **Tidak ada klaim kepemilikan tunggal** | SIM-YANTEK dan proyek kolaboratif lainnya harus jelas mengakui kontribusi sebagai kerja tim atau bimbingan mentor. Frasa "saya bangun sendiri" tidak boleh muncul untuk proyek tim. |
| **Tidak ada technology padding** | Bagian keahlian hanya mencantumkan teknologi dari daftar terverifikasi. Jangan tambahkan teknologi dari deskripsi pekerjaan untuk terlihat lebih qualified. |
| **Tidak ada email yang dibuat-buat** | Alamat email tidak boleh diciptakan, didekati, atau ditebak. Ini tetap placeholder sampai Rizki menyediakannya. |
| **Placeholder adalah sakral** | Item `[PLACEHOLDER]` harus tetap ditandai dengan jelas sampai digantikan dengan konten terverifikasi. Tidak boleh pernah diisi dengan konten yang dikarang. Placeholder bukan blocker untuk desain atau pengembangan, tetapi harus diselesaikan sebelum situs dipublikasikan. |
| **Foto harus nyata** | Tidak ada foto profil yang dihasilkan AI, foto stok, atau ilustrasi avatar sebagai pengganti foto potret nyata Rizki. Gunakan div placeholder berlabel sampai foto asli tersedia. |
| **Framing lulusan** | Rizki lulus pada 2026. Jangan gunakan kata "mahasiswa" di mana pun dalam copy situs. Framing yang benar adalah "lulusan". |

---

## 12. Acceptance Criteria

Kriteria dibagi menjadi dua tahap. **Tahap 1** dapat dipenuhi tanpa aset personal Rizki dan tidak memblokir coding. **Tahap 2** harus dipenuhi sebelum situs dipublikasikan.

### Tahap 1 — Development-Ready

Kriteria ini harus dipenuhi sebelum atau selama pengembangan. Placeholder personal belum perlu diselesaikan pada tahap ini.

**Desain dan Arsitektur:**
- [ ] Ketujuh design token (`--color-bg`, `--color-surface`, `--color-text-primary`, `--color-text-secondary`, `--color-accent`, `--color-accent-soft`, `--color-border`) diterapkan secara konsisten tanpa warna di luar palette.
- [ ] Hirarki tipografi jelas: nama display → heading section → body → caption.
- [ ] Foto profil (atau div placeholder berlabel) menggunakan rectangular crop — tidak ada circular avatar di breakpoint mana pun.
- [ ] Section proyek menggunakan alternating editorial composition (bukan card grid seragam).
- [ ] Layout terasa editorial dan custom.
- [ ] Whitespace lapang; tidak ada section yang terasa padat.

**Fungsional dan Teknis:**
- [ ] Sepenuhnya responsif dan dapat digunakan di breakpoint 320px, 768px, dan 1024px+.
- [ ] Semua item nav utama scroll dengan mulus ke anchor section yang benar.
- [ ] Section yang aktif di-highlight di nav saat scroll via IntersectionObserver.
- [ ] Ketiga route detail proyek dapat dinavigasi dan mengembalikan halaman yang benar (bukan 404).
- [ ] Link "← Kembali ke Proyek" di halaman proyek mengembalikan ke `/#proyek`.
- [ ] Tombol back browser menavigasi dengan benar antara halaman detail proyek dan homepage.
- [ ] Language toggle (ID ↔ EN) bekerja dengan benar dan persisten via `localStorage`.
- [ ] Semua link GitHub dan LinkedIn terbuka di tab baru dengan `rel="noopener noreferrer"`.
- [ ] Link `mailto:` tidak wajib aktif selama alamat email masih berupa placeholder dan boleh disembunyikan. Link email diuji setelah alamat email resmi dikonfirmasi.
- [ ] Semua gambar asli memiliki atribut `alt` yang deskriptif; placeholder foto tidak memiliki atribut `alt`.
- [ ] Semua elemen interaktif dapat dinavigasi dengan keyboard dengan focus indicator yang terlihat.
- [ ] `prefers-reduced-motion` dihormati — semua animasi dinonaktifkan saat aktif.
- [ ] Tidak ada analytics atau tracking scripts yang ada.
- [ ] Metadata Open Graph pada halaman detail proyek tersedia dalam HTML yang dirender sebelum JavaScript dieksekusi.

### Tahap 2 — Launch-Ready

Semua kriteria Tahap 1 harus sudah terpenuhi. Kriteria tambahan berikut harus dipenuhi **sebelum situs dipublikasikan**.

**Akurasi Konten:**
- [ ] Semua item `[PLACEHOLDER]` telah digantikan dengan konten yang dikonfirmasi Rizki, atau sengaja dihilangkan dengan alasan yang terdokumentasi.
- [ ] Tanggal pekerjaan PT PLN dan Diva Computer dikonfirmasi dan akurat.
- [ ] Atribusi proyek dengan benar membedakan kontribusi personal vs. tim vs. mentored di ketiga halaman proyek.
- [ ] Narasi section Tentang telah ditulis atau ditinjau oleh Rizki.
- [ ] Terjemahan English dari semua copy Indonesia sudah selesai dan akurat.
- [ ] Copy situs tidak menggunakan kata "mahasiswa" — menggunakan "lulusan".
- [ ] URL GitHub dan LinkedIn sesuai persis dengan link yang terverifikasi.
- [ ] Entri pendidikan ditampilkan dengan benar: PNL (Sarjana Terapan, 2026, IPK 3.58/4.00); SMK N 1 TJA (TKJ, 2019–2022, 91.35).

**Aset dan File:**
- [ ] Foto profil asli Rizki dipasang dan menggantikan div placeholder.
- [ ] File CV PDF nyata tersedia dan tombol unduh berfungsi.
- [ ] Link email `mailto:` aktif dan berfungsi dengan benar menggunakan alamat email resmi yang telah dikonfirmasi.
- [ ] Semua teks `[PLACEHOLDER]` yang terlihat telah dihapus dari tampilan publik.

**WCAG dan Kontras:**
- [ ] Kontras WCAG AA diverifikasi untuk semua kombinasi teks/background, termasuk `--color-text-secondary` pada `--color-bg` dan `--color-accent` pada `--color-accent-soft`.

**Performance (Target Optimasi):**
- [ ] Lighthouse Performance ≥ 90 (desktop) — diuji, bukan dijamin.
- [ ] Foto profil disajikan sebagai WebP dan terkompresi dengan `srcset`.
- [ ] Tidak ada resource yang memblokir render yang menunda LCP lebih dari 2.5 detik (simulasi 4G).

**Browser Testing:**
- [ ] Situs diuji dan berfungsi di Chrome, Firefox, Safari, dan Edge (2 versi terbaru masing-masing).

---

## 13. Placeholder dan Open Items

Berikut adalah satu-satunya tabel konsolidasi item yang belum terselesaikan. Semua fakta yang sudah terverifikasi (URL GitHub, LinkedIn, repositori Emosi Deteksi, data pendidikan, data organisasi, teknologi Teras Kita) tidak lagi tercantum di sini.

Item yang belum terselesaikan **tidak memblokir desain atau pengembangan**. Item bertanda **Ya** di kolom "Blocker Peluncuran" harus disediakan atau sengaja dihilangkan sebelum situs dipublikasikan. Tidak ada yang boleh dikarang untuk mengisinya.

| # | Item | Jenis | Blocker Peluncuran | Catatan |
|---|---|---|---|---|
| 1 | Foto profil profesional | Gambar | Ya | Hanya foto nyata. Gunakan div placeholder berlabel selama pengembangan. |
| 2 | Alamat email profesional | Teks | Ya | Tidak boleh ditebak atau dibuat-buat. |
| 3 | File CV (PDF, terkini) | File | Ya | Sembunyikan tombol unduh sampai tersedia; jangan arahkan ke file kosong. |
| 4 | Tanggal magang PT PLN (mulai dan selesai) | Teks | Ya | Tanggal pasti hanya dari Rizki. |
| 5 | Tanggal dan lokasi Diva Computer | Teks | Ya | Kota/lokasi dan tanggal pasti hanya dari Rizki. |
| 6 | Emosi Deteksi: detail peran (solo atau tim dalam konteks tugas akhir) | Teks | Ya | Klarifikasi apa yang dikerjakan sendiri oleh Rizki. |
| 7 | Emosi Deteksi: tanggung jawab spesifik yang dikonfirmasi | Teks | Ya | Hanya tugas yang dikonfirmasi; jangan diasumsikan dari GitHub. |
| 8 | Emosi Deteksi: status proyek (selesai/berlangsung) | Teks | Ya | — |
| 9 | SIM-YANTEK: kontribusi spesifik dan modul | Teks | Ya | Fitur atau modul apa yang dikerjakan Rizki? |
| 10 | SIM-YANTEK: technology stack | Teks | Ya | Konfirmasi stack yang benar-benar digunakan. |
| 11 | SIM-YANTEK: link yang dapat dibagikan (repo atau demo) | URL | Tidak | Hanya jika dapat dibagikan secara publik. Hilangkan jika tidak ada. |
| 12 | Teras Kita: URL Figma prototype | URL | Tidak | Hanya jika dapat dibagikan secara publik. Hilangkan jika tidak ada. |
| 13 | Teras Kita: status proyek | Teks | Ya | — |
| 14 | Screenshot / mockup proyek (semua 3 proyek) | Gambar | Ya | Diperlukan untuk showcase dan halaman detail. |
| 15 | Narasi section Tentang (ditulis atau ditinjau Rizki) | Teks | Ya | 1–2 paragraf orang pertama, bahasa Indonesia. |
| 16 | Terjemahan English semua copy Indonesia | Teks | Ya | Diperlukan agar language toggle EN berfungsi dengan benar. |
| 17 | Logo institusi dan organisasi | Gambar | Tidak | PLN, PNL, SMK N 1 TJA, KOMIT DigiHub, IECLOP. Opsional; hilangkan jika tidak tersedia. |
| 18 | Mata kuliah atau highlight akademik PNL | Teks | Tidak | Pengayaan opsional pada section Pendidikan. |

---

*Design Brief v1.2 — 21 November 2026 — Revised — Awaiting Rizki's Approval*
