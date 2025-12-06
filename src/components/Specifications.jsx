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
    <section id="specifications" className="section-padding bg-light-cyan">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="inline-block px-6 py-3 bg-dusk-blue text-white rounded-full text-lg font-bold mb-6 shadow-lg">
            مشخصات پروژه
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-jet-black mb-6">
            ویژگی‌های منحصر به فرد
            <span className="block mt-2 bg-gradient-to-r from-dusk-blue to-burnt-peach bg-clip-text text-transparent">پروژه آرمان لوکس</span>
          </h2>
          <p className="text-jet-black text-xl mt-6 leading-relaxed font-medium">
            ساختمانی با طراحی مدرن، استفاده از بهترین مصالح و امکانات پیشرفته برای زندگی راحت و لوکس شما
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-dusk-blue/10 to-burnt-peach/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-dusk-blue" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-sm text-warm-gray mb-2">{spec.title}</h3>
                    <p className="text-2xl font-bold text-jet-black mb-1">{spec.value}</p>
                    <p className="text-sm text-warm-gray">{spec.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-dusk-blue to-dusk-blue-dark rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">چرا آرمان لوکس؟</h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            با بیش از 20 سال تجربه در ساخت و ساز، ما متعهد به ارائه بهترین کیفیت و خدمات هستیم.
            تمامی پروژه‌های ما با استانداردهای بین‌المللی و نظارت مهندسین مجرب ساخته می‌شوند.
          </p>
          <a
            href="#contact"
            className="btn-burnt-peach inline-block"
          >
            دریافت مشاوره رایگان
          </a>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
