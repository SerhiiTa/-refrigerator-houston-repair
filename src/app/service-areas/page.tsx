import type { Metadata } from 'next'
import Link from 'next/link'
import { serviceAreas } from '@/data/serviceAreas'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Refrigerator Repair Service Areas in Houston, TX',
  description:
    'We provide refrigerator repair throughout Houston and surrounding areas including Katy, Sugar Land, Spring, Memorial, Cypress, Richmond, Fulshear, and Seabrook.',
}

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-2 text-sm text-brand-blue font-semibold">Where We Work</div>
          <h1 className="section-title mb-4">Refrigerator Repair Service Areas</h1>
          <p className="text-gray-600 max-w-2xl">
            We serve Houston and all surrounding communities in the Greater Houston area. Fast response, same-day service available in most locations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map(area => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`} className="card p-6 group block">
                <div className="text-3xl mb-3">📍</div>
                <h2 className="font-display font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-blue transition-colors">
                  Refrigerator Repair in {area.name}
                </h2>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{area.intro}</p>
                <div className="text-brand-blue text-sm font-semibold">View service details →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
