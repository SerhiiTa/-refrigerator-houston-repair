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
      'Light works but temperature in both sections is above 50°F',
      'Unit running but no cold air circulating',
    ],
    diagnosis: 'Found leak in the sealed system at the evaporator. Refrigerant had fully escaped, leaving the compressor running on empty.',
    repairPerformed: 'Repaired sealed system leak, replaced evaporator coil assembly, installed new filter drier, recharged system.',
    partsReplaced: ['Evaporator coil assembly', 'Filter drier', 'R-134a refrigerant charge'],
    result: 'Unit cooling to 37°F refrigerator / 0°F freezer within 4 hours of repair.',
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
    model: 'T24IR905SP',
    city: 'Memorial',
    area: 'Memorial',
    areaSlug: 'memorial',
    title: 'Thermador Wine Cooler Leak Repair',
    symptoms: [
      'Wine cooler not maintaining temperature (showing 62°F instead of 55°F)',
      'Slight hissing sound near back panel',
      'Unit running constantly',
    ],
    diagnosis: 'Evaporator leak causing refrigerant loss. Leak detected at evaporator inlet fitting.',
    repairPerformed: 'Repaired evaporator leak, pressure tested sealed system, recharged with correct refrigerant.',
    partsReplaced: ['Evaporator fitting repair', 'Filter drier', 'Refrigerant recharge'],
    result: 'Wine cooler maintaining 54°F consistently.',
    image: '/images/repair-bosch.jpg',
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
      'Refrigerator running warm — 55°F in fridge section',
      'Freezer down to only 20°F instead of 0°F',
      'Unit running constantly',
    ],
    diagnosis: 'Sealed system leak at evaporator. Both compressors operational but unable to maintain temperature.',
    repairPerformed: 'Located and repaired pinhole leak, replaced drier on both circuits, recharged both sides.',
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
    result: 'Unit cooling properly. Temperature stable at 37°F.',
    image: '/images/repair-viking.jpg',
  },
]
