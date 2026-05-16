import type { Metadata } from 'next'
import ScheduleForm from '@/components/ScheduleForm'
import { technicians } from '@/data/technicians'

export const metadata: Metadata = {
  title: 'Schedule Refrigerator Repair in Houston | (346) 512-3688',
  description: 'Schedule same-day refrigerator repair in Houston. $89 service call includes travel, diagnostics and dispatch. Waived if you repair with us.',
}

export default async function SchedulePage({ searchParams }: { searchParams: Promise<{ technician?: string }> }) {
  const { technician: techSlug } = await searchParams
  const requestedTech = techSlug ? technicians.find(t => t.slug === techSlug) : null

  return (
    <>
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            Schedule Service
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            {requestedTech
              ? `Booking with ${requestedTech.name} — ${requestedTech.title}`
              : 'Book your refrigerator repair appointment online. Fast response, same-day service available.'}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-start">

          {/* Pricing info */}
          <div>
            <div className="bg-brand-dark rounded-3xl p-8 text-white mb-6">
              <div className="text-5xl font-display font-extrabold text-brand-blue mb-1">$89</div>
              <div className="font-display font-bold text-xl mb-4">Service Call Fee</div>
              <p className="text-gray-300 text-sm mb-6">One flat fee covers everything needed to get to your door and diagnose the problem.</p>

              <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">What is included:</h3>
              <ul className="space-y-2 mb-6">
                {[
                  '✓ Travel to your location',
                  '✓ Full diagnostic inspection',
                  '✓ Dispatch and scheduling',
                  '✓ Written repair estimate',
                ].map(item => (
                  <li key={item} className="text-gray-300 text-sm">{item}</li>
                ))}
              </ul>

              <div className="border-t border-white/20 pt-6">
                <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Service call is waived if:</h3>
                <ul className="space-y-2">
                  {[
                    '🎉 You proceed with the repair',
                    '🎉 Parts are ordered through us',
                  ].map(item => (
                    <li key={item} className="text-green-400 text-sm font-semibold">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-brand-light rounded-2xl p-6 border border-blue-100">
              <h3 className="font-display font-bold text-brand-dark mb-3">Prefer to call?</h3>
              <p className="text-gray-600 text-sm mb-4">Our team is available 7 days a week, 7 AM to 9 PM.</p>
              <a href="tel:3465123688" className="btn-primary w-full justify-center">
                📞 (346) 512-3688
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">Book Online</h2>
            <ScheduleForm technicianSlug={requestedTech?.slug} technicianName={requestedTech?.name} />
          </div>

        </div>
      </section>
    </>
  )
}
