import { MapPin, Tag } from 'lucide-react';
import { formatPrice } from '../../utils/formatters';

const TitlePrice = ({ property }) => {
  return (
    <div className="space-y-4">
      {/* Title and Badge */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            {property.title}
          </h1>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} className="text-primary" />
            <span className="text-base md:text-lg">{property.location.city}</span>
          </div>
        </div>

        {/* Badge */}
        {property.badge && (
          <span className="badge badge-new animate-shimmer w-fit">
            {property.badge}
          </span>
        )}
      </div>

      {/* Price and Property ID */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
        <div>
          <p className="text-sm text-gray-600 mb-1">قیمت</p>
          <p className="text-3xl md:text-4xl font-extrabold text-primary">
            {formatPrice(property.price.amount)} تومان
          </p>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Tag size={18} />
          <span className="text-sm">کد ملک: #{property.id}</span>
        </div>
      </div>
    </div>
  );
};

export default TitlePrice;
