import type { Metadata } from 'next'
import Link from 'next/link'
import { repairCases } from '@/data/repairCases'
import RepairCaseCard from '@/components/RepairCaseCard'
import CTABanner from '@/components/CTABanner'

const d = {
  "slug": "alex-t",
  "name": "Alex",
  "firstName": "Alex",
  "title": "Ведущий техник по ремонту холодильников",
  "bio": "Alex is a certified refrigeration technician at Refrigerator Houston Repair, specializing in Sub-Zero, Thermador, Viking, Bosch, KitchenAid.",
  "specialties": [
    "Sub-Zero",
    "Thermador",
    "Viking",
    "Bosch",
    "KitchenAid",
    "Whirlpool",
    "GE",
    "LG",
    "Samsung",
    "Electrolux",
    "Maytag",
    "Frigidaire",
    "Scotsman"
  ],
  "certifications": [
    "EPA Section 608 Certified"
  ],
  "photo": "/images/technicians/alex-t.jpeg",
  "areas": [
    {
      "slug": "league-city",
      "name": "League City"
    },
    {
      "slug": "clear-lake",
      "name": "Clear Lake"
    },
    {
      "slug": "texas-city",
      "name": "Texas City"
    },
    {
      "slug": "pearland",
      "name": "Pearland"
    },
    {
      "slug": "houston",
      "name": "Houston"
    },
    {
      "slug": "friendswood",
      "name": "Friendswood"
    },
    {
      "slug": "kemah",
      "name": "Kemah"
    },
    {
      "slug": "deer-park",
      "name": "Deer Park"
    },
    {
      "slug": "la-porte",
      "name": "La Porte"
    },
    {
      "slug": "pasadena",
      "name": "Pasadena"
    }
  ],
  "metaTitle": "Alex — Ведущий техник по ремонту холодильников | Refrigerator Houston Repair",
  "metaDescription": "Alex is a certified refrigeration technician at Refrigerator Houston Repair, specializing in Sub-Zero, Thermador, Viking, Bosch, KitchenAid."
}

export const metadata: Metadata = {
  title: d.metaTitle,
  description: d.metaDescription,
}

export default function AlexTechnicianPage() {
  const cases = repairCases.filter(rc => rc.technicianSlug === d.slug)

  return (
    <>
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/" className="hover:text-brand-blue">Home</Link>
            {' / '}
            <Link href="/technicians" className="hover:text-brand-blue">Technicians</Link>
            {' / '}
            <span>{d.name}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-8 mt-6">
            <img
              src={d.photo}
              alt={d.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-brand-blue/20 flex-shrink-0"
            />
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-2">{d.name}</h1>
              <p className="text-brand-blue font-semibold text-lg mb-4">{d.title}</p>
              <a href={`/schedule?technician=${d.slug}`} className="btn-primary text-base px-6 py-3">
                📅 Book with {d.firstName}
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
              <p className="text-gray-700 leading-relaxed">{d.bio}</p>
            </div>
            {d.specialties.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Specialties</h2>
                <div className="flex flex-wrap gap-2">
                  {d.specialties.map((s: string) => (
                    <span key={s} className="bg-brand-light text-brand-blue text-sm font-semibold px-3 py-1.5 rounded-lg border border-blue-100">{s}</span>
                  ))}
                </div>
              </div>
            )}
            {d.certifications.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Certifications</h2>
                <ul className="space-y-2">
                  {d.certifications.map((c: string) => (
                    <li key={c} className="flex items-center gap-3 text-gray-700">
                      <span className="text-green-500 font-bold">&#10003;</span>{c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {d.areas && (
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Service Areas</h2>
                {Array.isArray(d.areas) && d.areas.length === 0 ? (
                  <p className="text-gray-700">All Houston and surrounding areas</p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {d.areas.map((a: any) => (
                      <a key={typeof a === "string" ? a : a.slug} href={`/service-areas/${typeof a === "string" ? a : a.slug}`} className="bg-brand-light text-brand-blue text-sm font-semibold px-3 py-1.5 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors">
                        {a}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="space-y-6">
            <div className="bg-brand-blue rounded-2xl p-6 text-white">
              <h3 className="font-display font-bold text-lg mb-2">Book with {d.firstName}</h3>
              <p className="text-blue-100 text-sm mb-4">Request {d.firstName} for your repair appointment.</p>
              <a href={`/schedule?technician=${d.slug}`} className="block text-center bg-white text-brand-blue font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors">
                📅 Schedule Service
              </a>
            </div>
            <div className="bg-brand-gray rounded-2xl p-6">
              <h3 className="font-display font-bold text-brand-dark mb-3">Contact Us</h3>
              <p className="text-gray-600 text-sm mb-4">Available 7 days a week, 7 AM to 9 PM.</p>
              <a href="tel:+13465123688" className="btn-primary w-full justify-center text-sm">📞 (346) 512-3688</a>
            </div>
          </div>
        </div>
      </section>

      {cases.length > 0 && (
        <section className="py-16 bg-brand-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">Recent Work by {d.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map(rc => (<RepairCaseCard key={rc.slug} rc={rc} />))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`Schedule a Repair with ${d.name}`}
        subtitle="Fast response, same-day service available throughout Houston."
      />
    </>
  )
}
