export interface Technician {
  slug: string
  name: string
  title: string
  bio: string
  specialties: string[]
  certifications: string[]
  photo?: string
  areas?: string[]
}

export const technicians: Technician[] = [
  {
    slug: 'serhii-t',
    name: 'Serhii T.',
    title: 'Lead Refrigeration Technician',
    bio: 'Serhii is a highly experienced refrigeration technician specializing in premium and commercial refrigeration brands including Sub-Zero, Thermador, Viking, Bosch, and Scotsman. With deep expertise in sealed system diagnostics and repair, he has restored hundreds of refrigerators across the Houston area. Serhii is known for his meticulous diagnostic approach and transparent communication with customers.',
    specialties: ['Sub-Zero', 'Thermador', 'Bosch', 'Viking', 'Scotsman', 'Sealed System Repairs', 'R600a Systems'],
    certifications: [
      'Registered Air Conditioning and Refrigeration Technician',
      'Apprentice Electrician License',
      'Proficient Technician — Service Matters University (Whirlpool Corporation)',
    ],
    photo: '/images/technicians/serhii-t.jpeg',
  },
  {
    slug: 'alex-z',
    name: 'Alex Z.',
    title: 'Refrigeration Technician',
    bio: 'Alex is a highly skilled refrigeration technician with extensive experience across both consumer and high-end luxury appliance brands. He excels in sealed system diagnostics and repair — from refrigerant leak detection and evaporator replacement to compressor and inverter board diagnostics. Alex has hands-on expertise with premium brands including Sub-Zero, Thermador, Viking and Bosch, bringing the precision that luxury appliances demand. He is equally proficient with all major consumer brands including LG, Samsung, GE, Whirlpool and KitchenAid. Whether it\'s a complex dual-evaporator sealed system or an ice maker repair, Alex delivers fast, reliable service throughout the Houston area.',
    specialties: ['Sub-Zero', 'Thermador', 'Viking', 'Bosch', 'LG', 'Samsung', 'GE', 'Whirlpool', 'KitchenAid', 'Sealed System Repairs', 'Ice Maker Repair'],
    certifications: [
      'EPA Section 608 Type I Certification',
    ],
    photo: '/images/technicians/alex-z.jpeg',
  },
  {
    slug: 'alex-t',
    name: 'Alex',
    title: 'Refrigeration Technician',
    bio: 'Alex is a certified refrigeration technician at Refrigerator Houston Repair, specializing in Sub-Zero, Thermador, Viking, Bosch, KitchenAid.',
    specialties: [
      'Sub-Zero',
      'Thermador',
      'Viking',
      'Bosch',
      'KitchenAid',
      'Whirlpool',
      'GE',
      'LG',
      'Samsung',
      'Electrolux',
      'Maytag',
      'Frigidaire',
      'Scotsman',
    ],
    certifications: [
      'EPA Section 608 Certified',
    ],
    photo: '/images/technicians/alex-t.jpeg',
    areas: [
      'league-city',
      'clear-lake',
      'texas-city',
      'pearland',
      'houston',
      'friendswood',
      'kemah',
      'deer-park',
      'la-porte',
      'pasadena',
    ],
  },
  {
    slug: 'nik-t',
    name: 'NIK',
    title: 'Refrigeration Technician',
    bio: 'NIK is a certified refrigeration technician at Refrigerator Houston Repair, specializing in Sub-Zero, LG, Frigidaire, Kenmore, Samsung.',
    specialties: [
      'Sub-Zero',
      'LG',
      'Frigidaire',
      'Kenmore',
      'Samsung',
    ],
    certifications: [
      'EPA Section 608 Certified',
    ],
    photo: '/images/technicians/nik-t.jpeg',
    areas: [
      'houston',
      'katy',
      'sugar-land',
      'spring',
      'memorial',
      'cypress',
      'richmond',
      'fulshear',
    ],
  },
]
