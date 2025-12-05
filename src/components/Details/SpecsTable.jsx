import { formatNumber } from '../../utils/formatters';

const SpecsTable = ({ specifications }) => {
  const details = [
    { label: 'متراژ زمین', value: `${formatNumber(specifications.landSize)} متر` },
    { label: 'متراژ بنا', value: `${formatNumber(specifications.builtArea)} متر` },
    { label: 'تعداد اتاق', value: formatNumber(specifications.bedrooms) },
    { label: 'سرویس بهداشتی', value: formatNumber(specifications.bathrooms) },
    { label: 'نوع ملک', value: specifications.propertyType },
    { label: 'سال ساخت', value: formatNumber(specifications.yearBuilt) },
    { label: 'تعداد طبقات', value: `${formatNumber(specifications.floors)} طبقه` },
    { label: 'نوع سند', value: specifications.documentType },
    { label: 'کف', value: specifications.flooring },
    { label: 'سیستم گرمایش', value: specifications.heating },
    { label: 'سیستم سرمایش', value: specifications.cooling },
    { label: 'آشپزخانه', value: specifications.kitchen },
    { label: 'تعداد پارکینگ', value: formatNumber(specifications.parking) },
    { label: 'انباری', value: specifications.storage ? 'دارد' : 'ندارد' },
    { label: 'آسانسور', value: specifications.elevator ? 'دارد' : 'ندارد' },
  ];

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">مشخصات ملک</h2>

      <div className="overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full">
          <tbody>
            {details.map((detail, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-blue-50 transition-colors duration-200`}
              >
                <td className="px-6 py-4 text-gray-600 font-medium border-l border-gray-200">
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
    </div>
  );
};

export default SpecsTable;
