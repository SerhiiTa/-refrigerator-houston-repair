export interface ServiceArea {
  slug: string
  name: string
  intro: string
  localContext: string
  brandsServiced: string[]
  commonProblems: string[]
  nearbyAreas: string[]
  zipCodes: string[]
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'houston',
    name: 'Houston',
    intro: 'Professional refrigerator repair throughout Houston, TX — same day and next day service available.',
    localContext:
      'Houston\'s hot and humid climate puts extra strain on refrigerators year-round. Compressors run harder in summer, and the humidity accelerates door gasket wear. Our Houston-based technicians understand these local conditions and are fully stocked for fast repairs.',
    brandsServiced: ['Sub-Zero', 'Thermador', 'LG', 'Samsung', 'GE', 'Whirlpool', 'KitchenAid', 'Viking'],
    commonProblems: [
      'Not cooling or freezing in summer heat',
      'Ice maker failures from hard water minerals',
      'Condenser coil overheating',
      'Door gasket deterioration from humidity',
    ],
    nearbyAreas: ['Katy', 'Sugar Land', 'Spring', 'Memorial', 'Cypress'],
    zipCodes: ['77001', '77002', '77003', '77004', '77005', '77006', '77007', '77008', '77009', '77010'],
  },
  {
    slug: 'katy',
    name: 'Katy',
    intro: 'Fast refrigerator repair in Katy, TX — serving all neighborhoods including Cinco Ranch, Firethorne, and LaCenterra.',
    localContext:
      'Katy is one of the fastest-growing communities in the Houston area, with many newer luxury homes featuring premium appliance brands. Our Katy technicians are experienced with high-end refrigerators common in Cinco Ranch, Firethorne, and Seven Meadows.',
    brandsServiced: ['Sub-Zero', 'Thermador', 'LG', 'Samsung', 'GE', 'KitchenAid'],
    commonProblems: [
      'New home refrigerator installation issues',
      'Compressor failures in premium brands',
      'Ice maker system problems',
      'Water dispenser leaks',
    ],
    nearbyAreas: ['Houston', 'Sugar Land', 'Fulshear', 'Richmond', 'Cypress'],
    zipCodes: ['77449', '77450', '77494'],
  },
  {
    slug: 'sugar-land',
    name: 'Sugar Land',
    intro: 'Expert refrigerator repair in Sugar Land, TX — covering New Territory, First Colony, and Riverstone.',
    localContext:
      'Sugar Land\'s established neighborhoods like First Colony and newer communities like Riverstone are home to many families relying on quality refrigerators. We provide prompt service throughout Sugar Land with fully stocked vans.',
    brandsServiced: ['Sub-Zero', 'LG', 'Samsung', 'GE', 'Whirlpool', 'KitchenAid'],
    commonProblems: [
      'Refrigerator not cooling properly',
      'Samsung ice maker freeze-ups',
      'LG linear compressor failure',
      'Water filter housing leaks',
    ],
    nearbyAreas: ['Houston', 'Katy', 'Richmond', 'Pearland', 'Missouri City'],
    zipCodes: ['77478', '77479', '77498'],
  },
  {
    slug: 'spring',
    name: 'Spring',
    intro: 'Refrigerator repair in Spring, TX — including The Woodlands area, Spring Klein, and Champion Forest.',
    localContext:
      'Spring and the surrounding areas north of Houston feature a mix of established neighborhoods and newer developments. Our Spring technicians handle everything from basic refrigerator repairs to complex sealed system work on luxury brands.',
    brandsServiced: ['Sub-Zero', 'Thermador', 'LG', 'Samsung', 'GE', 'Whirlpool'],
    commonProblems: [
      'Compressor failures',
      'Temperature inconsistency',
      'Icemaker not working',
      'Freezer frosting over',
    ],
    nearbyAreas: ['Houston', 'Cypress', 'Conroe', 'Tomball', 'The Woodlands'],
    zipCodes: ['77373', '77379', '77380', '77381', '77382', '77383', '77384', '77385', '77386', '77388', '77389', '77391'],
  },
  {
    slug: 'memorial',
    name: 'Memorial',
    intro: 'Premium refrigerator repair in Memorial, Houston — specialists in luxury and built-in refrigerator brands.',
    localContext:
      'Memorial is home to many of Houston\'s finest residences, with a high concentration of Sub-Zero, Thermador, and Viking built-in refrigerators. Our technicians are specifically trained on these premium brands and carry OEM parts.',
    brandsServiced: ['Sub-Zero', 'Thermador', 'Viking', 'KitchenAid', 'GE Monogram'],
    commonProblems: [
      'Sub-Zero sealed system failures',
      'Thermador evaporator issues',
      'Built-in panel alignment',
      'Wine cooler temperature problems',
    ],
    nearbyAreas: ['Houston', 'Katy', 'Energy Corridor', 'River Oaks', 'Galleria'],
    zipCodes: ['77024', '77079', '77055', '77057'],
  },
  {
    slug: 'cypress',
    name: 'Cypress',
    intro: 'Reliable refrigerator repair in Cypress, TX — fast response to Bridgeland, Towne Lake, and Stone Gate.',
    localContext:
      'Cypress is a rapidly growing area with many newer homes featuring modern refrigerator brands. We provide same-day service to Cypress neighborhoods and maintain a local parts inventory for the most common brands.',
    brandsServiced: ['LG', 'Samsung', 'GE', 'Whirlpool', 'KitchenAid', 'Sub-Zero'],
    commonProblems: [
      'LG and Samsung ice maker issues',
      'New appliance warranty repairs',
      'Cooling system failures',
      'Water dispenser problems',
    ],
    nearbyAreas: ['Houston', 'Katy', 'Spring', 'Tomball', 'Hockley'],
    zipCodes: ['77410', '77429', '77433'],
  },
  {
    slug: 'richmond',
    name: 'Richmond',
    intro: 'Refrigerator repair in Richmond & Rosenberg, TX — serving Fort Bend County communities.',
    localContext:
      'Richmond and neighboring Rosenberg in Fort Bend County are growing communities with diverse refrigerator service needs. We cover the full range from budget brands to high-end Sub-Zero and Thermador units.',
    brandsServiced: ['LG', 'Samsung', 'GE', 'Whirlpool', 'Sub-Zero', 'Thermador'],
    commonProblems: [
      'Refrigerator not cooling',
      'Ice maker failures',
      'Compressor issues',
      'Water line problems',
    ],
    nearbyAreas: ['Sugar Land', 'Katy', 'Fulshear', 'Missouri City'],
    zipCodes: ['77406', '77407', '77469', '77471'],
  },
  {
    slug: 'fulshear',
    name: 'Fulshear',
    intro: 'Refrigerator repair in Fulshear, TX — serving Cross Creek Ranch, Fulbrook, and surrounding communities.',
    localContext:
      'Fulshear\'s upscale communities feature many premium appliance brands. With limited local repair options, homeowners rely on our team for fast, expert service with factory-level diagnostics.',
    brandsServiced: ['Sub-Zero', 'Thermador', 'LG', 'Samsung', 'KitchenAid', 'Viking'],
    commonProblems: [
      'Premium brand sealed system failures',
      'Ice maker system issues',
      'Control board failures',
      'Temperature regulation problems',
    ],
    nearbyAreas: ['Katy', 'Richmond', 'Sugar Land', 'Brookshire'],
    zipCodes: ['77441', '77494'],
  },
  {
    slug: 'seabrook',
    name: 'Seabrook',
    intro: 'Refrigerator repair in Seabrook, TX — coastal community appliance service near Clear Lake.',
    localContext:
      'Seabrook\'s coastal environment creates unique challenges for refrigerators — salt air accelerates corrosion and the humidity accelerates seal wear. Our technicians are experienced with these coastal conditions.',
    brandsServiced: ['Sub-Zero', 'LG', 'Samsung', 'GE', 'Whirlpool'],
    commonProblems: [
      'Coastal humidity causing gasket failure',
      'Corrosion-related sealed system leaks',
      'Compressor failures from heat',
      'Ice maker mineral buildup',
    ],
    nearbyAreas: ['Clear Lake', 'League City', 'Webster', 'Friendswood', 'Nassau Bay'],
    zipCodes: ['77586'],
  },
  {
    slug: 'the-woodlands',
    name: 'The Woodlands',
    intro: 'Professional refrigerator repair in The Woodlands, TX — serving Creekside, Panther Creek, Cochran Crossing, Alden Bridge and all surrounding communities.',
    localContext: 'The Woodlands is one of the most affluent master-planned communities in the Houston area, with a high concentration of luxury appliances including Sub-Zero, Thermador, Viking and Wolf. Our technicians are experienced with these premium brands and carry OEM parts for same-day repairs.',
    brandsServiced: ['Sub-Zero', 'Thermador', 'Viking', 'LG', 'Samsung', 'KitchenAid', 'GE'],
    commonProblems: [
      'Sealed system leaks in premium built-in refrigerators',
      'Wine cooler temperature issues',
      'Sub-Zero compressor failures',
      'Ice maker system problems',
    ],
    nearbyAreas: ['Spring', 'Cypress', 'Tomball', 'Conroe', 'Houston'],
    zipCodes: ['77380', '77381', '77382', '77384', '77385', '77386', '77387', '77389'],
  }
]
