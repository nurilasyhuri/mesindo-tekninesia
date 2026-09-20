import { COMPANY_INFO } from '../data/companyInfo';

export interface RFQPayload {
  equipmentType: string;
  brand?: string;
  model?: string;
  powerCapacity?: string;
  voltage?: string;
  rpm?: string;
  serviceNeeded?: string;
  issueDescription?: string;
  location?: string;
  source?: string;
}

export function generateWhatsAppRFQUrl(payload: RFQPayload): string {
  const lines: string[] = [
    `*FORM REQUEST QUOTATION (RFQ) - ${COMPANY_INFO.name.toUpperCase()}*`,
    `----------------------------------------`,
    `*Jenis Equipment:* ${payload.equipmentType || 'Electro Motor / Generator / Transformer / Rotating Equipment'}`,
  ];

  if (payload.brand) lines.push(`*Brand / Pabrikan:* ${payload.brand}`);
  if (payload.model) lines.push(`*Model / Type:* ${payload.model}`);
  if (payload.powerCapacity) lines.push(`*Kapasitas / Daya:* ${payload.powerCapacity}`);
  if (payload.voltage) lines.push(`*Tegangan Kerja (Voltage):* ${payload.voltage}`);
  if (payload.rpm) lines.push(`*Kecepatan (RPM):* ${payload.rpm}`);
  if (payload.serviceNeeded) lines.push(`*Lingkup Pekerjaan:* ${payload.serviceNeeded}`);
  if (payload.issueDescription) lines.push(`*Kondisi / Gejala Kerusakan:* ${payload.issueDescription}`);
  if (payload.location) lines.push(`*Lokasi Equipment / Pabrik:* ${payload.location}`);

  lines.push(`----------------------------------------`);
  lines.push(`Mohon informasi penawaran teknis, estimasi timeline pengerjaan, dan ketersediaan workshop/on-site team.`);
  if (payload.source) lines.push(`[Ref: ${payload.source}]`);

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${text}`;
}

export function generateGeneralInquiryUrl(source: string = 'website-header'): string {
  const text = encodeURIComponent(
    `Halo Tim Engineering ${COMPANY_INFO.name},\nSaya ingin berkonsultasi mengenai kebutuhan repair/overhaul/maintenance peralatan industri kami.\n[Ref: ${source}]`
  );
  return `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${text}`;
}
