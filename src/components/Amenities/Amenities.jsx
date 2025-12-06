import { useEffect, useRef } from 'react';
import './Amenities.css';

const Amenities = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-element').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-on-scroll');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const amenities = [
    {
      title: 'لابی لوکس و مجلل',
      description: 'لابی با طراحی مدرن و لوکس، فضایی دلنشین برای استقبال از شما و میهمانانتان فراهم می‌کند. این فضا با استفاده از بهترین مصالح و دکوراسیون درجه یک طراحی شده است.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
    },
    {
      title: 'استخر سرپوشیده',
      description: 'استخر استاندارد سرپوشیده با سیستم تصفیه پیشرفته و امکانات ژاکوزی، فضایی عالی برای تفریح و ورزش در تمام فصول سال را برای ساکنان فراهم می‌آورد.',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80'
    },
    {
      title: 'باشگاه ورزشی مجهز',
      description: 'باشگاه بدنسازی مجهز به جدیدترین دستگاه‌های ورزشی با مربیان حرفه‌ای، محیطی مناسب برای حفظ سلامت و تناسب اندام شما فراهم می‌کند.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80'
    },
    {
      title: 'فضای سبز و باغ',
      description: 'فضای سبز وسیع با چمن‌های مرتب و درختان زینتی، محیطی آرام و دلنشین برای قدم زدن و استراحت را به ارمغان می‌آورد و کیفیت هوا را بهبود می‌بخشد.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
    },
    {
      title: 'پارکینگ طبقاتی هوشمند',
      description: 'پارکینگ چند طبقه با سیستم امنیتی پیشرفته و دسترسی سریع، یک پارکینگ اختصاصی برای هر واحد و پارکینگ مهمان را شامل می‌شود.',
      image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80'
    },
    {
      title: 'سالن اجتماعات و مهمان',
      description: 'سالن چند منظوره مجهز با امکانات کامل برای برگزاری جشن‌ها، مهمانی‌ها و مراسم‌های خانوادگی با ظرفیت بالا و دکوراسیون مدرن طراحی شده است.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c19f?w=800&q=80'
    },
    {
      title: 'روف گاردن و بام سبز',
      description: 'فضای روف گاردن با چشم‌انداز دریا، مکانی ایده‌آل برای تفریح، گردهمایی‌های خانوادگی و لذت بردن از غروب آفتاب است.',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80'
    },
    {
      title: 'سیستم امنیتی ۲۴ ساعته',
      description: 'سیستم امنیتی هوشمند با دوربین‌های مداربسته، نگهبانی ۲۴ ساعته و کنترل تردد، امنیت کامل را برای ساکنان تضمین می‌کند.',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80'
    }
  ];

  return (
    <section className="amenities section" id="amenities" ref={sectionRef}>
      <div className="container">
        <div className="amenities__header">
          <h2 className="section__title">امکانات و خدمات</h2>
          <p className="amenities__subtitle">
            برج دریانور با ارائه امکانات رفاهی و تفریحی بی‌نظیر، تجربه‌ای متفاوت از زندگی لوکس را برای شما به ارمغان می‌آورد
          </p>
        </div>

        <div className="amenities__grid">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`amenity-card animate-element ${index % 2 === 0 ? 'amenity-card--left' : 'amenity-card--right'}`}
            >
              <div className="amenity-card__image-wrapper">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="amenity-card__image"
                  loading="lazy"
                />
                <div className="amenity-card__overlay"></div>
              </div>
              <div className="amenity-card__content">
                <h3 className="amenity-card__title">{amenity.title}</h3>
                <p className="amenity-card__description">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
