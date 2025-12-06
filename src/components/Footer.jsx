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

  const recentProjects = [
    { id: 1, title: 'برج آسمان', location: 'ولنجک' },
    { id: 2, title: 'پارک نور', location: 'نیاوران' },
    { id: 3, title: 'رویای سبز', location: 'فرمانیه' }
  ];

  const socialLinks = [
    { id: 1, icon: Instagram, href: '#', label: 'اینستاگرام', color: 'hover:text-pink-500' },
    { id: 2, icon: MessageCircle, href: '#', label: 'واتساپ', color: 'hover:text-green-500' },
    { id: 3, icon: Send, href: '#', label: 'تلگرام', color: 'hover:text-blue-500' },
    { id: 4, icon: Facebook, href: '#', label: 'فیسبوک', color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-jet-black via-jet-black to-dusk-blue-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">
                <span className="text-burnt-peach">آرمان</span> لوکس
              </h3>
              <p className="text-white/70 leading-relaxed">
                بیش از 20 سال تجربه در ساخت و ساز پروژه‌های لوکس مسکونی در بهترین نقاط تهران
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">ما را دنبال کنید</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      className={`w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">دسترسی سریع</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-burnt-peach transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-burnt-peach rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-6">پروژه‌های اخیر</h4>
            <ul className="space-y-4">
              {recentProjects.map((project) => (
                <li key={project.id}>
                  <a
                    href="#"
                    className="group block"
                  >
                    <h5 className="text-white font-semibold mb-1 group-hover:text-burnt-peach transition-colors duration-300">
                      {project.title}
                    </h5>
                    <p className="text-white/60 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">تماس با ما</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-burnt-peach/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-burnt-peach" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">تلفن تماس</p>
                  <a href="tel:+982188776655" className="text-white hover:text-burnt-peach transition-colors duration-300">
                    021-88776655
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-burnt-peach/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-burnt-peach" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">ایمیل</p>
                  <a href="mailto:info@armanlux.ir" className="text-white hover:text-burnt-peach transition-colors duration-300">
                    info@armanlux.ir
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-burnt-peach/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-burnt-peach" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">آدرس</p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    تهران، منطقه 1، خیابان ولنجک، پلاک 125
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>
              © {currentYear} آرمان لوکس. تمامی حقوق محفوظ است.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-burnt-peach transition-colors duration-300">
                حریم خصوصی
              </a>
              <a href="#" className="hover:text-burnt-peach transition-colors duration-300">
                شرایط و قوانین
              </a>
              <a href="#" className="hover:text-burnt-peach transition-colors duration-300">
                درباره ما
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
