import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Refrigerator Repair in Houston, TX',
  description:
    'Contact Refrigerator Houston Repair for professional refrigerator repair service. Call (346) 512-3688 or send us a message. Available Mon–Sun 7 AM – 9 PM.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-2 text-sm text-brand-blue font-semibold">Get In Touch</div>
          <h1 className="section-title mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-xl">
            Ready to schedule service or have a question? Reach out — we respond fast.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12">

          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-brand-dark">Contact Information</h2>

            {[
              { icon: '📞', label: 'Phone', value: '(346) 512-3688', href: 'tel:3465123688' },
              { icon: '✉', label: 'Email', value: 'info@refrigeratorhoustonrepair.com', href: 'mailto:info@refrigeratorhoustonrepair.com' },
              { icon: '📍', label: 'Location', value: 'Houston, TX and surrounding areas', href: null },
              { icon: '🕐', label: 'Hours', value: 'Mon–Sun: 7:00 AM – 9:00 PM', href: null },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="bg-brand-light text-brand-blue p-3 rounded-xl text-xl">{item.icon}</div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-brand-dark font-semibold hover:text-brand-blue transition-colors">{item.value}</a>
                  ) : (
                    <div className="text-brand-dark font-semibold">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-brand-gray rounded-2xl p-6 mt-6">
              <h3 className="font-display font-bold text-brand-dark mb-2">Service Areas</h3>
              <p className="text-gray-600 text-sm">Houston, Katy, Sugar Land, Spring, Memorial, Cypress, Richmond, Fulshear, Seabrook, and surrounding communities.</p>
            </div>
          </div>

          {/* Contact form (static HTML — works with Netlify/Formspree) */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">Send Us a Message</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  placeholder="(713) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Refrigerator Brand & Model</label>
                <input
                  type="text"
                  name="brand_model"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  placeholder="e.g. Sub-Zero 648PRO"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Describe the Problem</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 resize-none"
                  placeholder="What's happening with your refrigerator?"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
