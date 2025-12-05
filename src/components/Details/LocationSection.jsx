import { MapPin } from 'lucide-react';

const LocationSection = ({ location }) => {
  const locationDetails = [
    { label: 'شهر', value: location.city },
    { label: 'استان', value: location.province },
    { label: 'منطقه', value: location.district },
  ];

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">نشانی</h2>

      <div className="overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full">
          <tbody>
            {locationDetails.map((detail, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-blue-50 transition-colors duration-200`}
              >
                <td className="px-6 py-4 text-gray-600 font-medium border-l border-gray-200 w-1/3">
                  {detail.label}
                </td>
                <td className="px-6 py-4 text-gray-900 font-semibold">
                  {detail.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Map placeholder */}
      <div className="mt-6 rounded-xl overflow-hidden border border-gray-200">
        <div className="bg-gray-100 h-64 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin size={48} className="mx-auto mb-2 text-primary" />
            <p className="text-sm">نقشه موقعیت ملک</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
