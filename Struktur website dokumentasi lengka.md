**Struktur website dokumentasi lengkap untuk guru SD (terutama guru muda)** berbasis Nuxt + Nuxt UI Docs Template.

Website ini dirancang sebagai **pusat dokumentasi praktis** (bukan sekadar blog), mirip dokumentasi teknis, supaya guru bisa langsung mencari, menyalin, dan memakai. Fokus utamanya: **semua yang dibutuhkan guru SD sehari-hari**, dari administrasi hingga strategi mengajar, dengan penekanan khusus pada kebutuhan guru muda/pemula.

### Prinsip Desain Struktur
- Mengikuti pola Nuxt Content (folder bernomor agar urutan sidebar otomatis rapi).
- Hierarki dari **umum → spesifik**, dan **pemula → mahir**.
- Setiap bagian besar punya halaman pengantar + sub-halaman detail + contoh + template.
- Bahasa Indonesia, praktis, siap pakai.
- Mudah dikembangkan bertahap (mulai dari yang paling dibutuhkan dulu).

### Usulan Struktur Navigasi (Sidebar)

```
1. Pendahuluan
   ├── Latar Belakang          ← (sudah ada)
   ├── Visi, Misi & Tujuan
   ├── Cara Menggunakan Platform Ini
   └── Roadmap Pengembangan

2. Mulai di Sini (Khusus Guru Muda)
   ├── Selamat Datang, Guru Baru!
   ├── Checklist Persiapan Tahun Ajaran Baru
   ├── Tips Bertahan di Tahun Pertama Mengajar
   ├── Manajemen Waktu & Beban Kerja Guru
   ├── Komunikasi dengan Kepala Sekolah, Rekan & Orang Tua
   └── Kesalahan Umum yang Sering Dilakukan Guru Baru (dan cara menghindarinya)

3. Administrasi Guru SD (Kurikulum Merdeka)
   ├── Daftar Lengkap Administrasi yang Wajib Dimiliki
   ├── Identitas Guru & Data Kelas
   ├── Kalender Pendidikan & Jadwal Pelajaran
   ├── Program Tahunan (Prota)
   ├── Program Semester (Promes)
   ├── Alur Tujuan Pembelajaran (ATP)
   ├── Modul Ajar (Struktur + Cara Membuat + Contoh)
   ├── Jurnal Harian / Catatan Pembelajaran
   ├── Daftar Hadir & Absensi
   ├── Pengolahan Nilai & Buku Nilai
   ├── Rapor Kurikulum Merdeka
   ├── Administrasi Projek P5
   ├── Inventaris Kelas & Sarana Prasarana
   └── Kumpulan Template Siap Pakai (Download)

4. Kurikulum Merdeka untuk SD
   ├── Pengenalan Kurikulum Merdeka
   ├── Struktur Kurikulum SD (Fase A, B, C)
   ├── Capaian Pembelajaran (CP) per Fase & Mata Pelajaran
   ├── Pembelajaran Berdiferensiasi
   ├── Asesmen (Diagnostik, Formatif, Sumatif)
   └── Projek Penguatan Profil Pelajar Pancasila (P5)
       ├── Panduan Umum P5
       ├── Contoh Tema & Projek per Fase
       └── Dokumentasi & Pelaporan P5

5. Materi & Bahan Ajar
   ├── Bahasa Indonesia
   ├── Matematika
   ├── Ilmu Pengetahuan Alam dan Sosial (IPAS)
   ├── Pendidikan Pancasila
   ├── Pendidikan Agama dan Budi Pekerti
   ├── Seni (Rupa / Musik / Tari / Teater)
   ├── Pendidikan Jasmani, Olahraga dan Kesehatan (PJOK)
   ├── Bahasa Inggris
   └── Muatan Lokal
   (Setiap mapel berisi: CP → Contoh Modul Ajar → Media → Latihan → Asesmen)

6. Strategi & Metode Pembelajaran
   ├── Model-Model Pembelajaran (PBL, PjBL, Inquiry, dll)
   ├── Media Pembelajaran Kreatif & Murah
   ├── Pengelolaan Kelas (Classroom Management)
   ├── Mengajar di Kelas Inklusi / ABK
   ├── Penguatan Literasi & Numerasi
   └── Pembelajaran Mendalam (Deep Learning) – sesuai arah terbaru

7. Teknologi & Digitalisasi untuk Guru
   ├── Platform Resmi (Merdeka Mengajar, Rumah Belajar, dll)
   ├── Google Workspace for Education
   ├── Canva for Education
   ├── AI Tools untuk Guru (membuat RPP, soal, media, dll)
   ├── Tools Interaktif (Wordwall, Kahoot, Nearpod, Quizizz, dll)
   └── Cara Membuat Media Pembelajaran Digital

8. Pengembangan Profesional
   ├── Program Pendidikan Guru (PPG)
   ├── Sertifikasi & Uji Kompetensi
   ├── Komunitas Belajar & KKG
   ├── Penelitian Tindakan Kelas (PTK)
   └── Membangun Portofolio Guru

9. Kesejahteraan & Soft Skills Guru
   ├── Manajemen Stres & Mencegah Burnout
   ├── Work-Life Balance sebagai Guru
   ├── Etika Profesi Guru
   └── Membangun Relasi Positif di Sekolah

10. Sumber Daya & Referensi
    ├── Link Resmi Kemendikdasmen / Kemdikbud
    ├── Peraturan & Juknis Terbaru
    ├── Buku Digital & E-Modul Resmi
    ├── FAQ (Pertanyaan yang Sering Diajukan)
    └── Kontribusi & Saran
```

### Penjelasan Prioritas Pengembangan (Rekomendasi Urutan)

**Fase 1 (Paling Mendesak – segera dibuat):**
1. Bagian **2. Mulai di Sini** (sangat dibutuhkan guru muda)
2. Bagian **3. Administrasi Guru SD** (ini yang paling dicari)
3. Bagian **4. Kurikulum Merdeka** (khusus P5 + Modul Ajar + ATP)

**Fase 2:**
- Materi & Bahan Ajar (mulai dari mapel inti dulu: Matematika, Bahasa Indonesia, IPAS)
- Teknologi untuk Guru

**Fase 3:**
- Strategi Pembelajaran
- Pengembangan Profesional & Kesejahteraan

### Saran Teknis di Template Nuxt UI Docs

Struktur folder `content/` yang disarankan:

```
content/
├── index.md                          ← Homepage
├── 1.pendahuluan/
│   ├── 1.latar-belakang.md
│   ├── 2.visi-misi.md
│   └── ...
├── 2.mulai-di-sini/
│   ├── 1.selamat-datang.md
│   ├── 2.checklist-tahun-ajaran-baru.md
│   └── ...
├── 3.administrasi/
│   ├── 1.daftar-lengkap.md
│   ├── 2.prota-promes.md
│   ├── 3.modul-ajar.md
│   └── ...
├── 4.kurikulum-merdeka/
│   └── ...
└── ...
```

Gunakan **numeric prefix** (1., 2., 3.) agar urutan di sidebar otomatis benar.

### Fitur Tambahan yang Sangat Direkomendasikan
- **Halaman “Template Siap Pakai”** yang terpusat (bisa di bagian Administrasi atau halaman khusus).
- **Pencarian yang kuat** (sudah ada di template, pastikan dioptimasi dengan keyword guru SD).
- Tag / filter berdasarkan **Fase** (A/B/C) dan **Kelas**.
- Tombol “Salin” atau “Download” di setiap contoh modul/template.
- Bagian “Terakhir Diperbarui” di setiap dokumen penting (karena regulasi sering berubah).

---

Apakah struktur ini sudah sesuai dengan yang kamu bayangkan?  

Kalau mau, saya bisa langsung buatkan:
1. Versi lebih detail (isi outline setiap halaman), atau
2. Struktur folder `content/` yang sudah siap copy-paste, atau
3. Prioritas konten yang harus ditulis duluan beserta contoh kerangka tulisan.

Silakan beri tahu arah selanjutnya.