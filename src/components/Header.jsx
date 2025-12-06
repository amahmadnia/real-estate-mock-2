import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('FA');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === 'FA' ? 'EN' : 'FA');

  const navLinks = [
    { id: 1, title: 'خانه', href: '#home' },
    { id: 2, title: 'مشخصات', href: '#specifications' },
    { id: 3, title: 'امکانات', href: '#amenities' },
    { id: 4, title: 'گالری', href: '#gallery' },
    { id: 5, title: 'موقعیت', href: '#location' },
    { id: 6, title: 'تماس', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
             </div>
            <div className="text-xl font-bold text-primary">
              آرمان <span className="text-accent">لوکس</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-secondary hover:text-primary font-medium text-sm transition-colors duration-200"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-secondary hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium"
            >
              <span>{language}</span>
            </button>

            {/* CTA Button */}
             <a
              href="#contact"
              className="hidden lg:block px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              ثبت نام
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="منوی اصلی"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-20 right-0 left-0 bg-white border-t border-gray-100 shadow-xl transform transition-all duration-300 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={toggleMenu}
              className="text-base font-medium text-secondary hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg transition-all duration-200"
            >
              {link.title}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
             <button
                onClick={toggleLanguage}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary"
              >
                <span>زبان</span>
                <span className="font-semibold">{language === 'FA' ? 'English' : 'فارسی'}</span>
              </button>
              <a
                href="#contact"
                className="flex items-center justify-center w-full px-4 py-3 bg-primary text-white font-medium rounded-lg"
              >
                ثبت نام
              </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
