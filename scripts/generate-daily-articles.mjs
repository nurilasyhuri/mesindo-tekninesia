import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const artikelDir = path.join(projectRoot, 'src', 'content', 'artikel');

function getIndonesianDate(date = new Date()) {
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  const wibDate = new Date(utc + (3600000 * 7));
  const day = wibDate.getDate();
  const month = months[wibDate.getMonth()];
  const year = wibDate.getFullYear();
  return `${day} ${month} ${year}`;
}

const NATIONWIDE_TABLE = `## Tabel Jangkauan Workshop & Tim On-Site Machining Se-Indonesia

Mesindo Tekninesia melayani overhaul workshop, dynamic balancing di lapangan, rewinding motor listrik, dan on-site line boring ke seluruh koridor industri Nusantara:

| Wilayah / Koridor | Kawasan Industri & Klaster Energi | Layanan Prioritas Lapangan | Moda Mobilisasi Alat | Estimasi Respon | Status Layanan |
|---|---|---|---|---|:---:|
| **Koridor Cilegon & Jabodetabek** | Krakatau Steel, KIIC Karawang, Jababeka, MM2100 | Rewinding HV Motor, On-site Dynamic Balancing | Armada Mobil Service Engineer & Crane | 2 – 4 Jam Siaga | Siap Eksekusi 24/7 |
| **Koridor Jawa Timur** | Rungkut SIER, Manyar JIIPE Gresik, Tuban Semen | Overhaul Gearbox Industri, In-situ Line Boring | Pick-up Tooling & Truk Workshop | Hari yang Sama | Siap Eksekusi 24/7 |
| **Koridor Cilacap & Jawa Tengah** | Kilang RU IV Cilacap, Kendal KIK, PLTU Batang | Alignment Poros Pompa Multistage, Balancing Fan | Armada Mobil Khusus Diagnostic | 1 Hari Kerja | Siap Eksekusi 24/7 |
| **Koridor Sumatera** | Kawasan Medan KIM, Dumai PKS Sawit, Palembang Pupuk | Overhaul Mesin PKS, Thermal Spray Shaft, HV Motor | Truk Ekspedisi & Pesawat Teknisi | 1 – 2 Hari Kerja | Siap Eksekusi 24/7 |
| **Koridor Kalimantan & IKN** | Balikpapan Kariangau, Bontang LNG, Sangatta Tambang | Re-bushing Excavator, Overhaul Generator Turbin | Kargo Udara Tooling & Kontainer Laut | 2 – 4 Hari Kerja | Siap Eksekusi 24/7 |
| **Koridor Sulawesi & Maluku** | Morowali IMIP Smelter, Pomalaa Kolaka, Weda Bay IWIP | Line Boring Heavy Frame, Balancing Rotor Blower | Tim Terbang Flight Dedicated + Cargo | 2 – 4 Hari Kerja | Siap Eksekusi 24/7 |
| **Koridor Papua Raya** | Timika Grasberg, Sorong Galangan Kapal, Jayapura | Overhaul Pompa Slurry Tambang, Heavy Machining | Ekspedisi Udara Kargo Khusus | 3 – 5 Hari Kerja | Siap Eksekusi 24/7 |`;

const INDUSTRIAL_HUBS = [
  { name: 'Cikarang & Karawang', region: 'Kawasan Jababeka, EJIP, KIIC & Suryacipta', province: 'Jawa Barat', plants: 'pabrik perakitan otomotif, baja canai dingin, stamping press, dan manufaktur elektronik', problem: 'beban getaran vibrasi konstan dan keausan bearing kecepatan tinggi' },
  { name: 'Cilegon', region: 'Kawasan Krakatau Steel, Ciwandan & Bojonegara', province: 'Banten', plants: 'industri baja terintegrasi, pabrik petrokimia, dan PLTU batubara pesisir', problem: 'paparan uap kimia agresif, suhu operasi panas tinggi, dan korosi air laut' },
  { name: 'Surabaya & Gresik', region: 'Kawasan SIER, Margomulyo & Manyar JIIPE', province: 'Jawa Timur', plants: 'smelter tembaga konsentrat, pabrik pupuk kimia, semen, dan galangan kapal docking', problem: 'beban torsi berat continue, abrasi debu silika, dan lonjakan arus start-up mesin' },
  { name: 'Cilacap', region: 'Kawasan Industri Cilacap & Area Kilang RU IV', province: 'Jawa Tengah', plants: 'kilang pengolahan minyak bumi, terminal bahan bakar curah, dan pembangkit PLTU', problem: 'standar keamanan ledakan (explosion proof) dan integritas mekanikal kritis tanpa toleransi kebocoran' },
  { name: 'Batam', region: 'Batamindo Mukakuning & Shipyard Kabil Tanjung Uncang', province: 'Kepulauan Riau', plants: 'galangan kapal lepas pantai, fabrikasi oil rig, dan perakitan presisi semikonduktor', problem: 'toleransi bubut mikrometer ketat standar DNV/Lloyds Register dan korosi atmosfer bahari' },
  { name: 'Balikpapan', region: 'Kariangau Interport & Kawasan Workshop Migas', province: 'Kalimantan Timur', plants: 'bengkel rekayasa alat berat tambang, kilang migas RU V, dan logistik IKN', problem: 'keausan impak ekstrem akibat lumpur batubara dan deformasi struktural rangka' },
  { name: 'Morowali', region: 'Kawasan Industri Terpadu IMIP Bahodopi', province: 'Sulawesi Tengah', plants: 'pabrik smelter nikel RKEF, pabrik stainless steel hot rolled coil, dan PLTU captive', problem: 'temperatur lelehan logam ekstrem > 1.200°C dan beban kerja konstan non-stop 365 hari' },
  { name: 'Konawe', region: 'Kawasan Industri Smelter VDNI & OSS Morosi', province: 'Sulawesi Tenggara', plants: 'fasilitas pirometalurgi nikel pig iron (NPI) dan rotary kiln pembakaran bijih', problem: 'deformasi termal roller kiln, aus gear girth gergasi, dan vibrasi unbalance blower' },
  { name: 'Weda Bay (Halmahera Tengah)', region: 'Kawasan Industri Teluk Weda (IWIP)', province: 'Maluku Utara', plants: 'smelter nikel laterit pengolahan baterai EV dan pembangkit listrik pulau', problem: 'lokasi remote kepulauan terpencil yang menuntut perbaikan in-situ cepat tanpa kirim jauh' },
  { name: 'Bontang', region: 'Kawasan Industri Pupuk Kaltim & Kilang LNG Badak', province: 'Kalimantan Timur', plants: 'pabrik pupuk urea-amonia bertekanan tinggi dan train pencairan gas alam cair', problem: 'putaran rotor turbin gas multi-stage hingga 12.000 RPM dengan toleransi getaran mikron' },
  { name: 'Medan & Belawan', region: 'Kawasan Industri Medan (KIM 1–4) & Mabar', province: 'Sumatera Utara', plants: 'pabrik oleokimia turunan sawit, pakan ternak terpadu, dan turbin uap pabrik sawit', problem: 'asam lemak sawit korosif dan kontaminasi air kondensat pada bearing gearbox' },
  { name: 'Dumai & Riau', region: 'Pelabuhan Ekspor CPO Pelintung & Kawasan Lubuk Gaung', province: 'Riau', plants: 'refinery minyak kelapa sawit terbesar di Indonesia dan pabrik pulp and paper', problem: 'keausan ulir screw press sawit dan vibrasi unbalance fan ID fan boiler biomassa' },
  { name: 'Palembang', region: 'Kawasan Industri Pusri Kertapati & Sungai Gerong', province: 'Sumatera Selatan', plants: 'pabrik pupuk nitrogen, stockpile conveyor batubara, dan pemintalan serat sintetis', problem: 'abrasi debu batubara hitam pekat yang menyumbat pori isolasi kumparan motor listrik' },
  { name: 'Kendal & Semarang', region: 'Kawasan Industri Kendal (KIK) & Candi', province: 'Jawa Tengah', plants: 'pabrik tekstil modern, komponen furnitur kayu presisi, dan industri baterai lithium', problem: 'tuntutan efisiensi energi motor listrik IE3/IE4 dan stabilitas dynamic balancing rol silinder' },
  { name: 'Sidoarjo & Mojokerto', region: 'Kawasan Berbek Industri & Ngoro Industrial Park (NIP)', province: 'Jawa Timur', plants: 'pabrik peleburan baja tulangan, keramik ubin lantai, dan kemasan plastik fleksibel', problem: 'beban kejut dinamis (shock load) transmisi gearbox roll mill dan abrasi roller pembakar' },
  { name: 'Tuban', region: 'Kawasan Pabrik Semen Tuban & Pelabuhan Semen', province: 'Jawa Timur', plants: 'fasilitas penggilingan semen raw mill, ball mill clinker, dan kiln putar', problem: 'benturan bola baja penghancur clinker dan temperatur gas buang berdebu kasar' },
  { name: 'Sangatta & Kutai Timur', region: 'Kawasan Pertambangan Batubara KPC Pit Pelikan', province: 'Kalimantan Timur', plants: 'armada dump truck ultra-class 400 ton, hydraulic excavator 800 ton, dan overland conveyor', problem: 'pin bushing oval pada boom bucket excavator dan kerusakan poros shaft drive pulley' },
  { name: 'Timika', region: 'Kawasan Pengolahan Konsentrat Grasberg Portsite Amamapare', province: 'Papua Tengah', plants: 'fasilitas konsentrator bijih tembaga-emas, slurry pipeline, dan filter press concentrator', problem: 'slurry lumpur bijih abrasif yang mengikis impeler pompa sentrifugal secara masif' },
  { name: 'Tangerang & Serang', region: 'Kawasan Industri Manis, Cikande & Kragilan', province: 'Banten', plants: 'pabrik kertas daur ulang raksasa, rolling mill besi beton, dan kimia dasar', problem: 'air limbah kimia asam dan poros roll press silinder kertas rentan korosi pitting' },
  { name: 'Bekasi & Cibitung', region: 'Kawasan MM2100 & Hyundai Deltamas', province: 'Jawa Barat', plants: 'pabrik permesinan presisi CNC, transmisi gearbox, dan industri suku cadang', problem: 'akurasi geometri poros toleransi h6/js6 dan kekasaran permukaan super halus Ra < 0.4' },
  { name: 'Bogor & Gunung Putri', region: 'Citeureup & Kawasan Narogong', province: 'Jawa Barat', plants: 'pabrik semen portland, kabel listrik tembaga, dan manufaktur cat otomotif', problem: 'kelembapan udara tinggi lereng pegunungan yang menurunkan tahanan isolasi motor listrik' },
  { name: 'Bandung & Cimahi', region: 'Kawasan Industri Batujajar, Pasteur & Leuwigajah', province: 'Jawa Barat', plants: 'industri pencelupan garmen (dyeing), boiler uap batubara, dan turbin hydro micro', problem: 'uap air panas caustic soda dan keausan mekanikal pompa sirkulasi kimia' },
  { name: 'Makassar & Maros', region: 'Kawasan KIMA Daya & Semen Tonasa Pangkep', province: 'Sulawesi Selatan', plants: 'pabrik terigu gandum bulk, semen terak, dan cold storage perikanan ekspor', problem: 'tepung gandum eksplosif dan motor kompresor pendingin amonia bocor kompresi' },
  { name: 'Banjarmasin & Asam-Asam', region: 'Trisakti Pelabuhan & PLTU Asam-Asam Kalsel', province: 'Kalimantan Selatan', plants: 'barge loader batubara, floating crane tongkang, dan boiler turbin PLTU', problem: 'keausan selongsong poros kapal propeller shaft akibat gesekan air sungai berlumpur' },
  { name: 'Pontianak & Ketapang', region: 'Kawasan Smelter Alumina WHW Tayan & Kendawangan', province: 'Kalimantan Barat', plants: 'pemurnian bauksit menjadi Chemical Grade Alumina (CGA) dan pabrik PKS', problem: 'larutan kaustik panas digestion autoclave yang memicu stress corrosion cracking (SCC)' },
  { name: 'Cirebon & Indramayu', region: 'Kawasan PLTU Cirebon Power & Kilang Balongan', province: 'Jawa Barat', plants: 'pembangkit listrik superkritis ultra-supercritical dan kilang catalytic cracking', problem: 'tekanan uap uap superheater > 240 bar dan temperatur uap turbin > 560°C' },
  { name: 'Bengkulu & Lubuklinggau', region: 'Pulau Baai & Perkebunan Sawit Bukit Barisan', province: 'Bengkulu', plants: 'terminal bongkar muat batubara dan rantai pasok pabrik minyak sawit mentah', problem: 'kerusakan bearing transmisi screw conveyor dan unbalance fan fiber cyclone' },
  { name: 'Tarakan & Nunukan', region: 'Kawasan Pesisir Juata & Fasilitas Pengeboran Tarakan', province: 'Kalimantan Utara', plants: 'pompa angguk pengeboran minyak bumi (sucker rod pump) dan pengolahan udang beku', problem: 'beban siklik reciprocating fatik lelah logam dan karat garam pesisir' },
  { name: 'Bitung', region: 'Kawasan Ekonomi Khusus (KEK) Bitung & Pelabuhan Samudera', province: 'Sulawesi Utara', plants: 'pabrik pengalengan ikan tuna ekspor, refinery minyak kelapa kopra, dan galangan kapal', problem: 'kebocoran mechanical seal pompa transfer brine water dan aus ring kompresor' },
  { name: 'Sorong', region: 'Kawasan KEK Sorong & Galangan Perkapalan Raja Ampat', province: 'Papua Barat Daya', plants: 'fasilitas maintenance kapal kargo tol laut dan workshop fabrikasi baja perintis', problem: 'keausan poros baling-baling kapal dan perbaikan in-situ tanpa fasilitas dry-dock besar' }
];

const REPAIR_ARCHETYPES = [
  {
    slugSuffix: 'rewinding-overhaul-motor-listrik-high-voltage-6kv',
    serviceTitle: 'Rewinding & Overhaul Motor Listrik High Voltage (HV 3.3 kV – 11 kV)',
    seoKeyword: 'rewinding motor listrik high voltage',
    category: 'electrical',
    tags: ['rewinding motor listrik hv', 'overhaul motor listrik 6kv', 'vpi vacuum pressure impregnation', 'insulation class h', 'uji surge test motor'],
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'pemulihan tahanan isolasi kumparan stator yang terbakar (*insulation breakdown*) akibat lonjakan tegangan, penuaan termal, atau kontaminasi debu konduktif tanpa merusak laminasi inti besi silikon',
    sopFocus: 'Pembersihan laminasi stator core dengan metode pyrolytic burn-out terkontrol di bawah 370°C, rewinding kawat tembaga enamel ganda Grade 200°C, proses perendaman resin epoksi VPI (Vacuum Pressure Impregnation), dan pemanggangan oven otomatis.',
    tableSpec: [
      ['Uji Tahanan Isolasi (Insulation Resistance)', 'Megger Digital 5.000 V / 10.000 V DC', 'Nilai IR wajib > 1.000 MΩ pada suhu acuan 40°C'],
      ['Polarization Index (PI) & DAR Test', 'Rasio pembacaan menit ke-10 vs menit ke-1', 'Nilai indeks polarisasi PI wajib > 2.0 (IEEE 43-2000)'],
      ['Surge Comparison Voltage Test', 'Pemberian pulsa tegangan tinggi frekuensi kilohertz', 'Bentuk kurva gelombang antar fasa wajib identik simetris'],
      ['Tan-Delta & Partial Discharge (PD)', 'Evaluasi rongga mikro di dalam resin isolasi', 'Mendeteksi peluahan parsial sebelum motor dihidupkan'],
      ['No-Load Run Test & Bearing Vibration', 'Pengujian putaran kosong tegangan penuh 6.000V', 'Vibrasi mekanikal wajib berada di bawah 1.5 mm/s RMS']
    ]
  },
  {
    slugSuffix: 'dynamic-balancing-onsite-impeller-fan-blower-rotor',
    serviceTitle: 'Jasa Dynamic Balancing On-Site Impeller Blower, Fan & Rotor Turbin',
    seoKeyword: 'dynamic balancing onsite',
    category: 'balancing',
    tags: ['dynamic balancing onsite', 'balancing impeller blower', 'vibrasi fan boiler', 'iso 1940 grade g2.5', 'analisis spektrum fft'],
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'penghilangan massa unbalance pada bilah kipas atau poros putar langsung di dudukannya tanpa perlu membongkar unit dari pondasi pabrik (*in-situ field balancing*), mencegah kerontokan bearing dan keretakan struktur pondasi',
    sopFocus: 'Pemasangan akselerometer piezoelectric dan tachometer laser optik, pengukuran spektrum getaran FFT (Fast Fourier Transform) 1X RPM, kalkulasi bobot koreksi polar vektor, dan pengelasan bobot penyeimbang berstandar ketat.',
    tableSpec: [
      ['Standar Keseimbangan Dinamik', 'ISO 1940-1 Grade G2.5 (Blower) / G1.0 (Turbin)', 'Getaran turun drastis hingga di bawah ambang batas bahaya'],
      ['Peralatan Diagnostic Lapangan', 'Vibration Analyzer Dual-Channel + Optical Trigger', 'Akurasi pembacaan sudut fasa hingga ketelitian 1 derajat'],
      ['Koreksi Bidang Penyeimbang', 'Single-Plane (Static) atau Dual-Plane (Dynamic)', 'Menghilangkan gaya unbalance sentrifugal dan couple moment'],
      ['Waktu Pengerjaan di Tapak', 'Hanya 2 – 4 Jam per unit mesin', 'Pabrik tidak perlu downtime berhari-hari untuk lepas pasang'],
      ['Laporan Sertifikasi Uji', 'Vibration Baseline Before vs After Report', 'Lengkap dengan grafik spektrum spektral domain frekuensi']
    ]
  },
  {
    slugSuffix: 'overhaul-gearbox-helical-planetary-industri-heavy-duty',
    serviceTitle: 'Jasa Service & Overhaul Gearbox Industri (Helical, Bevel & Planetary)',
    seoKeyword: 'overhaul gearbox industri',
    category: 'mechanical',
    tags: ['service gearbox industri', 'overhaul gearbox flender', 'gearbox sew eurodrive', 'backlash roda gigi', 'alignment poros laser'],
    heroImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'reparasi menyeluruh transmisi roda gigi industri yang mengalami gejala panas berlebih (*overheating*), bunyi dengung benturan roda gigi (*abnormal noise*), keausan permukaan gigi pitting, atau kebocoran pelumas oli seal',
    sopFocus: 'Pembongkaran total housing, pembersihan ultrasonic kerak oli gosong, inspeksi NDT dye penetrant pada gigi mahkota, penggantian bearing presisi SKF/FAG kelas clearance C3, pengaturan contact pattern pola kontak gigi, dan laser shaft alignment.',
    tableSpec: [
      ['Pemeriksaan Pola Kontak Gigi', 'Aplikasi pasta Prussian Blue / Dykem', 'Kontak gigi minimal 75% lebar permukaan aktif'],
      ['Pengukuran Backlash Antar Gigi', 'Dial indicator presisi 0.01 mm', 'Sesuai tabel toleransi pabrikan (Flender, SEW, Hansen)'],
      ['Pemasangan Bearing Presisi', 'Metode pemanasan induksi (Induction Heater)', 'Bebas benturan palu yang merusak race bearing'],
      ['Penggantian Seal Pelumas', 'Double-Lip FKM Viton Oil Seal', 'Tahan temperatur oli panas hingga 180°C anti-bocor'],
      ['Uji Beban & Temperatur Run-Test', 'Running test 2 – 4 jam dengan termografi FLIR', 'Suhu oli stabil di bawah 65°C tanpa getaran liar']
    ]
  },
  {
    slugSuffix: 'jasa-bubut-cnc-shaft-poros-panjang-machining-presisi',
    serviceTitle: 'Jasa Bubut CNC & Rekayasa Poros Panjang (Shaft Machining) Presisi Tinggi',
    seoKeyword: 'jasa bubut cnc poros panjang',
    category: 'machining',
    tags: ['bubut poros panjang', 'machining cnc presisi', 'rekayasa shaft pabrik', 'toleransi h6 bubut', 'material vcn 150 s45c'],
    heroImage: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'manufaktur pembuatan baru atau perbaikan poros transmisi panjang hingga 6 meter untuk roll crusher, drive shaft conveyor, agitator mixer, dan poros baling-baling kapal dengan ketepatan geometri tanpa run-out bending',
    sopFocus: 'Pemilihan material baja paduan mutu tinggi (VCN 150, S45C, AISI 4140, Stainless SUS 316), pembubutan dengan steady rest penopang getaran, proses grinding silindris super halus, dan pengujian run-out kelurusan dial gauge.',
    tableSpec: [
      ['Kapasitas Panjang Pembubutan', 'Panjang Poros hingga 6.000 mm (6 Meter)', 'Diameter ayunan swing over bed hingga 1.200 mm'],
      ['Toleransi Dimensi Dudukan Bearing', 'Toleransi ISO h6 / k5 / m5 (+0.015 / +0.002 mm)', 'Pasang bearing presisi tidak kendor (*loose fit*)'],
      ['Toleransi Run-Out Kelurusan Poros', '< 0.02 mm sepanjang 3 meter', 'Mencegah getaran destruktif pada kopling perantara'],
      ['Kekasaran Permukaan Journal', 'Proses Silindrical Grinding Ra 0.4 – 0.8 µm', 'Permukaan cermin pelindung bibir oil seal'],
      ['Material Stok Tersertifikasi', 'VCN 150 / AISI 4340 Quenched & Tempered', 'Kekuatan tarik tinggi tahan beban torsi puntir kejut']
    ]
  },
  {
    slugSuffix: 'thermal-spray-hvof-coating-restorasi-poros-aus-pabrik',
    serviceTitle: 'Thermal Spray HVOF & Arc Coating Restorasi Poros Aus Tanpa Deformasi Panas',
    seoKeyword: 'thermal spray hvof restorasi poros aus',
    category: 'component',
    tags: ['thermal spray hvof', 'restorasi poros aus', 'cold metal spraying', 'pelapisan keramik tungstencarbide', 'reparasi shaft journal'],
    heroImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'mengembalikan dimensi poros bearing atau sleeve pompa yang tergores dan aus ke ukuran standar pabrikan tanpa risiko bengkok (*thermal distortion*) yang sering terjadi akibat metode las argon konvensional',
    sopFocus: 'Penyusutan diameter aus dengan bubut kasar, pembentukan alur mechanical lock grit blasting alumina corundum, penyemprotan partikel logam kecepatan supersonik HVOF suhu rendah (<120°C pada benda kerja), dan finish grinding presisi.',
    tableSpec: [
      ['Karakteristik Suhu Benda Kerja', 'Suhu Substrat Terjaga Dingin (< 120°C)', 'Struktur kristal logam induk tidak berubah getas'],
      ['Kekuatan Ikatan Lapisan (Bond Strength)', 'Sangat Kuat: > 70 – 80 MPa (HVOF System)', 'Anti-terkelupas meskipun terpapar beban impak tinggi'],
      ['Pilihan Serbuk Pelapis (Coating)', 'Tungsten Carbide (WC-Co-Cr) / Stainless Steel / Keramik', 'Kekerasan mencapai 60 – 72 HRC tahan gesekan abrasi'],
      ['Porositas Lapisan Metal', 'Sangat Rapat: Densitas > 99% (< 1% Porositas)', 'Kedap cairan kimia dan uap minyak korosif'],
      ['Efisiensi Biaya Dibanding Poros Baru', 'Menghemat Biaya 50% – 70% dari Beli Shaft Baru', 'Waktu perbaikan hanya 2–3 hari kerja']
    ]
  },
  {
    slugSuffix: 'on-site-machining-line-boring-dan-flange-facing-lapangan',
    serviceTitle: 'Jasa Line Boring In-Situ & Flange Facing Mesin Industri On-Site',
    seoKeyword: 'line boring insitu flange facing',
    category: 'machining',
    tags: ['line boring insitu', 'flange facing lapangan', 'on-site machining', 're-bushing dudukan pin', 'machining tanpa bongkar'],
    heroImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'pemesinan lubang bore dudukan pin alat berat, engsel kapal roro, housing turbin, serta pembentukan ulang alur gerigi gramophone permukaan flange pipa gas/uap langsung di lokasi proyek tanpa perlu memindahkan komponen raksasa ke bengkel',
    sopFocus: 'Pemasangan portable line boring rig dengan pemandu centering laser mandiri, sistem pengelasan otomatis spiral bore welder untuk penambahan daging logam aus, pemotongan pahat bubut mikrometer, dan flange facing rotari portabel.',
    tableSpec: [
      ['Diameter Jangkauan Line Boring', 'Mulai dari Ø 45 mm hingga Ø 1.200 mm', 'Akurasi kebulatan lubang silinder hingga 0.02 mm'],
      ['Flange Facing Permukaan Pipa', 'Diameter Flange Ø 100 mm hingga Ø 2.500 mm', 'Membentuk alur spiral serrated finish standar ASME B16.5'],
      ['Sistem Tambah Daging Lubang', 'Automated Spiral Bore Welding Machine', 'Pengelasan memutar homogen bebas cacat porosity'],
      ['Portabilitas Peralatan Lapangan', 'Unit Kompak Modular Mudah Dibawa ke Tambang & Kapal', 'Mampu menjangkau sudut sempit dan posisi vertikal/horizontal'],
      ['Waktu Penyelamatan Downtime', 'Memangkas Waktu Mobilisasi hingga 80%', 'Unit mesin raksasa dapat langsung kembali beroperasi']
    ]
  },
  {
    slugSuffix: 'fabrikasi-drum-rotary-dryer-dan-belt-conveyor-industri',
    serviceTitle: 'Fabrikasi Drum Rotary Dryer & Sistem Belt Conveyor Industri Heavy-Duty',
    seoKeyword: 'fabrikasi rotary dryer belt conveyor',
    category: 'component',
    tags: ['rotary dryer pengering pasir', 'fabrikasi belt conveyor', 'drum pengering sawit', 'roll conveyor heavy duty', 'desain material handling'],
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'pengadaan unit pengering putar continuous drum dryer untuk material curah (pasir silika, serbuk kayu biomassa, pupuk granul, ampas kelapa sawit) serta sistem transfer conveyor berdaya tahan abrasi tinggi',
    structDetail: 'Fabrikasi tabung silinder baja plat boiler plate tebal 10–20 mm dengan sudu pengangkat (lifter flight) internal multi-pola, dua buah cincin ban baja tempa (tyre riding ring), sistem penggerak roda gigi payung (girth gear & pinion), dan roller pendukung trunnion berpelumas otomatis.',
    sopFocus: 'Pengelasan otomatis submerged arc welding (SAW) berstandar ASME, pengujian NDT radiographic testing pada sambungan melingkar silinder, penyeimbangan kelurusan roller trunnion, dan uji beban conveyor test.',
    tableSpec: [
      ['Dimensi Diameter Tabung Silinder', 'Ø 1.000 mm hingga Ø 3.200 mm Panjang 8 – 24 Meter', 'Kapasitas output 2 hingga 30 Ton material per jam'],
      ['Material Plat Dinding Silinder', 'Carbon Steel ASTM A516 Gr 70 / Stainless SUS 304', 'Tahan gesekan gesek kasar dan temperatur pembakaran'],
      ['Sistem Transmisi Penggerak', 'Girth Gear Besi Cor Nodular + Reducer Helical Motor', 'Transmisi putaran pelan 3–8 RPM dengan torsi raksasa'],
      ['Sistem Penyaluran Belt Conveyor', 'Belt Karet Kualitas EP 200/400 DIN Grade W/X', 'Tahan sobekan batu tajam dan minyak hidrokarbon'],
      ['Garansi Rekayasa Fabrikasi', 'Garansi Manufaktur Struktur 12 hingga 24 Bulan', 'Didukung ketersediaan suku cadang sparepart lokal cepat']
    ]
  }
];

function generateProceduralArticle(hub, archetype) {
  const slug = `${archetype.slugSuffix}-${hub.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const title = `${archetype.serviceTitle} di ${hub.name}: Solusi Rekayasa Presisi & Garansi Resmi`;
  const description = `Layanan spesialis ${archetype.seoKeyword} di ${hub.name}, ${hub.province} (${hub.region}). Menangani ${hub.plants} dengan standar teknis presisi ISO/IEEE dan tim engineer berpengalaman.`;

  const intro = `Sektor industri manufaktur, pertambangan, dan pengolahan energi di kawasan **${hub.name}, ${hub.province}**—khususnya pada sentra **${hub.region}**—mengoperasikan mesin-mesin kritis yang menopang lini produksi utama. Fasilitas seperti **${hub.plants}** bekerja di bawah tekanan operasional berat dengan kendala tipikal berupa **${hub.problem}**.

Kerusakan fatal pada *rotating equipment*—seperti motor induksi terbakar, gearbox transmisi rontok, poros as aus, atau getaran unbalance blower—bukan sekadar membutuhkan penggantian suku cadang biasa, melainkan menuntut rekayasa perbaikan presisi tingkat tinggi (*precision engineering*). **Mesindo Tekninesia** hadir memberikan solusi terintegrasi untuk layanan **${archetype.serviceTitle.toLowerCase()}** bagi para pelaku industri di kawasan **${hub.name}** dengan jaminan ketepatan dimensi, pengujian beban ketat, dan garansi operasional tertulis.`;

  const section1 = `Karakteristik mesin industri di kawasan **${hub.name}** memiliki tuntutan operasional yang sangat menantang. Paparan **${hub.problem}** pada fasilitas **${hub.plants}** menuntut setiap pekerjaan perbaikan dilakukan dengan kalkulasi rekayasa mekanikal dan elektrikal yang ketat.

Dalam menyelesaikan kendala ${archetype.coreNeed}, tim spesialis Mesindo Tekninesia menerapkan standar pengerjaan berkelas internasional. ${archetype.sopFocus} Setiap tahapan kerja diawasi langsung oleh quality control engineer bersertifikat, memastikan toleransi dimensi dan performa dinamis mesin Anda kembali ke kondisi prima setara standar baru pabrikan (*OEM specification*).`;

  const mandor1 = `**Kontrol Toleransi & Alignment Presisi:** Pada pemasangan mesin berputar di area ${hub.name}, pastikan kelurusan poros (*shaft alignment*) menggunakan laser alignment dual-axis dengan toleransi sudut dan offset di bawah 0.05 mm. Ketidaksejajaran poros sekecil 0.1 mm akan melipatgandakan beban radial bearing dan memicu kegagalan mekanikal dini dalam hitungan minggu.`;
  const mandor2 = `**Inspeksi Berkala & Pengujian NDT (Non-Destructive Testing):** Sebelum melakukan perakitan akhir atau pengelasan penambahan daging pada komponen di ${hub.name}, lakukan uji NDT (Dye Penetrant atau Magnetic Particle Inspection) untuk memastikan tidak ada retak lelah mikro (*fatigue micro-cracks*) pada akar gigi atau fillet poros.`;

  const tableHeaderStr = `| ${archetype.tableSpec.map(item => item[0]).join(' | ')} |\n| ${archetype.tableSpec.map(() => '---').join(' | ')} |`;
  // Format table rows
  const row1 = archetype.tableSpec.map(item => item[1]).join(' | ');
  const row2 = archetype.tableSpec.map(item => item[2]).join(' | ');
  const tableRowsStr = `| ${row1} |\n| ${row2} |`;

  const steps = [
    {
      title: `Inspeksi Diagnostik & Analisis Kegagalan di ${hub.name}`,
      desc: `Pengukuran spektrum vibrasi FFT, visual boroskopik, uji tahanan elektrikal (surge & megger test), serta identifikasi akar penyebab kerusakan (*root cause analysis*).`
    },
    {
      title: `Pembongkaran Terstruktur & Pemetaan Dimensi Toleransi`,
      desc: `Disassembly menggunakan hidrolik puller, pembersihan ultrasonic part mekanik, dan pengukuran koordinat mikrometer pada journal bearing serta alur pasak.`
    },
    {
      title: `Eksekusi Rekayasa (Rewinding / Machining / Balancing Presisi)`,
      desc: `Proses pengerjaan teknis di workshop modern maupun on-site di tapak pabrik ${hub.name} menggunakan mesin CNC, balancing dinamik, atau oven VPI terkalibrasi.`
    },
    {
      title: `Uji Coba Tanpa Beban & Serah Terima Sertifikat Garansi`,
      desc: `No-load running test selama 2–4 jam, pemantauan kenaikan temperatur bearing via kamera termal FLIR, dan penyerahan laporan resmi parameter teknis lengkap.`
    }
  ];
  const stepsStr = steps.map((st, idx) => `${idx + 1}. **${st.title}:** ${st.desc}`).join('\n');

  const faqs = [
    {
      q: `Apakah Mesindo Tekninesia dapat mengirimkan tim darurat untuk penanganan on-site di ${hub.name}?`,
      a: `Ya, kami menyediakan layanan respon darurat (Emergency Breakdown Response) 24/7 dengan teknisi dan peralatan uji diagnostik portabel yang siap diberangkatkan langsung ke lokasi pabrik Anda di wilayah ${hub.name}.`
    },
    {
      q: `Apakah setiap pekerjaan perbaikan di Mesindo Tekninesia dilengkapi garansi resmi?`,
      a: `Setiap pekerjaan rewinding motor HV, overhaul gearbox, balancing, maupun machining mendapatkan garansi operasional tertulis selama 6 hingga 12 bulan kalender, didukung komitmen pendampingan saat start-up commissioning.`
    },
    {
      q: `Bagaimana prosedur pengiriman komponen mesin berukuran besar dari ${hub.name} ke workshop?`,
      a: `Kami bekerja sama dengan armada ekspedisi truk low-bed, tronton crane, dan asuransi pengangkutan alat berat untuk menjamin keamanan transportasi komponen mesin industri berbobot puluhan ton dari pabrik Anda hingga ke workshop kami.`
    }
  ];

  const faqsMarkdown = faqs.map(f => `### ${f.q}\n${f.a}`).join('\n\n');
  const schemaFaqs = faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a.replace(/\n/g, ' ').replace(/"/g, '\\"')
    }
  }));

  const content = `---
title: '${title.replace(/'/g, "''")}'
description: '${description.replace(/'/g, "''")}'
publishDate: '${getIndonesianDate()}'
author: 'Tim Engineering Mesindo Teknisia'
category: '${archetype.category}'
tags: [${[
  `mesin industri ${hub.name.toLowerCase()}`,
  archetype.seoKeyword,
  ...archetype.tags
].map(t => `'${t}'`).join(', ')}]
heroImage: '${archetype.heroImage}'
featured: false
---

# ${title}

${intro}

---

## 1. Analisis Rekayasa Mesin Industri di Kawasan ${hub.name}

${section1}

---

> ### Catatan Mandor & Poin Kritis Lapangan
> 1. ${mandor1}
>
> 2. ${mandor2}

---

## 2. Tabel Spesifikasi & Parameter Teknis Pengujian Mesindo

${tableHeaderStr}
${tableRowsStr}

---

## 3. SOP Pelaksanaan Perbaikan Presisi di Lapangan

${stepsStr}

---

${NATIONWIDE_TABLE}

---

## Tanya Jawab Teknis Rekayasa Mesin (FAQ)

${faqsMarkdown}

---

## Solusi Rekayasa Mesin Industri Presisi Bersama Mesindo Tekninesia

Hindari kerugian berulang akibat *downtime* mesin produksi di kawasan **${hub.name}**. Konsultasikan penanganan mesin industri Anda langsung bersama tim mechanical & electrical engineer kami:

- **Katalog Layanan Engineering**: [Lihat Seluruh Layanan Mesin](/layanan/)
- **Fasilitas Mesin & Alat Uji**: [Spesifikasi Workshop & Diagnostic](/fasilitas/)
- **Konsultasi WhatsApp**: [Hubungi Chief Engineer (0857-4188-3391)](https://wa.me/6285741883391?text=${encodeURIComponent(`Halo Mesindo Tekninesia, saya ingin konsultasi kebutuhan ${archetype.serviceTitle} untuk unit di ${hub.name}`)})

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": ${JSON.stringify(schemaFaqs, null, 2)}
}
\`\`\`
`;

  return {
    slug,
    title,
    content
  };
}

export function generateDailyArticles(count = 1) {
  console.log(`[ARTICLE-GENERATOR] Checking existing articles in ${artikelDir}...`);
  if (!fs.existsSync(artikelDir)) {
    fs.mkdirSync(artikelDir, { recursive: true });
  }

  const existingFiles = fs.readdirSync(artikelDir).filter((f) => f.endsWith('.md'));
  const existingSlugs = new Set(existingFiles.map((f) => f.replace(/\.md$/, '')));

  console.log(`[ARTICLE-GENERATOR] Found ${existingSlugs.size} existing articles.`);

  // Build programmatic matrix: 30 industrial hubs x 7 archetypes = 210 targeted articles
  const candidateTopics = [];
  for (const hub of INDUSTRIAL_HUBS) {
    for (const archetype of REPAIR_ARCHETYPES) {
      candidateTopics.push(generateProceduralArticle(hub, archetype));
    }
  }

  const availableTopics = candidateTopics.filter((art) => !existingSlugs.has(art.slug));

  if (availableTopics.length === 0) {
    console.log('[ARTICLE-GENERATOR] All 210+ programmatic topics already published!');
    return [];
  }

  const toPublish = availableTopics.slice(0, count);
  const generatedFiles = [];

  for (const item of toPublish) {
    const filePath = path.join(artikelDir, `${item.slug}.md`);
    fs.writeFileSync(filePath, item.content, 'utf8');
    console.log(`[ARTICLE-GENERATOR] Published new article: ${filePath}`);
    generatedFiles.push(filePath);
  }

  console.log(`[ARTICLE-GENERATOR] Successfully created ${generatedFiles.length} new article(s)!`);
  return generatedFiles;
}

// CLI execution support
const args = process.argv.slice(2);
let count = 1;
const countIdx = args.indexOf('--count');
if (countIdx !== -1 && args[countIdx + 1]) {
  count = parseInt(args[countIdx + 1], 10);
}

generateDailyArticles(count);
