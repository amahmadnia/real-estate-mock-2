import { useState } from 'react';

const TourScheduling = () => {
  const [formData, setFormData] = useState({
    tourType: '',
    date: '',
    time: '',
    fullName: '',
    phone: '',
    email: '',
    message: '',
    termsAccepted: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tour scheduling form submitted:', formData);
    alert('درخواست بازدید شما با موفقیت ارسال شد!');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">برنامه ریزی بازدید</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Tour Type, Date, Time Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tour Type
            </label>
            <select
              name="tourType"
              value={formData.tourType}
              onChange={handleChange}
              className="input-field appearance-none bg-white cursor-pointer"
              required
            >
              <option value="">انتخاب</option>
              <option value="in-person">بازدید حضوری</option>
              <option value="virtual">بازدید مجازی</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              تاریخ
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input-field"
              placeholder="تاریخ را انتخاب کنید"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              زمان
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="input-field appearance-none bg-white cursor-pointer"
              required
            >
              <option value="">انتخاب زمان</option>
              <option value="09:00">صبح 09:00</option>
              <option value="10:00">صبح 10:00</option>
              <option value="11:00">صبح 11:00</option>
              <option value="14:00">عصر 14:00</option>
              <option value="15:00">عصر 15:00</option>
              <option value="16:00">عصر 16:00</option>
              <option value="17:00">عصر 17:00</option>
            </select>
          </div>
        </div>

        {/* Your Information Section */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">اطلاعات شما</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                نام و نام خانوادگی
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                شماره تماس
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                آدرس ایمیل
              </label>
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
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              پیام
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="input-field resize-none"
              rows="4"
              placeholder="پیام خود را وارد کنید"
            />
          </div>
        </div>

        {/* Terms and Submit */}
        <div className="space-y-4">
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
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            ارسال درخواست بازدید
          </button>
        </div>
      </form>
    </div>
  );
};

export default TourScheduling;
