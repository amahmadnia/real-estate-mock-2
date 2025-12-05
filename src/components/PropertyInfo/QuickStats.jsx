import { Square, Bed, Calendar, Home, Layers } from 'lucide-react';
import { formatNumber } from '../../utils/formatters';

const QuickStats = ({ specifications }) => {
  const stats = [
    {
      icon: Square,
      label: 'متراژ زمین',
      value: `${formatNumber(specifications.landSize)} متر`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Home,
      label: 'متراژ بنا',
      value: `${formatNumber(specifications.builtArea)} متر`,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Bed,
      label: 'تعداد اتاق',
      value: `${formatNumber(specifications.bedrooms)} خواب`,
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Layers,
      label: 'طبقات',
      value: `${formatNumber(specifications.floors)} طبقه`,
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Calendar,
      label: 'سال ساخت',
      value: formatNumber(specifications.yearBuilt),
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6 bg-white rounded-2xl shadow-card border border-gray-100">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
        >
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md`}>
            <stat.icon className="text-white" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className="text-lg font-bold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
