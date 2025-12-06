import { useState, useEffect, useRef } from 'react';
import Lightbox from '../Lightbox/Lightbox';
import './Gallery.css';

const Gallery = () => {
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

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      alt: 'نمای بیرونی برج دریانور - روز'
    },
    {
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      alt: 'نمای بیرونی برج - شب'
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      alt: 'لابی لوکس'
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      alt: 'نشیمن واحدها'
    },
    {
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      alt: 'آشپزخانه مدرن'
    },
    {
      src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
      alt: 'اتاق خواب با چشم‌انداز دریا'
    },
    {
      src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80',
      alt: 'استخر سرپوشیده'
    },
    {
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
      alt: 'چشم‌انداز دریا'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alt: 'فضای سبز'
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <section className="gallery section" id="gallery" ref={sectionRef}>
        <div className="container">
          <div className="gallery__header">
            <h2 className="section__title">گالری تصاویر</h2>
            <p className="gallery__subtitle">
              نگاهی به تصاویر واقعی از پروژه، امکانات و فضاهای زیبای برج دریانور
            </p>
          </div>

          <div className="gallery__grid">
            {images.map((image, index) => (
              <div
                key={index}
                className="gallery-item animate-element"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-item__image"
                  loading="lazy"
                />
                <div className="gallery-item__overlay">
                  <i className="fas fa-expand"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={images}
        currentIndex={currentIndex}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
};

export default Gallery;
