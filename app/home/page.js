import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero3 from "./components/Hero3";
import FeaturedProducts from "./components/FeaturedProducts";
import WhyChooseUs from "./components/WhyChooseUs";
import BrandsWeDealIn from "./components/BrandsWeDealIn";
import IndustriesServed from "./components/IndustriesServed";
import FinalCTA from "./components/FinalCTA";
import './page.scss';

export const metadata = {
  title: 'Home',
  description: 'Unnati Enterprise is Ahmedabad\'s premier supplier of industrial safety equipment, PPE, and fire safety gear. Trusted by 2000+ clients across Gujarat.',
  alternates: {
    canonical: '/home',
  },
  openGraph: {
    title: 'Unnati Enterprise | Industrial Safety Equipment Supplier',
    description: 'Ahmedabad\'s premier supplier of industrial safety equipment, PPE, and fire safety gear. Explore our top-selling, certified safety gear today.',
    url: '/home',
    images: [{ url: '/images/hero-img.jpg', width: 1200, height: 630, alt: 'Unnati Enterprise Safety Equipment' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unnati Enterprise | Industrial Safety Equipment Supplier',
    description: 'Ahmedabad\'s premier supplier of industrial safety equipment, PPE, and fire safety gear. Explore our top-selling, certified safety gear today.',
    images: ['/images/hero-img.jpg'],
  },
};

export default function Home() {


  return (
    <>
      {/* Header Component */}
      <Header />
      <main>
        <Hero3 />
        <FeaturedProducts />

        <IndustriesServed />

        <BrandsWeDealIn />
        <WhyChooseUs />

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

