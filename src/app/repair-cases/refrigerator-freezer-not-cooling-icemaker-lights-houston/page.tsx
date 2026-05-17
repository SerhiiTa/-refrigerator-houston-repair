import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

const d = {
  "title": "Refrigerator Freezer Not Cooling, Ice Maker Failure & Dead Lights — Houston Repair",
  "metaTitle": "Refrigerator Freezer Not Cooling & Ice Maker Repair — Houston, TX 77082 | Refrigerator Repair",
  "metaDescription": "Freezer not cooling, ice maker dead, and fresh food lights out — expert repair in Houston 77082. Defrost board, ice maker & LED bulbs replaced. Fixed same day.",
  "brand": "Unknown",
  "brandSlug": null,
  "model": "UNKNOWN",
  "city": "Houston",
  "areaSlug": "houston",
  "zip": "77082",
  "repairType": "Defrost System Repair / Ice Maker Replacement / LED Lighting Repair",
  "refrigerant": "R-600a",
  "rootCause": "Defrost board failure, dead ice maker module, multiple LED bulb failures",
  "mainPhoto": "/images/repair-unknown-unknown-2.jpeg",
  "symptoms": [
    "Freezer not cooling properly — food in the upper freezer section is soft or partially thawed",
    "Ice maker completely stopped producing ice despite receiving power",
    "Fresh food compartment interior lights are entirely out — all LEDs failed simultaneously"
  ],
  "diagnosis": "Upon arrival at the customer's residence in Houston, TX 77082, the technician performed a comprehensive multi-system diagnostic on this R-600a refrigerator (confirmed refrigerant charge: 3.5 oz per appliance label). The unit was running but failing in three distinct areas. Starting with the freezer cooling complaint, the technician used a digital thermometer to record upper-freezer temperatures ranging between 18°F and 22°F — well above the target of 0°F. An infrared surface scan of the evaporator coil confirmed heavy frost accumulation, consistent with a defrost system failure. The main control board was tested using a multimeter; the technician verified that the board was not sending the defrost initiation signal to the defrost heater circuit at the expected duty cycle intervals, confirming a failed main control board defrost output. The defrost heater and defrost thermostat were independently tested and confirmed functional, isolating the fault to the control board's defrost signaling circuit. For the ice maker, voltage at the ice maker harness connector was confirmed at 120V AC using a calibrated multimeter — indicating the wiring and board supply were intact — yet the ice maker module itself showed no response, no motor rotation, and no harvest cycle initiation, confirming an internal module failure. Finally, the fresh food compartment's LED light array was inspected: each individual LED bulb was tested in sequence and all were found to have open circuits, indicating simultaneous end-of-life failure across the entire lighting array. No wiring shorts or control board lighting output faults were detected.",
  "repairSteps": [
    "Disconnected the refrigerator from the power supply and documented all pre-repair conditions including temperatures, frost patterns, and light status.",
    "Removed all freezer contents and shelving to gain unobstructed access to the evaporator cover panel secured with multiple Phillips-head screws.",
    "Removed the evaporator cover to expose the fully frosted evaporator coil assembly; performed a manual defrost using a heat gun at low setting and dry towels to safely melt accumulated ice without damaging the evaporator fins or R-600a sealed system.",
    "Disconnected the main control board wiring harness after documenting connector positions; removed the faulty main control board from its mounting bracket in the rear panel electronics compartment.",
    "Installed the compatible replacement control board, reconnected all wiring harnesses in correct orientation, and secured the board to the mounting bracket.",
    "Verified the replacement board's defrost output signal using a multimeter — confirmed proper pulsed voltage signal to the defrost heater circuit at the correct timing interval.",
    "Restored the evaporator cover panel, ensuring all foam gasket seals were properly seated to maintain compartment air separation.",
    "Navigated to the ice maker compartment in the freezer section; confirmed 120V AC supply voltage at the ice maker connector using a multimeter, then disconnected the harness.",
    "Removed the failed ice maker module from its mounting bracket by releasing the retaining clips and disconnecting the water inlet line; installed the replacement ice maker module, reconnected the water line with a secure compression fit, and plugged in the harness connector.",
    "Tested the replacement ice maker by initiating a manual harvest cycle using the test button — confirmed motor rotation, ice ejection arm movement, and water fill valve activation, verifying full functionality.",
    "Accessed the fresh food compartment LED light sockets; removed each failed LED bulb individually and replaced them with compatible LED replacement bulbs of matching voltage and lumen specifications — confirmed illumination of each socket before proceeding to the next.",
    "Restored all shelving and compartment components, reconnected the appliance to power, and monitored freezer temperature descent over 45 minutes — confirmed temperature dropping consistently from ambient toward target operating range, ice maker cycle initiating normally, and all fresh food compartment LEDs illuminated fully."
  ],
  "partsReplaced": [
    "Main control board (defrost signal output failed) — compatible replacement unit matched to appliance wiring harness configuration",
    "Ice maker module assembly — complete replacement unit with integral motor, thermostat, and ejection mechanism",
    "Fresh food compartment LED light bulbs — full set replaced (multiple bulbs, matched voltage/lumen spec to OEM configuration)",
    "R-600a refrigerant system integrity maintained — confirmed 3.5 oz charge per label; sealed system was not opened or disturbed"
  ],
  "result": "Following approximately three hours of diagnostic work and systematic repairs, the refrigerator was returned to full operation. The freezer temperature descended steadily toward 0°F, the fresh food section maintained 37°F, and the ice maker completed its first harvest cycle during the post-repair monitoring period. All LED lights in the fresh food compartment illuminated correctly. The customer was present during final testing and expressed complete satisfaction with the thoroughness of the repair and the clear explanation of each fault that had been resolved.",
  "technicianNotes": "This repair case is a textbook example of how a single appliance can experience multiple simultaneous, unrelated failures — each caused by normal component aging rather than one root cause. For refrigerator owners in the Houston 77082 area, the humid Gulf Coast climate can accelerate moisture-related stress on control boards and lighting components. Watch for these early warning signs: soft or partially thawed food in the upper freezer section (often the first indicator of a defrost system fault), reduced ice production before complete ice maker failure, and flickering lights before they go completely dark. Preventive maintenance tip: keep your freezer at least 70–80% full — a fuller freezer maintains temperature more efficiently and reduces defrost cycle frequency. Avoid placing warm foods directly into the freezer, as this forces excess frost accumulation. If your refrigerator uses R-600a refrigerant (isobutane), be aware this is a flammable gas — always call a certified technician for any sealed system concerns. Never attempt DIY sealed system work on R-600a appliances.",
  "faq": [
    {
      "question": "Why is my freezer not cooling properly even though the compressor is running?",
      "answer": "If your freezer compressor is running but temperatures are too warm, the most common culprit is a failed defrost system. When the main control board stops sending the defrost signal, ice builds up on the evaporator coil, blocking airflow entirely. A technician in Houston can test the defrost output signal with a multimeter and replace the board if the circuit has failed."
    },
    {
      "question": "How much does it cost to repair a refrigerator with a failed defrost board, ice maker, and dead LED lights in Houston, TX?",
      "answer": "A multi-system repair like this — covering a defrost control board, ice maker module replacement, and full LED bulb replacement — typically takes 2.5 to 3.5 hours of labor in the Houston area. Parts costs vary by appliance brand and model. Bundling multiple repairs in a single service visit is significantly more cost-effective than scheduling separate calls for each issue."
    },
    {
      "question": "What are the warning signs that a refrigerator ice maker is about to fail completely?",
      "answer": "Early ice maker warning signs include smaller or misshapen ice cubes, unusually slow production cycles, unusual grinding or clicking sounds during harvest, and ice that clumps together in the bin. If your ice maker receives correct voltage but produces no ice, the internal module has likely failed and needs replacement — a common repair for Houston-area refrigerators."
    },
    {
      "question": "Is it worth repairing a refrigerator when the defrost board, ice maker, and all LED lights fail at the same time?",
      "answer": "Yes — in most cases, repairing a refrigerator with multiple component failures is still cost-effective compared to full replacement, especially if the sealed system (compressor, condenser, evaporator) is intact. When the R-600a refrigerant charge is confirmed correct and the sealed system shows no leaks, the appliance has many years of service life remaining. A certified Houston technician can give you a clear cost-versus-replace assessment."
    },
    {
      "question": "Can all the LED lights in a refrigerator fresh food compartment fail at the same time, and why does this happen?",
      "answer": "Yes — it is not uncommon for an entire set of refrigerator LED bulbs to reach end-of-life simultaneously, especially if they were installed as a batch from the factory. LEDs in refrigerators are subject to repeated thermal cycling (warm to cold and back), which degrades the LED driver circuitry over time. Replacing all bulbs at once with compatible LEDs restores full lighting and prevents repeat service calls."
    }
  ],
  "photos": [
    {
      "src": "/images/repair-unknown-unknown-1.jpeg",
      "caption": "Unknown UNKNOWN repair in Houston, TX — photo 1"
    },
    {
      "src": "/images/repair-unknown-unknown-2.jpeg",
      "caption": "Unknown UNKNOWN repair in Houston, TX — photo 2"
    },
    {
      "src": "/images/repair-unknown-unknown-3.jpeg",
      "caption": "Unknown UNKNOWN repair in Houston, TX — photo 3"
    },
    {
      "src": "/images/repair-unknown-unknown-4.jpeg",
      "caption": "Unknown UNKNOWN repair in Houston, TX — photo 4"
    },
    {
      "src": "/images/repair-unknown-unknown-5.jpeg",
      "caption": "Unknown UNKNOWN repair in Houston, TX — photo 5"
    },
    {
      "src": "/images/repair-unknown-unknown-6.jpeg",
      "caption": "Unknown UNKNOWN repair in Houston, TX — photo 6"
    }
  ],
  "technicianSlug": "serhii-t"
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
      "serviceType": "Defrost System Repair / Ice Maker Replacement / LED Lighting Repair",
      "brand": {
        "@type": "Brand",
        "name": "Unknown"
      },
      "areaServed": {
        "@type": "PostalAddress",
        "postalCode": "77082",
        "addressLocality": "Houston",
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
          "name": "Why is my freezer not cooling properly even though the compressor is running?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your freezer compressor is running but temperatures are too warm, the most common culprit is a failed defrost system. When the main control board stops sending the defrost signal, ice builds up on the evaporator coil, blocking airflow entirely. A technician in Houston can test the defrost output signal with a multimeter and replace the board if the circuit has failed."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to repair a refrigerator with a failed defrost board, ice maker, and dead LED lights in Houston, TX?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A multi-system repair like this — covering a defrost control board, ice maker module replacement, and full LED bulb replacement — typically takes 2.5 to 3.5 hours of labor in the Houston area. Parts costs vary by appliance brand and model. Bundling multiple repairs in a single service visit is significantly more cost-effective than scheduling separate calls for each issue."
          }
        },
        {
          "@type": "Question",
          "name": "What are the warning signs that a refrigerator ice maker is about to fail completely?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Early ice maker warning signs include smaller or misshapen ice cubes, unusually slow production cycles, unusual grinding or clicking sounds during harvest, and ice that clumps together in the bin. If your ice maker receives correct voltage but produces no ice, the internal module has likely failed and needs replacement — a common repair for Houston-area refrigerators."
          }
        },
        {
          "@type": "Question",
          "name": "Is it worth repairing a refrigerator when the defrost board, ice maker, and all LED lights fail at the same time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — in most cases, repairing a refrigerator with multiple component failures is still cost-effective compared to full replacement, especially if the sealed system (compressor, condenser, evaporator) is intact. When the R-600a refrigerant charge is confirmed correct and the sealed system shows no leaks, the appliance has many years of service life remaining. A certified Houston technician can give you a clear cost-versus-replace assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Can all the LED lights in a refrigerator fresh food compartment fail at the same time, and why does this happen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — it is not uncommon for an entire set of refrigerator LED bulbs to reach end-of-life simultaneously, especially if they were installed as a batch from the factory. LEDs in refrigerators are subject to repeated thermal cycling (warm to cold and back), which degrades the LED driver circuitry over time. Replacing all bulbs at once with compatible LEDs restores full lighting and prevents repeat service calls."
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
          "name": "Refrigerator Freezer Not Cooling, Ice Maker Failure & Dead Lights — Houston Repair"
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

              {/* Diagnosis */}
              <div className="bg-brand-light rounded-2xl p-6 border border-blue-100">
                <h2 className="font-display text-xl font-bold text-brand-dark mb-3">🔍 Diagnosis</h2>
                <p className="text-gray-700 leading-relaxed">{d.diagnosis}</p>
              </div>

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

      {/* Photo gallery */}
      {d.photos.length > 0 && (
        <section className="py-12 bg-brand-gray">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">📸 Repair Photos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {d.photos.map((photo, i) => (
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
