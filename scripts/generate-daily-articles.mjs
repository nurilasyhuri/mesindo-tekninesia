import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const artikelDir = path.join(projectRoot, 'src', 'content', 'artikel');

const TOPIC_POOL = [
  {
    slug: 'fabrikasi-screw-conveyor-stainless-steel-serbuk-granul',
    title: 'Fabrikasi Screw Conveyor Stainless Steel SUS304 untuk Material Serbuk & Granul',
    description: 'Panduan teknis perancangan screw conveyor stainless steel industri makanan & kimia: perhitungan pitch spiral, debit ton per jam, motor gear, dan seal anti bocor.',
    category: 'Conveyor & Automation',
    tags: ['screw conveyor', 'conveyor stainless', 'screw feeder', 'mesin industri tepung'],
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    content: `# Fabrikasi Screw Conveyor Stainless Steel SUS304 untuk Material Serbuk & Granul

Dalam industri pengolahan tepung pangan, bumbu bubuk, pakan ternak, dan bahan kimia granul, memindahkan material curah kering (*dry bulk materials*) secara kontinu menuntut sistem konveyor yang kedap debu, higienis, dan tidak menyebabkan segregasi partikel. **Screw conveyor (ulir konveyor auger)** berbahan stainless steel food-grade SUS304 atau SUS316L merupakan pilihan paling efisien karena mampu memindahkan serbuk pada posisi horizontal maupun sudut inklinasi miring hingga 45 derajat tanpa tumpah dan tanpa menimbulkan polusi debu di lantai pabrik.

Namun, banyak kegagalan fabrikasi screw conveyor lokal terjadi karena salah memperhitungkan pitch ulir, clearance celah antara blade spiral dengan palung tabung (*trough clearance*), atau pemilihan seal poros yang bocor sehingga serbuk tepung masuk dan merusak bearing luar.

---

## 1. Rumus Kapasitas Debit Angkut Screw Conveyor

Kapasitas angkut teoritis screw conveyor dihitung berdasarkan volume sapuan ulir per putaran dikalikan dengan rasio pengisian palung (*trough loading ratio*):

\`\`\`
C = 60 x (π / 4) x (D² - d²) x P x N x ρ x ψ
\`\`\`

- **C**: Kapasitas pengangkutan material (kg/jam atau ton/jam)
- **D**: Diameter luar bilah spiral (flighting diameter, meter)
- **d**: Diameter pipa poros tengah (center pipe diameter, meter)
- **P**: Pitch langkah ulir (jarak antar daun spiral, biasanya P = D untuk standar)
- **N**: Putaran poros (RPM), disarankan 30–60 RPM untuk serbuk abrasif ringan
- **ρ**: Kerapatan curah material (*bulk density*, kg/m³, misal tepung terigu 550–600 kg/m³)
- **ψ**: Faktor pengisian palung (*loading efficiency*), wajib dijaga maksimal **30% hingga 45%** untuk serbuk halus agar material tidak terdorong meluap ke atas poros

---

> ### Catatan Mandor & Poin Kritis Lapangan
> 1. **Toleransi Celah (Clearance) Blade Spiral Terhadap Dinding Tabung**: Untuk serbuk halus (seperti tepung beras atau gula halus), celah antara bibir spiral luar dengan dinding trough stainless tidak boleh melebihi 3 mm hingga 5 mm. Bila celah terlalu longgar (>10 mm), serbuk akan terjepit di celah dinding, mengalami gesekan panas (*friction burn*), menghitam, dan menciptakan kerak keras yang membebani motor gear hingga trip overcurrent.
> 2. **Gunakan Air Purge Gland Packing Seal pada Ujung Poros**: Seal karet biasa (oil seal NBR) akan robek tergores partikel mikro tepung dalam waktu 2 bulan, memicu kebocoran tepung keluar dan mengotori ruang produksi. Gunakan stuffing box gland packing teflon (PTFE food grade) yang dilengkapi sambungan tiupan angin bertekanan positif (*air purge seal*) untuk mencegah serbuk masuk ke rumah bearing.

---

## 2. Tabel Rekomendasi Sudut Kemiringan & Penurunan Efisiensi

Ketika screw conveyor dipasang menanjak (*inclined screw conveyor*), gaya gravitasi menyebabkan material serbuk merosot mundur ke bawah (*material back-slip*), menurunkan kapasitas angkut secara drastis:

| Sudut Inklinasi | Faktor Koreksi Kapasitas | Penyesuaian Desain Spiral |
|---|---|---|
| **0° (Horizontal Penuh)** | 100% Kapasitas Normal | Standard pitch (P = D) |
| **10° – 15° (Tanjakan Ringan)** | 80% – 85% Kapasitas | Standard pitch |
| **20° – 30° (Tanjakan Sedang)** | 65% – 70% Kapasitas | Short pitch (P = 0.8 D) untuk menahan slip |
| **35° – 45° (Tanjakan Curam)** | 40% – 50% Kapasitas | Half pitch (P = 0.5 D) + Casing Pipa Tabung Penuh (Tubular) |

---

## Tabel Jangkauan Pengiriman Fabrikasi Mesin Se-Indonesia

Mesindo Teknisia melayani perancangan rekayasa CAD 3D, pemotongan laser fiber, pengerolan plat CNC, pengelasan TIG argon standar sanitary, hingga instalasi di lokasi pabrik:

| Wilayah / Koridor | Kawasan Industri Manufaktur | Karakteristik Material Pabrik | Moda Angkutan Logistik | Estimasi Lead Time | Status Layanan |
|---|---|---|---|---|:---:|
| **Koridor Jawa** | Jabodetabek, Surabaya, Pasuruan, Semarang | Industri makanan, farmasi, bumbu instan | Truk Flatbed Dedicated Mesindo | 2 – 4 Hari Kerja | Siap Survey & Uji FAT |
| **Koridor Sumatera** | Medan Deli, Lampung, Palembang, Padang | Pabrik pakan ternak, tapioka, kelapa sawit | Truk Fuso Antar Pulau & Kapal Ro-Ro | 4 – 7 Hari Kerja | Siap Survey & Uji FAT |
| **Koridor Kalimantan** | Balikpapan, Pontianak, Banjarmasin | Pengolahan pakan ikan, semen, pupuk | Ekspedisi Peti Kemas Laut Surabaya | 6 – 10 Hari Kerja | Siap Survey & Uji FAT |
| **Koridor Sulawesi** | Makassar, Palu, Bitung | Industri pengolahan jagung & tepung kelapa | Kargo Kapal Kontainer Cepat | 7 – 12 Hari Kerja | Siap Survey & Uji FAT |
| **Koridor Bali & Nusra** | Denpasar, Mataram, Sumbawa | Industri pengolahan kopi & pengeringan garam | Truk Angkutan Penyeberangan Ferry | 3 – 6 Hari Kerja | Siap Survey & Uji FAT |
| **Koridor Maluku & Papua** | Ambon, Sorong, Jayapura | Industri sagu modern & perikanan tepung | Jalur Tol Laut Logistik Kargo | 10 – 16 Hari Kerja | Siap Survey & Uji FAT |

---

## Tanya Jawab Teknis (FAQ)

### Mengapa harus memilih stainless steel SUS304 dibanding SUS316 untuk screw conveyor?
SUS304 sudah sangat mencukupi untuk hampir seluruh aplikasi tepung makanan, minuman, dan bahan kering dengan ketahanan korosi yang sangat baik dan biaya material lebih efisien. SUS316L wajib dipilih bila serbuk yang diangkut mengandung kadar garam tinggi (NaCl > 3%), bahan kimia asam klorida, atau proses yang melibatkan pencucian kimia sanitasi CIP asam pekat.

### Bagaimana cara membersihkan sisa tepung di dasar trough saat pergantian produk?
Kami merancang trough dengan opsi penutup bawah berengsel (*drop-bottom cleanout trough*) atau kran drainase sanitary di titik terendah, dilengkapi nosel semprot air bertekanan (*CIP spray ball*) sehingga operator bisa mencuci bersih bagian dalam konveyor dalam tempo 15 menit tanpa harus membongkar bilah spiral.

---

## Konsultasikan Rekayasa Mesin Industri Bersama Mesindo Teknisia

Tingkatkan throughput produksi dan standarisasi higienis pabrik Anda bersama tim workshop rekayasa mesin terpercaya:

- **Katalog Layanan Machining**: [Layanan Rekayasa & Fabrikasi Mesindo Teknisia](/layanan/)
- **Fasilitas Workshop**: [Mesin Bubut CNC & Milling Presisi](/fasilitas/)
- **Konsultasi WhatsApp**: [Hubungi Tim Engineer Mesindo Teknisia (0857-4188-3391)](https://wa.me/6285741883391?text=Halo%20Mesindo%20Teknisia,%20saya%20ingin%20konsultasi%20fabrikasi%20screw%20conveyor)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kapan harus memilih stainless SUS304 dibanding SUS316 untuk screw conveyor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SUS304 ideal untuk tepung dan pangan umum. SUS316L wajib bila mengangkut serbuk berkadar garam tinggi, asam kimiawi, atau sanitasi CIP berkala."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana membersihkan sisa serbuk saat pergantian produk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kami mendesain palung dengan drop-bottom cleanout trough berengsel atau spray ball CIP sehingga pencucian berlangsung cepat tanpa bongkar spiral."
      }
    }
  ]
}
\`\`\`
`
  },
  {
    slug: 'desain-fabrikasi-tangki-pressure-vessel-asme-industri-kimia',
    title: 'Desain & Fabrikasi Tangki Pressure Vessel Standar ASME untuk Industri Kimia & Makanan',
    description: 'Panduan teknis perancangan pressure vessel bertekanan: pemilihan plat baja boiler SA516 Gr 70 vs SUS316L, perhitungan tebal shell & head torispherical, serta uji NDT radiografi.',
    category: 'Machining & Fabrikasi',
    tags: ['pressure vessel', 'tangki bertekanan', 'fabrikasi tangki industri', 'standar asme boiler'],
    heroImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    content: `# Desain & Fabrikasi Tangki Pressure Vessel Standar ASME untuk Industri Kimia & Makanan

Mengoperasikan tangki bertekanan (*pressure vessel*) seperti tabung deaerator boiler, tangki reaktor kimia, tangki kompresor udara (*air receiver tank*), atau bejana autoklaf sterilisasi makanan membawa risiko keselamatan kerja level tertinggi di lantai pabrik. Kegagalan struktur akibat lasan yang retak halus (*micro-fissures*) atau penipisan dinding plat karena korosi dapat memicu ledakan dahsyat berenergi pneumatik tinggi.

Oleh karena itu, setiap tahapan fabrikasi bejana tekan wajib tunduk pada kaidah teknik mekanikal **ASME Boiler and Pressure Vessel Code (BPVC) Section VIII Division 1** dan standar ketenagakerjaan Disnaker (Riksa Uji K3).

---

## 1. Rumus Ketebalan Dinding Tangki Silinder (Cylindrical Shell Thickness)

Menghitung tebal plat minimal dinding tabung silinder yang menahan tekanan internal menggunakan formula ASME UG-27:

\`\`\`
t = (P x R) / (S x E - 0.6 x P) + CA
\`\`\`

- **t**: Ketebalan plat silinder minimum (inch atau mm)
- **P**: Tekanan desain maksimum yang diizinkan (*Internal Design Pressure*, psi atau bar)
- **R**: Jari-jari dalam tabung (*Inside Radius*, mm)
- **S**: Nilai tegangan tarik maksimum material yang diizinkan (*Maximum Allowable Stress Value*, MPa)
- **E**: Efisiensi sambungan las (*Joint Efficiency*), E = 1.0 bila seluruh jalur las diuji radiografi 100% (Full RT), atau E = 0.85 untuk pengujian spot RT
- **CA**: *Corrosion Allowance* (toleransi tambahan ketebalan untuk antisipasi korosi selama masa pakai 10–20 tahun, umumnya 1.5–3.0 mm)

---

> ### Catatan Mandor & Poin Kritis Lapangan
> 1. **Perhatikan Bentuk Tutup Ujung Tangki (Head Type)**: Tutup tangki bentuk piring datar (*flat head*) membutuhkan plat yang sangat tebal untuk menahan momen lentur. Selalu gunakan tutup cembung elipsoidal (2:1 Semi-Ellipsoidal Head) atau Torispherical Head (Klöpper Head) hasil proses flanging & dishing hidrolik. Bentuk lengkungan cembung menyalurkan tegangan secara seragam sebagai tegangan membran murni sehingga plat bisa 50% lebih tipis namun jauh lebih kokoh menahan tekanan.
> 2. **Prosedur Pengelasan Wajib Mengacu WPS / PQR Tersertifikasi**: Juru las (welder) yang mengerjakan sambungan longitudinal dan sirkumferensial pressure vessel wajib memiliki sertifikat kelas 1 Kemenaker. Sambungan akar (*root pass*) wajib menggunakan proses GTAW (TIG argon) dengan purging gas pelindung penuh, disusul pengisian SMAW elektroda low-hydrogen (E7018) atau SAW otomatis.

---

## 2. Pengujian Mutu Non-Destructive Testing (NDT) & Uji Tekan Hidrostatis

Sebelum bejana tekan diizinkan keluar dari workshop dan dikirim ke lokasi pabrik, rangkaian pengujian wajib dilalui:

1. **Visual & Dimensional Inspection**: Pengecekan ovalitas kebulatan tabung (*out-of-roundness*) dengan batas toleransi di bawah 1% diameter dalam.
2. **Non-Destructive Testing (NDT)**: Radiography Testing (RT) atau Ultrasonic Testing (UT) pada sambungan las untuk mendeteksi cacat tersembunyi seperti *lack of fusion*, *slag inclusion*, atau *porosity*.
3. **Hydrostatic Test (Uji Tekan Air)**: Bejana diisi air penuh dan dipompa hingga mencapai **1,3 hingga 1,5 kali tekanan desain** selama minimal 30–60 menit sambil dipantau oleh pressure gauge terkalibrasi untuk membuktikan tidak ada kebocoran atau deformasi permanen.

---

## Tabel Jangkauan Fabrikasi Bejana Tekan Se-Indonesia

| Wilayah / Koridor | Kawasan Industri Pengguna | Tipe Fasilitas & Fluida | Moda Transportasi Khusus | Estimasi Lead Time | Status Layanan |
|---|---|---|---|---|:---:|
| **Koridor Jawa** | Cilegon, Karawang, Tuban, Gresik, Pasuruan | Petrokimia, gas industri, pengolahan makanan | Truk Lowbed & Pengawalan Khusus | 2 – 5 Hari Kerja | Siap Rekayasa & Fabrikasi |
| **Koridor Sumatera** | Dumai, Sei Mangkei, Palembang, Cilegon-Baka | Pabrik oleokimia & kilang minyak sawit | Truk Trailer Tronton Antar Pulau | 4 – 8 Hari Kerja | Siap Rekayasa & Fabrikasi |
| **Koridor Kalimantan** | Bontang, Balikpapan Kariangau, Tarakan | Pabrik pupuk amonia, gas alam, workshop | Tongkang Flat Deck & Kapal Kargo | 7 – 12 Hari Kerja | Siap Rekayasa & Fabrikasi |
| **Koridor Sulawesi** | Morowali, Pomalaa, KIMA Makassar | Tangki autoclave industri pengolahan nikel | Kapal Kargo Berat Pelabuhan Makassar | 8 – 14 Hari Kerja | Siap Rekayasa & Fabrikasi |
| **Koridor Bali & Nusra** | Denpasar, Sumbawa Barat, Kupang | Pembangkit listrik diesel & instalasi gas | Truk Tronton Ekspedisi Ferry Laut | 4 – 7 Hari Kerja | Siap Rekayasa & Fabrikasi |
| **Koridor Maluku & Papua** | Bintuni, Sorong, Timika | Fasilitas pemrosesan LNG & konsentrat | Kargo Kapal Tol Laut Jalur Logistik | 12 – 18 Hari Kerja | Siap Rekayasa & Fabrikasi |

---

## Tanya Jawab Teknis (FAQ)

### Mengapa tangki bertekanan wajib dilengkapi katup pengaman Pressure Relief Valve (PRV)?
PRV adalah garis pertahanan terakhir untuk mencegah tangki meledak bila terjadi kegagalan sistem kontrol atau kebakaran eksternal. Katup ini disetel untuk membuka seketika (*pop-action*) saat tekanan internal mencapai set point desain, membuang fluida berlebih ke atmosfer atau sistem flare.

### Apakah Mesindo Teknisia melayani pengurusan izin Disnaker bejana tekan?
Ya. Seluruh unit tangki pressure vessel buatan kami dilengkapi Manufacturer Data Report (MDR), sertifikat material (*mill test certificate*), laporan uji NDT radiografi, berita acara hydrotest, dan sertifikasi kelayakan K3 dari Pengawas Spesialis Uap & Bejana Tekan Disnaker.

---

## Percayakan Fabrikasi Bejana Tekan Anda Kepada Ahli Rekayasa Presisi

Dapatkan tangki industri berstandar keselamatan tinggi dengan kalkulasi teknis software PV Elite terverifikasi:

- **Layanan Lengkap**: [Fasilitas & Layanan Fabrikasi Mesindo Teknisia](/layanan/)
- **Proyek Terkait**: [Fabrikasi Tangki Mixing Stainless SUS316L](/artikel/fabrikasi-tangki-mixing-stainless-steel-sus316-industri-farmasi/)
- **Kontak Engineer via WhatsApp**: [Hubungi 0857-4188-3391](https://wa.me/6285741883391?text=Halo%20Mesindo%20Teknisia,%20saya%20butuh%20fabrikasi%20pressure%20vessel)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Mengapa tangki bertekanan wajib dilengkapi Pressure Relief Valve (PRV)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PRV adalah pengaman mekanikal terakhir yang otomatis melepas tekanan berlebih bila terjadi lonjakan ekstrem guna mencegah tangki meledak."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah unit buatan Mesindo Teknisia dilengkapi izin Disnaker?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, setiap unit dilengkapi Manufacturer Data Report, hasil NDT radiografi, berita acara hydrotest, dan pengesahan K3 Disnaker."
      }
    }
  ]
}
\`\`\`
`
  }
];

export function generateDailyArticles(count = 1) {
  console.log(`[ARTICLE-GENERATOR] Checking existing articles in ${artikelDir}...`);
  if (!fs.existsSync(artikelDir)) {
    fs.mkdirSync(artikelDir, { recursive: true });
  }

  const existingFiles = fs.readdirSync(artikelDir).filter((f) => f.endsWith('.md'));
  const existingSlugs = new Set(existingFiles.map((f) => f.replace(/\.md$/, '')));

  console.log(`[ARTICLE-GENERATOR] Found ${existingSlugs.size} existing articles.`);

  const availableTopics = TOPIC_POOL.filter((t) => !existingSlugs.has(t.slug));

  if (availableTopics.length === 0) {
    console.log('[ARTICLE-GENERATOR] No new topics available in pool. All topics already published!');
    return [];
  }

  const toPublish = availableTopics.slice(0, count);
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const formattedDate = `${day} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;

  const generatedFiles = [];

  for (const item of toPublish) {
    const filePath = path.join(artikelDir, `${item.slug}.md`);
    const frontmatter = `---
title: '${item.title}'
description: '${item.description}'
publishDate: '${formattedDate}'
author: 'Tim Engineering Mesindo Teknisia'
category: '${item.category}'
tags: ${JSON.stringify(item.tags)}
heroImage: '${item.heroImage}'
---

`;
    const fullContent = frontmatter + item.content.trim() + '\n';
    fs.writeFileSync(filePath, fullContent, 'utf8');
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
