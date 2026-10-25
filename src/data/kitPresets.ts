export interface KitItem {
  id: string;
  code: string;
  category: 'culture' | 'tourism' | 'seed' | 'puzzle' | 'umkm';
  categoryLabel: string;
  province: 'Kalbar' | 'Kalteng' | 'Kalsel' | 'Kaltim' | 'Kaltara';
  provinceName: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
  badge: string;
  khasBorneo: string;
  detail: {
    heading: string;
    body: string;
    bullets: string[];
    actionLabel: string;
    audioSimulation?: string;
  };
}

export const KIT_ITEMS: KitItem[] = [
  // =========================================================================
  // 1. CULTURE CARDS (KARTU ADAT & TATA KRAMA 5 PROVINSI)
  // =========================================================================
  {
    id: "cult-1",
    code: "KODE-DAYAK-01",
    category: "culture",
    categoryLabel: "Culture Card",
    province: "Kaltim",
    provinceName: "Kalimantan Timur",
    title: "Rumah Lamin & Anting Aruu' Pampang",
    subtitle: "Filosofi Kesetaraan Suku Dayak Kenyah",
    description: "Tata krama sakral menaiki Lamin Adat dan penghormatan tetua bertelinga panjang.",
    image: "/assets/images/dayak_kenyah_dancer_1792859686804.jpg",
    icon: "temple_buddhist",
    badge: "Culture Card Kaltim",
    khasBorneo: "Telingaan Aruu' (telinga bergelantungan anting kuningan) melambangkan kesabaran dan strata kemuliaan Dayak Kenyah.",
    detail: {
      heading: "Tata Krama Menghadap Tetua Adat di Lamin Megah",
      body: "Lamin adat Dayak Kenyah dibangun tanpa paku besi, disangga tiang ulin berukir relief naga aso' penolak bala. Rumah ini menaungi puluhan keluarga dalam musyawarah mufakat yang setara.",
      bullets: [
        "Ucapkan salam adat dengan meletakkan tangan kanan di dada.",
        "Lepaskan alas kaki sebelum menaiki tangga kayu hejot ulin bertakik.",
        "Minta izin santun kepada sesepuh sebelum memotret tetua beranting panjang."
      ],
      actionLabel: "Dengarkan Petikan Alat Musik Sape'",
      audioSimulation: "Alunan melodi dawai Sape' Dayak Kenyah (Lagu Lan E Tuyang)"
    }
  },
  {
    id: "cult-2",
    code: "KODE-DAYAK-02",
    category: "culture",
    categoryLabel: "Culture Card",
    province: "Kalbar",
    provinceName: "Kalimantan Barat",
    title: "Rumah Radakng Saham 1875 & Salam Jubata",
    subtitle: "Pusaka Rumah Panjang Tertua Dayak Kanayatn",
    description: "Rumah panjang 186 meter dengan 35 pintu bilik keluarga yang masih berpenghuni aktif.",
    image: "/assets/images/rumah_betang_dayak_1792812028554.jpg",
    icon: "badge",
    badge: "Culture Card Kalbar",
    khasBorneo: "Semboyan 'Adil Ka' Talino, Bacuramin Ka' Saruga, Basengat Ka' Jubata' bermakna berbuat adil pada sesama, bercermin ke surga, bernapas pada Tuhan.",
    detail: {
      heading: "Etika Menginap di Selasar Pante Rumah Radakng",
      body: "Didirikan tahun 1875 di Kabupaten Landak, Radakng Saham bertahan dari generasi ke generasi berkat ketahanan kayu ulin Kalimantan yang semakin tua semakin padat dan kokoh.",
      bullets: [
        "Balas salam tetua dengan kalimat 'Arus... Arus... Arus!' penuh takzim.",
        "Dilarang melangkahi sesaji upacara Naik Dango di tiang pusat lamin.",
        "Jaga ketenangan di selasar malam hari saat tetua melantunkan doa Jubata."
      ],
      actionLabel: "Buka Panduan Salam Adat Dayak Kanayatn"
    }
  },
  {
    id: "cult-3",
    code: "KODE-DAYAK-03",
    category: "culture",
    categoryLabel: "Culture Card",
    province: "Kalteng",
    provinceName: "Kalimantan Tengah",
    title: "Betang Damang Batu & Perdamaian 1894",
    subtitle: "Monumen Penghentian Tradisi Mengayau Dayak",
    description: "Sejarah musyawarah akbar Tumbang Anoi yang menyatukan ratusan suku Dayak se-Borneo.",
    image: "/assets/images/betang_damang_batu_1792861176157.jpg",
    icon: "handshake",
    badge: "Culture Card Kalteng",
    khasBorneo: "Tiang Sandung dan Pantak kayu ulin tempat menyimpan tulang leluhur dalam upacara Tiwah penganut Kaharingan.",
    detail: {
      heading: "Nilai Luhur Kesepakatan Damai Tumbang Anoi",
      body: "Pertemuan bersejarah tahun 1894 di Betang Damang Batu mengakhiri permusuhan antarsuku di seluruh Kalimantan, melahirkan piagam persaudaraan abadi rumpun Dayak Borneo.",
      bullets: [
        "Hormati tiang Pantak ulin berukir figur pahlawan leluhur di halaman betang.",
        "Dilarang menyentuh kotak Sandung tanpa kehadiran juru kunci adat (Pisur).",
        "Patuhi tata tertib musyawarah mufakat di aula tengah balai."
      ],
      actionLabel: "Baca Ringkasan Piagam Tumbang Anoi 1894"
    }
  },
  {
    id: "cult-4",
    code: "KODE-DAYAK-04",
    category: "culture",
    categoryLabel: "Culture Card",
    province: "Kalsel",
    provinceName: "Kalimantan Selatan",
    title: "Balai Adat Haratai Dayak Meratus",
    subtitle: "Ritual Panen Raya Aruh Ganal & Tarian Kanjar",
    description: "Kearifan berladang gilir balik suku Dayak Bukit di kaki Gunung Halau-Halau.",
    image: "/assets/images/balai_adat_meratus_1792861191123.jpg",
    icon: "diversity_3",
    badge: "Culture Card Kalsel",
    khasBorneo: "Dayak Meratus menjaga mata air hulu Barito dengan pantangan membuka ladang di hutan larangan 'Hutan Keramat'.",
    detail: {
      heading: "Adat Sopan Santun Memasuki Lembah Loksado",
      body: "Komunitas Dayak Meratus mempraktikkan kearifan pangan berbasis varietas padi gunung lokal tanpa pupuk kimia sintetis, disyukuri dalam upacara tahunan Aruh Mahanyari.",
      bullets: [
        "Izin kepada kepala Balai Adat sebelum memasuki kawasan lumbung padi bapadi.",
        "Jangan memotret prosesi sakral pembacaan mantra beras kuning Balian.",
        "Gunakan pakaian bertutup bahu dan lutut saat memasuki Balai Haratai."
      ],
      actionLabel: "Dengarkan Narasi Upacara Adat Aruh Ganal"
    }
  },
  {
    id: "cult-5",
    code: "KODE-DAYAK-05",
    category: "culture",
    categoryLabel: "Culture Card",
    province: "Kaltara",
    provinceName: "Kalimantan Utara",
    title: "Hutan Larangan Tane' Olen Setulang",
    subtitle: "Hukum Adat Konservasi Suku Dayak Oma' Lung",
    description: "Warisan 5.300 hektar rimba perawan peraih penghargaan Kalpataru pelestari hutan.",
    image: "/assets/images/tane_olen_setulang_1792861234752.jpg",
    icon: "shield",
    badge: "Culture Card Kaltara",
    khasBorneo: "Tane' Olen bermakna 'tanah terlarang yang dicadangkan', hanya boleh diambil kayunya untuk fasilitas umum warga atas izin dewan adat.",
    detail: {
      heading: "Protokol Memasuki Wilayah Lindung Adat Tane' Olen",
      body: "Masyarakat Setulang mempertahankan hutan mereka dari ancaman pembalakan komersial sejak 1990-an dengan menerapkan denda adat tembikar kuno bagi pelanggar.",
      bullets: [
        "Wajib didampingi pemandu resmi ranger warga desa Setulang.",
        "Dilarang menebang pohon sekecil apa pun atau mengambil anggrek hutan.",
        "Bawa pulang seluruh puntung rokok dan sampah demi menjaga kesucian tanah adat."
      ],
      actionLabel: "Lihat Buku Hukum Adat Tane' Olen Setulang"
    }
  },

  // =========================================================================
  // 2. TOURISM CARDS (ETIKA WISATA & SATWA ENDEMIK 5 PROVINSI)
  // =========================================================================
  {
    id: "tour-1",
    code: "KODE-ORANGUTAN-02",
    category: "tourism",
    categoryLabel: "Tourism Card",
    province: "Kalteng",
    provinceName: "Kalimantan Tengah",
    title: "Protokol Orangutan Liar Camp Leakey",
    subtitle: "Menjaga Primata Besar Pongo pygmaeus",
    description: "Jarak aman minimum 5 meter dan larangan memberi makan demi mencegah zoonosis.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7QZYd2uTl9LGp0sAo2cJNeWpUGj7NAdbpVj6JYBxeSNUIlMU7k8QFhstxZ-Ak0NGke00p7OIkl5EHNg6pufMLfCdMSsnZvbLhDeCRwUSEHmxnujv7Q_7vnQ_3RmVL7axPCci2QkeX72O3JUXDNPreucpR_yaPeMeJm9zd4PuUrp2OzVSvW2uzVJG6NNhVEwCx37AfDQ1BdUoGPUJ6KvszfVPRHqAU0NvXl4vinV68kkjjqj1SC-RI",
    icon: "pets",
    badge: "Tourism Card Kalteng",
    khasBorneo: "Orangutan Kalimantan memiliki kantung pipi lebar (cheek pad) pada jantan dewasa yang memantulkan suara panggilan jarak jauh 'long call'.",
    detail: {
      heading: "Panduan Interaksi Satwa TN Tanjung Puting",
      body: "Memiliki kesamaan genetika 97% dengan manusia, orangutan rentan tertular patogen manusia. Kepatuhan wisatawan di titian kayu Camp Leakey menentukan kelangsungan hidup populasi liar.",
      bullets: [
        "Gunakan masker kain penutup hidung dan mulut saat berada di area pakan.",
        "Bila orangutan melintas di jembatan kayu, mundur perlahan tanpa bersuara keras.",
        "Simpan semua makanan dan minuman manis tertutup rapat di dalam perahu klotok."
      ],
      actionLabel: "Simulasikan Radar Jarak Aman 5 Meter"
    }
  },
  {
    id: "tour-2",
    code: "KODE-SATWA-KALSEL",
    category: "tourism",
    categoryLabel: "Tourism Card",
    province: "Kalsel",
    provinceName: "Kalimantan Selatan",
    title: "Etika Menyusuri Bekantan Muara Barito",
    subtitle: "Monyet Hidung Panjang Maskot Kalimantan Selatan",
    description: "Pengamatan santun primata kanopi mangrove rambai Pulau Curiak tanpa gelombang kapal.",
    image: "/assets/images/bekantan_curiak_island_1792861205721.jpg",
    icon: "cruelty_free",
    badge: "Tourism Card Kalsel",
    khasBorneo: "Bekantan (Nasalis larvatus) memiliki lambung berkamar majemuk untuk mencerna selulosa daun mangrove beracun.",
    detail: {
      heading: "Protokol Penjelajahan Delta Sungai Barito",
      body: "Sahabat Bekantan Indonesia (SBI) menetapkan zona tenang perairan di sekitar Pulau Curiak agar perahu motor tidak menimbulkan ombak yang merusak sarang bekantan tepi sungai.",
      bullets: [
        "Perlambat laju mesin perahu ke kecepatan jelajah rendah (idle speed).",
        "Gunakan teropong binokular daripada mendekati ranting kanopi tidur satwa.",
        "Dilarang membuang kantong plastik ke air payau karena membahayakan fauna muara."
      ],
      actionLabel: "Cek Panduan Suaka Mangrove Rambai"
    }
  },
  {
    id: "tour-3",
    code: "KODE-SATWA-KALTIM",
    category: "tourism",
    categoryLabel: "Tourism Card",
    province: "Kaltim",
    provinceName: "Kalimantan Timur",
    title: "Etika Ubur-ubur Kakaban & Penyu Derawan",
    subtitle: "Kawasan Konservasi Laut Pesisir Berau",
    description: "Larangan sirip renang di danau ubur-ubur dan pantau penyu bertelur tanpa blitz.",
    image: "/assets/images/kakaban_jellyfish_1792812009873.jpg",
    icon: "water",
    badge: "Tourism Card Kaltim",
    khasBorneo: "Danau Kakaban dihuni 4 spesies ubur-ubur tanpa sengat yang berevolusi damai selama jutaan tahun dalam danau atol terisolasi.",
    detail: {
      heading: "Aturan Menyelam di Surga Bahari Berau",
      body: "Ekosistem terumbu karang Derawan dan Maratua merupakan habitat penyu hijau (Chelonia mydas) terbesar di Indonesia, dilindungi di bawah regulasi konservasi perairan daerah.",
      bullets: [
        "Dilarang menggunakan sepatu katak (fins) di danau Kakaban karena dapat mengoyak tubuh ubur-ubur lembut.",
        "Gunakan tabir surya bersertifikasi reef-safe bebas oxybenzone dan octinoxate.",
        "Dilarang menyalakan senter terang atau lampu kamera saat penyu bertelur di malam hari."
      ],
      actionLabel: "Lihat Sertifikat Konservasi Karang Derawan"
    }
  },
  {
    id: "tour-4",
    code: "KODE-SATWA-KALBAR",
    category: "tourism",
    categoryLabel: "Tourism Card",
    province: "Kalbar",
    provinceName: "Kalimantan Barat",
    title: "Burung Rangkong Badak & Arwana Sentarum",
    subtitle: "Simbol Kemuliaan Langit & Air Kapuas Hulu",
    description: "Protokol pengamatan burung purba penyebar biji rimba dan suaka ikan purba.",
    image: "/assets/images/rangkong_badak_borneo_1792812028957.jpg",
    icon: "nest_cam_wired_stand",
    badge: "Tourism Card Kalbar",
    khasBorneo: "Burung Rangkong Badak (Buceros rhinoceros) bertengger di pohon ulin tertinggi dan bulunya menjadi mahkota sakral upacara Dayak.",
    detail: {
      heading: "Konservasi Hayati di Jantung Heart of Borneo",
      body: "Taman Nasional Betung Kerihun dan Danau Sentarum membentuk koridor biosfer raksasa yang menampung keanekaragaman ikan air tawar dan primata langka pulau Borneo.",
      bullets: [
        "Jangan meniru suara siulan burung rangkong di kanopi sarang alami.",
        "Dilarang mengambil anakan arwana liar di musim pemijahan air tenang Sentarum.",
        "Beli madu hutan organik bersertifikat panen lestari pohon tualang warga."
      ],
      actionLabel: "Lihat Peta Koridor Hayati Kapuas Hulu"
    }
  },
  {
    id: "tour-5",
    code: "KODE-SATWA-KALTARA",
    category: "tourism",
    categoryLabel: "Tourism Card",
    province: "Kaltara",
    provinceName: "Kalimantan Utara",
    title: "Gajah Kerdil Borneo & Hutan Bakau Tarakan",
    subtitle: "Spesies Unik Elephas maximus borneensis",
    description: "Protokol zonasi satwa perbatasan Sebuku Sembakung dan suaka mangrove kota pulau.",
    image: "/assets/images/kkmb_tarakan_boardwalk_1792861249617.jpg",
    icon: "forest",
    badge: "Tourism Card Kaltara",
    khasBorneo: "Gajah kerdil Kalimantan memiliki ekor lebih panjang hingga menyentuh tanah dan telinga lebih bulat dibanding gajah Asia daratan.",
    detail: {
      heading: "Observasi Cagar Satwa Liar Kalimantan Utara",
      body: "Suaka Sebuku Sembakung dan KKMB Tarakan menjadi benteng konservasi penting lintas batas bagi kawanan gajah kerdil dan ribuan kepiting bakau penahan intrusi laut.",
      bullets: [
        "Hormati jalur migrasi gajah kerdil di hutan hulu perbatasan Nunukan.",
        "Dilarang menyalakan petasan atau suara dentuman di sekitar koridor satwa liar.",
        "Berjalan di titian ulin KKMB tanpa memberi keripik buatan kepada bekantan."
      ],
      actionLabel: "Unduh Peta Koridor Gajah Kerdil Sebuku"
    }
  },

  // =========================================================================
  // 3. KERTAS BENIH (BIBIT ENDEMIK HUTAN TROPIS 5 PROVINSI)
  // =========================================================================
  {
    id: "seed-1",
    code: "KODE-SEEDPAPER-04",
    category: "seed",
    categoryLabel: "Kertas Benih",
    province: "Kalteng",
    provinceName: "Kalimantan Tengah",
    title: "Seed Paper: Pohon Ulin (Kayu Besi)",
    subtitle: "Eusideroxylon zwageri Endemik Rawa Gambut",
    description: "Kertas biodegradable berisi inokulasi spora benih ulin tersertifikasi balai cagar alam.",
    image: "/assets/images/seed_paper_borneo_1792861313370.jpg",
    icon: "compost",
    badge: "Seed Paper Kalteng",
    khasBorneo: "Pohon Ulin (Kayu Besi) mampu hidup lebih dari 1.000 tahun dan kayunya tahan rayap serta air asin tanpa lapuk.",
    detail: {
      heading: "4 Langkah Menanam Kertas Benih Ulin",
      body: "Setiap kit fisik EcoTourism Kit Borneo dilengkapi kertas benih berpori ramah tanah yang dibuat dari daur ulang serat pelepah pisang hutan terurai alami.",
      bullets: [
        "1. Rendam kertas benih dalam air hangat suam-suam kuku selama 3-4 jam.",
        "2. Sobek kertas menjadi fragmen berukuran 3x3 cm dengan hati-hati.",
        "3. Tanam sedalam 1 cm di tanah humus gembur atau pot sabut kelapa.",
        "4. Letakkan di tempat teduh dan siram dengan semprotan air lembut setiap pagi."
      ],
      actionLabel: "Daftarkan Koordinat Tanam Pohon Anda"
    }
  },
  {
    id: "seed-2",
    code: "KODE-SEED-KALBAR",
    category: "seed",
    categoryLabel: "Kertas Benih",
    province: "Kalbar",
    provinceName: "Kalimantan Barat",
    title: "Seed Paper: Tengkawang Maskot Kalbar",
    subtitle: "Shorea stenoptera Penghasil 'Green Butter'",
    description: "Benih pohon kanopi tropis penghasil minyak mentega nabati alami berharga tinggi.",
    image: "/assets/images/danau_sentarum_lake_1792861133917.jpg",
    icon: "eco",
    badge: "Seed Paper Kalbar",
    khasBorneo: "Minyak buah Tengkawang dijuluki 'mentega hijau Borneo' dan digunakan suku Dayak untuk memasak serta obat tradisional.",
    detail: {
      heading: "Panduan Penanaman Pohon Tengkawang",
      body: "Pohon Tengkawang merupakan flora identitas Kalimantan Barat. Menanam benih tengkawang membantu memulihkan tajuk hutan dataran rendah Kapuas Hulu.",
      bullets: [
        "Basahi kertas bibit hingga mengembang sempurna.",
        "Tanam di tanah berkompos daun lapuk dengan drainase baik.",
        "Jaga kelembaban tanah 70-80% selama 14 hari pertama masa perkecambahan.",
        "Pindahkan ke lahan terbuka setelah bibit mencapai tinggi 25 cm."
      ],
      actionLabel: "Lihat Sertifikat Bibit Tengkawang Lestari"
    }
  },
  {
    id: "seed-3",
    code: "KODE-SEED-KALTIM",
    category: "seed",
    categoryLabel: "Kertas Benih",
    province: "Kaltim",
    provinceName: "Kalimantan Timur",
    title: "Seed Paper: Meranti Merah Kanopi Hutan",
    subtitle: "Shorea leprosula Pilar Penyerap Karbon Tropis",
    description: "Pohon raksasa hutan hujan yang tumbuh hingga 60 meter penyejuk iklim bumi.",
    image: "/assets/images/bukit_raya_forest_1792861162341.jpg",
    icon: "park",
    badge: "Seed Paper Kaltim",
    khasBorneo: "Meranti merah adalah salah satu penyerap karbon dioksida tertinggi di ekosistem hutan Dipterokarpa Kalimantan.",
    detail: {
      heading: "Reboisasi Tajuk Kanopi Rimba Tropis",
      body: "Benih meranti merah dalam kit ini bersumber dari penangkaran benih persemaian modern Mentawir dekat IKN Kalimantan Timur.",
      bullets: [
        "Letakkan kertas benih di atas media tanah gembur tanpa ditekan padat.",
        "Tutup tipis dengan serbuk sabut kelapa (cocopeat) setebal 0,5 cm.",
        "Siram rutin dengan air tanpa kaporit di pagi dan sore hari.",
        "Pohon bertunas dalam 7-10 hari siap menjadi pelindung tanah lereng."
      ],
      actionLabel: "Cek Jejak Karbon Terserap Pohon Anda"
    }
  },
  {
    id: "seed-4",
    code: "KODE-SEED-KALSEL",
    category: "seed",
    categoryLabel: "Kertas Benih",
    province: "Kalsel",
    provinceName: "Kalimantan Selatan",
    title: "Seed Paper: Mangrove Rambai Muara Barito",
    subtitle: "Sonneratia caseolaris Sumber Pangan Bekantan",
    description: "Benih pohon bakau air tawar penahan abrasi pesisir dan pakan utama primata.",
    image: "/assets/images/bekantan_curiak_island_1792861205721.jpg",
    icon: "energy_savings_leaf",
    badge: "Seed Paper Kalsel",
    khasBorneo: "Pohon Rambai menghasilkan buah asam segar bulat yang dapat diolah menjadi manisan alami oleh masyarakat muara Barito.",
    detail: {
      heading: "Tanam Bakau Pelindung Tepian Sungai",
      body: "Restorasi mangrove rambai oleh wisatawan secara nyata mengembalikan koridor makan bekantan yang terancam di sepanjang jalur sungai pulau Curiak.",
      bullets: [
        "Rendam fragmen kertas di air sungai tenang selama 2 jam.",
        "Tanam pada tanah lumpur pasang surut atau polybag air tawar.",
        "Pastikan bibit mendapatkan sinar matahari pagi penuh.",
        "Laporkan titik tanam ke ranger sahabat bekantan untuk pemantauan tahunan."
      ],
      actionLabel: "Verifikasi Poin Donasi Tanam Mangrove"
    }
  },
  {
    id: "seed-5",
    code: "KODE-SEED-KALTARA",
    category: "seed",
    categoryLabel: "Kertas Benih",
    province: "Kaltara",
    provinceName: "Kalimantan Utara",
    title: "Seed Paper: Gaharu Wangi Kayan Mentarang",
    subtitle: "Aquilaria microcarpa Aroma Hutan Primer",
    description: "Bibit pohon penghasil damar aromatik bernilai tinggi penyelamat ekonomi masyarakat adat.",
    image: "/assets/images/kayan_mentarang_park_1792861219919.jpg",
    icon: "spa",
    badge: "Seed Paper Kaltara",
    khasBorneo: "Gaharu liar Kalimantan Utara menghasilkan gubal beraroma wangi dupa alami yang diminati di seluruh dunia.",
    detail: {
      heading: "Budidaya Gaharu Ramah Hutan Adat",
      body: "Penanaman gaharu pohon budidaya mengurangi tekanan perambahan gaharu alam di zona inti Taman Nasional Kayan Mentarang.",
      bullets: [
        "Letakkan kertas bibit di tanah lereng beraerasi baik.",
        "Siram teratur dan hindari genangan air berlebih di pangkal akar.",
        "Pohon gaharu muda menyukai naungan sebagian dari pohon pelindung.",
        "Tumbuh menjadi pohon rindang yang menjaga kesuburan humus tanah."
      ],
      actionLabel: "Buka Panduan Budidaya Gaharu Lestari"
    }
  },

  // =========================================================================
  // 4. PUZZLE MOTIF SENI & PUSAKA ADAT (5 PROVINSI)
  // =========================================================================
  {
    id: "puz-1",
    code: "KODE-PUZZLE-03",
    category: "puzzle",
    categoryLabel: "Puzzle Seni",
    province: "Kaltim",
    provinceName: "Kalimantan Timur",
    title: "Puzzle Motif Naga Aso' & Mandau Kenyah",
    subtitle: "Filosofi Penolak Marabahaya & Kearifan Logam",
    description: "Tebak relief ukir anjing naga mitologi dan tempaan besi meteorit mantikei.",
    image: "/assets/images/talawang_mandau_dayak_1792812030359.jpg",
    icon: "extension",
    badge: "Puzzle Seni Kaltim",
    khasBorneo: "Kalung Aso' adalah paduan motif anjing hutan dan naga air purba simbol kesetiaan penjaga rumah panjang Dayak.",
    detail: {
      heading: "Tebak Relief Ukiran Sakral Dayak Kenyah",
      body: "Mandau Kenyah bukan sekadar senjata melainkan benda pusaka kehormatan yang gagangnya diukir dari tanduk rusa bertatahkan helai bulu burung enggang.",
      bullets: [
        "Bilah inti ditempa dari batu meteorit besi mantikei yang terkenal tidak berkarat.",
        "Ukiran sulur melambangkan keterikatan tak terputus antara manusia dan rimba raya.",
        "Selesaikan puzzle susun pola ukir untuk membuka makna filosofis mendalamnya."
      ],
      actionLabel: "Mulai Tantangan Tebak Relief Ukir Mandau"
    }
  },
  {
    id: "puz-2",
    code: "KODE-PUZ-KALBAR",
    category: "puzzle",
    categoryLabel: "Puzzle Seni",
    province: "Kalbar",
    provinceName: "Kalimantan Barat",
    title: "Puzzle Tameng Talawang & Enggang Iban",
    subtitle: "Simbol Pertahanan Egaliter Dayak Perbatasan",
    description: "Rakit kepingan motif perisai kayu ulin pelindung ksatria suku Dayak Iban.",
    image: "/assets/images/talawang_mandau_dayak_1792812030359.jpg",
    icon: "shield_with_heart",
    badge: "Puzzle Seni Kalbar",
    khasBorneo: "Tameng Talawang dibuat dari kayu liat ringan namun kuat menahan hantaman senjata tajam, dihiasi mata topeng Kamang.",
    detail: {
      heading: "Filosofi Ukiran Perisai Dayak Iban",
      body: "Pola ukiran geometris Talawang menggambarkan sosok Kamang Tari, roh pemberi keberanian dan penjaga ketenteraman kampung.",
      bullets: [
        "Warna merah melambangkan keberanian dan darah kehidupan.",
        "Warna putih dari kapur sirih melambangkan kesucian niat musyawarah.",
        "Warna hitam dari jelaga arang melambangkan keteguhan hukum adat."
      ],
      actionLabel: "Mulai Puzzle Perisai Talawang Kalbar"
    }
  },
  {
    id: "puz-3",
    code: "KODE-PUZ-KALTENG",
    category: "puzzle",
    categoryLabel: "Puzzle Seni",
    province: "Kalteng",
    provinceName: "Kalimantan Tengah",
    title: "Puzzle Pohon Hayat Batang Garing Ngaju",
    subtitle: "Kosmologi Asal Usul Kehidupan Manusia",
    description: "Susun ornamen pohon kosmis bertabur permata guci dan tanduk enggang suci.",
    image: "/assets/images/batang_garing_tree_1792861327520.jpg",
    icon: "account_tree",
    badge: "Puzzle Seni Kalteng",
    khasBorneo: "Batang Garing melambangkan tiga tingkatan alam semesta Dayak Ngaju: alam atas burung Enggang, alam tengah manusia, dan alam bawah naga air.",
    detail: {
      heading: "Kosmologi Sakral Pohon Kehidupan",
      body: "Simbol Batang Garing selalu hadir pada ukiran rumah betang, kain wastra, dan perahu ritual Tiwah sebagai lambang keselarasan ciptaan.",
      bullets: [
        "Bagian bawah tertancap pada guci tajau pusaka penyimpan air suci.",
        "Dahan dan cabang melingkar melambangkan generasi keturunan yang berbakti.",
        "Buahnya menyerupai mata panah melambangkan ketepatan arah hidup."
      ],
      actionLabel: "Rakit Puzzle Pohon Hayat Batang Garing"
    }
  },
  {
    id: "puz-4",
    code: "KODE-PUZ-KALSEL",
    category: "puzzle",
    categoryLabel: "Puzzle Seni",
    province: "Kalsel",
    provinceName: "Kalimantan Selatan",
    title: "Puzzle Motif Sasirangan Gigi Haruan",
    subtitle: "Wastra Jelujur Sakral Warisan Putri Junjung Buih",
    description: "Tebak pola rintangan benang jelujur motif sisik ikan gabus dan bayam raja.",
    image: "/assets/images/sasirangan_banjar_purun_1792812030393.jpg",
    icon: "texture",
    badge: "Puzzle Seni Kalsel",
    khasBorneo: "Kain Sasirangan dulunya digunakan sebagai media terapi pengobatan adat Banjar (pamintaan) dengan pewarna ramuan akar tumbuhan.",
    detail: {
      heading: "Tebak Makna Simbol Motif Kain Sasirangan",
      body: "Motif Gigi Haruan melambangkan ketajaman berpikir dan ketangkasan hidup layaknya ikan gabus yang mampu bertahan hidup di kondisi kemarau gambut.",
      bullets: [
        "Pola Bayam Raja melambangkan martabat luhur yang mengayomi rakyat kecil.",
        "Warna kuning alami diekstrak dari rimpang kunyit gunung.",
        "Warna cokelat eksotis diramu dari getah kayu ulin dan kulit manggis."
      ],
      actionLabel: "Buka Game Tebak Pola Wastra Sasirangan"
    }
  },
  {
    id: "puz-5",
    code: "KODE-PUZ-KALTARA",
    category: "puzzle",
    categoryLabel: "Puzzle Seni",
    province: "Kaltara",
    provinceName: "Kalimantan Utara",
    title: "Puzzle Anyaman Tikar Pandan Tidung",
    subtitle: "Ketelitian Geometris Pesisir Kalimantan Utara",
    description: "Rangkai pola anyaman daun pandan berduri halus motif pucuk rebung.",
    image: "/assets/images/tikar_pandan_tidung_1792923494494.jpg",
    icon: "grid_view",
    badge: "Puzzle Seni Kaltara",
    khasBorneo: "Suku Tidung di pesisir Tarakan dan Nunukan mewariskan keahlian menganyam tikar pandan laut beraroma wangi alami tahan puluhan tahun.",
    detail: {
      heading: "Geometri Anyaman Tradisional Suku Tidung",
      body: "Anyaman tikar pandan Tidung membutuhkan kesabaran membelah daun pandan duri tanpa terputus, direbus dengan pewarna daun jati.",
      bullets: [
        "Motif Pucuk Rebung melambangkan cita-cita yang selalu menjulang tinggi.",
        "Anyaman dua lapis (bapis) membuat tikar sejuk saat siang dan hangat di malam hari.",
        "Simbol keramahan masyarakat pesisir saat menyambut tamu kehormatan."
      ],
      actionLabel: "Mulai Tantangan Anyaman Pandan Kaltara"
    }
  },

  // =========================================================================
  // 5. UMKM ADAT & PRODUK KARYA 5 PROVINSI
  // =========================================================================
  {
    id: "umkm-1",
    code: "UMKM-KALBAR-01",
    category: "umkm",
    categoryLabel: "UMKM Adat",
    province: "Kalbar",
    provinceName: "Kalimantan Barat",
    title: "Tenun Ikat Pewarna Alami Sintang",
    subtitle: "Kelompok Tenun Dayak Ensaid Panjang",
    description: "Kain tenun motif burung enggang dari benang kapas hutan diwarnai daun renggat & akar mengkudu.",
    image: "/assets/images/ensaid_ikat_weaving_1792861148491.jpg",
    icon: "storefront",
    badge: "UMKM Adat Kalbar",
    khasBorneo: "Proses pewarnaan alami membutuhkan waktu 3 bulan perendaman lumpur agar warna tidak luntur seumur hidup.",
    detail: {
      heading: "Beli Langsung dari Ibu Penenun Betang Ensaid",
      body: "Setiap pembelian kain tenun membantu menjaga hutan pewarna alam tetap lestari serta membiayai pendidikan anak-anak perajin Dayak Desa di Sintang.",
      bullets: [
        "100% serat kapas organik tanpa benang poliester sintetis.",
        "Pewarna biru dari daun renggat liar dan merah dari akar mengkudu.",
        "Harga mulai Rp 350.000 hingga Rp 1.500.000 untuk selendang motif sakral."
      ],
      actionLabel: "Hubungi Pengrajin Tenun Ensaid Panjang"
    }
  },
  {
    id: "umkm-2",
    code: "UMKM-KALTENG-02",
    category: "umkm",
    categoryLabel: "UMKM Adat",
    province: "Kalteng",
    provinceName: "Kalimantan Tengah",
    title: "Kerajinan Getah Nyatu & Tas Rotan Anjat",
    subtitle: "Koperasi Hutan Lestari Dayak Ngaju",
    description: "Miniatur perahu naga tiwah dari getah pohon nyatu dan tas anyaman rotan paku ulin.",
    image: "/assets/images/getah_nyatu_craft_1792923474825.jpg",
    icon: "shopping_bag",
    badge: "UMKM Adat Kalteng",
    khasBorneo: "Getah Nyatu diambil dari pohon nyatu liar yang direbus berkali-kali hingga lentur seperti plastisin alami sebelum dibentuk.",
    detail: {
      heading: "Kerajinan Unik Getah Nyatu Palangka Raya",
      body: "Seni mengolah getah pohon nyatu menjadi replika perahu tiwah dan prajurit dayak merupakan kekayaan intelektual komunal khas Kalimantan Tengah.",
      bullets: [
        "Bahan baku getah alami terurai tanpa plastik sintetis.",
        "Tas rotan anjat tahan air dan sangat kuat membawa beban berat.",
        "Madu kelulut hutan gambut asli kaya antioksidan lebah Trigona."
      ],
      actionLabel: "Tanya Pengrajin Koperasi Dayak Ngaju"
    }
  },
  {
    id: "umkm-3",
    code: "UMKM-KALSEL-03",
    category: "umkm",
    categoryLabel: "UMKM Adat",
    province: "Kalsel",
    provinceName: "Kalimantan Selatan",
    title: "Wastra Sasirangan Herbal & Purun Danau",
    subtitle: "Sentra Kerajinan Kampung Sasirangan Banjarmasin",
    description: "Kain sasirangan pewarna herbal kayu ulin, kunyit & anyaman purun rawa gambut.",
    image: "/assets/images/sasirangan_banjar_purun_1792812030393.jpg",
    icon: "shopping_basket",
    badge: "UMKM Adat Kalsel",
    khasBorneo: "Tanaman purun (Eleocharis dulcis) tumbuh subur di rawa gambut dan dianyam warga menjadi tas ramah lingkungan pengganti plastik.",
    detail: {
      heading: "Produk Ramah Lingkungan Rawa Gambut Banjar",
      body: "Pemanfaatan rumput purun rawa gambut membuktikan bahwa rawa gambut yang basah lestari memberikan penghasilan nyata bagi perajin wanita.",
      bullets: [
        "Kain sasirangan dengan zat pewarna nabati ramah kulit.",
        "Tas purun bio-degradable dapat terurai dalam tanah tanpa residu mikroplastik.",
        "Minyak atsiri kayu manis asli pegunungan Loksado Meratus."
      ],
      actionLabel: "Hubungi Sentra Sasirangan Herbal Banjar"
    }
  },
  {
    id: "umkm-4",
    code: "UMKM-KALTIM-04",
    category: "umkm",
    categoryLabel: "UMKM Adat",
    province: "Kaltim",
    provinceName: "Kalimantan Timur",
    title: "Tenun Ulap Doyo & Manik Kenyah Pampang",
    subtitle: "Sanggar Seni & Kerajinan Lamin Pampang",
    description: "Wastra serat daun doyo liar Tanjung Isuy dan gelang kalung manik manik kaca.",
    image: "/assets/images/ulap_doyo_textile_1792861357614.jpg",
    icon: "style",
    badge: "UMKM Adat Kaltim",
    khasBorneo: "Daun Doyo (Curligia capitulata) hanya tumbuh liar di pedalaman Kutai Barat dan serat daunnya sekuat benang linen kelas dunia.",
    detail: {
      heading: "Keunikan Tenun Serat Daun Doyo Dayak Benuaq",
      body: "Kain Ulap Doyo telah ditenun sejak abad ke-17 di Kutai Barat. Seratnya dipintal manual dari helaian daun tanaman doyo yang dikerik dan dikeringkan.",
      bullets: [
        "100% serat alami tanpa bahan kimia tekstil sintetis.",
        "Kerajinan manik-manik motif naga aso' dibuat tangan oleh ibu-ibu sanggar Pampang.",
        "Harga gelang manik mulai Rp 25.000, tas anjat Rp 150.000, kain doyo Rp 600.000."
      ],
      actionLabel: "Hubungi Sanggar Kerajinan Pampang Samarinda"
    }
  },
  {
    id: "umkm-5",
    code: "UMKM-KALTARA-05",
    category: "umkm",
    categoryLabel: "UMKM Adat",
    province: "Kaltara",
    provinceName: "Kalimantan Utara",
    title: "Garam Gunung Krayan & Anyaman Lundayeh",
    subtitle: "Koperasi Adat Dataran Tinggi Krayan Nunukan",
    description: "Garam organik beriodium alami dari sumur air asin purba di puncak pegunungan Krayan.",
    image: "/assets/images/garam_gunung_krayan_1792861372575.jpg",
    icon: "grain",
    badge: "UMKM Adat Kaltara",
    khasBorneo: "Dataran tinggi Krayan yang berada di ketinggian 1.000 mdpl memiliki sumur air asin prasejarah peninggalan laut purba jutaan tahun silam.",
    detail: {
      heading: "Keajaiban Garam Gunung Krayan Kalimantan Utara",
      body: "Garam Krayan dimasak secara tradisional menggunakan kayu bakar oleh warga Dayak Lundayeh. Memiliki cita rasa gurih khas alami dan kandungan mineral iodium tinggi.",
      bullets: [
        "Garam gunung bersertifikat Indikasi Geografis (IG) resmi Indonesia.",
        "Beras Adan Krayan organik yang pulen dan harum kesukaan Sultan Brunei.",
        "Anyaman keranjang rotan lembut buatan tangan perajin Dayak Lundayeh."
      ],
      actionLabel: "Pesan Garam Gunung Krayan Organik"
    }
  }
];

// Helper interface and mapping for backwards-compatibility with quick preset scanner
export interface KitPreset {
  code: string;
  type: string;
  icon: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  khasBorneo: string;
  provinceName: string;
  detail: {
    heading: string;
    body: string;
    bullets: string[];
    actionLabel: string;
    audioSimulation?: string;
  };
}

export const KIT_PRESETS: Record<string, KitPreset> = {};
KIT_ITEMS.forEach(item => {
  KIT_PRESETS[item.code] = {
    code: item.code,
    type: item.categoryLabel,
    icon: item.icon,
    badge: item.badge,
    title: item.title,
    description: item.description,
    image: item.image,
    khasBorneo: item.khasBorneo,
    provinceName: item.provinceName,
    detail: item.detail
  };
});
