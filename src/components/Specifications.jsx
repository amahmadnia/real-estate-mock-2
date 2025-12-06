import { MapPin, Building2, Home, Ruler, Layers, Calendar, Award, CheckCircle } from 'lucide-react';

const Specifications = () => {
  const specs = [
    {
      id: 1,
      icon: MapPin,
      title: 'موقعیت',
      value: 'شمال تهران',
      description: 'دسترسی آسان به مراکز خرید'
    },
    {
      id: 2,
      icon: Building2,
      title: 'نوع ساختمان',
      value: 'مسکونی لوکس',
      description: '5 تا 7 طبقه'
    },
    {
      id: 3,
      icon: Home,
      title: 'تعداد واحد',
      value: '24 واحد',
      description: 'محدود و انحصاری'
    },
    {
      id: 4,
      icon: Ruler,
      title: 'متراژ واحدها',
      value: '90 تا 150 متر',
      description: 'فضای بهینه شده'
    },
    {
      id: 5,
      icon: Layers,
      title: 'تعداد طبقات',
      value: '7 طبقه',
      description: 'با پارکینگ زیرزمینی'
    },
    {
      id: 6,
      icon: Calendar,
      title: 'زمان تحویل',
      value: 'پاییز 1405',
      description: 'آماده تحویل'
    },
    {
      id: 7,
      icon: Award,
      title: 'سازنده',
      value: 'گروه سازنده آرمان',
      description: 'با 20 سال سابقه'
    },
    {
      id: 8,
      icon: CheckCircle,
      title: 'گواهینامه',
      value: 'استاندارد ملی',
      description: 'کیفیت تضمین شده'
    }
  ];

  return (
    <section id="specifications" className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
            مشخصات پروژه
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ویژگی‌های منحصر به فرد
            <span className="text-accent mr-2">پروژه آرمان لوکس</span>
          </h2>
          <p className="text-secondary text-lg">
            ساختمانی با طراحی مدرن، استفاده از بهترین مصالح و امکانات پیشرفته برای زندگی راحت و لوکس شما
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon Container */}
                  <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 text-primary">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xs text-secondary mb-1">{spec.title}</h3>
                    <p className="text-lg font-bold text-primary mb-1">{spec.value}</p>
                    <p className="text-xs text-secondary/70">{spec.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
             {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
                }}></div>
            </div>
            
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">چرا آرمان لوکس؟</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                با بیش از 20 سال تجربه در ساخت و ساز، ما متعهد به ارائه بهترین کیفیت و خدمات هستیم.
                تمامی پروژه‌های ما با استانداردهای بین‌المللی و نظارت مهندسین مجرب ساخته می‌شوند.
            </p>
            <a
                href="#contact"
                className="px-8 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-dark transition-all inline-block shadow-lg shadow-accent/20"
            >
                دریافت مشاوره رایگان
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
