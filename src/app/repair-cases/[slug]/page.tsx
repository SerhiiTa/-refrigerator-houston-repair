import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { repairCases } from '@/data/repairCases'
import CTABanner from '@/components/CTABanner'

export async function generateStaticParams() {
  return repairCases.map(rc => ({ slug: rc.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const rc = repairCases.find(r => r.slug === params.slug)
  if (!rc) return {}
  return {
    title: `${rc.brand} ${rc.model} Repair in ${rc.city}, TX | Refrigerator Houston Repair`,
    description: `Real repair case: ${rc.title} in ${rc.city}, TX. ${rc.diagnosis.slice(0, 120)}. Call (346) 512-3688 for same-day service.`,
    openGraph: {
      images: rc.image ? [rc.image] : [],
    },
  }
}

export default function RepairCasePage({ params }: { params: { slug: string } }) {
  const rc = repairCases.find(r => r.slug === params.slug)
  if (!rc) notFound()

  return (
    <>
      {/* Header */}
      <section className="bg-brand-gray py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-sm text-gray-500 mb-3">
            <Link href="/repair-cases" className="hover:text-brand-blue">Repair Cases</Link> / {rc.title}
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">{rc.brand}</span>
            <span className="bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded">Model: {rc.model}</span>
            <span className="text-gray-500 text-sm">📍 {rc.city}, TX</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark">{rc.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">

          {/* Photo */}
          {rc.image ? (
            <div className="rounded-2xl overflow-hidden h-80 shadow-md">
              <img
                src={rc.image}
                alt={rc.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center text-6xl">
              🔧
            </div>
          )}

          {/* Symptoms */}
          <div>
            <h2 className="font-display text-xl font-bold text-brand-dark mb-4">Customer Complaint / Symptoms</h2>
            <ul className="space-y-2">
              {rc.symptoms.map(s => (
                <li key={s} className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-500 mt-0.5">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Diagnosis */}
          <div className="bg-brand-light rounded-2xl p-6 border border-blue-100">
            <h2 className="font-display text-xl font-bold text-brand-dark mb-3">🔍 Diagnosis / Cause Found</h2>
            <p className="text-gray-700 leading-relaxed">{rc.diagnosis}</p>
          </div>

          {/* Repair */}
          <div>
            <h2 className="font-display text-xl font-bold text-brand-dark mb-3">🔧 Repair Performed</h2>
            <p className="text-gray-700 leading-relaxed">{rc.repairPerformed}</p>
          </div>

          {/* Parts */}
          <div>
            <h2 className="font-display text-xl font-bold text-brand-dark mb-4">🛒 Parts Replaced</h2>
            <ul className="space-y-2">
              {rc.partsReplaced.map(p => (
                <li key={p} className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500 font-bold">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Result */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h2 className="font-display text-xl font-bold text-green-800 mb-2">✅ Result</h2>
            <p className="text-green-700">{rc.result}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href={`/brands/${rc.brandSlug}`} className="btn-outline text-sm">
              More {rc.brand} Repairs →
            </Link>
            <Link href={`/service-areas/${rc.areaSlug}`} className="btn-outline text-sm">
              Refrigerator Repair in {rc.area} →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Need ${rc.brand} Refrigerator Repair?`}
        subtitle={`We serve ${rc.city} and all surrounding Houston areas.`}
      />
    </>
  )
}
