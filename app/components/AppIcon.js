import Image from 'next/image';

// Import all images
const images = {
  Heroimg: '/images/hero-img.jpg',
  FinalHero: '/images/final -hero.jpg',
  ChemicalPharmaceutical: '/images/Chemicalandpharmaceutical.png',
  Manufacturing: '/images/Manufacturing.png',
  OilGasSites: '/images/OilGasSites.png',
  Construction: '/images/construction.png',
  FireSafety: '/images/fireandsefty.png',
  Hospital: '/images/hospital.png',
  RoadSafety: '/images/roadsafety.png',
  Warehouse: '/images/warehouse.png'
};

// Create image components
const AppIcon = {};

Object.keys(images).forEach(key => {
  AppIcon[key] = function ImageComponent({ alt, width = 400, height = 300, priority = false, ...props }) {
    return (
      <Image
        src={images[key]}
        alt={alt || key}
        width={width}
        height={height}
        priority={priority}
        {...props}
      />
    );
  };
});

export default AppIcon;
