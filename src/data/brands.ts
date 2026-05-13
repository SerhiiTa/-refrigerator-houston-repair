export interface Brand {
  slug: string
  name: string
  tagline: string
  intro: string
  commonProblems: string[]
  popularModels: string[]
  repairCaseSlugs: string[]
}

export const brands: Brand[] = [
  {
    slug: 'sub-zero',
    name: 'Sub-Zero',
    tagline: 'Premium Built-In Refrigerator Specialists',
    intro:
      'Sub-Zero refrigerators are among the finest built-in units available, known for their dual compressor technology and exceptional longevity. Our technicians are factory-trained to diagnose and repair the full Sub-Zero lineup.',
    commonProblems: [
      'Sealed system failures (evaporator/compressor leaks)',
      'Ice maker not producing ice',
      'Temperature fluctuation in one or both compartments',
      'Condenser fan motor failure',
      'Door gasket wear causing warm compartments',
      'Control board malfunction (ERR codes)',
    ],
    popularModels: ['648PRO', '650', '661', '700BC', '736TCI', 'BI-36U', 'BI-42S'],
    repairCaseSlugs: ['sub-zero-648pro-not-cooling', 'sub-zero-evaporator-leak'],
  },
  {
    slug: 'thermador',
    name: 'Thermador',
    tagline: 'Luxury Refrigerator & Wine Cooler Repair',
    intro:
      'Thermador refrigerators combine professional design with cutting-edge cooling technology. From column fridges to wine preservation units, our team handles every Thermador model.',
    commonProblems: [
      'Evaporator coil freeze-up',
      'Water dispenser not working',
      'Ice machine jammed or leaking',
      'Compressor overheating',
      'Wine cooler temperature inconsistency',
      'Smart connectivity errors',
    ],
    popularModels: ['T36IR905SP', 'T24IR905SP', 'KBUIT4866E', 'T36BB915SS'],
    repairCaseSlugs: ['thermador-wine-cooler-leak'],
  },
  {
    slug: 'lg',
    name: 'LG',
    tagline: 'Linear Compressor & French Door Specialists',
    intro:
      'LG refrigerators are widely used across Houston homes. Our technicians are experienced with LG's linear compressor technology, InstaView doors, and Smart Diagnosis systems.',
    commonProblems: [
      'Linear compressor failure',
      'Ice maker freezing over',
      'French door not sealing properly',
      'Cooling fan not spinning',
      'Water filter housing leaks',
      'Control board errors',
    ],
    popularModels: ['LRMVS3006S', 'LRFXS2503S', 'LRFOC2606S', 'LRMDC2306S'],
    repairCaseSlugs: ['lg-compressor-replacement'],
  },
  {
    slug: 'samsung',
    name: 'Samsung',
    tagline: 'French Door & Side-by-Side Repair Experts',
    intro:
      'Samsung refrigerators are feature-rich and popular throughout the Houston area. We diagnose and repair ice maker defects, freezing issues, and Family Hub connectivity problems.',
    commonProblems: [
      'Ice maker freezing and clogging',
      'Freezer section too warm',
      'Ice dispenser motor failure',
      'Water leaking inside fridge',
      'Family Hub display errors',
      'Defrost system failure',
    ],
    popularModels: ['RF28R7551SR', 'RS27T5200SR', 'RF23M8090SG', 'RF22R7551DT'],
    repairCaseSlugs: [],
  },
  {
    slug: 'ge',
    name: 'GE',
    tagline: 'GE Profile & Monogram Repair in Houston',
    intro:
      'GE and GE Profile refrigerators are dependable American-made units. Our technicians handle everything from basic thermostat issues to advanced Monogram built-in repairs.',
    commonProblems: [
      'Not cooling or freezing',
      'Ice maker not dispensing',
      'Water dispenser dripping',
      'Noisy compressor or fan',
      'Temperature sensor failure',
      'Door hinge misalignment',
    ],
    popularModels: ['GFE28GYNFS', 'GNE27JYMFS', 'PFE28KYNFS', 'ZIS480NXLH'],
    repairCaseSlugs: [],
  },
  {
    slug: 'whirlpool',
    name: 'Whirlpool',
    tagline: 'Trusted Whirlpool Repair Across Houston',
    intro:
      'Whirlpool is one of the most common refrigerator brands in Houston homes. We repair all models quickly and affordably, with same-day service available in most areas.',
    commonProblems: [
      'Refrigerator not cooling',
      'Ice maker leaking water',
      'Freezer frosting over',
      'Water dispenser slow or stopped',
      'Compressor clicking on and off',
      'Door gasket torn',
    ],
    popularModels: ['WRF535SWHZ', 'WRS325SDHZ', 'WRB322DMBM', 'WRT518SZFM'],
    repairCaseSlugs: [],
  },
  {
    slug: 'kitchenaid',
    name: 'KitchenAid',
    tagline: 'Built-In & Counter-Depth KitchenAid Repair',
    intro:
      'KitchenAid refrigerators share engineering DNA with Sub-Zero and Whirlpool platforms. Our technicians know these units inside and out, from the cooling system to the ice and water dispensers.',
    commonProblems: [
      'Ice maker not producing',
      'Temperature inconsistency',
      'Water leaking from dispenser',
      'Compressor noise',
      'Evaporator fan failure',
      'Control panel unresponsive',
    ],
    popularModels: ['KRMF706ESS', 'KRFC300ESS', 'KBFN502ESS', 'KRSF705HBS'],
    repairCaseSlugs: [],
  },
  {
    slug: 'viking',
    name: 'Viking',
    tagline: 'Professional Viking Refrigerator Repair',
    intro:
      'Viking refrigerators are built to professional standards and require experienced hands. We service all Viking built-in and freestanding models throughout Houston.',
    commonProblems: [
      'Compressor not starting',
      'Ice maker system failure',
      'Sealed system leak',
      'Control board failure',
      'Cooling issues after power surge',
      'Door alignment problems',
    ],
    popularModels: ['VCBB5363ELSS', 'VCRB5363ELSS', 'DFBB163DLP', 'RVRF336SS'],
    repairCaseSlugs: [],
  },
]
