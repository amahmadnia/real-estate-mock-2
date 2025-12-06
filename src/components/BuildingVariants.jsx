import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const BuildingVariants = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const variants = [
    {
      id: 0,
      title: 'واحدهای 90 متری - دو خوابه',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      features: [
        '2 اتاق خواب با کمد دیواری',
        'آشپزخانه مدرن با کابینت های‌تک',
        'سالن پذیرایی با نورگیر عالی',
        'حمام و سرویس بهداشتی جداگانه',
        'بالکن با چشم‌انداز زیبا',
        'سیستم گرمایش و سرمایش مرکزی'
      ]
    },
    {
      id: 1,
      title: 'واحدهای 120 متری - سه خوابه',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      features: [
        '3 اتاق خواب با کمد دیواری',
        'آشپزخانه اپن با جزیره مرکزی',
        'سالن پذیرایی وسیع و دنج',
        '2 حمام و سرویس بهداشتی',
        'بالکن بزرگ با منظره باغ',
        'اتاق خواب مستر با حمام اختصاصی',
        'سیستم هوشمند خانه'
      ]
    },
    {
      id: 2,
      title: 'واحدهای 150 متری - پنت هاوس',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      features: [
        '3 اتاق خواب لوکس با نما',
        'آشپزخانه لوکس با لوازم برقی بیلت این',
        'سالن پذیرایی دوبلکس',
        'اتاق کار یا نشیمن اختصاصی',
        '3 حمام و سرویس بهداشتی',
        'تراس روف گاردن اختصاصی',
        'پارکینگ دوبل و انباری بزرگ',
        'سیستم هوشمند کامل و امنیتی پیشرفته'
      ]
    }
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section id="variants" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
            انواع واحدها
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            انتخاب متناسب با
            <span className="text-accent mr-2">سبک زندگی شما</span>
          </h2>
          <p className="text-secondary text-lg">
            از واحدهای دو خوابه تا پنت هاوس لوکس، هر کدام با امکانات ویژه و طراحی منحصر به فرد
          </p>
        </div>

        {/* Variants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl sticky top-24 border-4 border-white">
            {variants.map((variant) => (
              <img
                key={variant.id}
                src={variant.image}
                alt={variant.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  activeAccordion === variant.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 right-6 text-white text-right z-10">
                 <p className="text-sm opacity-80 mb-1">نمای داخلی</p>
                 <h4 className="text-xl font-bold">{variants.find(v => v.id === activeAccordion)?.title}</h4>
            </div>
          </div>

          {/* Accordions */}
          <div className="space-y-4">
            {variants.map((variant) => (
              <div
                key={variant.id}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                    activeAccordion === variant.id 
                    ? 'bg-white shadow-lg border-2 border-accent/20' 
                    : 'bg-surface border border-transparent hover:bg-gray-50'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(variant.id)}
                  className="w-full flex items-center justify-between p-6 text-right"
                >
                  <h3 className={`text-lg font-bold ${activeAccordion === variant.id ? 'text-accent' : 'text-primary'}`}>{variant.title}</h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeAccordion === variant.id ? 'rotate-180 text-accent' : 'text-gray-400'
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeAccordion === variant.id ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 space-y-3">
                    {variant.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 text-secondary"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                    <button className="mt-6 px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all w-full sm:w-auto">
                      دریافت قیمت
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingVariants;
