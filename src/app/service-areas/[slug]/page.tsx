import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { serviceAreas } from '@/data/serviceAreas'
import CTABanner from '@/components/CTABanner'

export async function generateStaticParams() {
  return serviceAreas.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const area = serviceAreas.find(a => a.slug === params.slug)
  if (!area) return {}
  return {
    title: `Refrigerator Repair in ${area.name}, TX | (346) 512-3688`,
    description: area.intro,
  }
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = serviceAreas.find(a => a.slug === params.slug)
  if (!area) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/service-areas" className="hover:text-brand-blue">Service Areas</Link> / {area.name}
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            Refrigerator Repair in {area.name}, TX
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mb-8">{area.intro}</p>
          <a href="tel:3465123688" className="btn-primary text-base px-8 py-4">
            📞 Call (346) 512-3688
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12">
          {/* Local context */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Refrigerator Repair in {area.name}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{area.localContext}</p>

            <h3 className="font-display text-lg font-bold text-brand-dark mb-4">Common Problems in {area.name}</h3>
            <ul className="space-y-2">
              {area.commonProblems.map(p => (
                <li key={p} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-blue mt-0.5 font-bold">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Brands + Nearby */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-lg font-bold text-brand-dark mb-4">Brands We Service in {area.name}</h3>
              <div className="flex flex-wrap gap-2">
                {area.brandsServiced.map(b => {
                  const slug = b.toLowerCase().replace(/\s+/g, '-').replace(/·/g, '-')
                  return (
                    <Link key={b} href={`/brands/${slug}`} className="bg-brand-light text-brand-blue text-sm font-semibold px-3 py-1.5 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors">
                      {b}
                    </Link>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-brand-dark mb-4">Nearby Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {area.nearbyAreas.map(n => {
                  const slug = n.toLowerCase().replace(/\s+/g, '-')
                  const exists = serviceAreas.find(a => a.slug === slug)
                  return exists ? (
                    <Link key={n} href={`/service-areas/${slug}`} className="text-sm text-gray-600 hover:text-brand-blue border border-gray-200 px-3 py-1.5 rounded-lg transition-colors">
                      📍 {n}
                    </Link>
                  ) : (
                    <span key={n} className="text-sm text-gray-500 border border-gray-100 px-3 py-1.5 rounded-lg">📍 {n}</span>
                  )
                })}
              </div>
            </div>

            {area.zipCodes.length > 0 && (
              <div>
                <h3 className="font-display text-lg font-bold text-brand-dark mb-3">ZIP Codes We Cover</h3>
                <p className="text-sm text-gray-500">{area.zipCodes.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Need Refrigerator Repair in ${area.name}?`}
        subtitle="Fast response, expert technicians, all major brands."
      />
    </>
  )
}
