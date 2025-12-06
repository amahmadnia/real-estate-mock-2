import {
  Trees,
  Waves,
  Dumbbell,
  Sparkles,
  Shield,
  Home,
  Car,
  Users,
  Baby,
  Zap,
  Leaf,
  Wifi
} from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      id: 1,
      icon: Trees,
      title: 'روف گاردن',
      description: 'فضای سبز و آرامش‌بخش در بام ساختمان'
    },
    {
      id: 2,
      icon: Waves,
      title: 'استخر',
      description: 'استخر سرپوشیده چهار فصل'
    },
    {
      id: 3,
      icon: Dumbbell,
      title: 'باشگاه ورزشی',
      description: 'مجهز به امکانات مدرن ورزشی'
    },
    {
      id: 4,
      icon: Sparkles,
      title: 'اسپا و سونا',
      description: 'مرکز تفریحی و آرامش'
    },
    {
      id: 5,
      icon: Shield,
      title: 'امنیت 24/7',
      description: 'سیستم دوربین و نگهبانی شبانه‌روزی'
    },
    {
      id: 6,
      icon: Home,
      title: 'خانه هوشمند',
      description: 'سیستم کنترل هوشمند تمام واحدها'
    },
    {
      id: 7,
      icon: Car,
      title: 'پارکینگ زیرزمینی',
      description: '3 طبقه پارکینگ مسقف و امن'
    },
    {
      id: 8,
      icon: Users,
      title: 'خدمات کنسیرژ',
      description: 'پذیرش 24 ساعته و خدمات پشتیبانی'
    },
    {
      id: 9,
      icon: Baby,
      title: 'زمین بازی کودکان',
      description: 'فضای ایمن و مجهز برای بچه‌ها'
    },
    {
      id: 10,
      icon: Zap,
      title: 'آسانسور اختصاصی',
      description: 'آسانسور مجزا برای هر دو واحد'
    },
    {
      id: 11,
      icon: Leaf,
      title: 'سیستم انرژی پاک',
      description: 'استفاده از انرژی‌های تجدیدپذیر'
    },
    {
      id: 12,
      icon: Wifi,
      title: 'اینترنت پرسرعت',
      description: 'فیبر نوری با سرعت بالا'
    }
  ];

  return (
    <section id="amenities" className="section-padding bg-gradient-to-br from-cream via-white to-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="inline-block px-6 py-3 bg-gold text-white rounded-full text-lg font-bold mb-6 shadow-lg">
            امکانات رفاهی
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            تجربه زندگی
            <span className="block mt-2 bg-gradient-to-r from-forest-green to-gold bg-clip-text text-transparent">در سطح جهانی</span>
          </h2>
          <p className="text-charcoal text-xl mt-6 leading-relaxed font-medium">
            بیش از 20 امکانات لوکس و پیشرفته برای راحتی و آسایش شما
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={amenity.id}
                className="group text-center p-8 rounded-2xl bg-white border-2 border-stone/30 hover:border-gold hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon Container */}
                <div className="w-24 h-24 mx-auto mb-5 bg-gradient-to-br from-forest-green to-sage-green rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-forest-green transition-colors">{amenity.title}</h3>
                <p className="text-base text-charcoal/70 leading-relaxed">{amenity.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-warm-gray mb-6">
            امکانات بیشتر منتظر شماست. برای دریافت اطلاعات کامل با ما تماس بگیرید.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            دریافت کاتالوگ کامل
          </a>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
