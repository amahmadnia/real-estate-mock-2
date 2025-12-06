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
    <section id="location" className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
            موقعیت مکانی
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            قلب تپنده
            <span className="text-accent mr-2">شهر</span>
          </h2>
          <p className="text-secondary text-lg">
            در بهترین منطقه شمال تهران، با دسترسی آسان به تمام امکانات شهری
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <div className="space-y-8">
            {/* Area Description */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">شمال تهران</h3>
                  <p className="text-secondary leading-relaxed">
                    منطقه 1 تهران، یکی از مرغوب‌ترین و آرام‌ترین مناطق شهر با هوای پاک و دسترسی عالی به تمامی امکانات رفاهی و تفریحی
                  </p>
                </div>
              </div>

              {/* Climate */}
              <div className="bg-surface rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Thermometer className="w-5 h-5 text-accent" />
                  <h4 className="font-bold text-primary">آب و هوا</h4>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  آب و هوای معتدل و خنک، دمای متوسط سالانه 15 درجه، هوای پاک کوهستانی
                </p>
              </div>
            </div>

            {/* Nearby Amenities */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-6">مراکز مجاور</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locationFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.id} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary text-sm mb-1">{feature.title}</h4>
                        <p className="text-secondary text-xs leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-primary rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-accent-light" />
                </div>
                <h3 className="text-2xl font-bold">دسترسی‌ها</h3>
              </div>
              <ul className="space-y-4">
                {transportation.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 bg-white/5 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="sticky top-24">
            <div className="bg-white rounded-2xl p-3 shadow-lg border border-gray-100">
              <div className="aspect-[4/3] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
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
              <div className="mt-4 text-center pb-2">
                <p className="text-sm text-secondary mb-3">
                  <strong className="text-primary">آدرس:</strong> تهران، منطقه 1، خیابان ولنجک
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-sm transition-colors duration-300 border border-secondary/20 px-4 py-2 rounded-lg hover:border-accent"
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
