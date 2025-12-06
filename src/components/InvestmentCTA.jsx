import { TrendingUp, Shield, Award, PhoneCall } from 'lucide-react';

const InvestmentCTA = () => {
  const benefits = [
    {
      id: 1,
      icon: TrendingUp,
      title: 'سودآوری بالا',
      description: 'رشد ارزش ملک در منطقه'
    },
    {
      id: 2,
      icon: Shield,
      title: 'سرمایه امن',
      description: 'ضمانت کیفیت ساخت'
    },
    {
      id: 3,
      icon: Award,
      title: 'برند معتبر',
      description: '20 سال تجربه موفق'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-forest-green via-deep-forest to-forest-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="text-center text-white mb-12">
            <span className="inline-block px-4 py-2 bg-gold/20 backdrop-blur-md border border-gold/30 rounded-full text-gold font-semibold text-sm mb-6">
              فرصت سرمایه‌گذاری
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              بهترین سرمایه‌گذاری برای
              <br />
              <span className="text-gold">آینده درخشان شما</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              با خرید واحد در این پروژه، نه تنها صاحب یک خانه لوکس می‌شوید، بلکه سرمایه‌ای امن و سودآور برای آینده خود ایجاد می‌کنید
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/80 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl font-bold text-charcoal mb-4">
              همین الان درخواست مشاوره رایگان بدهید
            </h3>
            <p className="text-warm-gray text-lg mb-8 max-w-2xl mx-auto">
              کارشناسان ما آماده پاسخگویی به سوالات شما و ارائه بهترین پیشنهادات هستند
            </p>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="px-6 py-4 rounded-lg border-2 border-stone focus:border-forest-green outline-none transition-colors duration-300 text-right"
                  required
                />
                <input
                  type="tel"
                  placeholder="شماره تماس"
                  className="px-6 py-4 rounded-lg border-2 border-stone focus:border-forest-green outline-none transition-colors duration-300 text-right"
                  required
                />
                <input
                  type="email"
                  placeholder="ایمیل"
                  className="px-6 py-4 rounded-lg border-2 border-stone focus:border-forest-green outline-none transition-colors duration-300 text-right md:col-span-2"
                />
                <textarea
                  placeholder="توضیحات (اختیاری)"
                  rows="4"
                  className="px-6 py-4 rounded-lg border-2 border-stone focus:border-forest-green outline-none transition-colors duration-300 text-right md:col-span-2 resize-none"
                ></textarea>
              </form>

              <button className="btn-gold w-full md:w-auto md:px-16">
                <PhoneCall className="w-5 h-5 inline-block ml-2" />
                درخواست مشاوره رایگان
              </button>

              <p className="text-sm text-warm-gray mt-4">
                پاسخگویی در کمتر از 30 دقیقه
              </p>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center text-white">
            <div>
              <div className="text-3xl font-bold text-gold mb-1">1000+</div>
              <div className="text-sm text-white/80">مشتری راضی</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-1">50+</div>
              <div className="text-sm text-white/80">پروژه موفق</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-1">20</div>
              <div className="text-sm text-white/80">سال تجربه</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-1">%100</div>
              <div className="text-sm text-white/80">رضایت مشتری</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCTA;
