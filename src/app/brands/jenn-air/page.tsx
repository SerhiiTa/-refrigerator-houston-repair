import type { Metadata } from 'next'
import Link from 'next/link'
import { repairCases } from '@/data/repairCases'
import RepairCaseCard from '@/components/RepairCaseCard'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Jenn-Air Refrigerator Repair in Houston, TX | Built-In Specialists',
  description:
    'Expert Jenn-Air refrigerator repair in Houston, TX. Built-in, counter-depth, and column models. Same-day service. Call (346) 512-3688.',
}

const commonProblems = [
  'Refrigerator not cooling',
  'Freezer not freezing',
  'Ice maker not working',
  'Water dispenser issues',
  'Strange noises from compressor or fan',
  'Temperature fluctuations',
]

const popularModels = ['JB36SSFXDA', 'JRFL36AHX', 'JS48PPDUDB', 'JB36ITWXF', 'JS36PPDUDB']

export default function JennAirBrandPage() {
  const cases = repairCases.filter(rc => rc.brandSlug === 'jenn-air')

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/brands" className="hover:text-brand-blue">Brands</Link> / Jenn-Air
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            Jenn-Air Refrigerator Repair<br className="hidden md:block" /> in Houston
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mb-8">
            Jenn-Air built-in and counter-depth refrigerators are premium appliances found in Houston&apos;s finest
            kitchens. Our certified technicians handle every Jenn-Air model with factory-level expertise and OEM parts.
          </p>
          <a href="tel:3465123688" className="btn-primary text-base px-8 py-4">
            📞 Call (346) 512-3688
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12">
          {/* Common Problems */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">
              Common Jenn-Air Problems We Fix
            </h2>
            <ul className="space-y-3">
              {commonProblems.map(p => (
                <li key={p} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-blue mt-0.5 font-bold">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Models */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">
              Popular Jenn-Air Models We Service
            </h2>
            <div className="flex flex-wrap gap-2">
              {popularModels.map(m => (
                <span
                  key={m}
                  className="bg-brand-light text-brand-blue text-sm font-semibold px-3 py-1.5 rounded-lg border border-blue-100"
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-8 bg-brand-gray rounded-2xl p-6">
              <div className="font-display font-bold text-brand-dark mb-2">Don&apos;t see your model?</div>
              <p className="text-gray-600 text-sm mb-4">
                We service all Jenn-Air refrigerator models. Call us to confirm availability.
              </p>
              <a href="tel:3465123688" className="btn-primary text-sm">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Cases */}
      {cases.length > 0 && (
        <section className="py-16 bg-brand-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="section-title mb-8">Real Jenn-Air Repair Cases in Houston</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map(rc => (
                <RepairCaseCard key={rc.slug} rc={rc} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Need Jenn-Air Refrigerator Repair?"
        subtitle="Expert technicians, genuine parts, warranty on repairs."
      />
    </>
  )
}
