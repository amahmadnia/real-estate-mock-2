import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'املاک', href: '#properties' },
    { label: 'مشاورین', href: '#agents' },
    { label: 'درباره ما', href: '#about' },
    { label: 'بلاگ', href: '#blog' },
    { label: 'تماس با ما', href: '#contact' },
  ];

  const propertyTypes = [
    { label: 'آپارتمان', href: '#apartments' },
    { label: 'ویلا', href: '#villas' },
    { label: 'زمین', href: '#land' },
    { label: 'تجاری', href: '#commercial' },
    { label: 'اداری', href: '#office' },
  ];

  const socialMedia = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Home className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">املاک مدرن</h3>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              بهترین مشاور شما برای خرید، فروش و اجاره املاک در سراسر کشور. با بیش از 10 سال تجربه در زمینه املاک.
            </p>
            <div className="flex gap-3 pt-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">دسترسی سریع</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-xl font-bold mb-6">انواع املاک</h4>
            <ul className="space-y-3">
              {propertyTypes.map((type, index) => (
                <li key={index}>
                  <a
                    href={type.href}
                    className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {type.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">اطلاعات تماس</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  تهران، خیابان ولیعصر، پلاک 123
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:02112345678" className="text-white/80 hover:text-white">
                  021-12345678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:info@amlak-modern.com" className="text-white/80 hover:text-white">
                  info@amlak-modern.com
                </a>
              </li>
              <li className="text-white/80 pt-2">
                ساعات کاری: شنبه تا پنجشنبه، 9 صبح تا 6 عصر
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">
              © {currentYear} املاک مدرن. تمامی حقوق محفوظ است.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-white/70 hover:text-white transition-colors">
                حریم خصوصی
              </a>
              <a href="#terms" className="text-white/70 hover:text-white transition-colors">
                شرایط استفاده
              </a>
              <a href="#sitemap" className="text-white/70 hover:text-white transition-colors">
                نقشه سایت
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
