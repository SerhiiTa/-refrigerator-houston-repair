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
    image: '/images/repair-subzero-648pro.jpg',
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
    image: '/images/repair-lg.jpg',
  },
  {
    slug: 'thermador-wine-cooler-leak',
    brand: 'Thermador',
    brandSlug: 'thermador',
    model: 'T18IW900SP',
    city: 'The Woodlands',
    area: 'The Woodlands',
    areaSlug: 'spring',
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
    image: '/images/repair-thermador-wine-1.jpg',
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
    image: '/images/repair-ge.jpg',
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
    image: '/images/repair-samsung.jpg',
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
    image: '/images/repair-viking.jpg',
  },
]
