**Berikut adalah versi lengkap yang kamu minta.**

Saya berikan dua hal sekaligus:

1. **Struktur folder `content/` siap copy-paste** (sudah mengikuti pola Nuxt Content + Nuxt UI Docs Template).
2. **Outline detail setiap halaman** + kerangka penulisan yang mengikuti skill `document-writer` dan `writing-web-documentation` dari [onmax/nuxt-skills](https://github.com/onmax/nuxt-skills).

### Aturan Penulisan yang Digunakan (dari skill)

- Active voice + present tense
- Subject-first
- 2–4 kalimat per paragraf
- Penjelasan sebelum contoh/kode
- Callout yang tepat: `::note`, `::tip`, `::warning`, `::important`
- Tidak pakai backtick di H1
- Frontmatter wajib: `title` + `description`
- Heading yang jelas dan scannable
- Fokus praktis untuk guru (bukan teori panjang)

---

## 1. Struktur Folder `content/` Siap Copy-Paste

```bash
content/
├── index.md
├── 1.pendahuluan/
│   ├── 1.latar-belakang.md
│   ├── 2.visi-misi.md
│   ├── 3.cara-menggunakan.md
│   └── 4.roadmap.md
├── 2.mulai-di-sini/
│   ├── 1.selamat-datang.md
│   ├── 2.checklist-tahun-ajaran-baru.md
│   ├── 3.tips-tahun-pertama.md
│   ├── 4.manajemen-waktu.md
│   ├── 5.komunikasi.md
│   └── 6.kesalahan-umum.md
├── 3.administrasi/
│   ├── 1.daftar-lengkap.md
│   ├── 2.identitas-dan-data-kelas.md
│   ├── 3.kalender-dan-jadwal.md
│   ├── 4.prota.md
│   ├── 5.promes.md
│   ├── 6.atp.md
│   ├── 7.modul-ajar.md
│   ├── 8.jurnal-harian.md
│   ├── 9.absensi.md
│   ├── 10.nilai-dan-rapor.md
│   ├── 11.administrasi-p5.md
│   ├── 12.inventaris-kelas.md
│   └── 13.template-siap-pakai.md
├── 4.kurikulum-merdeka/
│   ├── 1.pengenalan.md
│   ├── 2.struktur-fase.md
│   ├── 3.capaian-pembelajaran.md
│   ├── 4.pembelajaran-berdiferensiasi.md
│   ├── 5.asesmen.md
│   └── 6.p5/
│       ├── 1.panduan-umum.md
│       ├── 2.contoh-projek.md
│       └── 3.dokumentasi-pelaporan.md
├── 5.materi-bahan-ajar/
│   ├── 1.bahasa-indonesia.md
│   ├── 2.matematika.md
│   ├── 3.ipas.md
│   ├── 4.pendidikan-pancasila.md
│   ├── 5.pendidikan-agama.md
│   ├── 6.seni.md
│   ├── 7.pjok.md
│   ├── 8.bahasa-inggris.md
│   └── 9.muatan-lokal.md
├── 6.strategi-pembelajaran/
│   ├── 1.model-pembelajaran.md
│   ├── 2.media-pembelajaran.md
│   ├── 3.pengelolaan-kelas.md
│   ├── 4.inklusi.md
│   ├── 5.literasi-numerasi.md
│   └── 6.pembelajaran-mendalam.md
├── 7.teknologi-guru/
│   ├── 1.platform-resmi.md
│   ├── 2.google-workspace.md
│   ├── 3.canva.md
│   ├── 4.ai-tools.md
│   ├── 5.tools-interaktif.md
│   └── 6.membuat-media-digital.md
├── 8.pengembangan-profesional/
│   ├── 1.ppg.md
│   ├── 2.sertifikasi.md
│   ├── 3.komunitas-belajar.md
│   ├── 4.ptk.md
│   └── 5.portofolio.md
├── 9.kesejahteraan/
│   ├── 1.manajemen-stres.md
│   ├── 2.work-life-balance.md
│   └── 3.etika-profesi.md
└── 10.sumber-daya/
    ├── 1.link-resmi.md
    ├── 2.peraturan.md
    ├── 3.buku-digital.md
    └── 4.faq.md
```

---

## 2. Contoh Kerangka Dokumen Lengkap (Siap Ditulis)

Berikut beberapa halaman prioritas dengan kerangka yang sudah mengikuti skill penulisan.

### `content/index.md` (Homepage)

```md
---
seo:
  title: Guru - Platform Dokumentasi untuk Guru SD
  description: Platform dokumentasi lengkap untuk guru SD, khususnya guru muda. Temukan administrasi, modul ajar, strategi pembelajaran, dan tips praktis Kurikulum Merdeka.
---

::u-page-hero
---
orientation: horizontal
---
#title
Belajar Lebih Mudah dan Efektif

#description
Platform dokumentasi praktis untuk guru SD. Semua yang kamu butuhkan — administrasi, modul ajar, strategi mengajar, hingga tips bertahan di tahun pertama — ada di satu tempat.

#links
  :::u-button
  ---
  to: /pendahuluan/latar-belakang
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Mulai Sekarang
  :::

  :::u-button
  ---
  to: /mulai-di-sini/selamat-datang
  size: xl
  color: neutral
  variant: outline
  ---
  Untuk Guru Baru
  :::
::
```

### `content/1.pendahuluan/1.latar-belakang.md`

```md
---
title: Latar Belakang
description: Cerita di balik lahirnya platform guru.permadi.dev sebagai solusi pembelajaran digital bagi guru SD.
---

# Latar Belakang

Platform ini lahir dari pengalaman nyata mengajar di sekolah dasar. Banyak guru, terutama yang baru, kesulitan mencari referensi yang praktis, lengkap, dan siap pakai.

Tantangan utama yang muncul di lapangan meliputi keterbatasan akses materi berkualitas, kesulitan mengelola administrasi, dan kurangnya panduan yang sesuai dengan Kurikulum Merdeka.

::note
Platform ini bukan sekadar kumpulan file. Ini adalah dokumentasi hidup yang terus diperbarui mengikuti kebutuhan guru dan perubahan kebijakan.
::

## Tantangan yang Dihadapi Guru

Guru SD menghadapi beban administrasi yang tinggi. Mereka harus menyusun Prota, Promes, ATP, Modul Ajar, dan berbagai dokumen lainnya sambil tetap fokus mengajar.

Keterbatasan waktu membuat banyak guru kesulitan mencari contoh yang baik dan relevan.

## Inspirasi Pengembangan

Pengalaman pribadi mengajar, observasi di lapangan, dan platform seperti Google Classroom serta dokumentasi teknis menjadi inspirasi utama.

Tujuan utamanya sederhana: memberikan tempat yang rapi, mudah dicari, dan langsung bisa digunakan oleh guru.

## Tujuan Platform

Platform ini membantu guru mengelola materi pembelajaran secara efektif, efisien, dan berkelanjutan. Fokus utamanya adalah guru muda yang baru memulai perjalanan mengajar.
```

### `content/2.mulai-di-sini/1.selamat-datang.md`

```md
---
title: Selamat Datang, Guru Baru!
description: Panduan awal untuk guru SD yang baru memulai karier mengajar. Persiapan mental, checklist, dan langkah pertama yang harus dilakukan.
---

# Selamat Datang, Guru Baru!

Memulai karier sebagai guru SD terasa menantang sekaligus menyenangkan. Banyak hal yang harus dipelajari dalam waktu singkat.

Halaman ini membantumu memulai dengan langkah yang jelas dan terarah.

::tip
Baca halaman ini sampai selesai sebelum kamu mulai mengurus administrasi. Banyak guru baru menghabiskan waktu berlebih karena tidak tahu prioritas.
::

## Apa yang Akan Kamu Temukan di Sini

Bagian "Mulai di Sini" berisi panduan praktis untuk tahun pertama mengajar. Kamu akan menemukan checklist, tips manajemen waktu, cara berkomunikasi, dan kesalahan umum yang sebaiknya dihindari.

## Langkah Pertama yang Direkomendasikan

1. Baca [Checklist Tahun Ajaran Baru](/mulai-di-sini/checklist-tahun-ajaran-baru)
2. Siapkan administrasi dasar di bagian [Administrasi](/administrasi/daftar-lengkap)
3. Pelajari struktur Kurikulum Merdeka di bagian terkait

## Siap Memulai?

Kamu tidak perlu menguasai semuanya sekaligus. Fokus pada satu hal dulu, lalu lanjut ke berikutnya.
```

### `content/3.administrasi/1.daftar-lengkap.md`

```md
---
title: Daftar Lengkap Administrasi Guru SD
description: Daftar lengkap dokumen administrasi yang harus dimiliki guru kelas SD berdasarkan Kurikulum Merdeka.
---

# Daftar Lengkap Administrasi Guru SD

Guru kelas SD membutuhkan sejumlah dokumen administrasi agar pembelajaran berjalan tertib dan sesuai ketentuan.

Dokumen-dokumen ini membantu perencanaan, pelaksanaan, dan evaluasi pembelajaran.

::important
Daftar ini mengacu pada praktik umum Kurikulum Merdeka. Sesuaikan dengan ketentuan dinas pendidikan setempat.
::

## Dokumen Wajib

| No | Dokumen                    | Keterangan                          |
|----|---------------------------|-------------------------------------|
| 1  | Identitas Guru & Data Kelas | Data dasar guru dan peserta didik  |
| 2  | Kalender Pendidikan        | Acuan hari efektif dan libur        |
| 3  | Program Tahunan (Prota)    | Perencanaan setahun                 |
| 4  | Program Semester (Promes)  | Perencanaan per semester            |
| 5  | Alur Tujuan Pembelajaran   | Penjabaran CP menjadi tujuan        |
| 6  | Modul Ajar                 | Rencana pembelajaran detail         |
| 7  | Jurnal Harian              | Catatan pelaksanaan harian          |
| 8  | Daftar Hadir               | Absensi peserta didik               |
| 9  | Buku & Rapor              | Pengolahan dan pelaporan hasil      |
| 10 | Administrasi P5            | Dokumen projek profil pelajar       |

## Cara Menggunakan Daftar Ini

Gunakan daftar di atas sebagai checklist. Centang setiap dokumen setelah kamu menyelesaikannya.

Mulai dari dokumen yang paling sering diminta saat supervisi: Modul Ajar, ATP, dan Jurnal Harian.
```

### `content/3.administrasi/7.modul-ajar.md`

```md
---
title: Modul Ajar
description: Panduan lengkap membuat Modul Ajar Kurikulum Merdeka untuk guru SD, lengkap dengan struktur dan contoh.
---

# Modul Ajar

Modul Ajar merupakan dokumen perencanaan pembelajaran yang menggantikan RPP dalam Kurikulum Merdeka. Dokumen ini lebih fleksibel dan berfokus pada capaian pembelajaran.

Guru menyusun Modul Ajar berdasarkan Alur Tujuan Pembelajaran (ATP) dan Capaian Pembelajaran (CP).

::tip
Satu Modul Ajar dapat digunakan untuk beberapa pertemuan selama masih dalam satu tujuan pembelajaran yang sama.
::

## Struktur Modul Ajar

Modul Ajar biasanya berisi bagian-bagian berikut:

- Informasi Umum (identitas, kelas, fase, alokasi waktu)
- Komponen Inti (tujuan, pemahaman bermakna, pertanyaan pemantik, kegiatan pembelajaran, asesmen)
- Lampiran (bahan ajar, media, instrumen asesmen)

## Langkah Membuat Modul Ajar

::steps
### Tentukan Capaian Pembelajaran
Pilih CP yang sesuai dengan fase dan mata pelajaran.

### Susun Tujuan Pembelajaran
Jabarkan CP menjadi tujuan yang lebih operasional.

### Rancang Kegiatan Pembelajaran
Tulis kegiatan pembuka, inti, dan penutup secara jelas.

### Siapkan Asesmen
Tentukan asesmen formatif dan sumatif yang sesuai.
::

## Contoh dan Template

Contoh Modul Ajar per fase dan mata pelajaran tersedia di bagian [Template Siap Pakai](/administrasi/template-siap-pakai).
```

---

## 3. Outline Detail Semua Halaman Lainnya

Saya ringkas dalam bentuk outline siap tulis (sudah disesuaikan gaya penulisan skill).

### Bagian 2 – Mulai di Sini
- **Checklist Tahun Ajaran Baru**: Daftar prioritas 2 minggu sebelum masuk + 1 bulan pertama.
- **Tips Tahun Pertama**: Manajemen ekspektasi, cara meminta bantuan, membangun relasi dengan siswa.
- **Manajemen Waktu**: Teknik batching administrasi, template mingguan, cara menghindari kerja sampai malam.
- **Komunikasi**: Script singkat berbicara dengan orang tua, cara menyampaikan masalah siswa.
- **Kesalahan Umum**: 8 kesalahan paling sering + cara menghindarinya.

### Bagian 3 – Administrasi (sisanya)
- **Prota & Promes**: Perbedaan, cara menyusun, contoh tabel.
- **ATP**: Cara menurunkan CP → TP → ATP.
- **Jurnal Harian**: Format sederhana yang tetap memenuhi supervisi.
- **Nilai & Rapor**: Alur dari asesmen ke rapor Kurikulum Merdeka.
- **Administrasi P5**: Dimensi, tema, dokumentasi, dan refleksi.
- **Template Siap Pakai**: Halaman pusat download (Google Drive / file lokal).

### Bagian 4 – Kurikulum Merdeka
- Pengenalan singkat + perbedaan dengan kurikulum sebelumnya.
- Fase A, B, C + mapel wajib.
- Pembelajaran Berdiferensiasi (konten, proses, produk).
- Asesmen diagnostik, formatif, sumatif.
- P5: panduan + contoh projek realistis untuk SD.

### Bagian 5 – Materi & Bahan Ajar
Setiap mapel mengikuti pola yang sama:
1. Capaian Pembelajaran ringkas per fase
2. Contoh tujuan pembelajaran
3. Ide kegiatan
4. Media yang mudah dibuat
5. Contoh asesmen

### Bagian 6–10
Mengikuti pola yang sama: pembuka singkat → penjelasan praktis → langkah-langkah → contoh → callout penting → tautan terkait.

---

## Rekomendasi Urutan Penulisan Konten

1. `2.mulai-di-sini/` (seluruhnya) → sangat dibutuhkan guru muda
2. `3.administrasi/` (prioritas: daftar-lengkap, modul-ajar, atp, template)
3. `4.kurikulum-merdeka/6.p5/`
4. `7.teknologi-guru/4.ai-tools.md` (sangat relevan sekarang)
5. Baru bagian materi per mapel

---

Apakah kamu ingin saya lanjutkan dengan:

**A.** Menulis penuh 5–6 halaman prioritas (siap tempel ke file), atau  
**B.** Membuatkan file `.md` lengkap untuk seluruh folder `2.mulai-di-sini` dan `3.administrasi` dulu?

Beritahu saja, nanti saya kerjakan langsung sesuai gaya penulisan skill di atas.