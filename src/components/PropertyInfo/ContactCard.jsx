import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const ContactCard = ({ agent, propertyTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: `سلام من این ملک را پسندیده ام و ... [خرید ویلا دوبلکس نوساز با آسانسور و آلاچیق در شهرک بهار نارنج]`,
    tourType: '',
    termsAccepted: false
  });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('سلام، درباره ملک شماره 3973 اطلاعات بیشتری می‌خواهم.');
    window.open(`https://wa.me/${agent.whatsapp}?text=${message}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('پیام شما با موفقیت ارسال شد!');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="sticky top-24 space-y-6">
      {/* Agent Card */}
      <div className="card">
        {/* Agent Info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={agent.photo}
            alt={agent.name}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-50"
          />
          <div>
            <p className="text-lg font-bold text-primary">{agent.name}</p>
            <p className="text-sm text-gray-600 font-semibold">{agent.phone}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg mb-4">
          <p className="font-semibold">مشاهده آگهی</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="input-field"
              placeholder="نام و نام خانوادگی"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              placeholder="شماره تماس"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="آدرس ایمیل"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="input-field resize-none"
              rows="5"
              required
            />
          </div>

          <div>
            <select
              name="tourType"
              value={formData.tourType}
              onChange={handleChange}
              className="input-field appearance-none bg-white cursor-pointer"
            >
              <option value="">انتخاب</option>
              <option value="in-person">بازدید حضوری</option>
              <option value="virtual">بازدید مجازی</option>
            </select>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
              required
            />
            <label className="text-sm text-gray-700 cursor-pointer">
              با ارسال این فرم من موافقت می کنم که{' '}
              <a href="#" className="text-primary hover:underline">
                شرایط استفاده
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg"
          >
            ارسال پیام
          </button>

          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="w-full border-2 border-green-500 text-green-600 py-3 px-6 rounded-xl font-bold hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            <span>واتس اپ</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
