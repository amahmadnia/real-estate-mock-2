import { ChevronDown, ArrowLeft } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#specifications');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Image (mockup style) */}
          <div className="w-full lg:w-1/2 relative animate-fade-in-up delay-200">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&q=80"
                  alt="ساختمان لوکس"
                  className="w-full h-auto object-cover"
                />
                
                {/* Float Card 1 */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 animate-bounce delay-700">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                            <span className="font-bold">5+</span>
                        </div>
                        <div>
                            <p className="text-xs text-secondary">سال ساخت</p>
                            <p className="font-bold text-primary">نوساز</p>
                        </div>
                    </div>
                </div>

                 {/* Float Card 2 */}
                 <div className="absolute bottom-8 left-8 bg-primary/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10 animate-pulse delay-1000">
                    <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                            <span className="font-bold">%</span>
                        </div>
                        <div className="text-white">
                            <p className="text-xs opacity-80">سود سرمایه</p>
                            <p className="font-bold">+۲۵٪</p>
                        </div>
                    </div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"></div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-right animate-fade-in-up">
            <div className="inline-block">
               <span className="px-4 py-1.5 bg-accent/10 text-accent font-semibold text-sm rounded-full">
                پیش‌فروش ویژه
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-primary">
              تجربه زندگی در
              <br />
              <span className="text-accent relative inline-block">
                اوج آرامش
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
              با سرمایه‌گذاری در پروژه‌های مدرن ما، آینده‌ای امن و پرسود را برای خود و خانواده‌تان رقم بزنید. طراحی مدرن، امکانات هوشمند و موقعیت عالی.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#specifications"
                className="px-8 py-4 bg-primary text-white text-lg font-medium rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center w-full sm:w-auto"
              >
                مشاهده کاتالوگ
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-primary border border-gray-200 text-lg font-medium rounded-xl hover:border-primary/20 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                درخواست بازدید
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="font-bold text-xl">Metropolis</span>
                <span className="font-bold text-xl">BuildS</span>
                <span className="font-bold text-xl">Urban+</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
