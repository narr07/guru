import { z } from 'zod'

export default defineMcpPrompt({
  description: 'Membantu guru merancang modul projek Projek Penguatan Profil Pelajar Pancasila (P5) SD.',
  inputSchema: {
    temaP5: z.string().describe('Tema P5 (contoh: Gaya Hidup Berkelanjutan, Kewirausahaan, Bhinneka Tunggal Ika)'),
    fase: z.string().describe('Fase/Kelas (contoh: Fase A - Kelas 1 & 2, Fase B - Kelas 3 & 4, Fase C - Kelas 5 & 6)'),
    judulProjek: z.string().describe('Judul projek atau fokus kegiatan (contoh: "Sampahku Tanggung Jawabku")'),
  },
  handler: async ({ temaP5, fase, judulProjek }) => {
    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `Saya ingin merancang modul Projek Penguatan Profil Pelajar Pancasila (P5) dengan Tema "${temaP5}" untuk ${fase} dengan fokus/judul projek "${judulProjek}".
Silakan cari referensi panduan P5 dan contoh tema projek di dokumentasi website (kategori "/kurikulum-merdeka/projek-p5/panduan-umum" atau "/kurikulum-merdeka/projek-p5/contoh-tema-projek").
Setelah membaca dokumentasi tersebut, bantu saya merancang draf modul P5 yang mencakup:
1. Tujuan Projek (Target dimensi, elemen, dan sub-elemen Profil Pelajar Pancasila).
2. Alur Kegiatan Projek (Tahap Pengenalan, Kontekstualisasi, Aksi, Refleksi, dan Tindak Lanjut).
3. Asesmen Projek (Asesmen Diagnostik, Formatif, dan Sumatif berupa rubrik penilaian).`,
          },
        }
      ]
    }
  }
})
