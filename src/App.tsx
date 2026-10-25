import React, { useState } from 'react';
import { INITIAL_DESTINATIONS, Destination, CATEGORY_EXPLANATIONS, CategoryInfo } from './data/destinations';
import { KIT_ITEMS, KitItem, KIT_PRESETS, KitPreset } from './data/kitPresets';

export interface TravelerRegistration {
  id: string;
  namaLengkap: string;
  nik: string;
  email: string;
  telepon: string;
  asalKota: string;
  provinsiAsal: string;
  tipeWisatawan: string;
  provinsiTujuan: string[];
  minatEkowisata: string[];
  kontakDarurat: {
    nama: string;
    relasi: string;
    telepon: string;
  };
  ikrarLestari: {
    bebasPlastik: boolean;
    hormatiAdat: boolean;
    jagaJarakSatwa: boolean;
    dukungUMKM: boolean;
  };
  tanggalDaftar: string;
  statusVerifikasi: 'Terverifikasi' | 'Menunggu' | 'Aktif';
  nomorKartuDigital: string;
  catatanMedis: string;
}

export const INITIAL_REGISTERED_TRAVELERS: TravelerRegistration[] = [
  {
    id: "BORNEO-ECO-2026-9921",
    namaLengkap: "Mutiah Salsabila",
    nik: "6471025509980004",
    email: "mutiasalsabila4546@gmail.com",
    telepon: "0812-5890-4421",
    asalKota: "Balikpapan",
    provinsiAsal: "Kalimantan Timur",
    tipeWisatawan: "Ekowisatawan Mandiri / Peneliti Konservasi",
    provinsiTujuan: ["Kalimantan Timur", "Kalimantan Tengah", "Kalimantan Barat"],
    minatEkowisata: [
      "Konservasi Primata & Satwa Liar",
      "Adat Budaya Dayak & Rumah Betang",
      "Kertas Benih Ulin & Reboisasi",
      "Kuliner Tradisional Hutan"
    ],
    kontakDarurat: {
      nama: "Hj. Ratna Dewi",
      relasi: "Keluarga / Orang Tua",
      telepon: "0811-5400-8812"
    },
    ikrarLestari: {
      bebasPlastik: true,
      hormatiAdat: true,
      jagaJarakSatwa: true,
      dukungUMKM: true
    },
    tanggalDaftar: "24 Oktober 2026",
    statusVerifikasi: "Terverifikasi",
    nomorKartuDigital: "PASPOR-BORNEO-09921",
    catatanMedis: "Kondisi fisik prima, bebas alergi serangga berat"
  },
  {
    id: "BORNEO-ECO-2026-9844",
    namaLengkap: "Dr. Bambang Dayak Suryono",
    nik: "6271011405820001",
    email: "bambang.suryono@brin.go.id",
    telepon: "0813-4412-8901",
    asalKota: "Palangka Raya",
    provinsiAsal: "Kalimantan Tengah",
    tipeWisatawan: "Pelajar / Mahasiswa Riset Keanekaragaman",
    provinsiTujuan: ["Kalimantan Tengah", "Kalimantan Barat"],
    minatEkowisata: ["Konservasi Primata & Satwa Liar", "Kertas Benih Ulin & Reboisasi"],
    kontakDarurat: {
      nama: "Siti Aminah",
      relasi: "Istri",
      telepon: "0813-4412-8902"
    },
    ikrarLestari: {
      bebasPlastik: true,
      hormatiAdat: true,
      jagaJarakSatwa: true,
      dukungUMKM: true
    },
    tanggalDaftar: "22 Oktober 2026",
    statusVerifikasi: "Terverifikasi",
    nomorKartuDigital: "PASPOR-BORNEO-09844",
    catatanMedis: "Riwayat asma ringan saat kabut tebal"
  },
  {
    id: "BORNEO-ECO-2026-9812",
    namaLengkap: "Anisa Rahmawati",
    nik: "6171036508950003",
    email: "anisa.rahma@ecotravel.id",
    telepon: "0852-9901-3342",
    asalKota: "Pontianak",
    provinsiAsal: "Kalimantan Barat",
    tipeWisatawan: "Ekowisatawan Mandiri / Peneliti Konservasi",
    provinsiTujuan: ["Kalimantan Barat", "Kalimantan Utara"],
    minatEkowisata: ["Adat Budaya Dayak & Rumah Betang", "Kuliner Tradisional Hutan"],
    kontakDarurat: {
      nama: "H. Ridwan Effendi",
      relasi: "Orang Tua",
      telepon: "0852-9901-3349"
    },
    ikrarLestari: {
      bebasPlastik: true,
      hormatiAdat: true,
      jagaJarakSatwa: true,
      dukungUMKM: true
    },
    tanggalDaftar: "20 Oktober 2026",
    statusVerifikasi: "Terverifikasi",
    nomorKartuDigital: "PASPOR-BORNEO-09812",
    catatanMedis: "Sehat tanpa riwayat alergi"
  },
  {
    id: "BORNEO-ECO-2026-9788",
    namaLengkap: "Fajar Hidayatullah",
    nik: "6371021903970002",
    email: "fajar.meratus@gmail.com",
    telepon: "0821-7788-9922",
    asalKota: "Banjarmasin",
    provinsiAsal: "Kalimantan Selatan",
    tipeWisatawan: "Wisatawan Nusantara / Keluarga Lestari",
    provinsiTujuan: ["Kalimantan Selatan", "Kalimantan Timur"],
    minatEkowisata: ["Konservasi Primata & Satwa Liar", "Adat Budaya Dayak & Rumah Betang"],
    kontakDarurat: {
      nama: "Ahmad Fauzi",
      relasi: "Saudara Kandung",
      telepon: "0821-7788-9933"
    },
    ikrarLestari: {
      bebasPlastik: true,
      hormatiAdat: true,
      jagaJarakSatwa: true,
      dukungUMKM: true
    },
    tanggalDaftar: "18 Oktober 2026",
    statusVerifikasi: "Terverifikasi",
    nomorKartuDigital: "PASPOR-BORNEO-09788",
    catatanMedis: "Sehat jasmani dan rohani"
  },
  {
    id: "BORNEO-ECO-2026-9765",
    namaLengkap: "Rian Pratama Putra",
    nik: "6571012211990005",
    email: "rian.tarakan@yahoo.com",
    telepon: "0819-3344-5566",
    asalKota: "Tarakan",
    provinsiAsal: "Kalimantan Utara",
    tipeWisatawan: "Relawan Reboisasi & Adat Dayak",
    provinsiTujuan: ["Kalimantan Utara"],
    minatEkowisata: ["Kertas Benih Ulin & Reboisasi"],
    kontakDarurat: {
      nama: "Dewi Lestari",
      relasi: "Keluarga",
      telepon: "0819-3344-5577"
    },
    ikrarLestari: {
      bebasPlastik: true,
      hormatiAdat: true,
      jagaJarakSatwa: true,
      dukungUMKM: true
    },
    tanggalDaftar: "15 Oktober 2026",
    statusVerifikasi: "Menunggu",
    nomorKartuDigital: "PASPOR-BORNEO-09765",
    catatanMedis: "Alergi udang laut"
  }
];

export default function App() {
  // Navigation & Network State (Registrasi now a dedicated primary tab)
  const [activeTab, setActiveTab] = useState<'beranda' | 'destinasi' | 'peta' | 'registrasi' | 'kit_qr' | 'akun'>('beranda');
  const [userName, setUserName] = useState<string>('Mutiah Salsabila');
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [ecoPoints, setEcoPoints] = useState<number>(480);
  const [destinations, setDestinations] = useState<Destination[]>(INITIAL_DESTINATIONS);
  const [favorites, setFavorites] = useState<number[]>([1]);
  const [activePillarModal, setActivePillarModal] = useState<CategoryInfo | null>(null);

  // EcoTourism Kit Components Filter State
  const [kitCategoryFilter, setKitCategoryFilter] = useState<'all' | 'culture' | 'tourism' | 'seed' | 'puzzle' | 'umkm'>('all');
  const [kitProvinceFilter, setKitProvinceFilter] = useState<string>('all');
  const [selectedKitItemModal, setSelectedKitItemModal] = useState<KitItem | null>(null);
  const [isPlayingKitAudio, setIsPlayingKitAudio] = useState<boolean>(false);
  const [plantedSeeds, setPlantedSeeds] = useState<string[]>([]);

  // Basis Data Ekowisatawan Terdaftar
  const [registeredTravelers, setRegisteredTravelers] = useState<TravelerRegistration[]>(INITIAL_REGISTERED_TRAVELERS);
  const [registrasiSubSection, setRegistrasiSubSection] = useState<'basis_data' | 'daftar_baru' | 'paspor_saya'>('basis_data');
  const [searchTravelerQuery, setSearchTravelerQuery] = useState<string>('');
  const [filterProvinceTraveler, setFilterProvinceTraveler] = useState<string>('Semua');
  const [filterStatusTraveler, setFilterStatusTraveler] = useState<string>('Semua');
  const [selectedDetailTraveler, setSelectedDetailTraveler] = useState<TravelerRegistration | null>(INITIAL_REGISTERED_TRAVELERS[0]);

  // Traveler Registration State (Data Utama / Profil Aktif)
  const [registrationData, setRegistrationData] = useState<TravelerRegistration>(INITIAL_REGISTERED_TRAVELERS[0]);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);
  const [isPassportCardModalOpen, setIsPassportCardModalOpen] = useState<boolean>(false);
  const [regForm, setRegForm] = useState<TravelerRegistration>(registrationData);

  // New Traveler Form on Dedicated Registration Tab
  const [newRegNama, setNewRegNama] = useState<string>('');
  const [newRegNik, setNewRegNik] = useState<string>('');
  const [newRegEmail, setNewRegEmail] = useState<string>('');
  const [newRegTelp, setNewRegTelp] = useState<string>('');
  const [newRegKota, setNewRegKota] = useState<string>('');
  const [newRegProv, setNewRegProv] = useState<string>('Kalimantan Timur');
  const [newRegTipe, setNewRegTipe] = useState<string>('Ekowisatawan Mandiri / Peneliti Konservasi');
  const [newRegTujuan, setNewRegTujuan] = useState<string[]>(["Kalimantan Timur"]);
  const [newRegKontakNama, setNewRegKontakNama] = useState<string>('');
  const [newRegKontakRelasi, setNewRegKontakRelasi] = useState<string>('Keluarga');
  const [newRegKontakTelp, setNewRegKontakTelp] = useState<string>('');
  const [newRegCatatanMedis, setNewRegCatatanMedis] = useState<string>('Sehat dan bugar');
  const [newRegIkrarPlastik, setNewRegIkrarPlastik] = useState<boolean>(true);
  const [newRegIkrarAdat, setNewRegIkrarAdat] = useState<boolean>(true);
  const [newRegIkrarSatwa, setNewRegIkrarSatwa] = useState<boolean>(true);
  const [newRegIkrarUMKM, setNewRegIkrarUMKM] = useState<boolean>(true);

  // Itinerary State
  const [itinerary, setItinerary] = useState<Array<{ id: number; name: string; province: string; completed: boolean }>>([
    { id: 1, name: "TN Tanjung Puting (Camp Leakey)", province: "Kalimantan Tengah", completed: false }
  ]);
  const [selectedMapPinId, setSelectedMapPinId] = useState<number | null>(1);
  const [mapLayer, setMapLayer] = useState<'topography' | 'regions'>('topography');
  const [mapZoom, setMapZoom] = useState<number>(1);
  const [showRouteTrail, setShowRouteTrail] = useState<boolean>(true);

  // Social Media Hub in Map Tab State
  const [promoShareMode, setPromoShareMode] = useState<'destinasi' | 'rute' | 'kampanye'>('destinasi');
  const [copiedShareType, setCopiedShareType] = useState<string | null>(null);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedRegion, setSelectedRegion] = useState<string>('Semua');

  // Scanner State
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [torchActive, setTorchActive] = useState<boolean>(false);
  const [manualCode, setManualCode] = useState<string>('');
  const [scanHistory, setScanHistory] = useState<Array<{ code: string; title: string; time: string }>>([]);

  // Tab 5 Sub-segments
  const [tab5Section, setTab5Section] = useState<'registrasi' | 'umkm' | 'checklist' | 'quiz' | 'laporan'>('registrasi');

  // Checklist State (8 items)
  const [checklist, setChecklist] = useState<boolean[]>([true, true, true, true, false, false, false, false]);

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<{ q1?: string; q2?: string; q3?: string }>({});
  const [quizResultVisible, setQuizResultVisible] = useState<boolean>(false);

  // Laporan State & Log
  const [reportCategory, setReportCategory] = useState<string>('Koreksi Data Destinasi');
  const [reportLoc, setReportLoc] = useState<string>('');
  const [reportDesc, setReportDesc] = useState<string>('');
  const [adminReportLogs, setAdminReportLogs] = useState<Array<{ cat: string; loc: string; desc: string }>>([
    { cat: "Verifikasi QR", loc: "Stasiun Tanjung Harapan", desc: "Seed paper Ulin terpasang 150 unit." },
    { cat: "Laporan Jalur", loc: "Desa Pampang", desc: "Jalur titian kayu Lamin telah rampung dipelihara." }
  ]);

  // Modals State
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [activeModalImgIndex, setActiveModalImgIndex] = useState<number>(0);

  const openDestinationModal = (dest: Destination) => {
    setSelectedDestination(dest);
    setActiveModalImgIndex(0);
  };
  const [selectedPresetModal, setSelectedPresetModal] = useState<KitPreset | null>(null);
  const [customScannedModal, setCustomScannedModal] = useState<{ code: string; title: string; content: string } | null>(null);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [adminAuthenticated, setAdminAuthenticated] = useState<boolean>(false);
  const [adminPinInput, setAdminPinInput] = useState<string>('');
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);

  // Admin New Destination Form
  const [newDestName, setNewDestName] = useState<string>('');
  const [newDestRegion, setNewDestRegion] = useState<'Kalbar' | 'Kalteng' | 'Kalsel' | 'Kaltim' | 'Kaltara'>('Kalbar');
  const [newDestFee, setNewDestFee] = useState<string>('');

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => prev === msg ? null : prev);
    }, 2800);
  };

  // Registration Handlers
  const handleOpenRegisterModal = () => {
    setRegForm({ ...registrationData });
    setIsRegisterModalOpen(true);
  };

  const handleSaveRegistration = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!regForm.namaLengkap.trim()) {
      showToast("Nama lengkap wajib diisi.");
      return;
    }
    if (!regForm.nik.trim()) {
      showToast("NIK / No. Identitas wajib diisi.");
      return;
    }
    setRegistrationData({ ...regForm });
    setUserName(regForm.namaLengkap);
    // Also sync in registeredTravelers list
    setRegisteredTravelers(prev => prev.map(t => t.id === regForm.id ? { ...regForm } : t));
    setIsRegisterModalOpen(false);
    showToast("✓ Data registrasi resmi berhasil diperbarui dan disimpan!");
  };

  const handleRegisterNewFromTab = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRegNama.trim()) {
      showToast("Nama lengkap pendaftar wajib diisi.");
      return;
    }
    if (!newRegNik.trim() || newRegNik.length < 8) {
      showToast("NIK minimal 8 hingga 16 digit.");
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newRecord: TravelerRegistration = {
      id: `BORNEO-ECO-2026-${randomSuffix}`,
      namaLengkap: newRegNama.trim(),
      nik: newRegNik.trim(),
      email: newRegEmail.trim() || 'wisatawan@ecoborneo.id',
      telepon: newRegTelp.trim() || '0812-0000-0000',
      asalKota: newRegKota.trim() || 'Kota Wisatawan',
      provinsiAsal: newRegProv,
      tipeWisatawan: newRegTipe,
      provinsiTujuan: newRegTujuan.length > 0 ? newRegTujuan : ["Kalimantan Timur"],
      minatEkowisata: ["Konservasi Primata & Satwa Liar", "Adat Budaya Dayak & Rumah Betang"],
      kontakDarurat: {
        nama: newRegKontakNama.trim() || 'Keluarga Pendaftar',
        relasi: newRegKontakRelasi,
        telepon: newRegKontakTelp.trim() || '0811-0000-0000'
      },
      ikrarLestari: {
        bebasPlastik: newRegIkrarPlastik,
        hormatiAdat: newRegIkrarAdat,
        jagaJarakSatwa: newRegIkrarSatwa,
        dukungUMKM: newRegIkrarUMKM
      },
      tanggalDaftar: "24 Oktober 2026",
      statusVerifikasi: "Terverifikasi",
      nomorKartuDigital: `PASPOR-BORNEO-${randomSuffix}`,
      catatanMedis: newRegCatatanMedis.trim() || 'Kondisi fisik bugar'
    };

    setRegisteredTravelers([newRecord, ...registeredTravelers]);
    setRegistrationData(newRecord);
    setUserName(newRecord.namaLengkap);
    setEcoPoints(prev => prev + 50);
    setNewRegNama('');
    setNewRegNik('');
    setNewRegEmail('');
    setNewRegTelp('');
    setNewRegKota('');
    setRegistrasiSubSection('basis_data');
    setSelectedDetailTraveler(newRecord);
    showToast(`✓ Registrasi berhasil! Data '${newRecord.namaLengkap}' resmi tercatat di Basis Data Borneo (+50 Poin Lestari).`);
  };

  const handleDeleteTraveler = (id: string, nama: string) => {
    if (registeredTravelers.length <= 1) {
      showToast("Tidak dapat menghapus data terakhir di basis data.");
      return;
    }
    setRegisteredTravelers(registeredTravelers.filter(t => t.id !== id));
    showToast(`Data '${nama}' berhasil dihapus dari basis data.`);
  };

  const exportToCSV = () => {
    const headers = ["ID Registrasi", "Nama Lengkap", "NIK", "Email", "Telepon", "Kota Asal", "Provinsi Asal", "Tipe Wisatawan", "Provinsi Tujuan", "Status Verifikasi", "Tanggal Terdaftar", "Nomor Paspor"];
    const rows = registeredTravelers.map(t => [
      t.id,
      `"${t.namaLengkap}"`,
      `"'${t.nik}"`,
      t.email,
      `"'${t.telepon}"`,
      `"${t.asalKota}"`,
      `"${t.provinsiAsal}"`,
      `"${t.tipeWisatawan}"`,
      `"${t.provinsiTujuan.join('; ')}"`,
      t.statusVerifikasi,
      t.tanggalDaftar,
      t.nomorKartuDigital
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `data_registrasi_ekowisatawan_borneo_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("📊 File CSV Data Registrasi Ekowisatawan berhasil diunduh!");
  };

  const exportToJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(registeredTravelers, null, 2));
    const link = document.createElement("a");
    link.setAttribute("href", dataStr);
    link.setAttribute("download", `basis_data_registrasi_borneo_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("💾 File JSON Basis Data Registrasi berhasil diunduh!");
  };

  const handleDownloadPassport = () => {
    showToast("📥 Berhasil mengunduh Kartu Paspor Digital Ekowisatawan Borneo!");
  };

  // Handlers
  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(f => f !== id));
      showToast("Dihapus dari daftar favorit.");
    } else {
      setFavorites([...favorites, id]);
      showToast("❤️ Ditambahkan ke daftar destinasi favorit!");
    }
  };

  const addToItinerary = (id: number) => {
    const dest = destinations.find(d => d.id === id);
    if (!dest) return;
    if (itinerary.some(item => item.id === id)) {
      showToast("Destinasi ini sudah ada dalam rute Anda.");
      return;
    }
    setItinerary([...itinerary, { id: dest.id, name: dest.title, province: dest.provinceName, completed: false }]);
    showToast(`+ ${dest.title} ditambahkan ke Rencana Rute.`);
  };

  const toggleItineraryComplete = (index: number) => {
    const updated = [...itinerary];
    updated[index].completed = !updated[index].completed;
    setItinerary(updated);
    if (updated[index].completed) {
      setEcoPoints(prev => prev + 20);
      showToast("Kunjungan selesai! +20 Poin Lestari diperoleh.");
    }
  };

  const moveItinerary = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index > 0) {
      const copy = [...itinerary];
      const temp = copy[index];
      copy[index] = copy[index - 1];
      copy[index - 1] = temp;
      setItinerary(copy);
    } else if (direction === 'down' && index < itinerary.length - 1) {
      const copy = [...itinerary];
      const temp = copy[index];
      copy[index] = copy[index + 1];
      copy[index + 1] = temp;
      setItinerary(copy);
    }
  };

  const removeItinerary = (index: number) => {
    setItinerary(itinerary.filter((_, i) => i !== index));
    showToast("Item dihapus dari rute kunjungan.");
  };

  const handleScanPreset = (code: string) => {
    const preset = KIT_PRESETS[code];
    const timeStr = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    
    if (preset) {
      setSelectedPresetModal(preset);
      setCustomScannedModal(null);
      setScanHistory(prev => [{ code, title: preset.title, time: timeStr }, ...prev.slice(0, 5)]);
    } else {
      setSelectedPresetModal(null);
      setCustomScannedModal({
        code,
        title: `Hasil Pindai: ${code}`,
        content: `Kode kit fisik ${code} berhasil diautentikasi di database cagar konservasi Kalimantan.`
      });
      setScanHistory(prev => [{ code, title: `Kode ${code}`, time: timeStr }, ...prev.slice(0, 5)]);
    }
    setEcoPoints(prev => prev + 15);
    showToast("Pindai berhasil! +15 Poin Lestari.");
  };

  const handleManualCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualCode.trim()) {
      showToast("Harap masukkan kode kartu kit terlebih dahulu.");
      return;
    }
    handleScanPreset(manualCode.trim().toUpperCase());
    setManualCode('');
  };

  const handleToggleChecklist = (index: number) => {
    const updated = [...checklist];
    updated[index] = !updated[index];
    setChecklist(updated);
  };

  const checklistCompletedCount = checklist.filter(Boolean).length;
  const checklistPercent = Math.round((checklistCompletedCount / checklist.length) * 100);

  const handleEvaluateQuiz = () => {
    if (!quizAnswers.q1 || !quizAnswers.q2 || !quizAnswers.q3) {
      showToast("Harap jawab ketiga pertanyaan kuis terlebih dahulu.");
      return;
    }
    if (quizAnswers.q1 === 'correct' && quizAnswers.q2 === 'correct' && quizAnswers.q3 === 'correct') {
      setQuizResultVisible(true);
      setEcoPoints(prev => prev + 50);
      showToast("Luar biasa! Skor 3/3 Sempurna. +50 Poin Ditambahkan!");
    } else {
      showToast("Ada jawaban yang belum tepat. Coba periksa kembali!");
    }
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportLoc || !reportDesc) return;
    setAdminReportLogs(prev => [
      { cat: reportCategory, loc: reportLoc, desc: reportDesc },
      ...prev
    ]);
    showToast("Laporan berhasil dikirim ke dewan kurasi adat.");
    setReportLoc('');
    setReportDesc('');
  };

  const handleAdminAuth = () => {
    if (adminPinInput === 'admin123') {
      setAdminAuthenticated(true);
      showToast("Otentikasi Berhasil. Selamat bertugas, Ranger!");
    } else {
      showToast("Kata sandi salah. Gunakan PIN demo: admin123");
    }
  };

  const handleAddNewDestination = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDestName.trim()) {
      showToast("Nama titik ekowisata tidak boleh kosong.");
      return;
    }
    const provinceFull = newDestRegion === 'Kalbar' ? 'Kalimantan Barat' :
      newDestRegion === 'Kalteng' ? 'Kalimantan Tengah' :
      newDestRegion === 'Kalsel' ? 'Kalimantan Selatan' :
      newDestRegion === 'Kaltim' ? 'Kalimantan Timur' : 'Kalimantan Utara';

    const newDest: Destination = {
      id: destinations.length + 1,
      title: newDestName.trim(),
      category: 'Alam',
      region: newDestRegion,
      provinceName: provinceFull,
      price: newDestFee.trim() || 'Gratis / Donasi',
      openHours: '08:00 - 17:00 WITA',
      verified: 'Terverifikasi Ranger Adat',
      summary: `Titik cagar wisata alam baru di wilayah ${provinceFull}. Dilengkapi papan edukasi ramah ekologi.`,
      narrative: `Destinasi ${newDestName} baru saja didaftarkan melalui portal pengelola konservasi mandiri dengan protokol nol sampah plastik.`,
      rules: 'Patuhi aturan setempat dan bimbingan komunitas pemandu.',
      ecoFeature: 'Zonasi Terbuka Ramah Ekologi',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'
      ],
      specialties: [
        {
          name: newDestName.trim(),
          categoryTag: 'Ekowisata Baru',
          desc: `Titik wisata cagar alam di ${provinceFull} terdaftar dalam sistem ranger konservasi.`
        }
      ],
      coordinates: { x: 50, y: 50 }
    };

    setDestinations([newDest, ...destinations]);
    setNewDestName('');
    setNewDestFee('');
    setIsAdminModalOpen(false);
    showToast(`Destinasi '${newDest.title}' berhasil diterbitkan!`);
    setActiveTab('destinasi');
  };

  // Filtered Destinations
  const filteredDestinations = destinations.filter(item => {
    const matchesCat = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesReg = selectedRegion === 'Semua' || item.region === selectedRegion;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query ||
      item.title.toLowerCase().includes(query) ||
      item.provinceName.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query);
    return matchesCat && matchesReg && matchesSearch;
  });

  // Filtered Kit Items (25 components across 5 Kalimantan provinces)
  const filteredKitItems = KIT_ITEMS.filter(item => {
    const matchesCat = kitCategoryFilter === 'all' || item.category === kitCategoryFilter;
    const matchesProv = kitProvinceFilter === 'all' || item.province === kitProvinceFilter;
    return matchesCat && matchesProv;
  });

  // Filtered Registered Travelers (Basis Data Pengunjung)
  const filteredRegisteredTravelers = registeredTravelers.filter(t => {
    const q = searchTravelerQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      t.namaLengkap.toLowerCase().includes(q) ||
      t.nik.includes(q) ||
      t.id.toLowerCase().includes(q) ||
      t.asalKota.toLowerCase().includes(q) ||
      t.provinsiAsal.toLowerCase().includes(q);
    const matchesProv = filterProvinceTraveler === 'Semua' ||
      t.provinsiAsal.includes(filterProvinceTraveler) ||
      t.provinsiTujuan.some(p => p.includes(filterProvinceTraveler));
    const matchesStatus = filterStatusTraveler === 'Semua' || t.statusVerifikasi === filterStatusTraveler;
    return matchesSearch && matchesProv && matchesStatus;
  });

  const selectedMapDest = destinations.find(d => d.id === selectedMapPinId) || destinations[0];

  // Helper Teks & Tautan Promosi Media Sosial (WhatsApp, Instagram, YouTube, X, Facebook, dll)
  const getDestinationShareText = (dest: Destination) => {
    return `🌿 *JELAJAH PESONA KALIMANTAN: ${dest.title.toUpperCase()}* 🌿\n\n` +
      `📍 *Wilayah:* ${dest.provinceName} (${dest.region})\n` +
      `✨ *Kategori:* ${dest.category} • ${dest.ecoFeature}\n` +
      `💵 *Tarif Masuk/Retribusi:* ${dest.price}\n` +
      `🕒 *Jam Operasional:* ${dest.openHours}\n\n` +
      `📖 *Daya Tarik & Narasi Adat:*\n${dest.summary}\n\n` +
      `🌱 *Pedoman Ekowisatawan Lestari:*\n"${dest.rules}"\n\n` +
      `🤝 Mari berkunjung secara bijak, hormati kearifan Dayak, dan jaga rimba Borneo!\n\n` +
      `#PesonaKalimantan #EkowisataBorneo #HeartOfBorneo #DayakLestari #VisitKalimantan2026 #WonderfulIndonesia #ExploreBorneo`;
  };

  const getItineraryShareText = () => {
    if (itinerary.length === 0) {
      return `🗺️ *RUTE JELAJAH PESONA BORNEO* 🌿\n\nAyo rencanakan perjalanan ekowisata ke 5 provinsi Kalimantan! Lindungi rimba dan lestarikan warisan leluhur Dayak.\n\n#PesonaKalimantan #EkowisataBorneo #HeartOfBorneo`;
    }
    const routeList = itinerary.map((item, idx) => `${idx + 1}. ${item.name} (${item.province})`).join('\n');
    return `🗺️ *RUTE ITINERARY JELAJAH BORNEO SAYA* 🌿\n\n` +
      `Berikut rute perjalanan ramah lingkungan yang telah saya susun di peta aplikasi ECO BORNEA:\n\n` +
      `${routeList}\n\n` +
      `🌱 *Komitmen Rimba:* Jejak karbon rendah, patuhi hukum adat Dayak, dan dukung konservasi cagar alam Kalimantan!\n\n` +
      `#PesonaKalimantan #RuteEkowisata #HeartOfBorneo #DayakLestari #VisitKalimantan2026 #BorneoTrip`;
  };

  const getCampaignShareText = () => {
    return `🌍 *GERAKAN LESTARIKAN RIMBA & BUDAYA DAYAK BORNEO* 🌿\n\n` +
      `Kalimantan adalah paru-paru dunia dan rumah bagi ribuan flora-fauna langka serta kearifan suku Dayak yang luhur.\n\n` +
      `✨ 4 Pilar Aksi Lestari:\n` +
      `1. 🦧 Konservasi Orangutan & Hutan Hujan Tropis Primer\n` +
      `2. 🏮 Menghormati Hukum Adat & Rumah Betang Dayak\n` +
      `3. 🛶 Wisata Jejak Karbon Rendah via Klotok & Sungai\n` +
      `4. 🧺 Pemberdayaan Pengrajin & Produk UMKM Adat Lokal\n\n` +
      `Mari sebarkan pesona Kalimantan ke seluruh penjuru dunia! 🇮🇩✨\n\n` +
      `#SaveBorneoRainforest #PesonaKalimantan #EkowisataDayak #HeartOfBorneo #VisitKalimantan2026 #WonderfulIndonesia`;
  };

  const currentPromoText = promoShareMode === 'destinasi'
    ? getDestinationShareText(selectedMapDest)
    : promoShareMode === 'rute'
    ? getItineraryShareText()
    : getCampaignShareText();

  const handleCopyPromo = (text: string, label: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedShareType(label);
        showToast(`✓ ${label} berhasil disalin ke clipboard!`);
        setTimeout(() => setCopiedShareType(null), 2500);
      }).catch(() => {
        showToast(`✓ ${label} disalin!`);
      });
    } else {
      showToast(`✓ ${label} disalin!`);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Pesona Ekowisata Kalimantan — ${selectedMapDest.title}`,
          text: currentPromoText,
          url: window.location.href,
        });
        showToast("✓ Berhasil membagikan ke media sosial!");
      } catch {
        handleCopyPromo(currentPromoText, "Teks Promosi & Link");
      }
    } else {
      handleCopyPromo(currentPromoText, "Teks Promosi & Link");
    }
  };

  return (
    <div className="bg-[#f1fdef] min-h-screen text-[#141e16] flex justify-center selection:bg-[#b1f2b4] selection:text-[#003311]">
      {/* Mobile Shell Frame */}
      <div className="w-full max-w-md min-h-screen bg-[#f1fdef] relative flex flex-col shadow-2xl overflow-x-hidden pb-24">
        
        {/* Authentic Dayak Talawang & Burung Enggang Background Watermark across all features */}
        <div
          className="pointer-events-none fixed inset-0 max-w-md mx-auto z-0 opacity-[0.055] mix-blend-multiply bg-repeat bg-center"
          style={{
            backgroundImage: "url('/assets/aistudio/Dayak_cc0a579c.jpeg')",
            backgroundSize: '360px auto'
          }}
        />

        {/* TOP APP BAR */}
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-2.5 max-w-md mx-auto bg-[#f1fdef]/92 backdrop-blur-md shadow-sm border-b border-[#003317]/5">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-xl bg-[#174b2a] text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined fill-icon text-[#b1f2b4] text-[20px]">eco</span>
            </div>
            <div>
              <span className="text-[18px] font-extrabold tracking-tight text-[#003317] block leading-tight">ECO BORNEA</span>
              <span className="text-[11px] text-[#795838] font-medium tracking-normal block -mt-0.5">Jelajahi Kalimantan, Lestari Bersama</span>
            </div>
          </div>
          <div className="flex items-center space-x-1.5">
            {/* Live Offline / Online Sync Toggle */}
            <button
              onClick={() => {
                setIsOnline(!isOnline);
                showToast(isOnline ? "Beralih ke Mode Offline (Data Kit Tersimpan)." : "Terhubung kembali ke jaringan online cloud.");
              }}
              className="flex items-center space-x-1 px-2 py-1 rounded-full text-[10px] font-bold bg-[#e0ebde] text-[#003317] border border-[#003317]/10 transition-all active:scale-95 cursor-pointer"
              title="Ganti Mode Jaringan"
            >
              <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
              <span>{isOnline ? 'Online' : 'Offline'}</span>
            </button>

            {/* Quick Passport / Member Card Trigger */}
            <button
              aria-label="Paspor Ekowisatawan"
              onClick={() => setIsPassportCardModalOpen(true)}
              className="w-8 h-8 rounded-xl bg-[#174b2a] text-[#b1f2b4] flex items-center justify-center font-bold text-[11px] shadow-xs active:scale-95 transition-all cursor-pointer border border-[#b1f2b4]/30 relative"
              title="Paspor Digital Ekowisatawan: Mutiah Salsabila"
            >
              <span>MS</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5 border border-white"></span>
            </button>

            {/* Quick Notifications Trigger */}
            <button
              aria-label="Notifikasi"
              onClick={() => setIsNotificationOpen(true)}
              className="w-8 h-8 rounded-xl flex items-center justify-center text-[#414941] hover:bg-[#e0ebde] transition-all active:scale-95 cursor-pointer relative"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="w-2 h-2 rounded-full bg-emerald-600 absolute top-1.5 right-1.5"></span>
            </button>
          </div>
        </header>

        {/* Sub-header Alert Bar (when in Offline Mode) */}
        {!isOnline && (
          <div className="fixed top-[54px] left-0 right-0 z-40 max-w-md mx-auto bg-[#ffd2aa] text-[#795839] px-4 py-1.5 text-[11px] font-semibold flex items-center justify-between shadow-sm transition-all duration-300">
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-[16px]">cloud_off</span>
              <span>Mode Offline: Memakai data tersimpan lokal</span>
            </div>
            <button
              onClick={() => showToast("Sinkronisasi 6 cagar alam & 4 kartu kit berhasil!")}
              className="text-[#003317] underline text-[11px] font-bold active:opacity-75 cursor-pointer"
            >
              Sinkronkan
            </button>
          </div>
        )}

        {/* MAIN CANVAS CONTENT */}
        <main className={`px-4 flex-1 ${!isOnline ? 'pt-[90px]' : 'pt-[64px]'}`}>
          
          {/* ==================================================== */}
          {/* TAB 1: BERANDA (HOME)                                 */}
          {/* ==================================================== */}
          {activeTab === 'beranda' && (
            <div className="space-y-4 animate-fadeIn">
              
              {/* Traveler Poin & Quick Stats Widget */}
              <div className="bg-gradient-to-r from-[#174b2a] to-[#0b4c1f] text-white rounded-2xl p-4 shadow-md flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#ffdcbf] text-[26px]">workspace_premium</span>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#b1f2b4] uppercase tracking-wider font-bold">EcoTraveler Level 2</p>
                    <h2 className="text-[22px] font-bold text-white flex items-center gap-1.5">
                      <span>{ecoPoints}</span> <span className="text-[12px] font-normal text-[#dae6d9]">Poin Lestari</span>
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('peta')}
                  className="bg-[#ffdcbf] text-[#2d1600] px-3 py-1.5 rounded-xl text-[12px] font-bold active:scale-95 transition-all shadow-sm flex items-center space-x-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[15px]">route</span>
                  <span>Rute Aktif</span>
                </button>
              </div>

              {/* Official Traveler Registration Pass Card (Data Ekowisatawan Aktif) */}
              <div className="relative rounded-2xl overflow-hidden p-3.5 bg-gradient-to-br from-[#123d21] via-[#174b2a] to-[#254d32] text-white shadow-md border border-[#b1f2b4]/20">
                {/* Dayak Watermark Pattern */}
                <div 
                  className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-overlay"
                  style={{ backgroundImage: "url('/assets/aistudio/Dayak_cc0a579c.jpeg')" }}
                />
                
                <div className="relative z-10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#b1f2b4]">
                        Registrasi Ekowisatawan Terverifikasi
                      </span>
                    </div>
                    <span className="text-[10px] font-mono bg-white/15 px-2 py-0.5 rounded-full text-[#dae6d9] border border-white/20">
                      {registrationData.id}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[17px] font-bold text-white flex items-center space-x-1">
                        <span>{registrationData.namaLengkap}</span>
                        <span className="material-symbols-outlined text-[17px] text-[#b1f2b4]">verified</span>
                      </h3>
                      <p className="text-[11px] text-[#dae6d9] flex items-center space-x-1 mt-0.5">
                        <span className="material-symbols-outlined text-[13px] text-[#ffdcbf]">pin_drop</span>
                        <span>Asal: {registrationData.asalKota}, {registrationData.provinsiAsal}</span>
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-[#ffdcbf] block font-semibold">{registrationData.tipeWisatawan}</span>
                      <span className="text-[9px] text-[#dae6d9] font-mono">No: {registrationData.nomorKartuDigital}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-[10px] text-[#b1f2b4]">
                      <span className="material-symbols-outlined text-[14px]">shield</span>
                      <span>4 Komitmen Hijau &amp; Izin Adat Aktif</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleOpenRegisterModal}
                        className="px-2.5 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white text-[11px] font-bold transition-all cursor-pointer flex items-center space-x-1"
                      >
                        <span className="material-symbols-outlined text-[13px]">edit_note</span>
                        <span>Edit Data</span>
                      </button>
                      <button
                        onClick={() => setIsPassportCardModalOpen(true)}
                        className="px-3 py-1 rounded-lg bg-[#b1f2b4] text-[#003317] text-[11px] font-extrabold hover:bg-white transition-all shadow-sm cursor-pointer flex items-center space-x-1"
                      >
                        <span className="material-symbols-outlined text-[14px]">badge</span>
                        <span>Lihat Paspor</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pusat Warisan Adat Dayak & Kearifan Lokal Kalimantan (Ciri Khas Borneo) */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#003317]/15 p-3.5 shadow-sm space-y-3">
                {/* Subtle Dayak Watermark */}
                <div 
                  className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-cover bg-right pointer-events-none mix-blend-multiply"
                  style={{ backgroundImage: "url('/assets/aistudio/Dayak_cc0a579c.jpeg')" }}
                />

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-xl bg-[#795838] text-white flex items-center justify-center shadow-xs">
                      <span className="material-symbols-outlined text-[18px]">temple_buddhist</span>
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#003317] leading-tight">Warisan Adat Dayak &amp; Rimba</h4>
                      <p className="text-[11px] text-[#795838] font-medium">Kearifan Kosmologis 5 Penjuru Kalimantan</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#ebf7ea] text-[#174b2a] font-bold px-2 py-0.5 rounded-full border border-[#003317]/10">
                    Otentik Borneo
                  </span>
                </div>

                <div className="relative h-44 rounded-xl overflow-hidden border border-[#003317]/10 group">
                  <img
                    src="/assets/images/dayak_kenyah_dancer_1792859686804.jpg"
                    alt="Pemusik &amp; Tetua Adat Dayak Kenyah Memetik Sape"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/Dayak_cc0a579c.jpeg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                  
                  <div className="absolute top-2.5 left-2.5 bg-[#795838]/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1 shadow-sm">
                    <span className="material-symbols-outlined text-[12px]">music_note</span>
                    <span>Petikan Sape' Dayak Kenyah</span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <p className="text-[13px] font-bold leading-tight">Alunan Melodi Sape' &amp; Lambang Pelindung Talawang</p>
                    <p className="text-[11px] text-[#dae6d9] mt-0.5 line-clamp-2">
                      Tetua adat Dayak memainkan alat musik petik sakral diiringi tari burung enggang badak sebagai wujud syukur dan penghormatan terhadap hutan adat rimba tropis.
                    </p>
                  </div>
                </div>

                {/* 4 Cultural Micro-Features */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] relative z-10">
                  <div className="bg-[#ebf7ea] p-2 rounded-xl border border-[#003317]/5 flex items-start space-x-2">
                    <span className="material-symbols-outlined text-[#174b2a] text-[18px] shrink-0 mt-0.5">shield</span>
                    <div>
                      <p className="font-bold text-[#141e16]">Perisai Talawang</p>
                      <p className="text-[10px] text-[#414941]">Kayu ulin bermotif taring sakral pelindung rimba</p>
                    </div>
                  </div>
                  <div className="bg-[#ebf7ea] p-2 rounded-xl border border-[#003317]/5 flex items-start space-x-2">
                    <span className="material-symbols-outlined text-[#795838] text-[18px] shrink-0 mt-0.5">roofing</span>
                    <div>
                      <p className="font-bold text-[#141e16]">Rumah Betang 100m</p>
                      <p className="text-[10px] text-[#414941]">Arsitektur panggung komunal 28 pintu keluarga</p>
                    </div>
                  </div>
                  <div className="bg-[#ebf7ea] p-2 rounded-xl border border-[#003317]/5 flex items-start space-x-2">
                    <span className="material-symbols-outlined text-[#174b2a] text-[18px] shrink-0 mt-0.5">flutter_dash</span>
                    <div>
                      <p className="font-bold text-[#141e16]">Burung Enggang</p>
                      <p className="text-[10px] text-[#414941]">Panglima rimba penyebar biji pohon purba</p>
                    </div>
                  </div>
                  <div className="bg-[#ebf7ea] p-2 rounded-xl border border-[#003317]/5 flex items-start space-x-2">
                    <span className="material-symbols-outlined text-[#795838] text-[18px] shrink-0 mt-0.5">palette</span>
                    <div>
                      <p className="font-bold text-[#141e16]">Pewarna Hutan Alami</p>
                      <p className="text-[10px] text-[#414941]">Fermentasi daun renggat &amp; akar mengkudu</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 relative z-10">
                  <button
                    onClick={() => { setSelectedCategory('Budaya'); setActiveTab('destinasi'); }}
                    className="text-[#003317] font-bold text-[11px] hover:underline flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Jelajahi 5 Desa Adat Dayak</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('akun'); setTab5Section('quiz'); }}
                    className="px-2.5 py-1 bg-[#795838] text-white rounded-lg text-[10px] font-bold active:scale-95 transition-all cursor-pointer"
                  >
                    Uji Pengetahuan Adat
                  </button>
                </div>
              </div>

              {/* Featured EcoTourism Kit Hero Banner */}
              <div className="relative rounded-2xl overflow-hidden card-elevation-1 bg-white border border-[#003317]/5">
                <div className="h-44 w-full relative">
                  <img
                    src="/assets/images/seed_paper_borneo_1792861313370.jpg"
                    alt="EcoTourism Kit Borneo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003317] via-[#003317]/40 to-transparent"></div>
                  <span className="absolute top-3 left-3 bg-[#ffdcbf]/95 backdrop-blur-md text-[#2d1600] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center space-x-1">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    <span>Inovasi Kit Digital 2025</span>
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-[20px] font-bold leading-tight">EcoTourism Kit Borneo</h3>
                    <p className="text-[12px] text-[#dae6d9] mt-0.5 line-clamp-1">Integrasi Kertas Benih, Culture Card, &amp; Peta Cagar...</p>
                  </div>
                </div>
                <div className="p-3 bg-[#ebf7ea] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="material-symbols-outlined text-[#174b2a] text-[20px]">eco</span>
                    <span className="text-[13px] font-medium text-[#141e16]">Kertas Bibit Pohon Ulin Tersertifikasi</span>
                  </div>
                  <button
                    onClick={() => handleScanPreset('KODE-SEEDPAPER-04')}
                    className="text-[#003317] text-[12px] font-bold hover:underline cursor-pointer"
                  >
                    Pelajari
                  </button>
                </div>
              </div>

              {/* Quick Access Carousel: Kategori Eksplorasi */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[18px] font-bold text-[#003317]">Kategori Eksplorasi</h4>
                  <button
                    onClick={() => setActivePillarModal(CATEGORY_EXPLANATIONS['Alam'])}
                    className="text-[12px] text-[#795838] font-bold hover:underline cursor-pointer flex items-center"
                    title="Lihat Penjelasan Singkat 4 Pilar"
                  >
                    <span>5 Pilar</span>
                    <span className="material-symbols-outlined text-[15px] ml-0.5">info</span>
                  </button>
                </div>
                <div className="flex space-x-2.5 overflow-x-auto no-scrollbar py-1">
                  <button
                    onClick={() => { setSelectedCategory('Alam'); setActiveTab('destinasi'); }}
                    className="flex-shrink-0 flex items-center space-x-2 bg-white border border-[#003317]/10 rounded-xl px-3.5 py-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#e5f1e4] flex items-center justify-center text-[#174b2a]">
                      <span className="material-symbols-outlined text-[18px]">park</span>
                    </div>
                    <span className="text-[13px] text-[#141e16] font-semibold">Wisata Alam</span>
                  </button>

                  <button
                    onClick={() => { setSelectedCategory('Budaya'); setActiveTab('destinasi'); }}
                    className="flex-shrink-0 flex items-center space-x-2 bg-white border border-[#003317]/10 rounded-xl px-3.5 py-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#ffd2aa]/50 flex items-center justify-center text-[#795838]">
                      <span className="material-symbols-outlined text-[18px]">temple_buddhist</span>
                    </div>
                    <span className="text-[13px] text-[#141e16] font-semibold">Budaya Dayak</span>
                  </button>

                  <button
                    onClick={() => { setSelectedCategory('Konservasi'); setActiveTab('destinasi'); }}
                    className="flex-shrink-0 flex items-center space-x-2 bg-white border border-[#003317]/10 rounded-xl px-3.5 py-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#e5f1e4] flex items-center justify-center text-[#174b2a]">
                      <span className="material-symbols-outlined text-[18px]">cruelty_free</span>
                    </div>
                    <span className="text-[13px] text-[#141e16] font-semibold">Konservasi Satwa</span>
                  </button>

                  <button
                    onClick={() => { setSelectedCategory('Kuliner'); setActiveTab('destinasi'); }}
                    className="flex-shrink-0 flex items-center space-x-2 bg-white border border-[#003317]/10 rounded-xl px-3.5 py-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#ffdcbf]/60 flex items-center justify-center text-[#795838]">
                      <span className="material-symbols-outlined text-[18px]">restaurant</span>
                    </div>
                    <span className="text-[13px] text-[#141e16] font-semibold">Kuliner Lokal</span>
                  </button>

                  <button
                    onClick={() => { setActiveTab('akun'); setTab5Section('umkm'); }}
                    className="flex-shrink-0 flex items-center space-x-2 bg-white border border-[#003317]/10 rounded-xl px-3.5 py-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#e0ebde] flex items-center justify-center text-[#174b2a]">
                      <span className="material-symbols-outlined text-[18px]">storefront</span>
                    </div>
                    <span className="text-[13px] text-[#141e16] font-semibold">UMKM Kalimantan</span>
                  </button>
                </div>
              </div>

              {/* Quick Action Launcher Grid (4 icons exactly as screenshot) */}
              <div className="grid grid-cols-4 gap-2 py-1">
                <button
                  onClick={() => setActiveTab('kit_qr')}
                  className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-[#003317]/10 hover:border-[#003317]/30 transition-all active:scale-95 card-elevation-1 cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#174b2a] text-white flex items-center justify-center mb-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-[22px]">qr_code_scanner</span>
                  </div>
                  <span className="text-[11px] text-[#141e16] font-bold text-center leading-tight">Pindai Kit</span>
                </button>

                <button
                  onClick={() => setActiveTab('peta')}
                  className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-[#003317]/10 hover:border-[#003317]/30 transition-all active:scale-95 card-elevation-1 cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#e0ebde] text-[#003317] flex items-center justify-center mb-1.5">
                    <span className="material-symbols-outlined text-[22px]">map</span>
                  </div>
                  <span className="text-[11px] text-[#141e16] font-bold text-center leading-tight">Peta Rute</span>
                </button>

                <button
                  onClick={() => setActiveTab('registrasi')}
                  className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-[#003317]/10 hover:border-[#003317]/30 transition-all active:scale-95 card-elevation-1 cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#ffd2aa] text-[#795839] flex items-center justify-center mb-1.5">
                    <span className="material-symbols-outlined text-[22px]">how_to_reg</span>
                  </div>
                  <span className="text-[11px] text-[#141e16] font-bold text-center leading-tight">Data Registrasi</span>
                </button>

                <button
                  onClick={() => { setActiveTab('akun'); setTab5Section('checklist'); }}
                  className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-[#003317]/10 hover:border-[#003317]/30 transition-all active:scale-95 card-elevation-1 cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#dae6d9] text-[#003317] flex items-center justify-center mb-1.5">
                    <span className="material-symbols-outlined text-[22px]">checklist</span>
                  </div>
                  <span className="text-[11px] text-[#141e16] font-bold text-center leading-tight">Checklist</span>
                </button>
              </div>

              {/* Destinasi Unggulan Kalimantan Spotlight */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-[18px] font-bold text-[#003317]">Destinasi Unggulan</h4>
                    <p className="text-[11px] text-[#414941]">Prioritas Konservasi &amp; Warisan Budaya</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('destinasi')}
                    className="text-[12px] font-bold text-[#174b2a] flex items-center cursor-pointer hover:underline"
                  >
                    Lihat Semua <span className="material-symbols-outlined text-[16px] ml-0.5">chevron_right</span>
                  </button>
                </div>

                {/* Featured 1: Tanjung Puting */}
                <div className="bg-white rounded-2xl p-3 border border-[#003317]/10 card-elevation-1 transition-all">
                  <div className="relative h-40 rounded-xl overflow-hidden mb-3">
                    <img
                      src={destinations.find(dest => dest.id === 1)?.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuA7QZYd2uTl9LGp0sAo2cJNeWpUGj7NAdbpVj6JYBxeSNUIlMU7k8QFhstxZ-Ak0NGke00p7OIkl5EHNg6pufMLfCdMSsnZvbLhDeCRwUSEHmxnujv7Q_7vnQ_3RmVL7axPCci2QkeX72O3JUXDNPreucpR_yaPeMeJm9zd4PuUrp2OzVSvW2uzVJG6NNhVEwCx37AfDQ1BdUoGPUJ6KvszfVPRHqAU0NvXl4vinV68kkjjqj1SC-RI"}
                      alt="TN Tanjung Puting"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5 flex gap-1.5">
                      <span className="bg-[#f1fdef]/90 backdrop-blur-md text-[#003317] text-[11px] font-bold px-2 py-0.5 rounded-full border border-[#003317]/10">Kalteng</span>
                      <span className="bg-[#174b2a] text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">Resmi Balai TN</span>
                    </div>
                    <button
                      onClick={() => toggleFavorite(1)}
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center shadow-sm active:scale-90 transition-all cursor-pointer"
                    >
                      <span className={`material-symbols-outlined text-[18px] ${favorites.includes(1) ? 'fill-icon text-[#ba1a1a]' : 'text-[#717971]'}`}>favorite</span>
                    </button>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-[17px] font-bold text-[#141e16] leading-snug">TN Tanjung Puting (Camp Leakey)</h5>
                      <p className="text-[12px] text-[#414941] flex items-center mt-0.5">
                        <span className="material-symbols-outlined text-[15px] text-[#795838] mr-1">location_on</span>
                        Kotawaringin Barat, Kalimantan Tengah
                      </p>
                    </div>
                    <span className="text-[11px] font-bold bg-[#e5f1e4] px-2 py-1 rounded-lg text-[#003317] whitespace-nowrap ml-2">Rp 250rb / org</span>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-[#e5f1e4] flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-[11px] text-[#795838] font-medium">
                      <span className="material-symbols-outlined text-[16px]">verified_user</span>
                      <span className="truncate max-w-[150px]">Zonasi Ketat Bebas Sampah Plastik</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => addToItinerary(1)}
                        className="px-2.5 py-1.5 rounded-lg bg-[#e5f1e4] text-[#003317] text-[11px] font-bold hover:bg-[#e0ebde] transition-all cursor-pointer"
                      >
                        + Itinerary
                      </button>
                      <button
                        onClick={() => {
                          const d = destinations.find(dest => dest.id === 1);
                          if (d) openDestinationModal(d);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#174b2a] text-white text-[11px] font-bold hover:opacity-95 transition-all cursor-pointer"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>

                {/* Featured 2: Desa Budaya Pampang */}
                <div className="bg-white rounded-2xl p-3 border border-[#003317]/10 card-elevation-1 transition-all">
                  <div className="relative h-40 rounded-xl overflow-hidden mb-3">
                    <img
                      src={destinations.find(dest => dest.id === 2)?.image || "/assets/images/dayak_kenyah_dancer_1792859686804.jpg"}
                      alt="Desa Budaya Pampang"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5 flex gap-1.5">
                      <span className="bg-[#f1fdef]/90 backdrop-blur-md text-[#003317] text-[11px] font-bold px-2 py-0.5 rounded-full border border-[#003317]/10">Kaltim</span>
                      <span className="bg-[#795838] text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">Desa Adat</span>
                    </div>
                    <button
                      onClick={() => toggleFavorite(2)}
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center shadow-sm active:scale-90 transition-all cursor-pointer"
                    >
                      <span className={`material-symbols-outlined text-[18px] ${favorites.includes(2) ? 'fill-icon text-[#ba1a1a]' : 'text-[#717971]'}`}>favorite</span>
                    </button>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-[17px] font-bold text-[#141e16] leading-snug">Desa Budaya Pampang</h5>
                      <p className="text-[12px] text-[#414941] flex items-center mt-0.5">
                        <span className="material-symbols-outlined text-[15px] text-[#795838] mr-1">location_on</span>
                        Samarinda Utara, Kalimantan Timur
                      </p>
                    </div>
                    <span className="text-[11px] font-bold bg-[#e5f1e4] px-2 py-1 rounded-lg text-[#003317] whitespace-nowrap ml-2">Rp 40rb / org</span>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-[#e5f1e4] flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-[11px] text-[#795838] font-medium">
                      <span className="material-symbols-outlined text-[16px]">diversity_3</span>
                      <span className="truncate max-w-[150px]">Etika Busana Sopan &amp; Izin Tetua</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => addToItinerary(2)}
                        className="px-2.5 py-1.5 rounded-lg bg-[#e5f1e4] text-[#003317] text-[11px] font-bold hover:bg-[#e0ebde] transition-all cursor-pointer"
                      >
                        + Itinerary
                      </button>
                      <button
                        onClick={() => {
                          const d = destinations.find(dest => dest.id === 2);
                          if (d) openDestinationModal(d);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#174b2a] text-white text-[11px] font-bold hover:opacity-95 transition-all cursor-pointer"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Isi Lengkap EcoTourism Kit (25 Komponen Lengkap 5 Provinsi Kalimantan) */}
              <div className="bg-[#e5f1e4] rounded-2xl p-4 space-y-3.5 border border-[#003317]/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[#174b2a]">
                    <span className="material-symbols-outlined text-[24px]">inventory_2</span>
                    <div>
                      <h4 className="text-[17px] font-bold leading-tight">Isi Lengkap EcoTourism Kit</h4>
                      <p className="text-[11px] text-[#414941]">Kit fisik & digital lengkap 5 Provinsi Kalimantan</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#174b2a] text-white font-bold px-2.5 py-1 rounded-full">
                    25 Komponen
                  </span>
                </div>

                <p className="text-[12px] text-[#414941] leading-relaxed">
                  Setiap kit fisik memadukan material organik terurai hayati dengan materi edukasi digital, audio narasi adat, benih pohon hutan tropis endemik, dan akses langsung ke pengrajin lokal.
                </p>

                {/* Filter Kategori Komponen */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-bold text-[#003317] uppercase tracking-wider block">Jenis Komponen Kit:</span>
                  <div className="flex space-x-1.5 overflow-x-auto no-scrollbar pb-1">
                    {[
                      { id: 'all', label: 'Semua (25)', icon: 'apps' },
                      { id: 'culture', label: 'Culture Cards (5)', icon: 'badge' },
                      { id: 'tourism', label: 'Tourism Cards (5)', icon: 'travel_explore' },
                      { id: 'seed', label: 'Kertas Benih (5)', icon: 'yard' },
                      { id: 'puzzle', label: 'Puzzle Seni (5)', icon: 'extension' },
                      { id: 'umkm', label: 'UMKM Adat (5)', icon: 'storefront' },
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setKitCategoryFilter(tab.id as any)}
                        className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap flex items-center space-x-1 transition-all cursor-pointer ${
                          kitCategoryFilter === tab.id
                            ? 'bg-[#174b2a] text-white shadow-sm'
                            : 'bg-white text-[#414941] hover:bg-emerald-50 border border-[#003317]/10'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[14px]">{tab.icon}</span>
                        <span>{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filter Provinsi Kalimantan */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-[#003317] uppercase tracking-wider block">Wilayah / Provinsi:</span>
                  <div className="flex space-x-1.5 overflow-x-auto no-scrollbar pb-1">
                    {[
                      { id: 'all', label: 'Semua Kalimantan' },
                      { id: 'Kalbar', label: 'Kalbar' },
                      { id: 'Kalteng', label: 'Kalteng' },
                      { id: 'Kalsel', label: 'Kalsel' },
                      { id: 'Kaltim', label: 'Kaltim' },
                      { id: 'Kaltara', label: 'Kaltara' },
                    ].map(prov => (
                      <button
                        key={prov.id}
                        onClick={() => setKitProvinceFilter(prov.id)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                          kitProvinceFilter === prov.id
                            ? 'bg-[#795838] text-white'
                            : 'bg-[#d8e6d7] text-[#141e16] hover:bg-[#c9dac8]'
                        }`}
                      >
                        {prov.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid Komponen Kit */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {filteredKitItems.map(item => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedKitItemModal(item);
                        setEcoPoints(p => p + 15);
                        showToast(`Membuka ${item.title} (+15 Poin)`);
                      }}
                      className="bg-white rounded-xl overflow-hidden border border-[#003317]/10 hover:border-[#174b2a] shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col group active:scale-[0.98]"
                    >
                      {/* Thumbnail Image with badges */}
                      <div className="relative h-28 w-full overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80';
                          }}
                        />
                        <div className="absolute top-1.5 left-1.5 bg-[#003317]/85 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-md flex items-center space-x-1">
                          <span className="material-symbols-outlined text-[11px]">{item.icon}</span>
                          <span className="capitalize">{item.category}</span>
                        </div>
                        <div className="absolute top-1.5 right-1.5 bg-[#795838] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                          {item.province}
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-2.5 flex-1 flex flex-col justify-between space-y-1.5">
                        <div>
                          <h6 className="text-[12px] font-bold text-[#141e16] line-clamp-1 group-hover:text-[#174b2a]">
                            {item.title}
                          </h6>
                          <p className="text-[10px] text-[#414941] line-clamp-1">
                            {item.subtitle}
                          </p>
                        </div>

                        {/* Ciri Khas Kalimantan Badge */}
                        <div className="bg-[#ebf7ea] text-[#174b2a] text-[9px] font-semibold px-2 py-1 rounded-md line-clamp-1 flex items-center space-x-1">
                          <span className="material-symbols-outlined text-[11px]">eco</span>
                          <span className="truncate">{item.khasBorneo}</span>
                        </div>

                        <div className="pt-1 flex items-center justify-between text-[10px] text-[#174b2a] font-bold">
                          <span>Buka Detail &amp; Audio</span>
                          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredKitItems.length === 0 && (
                  <div className="bg-white p-6 rounded-xl text-center space-y-2 border border-[#003317]/10">
                    <span className="material-symbols-outlined text-gray-400 text-[32px]">filter_alt_off</span>
                    <p className="text-[12px] font-bold text-gray-700">Tidak ada komponen yang cocok dengan kombinasi filter.</p>
                    <button
                      onClick={() => { setKitCategoryFilter('all'); setKitProvinceFilter('all'); }}
                      className="px-3 py-1.5 bg-[#174b2a] text-white rounded-lg text-[11px] font-bold"
                    >
                      Reset Filter
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* TAB 2: JELAJAHI DESTINASI                            */}
          {/* ==================================================== */}
          {activeTab === 'destinasi' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="relative rounded-2xl overflow-hidden p-3.5 bg-gradient-to-r from-[#174b2a] to-[#254d32] text-white shadow-sm border border-[#003317]/10">
                <div 
                  className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-overlay"
                  style={{ backgroundImage: "url('/assets/aistudio/Dayak_cc0a579c.jpeg')" }}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#b1f2b4] font-bold uppercase tracking-wider block">Khas 5 Wilayah Borneo</span>
                    <h2 className="text-[20px] font-extrabold text-white leading-tight">Jelajahi Kalimantan</h2>
                    <p className="text-[11px] text-[#dae6d9] mt-0.5">20 Cagar alam, desa adat Dayak, dan sentra kuliner lokal terverifikasi</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-[#ffdcbf] border border-white/20 shrink-0">
                    <span className="material-symbols-outlined text-[24px]">explore</span>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#717971] text-[20px]">search</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari destinasi, nama taman, atau provinsi..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white border border-[#c1c9bf] focus:border-[#003317] focus:ring-1 focus:ring-[#003317] text-[13px] text-[#141e16] placeholder:text-[#717971] shadow-sm transition-all outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#717971] hover:text-[#141e16] cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                )}
              </div>

              {/* Category Filter Chips with Dynamic Counts */}
              <div className="flex space-x-2 overflow-x-auto no-scrollbar py-0.5">
                {[
                  { key: 'Semua', label: 'Semua' },
                  { key: 'Alam', label: 'Wisata Alam' },
                  { key: 'Budaya', label: 'Budaya Dayak' },
                  { key: 'Konservasi', label: 'Konservasi Satwa' },
                  { key: 'Kuliner', label: 'Kuliner Lokal' }
                ].map(({ key, label }) => {
                  const count = destinations.filter(d =>
                    (key === 'Semua' || d.category === key) &&
                    (selectedRegion === 'Semua' || d.region === selectedRegion)
                  ).length;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
                        selectedCategory === key
                          ? 'bg-[#003317] text-white shadow-sm'
                          : 'bg-[#e0ebde] text-[#414941] hover:text-[#003317]'
                      }`}
                    >
                      <span>{label}</span>
                      <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                        selectedCategory === key ? 'bg-white/20 text-white' : 'bg-black/5 text-[#414941]'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Region Filter Chips with Dynamic Counts */}
              <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-0.5">
                <span className="text-[11px] text-[#795838] font-bold mr-1">Wilayah:</span>
                {['Semua', 'Kalbar', 'Kalteng', 'Kalsel', 'Kaltim', 'Kaltara'].map(reg => {
                  const count = destinations.filter(d =>
                    (reg === 'Semua' || d.region === reg) &&
                    (selectedCategory === 'Semua' || d.category === selectedCategory)
                  ).length;
                  return (
                    <button
                      key={reg}
                      onClick={() => setSelectedRegion(reg)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer flex items-center space-x-1 ${
                        selectedRegion === reg
                          ? 'bg-[#e5f1e4] text-[#003317] font-bold border border-[#003317]/20 shadow-2xs'
                          : 'bg-white text-[#414941] border border-black/5 hover:bg-[#ebf7ea]'
                      }`}
                    >
                      <span>{reg}</span>
                      <span className="text-[9px] opacity-75">({count})</span>
                    </button>
                  );
                })}
              </div>

              {/* Edukasi & Penjelasan Singkat 4 Pilar Ekowisata Kalimantan */}
              {selectedCategory !== 'Semua' && CATEGORY_EXPLANATIONS[selectedCategory] ? (
                <div className="bg-gradient-to-br from-[#e5f1e4] to-[#e0ebde] p-3.5 rounded-2xl border border-[#003317]/15 space-y-2 shadow-xs animate-fadeIn">
                  <div className="flex items-center space-x-2 text-[#003317]">
                    <div className="w-8 h-8 rounded-xl bg-[#174b2a] text-white flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[18px]">{CATEGORY_EXPLANATIONS[selectedCategory].icon}</span>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold leading-tight">{CATEGORY_EXPLANATIONS[selectedCategory].name}</h4>
                      <p className="text-[11px] text-[#795838] font-medium">{CATEGORY_EXPLANATIONS[selectedCategory].subtitle}</p>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#141e16] leading-relaxed">
                    {CATEGORY_EXPLANATIONS[selectedCategory].description}
                  </p>
                  <div className="pt-1 border-t border-[#003317]/10">
                    <span className="text-[10px] font-bold text-[#003317] uppercase tracking-wider block mb-1">Referensi Utama Kalimantan:</span>
                    <div className="flex flex-wrap gap-1">
                      {CATEGORY_EXPLANATIONS[selectedCategory].highlights.map((h, i) => (
                        <span key={i} className="text-[10px] bg-white text-[#174b2a] px-2 py-0.5 rounded-md font-semibold border border-[#003317]/10 shadow-2xs">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-3 rounded-2xl border border-[#003317]/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#003317] uppercase tracking-wider">4 Pilar Ekowisata Kalimantan (Lengkap di 5 Provinsi)</span>
                    <span className="text-[10px] text-[#795838]">Sentuh untuk filter</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-left">
                    {Object.entries(CATEGORY_EXPLANATIONS).map(([key, info]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedCategory(key)}
                        className="p-2 rounded-xl bg-[#ebf7ea] hover:bg-[#e0ebde] border border-[#003317]/10 transition-all text-left cursor-pointer"
                      >
                        <div className="flex items-center space-x-1.5 mb-1 text-[#003317]">
                          <span className="material-symbols-outlined text-[16px]">{info.icon}</span>
                          <span className="text-[11px] font-bold truncate">{info.name.replace(' Kalimantan', '')}</span>
                        </div>
                        <p className="text-[10px] text-[#414941] line-clamp-2 leading-tight">{info.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Destination Cards Feed */}
              <div className="space-y-3 pt-1">
                {filteredDestinations.length === 0 ? (
                  <div className="space-y-3">
                    <div className="text-center py-4 bg-[#ebf7ea] rounded-2xl p-4 border border-[#003317]/10">
                      <span className="material-symbols-outlined text-3xl text-[#174b2a] mb-1">travel_explore</span>
                      <p className="text-[13px] font-bold text-[#141e16]">
                        Pencarian "{searchQuery}" belum cocok langsung
                      </p>
                      <p className="text-[11px] text-[#717971] mt-0.5">
                        Menampilkan destinasi rekomendasi di {selectedRegion === 'Semua' ? 'Kalimantan' : selectedRegion}:
                      </p>
                      <button
                        onClick={() => { setSearchQuery(''); }}
                        className="mt-2 px-3 py-1 bg-[#174b2a] text-white text-[11px] font-bold rounded-lg cursor-pointer"
                      >
                        Bersihkan Kata Kunci
                      </button>
                    </div>

                    {/* Never leave empty: Show recommendations for the active region or province */}
                    {(selectedRegion === 'Semua' ? destinations : destinations.filter(d => d.region === selectedRegion)).slice(0, 4).map(item => {
                      const isFav = favorites.includes(item.id);
                      return (
                        <div key={item.id} className="bg-white rounded-2xl p-3 border border-[#003317]/10 card-elevation-1 transition-all">
                          <div
                            onClick={() => openDestinationModal(item)}
                            className="relative h-44 rounded-xl overflow-hidden mb-3 cursor-pointer group"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80';
                              }}
                            />
                            <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                              <span className="bg-[#f1fdef]/90 backdrop-blur-md text-[#003317] text-[11px] font-bold px-2 py-0.5 rounded-full border border-[#003317]/10">
                                {item.provinceName}
                              </span>
                              <span className="bg-[#174b2a] text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">
                                {item.verified}
                              </span>
                            </div>
                            <div className="absolute bottom-2.5 right-2.5 bg-black/65 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center space-x-1 shadow">
                              <span className="material-symbols-outlined text-[13px]">photo_library</span>
                              <span>{item.gallery ? item.gallery.length : 1} Foto</span>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(item.id);
                              }}
                              className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center shadow-sm active:scale-90 transition-all cursor-pointer"
                            >
                              <span className={`material-symbols-outlined text-[18px] ${isFav ? 'fill-icon text-[#ba1a1a]' : 'text-[#717971]'}`}>favorite</span>
                            </button>
                          </div>

                          <div className="flex justify-between items-start">
                            <div>
                              <h4
                                onClick={() => openDestinationModal(item)}
                                className="text-[16px] font-bold text-[#141e16] leading-snug cursor-pointer hover:text-[#174b2a]"
                              >
                                {item.title}
                              </h4>
                              <p className="text-[12px] text-[#717971] flex items-center mt-0.5">
                                <span className="material-symbols-outlined text-[15px] text-[#795838] mr-1">location_on</span>
                                {item.provinceName}
                              </p>
                            </div>
                            <span className="text-[11px] font-bold bg-[#e5f1e4] px-2 py-1 rounded-lg text-[#003317] whitespace-nowrap ml-2">
                              {item.price}
                            </span>
                          </div>

                          <p className="text-[12px] text-[#414941] line-clamp-2 mt-1.5">{item.summary}</p>

                          {/* Specialties / Sajian Khas Preview */}
                          {item.specialties && item.specialties.length > 0 && (
                            <div className="mt-2.5 pt-2 border-t border-[#e5f1e4] space-y-1">
                              <span className="text-[10px] font-bold text-[#174b2a] uppercase tracking-wider block">
                                {item.category === 'Kuliner' ? 'Pilihan Sajian Khas Daerah:' : 'Pesona Ciri Khas:'}
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {item.specialties.slice(0, 3).map((spec, sIdx) => (
                                  <span key={sIdx} className="text-[10px] bg-[#ebf7ea] text-[#003317] px-2 py-0.5 rounded-md font-semibold border border-[#003317]/10 truncate max-w-[170px]">
                                    {spec.name}
                                  </span>
                                ))}
                                {item.specialties.length > 3 && (
                                  <span className="text-[10px] bg-[#e0ebde] text-[#795838] px-1.5 py-0.5 rounded-md font-bold">
                                    +{item.specialties.length - 3} lagi
                                  </span>
                                )}
                              </div>
                            </div>
                          )}

                          <div className="mt-3 pt-2.5 border-t border-[#e5f1e4] flex items-center justify-between">
                            <div className="flex items-center space-x-1 text-[11px] text-[#795838]">
                              <span className="material-symbols-outlined text-[16px]">schedule</span>
                              <span>{item.openHours}</span>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => addToItinerary(item.id)}
                                className="px-2.5 py-1.5 rounded-lg bg-[#e5f1e4] text-[#003317] text-[11px] font-bold hover:bg-[#e0ebde] transition-all cursor-pointer active:scale-95"
                              >
                                + Itinerary
                              </button>
                              <button
                                onClick={() => openDestinationModal(item)}
                                className="px-3.5 py-1.5 rounded-lg bg-[#174b2a] text-white text-[11px] font-bold hover:opacity-95 transition-all cursor-pointer active:scale-95 flex items-center space-x-1"
                              >
                                <span>Lihat Detail</span>
                                <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  filteredDestinations.map(item => {
                    const isFav = favorites.includes(item.id);
                    return (
                      <div key={item.id} className="bg-white rounded-2xl p-3 border border-[#003317]/10 card-elevation-1 transition-all">
                        <div
                          onClick={() => openDestinationModal(item)}
                          className="relative h-44 rounded-xl overflow-hidden mb-3 cursor-pointer group"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80';
                            }}
                          />
                          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                            <span className="bg-[#f1fdef]/90 backdrop-blur-md text-[#003317] text-[11px] font-bold px-2 py-0.5 rounded-full border border-[#003317]/10">
                              {item.provinceName}
                            </span>
                            <span className="bg-[#174b2a] text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">
                              {item.verified}
                            </span>
                          </div>
                          <div className="absolute bottom-2.5 right-2.5 bg-black/65 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center space-x-1 shadow">
                            <span className="material-symbols-outlined text-[13px]">photo_library</span>
                            <span>{item.gallery ? item.gallery.length : 1} Foto</span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(item.id);
                            }}
                            className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center shadow-sm active:scale-90 transition-all cursor-pointer"
                          >
                            <span className={`material-symbols-outlined text-[18px] ${isFav ? 'fill-icon text-[#ba1a1a]' : 'text-[#717971]'}`}>favorite</span>
                          </button>
                        </div>

                        <div className="flex justify-between items-start">
                          <div>
                            <h4
                              onClick={() => openDestinationModal(item)}
                              className="text-[16px] font-bold text-[#141e16] leading-snug cursor-pointer hover:text-[#174b2a]"
                            >
                              {item.title}
                            </h4>
                            <p className="text-[12px] text-[#717971] flex items-center mt-0.5">
                              <span className="material-symbols-outlined text-[15px] text-[#795838] mr-1">location_on</span>
                              {item.provinceName}
                            </p>
                          </div>
                          <span className="text-[11px] font-bold bg-[#e5f1e4] px-2 py-1 rounded-lg text-[#003317] whitespace-nowrap ml-2">
                            {item.price}
                          </span>
                        </div>

                        <p className="text-[12px] text-[#414941] line-clamp-2 mt-1.5">{item.summary}</p>

                        {/* Specialties / Sajian Khas Preview */}
                        {item.specialties && item.specialties.length > 0 && (
                          <div className="mt-2.5 pt-2 border-t border-[#e5f1e4] space-y-1">
                            <span className="text-[10px] font-bold text-[#174b2a] uppercase tracking-wider block">
                              {item.category === 'Kuliner' ? 'Pilihan Sajian Khas Daerah:' : 'Pesona Ciri Khas:'}
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {item.specialties.slice(0, 3).map((spec, sIdx) => (
                                <span key={sIdx} className="text-[10px] bg-[#ebf7ea] text-[#003317] px-2 py-0.5 rounded-md font-semibold border border-[#003317]/10 truncate max-w-[170px]">
                                  {spec.name}
                                </span>
                              ))}
                              {item.specialties.length > 3 && (
                                <span className="text-[10px] bg-[#e0ebde] text-[#795838] px-1.5 py-0.5 rounded-md font-bold">
                                  +{item.specialties.length - 3} lagi
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        <div className="mt-3 pt-2.5 border-t border-[#e5f1e4] flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-[11px] text-[#795838]">
                            <span className="material-symbols-outlined text-[16px]">schedule</span>
                            <span>{item.openHours}</span>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => addToItinerary(item.id)}
                              className="px-2.5 py-1.5 rounded-lg bg-[#e5f1e4] text-[#003317] text-[11px] font-bold hover:bg-[#e0ebde] transition-all cursor-pointer active:scale-95"
                            >
                              + Itinerary
                            </button>
                            <button
                              onClick={() => openDestinationModal(item)}
                              className="px-3.5 py-1.5 rounded-lg bg-[#174b2a] text-white text-[11px] font-bold hover:opacity-95 transition-all cursor-pointer active:scale-95 flex items-center space-x-1"
                            >
                              <span>Lihat Detail</span>
                              <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* TAB 3: PETA DIGITAL & RUTE ITINERARY                  */}
          {/* ==================================================== */}
          {activeTab === 'peta' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="relative rounded-2xl overflow-hidden p-3.5 bg-gradient-to-r from-[#174b2a] to-[#254d32] text-white shadow-sm border border-[#003317]/10">
                <div 
                  className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-overlay"
                  style={{ backgroundImage: "url('/assets/aistudio/Dayak_cc0a579c.jpeg')" }}
                />
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-[#b1f2b4] font-bold uppercase tracking-wider block">Geospasial Heart of Borneo</span>
                    <h2 className="text-[20px] font-extrabold text-white leading-tight">Peta &amp; Rencana Rute</h2>
                    <p className="text-[11px] text-[#dae6d9] mt-0.5">Navigasi 5 provinsi, jalur klotok sungai, dan pos cagar alam</p>
                  </div>
                  <button
                    onClick={() => { setItinerary([]); showToast("Rute kunjungan telah direset."); }}
                    className="text-[11px] bg-white/15 hover:bg-white/25 text-white px-2 py-1 rounded-lg border border-white/20 transition-all font-semibold flex items-center cursor-pointer shrink-0 ml-2"
                  >
                    <span className="material-symbols-outlined text-[15px] mr-0.5">refresh</span> Reset
                  </button>
                </div>
              </div>

              {/* Map Layer & Display Controls */}
              <div className="flex items-center justify-between gap-2 bg-[#e5f1e4] p-1.5 rounded-xl text-[11px]">
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setMapLayer('topography')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      mapLayer === 'topography'
                        ? 'bg-[#174b2a] text-white shadow-sm'
                        : 'text-[#414941] hover:text-[#003317]'
                    }`}
                  >
                    Topografi Rimba
                  </button>
                  <button
                    onClick={() => setMapLayer('regions')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      mapLayer === 'regions'
                        ? 'bg-[#174b2a] text-white shadow-sm'
                        : 'text-[#414941] hover:text-[#003317]'
                    }`}
                  >
                    Batas Provinsi
                  </button>
                </div>

                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setShowRouteTrail(!showRouteTrail)}
                    className={`px-2 py-1 rounded-lg font-semibold flex items-center space-x-1 cursor-pointer ${
                      showRouteTrail ? 'bg-[#ffdcbf] text-[#2d1600]' : 'text-[#717971] bg-white/60'
                    }`}
                    title="Tampilkan Jalur Rute"
                  >
                    <span className="material-symbols-outlined text-[14px]">polyline</span>
                    <span>Jalur</span>
                  </button>
                </div>
              </div>

              {/* Interactive Visual Map Canvas with Real Kalimantan Map Image */}
              <div className="relative w-full h-84 bg-[#dae6d9] rounded-2xl overflow-hidden border border-[#003317]/15 shadow-md flex flex-col justify-between">
                
                {/* Map Viewport Area with Transform/Zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="relative w-full h-full transition-transform duration-300 origin-center"
                    style={{ transform: `scale(${mapZoom})` }}
                  >
                    {/* Actual Kalimantan / Borneo Map Image */}
                    {mapLayer === 'topography' ? (
                      <div className="absolute inset-0 bg-[#c5dec3]">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/2/28/Borneo_Topography.png"
                          alt="Peta Topografi Pulau Kalimantan (Borneo)"
                          className="w-full h-full object-contain filter contrast-105 opacity-90 select-none pointer-events-none"
                        />
                        {/* Subtle atmospheric vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003317]/20 via-transparent to-[#003317]/10 pointer-events-none"></div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-[#ebf7ea]">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Kalimantan_regions_map.svg"
                          alt="Peta Wilayah Provinsi Kalimantan"
                          className="w-full h-full object-contain filter saturate-110 opacity-95 select-none pointer-events-none"
                        />
                      </div>
                    )}

                    {/* Regional Labels Overlay */}
                    <div className="absolute inset-0 pointer-events-none">
                      <span className="absolute top-[38%] left-[16%] text-[9px] font-extrabold tracking-wider text-[#003317]/70 bg-white/70 px-1 rounded shadow-xs">
                        KALBAR
                      </span>
                      <span className="absolute top-[58%] left-[34%] text-[9px] font-extrabold tracking-wider text-[#003317]/70 bg-white/70 px-1 rounded shadow-xs">
                        KALTENG
                      </span>
                      <span className="absolute top-[42%] left-[64%] text-[9px] font-extrabold tracking-wider text-[#003317]/70 bg-white/70 px-1 rounded shadow-xs">
                        KALTIM
                      </span>
                      <span className="absolute top-[68%] left-[60%] text-[9px] font-extrabold tracking-wider text-[#003317]/70 bg-white/70 px-1 rounded shadow-xs">
                        KALSEL
                      </span>
                      <span className="absolute top-[20%] left-[68%] text-[9px] font-extrabold tracking-wider text-[#003317]/70 bg-white/70 px-1 rounded shadow-xs">
                        KALTARA
                      </span>
                    </div>

                    {/* Animated SVG Route Trail between Itinerary Items */}
                    {showRouteTrail && itinerary.length > 1 && (
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-15">
                        <polyline
                          points={itinerary
                            .map(item => {
                              const dest = destinations.find(d => d.id === item.id);
                              return dest ? `${dest.coordinates.x},${dest.coordinates.y}` : '';
                            })
                            .filter(Boolean)
                            .join(' ')}
                          fill="none"
                          stroke="#174b2a"
                          strokeWidth="1.2"
                          strokeDasharray="2 1.5"
                          className="opacity-80"
                        />
                      </svg>
                    )}

                    {/* Interactive Map Pin Markers */}
                    <div className="absolute inset-0 z-20">
                      {destinations.map(dest => {
                        const isSelected = selectedMapPinId === dest.id;
                        const inItinerary = itinerary.some(item => item.id === dest.id);
                        return (
                          <button
                            key={dest.id}
                            onClick={() => setSelectedMapPinId(dest.id)}
                            style={{ top: `${dest.coordinates.y}%`, left: `${dest.coordinates.x}%` }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center focus:outline-none cursor-pointer z-20"
                            title={`${dest.title} (${dest.provinceName})`}
                          >
                            <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center shadow-md transition-all duration-200 ${
                              isSelected
                                ? 'scale-125 ring-4 ring-[#b1f2b4] ring-offset-1 bg-[#003317]'
                                : inItinerary
                                ? 'bg-[#174b2a] ring-2 ring-emerald-300'
                                : dest.category === 'Konservasi'
                                ? 'bg-[#003317]'
                                : dest.category === 'Budaya'
                                ? 'bg-[#795838]'
                                : dest.category === 'Kuliner'
                                ? 'bg-[#b45309]'
                                : 'bg-[#0284c7]'
                            }`}>
                              <span className="material-symbols-outlined text-[16px]">
                                {dest.category === 'Konservasi'
                                  ? 'pets'
                                  : dest.category === 'Budaya'
                                  ? 'temple_buddhist'
                                  : dest.category === 'Kuliner'
                                  ? 'restaurant'
                                  : 'park'}
                              </span>
                            </div>

                            {/* Label Tag */}
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md shadow mt-1 whitespace-nowrap transition-all ${
                              isSelected
                                ? 'bg-[#003317] text-white scale-105'
                                : 'bg-white/95 text-[#141e16] border border-black/10'
                            }`}>
                              {dest.title.length > 18 ? dest.title.substring(0, 16) + '...' : dest.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Map HUD Header Overlay */}
                <div className="relative z-30 p-2.5 flex justify-between items-center pointer-events-none">
                  <div className="bg-[#f1fdef]/90 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-sm border border-[#003317]/15 flex items-center space-x-1.5 pointer-events-auto">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
                    <span className="text-[10px] font-bold text-[#003317]">
                      {mapLayer === 'topography' ? 'Citra Topografi Rimba' : 'Peta Wilayah Provinsi'}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1 pointer-events-auto">
                    {/* Zoom In/Out Controls */}
                    <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-sm border border-[#003317]/10 flex flex-col">
                      <button
                        onClick={() => setMapZoom(prev => Math.min(prev + 0.25, 2.0))}
                        className="w-7 h-7 flex items-center justify-center text-[#003317] hover:bg-[#e5f1e4] font-bold text-[14px] cursor-pointer"
                        title="Perbesar Peta"
                      >
                        +
                      </button>
                      <button
                        onClick={() => setMapZoom(prev => Math.max(prev - 0.25, 0.85))}
                        className="w-7 h-7 flex items-center justify-center text-[#003317] hover:bg-[#e5f1e4] font-bold text-[14px] border-t border-[#003317]/10 cursor-pointer"
                        title="Perkecil Peta"
                      >
                        -
                      </button>
                    </div>
                    {/* Compass Rose */}
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-sm text-[#795838] font-bold text-[11px] border border-[#003317]/10" title="Arah Utara">
                      U
                    </div>
                  </div>
                </div>

                {/* Bottom Selected Pin Tooltip Drawer */}
                <div className="relative z-30 p-2.5 pointer-events-auto">
                  <div className="bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-[#003317]/15 flex items-center justify-between shadow-lg">
                    <div className="flex items-center space-x-2 truncate pr-2">
                      <div className="w-8 h-8 rounded-lg bg-[#e5f1e4] flex items-center justify-center text-[#003317] flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          {selectedMapDest.category === 'Konservasi' ? 'pets' : selectedMapDest.category === 'Budaya' ? 'temple_buddhist' : 'park'}
                        </span>
                      </div>
                      <div className="truncate">
                        <p className="text-[12px] font-bold text-[#141e16] truncate">{selectedMapDest.title}</p>
                        <p className="text-[11px] text-[#717971] truncate">{selectedMapDest.provinceName} • <span className="text-[#003317] font-semibold">{selectedMapDest.price}</span></p>
                      </div>
                    </div>
                    <div className="flex space-x-1 flex-shrink-0">
                      <button
                        onClick={() => openDestinationModal(selectedMapDest)}
                        className="px-2 py-1.5 bg-[#e5f1e4] text-[#003317] rounded-lg text-[11px] font-bold hover:bg-[#e0ebde] cursor-pointer"
                      >
                        Detail
                      </button>
                      <button
                        onClick={() => addToItinerary(selectedMapDest.id)}
                        className="px-2 py-1.5 bg-[#174b2a] text-white rounded-lg text-[11px] font-bold active:scale-95 transition-all whitespace-nowrap cursor-pointer"
                      >
                        + Rute
                      </button>
                      <button
                        onClick={() => {
                          setPromoShareMode('destinasi');
                          const elem = document.getElementById('hub-promosi-sosmed');
                          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                          showToast(`Destinasi '${selectedMapDest.title}' dimuat ke Hub Promosi!`);
                        }}
                        className="px-2 py-1.5 bg-[#ffdcbf] text-[#795838] hover:bg-[#ffd0a8] rounded-lg text-[11px] font-bold active:scale-95 transition-all flex items-center space-x-1 cursor-pointer"
                        title="Promosikan ke Media Sosial"
                      >
                        <span className="material-symbols-outlined text-[14px]">share</span>
                        <span>Promosi</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Legend & Spatial Guide */}
              <div className="bg-white p-3 rounded-xl border border-[#003317]/10 shadow-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#003317] uppercase tracking-wider">Legenda Peta Borneo</span>
                  <span className="text-[10px] text-[#717971]">{destinations.length} Titik Terverifikasi (Lengkap 5 Provinsi)</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#414941]">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#003317] flex-shrink-0"></span>
                    <span>Konservasi Satwa (Orangutan)</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#795838] flex-shrink-0"></span>
                    <span>Budaya Dayak &amp; Adat</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#0284c7] flex-shrink-0"></span>
                    <span>Bahari / Geopark Alam</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#b45309] flex-shrink-0"></span>
                    <span>Sentra Kuliner Lokal</span>
                  </div>
                </div>
              </div>

              {/* Itinerary Planning Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-[16px] font-bold text-[#003317] flex items-center gap-1.5">
                    <span>Daftar Rencana Kunjungan</span>
                    <span className="bg-[#e0ebde] text-[#003317] px-2 py-0.5 rounded-full text-[11px]">
                      {itinerary.length} Item
                    </span>
                  </h4>
                  <span className="text-[11px] text-[#414941]">Jejak Karbon Rendah</span>
                </div>

                <div className="space-y-2">
                  {itinerary.length === 0 ? (
                    <div className="text-center py-6 bg-white rounded-xl border border-[#003317]/10 p-4">
                      <span className="material-symbols-outlined text-3xl text-[#717971] mb-1">route</span>
                      <p className="text-[13px] font-bold text-[#141e16]">Belum ada destinasi dalam rute</p>
                      <p className="text-[11px] text-[#717971] mt-0.5">Pilih marker di peta atas atau tombol '+ Itinerary' pada tab Destinasi.</p>
                    </div>
                  ) : (
                    itinerary.map((item, idx) => (
                      <div
                        key={`${item.id}-${idx}`}
                        className={`p-3 rounded-xl border border-[#003317]/10 flex items-center justify-between transition-all ${
                          item.completed ? 'line-through text-[#717971] bg-[#e0ebde]' : 'bg-white text-[#141e16]'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 flex-1 min-w-0 pr-2">
                          <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => toggleItineraryComplete(idx)}
                            className="w-4 h-4 rounded text-[#003317] focus:ring-[#003317] cursor-pointer"
                          />
                          <div className="truncate">
                            <span className="text-[11px] font-bold text-[#795838] font-mono mr-1">#{idx + 1}</span>
                            <span className="text-[13px] font-bold leading-tight">{item.name}</span>
                            <p className="text-[11px] text-[#717971] truncate">{item.province}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1 flex-shrink-0">
                          <button
                            onClick={() => moveItinerary(idx, 'up')}
                            disabled={idx === 0}
                            className={`p-1 text-[#414941] hover:text-[#003317] active:scale-90 cursor-pointer ${idx === 0 ? 'opacity-30' : ''}`}
                            title="Naikkan Urutan"
                          >
                            <span className="material-symbols-outlined text-[18px]">keyboard_arrow_up</span>
                          </button>
                          <button
                            onClick={() => moveItinerary(idx, 'down')}
                            disabled={idx === itinerary.length - 1}
                            className={`p-1 text-[#414941] hover:text-[#003317] active:scale-90 cursor-pointer ${idx === itinerary.length - 1 ? 'opacity-30' : ''}`}
                            title="Turunkan Urutan"
                          >
                            <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                          </button>
                          <button
                            onClick={() => removeItinerary(idx)}
                            className="p-1 text-[#717971] hover:text-[#ba1a1a] active:scale-90 cursor-pointer"
                            title="Hapus"
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Sustainable Route Notes */}
                <div className="p-3.5 bg-[#e5f1e4] rounded-xl border border-[#003317]/10 space-y-1.5">
                  <div className="flex items-center space-x-2 text-[#003317] font-bold text-[12px]">
                    <span className="material-symbols-outlined text-[18px]">tips_and_updates</span>
                    <span>Protokol Jalur Sungai &amp; Rimba</span>
                  </div>
                  <p className="text-[11px] text-[#414941] leading-relaxed">
                    Gunakan kapal klotok tradisional bermesin 4-tak ramah emisi untuk navigasi muara sungai Sekonyer guna meminimalisir gelombang ke sarang bekantan tepi sungai.
                  </p>
                </div>
              </div>

              {/* ==================================================== */}
              {/* HUB PROMOSI SOSMED BORNEO (TERHUBUNG KE IG, WA, YT, X, FB) */}
              {/* ==================================================== */}
              <div id="hub-promosi-sosmed" className="space-y-3 pt-2">
                
                {/* Header Card with Dayak Background Motif */}
                <div className="relative rounded-2xl overflow-hidden p-3.5 bg-gradient-to-r from-[#174b2a] via-[#1f5832] to-[#795838] text-white shadow-md border border-[#003317]/15">
                  <div 
                    className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: "url('/assets/aistudio/Dayak_cc0a579c.jpeg')" }}
                  />
                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-1.5 mb-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        <span className="text-[10px] text-[#b1f2b4] font-bold uppercase tracking-wider">
                          Hub Promosi Terhubung • 5 Provinsi
                        </span>
                      </div>
                      <h3 className="text-[18px] font-extrabold text-white leading-tight">
                        Sebar Pesona Borneo ke Dunia
                      </h3>
                      <p className="text-[11px] text-[#dae6d9] mt-0.5 leading-snug">
                        Bagikan titik peta, rute ekowisata, dan seruan pelestarian ke WhatsApp, Instagram, YouTube, X, Facebook &amp; TikTok.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-white border border-white/20 shrink-0 ml-2">
                      <span className="material-symbols-outlined text-[22px]">share</span>
                    </div>
                  </div>
                </div>

                {/* Segment Filter: Pilihan Konten Promosi */}
                <div className="bg-white p-1 rounded-xl border border-[#003317]/10 flex shadow-xs">
                  <button
                    onClick={() => {
                      setPromoShareMode('destinasi');
                      showToast(`Memuat '${selectedMapDest.title}' ke draf promosi.`);
                    }}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center space-x-1 cursor-pointer ${
                      promoShareMode === 'destinasi'
                        ? 'bg-[#174b2a] text-white shadow-xs'
                        : 'text-[#414941] hover:text-[#003317]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">pin_drop</span>
                    <span className="truncate">Titik Peta</span>
                  </button>

                  <button
                    onClick={() => {
                      setPromoShareMode('rute');
                      showToast(`Memuat Rute (${itinerary.length} Destinasi) ke draf promosi.`);
                    }}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center space-x-1 cursor-pointer ${
                      promoShareMode === 'rute'
                        ? 'bg-[#174b2a] text-white shadow-xs'
                        : 'text-[#414941] hover:text-[#003317]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">route</span>
                    <span className="truncate">Rute Saya ({itinerary.length})</span>
                  </button>

                  <button
                    onClick={() => {
                      setPromoShareMode('kampanye');
                      showToast("Memuat Gerakan Konservasi Rimba & Budaya Dayak.");
                    }}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center space-x-1 cursor-pointer ${
                      promoShareMode === 'kampanye'
                        ? 'bg-[#174b2a] text-white shadow-xs'
                        : 'text-[#414941] hover:text-[#003317]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">volunteer_activism</span>
                    <span className="truncate">Kampanye</span>
                  </button>
                </div>

                {/* Dynamic Content Preview Card */}
                <div className="bg-white p-3.5 rounded-2xl border border-[#003317]/10 shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <span className="material-symbols-outlined text-[#174b2a] text-[17px]">preview</span>
                      <span className="text-[12px] font-bold text-[#003317]">
                        {promoShareMode === 'destinasi'
                          ? `Preview: ${selectedMapDest.title}`
                          : promoShareMode === 'rute'
                          ? `Preview: Rute (${itinerary.length} Destinasi)`
                          : 'Preview: Kampanye Lestari Heart of Borneo'}
                      </span>
                    </div>
                    <span className="text-[10px] bg-[#ebf7ea] text-[#174b2a] font-bold px-2 py-0.5 rounded-md border border-[#003317]/10">
                      Format Otomatis
                    </span>
                  </div>

                  {/* Preformatted Text Box */}
                  <div className="relative bg-[#f8faf8] p-3 rounded-xl border border-[#003317]/10 max-h-36 overflow-y-auto text-[11px] font-mono text-[#141e16] leading-relaxed whitespace-pre-wrap select-text">
                    {currentPromoText}
                  </div>

                  {/* Action Copy & Native Share Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <button
                      onClick={() => handleCopyPromo(currentPromoText, "Teks Lengkap Promosi")}
                      className="py-2 px-3 bg-[#e0ebde] hover:bg-[#d2e3d0] text-[#003317] rounded-xl text-[11px] font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer border border-[#003317]/10"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {copiedShareType === "Teks Lengkap Promosi" ? 'check_circle' : 'content_copy'}
                      </span>
                      <span>{copiedShareType === "Teks Lengkap Promosi" ? 'Tersalin!' : 'Salin Semua Teks'}</span>
                    </button>

                    <button
                      onClick={handleNativeShare}
                      className="py-2 px-3 bg-[#174b2a] hover:bg-[#123d21] text-white rounded-xl text-[11px] font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[16px]">ios_share</span>
                      <span>Bagikan via HP</span>
                    </button>
                  </div>
                </div>

                {/* 6 Direct Social Media Connectors */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between px-0.5">
                    <h4 className="text-[13px] font-bold text-[#003317] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[17px] text-[#795838]">cell_tower</span>
                      <span>Koneksi Langsung Media Sosial</span>
                    </h4>
                    <span className="text-[10px] text-[#717971]">1-Klik Langsung Terbuka</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    
                    {/* 1. WHATSAPP */}
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentPromoText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        showToast("Membuka WhatsApp untuk membagikan info wisata...");
                      }}
                      className="p-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-2xl shadow-sm hover:opacity-95 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.127-.525-1.554-.647-2.549-2.228-2.627-2.333-.078-.105-.632-.843-.632-1.608 0-.765.399-1.142.543-1.298.144-.156.314-.195.42-.195.105 0 .21.002.302.007.098.005.228-.037.357.273.131.312.449 1.096.488 1.176.039.08.066.173.013.279-.053.106-.079.172-.157.264-.078.093-.165.207-.235.278-.078.079-.16.165-.069.321.091.156.406.669.871 1.083.599.534 1.104.7 1.26.779.157.078.249.069.342-.039.092-.107.394-.46.5-.618.105-.157.21-.131.352-.078.144.053.91.429 1.067.507.157.078.262.117.301.183.039.066.039.381-.105.786z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-[12px] font-bold block leading-tight">WhatsApp</span>
                          <span className="text-[10px] text-emerald-100">Kirim Chat &amp; Status</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[18px] opacity-80 group-hover:translate-x-0.5 transition-transform">open_in_new</span>
                    </a>

                    {/* 2. INSTAGRAM */}
                    <div
                      onClick={() => {
                        handleCopyPromo(currentPromoText, "Caption & Tagar Instagram");
                        showToast("✓ Caption & Tagar disalin! Membuka Instagram...");
                        setTimeout(() => {
                          window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
                        }, 500);
                      }}
                      className="p-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-2xl shadow-sm hover:opacity-95 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-[12px] font-bold block leading-tight">Instagram</span>
                          <span className="text-[10px] text-pink-100">Salin Caption &amp; Buka IG</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[18px] opacity-80 group-hover:translate-x-0.5 transition-transform">content_paste_go</span>
                    </div>

                    {/* 3. YOUTUBE */}
                    <a
                      href={`https://www.youtube.com/results?search_query=${encodeURIComponent('ekowisata ' + (promoShareMode === 'destinasi' ? selectedMapDest.title : 'kalimantan dayak cagar alam'))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        showToast(`Membuka video wisata ${selectedMapDest.title} di YouTube...`);
                      }}
                      className="p-3 bg-gradient-to-r from-[#FF0000] to-[#b30000] text-white rounded-2xl shadow-sm hover:opacity-95 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-[12px] font-bold block leading-tight">YouTube</span>
                          <span className="text-[10px] text-red-100">Video Dokumenter &amp; Shorts</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[18px] opacity-80 group-hover:translate-x-0.5 transition-transform">smart_display</span>
                    </a>

                    {/* 4. X (TWITTER) */}
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        currentPromoText.length > 240 ? currentPromoText.slice(0, 230) + '...' : currentPromoText
                      )}&hashtags=PesonaKalimantan,HeartOfBorneo,EkowisataDayak`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        showToast("Membuka X (Twitter) untuk tweet promosi...");
                      }}
                      className="p-3 bg-gradient-to-r from-[#14171A] to-[#000000] text-white rounded-2xl shadow-sm hover:opacity-95 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-[12px] font-bold block leading-tight">X (Twitter)</span>
                          <span className="text-[10px] text-slate-300">Tweet Viral Tagar</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[18px] opacity-80 group-hover:translate-x-0.5 transition-transform">send</span>
                    </a>

                    {/* 5. FACEBOOK */}
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin || 'https://ecoborneo.id')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        handleCopyPromo(currentPromoText, "Teks Facebook");
                        showToast("✓ Teks promosi disalin! Membuka Facebook...");
                      }}
                      className="p-3 bg-gradient-to-r from-[#1877F2] to-[#0f54af] text-white rounded-2xl shadow-sm hover:opacity-95 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-[12px] font-bold block leading-tight">Facebook</span>
                          <span className="text-[10px] text-blue-100">Bagikan ke Beranda &amp; Grup</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[18px] opacity-80 group-hover:translate-x-0.5 transition-transform">share</span>
                    </a>

                    {/* 6. TELEGRAM & TIKTOK */}
                    <a
                      href={`https://t.me/share/url?url=${encodeURIComponent(window.location.origin || 'https://ecoborneo.id')}&text=${encodeURIComponent(currentPromoText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        showToast("Membuka Telegram untuk membagikan ke Channel/Grup...");
                      }}
                      className="p-3 bg-gradient-to-r from-[#229ED9] to-[#1778a5] text-white rounded-2xl shadow-sm hover:opacity-95 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.196 1.006.128.832.942z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-[12px] font-bold block leading-tight">Telegram</span>
                          <span className="text-[10px] text-sky-100">Kirim ke Komunitas Rimba</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[18px] opacity-80 group-hover:translate-x-0.5 transition-transform">send</span>
                    </a>

                  </div>
                </div>

                {/* Kurasi Video YouTube Ekowisata & Budaya Dayak */}
                <div className="bg-white p-3.5 rounded-2xl border border-[#003317]/10 shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-[#003317]">
                      <span className="material-symbols-outlined text-red-600 text-[18px]">play_circle</span>
                      <h4 className="text-[13px] font-bold">Rekomendasi Video YouTube Ekowisata Borneo</h4>
                    </div>
                    <span className="text-[10px] text-[#717971]">Edukasi &amp; Wisata</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        title: "Ekspedisi Klotok & Suaka Orangutan Camp Leakey (Kalteng)",
                        channel: "Konservasi Rimba Borneo",
                        tag: "Konservasi",
                        query: "tanjung puting camp leakey orangutan klotok documentary"
                      },
                      {
                        title: "Sensasi Bamboo Rafting & Upacara Aruh Ganal Dayak Meratus (Kalsel)",
                        channel: "Pesona Budaya Dayak",
                        tag: "Budaya & Petualangan",
                        query: "loksado bamboo rafting suku dayak meratus kalimantan selatan"
                      },
                      {
                        title: "Danau Purba Kakaban & Berenang Bersama Pari Manta Derawan (Kaltim)",
                        channel: "Bahari Nusantara",
                        tag: "Bahari & Bawah Laut",
                        query: "danau kakaban derawan ubur ubur tanpa sengat manta ray"
                      },
                      {
                        title: "Misteri Lahan Basah Danau Sentarum & Kearifan Dayak Iban (Kalbar)",
                        channel: "Cagar Biosfer Borneo",
                        tag: "Cagar Biosfer",
                        query: "danau sentarum kalimantan barat madu hutan tenun dayak iban"
                      }
                    ].map((vid, vIdx) => (
                      <a
                        key={vIdx}
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(vid.query)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#ebf7ea] hover:bg-[#dff0dd] transition-all flex items-center justify-between border border-[#003317]/10 group"
                      >
                        <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                          <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                          </div>
                          <div className="truncate">
                            <p className="text-[11px] font-bold text-[#141e16] truncate group-hover:text-[#003317]">
                              {vid.title}
                            </p>
                            <p className="text-[10px] text-[#717971]">
                              {vid.channel} • <span className="text-[#174b2a] font-semibold">{vid.tag}</span>
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] bg-white text-[#003317] font-bold px-2 py-1 rounded-md border border-[#003317]/10 shrink-0 flex items-center gap-0.5">
                          Tonton <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bank Tagar Populer (Trending Hashtag Cloud) */}
                <div className="bg-white p-3.5 rounded-2xl border border-[#003317]/10 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-[#003317]">
                      <span className="material-symbols-outlined text-[#795838] text-[17px]">tag</span>
                      <h4 className="text-[12px] font-bold">Bank Tagar Populer (Klik untuk Menyalin)</h4>
                    </div>
                    <button
                      onClick={() => {
                        const allTags = "#PesonaKalimantan #HeartOfBorneo #EkowisataDayak #VisitKalimantan2026 #SaveBorneoForest #KonservasiOrangutan #RumahBetang #WonderfulIndonesia #MeratusGeopark #TanjungPuting";
                        handleCopyPromo(allTags, "Semua Tagar Populer");
                      }}
                      className="text-[10px] font-bold text-[#174b2a] hover:underline cursor-pointer"
                    >
                      Salin Semua
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "#PesonaKalimantan",
                      "#HeartOfBorneo",
                      "#EkowisataDayak",
                      "#VisitKalimantan2026",
                      "#SaveBorneoForest",
                      "#KonservasiOrangutan",
                      "#RumahBetang",
                      "#WonderfulIndonesia",
                      "#MeratusGeopark",
                      "#DanauKakaban",
                      "#KlotokSekonyer"
                    ].map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleCopyPromo(tag, `Tagar ${tag}`)}
                        className="text-[10px] font-mono font-medium px-2 py-1 rounded-lg bg-[#ebf7ea] text-[#003317] hover:bg-[#b1f2b4] transition-all cursor-pointer border border-[#003317]/10 active:scale-95"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* TAB: BASIS DATA & REGISTRASI EKOWISATAWAN BORNEO    */}
          {/* ==================================================== */}
          {activeTab === 'registrasi' && (
            <div className="space-y-4 animate-fadeIn">
              
              {/* Header Banner with Dayak Watermark */}
              <div className="relative rounded-2xl overflow-hidden p-4 bg-gradient-to-r from-[#174b2a] via-[#1b5530] to-[#254d32] text-white shadow-md border border-[#003317]/10">
                <div 
                  className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none mix-blend-overlay"
                  style={{ backgroundImage: "url('/assets/aistudio/Dayak_cc0a579c.jpeg')" }}
                />
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#b1f2b4] font-bold uppercase tracking-wider block">
                      Sistem Data Terintegrasi 5 Provinsi
                    </span>
                    <span className="bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Sistem Terhubung</span>
                    </span>
                  </div>

                  <h2 className="text-[20px] font-extrabold text-white leading-tight">
                    Basis Data &amp; Registrasi Ekowisatawan
                  </h2>
                  <p className="text-[11px] text-[#dae6d9] leading-relaxed">
                    Pengelolaan resmi data izin masuk kawasan konservasi rimba (SIMAKSI), paspor digital, dan profil ekowisatawan Heart of Borneo.
                  </p>

                  {/* 3 Metric Badges */}
                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/15 text-center">
                    <div className="bg-white/10 rounded-xl p-1.5">
                      <p className="text-[14px] font-extrabold text-[#b1f2b4]">{registeredTravelers.length}</p>
                      <p className="text-[9px] text-[#dae6d9]">Total Terdaftar</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-1.5">
                      <p className="text-[14px] font-extrabold text-white">
                        {registeredTravelers.filter(t => t.statusVerifikasi === 'Terverifikasi').length}
                      </p>
                      <p className="text-[9px] text-[#dae6d9]">Terverifikasi</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-1.5">
                      <p className="text-[14px] font-extrabold text-[#ffdcbf]">5 Wilayah</p>
                      <p className="text-[9px] text-[#dae6d9]">Se-Kalimantan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-Segment Switcher */}
              <div className="flex space-x-1 bg-[#e5f1e4] p-1 rounded-xl">
                <button
                  onClick={() => setRegistrasiSubSection('basis_data')}
                  className={`flex-1 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                    registrasiSubSection === 'basis_data'
                      ? 'bg-white text-[#003317] shadow-sm'
                      : 'text-[#414941] hover:text-[#003317]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px]">database</span>
                  <span>Basis Data ({registeredTravelers.length})</span>
                </button>
                <button
                  onClick={() => setRegistrasiSubSection('daftar_baru')}
                  className={`flex-1 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                    registrasiSubSection === 'daftar_baru'
                      ? 'bg-white text-[#003317] shadow-sm'
                      : 'text-[#414941] hover:text-[#003317]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px]">person_add</span>
                  <span>Daftar Baru</span>
                </button>
                <button
                  onClick={() => setRegistrasiSubSection('paspor_saya')}
                  className={`flex-1 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                    registrasiSubSection === 'paspor_saya'
                      ? 'bg-white text-[#003317] shadow-sm'
                      : 'text-[#414941] hover:text-[#003317]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px]">badge</span>
                  <span>Paspor Digital</span>
                </button>
              </div>

              {/* ---------------------------------------------------- */}
              {/* SUBSECTION A: BASIS DATA PENGUNJUNG (TABEL & FILTER) */}
              {/* ---------------------------------------------------- */}
              {registrasiSubSection === 'basis_data' && (
                <div className="space-y-3">
                  
                  {/* Search and Action Toolbar */}
                  <div className="bg-white p-3 rounded-2xl border border-[#003317]/10 card-elevation-1 space-y-2.5">
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#717971] text-[18px]">search</span>
                      <input
                        type="text"
                        value={searchTravelerQuery}
                        onChange={(e) => setSearchTravelerQuery(e.target.value)}
                        placeholder="Cari Nama, NIK, ID, atau Kota Asal..."
                        className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[12px] text-[#141e16] placeholder:text-[#717971] outline-none"
                      />
                      {searchTravelerQuery && (
                        <button
                          onClick={() => setSearchTravelerQuery('')}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#717971] hover:text-[#141e16] cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[16px]">close</span>
                        </button>
                      )}
                    </div>

                    {/* Filter Province & Status Chips */}
                    <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar pb-0.5">
                      <span className="text-[10px] font-bold text-[#795838] shrink-0 mr-1">Provinsi:</span>
                      {['Semua', 'Kalbar', 'Kalteng', 'Kalsel', 'Kaltim', 'Kaltara'].map(prov => (
                        <button
                          key={prov}
                          onClick={() => setFilterProvinceTraveler(prov)}
                          className={`px-2 py-0.5 rounded-lg text-[10px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                            filterProvinceTraveler === prov
                              ? 'bg-[#174b2a] text-white shadow-2xs'
                              : 'bg-[#e5f1e4] text-[#414941] hover:bg-[#d8e6d7]'
                          }`}
                        >
                          {prov}
                        </button>
                      ))}
                    </div>

                    {/* Export and Register Action Buttons */}
                    <div className="pt-1 flex items-center justify-between gap-1.5 border-t border-[#003317]/10">
                      <div className="flex space-x-1">
                        <button
                          onClick={exportToCSV}
                          className="px-2.5 py-1.5 rounded-xl bg-[#174b2a] text-white text-[10px] font-bold flex items-center space-x-1 shadow-xs hover:bg-[#123d21] transition-all cursor-pointer"
                          title="Unduh seluruh data registrasi dalam format spreadsheet CSV"
                        >
                          <span className="material-symbols-outlined text-[14px]">table_view</span>
                          <span>Unduh CSV</span>
                        </button>
                        <button
                          onClick={exportToJSON}
                          className="px-2 py-1.5 rounded-xl bg-[#e0ebde] text-[#003317] text-[10px] font-bold flex items-center space-x-1 hover:bg-[#d0dfcd] transition-all cursor-pointer"
                          title="Ekspor seluruh data registrasi dalam format JSON"
                        >
                          <span className="material-symbols-outlined text-[14px]">data_object</span>
                          <span>JSON</span>
                        </button>
                      </div>

                      <button
                        onClick={() => setRegistrasiSubSection('daftar_baru')}
                        className="px-2.5 py-1.5 rounded-xl bg-[#795838] text-white text-[10px] font-bold flex items-center space-x-1 shadow-xs hover:bg-[#60442b] transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[14px]">add</span>
                        <span>Daftar Baru</span>
                      </button>
                    </div>
                  </div>

                  {/* Traveler Records Feed / Table */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] px-1 text-[#414941]">
                      <span className="font-bold text-[#003317]">
                        Menampilkan {filteredRegisteredTravelers.length} dari {registeredTravelers.length} Data Wisatawan
                      </span>
                      <span>Format SIMAKSI Adat</span>
                    </div>

                    {filteredRegisteredTravelers.length === 0 ? (
                      <div className="text-center py-8 bg-white rounded-2xl border border-[#003317]/10 p-4 space-y-2">
                        <span className="material-symbols-outlined text-4xl text-[#717971]">manage_search</span>
                        <p className="text-[13px] font-bold text-[#141e16]">Tidak ada data wisatawan yang cocok</p>
                        <p className="text-[11px] text-[#717971]">Coba ubah kata kunci pencarian atau filter provinsi.</p>
                        <button
                          onClick={() => { setSearchTravelerQuery(''); setFilterProvinceTraveler('Semua'); }}
                          className="px-3 py-1 bg-[#174b2a] text-white text-[11px] font-bold rounded-lg cursor-pointer"
                        >
                          Reset Pencarian
                        </button>
                      </div>
                    ) : (
                      filteredRegisteredTravelers.map((traveler) => (
                        <div
                          key={traveler.id}
                          className="bg-white rounded-2xl p-3.5 border border-[#003317]/10 card-elevation-1 space-y-2.5 hover:border-[#174b2a] transition-all"
                        >
                          {/* Card Header */}
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-10 h-10 rounded-xl bg-[#174b2a] text-[#b1f2b4] flex items-center justify-center font-extrabold text-[13px] border border-[#b1f2b4]/30 shadow-xs">
                                {traveler.namaLengkap.split(' ').map(n => n[0]).slice(0, 2).join('')}
                              </div>
                              <div>
                                <h4 className="text-[14px] font-bold text-[#141e16] flex items-center gap-1">
                                  <span>{traveler.namaLengkap}</span>
                                  {traveler.statusVerifikasi === 'Terverifikasi' && (
                                    <span className="material-symbols-outlined text-[16px] text-[#003317] fill-icon">verified</span>
                                  )}
                                </h4>
                                <p className="text-[10px] text-[#717971] font-mono">
                                  ID: {traveler.id} • NIK: {traveler.nik}
                                </p>
                              </div>
                            </div>
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                              traveler.statusVerifikasi === 'Terverifikasi'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                : 'bg-amber-50 text-amber-800 border-amber-300'
                            }`}>
                              {traveler.statusVerifikasi}
                            </span>
                          </div>

                          {/* Data Details Grid */}
                          <div className="grid grid-cols-2 gap-2 bg-[#ebf7ea] p-2 rounded-xl text-[10px]">
                            <div>
                              <span className="text-[#717971] block">Domisili Asal:</span>
                              <span className="font-semibold text-[#141e16]">{traveler.asalKota}, {traveler.provinsiAsal}</span>
                            </div>
                            <div>
                              <span className="text-[#717971] block">Kategori Wisatawan:</span>
                              <span className="font-semibold text-[#141e16] truncate block">{traveler.tipeWisatawan}</span>
                            </div>
                            <div>
                              <span className="text-[#717971] block">No. Kontak / WA:</span>
                              <span className="font-mono text-[#141e16]">{traveler.telepon}</span>
                            </div>
                            <div>
                              <span className="text-[#717971] block">Tanggal Registrasi:</span>
                              <span className="text-[#141e16]">{traveler.tanggalDaftar}</span>
                            </div>
                            <div className="col-span-2 pt-1 border-t border-[#003317]/10 flex items-center justify-between">
                              <span className="text-[#717971]">Provinsi Tujuan:</span>
                              <span className="font-semibold text-[#003317]">{traveler.provinsiTujuan.join(', ')}</span>
                            </div>
                          </div>

                          {/* Action Strip */}
                          <div className="flex items-center justify-between pt-1 border-t border-[#003317]/5 text-[11px]">
                            <div className="flex space-x-1.5">
                              <button
                                onClick={() => {
                                  setRegistrationData(traveler);
                                  setIsPassportCardModalOpen(true);
                                }}
                                className="px-2.5 py-1 bg-[#174b2a] text-white rounded-lg text-[10px] font-bold hover:bg-[#123d21] flex items-center space-x-1 cursor-pointer transition-all"
                              >
                                <span className="material-symbols-outlined text-[13px]">badge</span>
                                <span>Lihat Paspor</span>
                              </button>
                              <button
                                onClick={() => {
                                  showToast(`Mencetak Dokumen SIMAKSI resmi untuk ${traveler.namaLengkap}...`);
                                }}
                                className="px-2 py-1 bg-[#e5f1e4] text-[#003317] rounded-lg text-[10px] font-bold hover:bg-[#d8e6d7] flex items-center space-x-1 cursor-pointer transition-all"
                              >
                                <span className="material-symbols-outlined text-[13px]">print</span>
                                <span>SIMAKSI</span>
                              </button>
                            </div>

                            <button
                              onClick={() => handleDeleteTraveler(traveler.id, traveler.namaLengkap)}
                              className="text-[#717971] hover:text-[#ba1a1a] p-1 cursor-pointer transition-all"
                              title="Hapus Data Pengunjung"
                            >
                              <span className="material-symbols-outlined text-[16px]">delete</span>
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* ---------------------------------------------------- */}
              {/* SUBSECTION B: FORMULIR PENDAFTARAN BARU LANGSUNG     */}
              {/* ---------------------------------------------------- */}
              {registrasiSubSection === 'daftar_baru' && (
                <div className="bg-white p-4 rounded-2xl border border-[#003317]/10 card-elevation-1 space-y-3.5">
                  <div className="flex items-center justify-between border-b border-[#003317]/10 pb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-[#174b2a] text-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">person_add</span>
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-[#003317]">Formulir Pendaftaran Wisatawan Baru</h4>
                        <p className="text-[10px] text-[#717971]">Data langsung tersimpan ke basis data resmi</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-[#ebf7ea] text-[#174b2a] font-bold px-2 py-0.5 rounded">
                      +50 Poin
                    </span>
                  </div>

                  <form onSubmit={handleRegisterNewFromTab} className="space-y-3 text-[12px]">
                    <div>
                      <label className="text-[11px] font-semibold text-[#141e16] block mb-1">
                        Nama Lengkap (Sesuai KTP / Paspor) *
                      </label>
                      <input
                        type="text"
                        required
                        value={newRegNama}
                        onChange={(e) => setNewRegNama(e.target.value)}
                        placeholder="Contoh: Muhammad Ilham Pratama"
                        className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[11px] font-semibold text-[#141e16] block mb-1">NIK (16 Digit) *</label>
                        <input
                          type="text"
                          required
                          value={newRegNik}
                          onChange={(e) => setNewRegNik(e.target.value)}
                          placeholder="6471xxxxxxxxxxxx"
                          className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] font-mono outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-[#141e16] block mb-1">No. WhatsApp / HP *</label>
                        <input
                          type="tel"
                          required
                          value={newRegTelp}
                          onChange={(e) => setNewRegTelp(e.target.value)}
                          placeholder="0812-xxxx-xxxx"
                          className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#141e16] block mb-1">Alamat Email</label>
                      <input
                        type="email"
                        value={newRegEmail}
                        onChange={(e) => setNewRegEmail(e.target.value)}
                        placeholder="email@ekowisata.id"
                        className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[11px] font-semibold text-[#141e16] block mb-1">Kota / Kabupaten Asal *</label>
                        <input
                          type="text"
                          required
                          value={newRegKota}
                          onChange={(e) => setNewRegKota(e.target.value)}
                          placeholder="Samarinda / Pontianak"
                          className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-[#141e16] block mb-1">Provinsi Asal</label>
                        <select
                          value={newRegProv}
                          onChange={(e) => setNewRegProv(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] text-[#141e16] outline-none text-[11px]"
                        >
                          <option value="Kalimantan Timur">Kalimantan Timur</option>
                          <option value="Kalimantan Barat">Kalimantan Barat</option>
                          <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                          <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                          <option value="Kalimantan Utara">Kalimantan Utara</option>
                          <option value="DKI Jakarta">DKI Jakarta</option>
                          <option value="Jawa Barat">Jawa Barat</option>
                          <option value="Jawa Timur">Jawa Timur</option>
                          <option value="Lainnya">Lainnya / Mancanegara</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#141e16] block mb-1">Kategori Ekowisatawan</label>
                      <select
                        value={newRegTipe}
                        onChange={(e) => setNewRegTipe(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] text-[#141e16] outline-none text-[11px]"
                      >
                        <option value="Ekowisatawan Mandiri / Peneliti Konservasi">Ekowisatawan Mandiri / Peneliti Konservasi</option>
                        <option value="Wisatawan Nusantara / Keluarga Lestari">Wisatawan Nusantara / Keluarga Lestari</option>
                        <option value="Pelajar / Mahasiswa Riset Keanekaragaman">Pelajar / Mahasiswa Riset Keanekaragaman</option>
                        <option value="Relawan Reboisasi & Adat Dayak">Relawan Reboisasi &amp; Adat Dayak</option>
                      </select>
                    </div>

                    {/* Pilihan Provinsi Tujuan */}
                    <div>
                      <label className="text-[11px] font-semibold text-[#141e16] block mb-1">Provinsi Tujuan Eksplorasi:</label>
                      <div className="grid grid-cols-2 gap-1.5 bg-[#ebf7ea] p-2 rounded-xl text-[11px]">
                        {["Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara"].map(p => {
                          const isSel = newRegTujuan.includes(p);
                          return (
                            <label key={p} className="flex items-center space-x-1.5 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={isSel}
                                onChange={() => {
                                  if (isSel) {
                                    setNewRegTujuan(newRegTujuan.filter(x => x !== p));
                                  } else {
                                    setNewRegTujuan([...newRegTujuan, p]);
                                  }
                                }}
                                className="w-3.5 h-3.5 text-[#174b2a] rounded accent-[#174b2a]"
                              />
                              <span className={isSel ? 'font-bold text-[#003317]' : 'text-[#414941]'}>{p}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Kontak Darurat Rimba */}
                    <div className="bg-[#ebf7ea] p-2.5 rounded-xl space-y-2">
                      <span className="text-[10px] font-bold text-[#795838] uppercase tracking-wider block">
                        Kontak Darurat di Rimba (Emergency)
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={newRegKontakNama}
                          onChange={(e) => setNewRegKontakNama(e.target.value)}
                          placeholder="Nama Keluarga"
                          className="px-2.5 py-1.5 rounded-lg bg-white border border-[#c1c9bf] text-[11px] outline-none"
                        />
                        <input
                          type="tel"
                          value={newRegKontakTelp}
                          onChange={(e) => setNewRegKontakTelp(e.target.value)}
                          placeholder="No. HP Darurat"
                          className="px-2.5 py-1.5 rounded-lg bg-white border border-[#c1c9bf] text-[11px] outline-none"
                        />
                      </div>
                    </div>

                    {/* 4 Ikrar Hijau */}
                    <div className="space-y-1.5 bg-[#f1fdef] p-2.5 rounded-xl border border-[#003317]/10 text-[11px]">
                      <span className="text-[10px] font-bold text-[#003317] uppercase tracking-wider block">
                        Ikrar Ekowisatawan Lestari Dayak &amp; Rimba
                      </span>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={newRegIkrarPlastik}
                          onChange={(e) => setNewRegIkrarPlastik(e.target.checked)}
                          className="w-3.5 h-3.5 text-[#174b2a] rounded accent-[#174b2a]"
                        />
                        <span>Komitmen nol sampah plastik sekali pakai di cagar alam</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={newRegIkrarAdat}
                          onChange={(e) => setNewRegIkrarAdat(e.target.checked)}
                          className="w-3.5 h-3.5 text-[#174b2a] rounded accent-[#174b2a]"
                        />
                        <span>Menghormati hukum adat, tetua, dan etika Rumah Betang Dayak</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#174b2a] text-white rounded-xl font-bold flex items-center justify-center space-x-1.5 hover:bg-[#123d21] shadow-md transition-all cursor-pointer active:scale-98"
                    >
                      <span className="material-symbols-outlined text-[16px]">save</span>
                      <span>Daftarkan ke Basis Data Resmi (+50 Poin)</span>
                    </button>
                  </form>
                </div>
              )}

              {/* ---------------------------------------------------- */}
              {/* SUBSECTION C: PASPOR DIGITAL & SIMAKSI SAYA          */}
              {/* ---------------------------------------------------- */}
              {registrasiSubSection === 'paspor_saya' && (
                <div className="space-y-3.5">
                  {/* Digital Member Card Showcase */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#b1f2b4]/40 bg-gradient-to-br from-[#0c2e17] via-[#144724] to-[#1c3a25] text-white p-4">
                    <div 
                      className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none mix-blend-overlay"
                      style={{ backgroundImage: "url('/assets/aistudio/Dayak_cc0a579c.jpeg')" }}
                    />
                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
                        <div className="flex items-center space-x-2">
                          <div className="w-7 h-7 rounded-lg bg-[#b1f2b4] text-[#003317] flex items-center justify-center font-bold text-[13px]">
                            EB
                          </div>
                          <div>
                            <span className="text-[12px] font-extrabold tracking-wider uppercase block text-[#b1f2b4] leading-tight">
                              PASPOR DIGITAL EKOWISATAWAN
                            </span>
                            <span className="text-[9px] text-[#dae6d9] tracking-normal block">
                              Konsorsium Konservasi &amp; Lembaga Adat Dayak Kalimantan
                            </span>
                          </div>
                        </div>
                        <span className="bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>{registrationData.statusVerifikasi}</span>
                        </span>
                      </div>

                      <div className="flex items-start justify-between pt-1">
                        <div className="space-y-1">
                          <p className="text-[10px] text-[#b1f2b4] uppercase tracking-wider font-semibold">Nama Terdaftar:</p>
                          <h4 className="text-[18px] font-extrabold text-white leading-tight">
                            {registrationData.namaLengkap}
                          </h4>
                          <p className="text-[11px] text-[#dae6d9] font-mono">
                            NIK: {registrationData.nik}
                          </p>
                          <p className="text-[11px] text-[#dae6d9]">
                            {registrationData.asalKota}, {registrationData.provinsiAsal}
                          </p>
                          <div className="pt-1">
                            <span className="text-[10px] bg-white/15 px-2 py-0.5 rounded text-[#ffdcbf] font-medium border border-white/10">
                              {registrationData.tipeWisatawan}
                            </span>
                          </div>
                        </div>

                        <div className="bg-white p-2 rounded-xl shadow-md flex flex-col items-center shrink-0">
                          <div className="w-16 h-16 bg-[#003317] rounded-lg p-1 flex items-center justify-center">
                            <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4-2h2v2h-2v-2zm4-4h2v2h-2V8zm-2 4h2v2h-2v-2zm-2-2h2v2h-2v-2zm4 4h2v2h-2v-2zm2-2h2v2h-2v-2zm-6 6h2v2h-2v-2zm4 0h2v2h-2v-2z" />
                            </svg>
                          </div>
                          <span className="text-[8px] font-mono text-[#003317] font-bold mt-1">SCAN-BORNEO</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[10px] text-[#dae6d9]">
                        <div>
                          <span className="text-[#b1f2b4] font-semibold">No. Paspor: </span>
                          <span className="font-mono text-white font-bold">{registrationData.nomorKartuDigital}</span>
                        </div>
                        <div>
                          <span className="text-[#b1f2b4] font-semibold">Terdaftar: </span>
                          <span>{registrationData.tanggalDaftar}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleDownloadPassport}
                      className="py-2.5 px-3 bg-[#174b2a] text-white rounded-xl text-[11px] font-bold flex items-center justify-center space-x-1 shadow-sm hover:bg-[#123d21] cursor-pointer transition-all"
                    >
                      <span className="material-symbols-outlined text-[15px]">download</span>
                      <span>Unduh Kartu Paspor</span>
                    </button>
                    <button
                      onClick={() => {
                        showToast(`Mencetak dokumen resmi izin SIMAKSI untuk ${registrationData.namaLengkap}...`);
                      }}
                      className="py-2.5 px-3 bg-[#795838] text-white rounded-xl text-[11px] font-bold flex items-center justify-center space-x-1 shadow-sm hover:bg-[#60442b] cursor-pointer transition-all"
                    >
                      <span className="material-symbols-outlined text-[15px]">print</span>
                      <span>Cetak SIMAKSI</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ==================================================== */}
          {/* TAB 4: PEMINDAI QR ECOTOURISM KIT                    */}
          {/* ==================================================== */}
          {activeTab === 'kit_qr' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="relative rounded-2xl overflow-hidden p-3.5 bg-gradient-to-r from-[#174b2a] to-[#254d32] text-white shadow-sm border border-[#003317]/10">
                <div 
                  className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-overlay"
                  style={{ backgroundImage: "url('/assets/aistudio/Dayak_cc0a579c.jpeg')" }}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#b1f2b4] font-bold uppercase tracking-wider block">Verifikasi Sensor Lapangan</span>
                    <h2 className="text-[20px] font-extrabold text-white leading-tight">Pemindai EcoTourism Kit</h2>
                    <p className="text-[11px] text-[#dae6d9] mt-0.5">Arahkan kamera ke QR Culture Card, Tourism Card, atau bibit pohon ulin</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-[#b1f2b4] border border-white/20 shrink-0">
                    <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
                  </div>
                </div>
              </div>

              {/* Scanner Viewfinder Box */}
              <div className="relative bg-[#29332a] rounded-3xl overflow-hidden p-6 aspect-square max-w-sm mx-auto flex flex-col items-center justify-center text-white border-4 border-[#e5f1e4]">
                <div className="relative w-56 h-56 border-2 border-dashed border-[#b1f2b4] rounded-2xl flex items-center justify-center p-4">
                  {/* Corner Brackets */}
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-[#b1f2b4]"></div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-[#b1f2b4]"></div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-[#b1f2b4]"></div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-[#b1f2b4]"></div>

                  {/* Scanning Laser Animation Line */}
                  <div className={`absolute w-full h-1 bg-gradient-to-r from-transparent via-[#b1f2b4] to-transparent top-4 ${cameraActive ? 'animate-bounce' : 'animate-pulse'}`}></div>

                  <div className="text-center p-2">
                    {cameraActive ? (
                      <div>
                        <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full mx-auto mb-1 animate-ping"></div>
                        <p className="text-[11px] font-bold text-[#b1f2b4]">Kamera Aktif: Mendeteksi Kit...</p>
                      </div>
                    ) : (
                      <div>
                        <span className="material-symbols-outlined text-4xl text-[#c1c9bf] mb-1">photo_camera</span>
                        <p className="text-[11px] text-[#dae6d9]">Kamera Siaga (Mode Ramah Field-Ready)</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Camera Controls */}
                <div className="mt-4 flex items-center space-x-3">
                  <button
                    onClick={() => {
                      setCameraActive(!cameraActive);
                      if (!cameraActive) {
                        showToast("Sensor visual aktif. Siap membaca QR Kit.");
                        setTimeout(() => handleScanPreset('KODE-DAYAK-01'), 2500);
                      }
                    }}
                    className="bg-[#174b2a] text-white px-4 py-2 rounded-xl text-[12px] font-bold flex items-center space-x-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">videocam</span>
                    <span>{cameraActive ? 'Matikan Kamera' : 'Nyalakan Kamera Demo'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setTorchActive(!torchActive);
                      showToast(torchActive ? "Lampu sorot dimatikan." : "Lampu sorot (torch) menyala.");
                    }}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center active:scale-90 transition-all cursor-pointer ${
                      torchActive ? 'bg-[#b1f2b4] text-[#003311]' : 'bg-white/20 text-white'
                    }`}
                    title="Lampu Sorot"
                  >
                    <span className="material-symbols-outlined text-[20px]">flashlight_on</span>
                  </button>
                </div>
              </div>

              {/* Manual Code Input Fallback */}
              <form onSubmit={handleManualCodeSubmit} className="bg-white p-3.5 rounded-2xl border border-[#003317]/10 card-elevation-1 space-y-2">
                <label className="text-[12px] font-bold text-[#141e16] block">Atau Masukkan Kode Kartu Manual:</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={manualCode}
                    onChange={(e) => setManualCode(e.target.value)}
                    placeholder="Contoh: KODE-DAYAK-01"
                    className="flex-1 px-3 py-2 text-[12px] rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] uppercase font-mono outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#003317] text-white px-4 py-2 rounded-xl text-[12px] font-bold active:scale-95 transition-all cursor-pointer"
                  >
                    Buka
                  </button>
                </div>
              </form>

              {/* Physical Kit Presets for Instant Testing */}
              <div className="space-y-2.5">
                <h4 className="text-[16px] font-bold text-[#003317]">Uji Cepat Kartu Kit Fisik (Preset)</h4>
                <p className="text-[12px] text-[#414941]">Sentuh salah satu kartu sampel di bawah untuk mensimulasikan hasil pemindaian langsung:</p>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => handleScanPreset('KODE-DAYAK-01')}
                    className="text-left p-3 rounded-xl bg-white border border-[#003317]/10 hover:border-[#003317]/40 active:scale-95 transition-all card-elevation-1 cursor-pointer"
                  >
                    <span className="inline-block px-2 py-0.5 bg-[#ffd2aa] text-[#795839] text-[10px] font-bold rounded mb-1.5">Culture Card</span>
                    <p className="text-[12px] font-bold text-[#141e16] line-clamp-1">Rumah Radakng / Betang</p>
                    <p className="text-[11px] text-[#717971] font-mono mt-0.5">KODE-DAYAK-01</p>
                  </button>

                  <button
                    onClick={() => handleScanPreset('KODE-ORANGUTAN-02')}
                    className="text-left p-3 rounded-xl bg-white border border-[#003317]/10 hover:border-[#003317]/40 active:scale-95 transition-all card-elevation-1 cursor-pointer"
                  >
                    <span className="inline-block px-2 py-0.5 bg-[#e5f1e4] text-[#003317] text-[10px] font-bold rounded mb-1.5">Tourism Card</span>
                    <p className="text-[12px] font-bold text-[#141e16] line-clamp-1">Etika Satwa Liar TN</p>
                    <p className="text-[11px] text-[#717971] font-mono mt-0.5">KODE-ORANGUTAN-02</p>
                  </button>

                  <button
                    onClick={() => handleScanPreset('KODE-PUZZLE-03')}
                    className="text-left p-3 rounded-xl bg-white border border-[#003317]/10 hover:border-[#003317]/40 active:scale-95 transition-all card-elevation-1 cursor-pointer"
                  >
                    <span className="inline-block px-2 py-0.5 bg-[#b1f2b4] text-[#003311] text-[10px] font-bold rounded mb-1.5">Puzzle Budaya</span>
                    <p className="text-[12px] font-bold text-[#141e16] line-clamp-1">Motif Ukir Mandau Kenyah</p>
                    <p className="text-[11px] text-[#717971] font-mono mt-0.5">KODE-PUZZLE-03</p>
                  </button>

                  <button
                    onClick={() => handleScanPreset('KODE-SEEDPAPER-04')}
                    className="text-left p-3 rounded-xl bg-white border border-[#003317]/10 hover:border-[#003317]/40 active:scale-95 transition-all card-elevation-1 cursor-pointer"
                  >
                    <span className="inline-block px-2 py-0.5 bg-[#174b2a] text-white text-[10px] font-bold rounded mb-1.5">Seed Paper</span>
                    <p className="text-[12px] font-bold text-[#141e16] line-clamp-1">Bibit Pohon Endemik Ulin</p>
                    <p className="text-[11px] text-[#717971] font-mono mt-0.5">KODE-SEEDPAPER-04</p>
                  </button>

                  <button
                    onClick={() => handleScanPreset('KODE-TENUN-05')}
                    className="text-left p-3 rounded-xl bg-white border border-[#003317]/10 hover:border-[#003317]/40 active:scale-95 transition-all card-elevation-1 cursor-pointer col-span-2"
                  >
                    <span className="inline-block px-2 py-0.5 bg-[#795838] text-white text-[10px] font-bold rounded mb-1.5">UMKM Adat</span>
                    <p className="text-[12px] font-bold text-[#141e16] line-clamp-1">Tenun Ikat Dayak Ensaid Panjang (Kalbar)</p>
                    <p className="text-[11px] text-[#717971] font-mono mt-0.5">KODE-TENUN-05</p>
                  </button>
                </div>
              </div>

              {/* Scan History */}
              <div className="bg-[#ebf7ea] p-3.5 rounded-2xl border border-[#003317]/5 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-bold text-[#003317]">Riwayat Pemindaian Terakhir</span>
                  <button onClick={() => { setScanHistory([]); showToast("Riwayat dibersihkan."); }} className="text-[11px] text-[#717971] hover:text-[#ba1a1a] cursor-pointer">
                    Bersihkan
                  </button>
                </div>
                <div className="space-y-1.5">
                  {scanHistory.length === 0 ? (
                    <div className="text-[12px] text-[#717971] italic">Belum ada kartu yang dipindai hari ini.</div>
                  ) : (
                    scanHistory.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-1 border-b border-[#003317]/5 text-[12px]">
                        <span className="font-semibold text-[#141e16] truncate">{item.title}</span>
                        <span className="text-[11px] text-[#717971] flex-shrink-0 ml-2">{item.time}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* TAB 5: AKUN, PUSAT EDUKASI, UMKM & ADMIN             */}
          {/* ==================================================== */}
          {activeTab === 'akun' && (
            <div className="space-y-4 animate-fadeIn">
              {/* Profile Header with Dayak Talawang Watermark */}
              <div className="relative overflow-hidden bg-white p-4 rounded-2xl border border-[#003317]/10 card-elevation-1 flex items-center space-x-3.5">
                <div 
                  className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-cover bg-right pointer-events-none mix-blend-multiply"
                  style={{ backgroundImage: "url('/assets/aistudio/Dayak_cc0a579c.jpeg')" }}
                />
                
                <div className="w-14 h-14 rounded-2xl bg-[#174b2a] text-[#b1f2b4] flex items-center justify-center font-extrabold text-[18px] shadow-sm shrink-0 border border-[#b1f2b4]/30 relative z-10">
                  MS
                </div>
                <div className="flex-1 relative z-10">
                  <div className="flex items-center space-x-1.5">
                    <h3 className="text-[17px] font-bold text-[#141e16]">{registrationData.namaLengkap}</h3>
                    <span className="material-symbols-outlined text-[18px] text-[#003317] fill-icon">verified</span>
                  </div>
                  <p className="text-[11px] text-[#717971]">ID: {registrationData.id} • {registrationData.asalKota}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-[10px] bg-[#e5f1e4] px-2 py-0.5 rounded text-[#003317] font-semibold">{registrationData.statusVerifikasi}</span>
                    <span className="text-[10px] text-[#795838] font-bold">{ecoPoints} XP Lestari</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsPassportCardModalOpen(true)}
                  className="px-2.5 py-1.5 bg-[#e5f1e4] hover:bg-[#d8e6d7] text-[#003317] rounded-xl text-[11px] font-bold shrink-0 transition-all cursor-pointer relative z-10 flex items-center space-x-1"
                  title="Lihat Kartu Paspor Digital"
                >
                  <span className="material-symbols-outlined text-[16px]">badge</span>
                  <span>Paspor</span>
                </button>
              </div>

              {/* Sub-Tabs Selector */}
              <div className="flex space-x-1 bg-[#e5f1e4] p-1 rounded-xl overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setTab5Section('registrasi')}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1 ${
                    tab5Section === 'registrasi' ? 'bg-white text-[#003317] shadow-sm' : 'text-[#414941] hover:text-[#003317]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">how_to_reg</span>
                  <span>Registrasi</span>
                </button>
                <button
                  onClick={() => setTab5Section('umkm')}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1 ${
                    tab5Section === 'umkm' ? 'bg-white text-[#003317] shadow-sm' : 'text-[#414941] hover:text-[#003317]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">storefront</span>
                  <span>UMKM Adat</span>
                </button>
                <button
                  onClick={() => setTab5Section('checklist')}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1 ${
                    tab5Section === 'checklist' ? 'bg-white text-[#003317] shadow-sm' : 'text-[#414941] hover:text-[#003317]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">checklist</span>
                  <span>Checklist</span>
                </button>
                <button
                  onClick={() => setTab5Section('quiz')}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1 ${
                    tab5Section === 'quiz' ? 'bg-white text-[#003317] shadow-sm' : 'text-[#414941] hover:text-[#003317]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">quiz</span>
                  <span>Kuis Rimba</span>
                </button>
                <button
                  onClick={() => setTab5Section('laporan')}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1 ${
                    tab5Section === 'laporan' ? 'bg-white text-[#003317] shadow-sm' : 'text-[#414941] hover:text-[#003317]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">report</span>
                  <span>Laporan</span>
                </button>
              </div>

              {/* SUBSECTION 0: DATA REGISTRASI & PASPOR DIGITAL */}
              {tab5Section === 'registrasi' && (
                <div className="space-y-3.5">
                  {/* Digital Pass Member Card Showcase */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#b1f2b4]/40 bg-gradient-to-br from-[#0c2e17] via-[#144724] to-[#1c3a25] text-white p-4">
                    {/* Background Dayak Watermark Motif */}
                    <div 
                      className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none mix-blend-overlay"
                      style={{ backgroundImage: "url('/assets/aistudio/Dayak_cc0a579c.jpeg')" }}
                    />

                    <div className="relative z-10 space-y-3">
                      {/* Top Pass Brand */}
                      <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
                        <div className="flex items-center space-x-2">
                          <div className="w-7 h-7 rounded-lg bg-[#b1f2b4] text-[#003317] flex items-center justify-center font-bold text-[13px]">
                            EB
                          </div>
                          <div>
                            <span className="text-[12px] font-extrabold tracking-wider uppercase block text-[#b1f2b4] leading-tight">
                              PASPOR DIGITAL EKOWISATAWAN
                            </span>
                            <span className="text-[9px] text-[#dae6d9] tracking-normal block">
                              Konsorsium Konservasi &amp; Lembaga Adat Dayak Kalimantan
                            </span>
                          </div>
                        </div>
                        <span className="bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>{registrationData.statusVerifikasi}</span>
                        </span>
                      </div>

                      {/* Card Identity Middle */}
                      <div className="flex items-start justify-between pt-1">
                        <div className="space-y-1">
                          <p className="text-[10px] text-[#b1f2b4] uppercase tracking-wider font-semibold">Nama Terdaftar:</p>
                          <h4 className="text-[18px] font-extrabold text-white leading-tight">
                            {registrationData.namaLengkap}
                          </h4>
                          <p className="text-[11px] text-[#dae6d9] font-mono">
                            NIK: {registrationData.nik}
                          </p>
                          <p className="text-[11px] text-[#dae6d9]">
                            {registrationData.asalKota}, {registrationData.provinsiAsal}
                          </p>
                          <div className="pt-1">
                            <span className="text-[10px] bg-white/15 px-2 py-0.5 rounded text-[#ffdcbf] font-medium border border-white/10">
                              {registrationData.tipeWisatawan}
                            </span>
                          </div>
                        </div>

                        {/* Simulated QR Pass */}
                        <div className="bg-white p-2 rounded-xl shadow-md flex flex-col items-center shrink-0">
                          <div className="w-16 h-16 bg-[#003317] rounded-lg p-1 flex items-center justify-center">
                            {/* SVG Mini QR */}
                            <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4-2h2v2h-2v-2zm4-4h2v2h-2V8zm-2 4h2v2h-2v-2zm-2-2h2v2h-2v-2zm4 4h2v2h-2v-2zm2-2h2v2h-2v-2zm-6 6h2v2h-2v-2zm4 0h2v2h-2v-2z" />
                            </svg>
                          </div>
                          <span className="text-[8px] font-mono text-[#003317] font-bold mt-1">SCAN-BORNEO</span>
                        </div>
                      </div>

                      {/* Bottom Credentials Strip */}
                      <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[10px] text-[#dae6d9]">
                        <div>
                          <span className="text-[#b1f2b4] font-semibold">No. Paspor: </span>
                          <span className="font-mono text-white font-bold">{registrationData.nomorKartuDigital}</span>
                        </div>
                        <div>
                          <span className="text-[#b1f2b4] font-semibold">Terdaftar: </span>
                          <span>{registrationData.tanggalDaftar}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pass Quick Action Buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={handleOpenRegisterModal}
                      className="py-2 px-2 rounded-xl bg-white border border-[#003317]/15 text-[#003317] text-[11px] font-bold shadow-xs hover:bg-[#ebf7ea] transition-all flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[15px]">edit_note</span>
                      <span>Edit Data</span>
                    </button>
                    <button
                      onClick={() => setIsPassportCardModalOpen(true)}
                      className="py-2 px-2 rounded-xl bg-[#174b2a] text-white text-[11px] font-bold shadow-xs hover:bg-[#123d21] transition-all flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[15px]">fullscreen</span>
                      <span>Kartu Penuh</span>
                    </button>
                    <button
                      onClick={handleDownloadPassport}
                      className="py-2 px-2 rounded-xl bg-[#795838] text-white text-[11px] font-bold shadow-xs hover:bg-[#60442b] transition-all flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[15px]">download</span>
                      <span>Unduh Kartu</span>
                    </button>
                  </div>

                  {/* TABEL DATA REGISTRASI LENGKAP */}
                  <div className="bg-white rounded-2xl border border-[#003317]/10 p-3.5 card-elevation-1 space-y-3">
                    <div className="flex items-center justify-between border-b border-[#003317]/10 pb-2">
                      <div className="flex items-center space-x-2">
                        <span className="material-symbols-outlined text-[#174b2a] text-[18px]">badge</span>
                        <h5 className="text-[13px] font-bold text-[#003317]">Data Resmi Ekowisatawan Terdaftar</h5>
                      </div>
                      <span className="text-[10px] bg-[#ebf7ea] text-[#174b2a] font-bold px-2 py-0.5 rounded">
                        Tersinkronisasi
                      </span>
                    </div>

                    {/* Section 1: Identitas Diri */}
                    <div className="space-y-1.5 text-[11px]">
                      <span className="text-[10px] font-bold text-[#795838] uppercase tracking-wider block">
                        1. Informasi Identitas Pribadi
                      </span>
                      <div className="grid grid-cols-2 gap-2 bg-[#ebf7ea] p-2.5 rounded-xl">
                        <div>
                          <p className="text-[10px] text-[#717971]">Nama Lengkap:</p>
                          <p className="font-bold text-[#141e16]">{registrationData.namaLengkap}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-[#717971]">NIK / ID Paspor:</p>
                          <p className="font-mono font-bold text-[#141e16]">{registrationData.nik}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-[#717971]">Email:</p>
                          <p className="font-semibold text-[#141e16] truncate">{registrationData.email}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-[#717971]">No. WhatsApp / HP:</p>
                          <p className="font-semibold text-[#141e16]">{registrationData.telepon}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-[#717971]">Kota Asal:</p>
                          <p className="font-semibold text-[#141e16]">{registrationData.asalKota}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-[#717971]">Provinsi Asal:</p>
                          <p className="font-semibold text-[#141e16]">{registrationData.provinsiAsal}</p>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Wilayah & Minat */}
                    <div className="space-y-1.5 text-[11px]">
                      <span className="text-[10px] font-bold text-[#795838] uppercase tracking-wider block">
                        2. Rencana Wilayah &amp; Minat Konservasi
                      </span>
                      <div className="bg-[#ebf7ea] p-2.5 rounded-xl space-y-2">
                        <div>
                          <p className="text-[10px] text-[#717971] mb-1">Provinsi Tujuan Eksplorasi:</p>
                          <div className="flex flex-wrap gap-1">
                            {registrationData.provinsiTujuan.map((prov, idx) => (
                              <span key={idx} className="bg-white text-[#003317] border border-[#003317]/10 px-2 py-0.5 rounded-md text-[10px] font-semibold">
                                {prov}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] text-[#717971] mb-1">Fokus Minat Ekowisata:</p>
                          <div className="flex flex-wrap gap-1">
                            {registrationData.minatEkowisata.map((minat, idx) => (
                              <span key={idx} className="bg-[#174b2a] text-white px-2 py-0.5 rounded-md text-[10px] font-semibold">
                                {minat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Kontak Darurat */}
                    <div className="space-y-1.5 text-[11px]">
                      <span className="text-[10px] font-bold text-[#795838] uppercase tracking-wider block">
                        3. Kontak Darurat di Rimba (Emergency)
                      </span>
                      <div className="grid grid-cols-2 gap-2 bg-[#ebf7ea] p-2.5 rounded-xl">
                        <div>
                          <p className="text-[10px] text-[#717971]">Nama Kontak:</p>
                          <p className="font-bold text-[#141e16]">{registrationData.kontakDarurat.nama}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-[#717971]">Hubungan / Relasi:</p>
                          <p className="font-semibold text-[#141e16]">{registrationData.kontakDarurat.relasi}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-[10px] text-[#717971]">No. HP Darurat:</p>
                          <p className="font-mono font-bold text-[#141e16]">{registrationData.kontakDarurat.telepon}</p>
                        </div>
                        <div className="col-span-2 pt-1 border-t border-[#003317]/10">
                          <p className="text-[10px] text-[#717971]">Catatan Medis &amp; Kebugaran:</p>
                          <p className="text-[11px] text-[#141e16] font-medium">{registrationData.catatanMedis}</p>
                        </div>
                      </div>
                    </div>

                    {/* Section 4: 4 Ikrar Lestari Adat & Konservasi */}
                    <div className="space-y-1.5 text-[11px]">
                      <span className="text-[10px] font-bold text-[#795838] uppercase tracking-wider block">
                        4. Ikrar Ekowisatawan Lestari Kalimantan
                      </span>
                      <div className="space-y-1 bg-[#ebf7ea] p-2.5 rounded-xl">
                        <div className="flex items-center space-x-2">
                          <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                          <span className="text-[#141e16] font-medium">Nol Sampah Plastik di Seluruh Zona Hutan</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                          <span className="text-[#141e16] font-medium">Hormati Hukum Adat &amp; Etika Rumah Betang Dayak</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                          <span className="text-[#141e16] font-medium">Jaga Jarak Aman &amp; Tidak Mengganggu Satwa Liar</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                          <span className="text-[#141e16] font-medium">Utamakan Produk Kerajinan &amp; Kuliner UMKM Komunitas</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleOpenRegisterModal}
                        className="w-full py-2.5 bg-[#174b2a] text-white rounded-xl text-[12px] font-bold flex items-center justify-center space-x-1.5 hover:bg-[#123d21] transition-all cursor-pointer shadow-sm active:scale-98"
                      >
                        <span className="material-symbols-outlined text-[16px]">edit</span>
                        <span>Perbarui / Ubah Data Registrasi Saya</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* SUBSECTION 1: UMKM ADAT */}
              {tab5Section === 'umkm' && (
                <div className="space-y-3">
                  <div className="bg-[#ebf7ea] p-3 rounded-xl border border-[#003317]/10">
                    <h5 className="text-[12px] font-bold text-[#003317] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">handshake</span>
                      Etika Membeli Produk Komunitas
                    </h5>
                    <p className="text-[11px] text-[#414941] mt-0.5 leading-relaxed">
                      Beli langsung dari pengrajin tanpa perantara komersial besar. Hindari menawar berlebihan pada kerajinan tangan bernilai sakral.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {KIT_ITEMS.filter(k => k.category === 'umkm').map(item => (
                      <div key={item.id} className="bg-white p-3 rounded-2xl border border-[#003317]/10 card-elevation-1 space-y-2">
                        <div className="flex space-x-3 items-start">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-20 h-20 rounded-xl object-cover shrink-0 border border-[#003317]/10 shadow-xs"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80';
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-1.5 mb-1">
                              <span className="text-[9px] bg-[#795838] text-white px-1.5 py-0.5 rounded font-bold">{item.province}</span>
                              <span className="text-[10px] text-[#174b2a] font-semibold truncate">{item.subtitle}</span>
                            </div>
                            <h6 className="text-[13px] font-bold text-[#141e16] leading-tight">{item.title}</h6>
                            <p className="text-[11px] text-[#414941] leading-relaxed mt-1">{item.description}</p>
                            <p className="text-[10px] text-[#795838] font-medium mt-1 flex items-center gap-1">
                              <span className="material-symbols-outlined text-[12px]">verified</span>
                              <span>{item.khasBorneo}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1 border-t border-[#003317]/5">
                          <button
                            onClick={() => {
                              setSelectedKitItemModal(item);
                            }}
                            className="text-[11px] font-bold text-[#174b2a] hover:underline flex items-center space-x-0.5 cursor-pointer"
                          >
                            <span>Detail Kit</span>
                            <span className="material-symbols-outlined text-[13px]">info</span>
                          </button>
                          <button
                            onClick={() => showToast(`Menghubungkan ke Sentra Pengrajin ${item.province}...`)}
                            className="px-3 py-1.5 bg-[#174b2a] text-white rounded-xl text-[11px] font-bold flex items-center space-x-1 active:scale-95 shadow-sm cursor-pointer whitespace-nowrap"
                          >
                            <span className="material-symbols-outlined text-[14px]">chat</span>
                            <span>Tanya Pengrajin</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SUBSECTION 2: CHECKLIST */}
              {tab5Section === 'checklist' && (
                <div className="space-y-3.5">
                  <div className="bg-[#e5f1e4] p-3.5 rounded-2xl border border-[#003317]/10 space-y-2">
                    <div className="flex justify-between items-center text-[12px]">
                      <span className="font-bold text-[#003317]">Kesiapan Jejak Lestari</span>
                      <span className="font-extrabold text-[#003317]">{checklistPercent}% Terpenuhi ({checklistCompletedCount}/8)</span>
                    </div>
                    <div className="w-full h-2.5 bg-[#dae6d9] rounded-full overflow-hidden">
                      <div className="h-full bg-[#174b2a] transition-all duration-300 rounded-full" style={{ width: `${checklistPercent}%` }}></div>
                    </div>
                    <p className="text-[11px] text-[#717971]">Lengkapi seluruh 8 poin sebelum memasuki kawasan cagar biosfer.</p>
                  </div>

                  <div className="space-y-2">
                    {[
                      { title: "Membawa Tumbler & Wadah Pakai Ulang", desc: "Nol botol plastik sekali pakai di sepanjang rute sungai." },
                      { title: "Larangan Sentuh & Beri Makan Satwa Liar", desc: "Patuhi jarak aman minimum 5 meter demi kesehatan primata." },
                      { title: "Izin Menghadap Tetua Adat / Kepala Desa", desc: "Melapor secara santun saat memasuki wilayah hukum adat Dayak." },
                      { title: "Membawa Kembali Sampah Sendiri (Pack In, Pack Out)", desc: "Siapkan kantong bio-plastik khusus di dalam tas rute." },
                      { title: "Menggunakan Tabir Surya Reef-Safe", desc: "Bebas oxybenzone untuk menjaga kejernihan ekosistem sungai & karang." },
                      { title: "Menghormati Busana & Privasi Ritual Adat", desc: "Minta izin sebelum memotret upacara penyambutan atau lansia bertato." },
                      { title: "Merekam Jejak Geospasial Tanpa Merusak Ranting", desc: "Tetap berjalan pada jalur setapak yang telah ditentukan ranger." },
                      { title: "Menanam Kertas Benih Ulin di Titik Tanam Ditunjuk", desc: "Membantu reboisasi nyata Kalimantan sebelum meninggalkan lokasi." }
                    ].map((item, idx) => (
                      <label
                        key={idx}
                        className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-[#003317]/5 cursor-pointer hover:bg-emerald-50/40 transition-all"
                      >
                        <input
                          type="checkbox"
                          checked={checklist[idx]}
                          onChange={() => handleToggleChecklist(idx)}
                          className="mt-1 rounded text-[#003317] focus:ring-[#003317] w-5 h-5 cursor-pointer"
                        />
                        <div className="text-[13px]">
                          <span className="font-bold text-[#141e16] block">{item.title}</span>
                          <span className="text-[#717971] text-[11px]">{item.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* SUBSECTION 3: KUIS RIMBA */}
              {tab5Section === 'quiz' && (
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-[#e0ebde] to-[#e5f1e4] p-4 rounded-2xl border border-[#003317]/10">
                    <h5 className="text-[17px] font-bold text-[#003317] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[20px]">quiz</span>
                      Tantangan Duta Rimba Borneo
                    </h5>
                    <p className="text-[12px] text-[#414941] mt-1">Jawab 3 pertanyaan seputar etika ekowisata dan dapatkan lencana digital resmi!</p>
                  </div>

                  <div className="space-y-3">
                    {/* Q1 */}
                    <div className="bg-white p-3.5 rounded-xl border border-[#003317]/10 card-elevation-1 space-y-2">
                      <p className="text-[13px] font-bold text-[#141e16]">1. Mengapa dilarang mendekati orangutan lebih dekat dari 5 meter di stasiun Camp Leakey?</p>
                      <div className="space-y-1.5 text-[12px]">
                        <label className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-[#e5f1e4] cursor-pointer">
                          <input
                            type="radio"
                            name="q1"
                            value="wrong"
                            checked={quizAnswers.q1 === 'wrong'}
                            onChange={() => setQuizAnswers({ ...quizAnswers, q1: 'wrong' })}
                            className="text-[#003317]"
                          />
                          <span>Agar pengunjung tidak kelelahan berjalan di titian kayu.</span>
                        </label>
                        <label className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-[#e5f1e4] cursor-pointer">
                          <input
                            type="radio"
                            name="q1"
                            value="correct"
                            checked={quizAnswers.q1 === 'correct'}
                            onChange={() => setQuizAnswers({ ...quizAnswers, q1: 'correct' })}
                            className="text-[#003317]"
                          />
                          <span>Mencegah penularan penyakit manusia (zoonosis) yang mematikan primata.</span>
                        </label>
                      </div>
                    </div>

                    {/* Q2 */}
                    <div className="bg-white p-3.5 rounded-xl border border-[#003317]/10 card-elevation-1 space-y-2">
                      <p className="text-[13px] font-bold text-[#141e16]">2. Apa makna filosofis dari arsitektur Rumah Betang / Radakng suku Dayak?</p>
                      <div className="space-y-1.5 text-[12px]">
                        <label className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-[#e5f1e4] cursor-pointer">
                          <input
                            type="radio"
                            name="q2"
                            value="correct"
                            checked={quizAnswers.q2 === 'correct'}
                            onChange={() => setQuizAnswers({ ...quizAnswers, q2: 'correct' })}
                            className="text-[#003317]"
                          />
                          <span>Semangat kebersamaan, persatuan egaliter, dan hidup selaras dengan rimba.</span>
                        </label>
                        <label className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-[#e5f1e4] cursor-pointer">
                          <input
                            type="radio"
                            name="q2"
                            value="wrong"
                            checked={quizAnswers.q2 === 'wrong'}
                            onChange={() => setQuizAnswers({ ...quizAnswers, q2: 'wrong' })}
                            className="text-[#003317]"
                          />
                          <span>Sebagai benteng pertahanan perang komersial modern.</span>
                        </label>
                      </div>
                    </div>

                    {/* Q3 */}
                    <div className="bg-white p-3.5 rounded-xl border border-[#003317]/10 card-elevation-1 space-y-2">
                      <p className="text-[13px] font-bold text-[#141e16]">3. Bagaimana cara terbaik mengaktifkan benih pada Kertas Benih (Seed Paper) EcoTourism Kit?</p>
                      <div className="space-y-1.5 text-[12px]">
                        <label className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-[#e5f1e4] cursor-pointer">
                          <input
                            type="radio"
                            name="q3"
                            value="wrong"
                            checked={quizAnswers.q3 === 'wrong'}
                            onChange={() => setQuizAnswers({ ...quizAnswers, q3: 'wrong' })}
                            className="text-[#003317]"
                          />
                          <span>Membakarnya terlebih dahulu hingga menjadi abu pupuk.</span>
                        </label>
                        <label className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-[#e5f1e4] cursor-pointer">
                          <input
                            type="radio"
                            name="q3"
                            value="correct"
                            checked={quizAnswers.q3 === 'correct'}
                            onChange={() => setQuizAnswers({ ...quizAnswers, q3: 'correct' })}
                            className="text-[#003317]"
                          />
                          <span>Sobek kecil, rendam air hangat 3-4 jam, tanam sedalam 1 cm &amp; siram teratur.</span>
                        </label>
                      </div>
                    </div>

                    <button
                      onClick={handleEvaluateQuiz}
                      className="w-full py-2.5 bg-[#003317] text-white rounded-xl text-[12px] font-bold shadow-md hover:bg-[#003317]/95 active:scale-95 transition-all cursor-pointer"
                    >
                      Periksa Jawaban Kuis
                    </button>
                  </div>

                  {quizResultVisible && (
                    <div className="p-4 rounded-2xl bg-[#e0ebde] border border-[#003317]/20 space-y-2 text-center animate-fadeIn">
                      <span className="material-symbols-outlined text-4xl text-[#003317]">military_tech</span>
                      <h5 className="text-[17px] font-bold text-[#003317]">Selamat! Anda Meraih Gelar: Duta Rimba Borneo</h5>
                      <p className="text-[12px] text-[#414941]">Skor: 3/3 Sempurna. Poin EcoTraveler Anda bertambah +50 Poin!</p>
                    </div>
                  )}
                </div>
              )}

              {/* SUBSECTION 4: LAPORAN / USULAN */}
              {tab5Section === 'laporan' && (
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-2xl border border-[#003317]/10 card-elevation-1 space-y-3">
                    <h5 className="text-[17px] font-bold text-[#003317]">Kirim Laporan &amp; Usulan Wisata</h5>
                    <p className="text-[11px] text-[#414941]">Bantu tim kurator ECO BORNEA memperbarui data konservasi atau mendaftarkan UMKM baru.</p>
                    <form onSubmit={handleReportSubmit} className="space-y-2.5">
                      <div>
                        <label className="text-[11px] font-semibold text-[#141e16] block mb-1">Jenis Laporan / Usulan</label>
                        <select
                          value={reportCategory}
                          onChange={(e) => setReportCategory(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] text-[12px] text-[#141e16] outline-none"
                        >
                          <option value="Koreksi Data Destinasi">Koreksi Data / Jam Operasional</option>
                          <option value="Usulan UMKM Lokal Baru">Usulan UMKM Pengrajin Lokal Baru</option>
                          <option value="Laporan Kebersihan / Sampah">Laporan Pelanggaran Sampah Rimba</option>
                          <option value="Masukan Fitur Aplikasi">Masukan Fitur Aplikasi &amp; Kit</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-[#141e16] block mb-1">Nama Lokasi / UMKM</label>
                        <input
                          type="text"
                          required
                          value={reportLoc}
                          onChange={(e) => setReportLoc(e.target.value)}
                          placeholder="Contoh: Desa Wisata Dayak Bahau"
                          className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] text-[12px] text-[#141e16] outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-[#141e16] block mb-1">Detail Narasi Masukan</label>
                        <textarea
                          required
                          rows={3}
                          value={reportDesc}
                          onChange={(e) => setReportDesc(e.target.value)}
                          placeholder="Jelaskan kondisi faktual di lapangan..."
                          className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] text-[12px] text-[#141e16] outline-none resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 bg-[#174b2a] text-white rounded-xl text-[12px] font-bold shadow active:scale-95 transition-all cursor-pointer"
                      >
                        Kirim Laporan Terverifikasi
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Security & Admin Access */}
              <div className="pt-2">
                <button
                  onClick={() => setIsAdminModalOpen(true)}
                  className="w-full py-2.5 px-4 bg-[#e0ebde] hover:bg-[#dae6d9] text-[#003317] rounded-xl text-[12px] font-bold flex items-center justify-between border border-[#003317]/10 transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">shield</span>
                    Panel Kelola Admin &amp; Balai TN
                  </span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          )}

        </main>

        {/* BOTTOM NAVIGATION BAR */}
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-1.5 py-1.5 max-w-md mx-auto bg-[#f1fdef]/95 backdrop-blur-lg shadow-lg border-t border-[#003317]/5">
          {/* Tab 1: Beranda */}
          <button
            onClick={() => setActiveTab('beranda')}
            className={`flex flex-col items-center justify-center rounded-xl px-2 py-1 transition-all duration-200 cursor-pointer ${
              activeTab === 'beranda'
                ? 'bg-[#174b2a] text-white shadow-sm'
                : 'text-[#414941] hover:text-[#003317]'
            }`}
          >
            <span className="material-symbols-outlined text-[19px]">forest</span>
            <span className="text-[10px] font-bold mt-0.5">Beranda</span>
          </button>

          {/* Tab 2: Destinasi */}
          <button
            onClick={() => setActiveTab('destinasi')}
            className={`flex flex-col items-center justify-center rounded-xl px-2 py-1 transition-all duration-200 cursor-pointer ${
              activeTab === 'destinasi'
                ? 'bg-[#174b2a] text-white shadow-sm'
                : 'text-[#414941] hover:text-[#003317]'
            }`}
          >
            <span className="material-symbols-outlined text-[19px]">explore</span>
            <span className="text-[10px] font-bold mt-0.5">Destinasi</span>
          </button>

          {/* Tab 3: Peta */}
          <button
            onClick={() => setActiveTab('peta')}
            className={`flex flex-col items-center justify-center rounded-xl px-2 py-1 transition-all duration-200 cursor-pointer ${
              activeTab === 'peta'
                ? 'bg-[#174b2a] text-white shadow-sm'
                : 'text-[#414941] hover:text-[#003317]'
            }`}
          >
            <span className="material-symbols-outlined text-[19px]">map</span>
            <span className="text-[10px] font-bold mt-0.5">Peta</span>
          </button>

          {/* Tab 4: Registrasi & Data */}
          <button
            onClick={() => setActiveTab('registrasi')}
            className={`relative flex flex-col items-center justify-center rounded-xl px-2 py-1 transition-all duration-200 cursor-pointer ${
              activeTab === 'registrasi'
                ? 'bg-[#174b2a] text-white shadow-sm'
                : 'text-[#414941] hover:text-[#003317]'
            }`}
          >
            <span className="material-symbols-outlined text-[19px]">how_to_reg</span>
            <span className="text-[10px] font-bold mt-0.5">Registrasi</span>
            {registeredTravelers.length > 0 && (
              <span className={`absolute -top-1 -right-0.5 text-[8px] font-bold px-1 rounded-full ${
                activeTab === 'registrasi' ? 'bg-[#ffdcbf] text-[#2d1600]' : 'bg-[#174b2a] text-white'
              }`}>
                {registeredTravelers.length}
              </span>
            )}
          </button>

          {/* Tab 5: Kit QR */}
          <button
            onClick={() => setActiveTab('kit_qr')}
            className={`flex flex-col items-center justify-center rounded-xl px-2 py-1 transition-all duration-200 cursor-pointer ${
              activeTab === 'kit_qr'
                ? 'bg-[#174b2a] text-white shadow-sm'
                : 'text-[#414941] hover:text-[#003317]'
            }`}
          >
            <span className="material-symbols-outlined text-[19px]">qr_code_scanner</span>
            <span className="text-[10px] font-bold mt-0.5">Kit QR</span>
          </button>

          {/* Tab 6: Akun */}
          <button
            onClick={() => setActiveTab('akun')}
            className={`flex flex-col items-center justify-center rounded-xl px-2 py-1 transition-all duration-200 cursor-pointer ${
              activeTab === 'akun'
                ? 'bg-[#174b2a] text-white shadow-sm'
                : 'text-[#414941] hover:text-[#003317]'
            }`}
          >
            <span className="material-symbols-outlined text-[19px]">person</span>
            <span className="text-[10px] font-bold mt-0.5">Akun</span>
          </button>
        </nav>

        {/* ==================================================== */}
        {/* MODAL 1: DESTINATION DETAIL DIALOG                   */}
        {/* ==================================================== */}
        {selectedDestination && (() => {
          const currentGallery = selectedDestination.gallery && selectedDestination.gallery.length > 0
            ? selectedDestination.gallery
            : [selectedDestination.image];
          const activeImgSrc = currentGallery[activeModalImgIndex] || selectedDestination.image;

          return (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
              <div className="bg-[#f1fdef] w-full max-w-md max-h-[88vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl modal-elevation-2 flex flex-col no-scrollbar animate-fadeIn">
                {/* Hero Gallery Image */}
                <div className="relative h-60 w-full bg-slate-900">
                  <img
                    src={activeImgSrc}
                    alt={selectedDestination.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-300"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
                  
                  {/* Top Bar with Close & Province */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center">
                    <span className="bg-[#003317]/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow border border-white/20">
                      {selectedDestination.provinceName}
                    </span>
                    <button
                      onClick={() => setSelectedDestination(null)}
                      className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-md flex items-center justify-center transition-all active:scale-90 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                  </div>

                  {/* Bottom Badges */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex justify-between items-center text-white text-[11px]">
                    <span className="bg-[#174b2a] text-white font-bold px-3 py-1 rounded-full shadow">
                      {selectedDestination.category} • {selectedDestination.verified}
                    </span>
                    <span className="bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-md font-mono text-[10px]">
                      Foto {activeModalImgIndex + 1} / {currentGallery.length}
                    </span>
                  </div>
                </div>

                {/* Thumbnail Selector Strip (if multiple photos exist) */}
                {currentGallery.length > 1 && (
                  <div className="bg-[#e5f1e4] px-4 py-2 border-b border-[#003317]/10 flex items-center space-x-2.5 overflow-x-auto no-scrollbar">
                    <span className="text-[10px] font-bold text-[#003317] uppercase tracking-wider shrink-0 flex items-center space-x-1">
                      <span className="material-symbols-outlined text-[13px]">collections</span>
                      <span>Pilih Foto:</span>
                    </span>
                    <div className="flex space-x-2">
                      {currentGallery.map((imgUrl, gIdx) => (
                        <button
                          key={gIdx}
                          onClick={() => setActiveModalImgIndex(gIdx)}
                          className={`w-14 h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                            activeModalImgIndex === gIdx
                              ? 'border-[#174b2a] scale-105 shadow-sm'
                              : 'border-transparent opacity-65 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={imgUrl}
                            alt={`Preview ${gIdx + 1}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80';
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Body */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="text-[20px] font-bold text-[#003317] leading-tight">{selectedDestination.title}</h3>
                    <p className="text-[12px] text-[#795838] flex items-center mt-0.5 font-medium">
                      <span className="material-symbols-outlined text-[16px] mr-1">location_on</span>
                      {selectedDestination.provinceName} • {selectedDestination.ecoFeature}
                    </p>
                  </div>

                  {/* Pricing & Hours Grid */}
                  <div className="grid grid-cols-2 gap-2 bg-[#e5f1e4] p-3 rounded-2xl text-[12px]">
                    <div>
                      <span className="text-[11px] text-[#717971] block">Perkiraan Biaya / Harga</span>
                      <span className="font-bold text-[#003317] text-[13px]">{selectedDestination.price}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-[#717971] block">Jam Buka Kunjungan</span>
                      <span className="font-bold text-[#141e16] text-[13px]">{selectedDestination.openHours}</span>
                    </div>
                  </div>

                  {/* DAFTAR LENGKAP SAJIAN KULINER / PESONA CIRI KHAS DAERAH */}
                  {selectedDestination.specialties && selectedDestination.specialties.length > 0 && (
                    <div className="space-y-2.5 pt-1">
                      <div className="flex items-center justify-between border-b border-[#003317]/10 pb-1.5">
                        <div className="flex items-center space-x-2 text-[#003317]">
                          <span className="material-symbols-outlined text-[20px] text-[#174b2a]">
                            {selectedDestination.category === 'Kuliner' ? 'restaurant_menu' : 'stars'}
                          </span>
                          <h4 className="text-[14px] font-bold">
                            {selectedDestination.category === 'Kuliner'
                              ? `Daftar Kuliner Khas (${selectedDestination.specialties.length} Sajian Lengkap)`
                              : `Ciri Khas & Daya Tarik Utama (${selectedDestination.specialties.length} Poin)`}
                          </h4>
                        </div>
                        <span className="text-[10px] bg-[#174b2a] text-white px-2 py-0.5 rounded-full font-bold">
                          Lengkap
                        </span>
                      </div>

                      <p className="text-[11px] text-[#414941]">
                        {selectedDestination.category === 'Kuliner'
                          ? 'Setiap menu khas di bawah diolah dengan bahan alami lokal dan rempah tradisional warisan leluhur Kalimantan:'
                          : 'Rincian keunikan ekologis dan peninggalan budaya yang tercatat resmi di destinasi ini:'}
                      </p>

                      <div className="space-y-2.5">
                        {selectedDestination.specialties.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="bg-white p-3.5 rounded-2xl border border-[#003317]/10 shadow-xs space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2 min-w-0">
                                <span className="w-5 h-5 rounded-full bg-[#174b2a] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                                  {sIdx + 1}
                                </span>
                                <h5 className="text-[13px] font-bold text-[#141e16] truncate">
                                  {spec.name}
                                </h5>
                              </div>
                              <span className="text-[10px] bg-[#ebf7ea] text-[#174b2a] font-bold px-2 py-0.5 rounded-md shrink-0 border border-[#003317]/10">
                                {spec.categoryTag}
                              </span>
                            </div>

                            {spec.image && (
                              <div className="h-36 w-full rounded-xl overflow-hidden border border-[#003317]/10 bg-slate-100">
                                <img
                                  src={spec.image}
                                  alt={spec.name}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                              </div>
                            )}

                            <p className="text-[11px] text-[#414941] leading-relaxed">
                              {spec.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Cultural Narrative */}
                  <div className="space-y-1.5 bg-white p-3.5 rounded-2xl border border-[#003317]/10">
                    <h5 className="text-[13px] font-bold text-[#003317]">Konteks Adat &amp; Narasi Konservasi</h5>
                    <p className="text-[12px] text-[#141e16] leading-relaxed">
                      {selectedDestination.narrative}
                    </p>
                  </div>

                  {/* Ethical Rules */}
                  <div className="bg-[#ffdcbf]/40 p-3.5 rounded-2xl border border-[#795838]/10 space-y-1.5">
                    <div className="flex items-center space-x-1.5 text-[#795838] font-bold text-[12px]">
                      <span className="material-symbols-outlined text-[16px]">rule</span>
                      <span>Tata Krama Kunjungan (Hukum Adat &amp; TN)</span>
                    </div>
                    <p className="text-[11px] text-[#5e4023] leading-normal">
                      {selectedDestination.rules}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex space-x-2.5">
                    <button
                      onClick={() => {
                        addToItinerary(selectedDestination.id);
                        setSelectedDestination(null);
                      }}
                      className="flex-1 py-3 bg-[#e0ebde] text-[#003317] font-bold rounded-xl text-[12px] active:scale-95 transition-all cursor-pointer"
                    >
                      + Ke Rencana Rute
                    </button>
                    <button
                      onClick={() => showToast(`Data ${selectedDestination.title} tersimpan ke memori offline!`)}
                      className="flex-1 py-3 bg-[#174b2a] text-white font-bold rounded-xl text-[12px] shadow-md active:scale-95 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
                      <span>Simpan Offline</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ==================================================== */}
        {/* MODAL 2: QR KIT SCANNER RESULT / CARD VIEWER          */}
        {/* ==================================================== */}
        {(selectedPresetModal || customScannedModal) && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
            <div className="bg-[#f1fdef] w-full max-w-md max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl modal-elevation-2 flex flex-col p-5 no-scrollbar space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-[#e5f1e4]">
                <div className="flex items-center space-x-2">
                  <span className="material-symbols-outlined text-[#003317] text-[24px]">
                    {selectedPresetModal ? selectedPresetModal.icon : 'qr_code_2'}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#e0ebde] rounded text-[#003317]">
                      {selectedPresetModal ? selectedPresetModal.badge : 'Custom Kit Card'}
                    </span>
                    <h4 className="text-[16px] font-bold text-[#141e16]">
                      {selectedPresetModal ? selectedPresetModal.title : customScannedModal?.title}
                    </h4>
                  </div>
                </div>
                <button
                  onClick={() => { setSelectedPresetModal(null); setCustomScannedModal(null); }}
                  className="w-8 h-8 rounded-full bg-[#e5f1e4] flex items-center justify-center text-[#717971] hover:text-[#141e16] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              {selectedPresetModal && (
                <div className="space-y-3">
                  <div className="bg-[#e0ebde] p-3 rounded-xl border border-[#003317]/10">
                    <h6 className="font-bold text-[13px] text-[#003317]">{selectedPresetModal.detail.heading}</h6>
                    <p className="text-[12px] text-[#414941] mt-1">{selectedPresetModal.detail.body}</p>
                  </div>

                  <div className="space-y-1.5 text-[12px]">
                    <p className="font-bold text-[#141e16]">Panduan &amp; Etika Pelaksanaan:</p>
                    <ul className="list-disc pl-5 text-[11px] text-[#414941] space-y-1">
                      {selectedPresetModal.detail.bullets.map((bullet: string, idx: number) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  {selectedPresetModal.detail.actionLabel && (
                    <div className="p-2.5 bg-[#ffdcbf]/50 rounded-xl flex items-center justify-between text-[#795838] text-[11px] font-bold">
                      <span>Interaksi Fitur Kit Digital Aktif</span>
                      <button
                        onClick={() => showToast(`Fitur '${selectedPresetModal.detail.actionLabel}' diaktifkan!`)}
                        className="px-2.5 py-1 bg-[#795838] text-white rounded cursor-pointer active:scale-95 transition-all"
                      >
                        {selectedPresetModal.detail.actionLabel}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {customScannedModal && (
                <div className="space-y-3">
                  <p className="text-[12px] text-[#414941]">{customScannedModal.content}</p>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => { setSelectedPresetModal(null); setCustomScannedModal(null); }}
                  className="w-full py-2.5 bg-[#003317] text-white rounded-xl text-[12px] font-bold active:scale-95 transition-all cursor-pointer"
                >
                  Tutup &amp; Simpan ke Catatan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* MODAL 3: PROTECTED ADMIN PANEL                       */}
        {/* ==================================================== */}
        {isAdminModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#f1fdef] w-full max-w-md rounded-3xl modal-elevation-2 p-5 space-y-4 max-h-[85vh] overflow-y-auto no-scrollbar">
              <div className="flex justify-between items-center pb-2 border-b border-[#e5f1e4]">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-[#dae6d9] text-[#003317] flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[18px]">shield</span>
                  </div>
                  <h4 className="text-[17px] font-bold text-[#003317]">Portal Pengelola &amp; Ranger Adat</h4>
                </div>
                <button
                  onClick={() => setIsAdminModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#e5f1e4] flex items-center justify-center text-[#717971] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              {!adminAuthenticated ? (
                <div className="space-y-3">
                  <p className="text-[12px] text-[#414941]">
                    Halaman khusus staf dinas pariwisata, pengelola balai TN, dan tetua adat untuk pemutakhiran data verifikasi kit.
                  </p>
                  <div>
                    <label className="text-[11px] font-semibold text-[#141e16] block mb-1">PIN / Kata Sandi Pengelola</label>
                    <input
                      type="password"
                      value={adminPinInput}
                      onChange={(e) => setAdminPinInput(e.target.value)}
                      placeholder="Ketik demo PIN: admin123"
                      className="w-full px-3 py-2.5 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] text-[13px] focus:border-[#003317] outline-none"
                    />
                    <p className="text-[11px] text-[#795838] mt-1">Hint demo: gunakan kata sandi <b>admin123</b></p>
                  </div>
                  <button
                    onClick={handleAdminAuth}
                    className="w-full py-2.5 bg-[#003317] text-white rounded-xl text-[12px] font-bold active:scale-95 transition-all cursor-pointer"
                  >
                    Masuk Portal Ranger
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-[#e5f1e4] p-2.5 rounded-xl text-[11px] font-semibold text-[#003317]">
                    <span>Status: Terotentikasi (Ranger Wilayah III)</span>
                    <button
                      onClick={() => { setAdminAuthenticated(false); setAdminPinInput(''); showToast("Telah keluar dari sesi admin."); }}
                      className="text-[#ba1a1a] font-bold cursor-pointer"
                    >
                      Keluar
                    </button>
                  </div>

                  {/* Add Destination Form */}
                  <form onSubmit={handleAddNewDestination} className="bg-white p-3.5 rounded-2xl border border-[#003317]/10 space-y-2.5">
                    <h5 className="text-[12px] font-bold text-[#141e16]">Tambah / Daftarkan Destinasi Adat Baru</h5>
                    <input
                      type="text"
                      required
                      value={newDestName}
                      onChange={(e) => setNewDestName(e.target.value)}
                      placeholder="Nama Titik Ekowisata"
                      className="w-full px-3 py-2 text-[12px] rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] outline-none"
                    />
                    <select
                      value={newDestRegion}
                      onChange={(e) => setNewDestRegion(e.target.value as any)}
                      className="w-full px-3 py-2 text-[12px] rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] outline-none"
                    >
                      <option value="Kalbar">Kalimantan Barat</option>
                      <option value="Kalteng">Kalimantan Tengah</option>
                      <option value="Kalsel">Kalimantan Selatan</option>
                      <option value="Kaltim">Kalimantan Timur</option>
                      <option value="Kaltara">Kalimantan Utara</option>
                    </select>
                    <input
                      type="text"
                      value={newDestFee}
                      onChange={(e) => setNewDestFee(e.target.value)}
                      placeholder="Tarif Konservasi (contoh: Rp 50.000)"
                      className="w-full px-3 py-2 text-[12px] rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] outline-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-[#174b2a] text-white rounded-xl text-[11px] font-bold active:scale-95 cursor-pointer"
                    >
                      Simpan &amp; Terbitkan ke Aplikasi
                    </button>
                  </form>

                  {/* Reports Log */}
                  <div className="space-y-1.5">
                    <h5 className="text-[12px] font-bold text-[#141e16]">Log Masukan Pengguna Lapangan</h5>
                    <div className="space-y-1.5 max-h-36 overflow-y-auto no-scrollbar text-[11px]">
                      {adminReportLogs.map((log, idx) => (
                        <div key={idx} className="p-2 bg-[#e5f1e4] rounded-lg">
                          <span className="font-bold text-[#003317]">[{log.cat}]</span> {log.loc}: {log.desc}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* MODAL 4: SYSTEM NOTIFICATIONS                        */}
        {/* ==================================================== */}
        {isNotificationOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#f1fdef] w-full max-w-sm rounded-3xl modal-elevation-2 p-5 space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="text-[17px] font-bold text-[#003317]">Notifikasi Sistem</h4>
                <button
                  onClick={() => setIsNotificationOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#e5f1e4] flex items-center justify-center text-[#717971] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              <div className="space-y-2 text-[12px] text-[#141e16]">
                <div className="p-2.5 bg-[#e5f1e4] rounded-xl flex items-start space-x-2.5">
                  <span className="material-symbols-outlined text-[#003317] text-[20px] mt-0.5">sync</span>
                  <div>
                    <p className="font-bold text-[12px]">Data Wilayah Tersinkronisasi</p>
                    <p className="text-[11px] text-[#717971]">Peta offline 5 provinsi Kalimantan siap digunakan saat sinyal padam.</p>
                  </div>
                </div>
                <div className="p-2.5 bg-[#e5f1e4] rounded-xl flex items-start space-x-2.5">
                  <span className="material-symbols-outlined text-[#795838] text-[20px] mt-0.5">energy_savings_leaf</span>
                  <div>
                    <p className="font-bold text-[12px]">Tantangan Kertas Benih</p>
                    <p className="text-[11px] text-[#717971]">Dapatkan 50 Poin tambahan dengan menanam bibit pohon ulin.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsNotificationOpen(false)}
                className="w-full py-2 bg-[#003317] text-white rounded-xl text-[12px] font-bold cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* MODAL 5: 4 PILAR EKOWISATA DETAIL DIALOG             */}
        {/* ==================================================== */}
        {activePillarModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#f1fdef] w-full max-w-sm rounded-3xl modal-elevation-2 p-5 space-y-3.5 animate-fadeIn">
              <div className="flex justify-between items-center pb-2 border-b border-[#e5f1e4]">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-[#174b2a] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">{activePillarModal.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#003317]">{activePillarModal.name}</h4>
                    <p className="text-[11px] text-[#795838] font-medium">{activePillarModal.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActivePillarModal(null)}
                  className="w-8 h-8 rounded-full bg-[#e5f1e4] flex items-center justify-center text-[#717971] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              <div className="space-y-2 text-[12px] text-[#141e16]">
                <p className="leading-relaxed bg-white p-3 rounded-xl border border-[#003317]/10">
                  {activePillarModal.description}
                </p>
                <div>
                  <span className="text-[11px] font-bold text-[#003317] uppercase tracking-wider block mb-1">Destinasi Rujukan di Kalimantan:</span>
                  <div className="space-y-1">
                    {activePillarModal.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-1.5 text-[11px] text-[#174b2a] bg-[#ebf7ea] px-2.5 py-1 rounded-lg font-medium">
                        <span className="material-symbols-outlined text-[14px]">verified</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-1 flex space-x-2">
                <button
                  onClick={() => {
                    const catKey = activePillarModal.name.includes('Alam') ? 'Alam' :
                                   activePillarModal.name.includes('Budaya') ? 'Budaya' :
                                   activePillarModal.name.includes('Satwa') ? 'Konservasi' : 'Kuliner';
                    setSelectedCategory(catKey);
                    setActiveTab('destinasi');
                    setActivePillarModal(null);
                  }}
                  className="flex-1 py-2.5 bg-[#174b2a] text-white rounded-xl text-[12px] font-bold cursor-pointer"
                >
                  Jelajahi Titik Terverifikasi
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* MODAL 6: SELECTED KIT ITEM DETAIL & AUDIO SIMULATOR */}
        {/* ==================================================== */}
        {selectedKitItemModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#f1fdef] w-full max-w-sm rounded-3xl modal-elevation-2 p-5 space-y-4 max-h-[90vh] overflow-y-auto no-scrollbar animate-fadeIn">
              {/* Header Image with Badges */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                <img
                  src={selectedKitItemModal.image}
                  alt={selectedKitItemModal.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <button
                  onClick={() => {
                    setSelectedKitItemModal(null);
                    setIsPlayingKitAudio(false);
                  }}
                  className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center cursor-pointer transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
                <div className="absolute bottom-2.5 left-2.5 flex space-x-1.5">
                  <span className="bg-[#003317]/85 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center space-x-1">
                    <span className="material-symbols-outlined text-[13px]">{selectedKitItemModal.icon}</span>
                    <span className="capitalize">{selectedKitItemModal.category}</span>
                  </span>
                  <span className="bg-[#795838] text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                    {selectedKitItemModal.provinceName}
                  </span>
                </div>
              </div>

              {/* Title & Info */}
              <div className="space-y-1">
                <h3 className="text-[17px] font-bold text-[#003317] leading-snug">
                  {selectedKitItemModal.title}
                </h3>
                <p className="text-[12px] text-[#795838] font-semibold">
                  {selectedKitItemModal.subtitle}
                </p>
              </div>

              {/* Ciri Khas Kalimantan Badge */}
              <div className="bg-[#ebf7ea] border border-[#174b2a]/20 p-3 rounded-xl flex items-start space-x-2.5 text-[#174b2a]">
                <span className="material-symbols-outlined text-[20px] mt-0.5 text-[#174b2a]">eco</span>
                <div>
                  <h6 className="text-[11px] font-bold uppercase tracking-wider">Ciri Khas Asli Kalimantan:</h6>
                  <p className="text-[11px] font-semibold text-[#003317] leading-relaxed mt-0.5">
                    {selectedKitItemModal.khasBorneo}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-3.5 rounded-xl border border-[#003317]/10 text-[12px] text-[#141e16] leading-relaxed space-y-2">
                <p>{selectedKitItemModal.description}</p>
              </div>

              {/* Detail Points */}
              <div className="space-y-1.5">
                <h5 className="text-[11px] font-bold text-[#003317] uppercase tracking-wider">
                  Panduan Edukasi &amp; Kearifan Lokal:
                </h5>
                {selectedKitItemModal.detail.heading && (
                  <div className="bg-[#ebf7ea] p-2.5 rounded-xl border border-[#003317]/10">
                    <h6 className="font-bold text-[12px] text-[#003317]">{selectedKitItemModal.detail.heading}</h6>
                    <p className="text-[11px] text-[#414941] mt-0.5">{selectedKitItemModal.detail.body}</p>
                  </div>
                )}
                <div className="space-y-1.5">
                  {selectedKitItemModal.detail.bullets.map((detail: string, idx: number) => (
                    <div key={idx} className="flex items-start space-x-2 bg-white p-2.5 rounded-xl border border-[#003317]/5 text-[11px]">
                      <span className="material-symbols-outlined text-[#174b2a] text-[16px] mt-0.5 shrink-0">check_circle</span>
                      <span className="text-[#414941] leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audio Narasi Adat Simulator */}
              <div className="p-3 bg-[#e5f1e4] rounded-xl border border-[#003317]/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="material-symbols-outlined text-[#174b2a] text-[20px]">volume_up</span>
                    <div>
                      <p className="text-[11px] font-bold text-[#003317]">Narasi Suara &amp; Alam Dayak</p>
                      <p className="text-[10px] text-[#414941]">Format audio edukatif 360°</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsPlayingKitAudio(!isPlayingKitAudio);
                      if (!isPlayingKitAudio) {
                        showToast(`Memutar narasi audio untuk ${selectedKitItemModal.title}`);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center space-x-1 cursor-pointer transition-all ${
                      isPlayingKitAudio
                        ? 'bg-rose-600 text-white animate-pulse'
                        : 'bg-[#174b2a] text-white hover:bg-[#123d21]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {isPlayingKitAudio ? 'pause' : 'play_arrow'}
                    </span>
                    <span>{isPlayingKitAudio ? 'Jeda' : 'Dengarkan'}</span>
                  </button>
                </div>

                {isPlayingKitAudio && (
                  <div className="pt-1 flex items-center justify-between text-[10px] text-[#174b2a] font-mono bg-white/70 p-2 rounded-lg">
                    <span>Sedang diputar: 00:24 / 01:45</span>
                    <div className="flex space-x-0.5 items-end h-4">
                      <span className="w-1 bg-[#174b2a] h-2 animate-bounce"></span>
                      <span className="w-1 bg-[#174b2a] h-4 animate-bounce delay-75"></span>
                      <span className="w-1 bg-[#174b2a] h-3 animate-bounce delay-150"></span>
                      <span className="w-1 bg-[#174b2a] h-4 animate-bounce delay-100"></span>
                      <span className="w-1 bg-[#174b2a] h-1 animate-bounce"></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-1 space-y-2">
                {selectedKitItemModal.category === 'seed' ? (
                  <button
                    onClick={() => {
                      if (!plantedSeeds.includes(selectedKitItemModal.id)) {
                        setPlantedSeeds([...plantedSeeds, selectedKitItemModal.id]);
                        setEcoPoints(p => p + 25);
                        showToast(`🌱 Benih ${selectedKitItemModal.title} ditanam! (+25 Poin)`);
                      } else {
                        showToast(`Benih ini sudah ditanam dan tercatat di Paspor Hijau.`);
                      }
                    }}
                    className={`w-full py-2.5 rounded-xl text-[12px] font-bold flex items-center justify-center space-x-1.5 cursor-pointer transition-all ${
                      plantedSeeds.includes(selectedKitItemModal.id)
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#174b2a] text-white hover:bg-[#123d21]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">yard</span>
                    <span>
                      {plantedSeeds.includes(selectedKitItemModal.id)
                        ? '✓ Benih Telah Ditanam di Paspor Hijau'
                        : 'Simulasi Tanam Benih Ini (+25 Poin)'}
                    </span>
                  </button>
                ) : selectedKitItemModal.category === 'umkm' ? (
                  <button
                    onClick={() => {
                      showToast(`Menyambungkan ke Kontak Koperasi Adat ${selectedKitItemModal.provinceName}...`);
                    }}
                    className="w-full py-2.5 bg-[#795838] text-white rounded-xl text-[12px] font-bold flex items-center justify-center space-x-1.5 hover:bg-[#60442b] cursor-pointer transition-all"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span>Hubungi Sentra Pengrajin UMKM</span>
                  </button>
                ) : selectedKitItemModal.category === 'puzzle' ? (
                  <button
                    onClick={() => {
                      setSelectedKitItemModal(null);
                      setActiveTab('kit_qr');
                      setTab5Section('quiz');
                      showToast(`Membuka tantangan tebak filosofi motif!`);
                    }}
                    className="w-full py-2.5 bg-[#174b2a] text-white rounded-xl text-[12px] font-bold flex items-center justify-center space-x-1.5 hover:bg-[#123d21] cursor-pointer transition-all"
                  >
                    <span className="material-symbols-outlined text-[16px]">extension</span>
                    <span>Mulai Kuis &amp; Tebak Motif (+20 Poin)</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEcoPoints(p => p + 10);
                      showToast(`Materi ${selectedKitItemModal.title} disimpan ke offline kit (+10 Poin)`);
                    }}
                    className="w-full py-2.5 bg-[#174b2a] text-white rounded-xl text-[12px] font-bold flex items-center justify-center space-x-1.5 hover:bg-[#123d21] cursor-pointer transition-all"
                  >
                    <span className="material-symbols-outlined text-[16px]">bookmark_add</span>
                    <span>Simpan ke Paspor Wisata Saya (+10 Poin)</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    setSelectedKitItemModal(null);
                    setIsPlayingKitAudio(false);
                  }}
                  className="w-full py-2 bg-[#e5f1e4] text-[#003317] rounded-xl text-[12px] font-bold hover:bg-[#d8e6d7] cursor-pointer transition-all"
                >
                  Tutup Tampilan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* MODAL: FORMULIR REGISTRASI DATA EKOWISATAWAN        */}
        {/* ==================================================== */}
        {isRegisterModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#f1fdef] rounded-3xl max-w-md w-full max-h-[92vh] overflow-y-auto no-scrollbar shadow-2xl border border-[#003317]/20 flex flex-col">
              
              {/* Header with Dayak Talawang Background */}
              <div className="relative rounded-t-3xl overflow-hidden p-4 bg-gradient-to-r from-[#174b2a] via-[#1b5530] to-[#254d32] text-white">
                <div 
                  className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none mix-blend-overlay"
                  style={{ backgroundImage: "url('/assets/aistudio/Dayak_cc0a579c.jpeg')" }}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-xl bg-[#b1f2b4] text-[#003317] flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold leading-tight">Formulir Registrasi Ekowisatawan</h3>
                      <p className="text-[11px] text-[#dae6d9]">Sistem Data Resmi Izin Jelajah Heart of Borneo</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsRegisterModalOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSaveRegistration} className="p-4 space-y-3.5 text-[12px]">
                
                {/* 1. Identitas Pribadi */}
                <div className="space-y-2 bg-white p-3 rounded-2xl border border-[#003317]/10 shadow-xs">
                  <span className="text-[11px] font-bold text-[#003317] uppercase tracking-wider block">
                    1. Identitas Pribadi
                  </span>

                  <div>
                    <label className="text-[11px] font-semibold text-[#414941] block mb-1">Nama Lengkap Sesuai KTP / Paspor:</label>
                    <input
                      type="text"
                      value={regForm.namaLengkap}
                      onChange={(e) => setRegForm({ ...regForm, namaLengkap: e.target.value })}
                      placeholder="Contoh: Mutiah Salsabila"
                      required
                      className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] font-medium outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-semibold text-[#414941] block mb-1">NIK / No. Identitas:</label>
                      <input
                        type="text"
                        value={regForm.nik}
                        onChange={(e) => setRegForm({ ...regForm, nik: e.target.value })}
                        placeholder="16 digit NIK"
                        required
                        className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] font-mono outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#414941] block mb-1">No. WhatsApp / HP:</label>
                      <input
                        type="tel"
                        value={regForm.telepon}
                        onChange={(e) => setRegForm({ ...regForm, telepon: e.target.value })}
                        placeholder="0812-xxxx-xxxx"
                        required
                        className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#414941] block mb-1">Alamat Email Aktif:</label>
                    <input
                      type="email"
                      value={regForm.email}
                      onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                      placeholder="email@example.com"
                      required
                      className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-semibold text-[#414941] block mb-1">Kota / Kabupaten Asal:</label>
                      <input
                        type="text"
                        value={regForm.asalKota}
                        onChange={(e) => setRegForm({ ...regForm, asalKota: e.target.value })}
                        placeholder="Balikpapan"
                        required
                        className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#414941] block mb-1">Provinsi Asal:</label>
                      <select
                        value={regForm.provinsiAsal}
                        onChange={(e) => setRegForm({ ...regForm, provinsiAsal: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] outline-none"
                      >
                        <option value="Kalimantan Timur">Kalimantan Timur</option>
                        <option value="Kalimantan Barat">Kalimantan Barat</option>
                        <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                        <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                        <option value="Kalimantan Utara">Kalimantan Utara</option>
                        <option value="DKI Jakarta">DKI Jakarta</option>
                        <option value="Jawa Barat">Jawa Barat</option>
                        <option value="Jawa Timur">Jawa Timur</option>
                        <option value="Lainnya">Lainnya / Luar Negeri</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#414941] block mb-1">Tipe / Kategori Ekowisatawan:</label>
                    <select
                      value={regForm.tipeWisatawan}
                      onChange={(e) => setRegForm({ ...regForm, tipeWisatawan: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] outline-none"
                    >
                      <option value="Ekowisatawan Mandiri / Peneliti Konservasi">Ekowisatawan Mandiri / Peneliti Konservasi</option>
                      <option value="Wisatawan Nusantara / Keluarga Lestari">Wisatawan Nusantara / Keluarga Lestari</option>
                      <option value="Pelajar / Mahasiswa Riset Keanekaragaman">Pelajar / Mahasiswa Riset Keanekaragaman</option>
                      <option value="Relawan Reboisasi &amp; Adat Dayak">Relawan Reboisasi &amp; Adat Dayak</option>
                    </select>
                  </div>
                </div>

                {/* 2. Rencana Wilayah Tujuan */}
                <div className="space-y-2 bg-white p-3 rounded-2xl border border-[#003317]/10 shadow-xs">
                  <span className="text-[11px] font-bold text-[#003317] uppercase tracking-wider block">
                    2. Rencana Wilayah Kunjungan di Kalimantan
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {["Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara"].map(p => {
                      const isChecked = regForm.provinsiTujuan.includes(p);
                      return (
                        <label key={p} className="flex items-center space-x-2 text-[11px] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {
                              if (isChecked) {
                                setRegForm({ ...regForm, provinsiTujuan: regForm.provinsiTujuan.filter(x => x !== p) });
                              } else {
                                setRegForm({ ...regForm, provinsiTujuan: [...regForm.provinsiTujuan, p] });
                              }
                            }}
                            className="w-4 h-4 text-[#174b2a] rounded accent-[#174b2a]"
                          />
                          <span className={isChecked ? 'font-bold text-[#003317]' : 'text-[#414941]'}>{p}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Kontak Darurat Rimba */}
                <div className="space-y-2 bg-white p-3 rounded-2xl border border-[#003317]/10 shadow-xs">
                  <span className="text-[11px] font-bold text-[#003317] uppercase tracking-wider block">
                    3. Kontak Darurat di Rimba (Emergency)
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-semibold text-[#414941] block mb-1">Nama Kontak:</label>
                      <input
                        type="text"
                        value={regForm.kontakDarurat.nama}
                        onChange={(e) => setRegForm({
                          ...regForm,
                          kontakDarurat: { ...regForm.kontakDarurat, nama: e.target.value }
                        })}
                        placeholder="Hj. Ratna Dewi"
                        className="w-full px-2.5 py-1.5 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-[#414941] block mb-1">Hubungan / Relasi:</label>
                      <input
                        type="text"
                        value={regForm.kontakDarurat.relasi}
                        onChange={(e) => setRegForm({
                          ...regForm,
                          kontakDarurat: { ...regForm.kontakDarurat, relasi: e.target.value }
                        })}
                        placeholder="Orang Tua / Saudara"
                        className="w-full px-2.5 py-1.5 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] outline-none"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="text-[10px] font-semibold text-[#414941] block mb-1">No. HP Darurat:</label>
                      <input
                        type="tel"
                        value={regForm.kontakDarurat.telepon}
                        onChange={(e) => setRegForm({
                          ...regForm,
                          kontakDarurat: { ...regForm.kontakDarurat, telepon: e.target.value }
                        })}
                        placeholder="0811-xxxx-xxxx"
                        className="w-full px-2.5 py-1.5 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold text-[#414941] block mb-1">Catatan Medis / Alergi:</label>
                    <input
                      type="text"
                      value={regForm.catatanMedis}
                      onChange={(e) => setRegForm({ ...regForm, catatanMedis: e.target.value })}
                      placeholder="Tidak ada alergi berat"
                      className="w-full px-2.5 py-1.5 rounded-xl bg-[#ebf7ea] border border-[#c1c9bf] focus:border-[#003317] text-[#141e16] outline-none"
                    />
                  </div>
                </div>

                {/* 4. Ikrar 4 Komitmen Ekowisatawan Lestari */}
                <div className="space-y-2 bg-[#ebf7ea] p-3 rounded-2xl border border-[#003317]/15 shadow-xs">
                  <span className="text-[11px] font-bold text-[#003317] uppercase tracking-wider block">
                    4. Ikrar Komitmen Etika Hijau Kalimantan
                  </span>
                  <div className="space-y-1.5 text-[11px]">
                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={regForm.ikrarLestari.bebasPlastik}
                        onChange={(e) => setRegForm({
                          ...regForm,
                          ikrarLestari: { ...regForm.ikrarLestari, bebasPlastik: e.target.checked }
                        })}
                        className="w-4 h-4 text-[#174b2a] rounded accent-[#174b2a] mt-0.5"
                      />
                      <span className="text-[#141e16]">Komitmen nol sampah plastik sekali pakai di cagar alam</span>
                    </label>

                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={regForm.ikrarLestari.hormatiAdat}
                        onChange={(e) => setRegForm({
                          ...regForm,
                          ikrarLestari: { ...regForm.ikrarLestari, hormatiAdat: e.target.checked }
                        })}
                        className="w-4 h-4 text-[#174b2a] rounded accent-[#174b2a] mt-0.5"
                      />
                      <span className="text-[#141e16]">Menghormati hukum adat, tetua, dan etika Rumah Betang Dayak</span>
                    </label>

                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={regForm.ikrarLestari.jagaJarakSatwa}
                        onChange={(e) => setRegForm({
                          ...regForm,
                          ikrarLestari: { ...regForm.ikrarLestari, jagaJarakSatwa: e.target.checked }
                        })}
                        className="w-4 h-4 text-[#174b2a] rounded accent-[#174b2a] mt-0.5"
                      />
                      <span className="text-[#141e16]">Menjaga jarak aman min. 5 meter dari orangutan &amp; satwa rimba</span>
                    </label>

                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={regForm.ikrarLestari.dukungUMKM}
                        onChange={(e) => setRegForm({
                          ...regForm,
                          ikrarLestari: { ...regForm.ikrarLestari, dukungUMKM: e.target.checked }
                        })}
                        className="w-4 h-4 text-[#174b2a] rounded accent-[#174b2a] mt-0.5"
                      />
                      <span className="text-[#141e16]">Mendukung pengrajin kriya dan UMKM lokal secara adil</span>
                    </label>
                  </div>
                </div>

                {/* Submit and Cancel Buttons */}
                <div className="pt-2 flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsRegisterModalOpen(false)}
                    className="flex-1 py-2.5 bg-white border border-[#003317]/20 text-[#414941] rounded-xl font-bold cursor-pointer hover:bg-slate-50 transition-all"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-[#174b2a] text-white rounded-xl font-bold hover:bg-[#123d21] shadow-md transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">save</span>
                    <span>Simpan Registrasi</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* MODAL: KARTU PASPOR DIGITAL EKOWISATAWAN BORNEO      */}
        {/* ==================================================== */}
        {isPassportCardModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/75 backdrop-blur-md animate-fadeIn">
            <div className="bg-[#0e2716] text-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl border-2 border-[#b1f2b4]/40 flex flex-col relative">
              
              {/* Dayak Talawang Background Watermark */}
              <div 
                className="absolute inset-0 opacity-25 bg-cover bg-center pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: "url('/assets/aistudio/Dayak_cc0a579c.jpeg')" }}
              />

              {/* Close Button Top Right */}
              <button
                onClick={() => setIsPassportCardModalOpen(false)}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>

              <div className="relative z-10 p-5 space-y-4">
                
                {/* Header Header Brand */}
                <div className="text-center space-y-1 border-b border-white/20 pb-3">
                  <div className="inline-flex items-center space-x-1.5 bg-[#b1f2b4] text-[#003317] px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[13px]">verified</span>
                    <span>KARTU RESMI EKOWISATAWAN</span>
                  </div>
                  <h3 className="text-[18px] font-extrabold tracking-tight text-white">PASPOR HIJAU BORNEO</h3>
                  <p className="text-[10px] text-[#dae6d9] max-w-xs mx-auto">
                    Kemitraan Balai Konservasi Alam &amp; Lembaga Adat Dayak Kalimantan
                  </p>
                </div>

                {/* Profile Badge & Avatar */}
                <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-2xl border border-white/15">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#174b2a] to-[#254d32] border-2 border-[#b1f2b4] flex items-center justify-center font-extrabold text-[22px] text-[#b1f2b4] shadow-md shrink-0">
                    MS
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] text-[#b1f2b4] uppercase font-bold tracking-wider block">Pemegang Paspor:</span>
                    <h4 className="text-[16px] font-extrabold text-white truncate">{registrationData.namaLengkap}</h4>
                    <p className="text-[11px] text-[#dae6d9] font-mono">NIK: {registrationData.nik}</p>
                    <p className="text-[10px] text-[#ffdcbf]">{registrationData.asalKota}, {registrationData.provinsiAsal}</p>
                  </div>
                </div>

                {/* Passport Meta Info */}
                <div className="grid grid-cols-2 gap-2 text-[10px] bg-black/30 p-3 rounded-xl border border-white/10 font-mono">
                  <div>
                    <span className="text-[#dae6d9]/70 block">NO. PASPOR:</span>
                    <span className="text-white font-bold text-[11px]">{registrationData.nomorKartuDigital}</span>
                  </div>
                  <div>
                    <span className="text-[#dae6d9]/70 block">ID REGISTRASI:</span>
                    <span className="text-[#b1f2b4] font-bold text-[11px]">{registrationData.id}</span>
                  </div>
                  <div>
                    <span className="text-[#dae6d9]/70 block">STATUS IZIN:</span>
                    <span className="text-emerald-300 font-bold">{registrationData.statusVerifikasi}</span>
                  </div>
                  <div>
                    <span className="text-[#dae6d9]/70 block">BERLAKU:</span>
                    <span className="text-white">s.d. 31 Des 2026</span>
                  </div>
                </div>

                {/* Simulated QR Code for Field Ranger Scanning */}
                <div className="bg-white p-3 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-32 h-32 bg-[#003317] rounded-xl p-2 flex items-center justify-center shadow-inner">
                    <svg className="w-28 h-28 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4-2h2v2h-2v-2zm4-4h2v2h-2V8zm-2 4h2v2h-2v-2zm-2-2h2v2h-2v-2zm4 4h2v2h-2v-2zm2-2h2v2h-2v-2zm-6 6h2v2h-2v-2zm4 0h2v2h-2v-2z" />
                    </svg>
                  </div>
                  <p className="text-[10px] font-mono font-bold text-[#003317] mt-1.5 tracking-wider">
                    VERIFIED-RANGER-BORNEO
                  </p>
                  <p className="text-[9px] text-[#414941]">Pindai untuk otorisasi masuk zona konservasi &amp; pos adat</p>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-1">
                  <button
                    onClick={handleDownloadPassport}
                    className="w-full py-2.5 bg-[#b1f2b4] text-[#003317] rounded-xl text-[12px] font-extrabold flex items-center justify-center space-x-1.5 shadow-md hover:bg-white transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Unduh Kartu Paspor (PNG / PDF)</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setIsPassportCardModalOpen(false);
                        handleOpenRegisterModal();
                      }}
                      className="py-2 bg-white/15 hover:bg-white/25 text-white rounded-xl text-[11px] font-bold flex items-center justify-center space-x-1 cursor-pointer transition-all border border-white/20"
                    >
                      <span className="material-symbols-outlined text-[15px]">edit</span>
                      <span>Edit Data</span>
                    </button>
                    <button
                      onClick={() => {
                        showToast("Tautan izin digital disalin ke clipboard!");
                      }}
                      className="py-2 bg-white/15 hover:bg-white/25 text-white rounded-xl text-[11px] font-bold flex items-center justify-center space-x-1 cursor-pointer transition-all border border-white/20"
                    >
                      <span className="material-symbols-outlined text-[15px]">share</span>
                      <span>Bagikan</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* FLOATING TOAST NOTIFICATION */}
        {toastMessage && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 max-w-xs w-[90%] bg-[#29332a] text-[#e8f4e7] px-4 py-2.5 rounded-2xl shadow-xl text-center text-[12px] font-semibold flex items-center justify-center space-x-2 transition-all animate-bounce">
            <span className="material-symbols-outlined text-[#b1f2b4] text-[18px]">check_circle</span>
            <span>{toastMessage}</span>
          </div>
        )}

      </div>
    </div>
  );
}
