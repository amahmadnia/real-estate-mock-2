import { Phone, Mail, MapPin, Instagram, MessageCircle, Send, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 1, title: 'خانه', href: '#home' },
    { id: 2, title: 'مشخصات', href: '#specifications' },
    { id: 3, title: 'امکانات', href: '#amenities' },
    { id: 4, title: 'گالری', href: '#gallery' },
    { id: 5, title: 'موقعیت', href: '#location' },
    { id: 6, title: 'تماس', href: '#contact' }
  ];

  const socialLinks = [
    { id: 1, icon: Instagram, href: '#', label: 'اینستاگرام', color: 'hover:text-accent' },
    { id: 2, icon: MessageCircle, href: '#', label: 'واتساپ', color: 'hover:text-accent' },
    { id: 3, icon: Send, href: '#', label: 'تلگرام', color: 'hover:text-accent' },
    { id: 4, icon: Twitter, href: '#', label: 'توییتر', color: 'hover:text-accent' }
  ];

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                 </div>
                <div className="text-xl font-bold text-primary">
                  آرمان <span className="text-accent">لوکس</span>
                </div>
            </div>
            
            <p className="text-secondary/80 text-sm leading-relaxed max-w-xs">
              ما در آرمان لوکس با بیش از دو دهه تجربه، رویای زندگی در فضایی امن، مدرن و زیبا را برای شما به واقعیت تبدیل می‌کنیم.
            </p>
            
            <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
            </div>
          </div>

          {/* Solution / Links */}
          <div>
            <h4 className="text-primary font-bold mb-6">بخش‌های وبسایت</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-secondary/70 hover:text-accent transition-colors duration-200 block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company / Support */}
          <div>
             <h4 className="text-primary font-bold mb-6">پشتیبانی و مشاوره</h4>
             <ul className="space-y-3 text-sm">
                <li>
                    <a href="#" className="text-secondary/70 hover:text-accent transition-colors duration-200 block">سوالات متداول</a>
                </li>
                <li>
                    <a href="#" className="text-secondary/70 hover:text-accent transition-colors duration-200 block">مرکز پشتیبانی</a>
                </li>
                <li>
                    <a href="#" className="text-secondary/70 hover:text-accent transition-colors duration-200 block">شرایط و قوانین</a>
                </li>
             </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-bold mb-6">تماس با ما</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-secondary/70">
                <MapPin className="w-4 h-4 text-accent" />
                <span>تهران، ولنجک، خیابان ۱۳، پلاک ۲۵</span>
              </li>
              <li className="flex items-center gap-3 text-secondary/70">
                <Phone className="w-4 h-4 text-accent" />
                <span dir="ltr">021 - 22 33 44 55</span>
              </li>
              <li className="flex items-center gap-3 text-secondary/70">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@armanlux.ir</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
             <p className="text-xs text-gray-500">
              © {currentYear} آرمان لوکس. تمامی حقوق محفوظ است.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
                <a href="#" className="hover:text-primary transition-colors">حریم خصوصی</a>
                <a href="#" className="hover:text-primary transition-colors">کوکی‌ها</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
