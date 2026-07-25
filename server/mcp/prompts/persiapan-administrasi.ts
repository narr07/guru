import { z } from 'zod'

export default defineMcpPrompt({
  description: 'Membantu guru memeriksa daftar kelengkapan administrasi kelas di tahun ajaran baru.',
  inputSchema: {
    semester: z.string().describe('Semester aktif (contoh: Ganjil, Genap)'),
    faseAtauKelas: z.string().describe('Fase atau kelas yang diajar (contoh: Fase B / Kelas 4)'),
  },
  handler: async ({ semester, faseAtauKelas }) => {
    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `Saya adalah guru SD yang mengajar di ${faseAtauKelas} untuk Semester ${semester}. Saya ingin mempersiapkan seluruh administrasi guru.
Silakan cari daftar dokumen administrasi wajib, prota, promes, kalender akademik, dan jurnal harian di dokumentasi website (kategori "/administrasi/daftar-lengkap" atau "/mulai-di-sini/checklist-tahun-ajaran").
Berdasarkan dokumen tersebut:
1. Buatkan tabel checklist administrasi wajib yang harus saya siapkan.
2. Berikan langkah-langkah praktis menyusun administrasi tersebut agar efisien dan terstruktur.
3. Sebutkan template apa saja yang bisa saya gunakan langsung dari website ini.`,
          },
        }
      ]
    }
  }
})
