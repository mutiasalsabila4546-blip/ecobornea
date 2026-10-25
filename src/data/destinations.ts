export interface DestinationSpecialty {
  name: string;
  categoryTag: string; // e.g. "Makanan Pokok", "Lauk Ikonik", "Kudapan Tradisional", "Minuman Khas", "Titik Wisata"
  desc: string;
  image?: string;
}

export interface Destination {
  id: number;
  title: string;
  category: 'Alam' | 'Budaya' | 'Konservasi' | 'Kuliner';
  region: 'Kalbar' | 'Kalteng' | 'Kalsel' | 'Kaltim' | 'Kaltara';
  provinceName: string;
  price: string;
  openHours: string;
  verified: string;
  summary: string;
  narrative: string;
  rules: string;
  image: string;
  gallery: string[];
  specialties: DestinationSpecialty[];
  ecoFeature: string;
  coordinates: { x: number; y: number }; // Percentage on map canvas
}

export interface CategoryInfo {
  name: string;
  icon: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export const CATEGORY_EXPLANATIONS: Record<string, CategoryInfo> = {
  'Alam': {
    name: 'Wisata Alam Kalimantan',
    icon: 'park',
    subtitle: 'Keajaiban Geologi & Ekosistem Hutan Purba',
    description: 'Kalimantan memiliki bentang alam terlengkap: mulai dari danau ubur-ubur prasejarah, batuan ofiolit tertua di Meratus (180 juta tahun), hingga rawa gambut Sentarum dan rimba Kayan Mentarang yang menjadi paru-paru dunia.',
    highlights: ['Danau Ubur-ubur Kakaban (Kaltim)', 'Geopark Meratus Loksado (Kalsel)', 'Danau Sentarum (Kalbar)', 'TN Kayan Mentarang (Kaltara)', 'TN Bukit Baka Bukit Raya (Kalteng)']
  },
  'Budaya': {
    name: 'Budaya & Adat Dayak',
    icon: 'temple_buddhist',
    subtitle: 'Falsafah Betang, Tenun Alam, & Kearifan Rimba',
    description: 'Warisan leluhur lebih dari 400 sub-suku Dayak yang hidup selaras dengan alam melalui arsitektur Rumah Betang yang egaliter, hukum adat Tane\' Olen (hutan larangan), tenun pewarna alam, dan seni musik sape\'.',
    highlights: ['Lamin Pampang Dayak Kenyah (Kaltim)', 'Tenun Alami Ensaid Panjang (Kalbar)', 'Hutan Adat Tane\' Olen Setulang (Kaltara)', 'Betang Damang Batu Tumbang Anoi (Kalteng)', 'Balai Adat Dayak Meratus (Kalsel)']
  },
  'Konservasi': {
    name: 'Konservasi Satwa Liar',
    icon: 'pets',
    subtitle: 'Benteng Terakhir Spesies Endemik Kritis Dunia',
    description: 'Suaka kanopi tropis bagi 97% DNA orangutan liar, beruang madu terkecil di dunia, primata bekantan hidung panjang, gajah kerdil Borneo, pesut air tawar Mahakam, dan burung rangkong badak.',
    highlights: ['Camp Leakey TN Tanjung Puting (Kalteng)', 'Samboja Lestari Sun Bear Sanctuary (Kaltim)', 'TN Betung Kerihun Heart of Borneo (Kalbar)', 'Suaka Bekantan Sungai Barito (Kalsel)', 'Konservasi Mangrove & Bekantan Tarakan (Kaltara)']
  },
  'Kuliner': {
    name: 'Kuliner Tradisional Lokal',
    icon: 'restaurant',
    subtitle: 'Rempah Hutan Liar & Hasil Tangkapan Sungai',
    description: 'Cita rasa otentik yang memanfaatkan bahan organik hutan: rempah kayu manis Banjar, umbut rotan muda (singkah) berkhasiat herbal, daun kesum aromatik, nasi ungu subut, dan olahan ikan sungai liar.',
    highlights: ['Soto Banjar & Patin Gambut (Kalsel)', 'Juhu Singkah Umbut Rotan Dayak (Kalteng)', 'Bubur Pedas Daun Kesum Sambas (Kalbar)', 'Nasi Bekepor & Gence Ruan Kutai (Kaltim)', 'Lawas Ikan & Nasi Subut (Kaltara)']
  }
};

export const INITIAL_DESTINATIONS: Destination[] = [
  // =========================================================================
  // 1. KALIMANTAN BARAT (KALBAR) - Lengkap 4 Kategori
  // =========================================================================
  {
    id: 10,
    title: "Taman Nasional Danau Sentarum",
    category: "Alam",
    region: "Kalbar",
    provinceName: "Kalimantan Barat",
    price: "Rp 75rb / org",
    openHours: "07:00 - 17:00 WIB",
    verified: "Situs Ramsar Lahan Basah Dunia",
    summary: "Lahan basah rawa gambut terluas di Asia Tenggara dan habitat asli ikan arwana super red serta lebah madu pohon tualang.",
    narrative: "Danau Sentarum berfungsi sebagai pengatur debit air alami DAS Kapuas. Saat musim hujan berfungsi sebagai danau raksasa luas, dan saat kemarau surut membentuk hamparan hutan rawa eksotis dengan ribuan lebah hutan penghasil madu organik liar.",
    rules: "Hanya perahu tradisional bermotor kecil yang diizinkan untuk menghindari erosi tepian rawa gambut dan gangguan pada sarang arwana.",
    ecoFeature: "Pengatur Debit Air Alami DAS Sungai Kapuas",
    image: "/assets/images/danau_sentarum_lake_1792861133917.jpg",
    gallery: [
      "/assets/images/danau_sentarum_lake_1792861133917.jpg",
      "/assets/images/tane_olen_setulang_1792861234752.jpg",
      "/assets/images/rangkong_badak_borneo_1792812028957.jpg"
    ],
    specialties: [
      { name: "Habitat Arwana Super Red", categoryTag: "Fauna Endemik", desc: "Perairan air hitam gambut yang menjadi rumah ikan naga air tawar langka dunia (Scleropages formosus)." },
      { name: "Madu Organik Pohon Tualang", categoryTag: "Hasil Hutan", desc: "Madu murni dari sarang lebah raksasa Apis dorsata yang bersarang di dahan pohon tualang setinggi 40 meter." },
      { name: "Jalur Susur Rawa Klotok", categoryTag: "Jalur Alam", desc: "Navigasi perahu kayu menyusuri lorong semak hutan tergenang dengan pantulan air hitam cermin alami." },
      { name: "Bukit Tekelan", categoryTag: "Titik Pandang", desc: "Bukit panorama untuk melihat lanskap kepulauan danau sentarum yang membentang tanpa batas." }
    ],
    coordinates: { x: 31, y: 36 }
  },
  {
    id: 8,
    title: "Rumah Betang Ensaid Panjang",
    category: "Budaya",
    region: "Kalbar",
    provinceName: "Kalimantan Barat",
    price: "Rp 30rb / org",
    openHours: "08:00 - 17:00 WIB",
    verified: "Sentra Tenun Adat UNESCO",
    summary: "Pusat tenun ikat Dayak Desa di rumah panggung kayu sepanjang 118 meter menggunakan 100% pewarna alam hutan.",
    narrative: "Para penenun wanita Dayak Desa mewariskan motif sakral seperti burung enggang dan sulur pakis dengan proses pewarnaan alami dari daun renggat (biru tua) dan akar mengkudu (merah bata) tanpa bahan kimia.",
    rules: "Dilarang membuang limbah kimia di sekitar rumah betang untuk menjaga kemurnian tanaman pewarna alam di pekarangan.",
    ecoFeature: "Wastra Berkelanjutan Pewarna Alami Organik",
    image: "/assets/images/ensaid_ikat_weaving_1792861148491.jpg",
    gallery: [
      "/assets/images/ensaid_ikat_weaving_1792861148491.jpg",
      "/assets/images/rumah_betang_dayak_1792812028554.jpg",
      "/assets/images/talawang_mandau_dayak_1792812030359.jpg"
    ],
    specialties: [
      { name: "Tenun Ikat Pewarna Daun Renggat", categoryTag: "Wastra Adat", desc: "Kain tenun ikat warna biru nila alami yang diekstraksi dari fermentasi daun renggat hutan." },
      { name: "Arsitektur Rumah Panggung 118m", categoryTag: "Arsitektur Kayu", desc: "Rumah panjang tradisional kayu ulin yang menaungi 28 pintu keluarga Dayak Desa secara komunal." },
      { name: "Kebun Tanaman Pewarna Adat", categoryTag: "Konservasi Flora", desc: "Budidaya tanaman akar mengkudu, kunyit rimba, dan daun tarum untuk menjaga kedaulatan wastra." },
      { name: "Alat Tenun Gedogan Tradisional", categoryTag: "Kriya Kayu", desc: "Perangkat tenun manual dari kayu ulin dan rotan yang dioperasikan duduk beralas tikar pandan." }
    ],
    coordinates: { x: 26, y: 46 }
  },
  {
    id: 5,
    title: "Taman Nasional Betung Kerihun",
    category: "Konservasi",
    region: "Kalbar",
    provinceName: "Kalimantan Barat",
    price: "Rp 150rb / org",
    openHours: "08:00 - 17:00 WIB",
    verified: "Resmi Balai TN & Heart of Borneo",
    summary: "Jantung rimba Borneo lintas batas dengan 1.200 jenis pohon dipterokarpa dan habitat burung rangkong badak.",
    narrative: "Mencakup lebih dari 800.000 hektar hutan pegunungan basah dan hulu sungai Kapuas. Dijaga bersama oleh komunitas Dayak Iban dan Kayan melalui hukum adat tana' amba' (hutan larangan resapan air).",
    rules: "Wajib lapor perizinan Simaksi di pos Putussibau, wajib menggunakan pemandu lokal Dayak, dan dilarang mengambil spesimen flora endemik.",
    ecoFeature: "Hutan Adat Tana' Amba' & Koridor Heart of Borneo",
    image: "/assets/images/rangkong_badak_borneo_1792812028957.jpg",
    gallery: [
      "/assets/images/rangkong_badak_borneo_1792812028957.jpg",
      "/assets/images/kayan_mentarang_park_1792861219919.jpg",
      "/assets/images/tane_olen_setulang_1792861234752.jpg"
    ],
    specialties: [
      { name: "Suaka Burung Rangkong Badak", categoryTag: "Fauna Kanopi", desc: "Habitat kanopi primer bagi 8 spesies enggang pemencar biji pohon hutan tropis." },
      { name: "Jeram Arung Hulu Kapuas", categoryTag: "Petualangan", desc: "Aliran sungai berbatu karst dan air terjun alami dengan kejernihan air minum pegunungan." },
      { name: "Pohon Meranti Raksasa", categoryTag: "Flora Langka", desc: "Tegakan pohon Shorea purba dengan lingkar batang lebih dari 4 meter yang berusia ratusan tahun." },
      { name: "Tana' Amba' Hutan Larangan", categoryTag: "Kearifan Adat", desc: "Zonasi perlindungan adat Dayak Iban untuk menjaga mata air dan tempat bertapa tetua." }
    ],
    coordinates: { x: 36, y: 32 }
  },
  {
    id: 12,
    title: "Sentra Bubur Pedas Sambas & Kuliner Khas Kalbar",
    category: "Kuliner",
    region: "Kalbar",
    provinceName: "Kalimantan Barat",
    price: "Rp 20rb - 35rb",
    openHours: "06:30 - 18:00 WIB",
    verified: "Warisan Budaya Kuliner Melayu Sambas",
    summary: "Bubur beras sangrai kaya serat yang dimasak dengan 30+ macam dedaunan herbal hutan liar aromatik daun kesum.",
    narrative: "Bubur Pedas Sambas merupakan sajian sakral yang dulunya hanya disajikan untuk perjamuan bangsawan Kesultanan Sambas. Keunikannya terletak pada beras yang disangrai bersama kelapa parut hingga harum, lalu dimasak dengan lebih dari 30 macam dedaunan herbal rimba (termasuk daun kesum, pakis, rebung, kangkung, daun kencur) dan ditaburi kacang goreng gurih serta teri renyah.",
    rules: "Dedaunan herbal dipanen liar oleh petani lokal tanpa pestisida kimia untuk menjaga khasiat detoksifikasi alami tubuh.",
    ecoFeature: "30+ Daun Herbal Hutan Liar Berkhasiat Jamu Detoks",
    image: "/assets/images/bubur_pedas_sambas_1792811456245.jpg",
    gallery: [
      "/assets/images/bubur_pedas_sambas_1792811456245.jpg",
      "/assets/images/pengkang_mempawah_kalbar_1792923394904.jpg",
      "/assets/images/choipan_sambas_kalbar_1792923512434.jpg"
    ],
    specialties: [
      {
        name: "Bubur Pedas Sambas Asli",
        categoryTag: "Makanan Utama",
        desc: "Bubur beras sangrai wangi kelapa yang dimasak bersama 30+ macam daun rimba liar aromatik (daun kesum, pakis, rebung), diberi taburan kacang tanah sangrai, ikan teri garing, dan sambal cabai rawit pedas asam segar.",
        image: "/assets/images/bubur_pedas_sambas_1792811456245.jpg"
      },
      {
        name: "Pengkang Mempawah",
        categoryTag: "Kudapan Gurih",
        desc: "Ketan pulut gurih berisi ebi udang kering yang dibungkus daun pisang berbentuk kerucut jepit bilah bambu ulin, lalu dipanggang di atas bara batok kelapa dan disajikan bersama sambal kepah sungai.",
        image: "/assets/images/pengkang_mempawah_kalbar_1792923394904.jpg"
      },
      {
        name: "Chai Kwe / Choipan Siantan",
        categoryTag: "Kue Kukus Sayur",
        desc: "Kue lembut kenyal berkulit tipis transparan dari tepung beras dengan isian serutan bengkoang renyah atau tumis daun kucai wangi, disiram minyak bawang putih goreng renyah dan sambal asam pedas.",
        image: "/assets/images/choipan_sambas_kalbar_1792923512434.jpg"
      },
      {
        name: "Sotong Pangkong Pontianak",
        categoryTag: "Olahan Hasil Laut",
        desc: "Cumi laut kering yang dipanggang di atas arang lalu dipukul palu kayu hingga seratnya empuk pipih, dicelup ke kuah sambal kacang asam pedas manis beraroma jeruk nipis."
      },
      {
        name: "Es Lidah Buaya (Aloe Vera)",
        categoryTag: "Minuman Segar",
        desc: "Minuman dingin pelepas dahaga dari potongan gel pelepah lidah buaya raksasa asli Pontianak yang renyah kenyal alami, disajikan dengan sirup pandan, selasih, dan perasan jeruk nipis."
      }
    ],
    coordinates: { x: 18, y: 34 }
  },

  // =========================================================================
  // 2. KALIMANTAN TENGAH (KALTENG) - Lengkap 4 Kategori
  // =========================================================================
  {
    id: 13,
    title: "TN Bukit Baka Bukit Raya (TNBBBR)",
    category: "Alam",
    region: "Kalteng",
    provinceName: "Kalimantan Tengah",
    price: "Rp 120rb / org",
    openHours: "08:00 - 16:30 WIB",
    verified: "Resmi Balai TNBBBR",
    summary: "Puncak atap Kalimantan Tengah dengan hamparan hutan lumut pegunungan basah dan hulu sungai Katingan yang jernih.",
    narrative: "Kawasan pegunungan Schwaner dengan puncak Bukit Raya (2.278 mdpl). Menyimpan plasma nutfah anggrek hutan langka serta menjadi zona pelepasan primata hasil rehabilitasi ke alam liar sejati.",
    rules: "Wajib membawa kembali semua sampah logistik pendakian (pack-in pack-out) dan larangan membuat api unggun di atas tanah gambut.",
    ecoFeature: "Zona Inti Resapan Air Pegunungan Schwaner",
    image: "/assets/images/bukit_raya_forest_1792861162341.jpg",
    gallery: [
      "/assets/images/bukit_raya_forest_1792861162341.jpg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7QZYd2uTl9LGp0sAo2cJNeWpUGj7NAdbpVj6JYBxeSNUIlMU7k8QFhstxZ-Ak0NGke00p7OIkl5EHNg6pufMLfCdMSsnZvbLhDeCRwUSEHmxnujv7Q_7vnQ_3RmVL7axPCci2QkeX72O3JUXDNPreucpR_yaPeMeJm9zd4PuUrp2OzVSvW2uzVJG6NNhVEwCx37AfDQ1BdUoGPUJ6KvszfVPRHqAU0NvXl4vinV68kkjjqj1SC-RI",
      "/assets/images/danau_sentarum_lake_1792861133917.jpg"
    ],
    specialties: [
      { name: "Puncak Ketinggian 2.278 mdpl", categoryTag: "Puncak Gunung", desc: "Puncak tertinggi pegunungan Schwaner dengan vegetasi hutan lumut ericaceous langka." },
      { name: "Kawasan Pelepasan Orangutan", categoryTag: "Reintroduksi", desc: "Zona hutan primer terisolasi tempat orangutan hasil rehabilitasi dilepaskan hidup mandiri." },
      { name: "Anggrek Hitam & Kantong Semar", categoryTag: "Flora Endemik", desc: "Habitat alami puluhan spesies Coelogyne pandurata dan Nepenthes pemakan serangga." },
      { name: "Hulu Sungai Katingan", categoryTag: "Sumber Air", desc: "Mata air jernih bebatuan vulkanik yang menjadi urat nadi perikanan sungai Dayak." }
    ],
    coordinates: { x: 38, y: 52 }
  },
  {
    id: 14,
    title: "Rumah Betang Damang Batu Tumbang Anoi",
    category: "Budaya",
    region: "Kalteng",
    provinceName: "Kalimantan Tengah",
    price: "Rp 35rb / org",
    openHours: "08:00 - 17:00 WIB",
    verified: "Situs Sejarah Perdamaian Dayak 1894",
    summary: "Rumah panggung kayu ulin bersejarah tempat musyawarah perdamaian akbar suku Dayak se-Borneo mengakhiri tradisi mengayau.",
    narrative: "Pada tahun 1894, ratusan tetua Dayak berkumpul di Betang Damang Batu untuk menyepakati perjanjian damai Tumbang Anoi. Rumah panjang megah ini sarat ukiran pusaka sandung dan tiang pantak leluhur.",
    rules: "Lepaskan alas kaki sebelum menaiki tangga hejot dan jangan menyentuh tiang pantak sakral tanpa izin juru pelihara.",
    ecoFeature: "Pelestarian Struktur Kayu Ulin Kuno Tanpa Paku Logam",
    image: "/assets/images/betang_damang_batu_1792861176157.jpg",
    gallery: [
      "/assets/images/betang_damang_batu_1792861176157.jpg",
      "/assets/images/batang_garing_tree_1792861327520.jpg",
      "/assets/images/talawang_mandau_dayak_1792812030359.jpg"
    ],
    specialties: [
      { name: "Prasasti Rapat Damai 1894", categoryTag: "Situs Sejarah", desc: "Monumen bersejarah penyatuan dan penghentian tradisi perang antarsuku Dayak se-Borneo." },
      { name: "Sandung Tulang Leluhur", categoryTag: "Benda Sakral", desc: "Peti kayu ulin berukir burung tingang tempat penyimpanan tulang leluhur setelah upacara Tiwah." },
      { name: "Tiang Pantak Kayu Ulin", categoryTag: "Ukiran Pusaka", desc: "Tiang pahatan wajah tokoh adat berkarakter kuat yang dipercaya menjaga ketentraman warga." },
      { name: "Arsitektur Hejot Pasak Kayu", categoryTag: "Konstruksi Kuno", desc: "Tangga kayu utuh dan rangka rumah betang yang kokoh lebih dari satu abad tanpa paku besi." }
    ],
    coordinates: { x: 44, y: 50 }
  },
  {
    id: 1,
    title: "TN Tanjung Puting (Camp Leakey)",
    category: "Konservasi",
    region: "Kalteng",
    provinceName: "Kalimantan Tengah",
    price: "Rp 250rb / org",
    openHours: "07:30 - 16:00 WIB",
    verified: "Resmi Balai TN Tanjung Puting",
    summary: "Pusat konservasi orangutan liar tertua di dunia dan habitat utama bekantan kanopi rawa gambut.",
    narrative: "Didirikan oleh Dr. Birute Galdikas pada 1971 di tepi Sungai Sekonyer. Wisatawan menjelajah menggunakan perahu kayu tradisional 'klotok' sembari mengamati orangutan (Pongo pygmaeus) dan bekantan hidup bebas di habitat aslinya.",
    rules: "Zonasi Ketat Bebas Sampah Plastik. Jarak aman minimal 5 meter dari satwa, dilarang memberi makan, dan hindari penggunaan pengeras suara di dermaga camp.",
    ecoFeature: "Zonasi Ketat Bebas Sampah Plastik & Riset Primata Dunia",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7QZYd2uTl9LGp0sAo2cJNeWpUGj7NAdbpVj6JYBxeSNUIlMU7k8QFhstxZ-Ak0NGke00p7OIkl5EHNg6pufMLfCdMSsnZvbLhDeCRwUSEHmxnujv7Q_7vnQ_3RmVL7axPCci2QkeX72O3JUXDNPreucpR_yaPeMeJm9zd4PuUrp2OzVSvW2uzVJG6NNhVEwCx37AfDQ1BdUoGPUJ6KvszfVPRHqAU0NvXl4vinV68kkjjqj1SC-RI",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7QZYd2uTl9LGp0sAo2cJNeWpUGj7NAdbpVj6JYBxeSNUIlMU7k8QFhstxZ-Ak0NGke00p7OIkl5EHNg6pufMLfCdMSsnZvbLhDeCRwUSEHmxnujv7Q_7vnQ_3RmVL7axPCci2QkeX72O3JUXDNPreucpR_yaPeMeJm9zd4PuUrp2OzVSvW2uzVJG6NNhVEwCx37AfDQ1BdUoGPUJ6KvszfVPRHqAU0NvXl4vinV68kkjjqj1SC-RI",
      "/assets/images/bekantan_curiak_island_1792861205721.jpg",
      "/assets/images/danau_sentarum_lake_1792861133917.jpg"
    ],
    specialties: [
      { name: "Platform Pemberian Makan Camp Leakey", categoryTag: "Stasiun Riset", desc: "Panggung kayu di dalam hutan tempat pengamatan orangutan liar dan semi-liar yang diasuh periset." },
      { name: "Pelayaran Perahu Klotok Sungai Sekonyer", categoryTag: "Transportasi Safari", desc: "Pengalaman tinggal di atas perahu kayu dua lantai melintasi sungai berair hitam gambut berpagar nipah." },
      { name: "Kawanan Bekantan Pucuk Dahan", categoryTag: "Primata Endemik", desc: "Monyet belanda hidung mancung yang berkumpul di pepohonan tepi sungai menjelang matahari terbenam." },
      { name: "Pohon Meranti & Ramin Gambut", categoryTag: "Flora Dilindungi", desc: "Pepohonan hutan rawa gambut bernilai konservasi tinggi yang menyerap jutaan ton karbon dunia." }
    ],
    coordinates: { x: 32, y: 73 }
  },
  {
    id: 11,
    title: "Dapur Dayak: Juhu Singkah & Masakan Adat Kalteng",
    category: "Kuliner",
    region: "Kalteng",
    provinceName: "Kalimantan Tengah",
    price: "Rp 40rb - 65rb",
    openHours: "10:00 - 20:00 WIB",
    verified: "Kuliner Tradisional Dayak Ngaju",
    summary: "Sayur gurih bercita rasa sedikit pahit khas dari umbut rotan muda (singkah) yang dipadu ikan baung sungai liar.",
    narrative: "Suku Dayak memanfaatkan rotan tidak hanya sebagai bahan anyaman tetapi juga pucuk mudanya sebagai sayuran berkhasiat obat pendingin tubuh. Dimasak bersama santan atau kaldu benih rempah rimbang dan terong asam hutan.",
    rules: "Hanya rotan hasil panen hutan lestari bersertifikasi adat yang boleh dimasak untuk menjaga kelestarian tegakan rotan liar.",
    ecoFeature: "Hasil Hutan Bukan Kayu (HHBK) Pangan Berkelanjutan",
    image: "/assets/images/juhu_singkah_kalteng_1792811457720.jpg",
    gallery: [
      "/assets/images/juhu_singkah_kalteng_1792811457720.jpg",
      "/assets/images/kalumpe_dayak_kalteng_1792923409814.jpg",
      "/assets/images/getah_nyatu_craft_1792923474825.jpg"
    ],
    specialties: [
      {
        name: "Juhu Singkah Umbut Rotan",
        categoryTag: "Sayur Adat Khas",
        desc: "Pucuk muda tanaman rotan hutan (singkah) yang empuk dengan cita rasa gurih sedikit pahit menyegarkan, dimasak bersama kaldu kuning ikan baung sungai, terong asam, dan rimbang liar.",
        image: "/assets/images/juhu_singkah_kalteng_1792811457720.jpg"
      },
      {
        name: "Kalumpe / Karuang Tumbuk",
        categoryTag: "Sayur Daun Hutan",
        desc: "Pucuk daun singkong muda yang ditumbuk halus memakai lesung kayu bersama serai, lengkuas, dan terong pipit hutan, disajikan kental gurih dengan taburan kacang tanah sangrai.",
        image: "/assets/images/kalumpe_dayak_kalteng_1792923409814.jpg"
      },
      {
        name: "Wadi Ikan Jelawat / Baung",
        categoryTag: "Lauk Fermentasi Rimba",
        desc: "Ikan sungai air tawar yang difermentasi secara tradisional memakai beras ketan sangrai tumbuk (samu) dan garam mineral, lalu digoreng garing dengan aroma khas yang sangat gurih."
      },
      {
        name: "Lemang Pulut Bakar Bambu",
        categoryTag: "Makanan Pokok Adat",
        desc: "Beras ketan putih atau hitam berpadu santan kelapa gurih yang dimasak di dalam ruas bambu muda beralaskan daun pisang di samping perapian kayu hutan."
      },
      {
        name: "Kue Gagatas Dayak",
        categoryTag: "Kudapan Manis",
        desc: "Kue tradisional Dayak dari tepung ketan kenyal lembut yang digoreng dan dilapisi lelehan gula tebu alami yang membeku renyah di bagian luar."
      }
    ],
    coordinates: { x: 42, y: 64 }
  },

  // =========================================================================
  // 3. KALIMANTAN SELATAN (KALSEL) - Lengkap 4 Kategori
  // =========================================================================
  {
    id: 4,
    title: "Geopark Pegunungan Meratus & Loksado",
    category: "Alam",
    region: "Kalsel",
    provinceName: "Kalimantan Selatan",
    price: "Rp 25rb / org",
    openHours: "06:00 - 18:00 WITA",
    verified: "UNESCO Global Geopark Aspiring",
    summary: "Hamparan batuan ofiolit samudera tertua di Indonesia dan sensasi arung jeram rakit bambu alami (balanting paring).",
    narrative: "Pegunungan Meratus merupakan formasi kerak samudera yang terangkat 180 juta tahun lalu. Di lembah Loksado, Anda dapat mengarungi jeram sungai Amandit yang jernih di atas rakit bambu yang dirakit manual oleh suku Dayak Meratus.",
    rules: "Wajib mengenakan rompi pelampung standar, jangan membuang sampah ke sungai Amandit, dan hormati batas hutan keramat hulu mata air.",
    ecoFeature: "Warisan Geologi 180 Juta Tahun & Balanting Paring",
    image: "/assets/images/loksado_bamboo_raft_1792812010305.jpg",
    gallery: [
      "/assets/images/loksado_bamboo_raft_1792812010305.jpg",
      "/assets/images/rumah_betang_dayak_1792812028554.jpg",
      "/assets/images/sasirangan_banjar_purun_1792812030393.jpg"
    ],
    specialties: [
      { name: "Arung Jeram Rakit Bambu (Balanting Paring)", categoryTag: "Atraksi Budaya", desc: "Sensasi meluncur di atas rakit 16 batang bambu paring yang dikemudikan joki adat Dayak Meratus." },
      { name: "Batuan Ofiolit Tertua 180 Juta Tahun", categoryTag: "Geologi Purba", desc: "Kerak samudera prasejarah yang tersingkap ke permukaan membentuk bentang tebing karst Meratus." },
      { name: "Air Terjun Haratai", categoryTag: "Air Terjun Alami", desc: "Tumpahan air terjun setinggi 12 meter di tengah belantara perawan yang kaya ion negatif menyegarkan." },
      { name: "Pohon Kayu Manis Hutan Meratus", categoryTag: "Flora Rempah", desc: "Hutan rakyat penghasil kayu manis kualitas ekspor yang dipanen secara lestari tanpa menebang pohon." }
    ],
    coordinates: { x: 63, y: 76 }
  },
  {
    id: 15,
    title: "Kampung Adat Dayak Meratus & Balai Haratai",
    category: "Budaya",
    region: "Kalsel",
    provinceName: "Kalimantan Selatan",
    price: "Rp 30rb / org",
    openHours: "07:30 - 17:30 WITA",
    verified: "Balai Adat Dayak Meratus",
    summary: "Rumah komunal panggung kayu ulin tempat upacara Aruh Ganal, ucapan syukur panen padi gunung kepada Sang Hyang Bhatara.",
    narrative: "Masyarakat Dayak Meratus di kaki gunung Halau-Halau menjaga tradisi berladang gilir balik yang ramah ekosistem lereng bukit. Balai Haratai menjadi pusat musyawarah adat dan ritual tari Kanjar.",
    rules: "Hormati pantangan adat saat upacara Aruh berlangsung dan dilarang merusak lumbung padi (bapadi) warga.",
    ecoFeature: "Sistem Pertanian Tradisional Gilir Balik Ramah Tanah",
    image: "/assets/images/balai_adat_meratus_1792861191123.jpg",
    gallery: [
      "/assets/images/balai_adat_meratus_1792861191123.jpg",
      "/assets/images/loksado_bamboo_raft_1792812010305.jpg",
      "/assets/images/sasirangan_banjar_purun_1792812030393.jpg"
    ],
    specialties: [
      { name: "Upacara Adat Aruh Ganal", categoryTag: "Ritual Panen", desc: "Pesta syukur akbar panen padi gunung dengan tarian sakral Kanjar dan tabuhan kurung-kurung kayu." },
      { name: "Arsitektur Balai Adat Kayu Ulin", categoryTag: "Bangunan Adat", desc: "Balai pertemuan beratap sirap kayu ulin tempat berkumpul tetua adat Balian dan warga lereng bukit." },
      { name: "Anyaman Gelang Simpai Pakis", categoryTag: "Kerajinan Khas", desc: "Gelang unik yang dianyam langsung melingkar di pergelangan tangan menggunakan serat pohon resam liar." },
      { name: "Padi Gunung Organik Bapadi", categoryTag: "Pangan Lokal", desc: "Varietas padi ladang lereng Meratus berbulir merah wangi yang ditanam tanpa pupuk kimia sintetis." }
    ],
    coordinates: { x: 66, y: 74 }
  },
  {
    id: 16,
    title: "Suaka Bekantan & Mangrove Rambai Pulau Curiak",
    category: "Konservasi",
    region: "Kalsel",
    provinceName: "Kalimantan Selatan",
    price: "Rp 85rb / org",
    openHours: "06:30 - 17:00 WITA",
    verified: "Stasiun Riset Konservasi SBI",
    summary: "Stasiun konservasi primata bekantan (Nasalis larvatus) berbasis restorasi pohon rambai di delta muara Sungai Barito.",
    narrative: "Dikelola oleh Sahabat Bekantan Indonesia (SBI) bersama Universitas Lambung Mangkurat. Wisatawan menyusuri muara dengan perahu tradisional mengamati bekantan pemakan pucuk daun rambai di habitat alami pulau.",
    rules: "Dilarang membuang sampah ke aliran sungai Barito dan dilarang menyorot satwa dengan laser atau cahaya berlebih.",
    ecoFeature: "Restorasi Mangrove Pohon Rambai Habitat Bekantan",
    image: "/assets/images/bekantan_curiak_island_1792861205721.jpg",
    gallery: [
      "/assets/images/bekantan_curiak_island_1792861205721.jpg",
      "/assets/images/kkmb_tarakan_boardwalk_1792861249617.jpg",
      "/assets/images/loksado_bamboo_raft_1792812010305.jpg"
    ],
    specialties: [
      { name: "Kawanan Bekantan Rambai", categoryTag: "Satwa Maskot", desc: "Kelompok bekantan hidung panjang yang melompat lincah di kanopi pohon rambai delta Barito." },
      { name: "Pohon Rambai Padi (Sonneratia caseolaris)", categoryTag: "Pakan Alami", desc: "Spesies pohon mangrove berbuah asam manis yang menjadi sumber makanan utama primata bekantan." },
      { name: "Ekowisata Susur Delta Barito", categoryTag: "Safari Air", desc: "Petualangan perahu kayu bermotor senyap mengamati burung elang bondol dan raja udang biru." },
      { name: "Stasiun Riset Mangrove SBI", categoryTag: "Laboratorium Alami", desc: "Pusat pembibitan dan penanaman kembali mangrove pesisir Kalimantan Selatan bersama komunitas lokal." }
    ],
    coordinates: { x: 50, y: 81 }
  },
  {
    id: 6,
    title: "Sentra Kuliner Soto Banjar & Masakan Banua Kalsel",
    category: "Kuliner",
    region: "Kalsel",
    provinceName: "Kalimantan Selatan",
    price: "Rp 35rb - 70rb",
    openHours: "07:00 - 21:00 WITA",
    verified: "Warisan Kuliner Adat Banjar",
    summary: "Soto berkuah kaldu rempah harum kayu manis dan cengkeh dipadu gurihnya ikan patin sungai Barito.",
    narrative: "Soto Banjar diracik menggunakan perpaduan rempah kayu manis, kapulaga, cengkeh, dan kaldu ayam kampung kental gurih, disajikan bersama perasan jeruk limau kuit khas Kalimantan. Sangat nikmat disantap setelah mengarungi pasar terapung Lok Baintan.",
    rules: "Dukung zero-waste dengan membawa wadah makan dan tumbler sendiri saat memesan makanan bawa pulang.",
    ecoFeature: "Pemanfaatan Budi Daya Ikan Air Tawar Ramah Lingkungan",
    image: "/assets/images/soto_banjar_kalsel_1792811458056.jpg",
    gallery: [
      "/assets/images/soto_banjar_kalsel_1792811458056.jpg",
      "/assets/images/patin_bakar_banjar_1792923424403.jpg",
      "/assets/images/bingka_kentang_banjar_1792923529089.jpg"
    ],
    specialties: [
      {
        name: "Soto Banjar Asli Rempah Kayu Manis",
        categoryTag: "Sup Ikonik Banjar",
        desc: "Kuah kaldu ayam kampung gurih beraroma harum kayu manis, cengkeh, pala, dan kapulaga, berisi suwiran ayam, perkedel kentang lembut, telur bebek rebus, ketupat lontong, dan perasan jeruk limau kuit wangi.",
        image: "/assets/images/soto_banjar_kalsel_1792811458056.jpg"
      },
      {
        name: "Ikan Patin Bakar Bumbu Gambut",
        categoryTag: "Olahan Ikan Sungai",
        desc: "Ikan patin segar Sungai Barito yang dibakar di atas bara arang batok kelapa dengan olesan bumbu kecap manis gurih berempah, disajikan bersama sambal terasi terong asam.",
        image: "/assets/images/patin_bakar_banjar_1792923424403.jpg"
      },
      {
        name: "Ketupat Kandangan Haruan Asap",
        categoryTag: "Makanan Pokok Tradisional",
        desc: "Ketupat pulen berkuah santan kuning kental kaya rempah dengan lauk ikan haruan (ikan gabus rawa) yang diasap hingga harum lalu dimasak bersama kuah gurih."
      },
      {
        name: "Lontong Orari Bumbu Habang",
        categoryTag: "Kuliner Khas Banjarmasin",
        desc: "Lontong segitiga berukuran besar yang disajikan dengan kuah santan gurih, ditemani lauk ikan haruan atau telur rebus yang dimasak bumbu habang (cabai merah kering manis gurih tanpa rasa pedas berlebih)."
      },
      {
        name: "Wadai Bingka Kentang & Amparan Tatak",
        categoryTag: "Kue Tradisional Legendaris",
        desc: "Kue basah tradisional khas Banjar bertekstur legit lembut dengan perpaduan kentang, santan kental, telur bebek, daun pandan suji, dan irisan pisang manis.",
        image: "/assets/images/bingka_kentang_banjar_1792923529089.jpg"
      }
    ],
    coordinates: { x: 52, y: 84 }
  },

  // =========================================================================
  // 4. KALIMANTAN TIMUR (KALTIM) - Lengkap 4 Kategori
  // =========================================================================
  {
    id: 3,
    title: "Kepulauan Derawan & Danau Kakaban",
    category: "Alam",
    region: "Kaltim",
    provinceName: "Kalimantan Timur",
    price: "Rp 150rb / org",
    openHours: "24 Jam (Pantau Pasang Surut)",
    verified: "Kawasan Konservasi Bahari",
    summary: "Surga bahari habitat penyu hijau raksasa (Chelonia mydas) dan danau purba dengan 4 spesies ubur-ubur tanpa sengat.",
    narrative: "Danau Kakaban terisolasi dari laut terbuka sejak jutaan tahun lalu, menyebabkan ubur-ubur di dalamnya kehilangan racun sengat karena ketiadaan predator alami. Di pulau Derawan dan Maratua, terumbu karang tepi menjadi sarang bertelur penyu laut.",
    rules: "Wajib menggunakan tabir surya ramah karang (oxybenzone-free), dilarang menggunakan kaki katak (fins) di danau Kakaban, dan dilarang menyentuh penyu laut.",
    ecoFeature: "Danau Air Asin Purba Bebas Racun Sengat",
    image: "/assets/images/kakaban_jellyfish_1792812009873.jpg",
    gallery: [
      "/assets/images/kakaban_jellyfish_1792812009873.jpg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChzWNBXccD1TtjH2V5belIsUjFCyHxTIEvFuNYB0UvU5GtfL-eaK6YCR5ruLbtVr0MH6vCbjGFTIyl326ATxClUjDtzkn3H6to1E3NlLmZZDF6iqFswMZ6HbtsdxuuLkK81CZ5ICVm4CnIZI2WnzuEkGy9uxfcGewCDr8rnrVVPsyGMhzPwYbSEZs6ZOeYSiiBG-IXcK8IH4Wb652_BL4Zc10Ti7ME43BPt47BaCquydOEc8SLS1M3",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDm0vVzhPw_N75RdF9Z6I1wN0xPcf6OcEbwAr7G2cAQmGnUP5tgXAfjKRbbx_aHYYNUfJ8PbL4yS6abSZiCB1apKJkQsTzdaGuN_c8y64knIMsAm686NWXAQNq-nWFBP-a4QrnQv45O_06cQS_sE4Vpzz8v40XZgGOkNIul9279jgjRb9HqAAQ0LTRcIQCdyIhbxNDgcZptB_i2xfkdRevDf44iSWJCYvUpNxtEd9kHPzAkvhLGYaZX"
    ],
    specialties: [
      { name: "4 Spesies Ubur-ubur Jinak Tanpa Sengat", categoryTag: "Fauna Unik", desc: "Berenang bersama jutaan ubur-ubur Mastigias papua dan Cassiopea yang telah berevolusi tanpa sengat di danau purba." },
      { name: "Konservasi Penyu Hijau Derawan", categoryTag: "Satwa Dilindungi", desc: "Habitat bertelur alami penyu hijau raksasa (Chelonia mydas) di pasir putih pantai tropis." },
      { name: "Palung Laut Maratua (Big Fish Country)", categoryTag: "Titik Selam", desc: "Spot menyelam kelas dunia untuk mengamati kawanan hiu sirip putih, barakuda, dan pari manta." },
      { name: "Gua Halo Tabung Berair Jernih", categoryTag: "Formasi Karst", desc: "Gua bebatuan karst dengan genangan air laut biru toska berkedalaman lebih dari 20 meter." }
    ],
    coordinates: { x: 82, y: 20 }
  },
  {
    id: 2,
    title: "Desa Budaya Pampang Samarinda",
    category: "Budaya",
    region: "Kaltim",
    provinceName: "Kalimantan Timur",
    price: "Rp 40rb / org",
    openHours: "Minggu: 14:00 - 17:00 WITA",
    verified: "Desa Adat Dayak Kenyah",
    summary: "Desa adat suku Dayak Kenyah dengan arsitektur rumah megah Lamin dan pertunjukan seni tarian Kancet Lasan.",
    narrative: "Warga Pampang bermigrasi dari kawasan pedalaman Apokayan Malinau pada 1960-an untuk melestarikan adat budaya luhur. Di sini wisatawan dapat melihat tetua adat bertelinga panjang (telingaan aruu') dan menikmati denting petikan alat musik sape'.",
    rules: "Etika Busana Sopan & Izin Tetua. Lepaskan alas kaki sebelum menaiki tangga Lamin Adat, dan minta izin secara santun sebelum memotret tetua adat.",
    ecoFeature: "Etika Busana Sopan & Izin Tetua Adat Kenyah",
    image: "/assets/images/dayak_kenyah_dancer_1792859686804.jpg",
    gallery: [
      "/assets/images/dayak_kenyah_dancer_1792859686804.jpg",
      "/assets/images/ulap_doyo_textile_1792861357614.jpg",
      "/assets/images/talawang_mandau_dayak_1792812030359.jpg"
    ],
    specialties: [
      { name: "Rumah Lamin Adat Ukir Naga Aso'", categoryTag: "Arsitektur Megah", desc: "Rumah panggung kayu ulin raksasa berhias ukiran motif aso' pelindung desa dan tiang balok utuh." },
      { name: "Tetua Adat Telingaan Aruu'", categoryTag: "Warisan Hidup", desc: "Tetua adat Dayak Kenyah yang mempertahankan tradisi daun telinga panjang beranting kuningan murni." },
      { name: "Musik Petik Tradisional Sape'", categoryTag: "Alat Musik", desc: "Alat musik petik dari kayu aro atau kayu marak yang mengalunkan nada damai hutan Kalimantan." },
      { name: "Tarian Kancet Lasan & Enggang", categoryTag: "Seni Tari", desc: "Tarian anggun wanita Dayak Kenyah dengan bulu burung enggang yang meliuk menirukan kepakan burung suci." }
    ],
    coordinates: { x: 74, y: 44 }
  },
  {
    id: 7,
    title: "Samboja Lestari Sun Bear Sanctuary",
    category: "Konservasi",
    region: "Kaltim",
    provinceName: "Kalimantan Timur",
    price: "Rp 100rb / org",
    openHours: "08:30 - 16:30 WITA",
    verified: "Yayasan BOSF",
    summary: "Pusat suaka beruang madu (Helarctos malayanus) terbesar di dunia serta laboratorium reboisasi hutan hujan tropis.",
    narrative: "Kawasan seluas 1.800 hektar yang dulunya lahan alang-alang gundul berhasil dihijaukan kembali menjadi hutan sekunder lebat. Mengasuh puluhan beruang madu dan orangutan yang diselamatkan untuk dipersiapkan kembali ke alam liar.",
    rules: "Dilarang menyalakan lampu kilat (flash) kamera, dilarang merokok di area hutan rehabilitasi, dan wajib didampingi instruktur biolog.",
    ecoFeature: "Rehabilitasi Hutan Bekas Tambang & Satwa Endemik",
    image: "/assets/images/beruang_madu_samboja_1792812011503.jpg",
    gallery: [
      "/assets/images/beruang_madu_samboja_1792812011503.jpg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7QZYd2uTl9LGp0sAo2cJNeWpUGj7NAdbpVj6JYBxeSNUIlMU7k8QFhstxZ-Ak0NGke00p7OIkl5EHNg6pufMLfCdMSsnZvbLhDeCRwUSEHmxnujv7Q_7vnQ_3RmVL7axPCci2QkeX72O3JUXDNPreucpR_yaPeMeJm9zd4PuUrp2OzVSvW2uzVJG6NNhVEwCx37AfDQ1BdUoGPUJ6KvszfVPRHqAU0NvXl4vinV68kkjjqj1SC-RI",
      "/assets/images/rangkong_badak_borneo_1792812028957.jpg"
    ],
    specialties: [
      { name: "Suaka Beruang Madu Terbesar Dunia", categoryTag: "Fauna Endemik", desc: "Kandang alami 50+ beruang madu (Helarctos malayanus) terkecil di dunia yang diselamatkan dari perdagangan ilegal." },
      { name: "Pulau Buatan Orangutan Pulau B", categoryTag: "Konservasi Primata", desc: "Kawasan pulau berparit air sebagai sarana latihan memanjat pohon sebelum dilepasliarkan ke rimba Kehje Sewen." },
      { name: "Laboratorium Reboisasi Hutan Hujan", categoryTag: "Restorasi Ekologi", desc: "Kisah sukses global menyulap padang alang-alang kritis menjadi hutan tropis lebat beraneka ragam hayati." },
      { name: "Pondok Edukasi Biologi Samboja", categoryTag: "Edukasi Alam", desc: "Pusat informasi interaktif tentang anatomi beruang madu, sarang rayap kayu, dan perlindungan satwa Borneo." }
    ],
    coordinates: { x: 70, y: 52 }
  },
  {
    id: 17,
    title: "Dapoer Kesultanan: Nasi Bekepor & Sajian Kutai Kaltim",
    category: "Kuliner",
    region: "Kaltim",
    provinceName: "Kalimantan Timur",
    price: "Rp 35rb - 65rb",
    openHours: "09:00 - 21:00 WITA",
    verified: "Kuliner Khas Kesultanan Kutai",
    summary: "Nasi rempah gurih beraroma daun kemangi, minyak sayur, dan ikan asin gabus bakar sambal terasi bakar khas Kutai.",
    narrative: "Nasi Bekepor dulunya merupakan hidangan istimewa kaum bangsawan Kesultanan Kutai Kartanegara ing Martadipura. Dimasak di dalam kenceng kuningan dengan bumbu rempah daun salam, jeruk nipis, dan ikan gabus (ruan) segar Sungai Mahakam.",
    rules: "Bahan ikan gabus dipasok dari nelayan tradisional Danau Semayang tanpa racun kimia atau setrum listrik.",
    ecoFeature: "Pengelolaan Perikanan Danau Gambut Berkelanjutan",
    image: "/assets/images/nasi_bekepor_kaltim_1792811474619.jpg",
    gallery: [
      "/assets/images/nasi_bekepor_kaltim_1792811474619.jpg",
      "/assets/images/gence_ruan_kutai_1792923440034.jpg",
      "/assets/images/dayak_kenyah_dancer_1792859686804.jpg"
    ],
    specialties: [
      {
        name: "Nasi Bekepor Khas Kutai",
        categoryTag: "Nasi Liwet Bangsawan",
        desc: "Nasi liwet gurih yang ditanak khusus di dalam kenceng kuningan dengan rempah daun kemangi segar, irisan cabai, minyak sayur, dan suwiran ikan asin gabus goreng renyah.",
        image: "/assets/images/nasi_bekepor_kaltim_1792811474619.jpg"
      },
      {
        name: "Gence Ruan (Ikan Gabus Bakar Sambal Merah)",
        categoryTag: "Lauk Ikan Ikonik",
        desc: "Ikan gabus (ruan) segar tangkapan Sungai Mahakam yang dibelah dan dibakar di atas bara arang, lalu disiram sambal goreng melimpah dari irisan bawang merah dan cabai beraroma asam manis gurih.",
        image: "/assets/images/gence_ruan_kutai_1792923440034.jpg"
      },
      {
        name: "Sayur Asam Kutai Ikan Haruan",
        categoryTag: "Sayur Kuah Segar",
        desc: "Sayur berkuah asam kuning berisi potongan kepala ikan gabus segar, kangkung air, ubi talas lembut, dan terong asam hutan yang menyegarkan lidah."
      },
      {
        name: "Sambal Raja Kutai",
        categoryTag: "Sambal Perjamuan",
        desc: "Sambal legendaris para raja Kutai yang terdiri dari racikan terasi bakar harum, telur rebus goreng cincang, irisan kacang panjang, dan buah terong pipit goreng."
      },
      {
        name: "Wadai Ilat Sapi & Roti Ganda",
        categoryTag: "Kue Tradisional Manis",
        desc: "Kue tradisional khas Kutai berbentuk bulat pipih berwarna cokelat dari gula merah asli, bertekstur empuk lembut dengan aroma rempah harum."
      }
    ],
    coordinates: { x: 72, y: 48 }
  },

  // =========================================================================
  // 5. KALIMANTAN UTARA (KALTARA) - Lengkap 4 Kategori
  // =========================================================================
  {
    id: 18,
    title: "Taman Nasional Kayan Mentarang",
    category: "Alam",
    region: "Kaltara",
    provinceName: "Kalimantan Utara",
    price: "Rp 150rb / org",
    openHours: "08:00 - 17:00 WITA",
    verified: "Resmi Balai TN Kayan Mentarang",
    summary: "Hamparan rimba primer terbesar di Asia Tenggara (1,36 juta hektar) dengan peninggalan kubur batu megalitikum.",
    narrative: "Membentang di perbatasan Indonesia-Malaysia, kawasan ini merupakan benteng alami terluas di Kalimantan yang dihuni berbagai suku Dayak pedalaman. Dikelola dengan model kolaboratif adat terdepan di Indonesia.",
    rules: "Wajib membawa pemandu ranger adat bersertifikat dan dilarang merusak kuburan batu kuno leluhur Dayak.",
    ecoFeature: "Blok Hutan Hujan Primer Tropis Terbesar Asia Tenggara",
    image: "/assets/images/kayan_mentarang_park_1792861219919.jpg",
    gallery: [
      "/assets/images/kayan_mentarang_park_1792861219919.jpg",
      "/assets/images/tane_olen_setulang_1792861234752.jpg",
      "/assets/images/garam_gunung_krayan_1792861372575.jpg"
    ],
    specialties: [
      { name: "Peninggalan Megalitikum Kubur Batu Purba", categoryTag: "Situs Arkeologi", desc: "Peti kubur batu prasejarah berukir relief unik peninggalan peradaban masa lalu di hulu sungai Bahau." },
      { name: "Hutan Primer Perawan 1,36 Juta Hektar", categoryTag: "Paru-paru Dunia", desc: "Hamparan hutan hujan tropis terluas dan terutuh di Asia Tenggara dengan pohon kanopi raksasa." },
      { name: "Komunitas Adat Dayak Sa'ban & Lundayeh", categoryTag: "Kearifan Lokal", desc: "Masyarakat adat yang mengelola rimba dengan hukum kearifan leluhur ramah lingkungan." },
      { name: "Sungai Bahau & Arung Jeram Alami", categoryTag: "Petualangan Sungai", desc: "Jalur perairan berarus deras dengan bebatuan cadas eksotis berair jernih pegunungan." }
    ],
    coordinates: { x: 58, y: 22 }
  },
  {
    id: 9,
    title: "Desa Adat Setulang & Hutan Tane' Olen",
    category: "Budaya",
    region: "Kaltara",
    provinceName: "Kalimantan Utara",
    price: "Rp 50rb / org",
    openHours: "08:00 - 17:00 WITA",
    verified: "Hutan Adat Terdaftar Kalpataru",
    summary: "Kearifan suku Dayak Kenyah Oma' Lung yang berhasil menjaga 5.300 hektar hutan larangan perawan dari eksploitasi.",
    narrative: "Masyarakat Setulang meraih penghargaan Kalpataru berkat keteguhan mereka memegang hukum adat Tane' Olen (hutan larangan yang dijaga untuk generasi mendatang). Pengunjung diajak trekking menyusuri sungai jernih dan pohon bengkirai raksasa.",
    rules: "Dilarang menebang pohon, mengambil batu kali, atau memancing tanpa izin khusus dari dewan tetua adat Setulang.",
    ecoFeature: "Hukum Adat Konservasi Hutan Warisan Leluhur",
    image: "/assets/images/tane_olen_setulang_1792861234752.jpg",
    gallery: [
      "/assets/images/tane_olen_setulang_1792861234752.jpg",
      "/assets/images/kayan_mentarang_park_1792861219919.jpg",
      "/assets/images/anjat_rattan_bag_1792861343630.jpg"
    ],
    specialties: [
      { name: "Pohon Ulin & Bengkirai Raksasa", categoryTag: "Flora Purba", desc: "Tegakan pohon ulin purba berdiameter 3 meter yang tetap kokoh berdiri di zona inti hutan lindung adat." },
      { name: "Sungai Setulang Berair Sebening Kristal", categoryTag: "Mata Air Suci", desc: "Aliran sungai berbatu alami yang menjadi sumber air minum murni langsung bagi seluruh warga desa." },
      { name: "Anyaman Rotan Halus Dayak Oma' Lung", categoryTag: "Kriya Anyam", desc: "Tas anjat dan tikar rotan motif taring dengan kehalusan anyaman tangan tingkat tinggi." },
      { name: "Hukum Adat Kalpataru Tane' Olen", categoryTag: "Sanksi Adat", desc: "Aturan adat ketat yang melarang penebangan kayu demi menjamin warisan oksigen bagi anak cucu." }
    ],
    coordinates: { x: 62, y: 16 }
  },
  {
    id: 19,
    title: "Kawasan Konservasi Mangrove & Bekantan (KKMB)",
    category: "Konservasi",
    region: "Kaltara",
    provinceName: "Kalimantan Utara",
    price: "Rp 30rb / org",
    openHours: "08:00 - 17:00 WITA",
    verified: "Kawasan Konservasi Pemkot Tarakan",
    summary: "Suaka hutan bakau seluas 21 hektar di tengah kota pulau yang menjadi habitat kawanan bekantan jinak dan kepiting bakau.",
    narrative: "Kawasan ini menjadi paru-paru kota Tarakan sekaligus laboratorium hayati bakau Rhizophora. Pengunjung dapat berjalan di atas jembatan kayu ulin yang melingkar sembari mengamati keluarga bekantan berhidung panjang bermain di pucuk dahan bakau.",
    rules: "Dilarang membuang plastik ke perairan payau dan dilarang memberikan keripik atau makanan manusia kepada kawanan bekantan.",
    ecoFeature: "Hutan Bakau Penahan Intrusi Air Laut & Suaka Primata",
    image: "/assets/images/kkmb_tarakan_boardwalk_1792861249617.jpg",
    gallery: [
      "/assets/images/kkmb_tarakan_boardwalk_1792861249617.jpg",
      "/assets/images/bekantan_curiak_island_1792861205721.jpg",
      "/assets/images/danau_sentarum_lake_1792861133917.jpg"
    ],
    specialties: [
      { name: "Kawanan Bekantan Ramah Pengunjung", categoryTag: "Primata Endemik", desc: "Monyet hidung panjang yang terbiasa dengan kehadiran manusia dari atas jembatan kayu ulin kanopi." },
      { name: "Jembatan Kayu Ulin Kanopi Bakau", categoryTag: "Titian Wisata", desc: "Jalur jalan kaki sepanjang 1.200 meter di atas lumpur pasang surut hutan mangrove berakar tunjang." },
      { name: "Ekosistem Kepiting Bakau & Ikan Tembakul", categoryTag: "Biologi Laut", desc: "Ikan glodok yang dapat berjalan di darat serta kepiting bakau bercapit ungu di sela akar pohon bakau." },
      { name: "Zona Penahan Erosi & Intrusi Laut", categoryTag: "Fungsi Ekologis", desc: "Benteng pelindung pantai alami Kota Tarakan dari hempasan gelombang laut Selat Makassar." }
    ],
    coordinates: { x: 76, y: 15 }
  },
  {
    id: 20,
    title: "Kuliner Pesisir: Lawas Ikan & Olahan Rimba Kaltara",
    category: "Kuliner",
    region: "Kaltara",
    provinceName: "Kalimantan Utara",
    price: "Rp 30rb - 55rb",
    openHours: "10:00 - 21:00 WITA",
    verified: "Kuliner Warisan Suku Tidung & Dayak",
    summary: "Olahan segar ikan bumbu jeruk nipis dan cabai rawit dipadu nasi ungu alami khas Dayak Lundayeh dari ubi jalar.",
    narrative: "Lawas Ikan merupakan seni kuliner suku Tidung yang mengolah ikan segar tanpa api, melainkan dimatangkan oleh keasaman jeruk nipis dan garam gunung Krayan. Disajikan bersama Nasi Subut gurih bertabur bulir jagung manis.",
    rules: "Garam yang digunakan wajib Garam Gunung Krayan organik hasil olahan sumur air asin purba dataran tinggi Krayan.",
    ecoFeature: "Garam Gunung Organik Tradisional Krayan",
    image: "/assets/images/lawas_ikan_kaltara_1792811475235.jpg",
    gallery: [
      "/assets/images/lawas_ikan_kaltara_1792811475235.jpg",
      "/assets/images/nasi_subut_krayan_1792923456985.jpg",
      "/assets/images/garam_gunung_krayan_1792861372575.jpg"
    ],
    specialties: [
      {
        name: "Lawas Ikan Segar Suku Tidung",
        categoryTag: "Olahan Ikan Segar",
        desc: "Potongan daging ikan segar (ikan bandeng atau kakap) yang dimatangkan secara alami oleh perasan air jeruk nipis purut, irisan cabai rawit pedas, mentimun segar, dan taburan Garam Gunung Krayan murni tanpa perapian.",
        image: "/assets/images/lawas_ikan_kaltara_1792811475235.jpg"
      },
      {
        name: "Nasi Subut Dayak Lundayeh",
        categoryTag: "Makanan Pokok Tradisional",
        desc: "Nasi pulen berwarna ungu alami khas pedalaman Krayan yang dimasak bersama ubi jalar ungu hutan tumbuk dan butiran jagung manis pipil, menghasilkan cita rasa gurih manis berenergi tinggi.",
        image: "/assets/images/nasi_subut_krayan_1792923456985.jpg"
      },
      {
        name: "Kepiting Soka Tarakan Saus Mangrove",
        categoryTag: "Seafood Unggulan",
        desc: "Kepiting cangkang lunak (soft-shell crab) hasil budidaya tambak mangrove Tarakan yang digoreng krispi hingga seluruh bagian kepiting dapat dinikmati bersama saus asam manis pedas."
      },
      {
        name: "Tudai Kerang Darah Bakar",
        categoryTag: "Kudapan Pesisir",
        desc: "Kerang darah khas hutan bakau Tarakan yang berukuran tebal dan manis gurih alami, dibakar di atas bara arang dan dicocol sambal terasi jeruk limau."
      },
      {
        name: "Beras Adan Krayan Organik",
        categoryTag: "Pangan Warisan Dunia",
        desc: "Beras organik bulir kecil beraroma wangi alami dari dataran tinggi Krayan Nunukan yang sangat pulen dan dinobatkan sebagai salah satu beras terbaik nusantara.",
        image: "/assets/images/garam_gunung_krayan_1792861372575.jpg"
      }
    ],
    coordinates: { x: 74, y: 18 }
  }
];
