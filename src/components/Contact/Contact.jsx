import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    unitType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'لطفا نام خود را وارد کنید';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'نام باید حداقل ۳ کاراکتر باشد';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'لطفا شماره تماس خود را وارد کنید';
    } else if (!/^09\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'شماره تماس معتبر نیست';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'ایمیل معتبر نیست';
    }

    if (formData.message && formData.message.length < 10) {
      newErrors.message = 'پیام باید حداقل ۱۰ کاراکتر باشد';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstError = Object.keys(newErrors)[0];
      document.getElementsByName(firstError)[0]?.focus();
      return;
    }

    setIsSubmitting(true);

    console.log('Form Data:', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          unitType: '',
          message: ''
        });
        setSubmitSuccess(false);
      }, 2000);
    }, 1500);
  };

  return (
    <section className="contact section section-alt" id="contact">
      <div className="container">
        <div className="contact__header">
          <h2 className="section__title">تماس با ما</h2>
          <p className="contact__subtitle">
            برای دریافت اطلاعات بیشتر، بازدید از واحدها و مشاوره رایگان با ما در تماس باشید
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__form-wrapper">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  نام و نام خانوادگی <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="نام کامل خود را وارد کنید"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  شماره تماس <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="۰۹۱۲ *** ****"
                  dir="ltr"
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  dir="ltr"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="unitType" className="form-label">
                  نوع واحد مورد نظر
                </label>
                <select
                  id="unitType"
                  name="unitType"
                  className="form-input"
                  value={formData.unitType}
                  onChange={handleChange}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="1bed">۱ خوابه</option>
                  <option value="2bed">۲ خوابه</option>
                  <option value="3bed">۳ خوابه</option>
                  <option value="penthouse">پنت هاوس</option>
                </select>
              </div>

              <div className="form-group form-group--full">
                <label htmlFor="message" className="form-label">
                  پیام شما
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="پیام خود را بنویسید..."
                  rows="5"
                ></textarea>
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>در حال ارسال...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    <span>ارسال پیام</span>
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i>
                  <span>پیام شما با موفقیت ارسال شد!</span>
                </div>
              )}
            </form>
          </div>

          <div className="contact__info">
            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-info-card__content">
                <h4>آدرس</h4>
                <p>مازندران، ساحل زیبای محمودآباد، بلوار ساحلی، برج دریانور</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-info-card__content">
                <h4>تلفن تماس</h4>
                <p>۰۱۱-۱۲۳۴۵۶۷۸</p>
                <p>۰۹۱۲ ۳۴۵ ۶۷۸۹</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info-card__content">
                <h4>ایمیل</h4>
                <p>info@daryanoor.com</p>
                <p>sales@daryanoor.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-info-card__content">
                <h4>ساعات کاری</h4>
                <p>شنبه تا پنج‌شنبه: ۹ صبح تا ۸ شب</p>
                <p>جمعه: تعطیل</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
