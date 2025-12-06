import { MapPin, Navigation, Thermometer, ShoppingBag, Coffee, GraduationCap, Activity } from 'lucide-react';

const Location = () => {
  const locationFeatures = [
    {
      id: 1,
      icon: ShoppingBag,
      title: 'مراکز خرید',
      description: '5 دقیقه تا بزرگترین مراکز خرید'
    },
    {
      id: 2,
      icon: Coffee,
      title: 'رستوران و کافه',
      description: 'دسترسی آسان به بهترین رستوران‌ها'
    },
    {
      id: 3,
      icon: GraduationCap,
      title: 'مراکز آموزشی',
      description: 'نزدیک به بهترین مدارس و دانشگاه‌ها'
    },
    {
      id: 4,
      icon: Activity,
      title: 'مراکز ورزشی',
      description: 'دسترسی به پارک‌ها و باشگاه‌ها'
    }
  ];

  const transportation = [
    '2 دقیقه تا ایستگاه مترو',
    'دسترسی مستقیم به بزرگراه',
    '10 دقیقه تا فرودگاه',
    'خطوط اتوبوس در مجاورت'
  ];

  return (
    <section id="location" className="section-padding bg-light-cyan">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="inline-block px-6 py-3 bg-dusk-blue text-white rounded-full text-lg font-bold mb-6 shadow-lg">
            موقعیت مکانی
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-jet-black mb-6">
            قلب تپنده
            <span className="block mt-2 bg-gradient-to-r from-dusk-blue to-burnt-peach bg-clip-text text-transparent">شهر</span>
          </h2>
          <p className="text-jet-black text-xl mt-6 leading-relaxed font-medium">
            در بهترین منطقه شمال تهران، با دسترسی آسان به تمام امکانات شهری
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <div className="space-y-8">
            {/* Area Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-dusk-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-dusk-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-jet-black mb-2">شمال تهران</h3>
                  <p className="text-warm-gray leading-relaxed">
                    منطقه 1 تهران، یکی از مرغوب‌ترین و آرام‌ترین مناطق شهر با هوای پاک و دسترسی عالی به تمامی امکانات رفاهی و تفریحی
                  </p>
                </div>
              </div>

              {/* Climate */}
              <div className="bg-light-cyan rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Thermometer className="w-5 h-5 text-burnt-peach-dark" />
                  <h4 className="font-bold text-jet-black">آب و هوا</h4>
                </div>
                <p className="text-warm-gray text-sm leading-relaxed">
                  آب و هوای معتدل و خنک، دمای متوسط سالانه 15 درجه، هوای پاک کوهستانی
                </p>
              </div>
            </div>

            {/* Nearby Amenities */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-jet-black mb-6">مراکز مجاور</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locationFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.id} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-burnt-peach/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-burnt-peach-dark" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-jet-black text-sm mb-1">{feature.title}</h4>
                        <p className="text-warm-gray text-xs leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-gradient-to-br from-dusk-blue to-dusk-blue-dark rounded-2xl p-8 shadow-xl border-2 border-burnt-peach/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-burnt-peach rounded-full flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-jet-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">دسترسی‌ها</h3>
              </div>
              <ul className="space-y-4">
                {transportation.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="w-3 h-3 bg-burnt-peach rounded-full flex-shrink-0"></div>
                    <span className="text-white font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="sticky top-24">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51386.84927724377!2d51.33897!3d35.7575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dffc0067845cd%3A0x37d8e9eef7feacc7!2sTehran%2C%20Iran!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقعیت پروژه"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-warm-gray mb-2">
                  <strong className="text-jet-black">آدرس:</strong> تهران، منطقه 1، خیابان ولنجک
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-dusk-blue hover:text-dusk-blue-dark font-semibold text-sm transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  مشاهده در نقشه بزرگتر
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
