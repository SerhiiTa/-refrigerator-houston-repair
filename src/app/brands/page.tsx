import type { Metadata } from 'next'
import Link from 'next/link'
import { brands } from '@/data/brands'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Refrigerator Brands We Repair in Houston',
  description:
    'We repair all major refrigerator brands in Houston — Sub-Zero, Thermador, LG, Samsung, GE, Whirlpool, KitchenAid, Viking and more. Expert technicians, genuine parts.',
}

export default function BrandsPage() {
  return (
    <>
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-2 text-sm text-brand-blue font-semibold">All Brands</div>
          <h1 className="section-title mb-4">Refrigerator Brands We Repair</h1>
          <p className="text-gray-600 max-w-2xl">
            From luxury built-in brands like Sub-Zero and Thermador to everyday brands like LG and Samsung — our technicians are trained and equipped for all major refrigerator manufacturers.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brands.map(brand => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="card p-6 group block"
              >
                <div className="text-4xl mb-3">❄</div>
                <h2 className="font-display font-bold text-brand-dark text-lg mb-1 group-hover:text-brand-blue transition-colors">
                  {brand.name}
                </h2>
                <p className="text-gray-500 text-sm mb-4">{brand.tagline}</p>
                <div className="text-brand-blue text-sm font-semibold">View repair info →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
