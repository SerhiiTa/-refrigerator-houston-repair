import type { Metadata } from 'next'
import Link from 'next/link'
import { technicians } from '@/data/technicians'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Our Technicians | Refrigerator Houston Repair',
  description:
    'Meet the certified refrigeration technicians at Refrigerator Houston Repair. EPA 608 certified, experienced with all major brands. Serving Houston and surrounding areas.',
}

export default function TechniciansPage() {
  return (
    <>
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/" className="hover:text-brand-blue">Home</Link> / Technicians
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            Our Technicians
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Meet the certified professionals behind every repair. EPA 608 certified, trained on all major brands.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicians.map(tech => (
              <Link
                key={tech.slug}
                href={`/technicians/${tech.slug}`}
                className="group bg-brand-gray rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {tech.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                      {tech.name}
                    </h2>
                    <p className="text-brand-blue font-medium text-sm mb-2">{tech.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{tech.bio}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {tech.specialties.slice(0, 3).map(s => (
                        <span key={s} className="bg-white text-gray-600 text-xs px-2 py-1 rounded border border-gray-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Schedule a Repair?"
        subtitle="Our certified technicians serve Houston and all surrounding areas. Same-day service available."
      />
    </>
  )
}
