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
    <section id="amenities" className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
            امکانات رفاهی
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            تجربه زندگی
            <span className="text-accent mr-2">در سطح جهانی</span>
          </h2>
          <p className="text-secondary text-lg font-medium">
            بیش از 20 امکانات لوکس و پیشرفته برای راحتی و آسایش شما
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={amenity.id}
                className="group text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon Container */}
                <div className="w-16 h-16 mx-auto mb-5 bg-surface rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 text-accent">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">{amenity.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{amenity.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-secondary mb-6">
            امکانات بیشتر منتظر شماست. برای دریافت اطلاعات کامل با ما تماس بگیرید.
          </p>
          <a href="#contact" className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all inline-block">
            دریافت کاتالوگ کامل
          </a>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
