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
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             {/* Text Content */}
             <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 bg-accent/20 text-accent font-semibold text-sm rounded-full">
                  فرصت سرمایه‌گذاری
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  سرمایه‌گذاری مطمئن
                  <br />
                  <span className="text-accent">آینده‌ای درخشان</span>
                </h2>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  با خرید واحد در این پروژه، نه تنها صاحب یک خانه لوکس می‌شوید، بلکه سرمایه‌ای امن و سودآور برای آینده خود ایجاد می‌کنید. تضمین رشد سرمایه شما با ماست.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                    {benefits.map((benefit) => {
                      const Icon = benefit.icon;
                      return (
                        <div key={benefit.id} className="space-y-3">
                           <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-accent" />
                          </div>
                          <h3 className="font-bold">{benefit.title}</h3>
                          <p className="text-sm text-gray-400">{benefit.description}</p>
                        </div>
                      );
                    })}
                </div>
             </div>

             {/* Form Card */}
             <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-primary mb-2">درخواست مشاوره</h3>
                <p className="text-secondary mb-8">فرم زیر را پر کنید تا کارشناسان ما با شما تماس بگیرند.</p>
                
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-secondary mb-1">نام و نام خانوادگی</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-primary"
                          placeholder="مثال: علی محمدی"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary mb-1">شماره تماس</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-primary"
                          placeholder="مثال: 09123456789"
                        />
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-secondary mb-1">توضیحات (اختیاری)</label>
                        <textarea
                          rows="3"
                          className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-primary resize-none"
                        ></textarea>
                    </div>

                    <button type="button" className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 mt-2">
                        ثبت درخواست رایگان
                    </button>
                </form>
             </div>

          </div>

          {/* Stats Bar */}
          <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
             <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">1K+</div>
                <div className="text-sm text-gray-400">مشتری راضی</div>
             </div>
             <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">50+</div>
                <div className="text-sm text-gray-400">پروژه موفق</div>
             </div>
             <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">20</div>
                <div className="text-sm text-gray-400">سال تجربه</div>
             </div>
             <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">100%</div>
                <div className="text-sm text-gray-400">تعهد اجرایی</div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default InvestmentCTA;
