import Link from 'next/link'

interface CTABannerProps {
  title?: string
  subtitle?: string
}

export default function CTABanner({
  title = 'Need Refrigerator Repair in Houston?',
  subtitle = 'Schedule service today. Fast response and professional repair.',
}: CTABannerProps) {
  return (
    <section className="bg-brand-blue py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-xl">
            <span className="text-2xl">📅</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-lg">{title}</h3>
            <p className="text-blue-100 text-sm">{subtitle}</p>
          </div>
        </div>
        <a
          href="/schedule"
          className="shrink-0 inline-flex items-center gap-2 bg-white text-brand-blue font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm"
        >
          SCHEDULE SERVICE →
        </a>
      </div>
    </section>
  )
}
