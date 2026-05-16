import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { technicians } from '@/data/technicians'
import { repairCases } from '@/data/repairCases'
import RepairCaseCard from '@/components/RepairCaseCard'
import CTABanner from '@/components/CTABanner'

export function generateStaticParams() {
  return technicians.map(t => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const tech = technicians.find(t => t.slug === slug)
  if (!tech) return {}
  return {
    title: `${tech.name} — ${tech.title} | Refrigerator Houston Repair`,
    description: `${tech.bio.substring(0, 155)}`,
  }
}

export default async function TechnicianPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tech = technicians.find(t => t.slug === slug)
  if (!tech) notFound()

  const cases = repairCases.filter(rc => (rc as any).technicianSlug === slug)

  return (
    <>
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/" className="hover:text-brand-blue">Home</Link>
            {' / '}
            <Link href="/technicians" className="hover:text-brand-blue">Technicians</Link>
            {' / '}
            <span>{tech.name}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-8 mt-6">
            <div className="w-24 h-24 rounded-full bg-brand-blue flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              {tech.name.charAt(0)}
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-2">
                {tech.name}
              </h1>
              <p className="text-brand-blue font-semibold text-lg mb-4">{tech.title}</p>
              <a href={`/schedule?technician=${tech.slug}`} className="btn-primary text-base px-6 py-3">
                📅 Book with {tech.name.split(' ')[0]}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-10">

          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">{tech.bio}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {tech.specialties.map(s => (
                  <span key={s} className="bg-brand-light text-brand-blue text-sm font-semibold px-3 py-1.5 rounded-lg border border-blue-100">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Certifications</h2>
              <ul className="space-y-2">
                {tech.certifications.map(c => (
                  <li key={c} className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 font-bold">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-brand-blue rounded-2xl p-6 text-white">
              <h3 className="font-display font-bold text-lg mb-2">Book with {tech.name.split(' ')[0]}</h3>
              <p className="text-blue-100 text-sm mb-4">
                Request {tech.name.split(' ')[0]} for your repair appointment.
              </p>
              <a
                href={`/schedule?technician=${tech.slug}`}
                className="block text-center bg-white text-brand-blue font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                📅 Schedule Service
              </a>
            </div>

            <div className="bg-brand-gray rounded-2xl p-6">
              <h3 className="font-display font-bold text-brand-dark mb-3">Contact Us</h3>
              <p className="text-gray-600 text-sm mb-4">Available 7 days a week, 7 AM to 9 PM.</p>
              <a href="tel:+13465123688" className="btn-primary w-full justify-center text-sm">
                📞 (346) 512-3688
              </a>
            </div>
          </div>
        </div>
      </section>

      {cases.length > 0 && (
        <section className="py-16 bg-brand-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">
              Recent Work by {tech.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map(rc => (
                <RepairCaseCard key={rc.slug} rc={rc} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`Schedule a Repair with ${tech.name}`}
        subtitle="Fast response, same-day service available throughout Houston."
      />
    </>
  )
}
