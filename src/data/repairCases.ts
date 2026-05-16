export interface RepairCase {
  slug: string
  brand: string
  brandSlug: string
  model: string
  city: string
  area: string
  areaSlug: string
  title: string
  symptoms: string[]
  diagnosis: string
  repairPerformed: string
  partsReplaced: string[]
  result: string
  image?: string
  photos?: { src: string; caption: string }[]
  technicianSlug?: string
}

export const repairCases: RepairCase[] = [
  {
    slug: 'sub-zero-648pro-not-cooling',
    brand: 'Sub-Zero',
    brandSlug: 'sub-zero',
    model: '648PRO',
    city: 'Seabrook',
    area: 'Seabrook',
    areaSlug: 'seabrook',
    title: 'Sub-Zero 648PRO Not Cooling',
    symptoms: [
      'Customer reported refrigerator is not cooling',
      'Light works but temperature in both sections is above 50 degrees F',
      'Unit running but no cold air circulating',
    ],
    diagnosis: 'Found leak in the sealed system at the evaporator. Refrigerant had fully escaped, leaving the compressor running on empty.',
    repairPerformed: 'Repaired sealed system leak, replaced evaporator coil assembly, installed new filter drier, recharged system.',
    partsReplaced: ['Evaporator coil assembly', 'Filter drier', 'R-134a refrigerant charge'],
    result: 'Unit cooling to 37 degrees F refrigerator / 0 degrees F freezer within 4 hours of repair.',
    image: '/images/repair-subzero-648pro.jpeg',
    technicianSlug: 'serhii-t',
  },
  {
    slug: 'lg-compressor-replacement',
    brand: 'LG',
    brandSlug: 'lg',
    model: 'LRMVS3006S',
    city: 'Katy',
    area: 'Katy',
    areaSlug: 'katy',
    title: 'LG Refrigerator Compressor Replacement',
    symptoms: [
      'Refrigerator stopped cooling overnight',
      'Clicking sound from compressor every few minutes',
      'Both fridge and freezer sections warm',
    ],
    diagnosis: 'Linear compressor failed — windings shorted internally. Classic LG linear compressor failure pattern.',
    repairPerformed: 'Replaced linear compressor, vacuumed and recharged sealed system, tested all sensors.',
    partsReplaced: ['LG linear compressor (genuine OEM)', 'Filter drier', 'Refrigerant'],
    result: 'Cooling restored. Customer noted unit is quieter than before.',
    image: '/images/repair-lg.jpeg',
    technicianSlug: 'serhii-t',
  },
  {
    slug: 'thermador-wine-cooler-leak',
    brand: 'Thermador',
    brandSlug: 'thermador',
    model: 'T18IW900SP',
    city: 'The Woodlands',
    area: 'The Woodlands',
    areaSlug: 'the-woodlands',
    title: 'Thermador Built-In Wine Cooler Sealed System Leak Repair',
    symptoms: [
      'Customer reported wine cooler temperature rising above set point',
      'Unit running constantly but not maintaining proper wine storage temperature',
      'Temperature display showing 55 degrees F instead of the set 45 degrees F',
      'Compressor running non-stop without reaching target temperature',
    ],
    diagnosis: 'During diagnostic inspection, technician found a refrigerant leak in the sealed system copper tubing. Leak detection confirmed with leak detector solution — visible bubbling at the leak point in the copper line near the compressor. The unit had lost most of its R-134a charge, causing the compressor to run continuously without achieving proper cooling. This is a common failure point in Thermador built-in wine coolers installed in warm, humid Houston-area environments.',
    repairPerformed: 'Technician opened the sealed system and located the exact leak point in the copper tubing. The leak was brazed and sealed using silver solder. A service valve was welded onto the compressor for future service access. The entire sealed system was then pressure-tested with nitrogen at 150 PSI and held for 30 minutes to confirm no remaining leaks. After passing the pressure test, the system was evacuated with a vacuum pump down to 500 microns to remove all moisture and non-condensables. The system was then recharged by weight with the exact factory-specified amount of R-134a refrigerant per the unit nameplate. Full operation test confirmed proper cooling and temperature stability.',
    partsReplaced: [
      'Sealed system copper tubing repair (brazed)',
      'Service valve welded to compressor',
      'Filter drier',
      'R-134a refrigerant (factory spec charge by weight)',
    ],
    result: 'Wine cooler fully restored to factory performance. Temperature stabilized at 45 degrees F within 2 hours of recharge. Customer saved over $5,000 compared to the cost of purchasing and installing a new Thermador built-in wine cooler. Unit has been operating perfectly since the repair.',
    image: '/images/repair-thermador-wine-1.jpeg',
    photos: [
      { src: '/images/repair-thermador-wine-1.jpeg', caption: 'Thermador T18IW900SP wine cooler in The Woodlands, TX — temperature not maintaining set point' },
      { src: '/images/repair-thermador-wine-3.jpeg', caption: 'Leak detection confirmed — visible bubbling at the leak point in the copper tubing' },
      { src: '/images/repair-thermador-wine-5.jpeg', caption: 'Professional tools on site: manifold gauges, nitrogen tank, vacuum pump and new filter drier' },
      { src: '/images/repair-thermador-wine-6.jpeg', caption: 'Wine cooler during repair — sealed system being serviced' },
    ],
    technicianSlug: 'serhii-t',
  },
  {
    slug: 'sub-zero-evaporator-leak',
    brand: 'Sub-Zero',
    brandSlug: 'sub-zero',
    model: '661',
    city: 'Houston',
    area: 'River Oaks',
    areaSlug: 'houston',
    title: 'Sub-Zero 661 Evaporator Sealed System Leak',
    symptoms: [
      'Refrigerator running warm — 55 degrees F in fridge section',
      'Freezer down to only 20 degrees F instead of 0 degrees F',
      'Unit running constantly',
    ],
    diagnosis: 'Sealed system leak at evaporator. Both compressors operational but unable to maintain temperature due to low refrigerant charge.',
    repairPerformed: 'Located and repaired pinhole leak, replaced drier on both circuits, recharged both sides of the dual compressor system.',
    partsReplaced: ['Evaporator repair', 'Dual circuit filter driers (x2)', 'Refrigerant (both circuits)'],
    result: 'Both sections restored to proper temps. 1-year warranty on sealed system work.',
    image: '/images/repair-subzero-661-exterior.jpeg',
    technicianSlug: 'serhii-t',
  },
  {
    slug: 'samsung-ice-maker-repair',
    brand: 'Samsung',
    brandSlug: 'samsung',
    model: 'RF28R7551SR',
    city: 'Katy',
    area: 'Katy',
    areaSlug: 'katy',
    title: 'Samsung Ice Maker Freeze-Up Repair',
    symptoms: [
      'Ice maker stopped producing ice',
      'Ice clumped together and jammed dispenser',
      'Water leaking inside refrigerator',
    ],
    diagnosis: 'Ice maker evaporator froze over due to defrost system failure. Heater element burned out.',
    repairPerformed: 'Replaced defrost heater, defrost thermostat, manually defrosted unit, tested ice maker operation.',
    partsReplaced: ['Defrost heater assembly', 'Defrost thermostat', 'Ice maker module'],
    result: 'Ice maker producing ice normally. No further leaking.',
    image: '/images/repair-samsung.jpeg',
    technicianSlug: 'serhii-t',
  },
  {
    slug: 'viking-not-cooling',
    brand: 'Viking',
    brandSlug: 'viking',
    model: 'VCBB5363ELSS',
    city: 'Memorial',
    area: 'Memorial',
    areaSlug: 'memorial',
    title: 'Viking Built-In Not Cooling',
    symptoms: [
      'Viking refrigerator not maintaining temperature',
      'Compressor running but not cooling',
      'Unusual noise from back of unit',
    ],
    diagnosis: 'Condenser fan motor failed. Compressor overheating and shutting down on thermal overload.',
    repairPerformed: 'Replaced condenser fan motor, cleaned condenser coils, verified compressor operation.',
    partsReplaced: ['Condenser fan motor', 'Fan blade'],
    result: 'Unit cooling properly. Temperature stable at 37 degrees F.',
    image: '/images/repair-viking.jpeg',
    technicianSlug: 'serhii-t',
  },
  {
    slug: 'bosch-b36ct80sns-freezer-evaporator-leak-repair',
    brand: 'Bosch',
    brandSlug: 'bosch',
    model: 'B36CT80SNS',
    city: 'Memorial',
    area: 'Memorial',
    areaSlug: 'memorial',
    title: 'Bosch B36CT80SNS Freezer Not Cooling — Evaporator Leak Repair',
    symptoms: [
      'Freezer section not cooling — temperature measured at approximately 70°F instead of 0°F',
      'Food in the freezer thawing or completely warm to the touch',
      'Compressor running continuously but no cold air produced in the freezer compartment',
      'No ice production and freezer interior feeling like room temperature',
    ],
    diagnosis: 'Upon arrival at the customer\'s home in the Memorial area (ZIP 77043), the technician confirmed the complaint: the freezer section of the Bosch B36CT80SNS French door refrigerator was not cooling. An infrared thermometer reading inside the freezer registered approximately 70°F — far above the required operating range of 0°F to 5°F. The fresh food compartment was marginally cooler but also above safe food storage temperature.\n\nThe technician first verified that the compressor was running by listening and feeling for vibration at the rear of the unit — the compressor was confirmed operational. A piercing valve (Schrader-type access valve) was installed on the process tube to connect the manifold gauge set without permanently altering the sealed system. Gauge readings revealed an extremely deep vacuum of approximately -18 inches Hg (negative pressure), which is a definitive indicator that refrigerant had fully escaped the system. The label on the unit confirmed the refrigerant type as R-600a (isobutane) at a factory charge of 1.55 oz / 44 g, operating at 110–127V / 60 Hz, 3.5 A.\n\nTo locate the leak, the technician pressurized the sealed system with dry nitrogen. A leak was detected at the evaporator coil using an electronic leak detector, confirmed with soapy solution. The evaporator coil showed a pinhole breach, likely caused by ice buildup erosion or a micro-crack in the aluminum tubing. Replacement of the evaporator was deemed the only viable repair path.',
    repairPerformed: 'Performed initial system diagnostic: confirmed freezer temperature at ~70°F with digital thermometer; verified compressor operation by physical inspection at the rear of the unit.. Installed a Schrader piercing valve on the low-side process tube to access the sealed refrigeration system without cutting the line.. Connected a manifold gauge set to the piercing valve and recorded system pressure at approximately -18 in. Hg (deep vacuum), confirming total loss of R-600a refrigerant charge.. Pressurized the sealed system with dry nitrogen to approximately 150 PSI to perform a leak search without introducing flammable refrigerant into an open system.. Used an electronic refrigerant leak detector and soapy bubble solution to pinpoint the leak location — identified a breach at the evaporator coil inside the freezer compartment.. Removed all freezer interior panels, shelving, ice maker components, and insulation wrap to gain full access to the evaporator assembly.. Carefully cut and removed the faulty evaporator coil; captured any residual nitrogen pressure safely before disconnecting tubing.. Installed the OEM-equivalent replacement evaporator coil, silver-brazed all joints using nitrogen purge brazing technique to prevent internal oxidation scaling.. Re-pressurized the completed sealed system with dry nitrogen to 150 PSI and held for 30 minutes — no pressure drop detected, confirming leak-free repair.. Connected a two-stage vacuum pump and evacuated the sealed system down to 500 microns; held vacuum for 15 minutes to verify system integrity before charging.. Charged the sealed system with R-600a refrigerant to the factory specification of 1.55 oz / 44 g as stated on the appliance nameplate label.. Restored all interior panels and components, powered on the unit, and monitored compressor amperage draw against the rated 3.5 A baseline — readings were within normal range. Verified freezer temperature drop over the test period.',
    partsReplaced: [
      'Evaporator coil assembly — OEM-equivalent replacement for Bosch B36CT80SNS freezer compartment',
      'Schrader piercing valve (low-side process tube access fitting)',
      'R-600a isobutane refrigerant — 1.55 oz / 44 g per factory nameplate specification',
    ],
    result: 'After recharging the sealed system with the factory-specified 1.55 oz of R-600a and restarting the compressor, the freezer compartment began cooling immediately. Within approximately 3–4 hours of monitored operation, the freezer reached a stable temperature of 2°F and the fresh food section stabilized at 37°F — both within optimal ranges. The customer was very satisfied with the same-day repair outcome. A 90-day labor warranty was provided on the sealed system repair and the replacement evaporator coil.',
    image: '/images/repair-bosch-b36ct80sns-2.jpeg',
    photos: [
      { src: '/images/repair-bosch-b36ct80sns-1.jpeg', caption: 'Bosch B36CT80SNS repair in Memorial, TX' },
      { src: '/images/repair-bosch-b36ct80sns-2.jpeg', caption: 'Bosch B36CT80SNS repair in Memorial, TX' },
      { src: '/images/repair-bosch-b36ct80sns-3.jpeg', caption: 'Bosch B36CT80SNS repair in Memorial, TX' },
      { src: '/images/repair-bosch-b36ct80sns-4.jpeg', caption: 'Bosch B36CT80SNS repair in Memorial, TX' },
      { src: '/images/repair-bosch-b36ct80sns-5.jpeg', caption: 'Bosch B36CT80SNS repair in Memorial, TX' },
    ],
    technicianSlug: 'serhii-t',
  },
  {
    slug: 'scotsman-scn60-ice-maker-water-seal-repair',
    brand: 'Scotsman',
    brandSlug: 'scotsman',
    model: 'SCN60',
    city: 'Memorial',
    area: 'Memorial',
    areaSlug: 'memorial',
    title: 'Scotsman SCN60 Ice Maker Not Making Ice — Drain Pump Running Constantly',
    symptoms: [
      'Ice maker stopped producing ice entirely',
      'Drain pump running continuously and audibly without stopping',
      'Water leaking through evaporator and draining away instead of freezing',
      'No ice in the bin despite unit appearing to run normally',
    ],
    diagnosis: 'Upon receiving the Scotsman SCN60 ice maker service call in Memorial, TX 77024, the technician began a systematic inspection of the unit. The customer reported that the machine had not been producing ice for several days and that the drain pump could be heard operating almost continuously — an immediate red flag indicating water was not being retained in the evaporator as intended during the freeze cycle.\n\nThe technician removed the front panel and inspected the water distribution system, freeze plate, and evaporator assembly. Visual inspection revealed active water leakage around the evaporator shaft seal area. Water was bypassing the evaporator entirely and flowing directly into the drain pan, which explained the constant drain pump activation. The unit was cycling through its normal sequence, but because water could not accumulate on the freeze plate, no ice was being formed.\n\nFurther disassembly of the evaporator shaft assembly exposed the root cause: the mechanical ceramic water seal — a precision component designed to maintain a watertight barrier between the rotating shaft and the water reservoir — had cracked and disintegrated. Additionally, the carbon (graphite) bearing that supports the shaft had worn completely beyond serviceable limits. Both components are subject to normal wear over extended service cycles, but their simultaneous failure caused total loss of ice production. No refrigerant leaks or electrical faults were detected. The compressor, refrigerant circuit, and control board were all confirmed functional.',
    repairPerformed: 'Disconnected the Scotsman SCN60 from power and water supply before beginning disassembly to ensure safe working conditions.. Removed the outer cabinet panels and front service cover to gain full access to the evaporator and water distribution assembly.. Drained remaining water from the internal reservoir and water circuits to prevent contamination during component removal.. Disassembled the evaporator shaft assembly, carefully extracting the worn carbon (graphite) bearing from its housing — bearing showed severe erosion and flattening on the contact surface.. Removed the failed mechanical ceramic water seal from the evaporator shaft. The ceramic face was found cracked and the rubber boot had hardened and lost elasticity, causing the seal failure.. Ordered OEM-specification replacement parts: new mechanical water-sealed ceramic shaft seal and compatible carbon bearing assembly for the Scotsman SCN60 — parts arrived within three business days.. Cleaned all mating surfaces on the evaporator shaft and housing using appropriate solvents to remove mineral deposits and seal residue before installing new components.. Installed the new carbon bearing into the evaporator housing, pressing it to the correct seating depth per Scotsman service specifications.. Installed the new ceramic mechanical water seal onto the evaporator shaft, ensuring proper orientation of the ceramic face and correct compression of the spring-loaded assembly.. Reassembled the evaporator shaft assembly and reinstalled it into the evaporator body, torquing fasteners to specification.. Performed a full cleaning of external cabinet surfaces and internal water circuits, including the water distribution tubes, reservoir, and drain pan, using Scotsman-approved nickel-safe cleaner to remove scale buildup.. Reconnected water supply and power, initiated a full freeze cycle, and confirmed the drain pump was no longer running continuously. The unit produced a full batch of ice within the first cycle, verifying successful repair.',
    partsReplaced: [
      'Mechanical water-sealed ceramic shaft seal (OEM-specification, compatible with Scotsman SCN60 evaporator assembly)',
      'Carbon (graphite) bearing for evaporator shaft (worn beyond serviceable limits, replaced with OEM-equivalent)',
    ],
    result: 'Following the replacement of the ceramic water seal and carbon bearing, the Scotsman SCN60 resumed full normal operation. The drain pump stopped its continuous cycling immediately upon the first test run, confirming that water was now being retained properly in the evaporator. The unit produced a complete ice batch within the first freeze cycle after repair. Total repair time on-site was approximately half a day. The customer was satisfied with the quick turnaround — parts arrived in three days and the repair was completed the same morning. A standard 90-day labor warranty was provided on the replaced components.',
    image: '/images/repair-scotsman-scn60-2.jpeg',
    photos: [
      { src: '/images/repair-scotsman-scn60-1.jpeg', caption: 'Scotsman SCN60 repair in Memorial, TX' },
      { src: '/images/repair-scotsman-scn60-2.jpeg', caption: 'Scotsman SCN60 repair in Memorial, TX' },
      { src: '/images/repair-scotsman-scn60-3.jpeg', caption: 'Scotsman SCN60 repair in Memorial, TX' },
      { src: '/images/repair-scotsman-scn60-4.jpeg', caption: 'Scotsman SCN60 repair in Memorial, TX' },
      { src: '/images/repair-scotsman-scn60-5.jpeg', caption: 'Scotsman SCN60 repair in Memorial, TX' },
      { src: '/images/repair-scotsman-scn60-6.jpeg', caption: 'Scotsman SCN60 repair in Memorial, TX' },
    ],
    technicianSlug: 'serhii-t',
  },
  {
      "slug": "sub-zero-632f-door-gasket-replacement-houston",
      "brand": "Sub-Zero",
      "brandSlug": "sub-zero",
      "model": "632F",
      "city": "Houston",
      "area": "Houston",
      "areaSlug": "houston",
      "title": "Sub-Zero 632F Door Gasket Replacement",
      "symptoms": [
          "Visible tear and gaps in the refrigerator door seal",
          "Warm air leaking into the fresh food compartment, causing the unit to run longer than normal",
          "Condensation and frost buildup around the door frame area",
          "Interior temperatures slightly higher than expected set point"
      ],
      "diagnosis": "Upon arrival at the customer's residence in Houston, TX 77042, the technician performed a thorough inspection of the Sub-Zero Model 632F refrigerator (Serial P2951517, manufactured in Madison, WI). The unit operates on R-134a refrigerant with a 2.00a charge and draws 9.0 amps at rated load. The customer reported that the door gasket had been pulled on repeatedly by young children in the household, resulting in a visible tear along one section of the fresh food door seal.\n\nThe technician confirmed the damage by direct visual inspection — the gasket was torn in multiple places and had lost its magnetic retention capability along a significant portion of the door perimeter. A dollar-bill test was performed at several points around the door; the bill pulled out with little to no resistance in the affected areas, confirming substantial seal failure. The technician also used an infrared thermometer to detect warm ambient air infiltration at the breach points. A multimeter verified that amperage draw was elevated slightly above the label-rated 9.0A baseline, consistent with the compressor working harder to compensate for the thermal loss caused by the compromised seal. No refrigerant leaks were detected via electronic leak detector, and system pressures checked with manifold gauges were within normal operating range for R-134a. The sealed system itself was intact; the root cause was isolated entirely to the mechanical failure of the door gasket.",
      "repairPerformed": "Performed initial visual inspection of the Sub-Zero 632F door gasket; photographed the torn sections for documentation (visible in photo 3 of the case file).. Conducted a dollar-bill pull test at six points around the full door perimeter to map all areas of seal failure and confirm the extent of gasket compromise.. Used an infrared thermometer to detect warm air infiltration at the breach points and an electronic manifold gauge set to verify R-134a system pressures — both high-side and low-side — were within specification.. Verified amperage draw with a clamp meter; reading was slightly above the label-rated 9.0A, consistent with compressor overwork due to the air leak.. Identified the correct OEM-compatible replacement gasket for Sub-Zero Model 632F fresh food door and placed an expedited parts order; the gasket was shipped from Dallas and delivered to Houston within 2 business days.. Upon part arrival, powered down the unit and carefully removed the existing torn gasket by loosening the door liner retaining screws along the full door perimeter.. Cleaned the door liner channel thoroughly with a mild detergent solution to remove debris, old gasket adhesive residue, and food particles that had accumulated in the track.. Soaked the new OEM gasket in warm water for approximately 10 minutes to make it pliable for proper seating, then carefully pressed it into the door liner channel starting at the top corners and working around the perimeter.. Reinstalled and torqued all door liner retaining screws evenly to manufacturer specification to ensure uniform gasket compression across the full door frame.. Checked and adjusted door alignment and hinge tension to confirm the door closed squarely and the gasket seated evenly against the cabinet frame on all four sides.. Performed a comprehensive preventive maintenance service on the full unit: cleaned condenser coils, inspected evaporator fan motors, verified defrost cycle operation, and cleaned interior drain lines.. Powered the unit back on, monitored startup amperage draw, confirmed it returned to the 9.0A label baseline, and verified interior temperatures stabilized within the Sub-Zero operating range before closing the service call.",
      "partsReplaced": [
          "Sub-Zero 632F OEM Fresh Food Door Gasket (magnetic, full-perimeter replacement, shipped from Dallas distribution center)"
      ],
      "result": "Following the gasket replacement and full preventive maintenance service, the Sub-Zero 632F returned to optimal operation. The door seal passed the dollar-bill test at all points around the perimeter, and interior temperatures stabilized within the manufacturer-specified range within approximately two hours of restart. Amperage draw confirmed at the label-rated 9.0A baseline. The customer was very satisfied with the quality of the repair and the additional maintenance performed. A service warranty was provided on the labor and the installed gasket.",
      "image": "/images/repair-sub-zero-632f-4.jpeg",
      "photos": [
          {
              "src": "/images/repair-sub-zero-632f-1.jpeg",
              "caption": "Sub-Zero 632F repair in Houston, TX"
          },
          {
              "src": "/images/repair-sub-zero-632f-2.jpeg",
              "caption": "Sub-Zero 632F repair in Houston, TX"
          },
          {
              "src": "/images/repair-sub-zero-632f-3.jpeg",
              "caption": "Sub-Zero 632F repair in Houston, TX"
          },
          {
              "src": "/images/repair-sub-zero-632f-4.jpeg",
              "caption": "Sub-Zero 632F repair in Houston, TX"
          }
      ],
      "technicianSlug": "serhii-t"
  },
]
