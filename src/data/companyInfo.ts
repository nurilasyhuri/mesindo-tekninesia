export interface WorkshopBranch {
  id: string;
  name: string;
  region: string;
  address: string;
  postalCode?: string;
  area?: string;
  isMainOffice?: boolean;
  capabilities: string[];
}

export const COMPANY_INFO = {
  name: 'PT Mesindo Tekninesia',
  legalName: 'PT Mesindo Tekninesia',
  shortName: 'Mesindo Tekninesia',
  tagline: 'Jasa Repair, Rewinding & Engineering Equipment Industri di Indonesia',
  establishedYear: 1994,
  corePillars: [
    'Repair',
    'Rewinding',
    'Overhaul',
    'Testing',
    'Balancing',
    'Machining',
    'Engineering',
  ],
  standards: [
    { name: 'IEEE', desc: 'Institute of Electrical and Electronics Engineers' },
    { name: 'IEC', desc: 'International Electrotechnical Commission' },
    { name: 'EASA', desc: 'Electrical Apparatus Service Association' },
    { name: 'ANSI / NEMA', desc: 'American National Standards Institute / NEMA' },
    { name: 'API', desc: 'American Petroleum Institute' },
    { name: 'NFPA', desc: 'National Fire Protection Association' },
    { name: 'VDE', desc: 'Verband der Elektrotechnik' },
  ],
  contact: {
    phone: '0851-8300-2070',
    phoneFormatted: '+62 851-8300-2070',
    mobile: '0851-8300-2070',
    mobileFormatted: '+62 851-8300-2070',
    email: 'mesindo@mesindotekninesia.com',
    salesEmail: 'ramli.adiputra@mesindotekninesia.com',
    whatsapp: '6285183002070',
    whatsappFormatted: '0851-8300-2070',
    workshopManager: 'Ir. Ramli Adi Putra, S.T., M.T.',
    director: 'Hartono',
  },
  collaborators: [
    { name: 'Powertech Lab Inc.', country: 'Canada', scope: 'Joint facility advanced generator evaluation & failure analysis' },
    { name: 'Volts Industry Inc.', country: 'Canada', scope: 'Technical support & failure data assessment' },
  ],
  authorizedPartners: ['TECO', 'Goltens'],
  associations: ['EASA (The Electro-Mechanical Authority)', 'AEMT (Association of Electrical and Mechanical Trades)'],
  certifications: [
    { code: 'ISO 9001:2015', name: 'Quality Management System', number: '190325006769K001' },
    { code: 'ISO 14001:2015', name: 'Environmental Management System', number: '1904010068914K001' },
    { code: 'ISO 45001:2018', name: 'Occupational Health and Safety', number: '1904010068945K001' },
  ],
  stats: [
    { value: '30+ Tahun', label: 'Pengalaman Sejak 1994' },
    { value: '25.000 M²', label: 'Total Area Workshop' },
    { value: '150 Ton', label: 'High Speed Balancing 20k RPM' },
    { value: '8 Cabang', label: 'Workshop Nasional' },
  ],
  workshops: [
    {
      id: 'jakarta-utara',
      name: 'Head Office & Main Workshop Jakarta Utara',
      region: 'DKI Jakarta',
      address: 'Jl. Rorotan IV No. 169, Cilincing, Jakarta Utara',
      postalCode: '14140',
      isMainOffice: true,
      area: '25.000 M² (10.000 M² Indoor + 15.000 M² Outdoor)',
      capabilities: ['Heavy Rewinding HV/LV', 'Dynamic Balancing 150 Ton (20.000 RPM Vacuum Chamber)', 'VPI Insulation Chamber', 'High Voltage Test Bench 3.3kV–15kV'],
    },
    {
      id: 'jakarta-timur',
      name: 'Branch Office Jakarta Timur',
      region: 'DKI Jakarta',
      address: 'Jl. Kayu Tinggi Raya No. 2–3, Cakung, Jakarta Timur',
      postalCode: '13910',
      isMainOffice: false,
      capabilities: ['Industrial Machining', 'Horizontal Lathe 15m (Dia 2m)', 'Vertical Lathe 6.7m (Tinggi 8m)', 'Mechanical Repair'],
    },
    {
      id: 'sidoarjo',
      name: 'Workshop Sidoarjo (Jawa Timur)',
      region: 'Jawa Timur',
      address: 'Jl. Surabaya–Mojokerto KM 39, Bakung Temenggungan, Balongbendo, Sidoarjo',
      postalCode: '61263',
      capabilities: ['Service Center Jawa Timur & Indonesia Timur', 'Motor & Generator Rewinding', 'Balancing Machine 20 Ton', 'On-Site Overhaul'],
    },
    {
      id: 'purwakarta',
      name: 'Workshop Purwakarta',
      region: 'Jawa Barat',
      address: 'Jl. Raya Cibungur, Purwakarta',
      area: '3.000 M² (Est. 2002)',
      capabilities: ['Manufacturing Plant Support', 'Pump, Turbocharger & Valve Repair', 'Industrial Machining', 'Overhaul Motor Industri'],
    },
    {
      id: 'demak',
      name: 'Workshop Demak (Jawa Tengah)',
      region: 'Jawa Tengah',
      address: 'Jl. Raya Dempet Wonosalam, Ds. Demung Kerang Kulon, Demak, Jawa Tengah',
      capabilities: ['Layanan Rewinding & Overhaul Jawa Tengah', 'Dynamic Balancing', 'Transformer Maintenance'],
    },
    {
      id: 'pekanbaru',
      name: 'Workshop Pekanbaru',
      region: 'Riau / Sumatera',
      address: 'Jl. Raya Panjang Okura, Tebing Tinggi, Okura, Kec. Rumbai Pesisir, Kota Pekanbaru',
      postalCode: '28262',
      capabilities: ['Oil & Gas Upstream/Downstream Support', 'Petrochemical Equipment Maintenance', 'On-Site Field Assessment & Alignment Laser'],
    },
    {
      id: 'makassar',
      name: 'Workshop Makassar / Maros',
      region: 'Sulawesi Selatan',
      address: 'Jl. H. Bahari–Bontotalasa, Maros, Makassar, Sulawesi Selatan',
      area: '5.000 M² (Est. 2024)',
      capabilities: ['Hub Layanan Sulawesi & Indonesia Timur', 'Traction Motor & Generator Repair', 'Dynamic Balancing 5 Ton & 20 Ton'],
    },
    {
      id: 'timika',
      name: 'Workshop Timika',
      region: 'Papua',
      address: 'Jl. Imam Bonjol No. 50, RT/RW 004/001, Kel. Karang Senang, Kec. Kuala Kencana Sp. 3, Timika',
      postalCode: '9996',
      capabilities: ['Mining & Heavy Industry Support', 'High Voltage Motor Overhaul', 'On-Site Inspection & Vibration Analysis'],
    },
  ] as WorkshopBranch[],
  industries: [
    {
      id: 'power-generation',
      title: 'Power Generation',
      desc: 'Repair, overhaul, inspection, dan testing generator, stator core, excitation system, motor sirkulasi, dan power transformer pada pembangkit listrik (PLTU, PLTG, PLTA, PLTD).',
      icon: 'zap',
    },
    {
      id: 'petrochemical',
      title: 'Petrochemical & Chemical',
      desc: 'Layanan engineering berkualifikasi tinggi untuk explosion-proof motor, kompresor gas, pompa proses kimia, dan sistem isolasi tahan zat korosif.',
      icon: 'flame',
    },
    {
      id: 'oil-and-gas',
      title: 'Oil & Gas (Upstream & Downstream)',
      desc: 'Overhaul turbin rotor, dynamic balancing shaft berkecepatan tinggi, assessment partial discharge, serta perawatan kompresor dan pompa onshore/offshore.',
      icon: 'droplet',
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Processing',
      desc: 'Dukungan berkala untuk motor penggerak utama, rolling mill, transformer distribusi, dan machining komponen presisi guna meminimalkan unplanned downtime.',
      icon: 'factory',
    },
    {
      id: 'railway',
      title: 'Railway & Traction',
      desc: 'Rekondisi dan rewinding traction motor kereta api, auxiliary generator, dynamic balancing wheelset & shaft, serta overhaul mekanikal sesuai standar keandalan armada.',
      icon: 'train',
    },
  ],
};
