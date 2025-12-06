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
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="50" rx="8" fill="#2C5F2D"/>
              <path d="M25 10L40 20V35L25 45L10 35V20L25 10Z" fill="#C9A961"/>
              <path d="M25 15L35 22V33L25 40L15 33V22L25 15Z" fill="#FEFCF8"/>
              <circle cx="25" cy="27" r="3" fill="#2C5F2D"/>
            </svg>
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent">آرمان لوکس</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-charcoal hover:text-forest-green transition-colors duration-300 font-medium relative group"
              >
                {link.title}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white transition-all duration-300"
            >
              <span className="font-semibold text-sm">{language}</span>
            </button>

            {/* Search Icon */}
            <button
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-cream transition-colors duration-300"
              aria-label="جستجو"
            >
              <Search className="w-5 h-5 text-charcoal" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-md hover:bg-cream transition-colors duration-300"
              aria-label="منوی اصلی"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-charcoal" />
              ) : (
                <Menu className="w-6 h-6 text-charcoal" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-20 right-0 left-0 bg-white shadow-lg transform transition-all duration-400 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container-custom py-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={toggleMenu}
              className="text-lg font-medium text-charcoal hover:text-forest-green hover:pr-4 transition-all duration-300 py-3 border-b border-stone"
            >
              {link.title}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white transition-all duration-300"
          >
            <span className="font-semibold">{language === 'FA' ? 'English' : 'فارسی'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
