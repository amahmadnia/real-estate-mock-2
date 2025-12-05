import { Phone, MessageCircle, Mail } from 'lucide-react';

const ContactCard = ({ agent }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('سلام، درباره ملک شماره 3973 اطلاعات بیشتری می‌خواهم.');
    window.open(`https://wa.me/${agent.whatsapp}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${agent.phone}`;
  };

  return (
    <div className="sticky top-24 card space-y-6">
      <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
        اطلاعات تماس
      </h3>

      {/* Agent Info */}
      <div className="flex items-center gap-4">
        <img
          src={agent.photo}
          alt={agent.name}
          className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-50"
        />
        <div>
          <p className="text-sm text-gray-500">مشاور املاک</p>
          <p className="text-lg font-bold text-gray-900">{agent.name}</p>
        </div>
      </div>

      {/* Phone Number */}
      <div className="p-4 bg-gray-50 rounded-xl">
        <p className="text-sm text-gray-500 mb-2">شماره تماس</p>
        <p className="text-xl font-bold text-gray-900 tracking-wide">{agent.phone}</p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleWhatsAppClick}
          className="btn-whatsapp w-full justify-center"
        >
          <MessageCircle size={20} />
          <span>واتساپ</span>
        </button>

        <button
          onClick={handlePhoneClick}
          className="btn-primary w-full justify-center"
        >
          <Phone size={20} />
          <span>تماس تلفنی</span>
        </button>

        <button className="btn-ghost w-full justify-center">
          <Mail size={20} />
          <span>ارسال پیام</span>
        </button>
      </div>

      {/* Info Note */}
      <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
        <p className="text-sm text-gray-700 leading-relaxed">
          برای دریافت اطلاعات بیشتر و هماهنگی بازدید حضوری با ما تماس بگیرید.
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
