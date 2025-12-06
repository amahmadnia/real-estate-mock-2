import Header from './components/Header';
import Hero from './components/Hero';
import Specifications from './components/Specifications';
import BuildingVariants from './components/BuildingVariants';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import InvestmentCTA from './components/InvestmentCTA';
import FAQ from './components/FAQ';
import RelatedProjects from './components/RelatedProjects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Specifications />
        <BuildingVariants />
        <Amenities />
        <Gallery />
        <Location />
        <InvestmentCTA />
        <FAQ />
        <RelatedProjects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
