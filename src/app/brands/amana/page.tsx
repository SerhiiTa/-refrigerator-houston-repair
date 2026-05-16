import type { Metadata } from 'next'
import Link from 'next/link'
import { repairCases } from '@/data/repairCases'
import RepairCaseCard from '@/components/RepairCaseCard'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Amana Refrigerator Repair in Houston, TX | Affordable Service',
  description:
    'Expert Amana refrigerator repair in Houston, TX. Top-freezer, side-by-side, and French door models. Same-day service. Call (346) 512-3688.',
}

const commonProblems = [
  'Refrigerator not cooling',
  'Freezer not freezing',
  'Ice maker not working',
  'Water dispenser issues',
  'Strange noises from compressor or fan',
  'Temperature fluctuations',
]

const popularModels = ['ART318FFDS', 'ABB1921BRM', 'ART316TWDS', 'ABB2224BRM', 'ARSE664BSS']

export default function AmanaBrandPage() {
  const cases = repairCases.filter(rc => rc.brandSlug === 'amana')

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/brands" className="hover:text-brand-blue">Brands</Link> / Amana
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            Amana Refrigerator Repair<br className="hidden md:block" /> in Houston
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mb-8">
            Amana refrigerators offer reliable performance at an affordable price point. Our technicians
            repair all Amana models throughout Houston with fast turnaround and transparent pricing.
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
              Common Amana Problems We Fix
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
              Popular Amana Models We Service
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
                We service all Amana refrigerator models. Call us to confirm availability.
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
            <h2 className="section-title mb-8">Real Amana Repair Cases in Houston</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map(rc => (
                <RepairCaseCard key={rc.slug} rc={rc} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Need Amana Refrigerator Repair?"
        subtitle="Expert technicians, genuine parts, warranty on repairs."
      />
    </>
  )
}
