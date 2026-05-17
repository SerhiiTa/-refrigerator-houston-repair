import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://refrigeratorhoustonrepair.com'),
  title: {
    default: 'Refrigerator Repair in Houston, TX | (346) 512-3688',
    template: '%s | Refrigerator Houston Repair',
  },
  description:
    'Professional refrigerator repair in Houston and surrounding areas. Expert technicians, same-day service, all major brands. Call (346) 512-3688.',
  keywords: ['refrigerator repair Houston', 'fridge repair Houston', 'Sub-Zero repair Houston', 'appliance repair Houston TX'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://refrigeratorhoustonrepair.com',
    siteName: 'Refrigerator Houston Repair',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RBLWRKNMWX" strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-RBLWRKNMWX');`}</Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
