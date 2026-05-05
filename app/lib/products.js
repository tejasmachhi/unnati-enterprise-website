const products = [
  // Head & Face Protection
  { 
    id: 1, 
    slug: 'venus-v44-safety-mask',
    name: 'Venus V44 Safety Mask', 
    category: 'Head & Face Protection', 
    description: 'Professional Venus V44 protective mask with advanced filtration. Engineered for maximum respiratory protection in industrial environments. NIOSH/ISI certified for safety compliance. Bulk orders available for industries in India – Enquire now.',
    price: '450', 
    icon: '👷', 
    image: '/images/products/venus-mask.jpg' 
  },
  { 
    id: 2, 
    slug: 'venus-v410-dual-cartridge-mask',
    name: 'Venus V410 Dual Cartridge Mask', 
    category: 'Head & Face Protection', 
    description: 'Advanced Venus V410 safety mask with dual cartridge system. Provides high-level protection against chemical vapors and particulates. ISI certified industrial grade gear. Trusted by chemical plants across Gujarat – Get best price today.',
    price: '550', 
    icon: '👷', 
    image: '/images/products/venus-v-410.webp' 
  },
  { 
    id: 3, 
    slug: '3m-cartridge-mask-industrial',
    name: '3M Cartridge Mask', 
    category: 'Head & Face Protection', 
    description: 'Genuine 3M industrial cartridge mask for professional chemical protection. Replaceable filters ensure long-term durability and safety. Meets global NIOSH standards. Essential PPE for high-risk industrial sites – Contact for bulk supply.',
    price: '2,500', 
    icon: '👷', 
    image: '/images/products/3m-mask.jpg' 
  },
  { 
    id: 9, 
    slug: 'karam-industrial-safety-helmet',
    name: 'Karam Industrial Safety Helmet', 
    category: 'Head & Face Protection', 
    description: 'Premium Karam industrial safety helmet with adjustable chin strap. High-impact resistant shell for construction and factory use. ISI certified for total head protection. Available in multiple colors for large workforce – Enquire for bulk rates.',
    price: '1,500', 
    icon: '👷', 
    image: '/images/products/karam-helmet.jpg' 
  },

  // Hand Protection
  { 
    id: 26, 
    slug: 'cotton-dotted-safety-gloves',
    name: 'Cotton Dotted Safety Gloves', 
    category: 'Hand Protection', 
    description: 'High-grip cotton dotted gloves for industrial handling. Provides comfort and anti-slip protection for warehouse workers. Durable and washable for extended use. Top-selling industrial safety gloves in Ahmedabad – Get bulk quote.',
    price: '150', 
    icon: '🧤', 
    image: '/images/products/dotted-gloves.jpg' 
  },
  { 
    id: 30, 
    slug: 'kevlar-cut-resistant-gloves',
    name: 'Kevlar Cut Resistant Gloves', 
    category: 'Hand Protection', 
    description: 'Premium Kevlar cut-resistant gloves for handling sharp industrial objects. Offers maximum hand protection with lightweight flexibility. CE & EN certified for high-risk tasks. Ideal for metal and glass industries – Bulk supply India.',
    price: '1,500', 
    icon: '🧤', 
    image: '/images/products/kevlar-gloves.jpg' 
  },

  // Road Safety
  { 
    id: 52, 
    slug: 'rubber-base-traffic-cone',
    name: 'Rubber Base Traffic Cone', 
    category: 'Road Safety Equipment', 
    description: 'Durable rubber base traffic cone with high-visibility reflective bands. Engineered for road construction and parking management. Weather-resistant and stable in high winds. Professional road safety equipment supplier India – Enquire now.',
    price: '450', 
    icon: '🚧', 
    image: '/images/products/traffic-cone.jpg' 
  },

  // Fire Safety
  { 
    id: 62, 
    slug: 'abc-type-fire-extinguisher',
    name: 'ABC Type Fire Extinguisher', 
    category: 'Fire Safety Equipment', 
    description: 'Multi-purpose ABC type fire extinguisher for industrial and office safety. Effective against Class A, B, and C fires. ISI certified with easy-to-use discharge mechanism. Mandatory safety gear for Gujarat factories – Best price guaranteed.',
    price: '3,500', 
    icon: '🔥', 
    image: '/images/products/fire-extinguisher.jpg' 
  },

  // Safety Shoes
  { 
    id: 71, 
    slug: 'steel-toe-industrial-safety-shoes',
    name: 'Steel Toe Industrial Safety Shoes', 
    category: 'Safety Shoes & Gumboots', 
    description: 'Heavy-duty steel toe safety shoes with puncture-resistant soles. Designed for maximum protection in construction and heavy industry. ISI certified and oil-resistant. Premium safety footwear wholesaler Ahmedabad – Contact for bulk.',
    price: '2,500', 
    icon: '👞', 
    image: '/images/products/steel-toe.jpg' 
  },

  // Adding the rest with auto-generated slugs and improved descriptions
  { id: 4, slug: 'disposable-protective-cap', name: 'Disposable Cap', category: 'Head & Face Protection', description: 'Single-use protective cap for clean industrial environments. Light and breathable design. Enquire for bulk.', price: '25', icon: '👷', image: '/images/products/disposable_cap.png' },
  { id: 5, slug: 'industrial-shoe-cover', name: 'Shoe Cover', category: 'Head & Face Protection', description: 'Protective shoe covering for sterile industrial areas. Durable and slip-resistant. Bulk supply Ahmedabad.', price: '40', icon: '👷', image: '/images/products/shoe_cover.png' },
  { id: 6, slug: 'disposable-face-shield-anti-fog', name: 'Disposable Face Shield', category: 'Head & Face Protection', description: 'Clear protective face shield with anti-fog coating. Complete face protection for industrial use. ISI standards.', price: '150', icon: '👷', image: '/images/products/face-shield.jpg' },
  { id: 7, slug: 'dr-green-surgical-cap', name: 'Dr. Green Cap', category: 'Head & Face Protection', description: 'Surgical grade protective cap with breathable industrial fabric. Certified safety gear.', price: '35', icon: '👷', image: '/images/products/dr-green-cap.jpg' },
  { id: 8, slug: '3m-n95-respiratory-mask', name: '3M Mask N95', category: 'Head & Face Protection', description: 'Original 3M N95 protective mask for particulate filtering. High-efficiency industrial respirator. Global safety standards.', price: '200', icon: '👷', image: '/images/products/3m-mask.jpg' },
  { id: 10, slug: 'saviour-premium-safety-helmet', name: 'Saviour Helmet', category: 'Head & Face Protection', description: 'Premium Saviour safety helmet with ventilation and high-impact resistance. ISI certified.', price: '1,800', icon: '👷', image: '/images/products/karam-helmet.jpg' },
  { id: 11, slug: 'anti-scratch-safety-goggles', name: 'Safety Goggles', category: 'Head & Face Protection', description: 'Anti-scratch safety goggles with UV protection. Clear vision for industrial tasks. Certified eye protection.', price: '350', icon: '👷', image: '/images/products/safety_goggles.png' },
  { id: 12, slug: 'auto-darkening-welding-helmet', name: 'Welding Helmet', category: 'Head & Face Protection', description: 'Auto-darkening welding helmet for professional eye protection. High-speed switching and CE certified.', price: '4,500', icon: '👷', image: '/images/products/welding-helmet.png' },
  
  { id: 27, slug: 'heavy-duty-industrial-rubber-gloves', name: 'Industrial Rubber Gloves', category: 'Hand Protection', description: 'Heavy-duty industrial rubber gloves for chemical and liquid handling. Durable protection. Bulk supply.', price: '450', icon: '🧤', image: '/images/products/rubber-gloves.jpg' },
  { id: 28, slug: 'acid-resistant-hand-gloves', name: 'Acid Hand Gloves', category: 'Hand Protection', description: 'Chemical-resistant gloves specialized for acid handling. High safety rating for lab and factory use.', price: '800', icon: '🧤', image: '/images/products/acid-gloves.jpg' },
  { id: 29, slug: 'chrome-leather-work-gloves', name: 'Chrome Leather Gloves', category: 'Hand Protection', description: 'Premium chrome leather work gloves with reinforced palms. Maximum durability for heavy labor.', price: '1,200', icon: '🧤', image: '/images/products/leather-gloves.jpg' },
  { id: 31, slug: 'disposable-nitrile-safety-gloves', name: 'Nitrile Gloves', category: 'Hand Protection', description: 'Disposable nitrile gloves for medical and industrial use. Latex-free and puncture resistant.', price: '120', icon: '🧤', image: '/images/products/nitrile-gloves.jpg' },
  { id: 32, slug: 'heat-resistant-welding-gloves', name: 'Heat Resistant Gloves', category: 'Hand Protection', description: 'High-temperature resistant welding gloves for thermal protection. Premium safety grade.', price: '950', icon: '🧤', image: '/images/products/heat-gloves.jpg' },
  { id: 33, slug: 'insulated-electrician-safety-gloves', name: 'Electrician Gloves', category: 'Hand Protection', description: 'Insulated gloves for high-voltage electrical work. Certified safety for electricians.', price: '2,200', icon: '🧤', image: '/images/products/electrician-gloves.jpg' },

  { id: 41, slug: 'sunline-uv-protective-goggles', name: 'Sunline Goggles', category: 'Eye & Body Protection', description: 'Sunline UV-protective safety goggles with anti-fog. Clear vision in bright industrial environments.', price: '450', icon: '👓', image: '/images/products/sunline-goggles.jpg' },
  { id: 42, slug: 'emergency-eye-wash-bottle', name: 'Eye Wash Bottle', category: 'Eye & Body Protection', description: 'Emergency eye wash solution bottle for industrial first aid. Essential safety station equipment.', price: '200', icon: '👓', image: '/images/products/eye-wash.jpg' },
  { id: 43, slug: 'industrial-boiler-suit', name: 'Boiler Suit', category: 'Eye & Body Protection', description: 'Full-body industrial boiler suit for heavy duty work. High-quality fabric for worker protection.', price: '1,200', icon: '👓', image: '/images/products/boiler-suit.jpg' },
  { id: 44, slug: 'high-visibility-reflective-safety-vest', name: 'Safety Vest', category: 'Eye & Body Protection', description: 'High-visibility reflective safety vest for construction and road work. ISI certified materials.', price: '350', icon: '👓', image: '/images/products/safety-vest.jpg' },
  { id: 45, slug: 'fall-protection-full-body-harness', name: 'Full Body Harness', category: 'Eye & Body Protection', description: 'Fall protection harness with safety lanyard for high-altitude industrial work. Certified safety.', price: '2,800', icon: '👓', image: '/images/products/full-body-harness.jpg' },
  { id: 46, slug: 'chemical-protection-suit', name: 'Chemical Suit', category: 'Eye & Body Protection', description: 'Chemical-resistant full body protection suit for hazardous environments. Top industrial safety grade.', price: '4,500', icon: '👓', image: '/images/products/chemical-suit.jpg' },

  { id: 51, slug: 'reflective-safety-jacket', name: 'Reflective Jacket', category: 'Road Safety Equipment', description: 'High-visibility safety jacket with premium reflective strips. Professional road safety gear.', price: '800', icon: '🚧', image: '/images/products/safety-vest.jpg' },
  { id: 53, slug: 'expandable-traffic-barricade', name: 'Traffic Barricade', category: 'Road Safety Equipment', description: 'Adjustable traffic barricade with warning signs. Portable and durable road safety solution.', price: '1,200', icon: '🚧', image: '/images/products/traffic-barricade.jpg' },
  { id: 54, slug: 'reflective-road-safety-sign', name: 'Road Safety Sign', category: 'Road Safety Equipment', description: 'Reflective road safety signs for industrial sites and construction. High visibility.', price: '650', icon: '🚧', image: '/images/products/road-safety-sign.jpg' },
  { id: 55, slug: 'expandable-crowd-safety-barrier', name: 'Safety Barrier', category: 'Road Safety Equipment', description: 'Expandable safety barrier for crowd and traffic control. Heavy-duty build.', price: '1,800', icon: '🚧', image: '/images/products/safety-barrier.jpg' },

  { id: 61, slug: 'emergency-fire-blanket', name: 'Fire Blanket', category: 'Fire Safety Equipment', description: 'Quick-response fire blanket for industrial emergency use. Certified flame-retardant material.', price: '1500', icon: '🔥', image: '/images/products/fire-blanket.jpg' },
  { id: 63, slug: 'co2-fire-extinguisher-electrical', name: 'CO2 Extinguisher', category: 'Fire Safety Equipment', description: 'CO2 fire extinguisher specialized for electrical fires. Crucial for office and factory safety.', price: '2,800', icon: '🔥', image: '/images/products/co2-extinguisher.jpg' },
  { id: 64, slug: 'automatic-fire-hose-reel', name: 'Heavy-Duty Fire Hose Reel', category: 'Fire Safety Equipment', description: 'Certified automatic fire hose reel with 30m high-pressure hose. Professional fire safety system.', price: '8,500', icon: '🔥', image: '/images/products/fire-hose-reel.jpg' },
  { id: 65, slug: 'wireless-fire-alarm-system', name: 'Fire Alarm System', category: 'Fire Safety Equipment', description: 'Wireless industrial fire alarm system with advanced smoke detectors. Reliable workplace safety.', price: '12,000', icon: '🔥', image: '/images/products/fire-alarm-system.jpg' },

  { id: 72, slug: 'pu-sole-industrial-safety-shoes', name: 'PU Sole Safety Shoes', category: 'Safety Shoes & Gumboots', description: 'Polyurethane sole safety shoes with oil and acid resistance. Lightweight and durable.', price: '2,000', icon: '👞', image: '/images/products/pu-sole.jpg' },
  { id: 73, slug: 'waterproof-industrial-gumboots', name: 'Industrial Gumboots', category: 'Safety Shoes & Gumboots', description: 'Waterproof industrial gumboots with steel toe protection. Ideal for monsoon and wet work.', price: '1,800', icon: '👞', image: '/images/products/industrial-gumboots.jpg' },
  { id: 74, slug: 'insulated-electrical-safety-shoes', name: 'Electrical Safety Shoes', category: 'Safety Shoes & Gumboots', description: 'Insulated safety shoes for high-voltage electrical work. Certified electrical protection.', price: '3,200', icon: '👞', image: '/images/products/electrical-safety-shoes.webp' },
  { id: 75, slug: 'lightweight-composite-toe-shoes', name: 'Composite Toe Shoes', category: 'Safety Shoes & Gumboots', description: 'Lightweight composite toe safety shoes. Metal-free and high-comfort for industrial use.', price: '2,200', icon: '👞', image: '/images/products/composite-toe-shoes.webp' },
]

export default products
