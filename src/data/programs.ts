export type ProgramMeta = {
  label: string;
  value: string;
};

export type ProgramItem = {
  title: string;
  description: string;
  metas?: ProgramMeta[];
  activities?: string[];
  outputs?: string[];
};

export type ProgramField = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  summary: string;
  objectives?: string[];
  functions?: string[];
  programs: ProgramItem[];
};

export const programFields: ProgramField[] = [
  {
    slug: "kaderisasi-jaringan",
    name: "Kaderisasi & Jaringan",
    shortName: "Kaderisasi",
    icon: "KJ",
    description:
      "Bidang Kaderisasi dan Jaringan berfokus pada pembinaan dan pengembangan anggota secara terstruktur untuk melahirkan generasi penerus yang mampu menjaga nilai, budaya, dan keberlanjutan organisasi.",
    summary:
      "Membina kader, memperkuat karakter, spiritualitas, kepemimpinan, dan jaringan generasi muda.",
    objectives: [
      "Menyiapkan generasi penerus kepemimpinan.",
      "Meningkatkan kapasitas dan keterampilan anggota.",
      "Membentuk karakter, mental, serta etika yang baik.",
      "Memperkuat budaya dan nilai dasar organisasi."
    ],
    programs: [
      {
        title: "Mentoring Pengurus HDMI",
        description:
          "Pembinaan internal bagi pengurus HDMI untuk memperdalam ilmu agama, memperkuat spiritualitas dan akhlak, serta meningkatkan kemampuan kepemimpinan.",
        metas: [
          { label: "Sasaran", value: "Pengurus HDMI" },
          { label: "Frekuensi", value: "1 kali dalam 2 pekan" }
        ],
        activities: [
          "Kajian pengurus, tarbiyah, atau syuroh.",
          "Penguatan dasar niat dakwah dan akhlak kader.",
          "Klinik baca Al-Qur'an.",
          "Rapat evaluasi."
        ]
      },
      {
        title: "Ruang Cahaya HDMI",
        description:
          "Program pembinaan remaja sebagai ruang perjumpaan, pembelajaran, dan pendampingan generasi muda untuk mengenal Islam, memperbaiki diri, membangun pergaulan sehat, serta menemukan lingkungan yang positif dan mendukung.",
        metas: [
          { label: "Sasaran", value: "Masyarakat umum, pemuda, masjid, sekolah, dan komunitas" },
          { label: "Frekuensi", value: "1 kali dalam 1 pekan" }
        ],
        activities: [
          "Pembinaan.",
          "Pertemuan akbar.",
          "Lomba keislaman antar kelompok binaan."
        ]
      },
      {
        title: "Rihlah HDMI",
        description:
          "Kegiatan perjalanan bersama pengurus HDMI dalam suasana santai dan edukatif untuk memperkuat hubungan antar-pengurus sekaligus menumbuhkan kesadaran spiritual dan semangat dakwah.",
        metas: [
          { label: "Sasaran", value: "Pengurus HDMI dan dapat melibatkan kelompok binaan" },
          { label: "Pelaksanaan", value: "Menyesuaikan kebutuhan" }
        ],
        activities: [
          "Jalan-Jalan Subuh (JJS).",
          "Kegiatan luar kota.",
          "Perlombaan antar-pengurus.",
          "NOSASI Produktif atau Nongkrong Sana-Sini."
        ]
      }
    ]
  },
  {
    slug: "perencanaan-pelaksanaan",
    name: "Perencanaan & Pelaksanaan",
    shortName: "Perencanaan",
    icon: "PP",
    description:
      "Bidang yang memastikan seluruh program HDMI Bone dapat direncanakan, dikoordinasikan, dilaksanakan, dan dievaluasi secara terarah.",
    summary:
      "Menata agenda, koordinasi kegiatan, evaluasi, dan administrasi program organisasi.",
    programs: [
      {
        title: "Kalender Program HDMI",
        description:
          "Penyusunan, sinkronisasi, dan penjadwalan seluruh program kerja agar setiap bidang mempunyai target serta agenda yang jelas.",
        metas: [
          { label: "Sasaran", value: "Pengurus HDMI" },
          { label: "Pelaksanaan", value: "1 kali dalam setahun" }
        ]
      },
      {
        title: "Manajemen Pelaksanaan Kegiatan HDMI",
        description:
          "Pengelolaan kepanitiaan kegiatan mulai dari persiapan, pembagian tugas, koordinasi, pelaksanaan, hingga evaluasi.",
        metas: [
          { label: "Sasaran", value: "Pengurus HDMI" },
          { label: "Pelaksanaan", value: "Opsional, menyesuaikan kebutuhan" }
        ]
      },
      {
        title: "Evaluasi Program Kerja HDMI",
        description:
          "Pemantauan dan penilaian pelaksanaan program untuk mengukur ketercapaian target, menemukan kendala, menilai efektivitas kegiatan, serta menentukan tindak lanjut.",
        metas: [
          { label: "Sasaran", value: "Pengurus HDMI" },
          { label: "Pelaksanaan", value: "2 kali dalam setahun" }
        ]
      },
      {
        title: "Database Keanggotaan",
        description: "Pendataan dan pembaruan database anggota atau pengurus HDMI.",
        metas: [
          { label: "Sasaran", value: "Pengurus HDMI" },
          { label: "Pelaksanaan", value: "Setiap tahun" }
        ]
      }
    ]
  },
  {
    slug: "kajian-riset",
    name: "Kajian & Riset",
    shortName: "Kajian",
    icon: "KR",
    description:
      "Ruang pengembangan wawasan, keterampilan, penelitian, dan budaya berpikir kritis di lingkungan HDMI Bone.",
    summary:
      "Mengembangkan budaya diskusi, peningkatan keterampilan, serta riset isu kepemudaan dan kemasyarakatan.",
    programs: [
      {
        title: "Ruang Fikrah HDMI",
        description:
          "Forum diskusi dalam bentuk dialog publik, FGD, bedah buku, atau bedah isu yang membahas isu aktual secara kritis dan akademis.",
        metas: [
          { label: "Sasaran", value: "Pengurus, kelompok binaan, dan masyarakat umum" },
          { label: "Pelaksanaan", value: "1 kali dalam 1 bulan, tentatif" }
        ],
        activities: [
          "Dialog publik.",
          "FGD.",
          "Bedah buku.",
          "Bedah isu keislaman, kepemudaan, sosial, budaya, pendidikan, teknologi, dan kebangsaan."
        ]
      },
      {
        title: "Skill Lab HDMI",
        description:
          "Program peningkatan kapasitas dan keahlian kader melalui pelatihan yang sesuai dengan kebutuhan dakwah, perkembangan teknologi, dunia profesional, dan kebutuhan masyarakat.",
        metas: [
          { label: "Sasaran", value: "Pengurus, kelompok binaan, dan masyarakat umum" },
          { label: "Pelaksanaan", value: "Tentatif" }
        ]
      },
      {
        title: "HDMI Research",
        description:
          "Program pengumpulan informasi, survei, dan kajian sederhana mengenai persoalan pemuda, keagamaan, sosial kemasyarakatan, dan isu terkini sebagai dasar penyusunan program dakwah yang lebih tepat sasaran.",
        metas: [
          { label: "Sasaran", value: "Pengurus, kelompok binaan, dan masyarakat umum" },
          { label: "Pelaksanaan", value: "1 kali dalam 3 bulan, tentatif" }
        ]
      }
    ]
  },
  {
    slug: "humas",
    name: "Hubungan Masyarakat",
    shortName: "Humas",
    icon: "HM",
    description:
      "Bidang Hubungan Masyarakat menjadi penghubung antara HDMI Bone dengan masyarakat, lembaga, komunitas, masjid, sekolah, pemerintah, organisasi, media, dan berbagai pihak eksternal.",
    summary:
      "Memperkuat publikasi, dakwah masyarakat, kemitraan, dokumentasi, dan gerakan sosial.",
    functions: [
      "Publikasi & Branding.",
      "Komunikasi Eksternal.",
      "Dokumentasi & Informasi.",
      "Kehumasan Sosial."
    ],
    programs: [
      {
        title: "Media dan Publikasi",
        description:
          "Mengelola informasi, publikasi, dan citra HDMI agar kegiatan serta nilai dakwah dapat dikenal dan tersampaikan secara efektif.",
        metas: [{ label: "Sasaran", value: "Masyarakat umum" }],
        activities: [
          "Media sosial.",
          "Publikasi kegiatan.",
          "Konten dakwah.",
          "Desain pamflet.",
          "Video kegiatan.",
          "Media relation."
        ]
      },
      {
        title: "Safari Dakwah",
        description:
          "Memperluas jangkauan dakwah HDMI sekaligus membangun hubungan langsung dengan masyarakat melalui kegiatan keagamaan dan dialog.",
        metas: [
          { label: "Sasaran", value: "Masyarakat umum, pemuda, masjid, sekolah, dan komunitas" }
        ],
        activities: [
          "Safari Dakwah Ramadan.",
          "Khutbah Jumat.",
          "Dialog pemuda.",
          "Kegiatan keagamaan lainnya."
        ]
      },
      {
        title: "Hubungan & Kemitraan Eksternal",
        description:
          "Membangun, memperluas, dan menjaga hubungan baik HDMI dengan lembaga, organisasi, komunitas, masjid, sekolah, media, masyarakat, serta pihak lainnya.",
        metas: [{ label: "Sasaran", value: "Lembaga, instansi, organisasi, sekolah, komunitas, media, dan masyarakat" }],
        activities: [
          "Audiensi atau silaturahmi.",
          "Kunjungan kelembagaan.",
          "Kolaborasi kegiatan."
        ]
      },
      {
        title: "Sosial Kemanusiaan",
        description:
          "Mewujudkan nilai dakwah melalui kepedulian dan aksi nyata terhadap persoalan sosial dan kemanusiaan di masyarakat.",
        metas: [{ label: "Sasaran", value: "Masyarakat umum, kelompok binaan, dan pihak yang membutuhkan" }],
        activities: [
          "HDMI Peduli.",
          "Bakti sosial.",
          "Santunan.",
          "Bantuan bencana.",
          "Donasi."
        ]
      },
      {
        title: "Dokumentasi dan Informasi",
        description:
          "Menyediakan dokumentasi yang tertata dan menjaga arsip kegiatan HDMI sebagai bahan publikasi, evaluasi, serta rekam jejak organisasi.",
        metas: [{ label: "Sasaran", value: "Internal HDMI dan masyarakat umum" }],
        activities: [
          "HDMI Digital Archive.",
          "Dokumentasi foto atau video.",
          "Arsip kegiatan.",
          "Publikasi."
        ]
      }
    ]
  },
  {
    slug: "daiyah",
    name: "Da'iyah",
    shortName: "Da'iyah",
    icon: "DY",
    description:
      "Bidang Da'iyah menghadirkan program dakwah dan pembinaan yang menyentuh kebutuhan muslimah melalui kegiatan spiritual, pembinaan Al-Qur'an, pengembangan diri, dan dakwah digital.",
    summary:
      "Menghadirkan ruang dakwah, pembinaan Al-Qur'an, refleksi, dan konten khusus muslimah.",
    programs: [
      {
        title: "Ruang Teduh Muslimah",
        description:
          "Ruang refleksi dan ekspresi diri bagi muslimah melalui journaling berbasis nilai-nilai Al-Qur'an yang dikemas secara interaktif dan menyentuh sisi spiritual, emosional, serta pengembangan diri.",
        metas: [
          { label: "Sasaran", value: "Da'iyah dan muslimah umum" },
          { label: "Frekuensi", value: "1 kali dalam 6 bulan" }
        ],
        activities: [
          "Gratitude: menuliskan nikmat Allah yang sering terlupakan.",
          "Healing With Qur'an: memilih ayat Al-Qur'an yang relevan dengan kondisi diri dan melakukan refleksi.",
          "Let It Go: menuliskan hal-hal yang ingin diserahkan dan dipercayakan kepada Allah SWT.",
          "My Next Chapter: menuliskan harapan, resolusi, dan komitmen menjadi muslimah yang lebih baik.",
          "Sedekah Kata: menuangkan hasil refleksi menjadi tulisan singkat yang bermanfaat."
        ],
        outputs: [
          "Ruang refleksi spiritual yang positif.",
          "Karya journaling peserta.",
          "Buku Antologi Ruang Teduh Muslimah.",
          "Komunitas kecil muslimah yang saling menguatkan."
        ]
      },
      {
        title: "Qur'an Corner",
        description:
          "Program pembinaan Al-Qur'an yang dikemas secara santai, interaktif, dan dekat dengan kehidupan generasi muda.",
        metas: [
          { label: "Sasaran", value: "Muslimah remaja dan dewasa" },
          { label: "Lokasi", value: "Sekolah, masjid, majelis taklim, kampus, komunitas pemuda, dan ruang publik" },
          { label: "Frekuensi", value: "1 kali dalam 6 bulan untuk kegiatan utama" }
        ],
        activities: [
          "Tahsin dan perbaikan bacaan Al-Qur'an.",
          "Tadabbur ayat pilihan.",
          "Games atau quiz Qur'ani.",
          "Konsultasi bacaan personal."
        ],
        outputs: [
          "Peningkatan kemampuan membaca Al-Qur'an.",
          "Pemahaman dasar terhadap ayat yang dipelajari.",
          "Jejaring pembinaan Al-Qur'an.",
          "Dokumentasi kegiatan."
        ]
      },
      {
        title: "Quotes Muslimah",
        description:
          "Program dakwah digital berupa pesan singkat inspiratif dan edukatif tentang kehidupan muslimah berdasarkan Al-Qur'an, hadis, dan nilai-nilai Islam. Program ini dilakukan bersama Bidang Humas HDMI Bone.",
        metas: [
          { label: "Platform", value: "Instagram, WhatsApp, dan media sosial organisasi" },
          { label: "Frekuensi", value: "Minimal 1 konten setiap 3 bulan" }
        ],
        activities: [
          "Quotes Qur'ani.",
          "Pesan singkat muslimah.",
          "Reminder ibadah.",
          "Kampanye kebaikan."
        ],
        outputs: [
          "Konten dakwah digital berupa video atau pamflet.",
          "Identitas dakwah digital Bidang Da'iyah.",
          "Arsip konten dakwah."
        ]
      }
    ]
  }
];

export function getProgramField(slug: string) {
  return programFields.find((field) => field.slug === slug);
}
