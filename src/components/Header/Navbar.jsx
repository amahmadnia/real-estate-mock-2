import { useState } from 'react';
import { Menu, X, User, Home } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'املاک', href: '#properties' },
    { label: 'مشاورین', href: '#agents' },
    { label: 'درباره ما', href: '#about' },
    { label: 'بلاگ', href: '#blog' },
    { label: 'تماس با ما', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm transition-all duration-300">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg">
                <Home className="text-white" size={24} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary">املاک مدرن</h1>
                <p className="text-xs text-gray-500">خرید و فروش ملک</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative text-gray-700 font-medium transition-colors duration-300 hover:text-primary py-2 after:absolute after:bottom-0 after:right-0 after:left-0 after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* User Icon and Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                <User size={20} className="text-gray-700" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-gray-700" />
                ) : (
                  <Menu size={24} className="text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[80%] bg-white shadow-2xl z-50 transform transition-transform duration-400 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                <Home className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-primary">املاک مدرن</h2>
              </div>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={toggleMobileMenu}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 hover:text-primary transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors duration-300">
              <User size={20} />
              <span>ورود / ثبت نام</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
