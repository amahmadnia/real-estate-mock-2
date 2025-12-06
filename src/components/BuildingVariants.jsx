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
    <section id="variants" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="inline-block px-6 py-3 bg-gradient-to-r from-gold-dark to-gold text-white rounded-full text-lg font-bold mb-6 shadow-lg">
            انواع واحدها
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            انتخاب متناسب با
            <span className="block mt-2 bg-gradient-to-r from-forest-green to-gold bg-clip-text text-transparent">سبک زندگی شما</span>
          </h2>
          <p className="text-charcoal text-xl mt-6 leading-relaxed font-medium">
            از واحدهای دو خوابه تا پنت هاوس لوکس، هر کدام با امکانات ویژه و طراحی منحصر به فرد
          </p>
        </div>

        {/* Variants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Images */}
          <div className="relative h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl sticky top-24">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Accordions */}
          <div className="space-y-4">
            {variants.map((variant) => (
              <div
                key={variant.id}
                className="bg-cream rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(variant.id)}
                  className="w-full flex items-center justify-between p-6 text-right hover:bg-white transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold text-charcoal">{variant.title}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-forest-green transition-transform duration-300 ${
                      activeAccordion === variant.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    activeAccordion === variant.id ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 space-y-3">
                    {variant.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 text-warm-gray"
                      >
                        <div className="w-2 h-2 bg-forest-green rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-base leading-relaxed">{feature}</p>
                      </div>
                    ))}
                    <button className="btn-primary mt-6 w-full sm:w-auto">
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
