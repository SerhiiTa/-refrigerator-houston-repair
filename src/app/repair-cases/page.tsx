import type { Metadata } from 'next'
import { repairCases } from '@/data/repairCases'
import RepairCaseCard from '@/components/RepairCaseCard'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Real Refrigerator Repair Cases in Houston, TX',
  description:
    'Browse real refrigerator repair cases from Houston and surrounding areas. See actual diagnoses, repairs performed, and parts replaced by our expert technicians.',
}

export default function RepairCasesPage() {
  return (
    <>
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-2 text-sm text-brand-blue font-semibold">Real Cases</div>
          <h1 className="section-title mb-4">Refrigerator Repair Cases in Houston</h1>
          <p className="text-gray-600 max-w-2xl">
            Real repair cases from real Houston customers. See exactly what problems we found, how we diagnosed them, and what repairs we performed.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairCases.map(rc => (
              <RepairCaseCard key={rc.slug} rc={rc} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
