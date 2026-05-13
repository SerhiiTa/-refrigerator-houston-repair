import type { Metadata } from 'next'
import Link from 'next/link'
import { repairCases } from '@/data/repairCases'
import { serviceAreas } from '@/data/serviceAreas'
import RepairCaseCard from '@/components/RepairCaseCard'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Refrigerator Repair in Houston, TX | (346) 512-3688',
  description: 'Professional refrigerator repair in Houston and surrounding areas. Expert technicians, same-day service, all major brands. Call (346) 512-3688.',
}

const brandLogos = [
  { name: 'Sub-Zero', img: '/images/brands/subzero.png' },
  { name: 'Thermador', img: '/images/brands/thermador.png' },
  { name: 'LG', img: '/images/brands/lg.png' },
  { name: 'Samsung', img: '/images/brands/samsung.png' },
  { name: 'GE', img: '/images/brands/ge.png' },
  { name: 'Whirlpool', img: '/images/brands/whirlpool.png' },
  { name: 'KitchenAid', img: '/images/brands/kitchenaid.png' },
  { name: 'Viking', img: '/images/brands/viking.png' },
]

export default function HomePage() {
  const featuredCases = repairCases.slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex gap-2 mb-6">
              {['LOCAL', 'TRUSTED', 'PROFESSIONAL'].map(t => (
                <span key={t} className="text-xs font-bold tracking-widest text-brand-blue border border-brand-blue/30 bg-brand-light px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-5">
              Refrigerator<br />Repair in{' '}
              <span className="text-brand-blue">Houston</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
              Professional refrigerator repair by experienced technicians. Real repair cases. Real solutions. Houston and surrounding areas.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="tel:3465123688" className="btn-primary text-base px-7 py-3.5">
                📅 Schedule Service
              </a>
              <Link href="/repair-cases" className="btn-outline text-base px-7 py-3.5">
                🔍 Explore Repair Cases
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: '🛡', title: 'Expert Technicians', sub: '10+ Years Experience' },
                { icon: '✅', title: 'Warranty on Repairs', sub: 'Up to 1 Year' },
                { icon: '📍', title: 'Local Houston Service', sub: 'Fast Response' },
              ].map(b => (
                <div key={b.title} className="flex items-center gap-2">
                  <span className="text-xl">{b.icon}</span>
                  <div>
                    <div className="text-xs font-bold text-brand-dark">{b.title}</div>
                    <div className="text-xs text-gray-500">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="rounded-3xl h-96 overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&auto=format&fit=crop"
                alt="Modern kitchen with stainless steel refrigerator"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent rounded-3xl" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2 text-green-600 font-bold text-sm">✓</div>
                <div>
                  <div className="text-xs font-bold text-brand-dark">Same-Day Service</div>
                  <div className="text-xs text-gray-500">Available in most areas</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 bg-brand-blue text-white rounded-2xl shadow-xl p-3 text-center">
              <div className="font-display font-bold text-lg leading-none">5.0</div>
              <div className="text-yellow-300 text-xs">★★★★★</div>
              <div className="text-blue-100 text-[10px] mt-0.5">Google Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-t border-gray-100 bg-brand-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-center font-display font-bold text-xl text-brand-dark mb-8">Brands We Service</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {brandLogos.map(b => (
              <div
                key={b.name}
                className="bg-white rounded-xl px-2 py-4 flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-default"
              >
                <img
                  src={b.img}
                  alt={b.name}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/brands" className="text-brand-blue text-sm font-semibold hover:underline">
              View all brands we service →
            </Link>
          </div>
        </div>
      </section>

      {/* REPAIR CASES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">Real Repair Cases from Houston</h2>
            <Link href="/repair-cases" className="text-brand-blue text-sm font-semibold hover:underline hidden sm:block">
              View all cases →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCases.map(rc => (
              <RepairCaseCard key={rc.slug} rc={rc} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-title mb-6">Areas We Serve</h2>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {serviceAreas.map(a => (
                <Link
                  key={a.slug}
                  href={`/service-areas/${a.slug}`}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-brand-blue py-2 transition-colors"
                >
                  <span className="text-green-500">✓</span>
                  {a.name}
                </Link>
              ))}
            </div>
            <Link href="/service-areas" className="btn-outline inline-flex items-center gap-2">
              📍 View All Areas
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-brand-blue text-3xl">❄</span>
              <h3 className="font-display font-bold text-brand-dark text-xl">Building the Future of Appliance Repair</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              We are building a next-generation refrigerator repair platform that connects homeowners with verified technicians and real repair knowledge.
            </p>
            <ul className="space-y-3">
              {[
                'Real repair cases and solutions',
                'Verified technicians',
                'AI-powered diagnostics (coming soon)',
                'Nationwide technician network',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="text-brand-blue font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}