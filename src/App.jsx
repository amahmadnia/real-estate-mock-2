import Navbar from './components/Header/Navbar';
import ImageGallery from './components/Hero/ImageGallery';
import TitlePrice from './components/PropertyInfo/TitlePrice';
import QuickStats from './components/PropertyInfo/QuickStats';
import ContactCard from './components/PropertyInfo/ContactCard';
import SpecsTable from './components/Details/SpecsTable';
import Features from './components/Details/Features';
import Description from './components/Details/Description';
import RelatedPropertiesGrid from './components/RelatedProperties/RelatedPropertiesGrid';
import Footer from './components/Footer/Footer';
import { property } from './data/propertyData';
import { relatedProperties } from './data/relatedProperties';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Image Gallery */}
      <section className="bg-white py-8">
        <div className="container-custom">
          <ImageGallery images={property.images} />
        </div>
      </section>

      {/* Property Information Section */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title and Price */}
              <TitlePrice property={property} />

              {/* Quick Stats */}
              <QuickStats specifications={property.specifications} />

              {/* Description */}
              <Description description={property.description} />

              {/* Specifications Table */}
              <SpecsTable specifications={property.specifications} />

              {/* Features Grid */}
              <Features features={property.features} />
            </div>

            {/* Sidebar - Right Side */}
            <div className="lg:col-span-1">
              <ContactCard agent={property.agent} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Properties */}
      <RelatedPropertiesGrid properties={relatedProperties} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
