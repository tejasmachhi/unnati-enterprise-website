// Product Image Utility
// Uses direct Unsplash photo URLs (reliable, no deprecated API)

// Category-based fallback images using direct Unsplash photo URLs
const categoryImages = {
  'Head & Face Protection': 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500&h=500&fit=crop&auto=format',
  'Hand Protection': 'https://images.unsplash.com/photo-1582881754947-d41d55283ced?w=500&h=500&fit=crop&auto=format',
  'Eye & Body Protection': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop&auto=format',
  'Road Safety Equipment': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop&auto=format',
  'Fire Safety Equipment': 'https://images.unsplash.com/photo-1604147706283-d711c9615a91?w=500&h=500&fit=crop&auto=format',
  'Safety Shoes & Gumboots': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop&auto=format',
}

// Specific high-quality images for select products
const specificProductImages = {
  // Head & Face
  'Disposable Cap': 'https://images.unsplash.com/photo-1584982751601-97d8cb0f66fc?w=500&h=500&fit=crop&auto=format',
  'Shoe Cover': 'https://images.unsplash.com/photo-1584483766114-2cea6facd651?w=500&h=500&fit=crop&auto=format',
  'Dr. Green Cap': 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&h=500&fit=crop&auto=format',
  'Safety Goggles': 'https://images.unsplash.com/photo-1588825867375-7b1981ed4582?w=500&h=500&fit=crop&auto=format',
  'Welding Helmet': 'https://images.unsplash.com/photo-1622675363311-47e770c43e20?w=500&h=500&fit=crop&auto=format',

  // Hand Protection
  'Cotton Dotted Gloves': 'https://images.unsplash.com/photo-1582881754947-d41d55283ced?w=500&h=500&fit=crop&auto=format',
  'Industrial Rubber Gloves': 'https://images.unsplash.com/photo-1627914421115-dce92e2133cc?w=500&h=500&fit=crop&auto=format',
  'Acid Hand Gloves': 'https://images.unsplash.com/photo-1584824388155-081e64906f97?w=500&h=500&fit=crop&auto=format',
  'Chrome Leather Gloves': 'https://images.unsplash.com/photo-1533621458941-860e6530a6ba?w=500&h=500&fit=crop&auto=format',
  'Kevlar Gloves': 'https://images.unsplash.com/photo-1580828369019-1f486c4293f0?w=500&h=500&fit=crop&auto=format',
  'Nitrile Gloves': 'https://images.unsplash.com/photo-1584982751601-97d8cb0f66fc?w=500&h=500&fit=crop&auto=format', // Using a different glove-like medical image
  'Heat Resistant Gloves': 'https://images.unsplash.com/photo-1506459390234-7db5515dcd09?w=500&h=500&fit=crop&auto=format',
  'Electrician Gloves': 'https://images.unsplash.com/photo-1611116639535-42023bbbc155?w=500&h=500&fit=crop&auto=format',

  // Eye & Body
  'Sunline Goggles': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop&auto=format',
  'Eye Wash Bottle': 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&h=500&fit=crop&auto=format',
  'Boiler Suit': 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&h=500&fit=crop&auto=format',
  'Chemical Suit': 'https://images.unsplash.com/photo-1583947581924-860bda6a5e12?w=500&h=500&fit=crop&auto=format',

  // Road Safety
  'Road Safety Sign': 'https://images.unsplash.com/photo-1534068590799-09895a701e3e?w=500&h=500&fit=crop&auto=format',
  'Safety Barrier': 'https://images.unsplash.com/photo-1582210878532-6bb2d34a4993?w=500&h=500&fit=crop&auto=format',

  // Fire Safety
  'Fire Blanket': 'https://images.unsplash.com/photo-1585834884277-2e118029de26?w=500&h=500&fit=crop&auto=format',
  'CO2 Extinguisher': 'https://images.unsplash.com/photo-1598000452392-5eb3bd995666?w=500&h=500&fit=crop&auto=format',
  'Fire Hose Reel': 'https://images.unsplash.com/photo-1517424169542-a1b920155b9e?w=500&h=500&fit=crop&auto=format',
  'Fire Alarm System': 'https://images.unsplash.com/photo-1587635213600-b88301712a83?w=500&h=500&fit=crop&auto=format',

  // Shoes & Boots (ALL UNIQUE)
  'Steel Toe Safety Shoes': 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop&auto=format', // Classic work boot
  'PU Sole Safety Shoes': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop&auto=format', // Sporty safety shoe
  'Industrial Gumboots': 'https://images.unsplash.com/photo-1588612196695-1f92e3995f70?w=500&h=500&fit=crop&auto=format', // Rubber boots
}

// Get the best image for a product
export function getBestProductImage(product) {
  return (
    specificProductImages[product.name] ||
    categoryImages[product.category] ||
    fallbackImage
  )
}

// Fallback image for any loading errors
export const fallbackImage = 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop&auto=format'
