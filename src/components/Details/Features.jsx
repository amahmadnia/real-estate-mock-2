import {
  Car, Package, Wind, Home, Flame, Zap, Droplet,
  Phone, Wifi, Waves, Shield, Trees, Mountain, Building, Check, X
} from 'lucide-react';

const iconMap = {
  parking: Car,
  warehouse: Package,
  balcony: Wind,
  elevator: Home,
  flame: Flame,
  zap: Zap,
  droplet: Droplet,
  phone: Phone,
  wifi: Wifi,
  waves: Waves,
  wind: Wind,
  'door-open': Home,
  shield: Shield,
  trees: Trees,
  view: Mountain,
  mountain: Mountain,
  building: Building,
};

const Features = ({ features }) => {
  const allFeatures = [
    ...features.building,
    ...features.utilities,
    ...features.amenities,
    ...features.views,
  ];

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">امکانات و ویژگی‌ها</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allFeatures.map((feature) => {
          const Icon = iconMap[feature.icon] || Home;
          return (
            <div
              key={feature.id}
              className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                feature.available
                  ? 'bg-green-50 border-green-200 hover:border-green-400 hover:shadow-md'
                  : 'bg-gray-50 border-gray-200 opacity-60'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  feature.available
                    ? 'bg-gradient-to-br from-green-500 to-green-600'
                    : 'bg-gray-300'
                }`}
              >
                <Icon className="text-white" size={20} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">
                  {feature.name}
                </p>
              </div>

              <div>
                {feature.available ? (
                  <Check className="text-green-600" size={20} />
                ) : (
                  <X className="text-gray-400" size={20} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
