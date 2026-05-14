'use client'
import { useState } from 'react'
import Link from 'next/link'

const PHONE = '(346) 512-3688'
const PHONE_HREF = "tel:3465123688"

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/repair-cases', label: 'Repair Cases' },
  { href: '/brands', label: 'Brands' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-brand-blue text-2xl">❄</span>
          <div className="leading-tight">
            <div className="font-display font-bold text-sm tracking-tight">
              <span className="text-brand-dark">REFRIG</span><span className="text-brand-blue">ERATOR</span>
            </div>
            <div className="text-[10px] font-semibold text-gray-500 tracking-widest uppercase">Houston Repair</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href={PHONE_HREF}
          className="hidden md:flex items-center gap-2 bg-brand-blue text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span>📞</span> {PHONE}
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="w-5 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-5 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-5 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a href={PHONE_HREF} className="btn-primary w-full justify-center mt-4">
            📞 {PHONE}
          </a>
        </div>
      )}
    </header>
  )
}
