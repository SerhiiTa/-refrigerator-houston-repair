import Link from 'next/link'

const PHONE = '(346) 512-3688'
const PHONE_HREF = 'tel:3465123688'
const EMAIL = 'info@refrigeratorhoustonrepair.com'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-brand-blue text-2xl">❄</span>
              <div className="leading-tight">
                <div className="font-display font-bold text-sm tracking-tight">
                  <span className="text-white">REFRIG</span><span className="text-brand-blue">ERATOR</span>
                </div>
                <div className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">Houston Repair</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional refrigerator repair in Houston and surrounding areas. We service all major brands and models.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-gray-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/repair-cases', 'Repair Cases'], ['/brands', 'Brands'], ['/service-areas', 'Service Areas'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-gray-300 mb-4">Brands</h4>
            <ul className="space-y-2">
              {[['sub-zero', 'Sub-Zero Repair'], ['thermador', 'Thermador Repair'], ['lg', 'LG Repair'], ['samsung', 'Samsung Repair'], ['ge', 'GE Repair'], ['whirlpool', 'Whirlpool Repair']].map(([slug, label]) => (
                <li key={slug}>
                  <Link href={`/brands/${slug}`} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-gray-300 mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href={`tel:${PHONE.replace(/\D/g,'')}`} className="hover:text-white transition-colors">📞 {PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">✉ {EMAIL}</a></li>
              <li>📍 Houston, TX</li>
              <li>🕐 Mon–Sun: 7:00 AM – 9:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Refrigerator Houston Repair. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
