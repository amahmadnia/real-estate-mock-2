import { useState, useEffect, useRef } from 'react';
import Lightbox from '../Lightbox/Lightbox';
import './FloorPlans.css';

const FloorPlans = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const floorPlans = [
    {
      title: 'واحد ۱ خوابه - ۸۵ متر',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      specs: ['۸۵ متر', '۱ خواب', '۱ سرویس', 'شمالی']
    },
    {
      title: 'واحد ۱ خوابه - ۹۵ متر',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
      specs: ['۹۵ متر', '۱ خواب', '۱ سرویس', 'جنوبی']
    },
    {
      title: 'واحد ۲ خوابه - ۱۲۰ متر',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      specs: ['۱۲۰ متر', '۲ خواب', '۲ سرویس', 'شمالی']
    },
    {
      title: 'واحد ۲ خوابه - ۱۳۵ متر',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
      specs: ['۱۳۵ متر', '۲ خواب', '۲ سرویس', 'رو به دریا']
    },
    {
      title: 'واحد ۲ خوابه - ۱۵۰ متر',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      specs: ['۱۵۰ متر', '۲ خواب', '۲ سرویس', 'دوبلکس']
    },
    {
      title: 'واحد ۳ خوابه - ۱۸۰ متر',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
      specs: ['۱۸۰ متر', '۳ خواب', '۳ سرویس', 'شمالی']
    },
    {
      title: 'واحد ۳ خوابه - ۲۰۰ متر',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      specs: ['۲۰۰ متر', '۳ خواب', '۳ سرویس', 'رو به دریا']
    },
    {
      title: 'واحد ۳ خوابه - ۲۲۰ متر',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
      specs: ['۲۲۰ متر', '۳ خواب', '۳ سرویس', 'دوبلکس']
    },
    {
      title: 'پنت هاوس - ۲۵۰ متر',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      specs: ['۲۵۰ متر', '۳ خواب', '۴ سرویس', 'پنت هاوس']
    },
    {
      title: 'پنت هاوس - ۲۸۰ متر',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
      specs: ['۲۸۰ متر', '۴ خواب', '۴ سرویس', 'پنت هاوس']
    },
    {
      title: 'پنت هاوس دوبلکس - ۳۲۰ متر',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      specs: ['۳۲۰ متر', '۴ خواب', '۵ سرویس', 'دوبلکس']
    },
    {
      title: 'پنت هاوس ویژه - ۳۵۰ متر',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
      specs: ['۳۵۰ متر', '۵ خواب', '۵ سرویس', 'دوبلکس ویژه']
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % floorPlans.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + floorPlans.length) % floorPlans.length);
  };

  return (
    <>
      <section className="floor-plans section section-alt" id="floor-plans" ref={sectionRef}>
        <div className="container">
          <div className="floor-plans__header">
            <h2 className="section__title">پلان واحدها</h2>
            <p className="floor-plans__subtitle">
              مجموعه برج دریانور با تنوع واحدها از ۸۵ تا ۳۵۰ متر، پاسخگوی نیاز تمامی سلیقه‌ها و خانواده‌هاست
            </p>
          </div>

          <div className="floor-plans__grid">
            {floorPlans.map((plan, index) => (
              <div
                key={index}
                className="floor-plan-card animate-element"
                onClick={() => openLightbox(index)}
              >
                <div className="floor-plan-card__image-wrapper">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="floor-plan-card__image"
                    loading="lazy"
                  />
                  <div className="floor-plan-card__overlay">
                    <i className="fas fa-search-plus"></i>
                  </div>
                </div>
                <div className="floor-plan-card__content">
                  <h4 className="floor-plan-card__title">{plan.title}</h4>
                  <div className="floor-plan-card__specs">
                    {plan.specs.map((spec, i) => (
                      <span key={i} className="floor-plan-card__spec">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={floorPlans}
        currentIndex={currentIndex}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
};

export default FloorPlans;
