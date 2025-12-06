import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-element').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-on-scroll');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const specs = [
    { icon: 'fa-building', label: 'تعداد طبقات', value: '۲۵ طبقه' },
    { icon: 'fa-home', label: 'تعداد واحدها', value: '۱۲۰ واحد' },
    { icon: 'fa-ruler-combined', label: 'متراژ واحدها', value: '۸۵ تا ۲۵۰ متر' },
    { icon: 'fa-calendar', label: 'سال ساخت', value: '۱۴۰۳' },
    { icon: 'fa-file-contract', label: 'نوع سند', value: 'تک برگ' },
    { icon: 'fa-location-dot', label: 'موقعیت', value: 'ساحلی' }
  ];

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__intro animate-element">
          <h2 className="section__title">درباره پروژه برج دریانور</h2>
          <div className="about__content">
            <div className="about__text">
              <p>
                برج ساحلی دریانور، شاهکاری از معماری مدرن در کنار دریا است که تجربه‌ای بی‌نظیر از زندگی لوکس را برای شما به ارمغان می‌آورد. این پروژه با بهره‌گیری از جدیدترین استانداردهای ساخت و ساز و با توجه به تمامی جزئیات طراحی شده است.
              </p>
              <p>
                واحدهای این مجموعه با چشم‌اندازی خیره‌کننده به دریا و با استفاده از بهترین مصالح و تجهیزات روز دنیا ساخته شده‌اند. هر واحد به گونه‌ای طراحی شده که نور طبیعی و فضای سبز را به بهترین شکل ممکن به داخل فضای زندگی شما بیاورد.
              </p>
              <p>
                موقعیت استثنایی این پروژه در کنار دریا، دسترسی آسان به مراکز خرید، تفریحی و درمانی، و امکانات رفاهی بی‌نظیر، از ویژگی‌های منحصر به فرد این مجموعه هستند که آن را به انتخابی ایده‌آل برای زندگی تبدیل کرده است.
              </p>
            </div>
            <div className="about__image">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                alt="برج دریانور"
                loading="lazy"
              />
              <div className="about__image-overlay"></div>
            </div>
          </div>
        </div>

        <div className="about__specs animate-element">
          <h3 className="specs__title">مشخصات پروژه</h3>
          <div className="specs__grid">
            {specs.map((spec, index) => (
              <div key={index} className="spec-card animate-element">
                <div className="spec-card__icon">
                  <i className={`fas ${spec.icon}`}></i>
                </div>
                <div className="spec-card__content">
                  <h4 className="spec-card__label">{spec.label}</h4>
                  <p className="spec-card__value">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__location animate-element">
          <h3 className="location__title">موقعیت و دسترسی</h3>
          <p className="location__text">
            برج دریانور در یکی از برترین و محبوب‌ترین مناطق ساحلی شهر واقع شده است.
            این پروژه دسترسی آسان به تمامی امکانات شهری از جمله مراکز خرید مدرن، رستوران‌های معتبر،
            مراکز آموزشی و درمانی را برای ساکنان فراهم می‌آورد. فاصله تا ساحل تنها ۵۰ متر و
            دسترسی به بزرگراه اصلی در کمتر از ۵ دقیقه امکان‌پذیر است.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
