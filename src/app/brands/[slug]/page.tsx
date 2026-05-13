import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { brands } from '@/data/brands'
import { repairCases } from '@/data/repairCases'
import RepairCaseCard from '@/components/RepairCaseCard'
import CTABanner from '@/components/CTABanner'

export async function generateStaticParams() {
  return brands.map(b => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const brand = brands.find(b => b.slug === params.slug)
  if (!brand) return {}
  return {
    title: `${brand.name} Refrigerator Repair in Houston, TX`,
    description: `Expert ${brand.name} refrigerator repair in Houston. ${brand.intro.slice(0, 120)}...`,
  }
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = brands.find(b => b.slug === params.slug)
  if (!brand) notFound()

  const cases = repairCases.filter(rc => brand.repairCaseSlugs.includes(rc.slug))

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/brands" className="hover:text-brand-blue">Brands</Link> / {brand.name}
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            {brand.name} Refrigerator Repair<br className="hidden md:block" /> in Houston
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mb-8">{brand.intro}</p>
          <a href="tel:3465123688" className="btn-primary text-base px-8 py-4">
            📞 Call (346) 512-3688
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12">
          {/* Common Problems */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">Common {brand.name} Problems We Fix</h2>
            <ul className="space-y-3">
              {brand.commonProblems.map(p => (
                <li key={p} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-blue mt-0.5 font-bold">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Models */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">Popular {brand.name} Models We Service</h2>
            <div className="flex flex-wrap gap-2">
              {brand.popularModels.map(m => (
                <span key={m} className="bg-brand-light text-brand-blue text-sm font-semibold px-3 py-1.5 rounded-lg border border-blue-100">
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-8 bg-brand-gray rounded-2xl p-6">
              <div className="font-display font-bold text-brand-dark mb-2">Don't see your model?</div>
              <p className="text-gray-600 text-sm mb-4">We service all {brand.name} models. Call us to confirm availability.</p>
              <a href="tel:3465123688" className="btn-primary text-sm">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Cases */}
      {cases.length > 0 && (
        <section className="py-16 bg-brand-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="section-title mb-8">Real {brand.name} Repair Cases in Houston</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map(rc => (
                <RepairCaseCard key={rc.slug} rc={rc} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`Need ${brand.name} Refrigerator Repair?`}
        subtitle="Expert technicians, genuine parts, warranty on repairs."
      />
    </>
  )
}
