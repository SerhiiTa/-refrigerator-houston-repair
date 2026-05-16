export interface Technician {
  slug: string
  name: string
  title: string
  bio: string
  specialties: string[]
  certifications: string[]
  photo?: string
}

export const technicians: Technician[] = [
  {
    slug: 'serhii-t',
    name: 'Serhii T.',
    title: 'Lead Refrigeration Technician',
    bio: 'Serhii is a highly experienced refrigeration technician specializing in premium built-in brands including Sub-Zero, Thermador, Viking, and Bosch. With deep expertise in sealed system diagnostics and repair, he has restored hundreds of high-end refrigerators across the Houston area. Serhii is known for his meticulous diagnostic approach and transparent communication with customers.',
    specialties: ['Sub-Zero', 'Thermador', 'Bosch', 'Viking', 'Scotsman', 'Sealed System Repairs'],
    certifications: ['EPA 608 Universal Certification', 'Sub-Zero Certified Technician'],
    photo: '/images/og-banner.jpg',
  },
  {
    slug: 'alex-k',
    name: 'Alex K.',
    title: 'Refrigeration Technician',
    bio: 'Alex is a skilled refrigeration technician with broad experience across all major consumer brands. He specializes in LG linear compressor diagnostics, Samsung ice maker systems, and GE/Whirlpool cooling issues. Alex brings efficient, professional service to every repair call throughout the Houston area.',
    specialties: ['LG', 'Samsung', 'GE', 'Whirlpool', 'KitchenAid', 'Ice Maker Repair'],
    certifications: ['EPA 608 Universal Certification'],
  },
]
