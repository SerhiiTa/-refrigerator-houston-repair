import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

const d = {
  "title": "KitchenAid KUTX505ESS1 Ice Maker Not Producing Ice",
  "metaTitle": "KitchenAid KUTX505ESS1 Ice Maker Repair — Memorial, TX 77057 | Houston Refrigerator Repair",
  "metaDescription": "KitchenAid KUTX505ESS1 ice maker stopped working in Memorial TX 77057. Faulty water level sensor & clogged valve replaced. Ice maker fully restored.",
  "brand": "KitchenAid",
  "brandSlug": "kitchenaid",
  "model": "KUTX505ESS1",
  "city": "Memorial",
  "areaSlug": "memorial",
  "zip": "77057",
  "repairType": "Ice Maker Repair",
  "refrigerant": "N/A",
  "rootCause": "Failed circulation pump water level sensor and clogged water inlet valve",
  "mainPhoto": "/images/repair-kitchenaid-kutx505ess1-2.jpeg",
  "symptoms": [
    "Ice maker completely stopped producing ice",
    "No water entering the ice maker tray",
    "Ice bin remained empty despite the unit running normally",
    "Water supply line appeared functional but no ice was being made"
  ],
  "diagnosis": "Upon arrival at the customer's residence in Memorial, TX (ZIP 77057), the technician inspected the freestanding KitchenAid KUTX505ESS1 ice maker, rated at 115V/60Hz and manufactured in Canada. The customer reported that the unit had not produced ice for several days. The technician began a systematic diagnostic evaluation, starting with a visual inspection of the ice bin, water supply line, and internal components. Using a multimeter, the technician verified the unit was receiving proper voltage at 115V, consistent with the label specification. Attention then shifted to the circulation pump, which houses an integrated water level sensor. The sensor was returning a signal indicating the water bin was full — even though the bin was completely empty. This false reading prevented the control board from issuing an open command to the water inlet valve, effectively shutting down the ice-making cycle entirely. The technician confirmed this diagnosis by manually bypassing the pump signal and observing that the water inlet valve solenoid responded correctly to a direct command. After isolating the circulation pump as the primary failure point, the technician also noted unusually dark, discolored water within the system — visible in the case photos — indicating contamination buildup inside the water inlet valve. Further inspection confirmed the valve was severely clogged, restricting water flow to a slow drip even after the pump issue was addressed.",
  "repairSteps": [
    "Disconnected the KitchenAid KUTX505ESS1 from the 115V power supply and shut off the water supply line to ensure safe working conditions.",
    "Removed the ice maker's access panel and outer casing to gain full access to the internal components, including the circulation pump and water inlet valve.",
    "Used a multimeter to verify incoming voltage at 115V and confirmed proper electrical continuity at the control board terminals.",
    "Diagnosed the integrated water level sensor within the circulation pump as faulty — it was sending a 'bin full' signal to the control board despite the bin being empty, preventing the water inlet valve from receiving an open command.",
    "Disconnected the circulation pump electrical harness and water connections, then removed the defective pump assembly from the unit.",
    "Installed a new OEM-compatible circulation pump with an integrated water level sensor, ensuring all electrical connectors and water line fittings were seated and tightened securely.",
    "Powered the unit on temporarily to verify the new pump's sensor was reporting the correct water level (empty), and confirmed the control board was now issuing the open command to the water inlet valve.",
    "Observed that water flow through the inlet valve was severely restricted — only a slow drip — confirming a secondary fault: a heavily clogged water inlet valve.",
    "Shut down the unit again and removed the clogged water inlet valve; visually confirmed significant mineral and contaminant buildup inside the valve body. Photographic documentation showed the water inside the system was black due to contamination.",
    "Installed a new OEM-spec water inlet valve sourced directly from the technician's truck stock, matching the original valve's flow rate and solenoid specifications for the KUTX505ESS1 model.",
    "Flushed and drained all old, contaminated water from the system; confirmed water exiting during the flush was visibly dark before running clear, indicating successful purge of the contamination.",
    "Reassembled all panels, reconnected the water supply line and power, and performed a full restart of the ice maker cycle. Monitored the first complete ice production cycle to confirm proper water fill, freeze, and harvest sequences before closing the case."
  ],
  "partsReplaced": [
    "Circulation pump with integrated water level sensor (OEM-compatible replacement for KitchenAid KUTX505ESS1)",
    "Water inlet valve (OEM-spec replacement, matching original flow rate and solenoid configuration for KUTX505ESS1)"
  ],
  "result": "Following the replacement of both the circulation pump and the clogged water inlet valve, the KitchenAid KUTX505ESS1 ice maker resumed full operation. The system was thoroughly flushed of contaminated water and relaunched successfully. Within the first monitored cycle, water filled the tray at the correct volume and the harvest sequence initiated properly. The customer was present at the time and confirmed satisfaction with the repair. A standard service warranty was provided on both the parts and labor performed.",
  "technicianNotes": "KitchenAid freestanding ice makers like the KUTX505ESS1 are precision appliances that rely heavily on accurate sensor feedback to manage their water fill and freeze cycles. If your ice maker suddenly stops producing ice, don't assume the problem is a simple mechanical jam — a failed water level sensor in the circulation pump can mimic a 'full bin' condition even when the unit is empty, completely shutting down production without triggering an obvious error. Additionally, mineral-rich water supplies common in the Houston area can cause accelerated buildup inside water inlet valves. Homeowners should consider installing an inline water filter rated for ice makers and scheduling an annual flush of the water system. Early warning signs to watch for include unusually small or malformed ice cubes, slower-than-normal ice production, or visible discoloration in the first batch of ice after the unit sits idle. Addressing these symptoms early can prevent secondary component failures and significantly reduce repair costs.",
  "faq": [
    {
      "question": "Why did my KitchenAid KUTX505ESS1 ice maker stop making ice even though it's plugged in and the water line is connected?",
      "answer": "A faulty water level sensor inside the circulation pump can send a false 'bin full' signal to the control board, preventing the water inlet valve from opening. This is exactly what happened in this Memorial, TX case. The ice maker appeared operational but wasn't producing any ice because the valve never received the command to let water in."
    },
    {
      "question": "How much does it cost to repair a KitchenAid freestanding ice maker with a bad circulation pump and clogged water valve?",
      "answer": "Repair costs for a KitchenAid ice maker involving a circulation pump and water inlet valve replacement typically range from $250 to $450 depending on parts availability and local labor rates. In Memorial, TX (77057), same-day service with truck-stock parts can reduce downtime significantly. Repairing is almost always more cost-effective than replacing the unit."
    },
    {
      "question": "What are the warning signs that the water inlet valve on a KitchenAid ice maker is starting to fail or get clogged?",
      "answer": "Early warning signs of a clogging water inlet valve include very slow water fill, smaller-than-normal ice cubes, irregular ice production cycles, or a faint humming sound from the valve solenoid without water flowing. Discolored or dark water in the system — as seen in this case — is a strong indicator of significant mineral and contaminant buildup requiring immediate attention."
    },
    {
      "question": "Is it worth repairing a KitchenAid KUTX505ESS1 freestanding ice maker, or should I replace it?",
      "answer": "For a unit like the KitchenAid KUTX505ESS1, repair is typically the right choice when the failure involves components like the circulation pump or water inlet valve. These are serviceable parts with available OEM replacements. Replacement units of comparable quality cost significantly more than a typical repair. As long as the compressor and sealed system are intact, repairing is the smarter investment."
    },
    {
      "question": "After my KitchenAid ice maker was repaired, how long does it take to start producing ice again, and what should I do to maintain it?",
      "answer": "After a full restart, most KitchenAid freestanding ice makers complete their first production cycle within 90 minutes to 3 hours depending on ambient temperature. To maintain the unit, use a quality inline water filter, flush the system every 6–12 months, and clean the condenser coils annually. In areas with hard water like Houston, a filter is especially important to prevent valve clogging."
    }
  ],
  "photos": [
    {
      "src": "/images/repair-kitchenaid-kutx505ess1-1.jpeg",
      "caption": "KitchenAid KUTX505ESS1 repair in Memorial, TX — photo 1"
    },
    {
      "src": "/images/repair-kitchenaid-kutx505ess1-2.jpeg",
      "caption": "KitchenAid KUTX505ESS1 repair in Memorial, TX — photo 2"
    },
    {
      "src": "/images/repair-kitchenaid-kutx505ess1-3.jpeg",
      "caption": "KitchenAid KUTX505ESS1 repair in Memorial, TX — photo 3"
    },
    {
      "src": "/images/repair-kitchenaid-kutx505ess1-4.jpeg",
      "caption": "KitchenAid KUTX505ESS1 repair in Memorial, TX — photo 4"
    },
    {
      "src": "/images/repair-kitchenaid-kutx505ess1-5.jpeg",
      "caption": "KitchenAid KUTX505ESS1 repair in Memorial, TX — photo 5"
    }
  ],
  "technicianSlug": "serhii-t",
  "technicianName": "Serhii T."
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Refrigerator Houston Repair",
      "telephone": "(346) 512-3688",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Houston",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "openingHours": "Mo-Su 07:00-21:00",
      "url": "https://refrigeratorhoustonrepair.com"
    },
    {
      "@type": "Service",
      "serviceType": "Ice Maker Repair",
      "brand": {
        "@type": "Brand",
        "name": "KitchenAid"
      },
      "areaServed": {
        "@type": "PostalAddress",
        "postalCode": "77057",
        "addressLocality": "Memorial",
        "addressRegion": "TX"
      },
      "provider": {
        "@type": "LocalBusiness",
        "name": "Refrigerator Houston Repair"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why did my KitchenAid KUTX505ESS1 ice maker stop making ice even though it's plugged in and the water line is connected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A faulty water level sensor inside the circulation pump can send a false 'bin full' signal to the control board, preventing the water inlet valve from opening. This is exactly what happened in this Memorial, TX case. The ice maker appeared operational but wasn't producing any ice because the valve never received the command to let water in."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to repair a KitchenAid freestanding ice maker with a bad circulation pump and clogged water valve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Repair costs for a KitchenAid ice maker involving a circulation pump and water inlet valve replacement typically range from $250 to $450 depending on parts availability and local labor rates. In Memorial, TX (77057), same-day service with truck-stock parts can reduce downtime significantly. Repairing is almost always more cost-effective than replacing the unit."
          }
        },
        {
          "@type": "Question",
          "name": "What are the warning signs that the water inlet valve on a KitchenAid ice maker is starting to fail or get clogged?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Early warning signs of a clogging water inlet valve include very slow water fill, smaller-than-normal ice cubes, irregular ice production cycles, or a faint humming sound from the valve solenoid without water flowing. Discolored or dark water in the system — as seen in this case — is a strong indicator of significant mineral and contaminant buildup requiring immediate attention."
          }
        },
        {
          "@type": "Question",
          "name": "Is it worth repairing a KitchenAid KUTX505ESS1 freestanding ice maker, or should I replace it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a unit like the KitchenAid KUTX505ESS1, repair is typically the right choice when the failure involves components like the circulation pump or water inlet valve. These are serviceable parts with available OEM replacements. Replacement units of comparable quality cost significantly more than a typical repair. As long as the compressor and sealed system are intact, repairing is the smarter investment."
          }
        },
        {
          "@type": "Question",
          "name": "After my KitchenAid ice maker was repaired, how long does it take to start producing ice again, and what should I do to maintain it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After a full restart, most KitchenAid freestanding ice makers complete their first production cycle within 90 minutes to 3 hours depending on ambient temperature. To maintain the unit, use a quality inline water filter, flush the system every 6–12 months, and clean the condenser coils annually. In areas with hard water like Houston, a filter is especially important to prevent valve clogging."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://refrigeratorhoustonrepair.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Repair Cases",
          "item": "https://refrigeratorhoustonrepair.com/repair-cases"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "KitchenAid KUTX505ESS1 Ice Maker Not Producing Ice"
        }
      ]
    }
  ]
}

export const metadata: Metadata = {
  title: d.metaTitle,
  description: d.metaDescription,
  openGraph: {
    title: d.metaTitle,
    description: d.metaDescription,
    images: [d.mainPhoto],
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-brand-gray py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-brand-blue">Home</Link>
            {' / '}
            <Link href="/repair-cases" className="hover:text-brand-blue">Repair Cases</Link>
            {' / '}
            <span>{d.title}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">{d.brand}</span>
            <span className="bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded">Model: {d.model}</span>
            <span className="text-gray-500 text-sm">📍 {d.city}, TX {d.zip}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark mb-6">{d.title}</h1>
          <a
            href="tel:+13465123688"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            📞 Call (346) 512-3688
          </a>
          {d.technicianSlug && (
            <p className="mt-3 text-sm text-gray-500">
              🔧 Performed by{'  '}
              <a href={"/technicians/" + d.technicianSlug} className="text-brand-blue hover:underline font-medium">
                {d.technicianName || d.technicianSlug}
              </a>
            </p>
          )}
        </div>
      </section>

      {/* Main content + Sidebar */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="md:col-span-2 space-y-10">

              {d.mainPhoto && (
                <div className="rounded-2xl overflow-hidden shadow-md" style={{ maxHeight: '500px' }}>
                  <img src={d.mainPhoto} alt={d.title} className="w-full h-full object-cover" />
                </div>
              )}

              {/* The Problem */}
              <div>
                <h2 className="font-display text-xl font-bold text-brand-dark mb-4">The Problem</h2>
                <ul className="space-y-2">
                  {d.symptoms.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-red-500 mt-0.5">&bull;</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Photo 2 inline */}
              {d.photos[1] && (
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src={d.photos[1].src} alt={d.photos[1].caption} className="w-full object-cover" style={{ height: '350px' }} />
                </div>
              )}

              {/* Diagnosis */}
              <div className="bg-brand-light rounded-2xl p-6 border border-blue-100">
                <h2 className="font-display text-xl font-bold text-brand-dark mb-3">🔍 Diagnosis</h2>
                <p className="text-gray-700 leading-relaxed">{d.diagnosis}</p>
              </div>

              {/* Photo 3 inline */}
              {d.photos[2] && (
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src={d.photos[2].src} alt={d.photos[2].caption} className="w-full object-cover" style={{ height: '350px' }} />
                </div>
              )}

              {/* The Repair */}
              <div>
                <h2 className="font-display text-xl font-bold text-brand-dark mb-4">🔧 The Repair</h2>
                <ul className="space-y-3">
                  {d.repairSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold text-green-800 mb-3">&#10003; Result</h2>
                <p className="text-green-700 leading-relaxed">{d.result}</p>
              </div>

              {/* Technician Notes */}
              <div className="bg-brand-gray rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold text-brand-dark mb-3">💡 Technician Notes</h2>
                <p className="text-gray-700 leading-relaxed">{d.technicianNotes}</p>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-display text-xl font-bold text-brand-dark mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {d.faq.map((item, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl p-5">
                      <h3 className="font-semibold text-brand-dark mb-2">{item.question}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internal links */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                {d.brandSlug && (
                  <Link href={`/brands/${d.brandSlug}`} className="btn-outline text-sm">
                    More {d.brand} Repairs →
                  </Link>
                )}
                <Link href={`/service-areas/${d.areaSlug}`} className="btn-outline text-sm">
                  Refrigerator Repair in {d.city} →
                </Link>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* Repair Summary */}
              <div className="bg-brand-gray rounded-2xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Repair Summary</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Brand</dt>
                    <dd className="font-medium text-brand-dark">{d.brand}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Model</dt>
                    <dd className="font-medium text-brand-dark">{d.model}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Repair Type</dt>
                    <dd className="font-medium text-brand-dark text-right" style={{ maxWidth: '160px' }}>{d.repairType}</dd>
                  </div>
                  {d.refrigerant && d.refrigerant !== 'N/A' && (
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Refrigerant</dt>
                      <dd className="font-medium text-brand-dark">{d.refrigerant}</dd>
                    </div>
                  )}
                  {d.rootCause && (
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Root Cause</dt>
                      <dd className="font-medium text-brand-dark text-right" style={{ maxWidth: '150px' }}>{d.rootCause}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-gray-500 mb-2">Parts Replaced</dt>
                    <dd>
                      <ul className="space-y-1">
                        {d.partsReplaced.map((p, i) => (
                          <li key={i} className="flex items-center gap-2 text-brand-dark text-xs">
                            <span className="text-green-500">&#10003;</span>{p}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Location</dt>
                    <dd className="font-medium text-brand-dark">{d.city}, TX {d.zip}</dd>
                  </div>
                  <div className="flex justify-between items-center">
                    <dt className="text-gray-500">Status</dt>
                    <dd className="text-green-600 font-bold">&#10003; Completed</dd>
                  </div>
                </dl>
              </div>

              {/* CTA card */}
              <div className="bg-brand-blue rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-lg mb-2">Same Problem?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  We fix {d.brand} refrigerators in {d.city} and all Houston area.
                </p>
                <a
                  href="tel:+13465123688"
                  className="block text-center bg-white text-brand-blue font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Call (346) 512-3688
                </a>
              </div>

              {/* Service area card */}
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-3">Service Area</h3>
                <p className="text-gray-600 text-sm mb-3">
                  We provide refrigerator repair service in {d.city} and surrounding areas.
                </p>
                <Link
                  href={`/service-areas/${d.areaSlug}`}
                  className="text-brand-blue font-medium text-sm hover:underline"
                >
                  View {d.city} Service Area →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery - remaining photos (4,5) */}
      {d.photos.slice(3).length > 0 && (
        <section className="py-12 bg-brand-gray">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">📸 Repair Photos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {d.photos.slice(3).map((photo, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full object-cover"
                    style={{ height: '250px' }}
                  />
                  <div className="p-4 bg-gray-50">
                    <p className="text-sm text-gray-600 italic">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technician Card */}
      {d.technicianSlug && (
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-4 bg-brand-gray rounded-xl p-5">
              <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">T</div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Performed by</div>
                <Link href={`/technicians/${d.technicianSlug}`} className="font-semibold text-brand-dark hover:text-brand-blue transition-colors">
                  View Technician Profile →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* AI Disclosure */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-500">
            🤖 This repair case was documented and published using AI-assisted tools based on real repair data and descriptions provided by certified technicians serving Houston, TX and surrounding areas. All technical details reflect actual repair work performed.
          </div>
        </div>
      </section>

      <CTABanner
        title={`Need ${d.brand} Refrigerator Repair in ${d.city}?`}
        subtitle={`We serve ${d.city} and all surrounding Houston areas. Same-day service available.`}
      />
    </>
  )
}
