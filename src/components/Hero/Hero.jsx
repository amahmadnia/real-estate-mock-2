import './Hero.css';

const Hero = () => {
  const handleCTAClick = (e) => {
    e.preventDefault();
    const floorPlansSection = document.getElementById('floor-plans');
    if (floorPlansSection) {
      const headerOffset = 80;
      const elementPosition = floorPlansSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('سلام، من در مورد پروژه برج ساحلی دریانور اطلاعات بیشتری می‌خواهم');
    window.open(`https://wa.me/989123456789?text=${message}`, '_blank');
  };

  return (
    <section className="hero" id="home">
      <div className="hero__image-container">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
          alt="برج ساحلی لوکس دریانور"
          className="hero__image"
          loading="eager"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              برج ساحلی دریانور
            </h1>
            <p className="hero__subtitle">
              تجربه زندگی لوکس در کنار دریا با امکانات بی‌نظیر و چشم‌انداز خیره‌کننده
            </p>
            <button className="btn btn-primary hero__cta" onClick={handleCTAClick}>
              مشاهده واحدها
            </button>
          </div>

          {/* Agent Card */}
          <div className="agent-card card-glass">
            <div className="agent-card__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                alt="مشاور املاک"
                className="agent-card__image"
              />
            </div>
            <div className="agent-card__content">
              <h4 className="agent-card__name">علی محمدی</h4>
              <p className="agent-card__title">مشاور ارشد فروش</p>
              <a href="tel:+989123456789" className="agent-card__phone">
                <i className="fas fa-phone"></i>
                <span>۰۹۱۲ ۳۴۵ ۶۷۸۹</span>
              </a>
              <button className="btn btn-secondary agent-card__whatsapp" onClick={handleWhatsAppClick}>
                <i className="fab fa-whatsapp"></i>
                <span>تماس واتساپ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
