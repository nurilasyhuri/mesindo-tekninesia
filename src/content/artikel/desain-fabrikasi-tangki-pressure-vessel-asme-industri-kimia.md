---
title: 'Desain & Fabrikasi Tangki Pressure Vessel Standar ASME untuk Industri Kimia & Makanan'
description: 'Panduan teknis perancangan pressure vessel bertekanan: pemilihan plat baja boiler SA516 Gr 70 vs SUS316L, perhitungan tebal shell & head torispherical, serta uji NDT radiografi.'
publishDate: '01 November 2026'
author: 'Tim Engineering Mesindo Teknisia'
category: 'Machining & Fabrikasi'
tags: ["pressure vessel","tangki bertekanan","fabrikasi tangki industri","standar asme boiler"]
heroImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80'
---

# Desain & Fabrikasi Tangki Pressure Vessel Standar ASME untuk Industri Kimia & Makanan

Mengoperasikan tangki bertekanan (*pressure vessel*) seperti tabung deaerator boiler, tangki reaktor kimia, tangki kompresor udara (*air receiver tank*), atau bejana autoklaf sterilisasi makanan membawa risiko keselamatan kerja level tertinggi di lantai pabrik. Kegagalan struktur akibat lasan yang retak halus (*micro-fissures*) atau penipisan dinding plat karena korosi dapat memicu ledakan dahsyat berenergi pneumatik tinggi.

Oleh karena itu, setiap tahapan fabrikasi bejana tekan wajib tunduk pada kaidah teknik mekanikal **ASME Boiler and Pressure Vessel Code (BPVC) Section VIII Division 1** dan standar ketenagakerjaan Disnaker (Riksa Uji K3).

---

## 1. Rumus Ketebalan Dinding Tangki Silinder (Cylindrical Shell Thickness)

Menghitung tebal plat minimal dinding tabung silinder yang menahan tekanan internal menggunakan formula ASME UG-27:

```
t = (P x R) / (S x E - 0.6 x P) + CA
```

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

```json
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
```
