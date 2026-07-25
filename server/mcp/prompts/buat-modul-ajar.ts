import { z } from 'zod'

export default defineMcpPrompt({
  description: 'Membantu guru menyusun Modul Ajar atau RPP Kurikulum Merdeka untuk SD.',
  inputSchema: {
    mataPelajaran: z.string().describe('Mata pelajaran (contoh: Matematika, IPAS, Bahasa Indonesia)'),
    kelas: z.string().describe('Kelas di SD (contoh: Kelas 1, Kelas 4)'),
    topik: z.string().describe('Topik atau materi pokok yang ingin diajarkan'),
  },
  handler: async ({ mataPelajaran, kelas, topik }) => {
    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `Tolong bantu saya menyusun draf Modul Ajar Kurikulum Merdeka untuk pelajaran ${mataPelajaran} di ${kelas} dengan topik "${topik}". 
Pertama, silakan gunakan tool \`list-pages\` atau \`get-page\` untuk mencari panduan penyusunan Modul Ajar di kategori "/administrasi/modul-ajar" atau materi pembelajaran terkait di "/materi-bahan-ajar" di dokumentasi website.
Setelah membaca panduannya, susunlah modul ajar tersebut lengkap dengan:
1. Informasi Umum (Identitas, Kompetensi Awal, Profil Pelajar Pancasila, Sarana Prasarana).
2. Komponen Inti (Tujuan Pembelajaran, Pemahaman Bermakna, Pertanyaan Pemantik, Kegiatan Pembelajaran Berdiferensiasi, Asesmen).
3. Lampiran (Lembar Kerja Peserta Didik/LKPD, Bahan Bacaan, Glosarium).
Sesuaikan metode belajarnya agar interaktif dan mudah dipahami siswa SD.`,
          },
        }
      ]
    }
  }
})
