import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#specifications');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green/90 via-forest-green/80 to-deep-forest/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
          alt="ساختمان لوکس"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-block">
            <span className="px-6 py-2 bg-gold/20 backdrop-blur-md border border-gold/30 rounded-full text-gold font-semibold text-sm tracking-wider">
              پروژه ویژه لوکس
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            زندگی در اوج لوکس
            <br />
            <span className="text-gold">آپارتمان‌های 5 تا 7 طبقه</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            تجربه زندگی در بهترین محله شهر با امکانات بی‌نظیر، معماری مدرن و چشم‌انداز خیره‌کننده
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#specifications"
              className="btn-gold w-full sm:w-auto"
            >
              مشاهده کاتالوگ
            </a>
            <a
              href="#contact"
              className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-forest-green w-full sm:w-auto backdrop-blur-md"
            >
              درخواست مشاوره
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">5-7</div>
              <div className="text-sm md:text-base text-white/80">طبقات ساختمان</div>
            </div>
            <div className="text-center border-r border-l border-white/30">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">90-150</div>
              <div className="text-sm md:text-base text-white/80">متراژ واحدها (متر)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">20+</div>
              <div className="text-sm md:text-base text-white/80">امکانات لوکس</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce"
        aria-label="اسکرول به پایین"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </button>
    </section>
  );
};

export default Hero;
