import Link from 'next/link'
import type { RepairCase } from '@/data/repairCases'

const brandColors: Record<string, string> = {
  'Sub-Zero': 'bg-blue-600',
  'Thermador': 'bg-orange-500',
  'LG': 'bg-red-600',
  'Samsung': 'bg-blue-800',
  'GE': 'bg-blue-500',
  'Whirlpool': 'bg-teal-600',
  'KitchenAid': 'bg-red-800',
  'Viking': 'bg-gray-700',
}

const unsplashImages: Record<string, string> = {
  'Sub-Zero': 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80&auto=format&fit=crop',
  'LG': 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80&auto=format&fit=crop',
  'Thermador': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop',
  'Samsung': 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80&auto=format&fit=crop',
  'GE': 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80&auto=format&fit=crop',
  'Whirlpool': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
  'KitchenAid': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop',
  'Viking': 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80&auto=format&fit=crop',
}

export default function RepairCaseCard({ rc }: { rc: RepairCase }) {
  const badgeColor = brandColors[rc.brand] || 'bg-gray-600'
  const imageSrc = rc.image || unsplashImages[rc.brand] || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop'

  return (
    <Link href={`/repair-cases/${rc.slug}`} className="card group block">
      <div className="relative h-44 overflow-hidden">
        <img
          src={imageSrc}
          alt={rc.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className={`absolute top-3 left-3 ${badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider`}>
          {rc.brand}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-brand-dark text-base mb-2 group-hover:text-brand-blue transition-colors">{rc.title}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{rc.symptoms[0]}</p>
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <span>📍</span>
          <span>{rc.city}, TX</span>
        </div>
      </div>
    </Link>
  )
}
