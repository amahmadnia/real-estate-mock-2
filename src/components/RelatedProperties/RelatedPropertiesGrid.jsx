import PropertyCard from './PropertyCard';

const RelatedPropertiesGrid = ({ properties }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            املاک مشابه
          </h2>
          <p className="text-gray-600 text-lg">
            پیشنهادهای دیگر ما برای شما
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPropertiesGrid;
