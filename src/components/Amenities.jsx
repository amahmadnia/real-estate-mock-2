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
          <span className="inline-block px-4 py-2 bg-forest-green/10 text-forest-green rounded-full text-sm font-semibold mb-4">
            امکانات رفاهی
          </span>
          <h2 className="heading-secondary">
            تجربه زندگی
            <span className="gradient-text"> در سطح جهانی</span>
          </h2>
          <p className="text-warm-gray text-lg mt-4 leading-relaxed">
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
                className="group text-center p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon Container */}
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-forest-green/10 to-gold/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Icon className="w-10 h-10 text-forest-green group-hover:text-gold-dark transition-colors duration-300" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-charcoal mb-2">{amenity.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{amenity.description}</p>
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
