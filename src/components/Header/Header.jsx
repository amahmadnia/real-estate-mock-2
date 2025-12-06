import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = ['home', 'about', 'amenities', 'floor-plans', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="header__top-bar">
        <div className="container">
          <div className="top-bar__content">
            <div className="top-bar__left">
              <a href="tel:+989123456789" className="top-bar__link">
                <i className="fas fa-phone"></i>
                <span>۰۹۱۲ ۳۴۵ ۶۷۸۹</span>
              </a>
              <a href="mailto:info@daryanoor.com" className="top-bar__link">
                <i className="fas fa-envelope"></i>
                <span>info@daryanoor.com</span>
              </a>
            </div>
            <div className="top-bar__right">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="top-bar__social">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="top-bar__social">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="https://wa.me/989123456789" target="_blank" rel="noopener noreferrer" className="top-bar__social">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="header__nav">
        <div className="container">
          <div className="nav__content">
            <div className="nav__logo">
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                <h3>دریانور</h3>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`nav__hamburger ${isMobileMenuOpen ? 'nav__hamburger--active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Navigation Menu */}
            <ul className={`nav__menu ${isMobileMenuOpen ? 'nav__menu--active' : ''}`}>
              <li>
                <a
                  href="#home"
                  className={`nav__link ${activeSection === 'home' ? 'nav__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'home')}
                >
                  خانه
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`nav__link ${activeSection === 'about' ? 'nav__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'about')}
                >
                  درباره پروژه
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className={`nav__link ${activeSection === 'amenities' ? 'nav__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'amenities')}
                >
                  امکانات
                </a>
              </li>
              <li>
                <a
                  href="#floor-plans"
                  className={`nav__link ${activeSection === 'floor-plans' ? 'nav__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'floor-plans')}
                >
                  پلان واحدها
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className={`nav__link ${activeSection === 'gallery' ? 'nav__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'gallery')}
                >
                  گالری
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav__link ${activeSection === 'contact' ? 'nav__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'contact')}
                >
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="nav__overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
