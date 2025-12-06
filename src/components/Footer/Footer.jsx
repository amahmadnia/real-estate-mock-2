import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__column">
              <h3 className="footer__logo">دریانور</h3>
              <p className="footer__description">
                برج ساحلی دریانور، تجربه‌ای بی‌نظیر از زندگی لوکس در کنار دریا
                با امکانات رفاهی و تفریحی کامل
              </p>
              <div className="footer__social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="https://wa.me/989123456789" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="footer__column">
              <h4 className="footer__title">دسترسی سریع</h4>
              <ul className="footer__links">
                <li>
                  <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                    <i className="fas fa-chevron-left"></i>
                    <span>صفحه اصلی</span>
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                    <i className="fas fa-chevron-left"></i>
                    <span>درباره پروژه</span>
                  </a>
                </li>
                <li>
                  <a href="#amenities" onClick={(e) => handleNavClick(e, 'amenities')}>
                    <i className="fas fa-chevron-left"></i>
                    <span>امکانات</span>
                  </a>
                </li>
                <li>
                  <a href="#floor-plans" onClick={(e) => handleNavClick(e, 'floor-plans')}>
                    <i className="fas fa-chevron-left"></i>
                    <span>پلان واحدها</span>
                  </a>
                </li>
                <li>
                  <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>
                    <i className="fas fa-chevron-left"></i>
                    <span>گالری</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                    <i className="fas fa-chevron-left"></i>
                    <span>تماس با ما</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__title">خدمات ما</h4>
              <ul className="footer__links">
                <li>
                  <a href="#contact">
                    <i className="fas fa-chevron-left"></i>
                    <span>مشاوره خرید</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <i className="fas fa-chevron-left"></i>
                    <span>بازدید واحدها</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <i className="fas fa-chevron-left"></i>
                    <span>اقساط و تسهیلات</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <i className="fas fa-chevron-left"></i>
                    <span>خدمات پس از فروش</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <i className="fas fa-chevron-left"></i>
                    <span>مشاوره سرمایه‌گذاری</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <i className="fas fa-chevron-left"></i>
                    <span>خدمات حقوقی</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__title">تماس با ما</h4>
              <ul className="footer__contact">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>مازندران، ساحل زیبای محمودآباد، بلوار ساحلی</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>۰۱۱-۱۲۳۴۵۶۷۸</span>
                </li>
                <li>
                  <i className="fas fa-mobile-alt"></i>
                  <span>۰۹۱۲ ۳۴۵ ۶۷۸۹</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>info@daryanoor.com</span>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span>شنبه تا پنج‌شنبه: ۹ صبح تا ۸ شب</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} برج ساحلی دریانور. تمامی حقوق محفوظ است.
            </p>
            <div className="footer__bottom-links">
              <a href="#privacy">حریم خصوصی</a>
              <span className="footer__separator">|</span>
              <a href="#terms">شرایط استفاده</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
