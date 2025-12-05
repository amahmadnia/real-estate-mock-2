import { useState } from 'react';
import { Star } from 'lucide-react';

const OpinionForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    rating: '',
    comment: ''
  });

  const [sortBy, setSortBy] = useState('default');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Opinion form submitted:', formData);
    alert('نظر شما با موفقیت ثبت شد!');
    // Reset form
    setFormData({
      email: '',
      title: '',
      rating: '',
      comment: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Header with Sort */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">نظر</h2>

          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border-2 border-gray-200 rounded-lg text-sm bg-white cursor-pointer focus:outline-none focus:border-primary"
            >
              <option value="default">مرتب سازی بر اساس: ترتیب پیشفرض</option>
              <option value="newest">جدیدترین</option>
              <option value="oldest">قدیمی‌ترین</option>
              <option value="highest">بالاترین امتیاز</option>
              <option value="lowest">پایین‌ترین امتیاز</option>
            </select>

            <button
              onClick={() => window.scrollTo({ top: document.getElementById('opinion-form').offsetTop, behavior: 'smooth' })}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              ارسال نظر
            </button>
          </div>
        </div>

        {/* Opinion Form */}
        <div id="opinion-form" className="card max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">ارسال نظر</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                ایمیل
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Title and Rating Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  عنوان
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="یک عنوان وارد کنید"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  امتیاز
                </label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="input-field appearance-none bg-white cursor-pointer"
                  required
                >
                  <option value="">انتخاب کنید</option>
                  <option value="5">عالی (5 ستاره)</option>
                  <option value="4">خوب (4 ستاره)</option>
                  <option value="3">متوسط (3 ستاره)</option>
                  <option value="2">ضعیف (2 ستاره)</option>
                  <option value="1">خیلی ضعیف (1 ستاره)</option>
                </select>
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                نظر
              </label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="input-field resize-none"
                rows="6"
                placeholder="ثبت نظر"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              ثبت نظر
            </button>
          </form>
        </div>

        {/* Placeholder for existing reviews */}
        <div className="mt-12">
          <p className="text-center text-gray-500 py-8">
            هنوز نظری ثبت نشده است. اولین نفری باشید که نظر می‌دهید!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpinionForm;
