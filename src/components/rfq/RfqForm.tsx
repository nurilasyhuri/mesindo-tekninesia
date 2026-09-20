import { useState } from 'preact/hooks';
import { COMPANY_INFO } from '../../data/companyInfo';
import { generateWhatsAppRFQUrl, type RFQPayload } from '../../utils/whatsapp';

const EQUIPMENT_OPTIONS = [
  { id: 'electro-motor', label: 'Electro Motor', badge: 'LV / HV / DC' },
  { id: 'generator', label: 'Generator', badge: 'Stator / Rotor' },
  { id: 'transformer', label: 'Transformer', badge: 'Power / Distribution' },
  { id: 'balancing', label: 'Dynamic Balancing', badge: 'Hingga 150 Ton' },
  { id: 'machining', label: 'Industrial Machining', badge: 'Lathe 6.7m & 15m' },
  { id: 'mechanical', label: 'Pump / Compressor / Valve', badge: 'Mekanikal' },
];

export default function RfqForm() {
  const [equipmentType, setEquipmentType] = useState('Electro Motor');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [powerCapacity, setPowerCapacity] = useState('');
  const [voltage, setVoltage] = useState('');
  const [rpm, setRpm] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Overhaul & Rewinding');
  const [issueDescription, setIssueDescription] = useState('');
  const [location, setLocation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const payload: RFQPayload = {
      equipmentType,
      brand,
      model,
      powerCapacity,
      voltage,
      rpm,
      serviceNeeded,
      issueDescription: `${issueDescription}${companyName ? ` (Perusahaan: ${companyName})` : ''}`,
      location,
      source: 'web-rfq-tool',
    };

    const url = generateWhatsAppRFQUrl(payload);
    window.open(url, '_blank');
  };

  const handleCopySummary = () => {
    const summary = [
      `REQUEST QUOTATION (RFQ) - ${COMPANY_INFO.name.toUpperCase()}`,
      `----------------------------------------`,
      `Perusahaan / Kontak: ${companyName || '-'}`,
      `Jenis Equipment: ${equipmentType}`,
      `Brand / Manufacturer: ${brand || '-'}`,
      `Model / Type: ${model || '-'}`,
      `Kapasitas / Daya: ${powerCapacity || '-'}`,
      `Tegangan (Voltage): ${voltage || '-'}`,
      `RPM: ${rpm || '-'}`,
      `Lingkup Pekerjaan: ${serviceNeeded}`,
      `Lokasi Equipment: ${location || '-'}`,
      `Kondisi / Gejala Kerusakan: ${issueDescription || '-'}`,
      `----------------------------------------`,
      `Email Penawaran: ${COMPANY_INFO.contact.salesEmail}`,
      `Hotline WA: ${COMPANY_INFO.contact.phoneFormatted}`,
    ].join('\n');

    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div class="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden font-sans">
      
      {/* Form Header */}
      <div class="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-800 border border-brand-200">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
          Formulir Permohonan Penawaran Teknis
        </span>
        <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-2">
          Request Quotation (RFQ) Equipment Industri
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Isi spesifikasi dasar mesin Anda. Format ini akan otomatis tersusun rapi untuk dikirimkan langsung ke tim engineering PT Mesindo Tekninesia via WhatsApp atau disalin ke dokumen RFQ perusahaan Anda.
        </p>
      </div>

      {/* Main Form Body */}
      <form onSubmit={handleSubmit} class="p-6 sm:p-8 space-y-7">
        
        {/* Step 1: Equipment Selection */}
        <div class="space-y-3">
          <label class="text-xs sm:text-sm font-bold text-slate-900 block">
            1. Pilih Kategori Equipment
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {EQUIPMENT_OPTIONS.map((item) => {
              const isSelected = equipmentType === item.label;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setEquipmentType(item.label)}
                  class={`p-3 rounded-xl border text-left transition-all cursor-pointer select-none ${
                    isSelected
                      ? 'bg-brand-50/80 border-brand-600 ring-1 ring-brand-600 text-slate-950'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span class="block text-xs font-bold">{item.label}</span>
                  <span class="block text-[10px] text-slate-500 mt-0.5">{item.badge}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Technical Specifications */}
        <div class="pt-5 border-t border-slate-200 space-y-4">
          <label class="text-xs sm:text-sm font-bold text-slate-900 block">
            2. Spesifikasi Teknis Mesin (Berdasarkan Nameplate)
          </label>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div>
              <label class="font-semibold text-slate-700 block mb-1">Brand / Manufacturer</label>
              <input
                type="text"
                value={brand}
                onInput={(e) => setBrand((e.target as HTMLInputElement).value)}
                placeholder="Contoh: Siemens, ABB, WEG, Toshiba"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
              />
            </div>

            <div>
              <label class="font-semibold text-slate-700 block mb-1">Model / Type Unit</label>
              <input
                type="text"
                value={model}
                onInput={(e) => setModel((e.target as HTMLInputElement).value)}
                placeholder="Contoh: 1LA8, H-compact, dsb"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
              />
            </div>

            <div>
              <label class="font-semibold text-slate-700 block mb-1">Kapasitas / Daya (Power)</label>
              <input
                type="text"
                value={powerCapacity}
                onInput={(e) => setPowerCapacity((e.target as HTMLInputElement).value)}
                placeholder="Contoh: 250 kW / 50 MW / 25 MVA"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
              />
            </div>

            <div>
              <label class="font-semibold text-slate-700 block mb-1">Tegangan Kerja (Voltage)</label>
              <input
                type="text"
                value={voltage}
                onInput={(e) => setVoltage((e.target as HTMLInputElement).value)}
                placeholder="Contoh: 380V (LV) / 6.6kV (HV) / 150kV"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
              />
            </div>

            <div>
              <label class="font-semibold text-slate-700 block mb-1">Kecepatan Putar (RPM)</label>
              <input
                type="text"
                value={rpm}
                onInput={(e) => setRpm((e.target as HTMLInputElement).value)}
                placeholder="Contoh: 1500 RPM / 3000 RPM"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
              />
            </div>

            <div>
              <label class="font-semibold text-slate-700 block mb-1">Lingkup Pekerjaan</label>
              <select
                value={serviceNeeded}
                onChange={(e) => setServiceNeeded((e.target as HTMLSelectElement).value)}
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 bg-white focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
              >
                <option value="Overhaul & Rewinding">Overhaul &amp; Rewinding Total</option>
                <option value="High Speed Balancing">High Speed / Dynamic Balancing</option>
                <option value="Condition Assessment / NDT">Testing &amp; Condition Assessment (EL CID / PD)</option>
                <option value="Industrial Machining">Industrial Machining / Bubut Raksasa</option>
                <option value="Transformer Oil Purification">Transformer Oil Purification &amp; Service</option>
                <option value="Mechanical Overhaul">Mechanical Overhaul (Pompa / Kompresor / Valve)</option>
                <option value="On-Site Emergency Engineering">On-Site Emergency Engineering Team</option>
              </select>
            </div>
          </div>
        </div>

        {/* Step 3: Issue Description & Location */}
        <div class="pt-5 border-t border-slate-200 space-y-4">
          <label class="text-xs sm:text-sm font-bold text-slate-900 block">
            3. Kerusakan, Lokasi &amp; Data Perusahaan
          </label>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label class="font-semibold text-slate-700 block mb-1">Nama Perusahaan / Instansi</label>
              <input
                type="text"
                value={companyName}
                onInput={(e) => setCompanyName((e.target as HTMLInputElement).value)}
                placeholder="Contoh: PT Pembangkit Nusantara / PT Pupuk ..."
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
              />
            </div>

            <div>
              <label class="font-semibold text-slate-700 block mb-1">Lokasi Pabrik / Plant Site</label>
              <input
                type="text"
                value={location}
                onInput={(e) => setLocation((e.target as HTMLInputElement).value)}
                placeholder="Contoh: Cilegon, Gresik, Bontang, Pekanbaru"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
              />
            </div>
          </div>

          <div class="text-xs">
            <label class="font-semibold text-slate-700 block mb-1">
              Gejala Kerusakan / Catatan Khusus
            </label>
            <textarea
              rows={3}
              value={issueDescription}
              onInput={(e) => setIssueDescription((e.target as HTMLTextAreaElement).value)}
              placeholder="Jelaskan anomali yang terjadi (misal: getaran tinggi di atas 8 mm/s, tripping pada relay diferensial, insulation megger drop di bawah 5 MOhm, bearing overheating, dsb)"
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div class="pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            class="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-brand-600 active:bg-brand-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all cursor-pointer"
          >
            <span>Kirim RFQ via WhatsApp Resmi</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleCopySummary}
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
          >
            <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Ringkasan RFQ'}</span>
          </button>
        </div>

        <p class="text-[11px] text-slate-400 text-center">
          Data teknis yang Anda kirimkan bersifat rahasia (Non-Disclosure Protection) dan hanya digunakan untuk penyusunan penawaran teknis resmi.
        </p>

      </form>
    </div>
  );
}
