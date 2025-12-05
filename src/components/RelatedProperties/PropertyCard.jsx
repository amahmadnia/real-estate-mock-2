import { Square, Bed, MapPin } from 'lucide-react';
import { formatPrice, formatNumber } from '../../utils/formatters';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card group cursor-pointer">
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Badge Overlay */}
        {property.badge && (
          <div className="absolute top-4 right-4">
            <span
              className={`badge ${
                property.badge === 'جدید'
                  ? 'badge-new'
                  : 'badge-featured'
              }`}
            >
              {property.badge}
            </span>
          </div>
        )}

        {/* Price Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-xl font-bold text-white">
            {formatPrice(property.price.amount)} تومان
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {property.title}
        </h3>

        {/* Quick Stats */}
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <div className="flex items-center gap-1.5">
            <Square size={16} />
            <span className="text-sm">{formatNumber(property.size)} متر</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bed size={16} />
            <span className="text-sm">{formatNumber(property.rooms)} خواب</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 text-sm pt-3 border-t border-gray-100">
          <MapPin size={14} />
          <span>{property.location}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
