import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      id: 0,
      question: 'قیمت واحدها چگونه است و چه شرایط پرداختی دارد؟',
      answer: 'قیمت واحدها بر اساس متراژ و طبقه متغیر است. واحدهای 90 متری از 8 میلیارد، 120 متری از 11 میلیارد و پنت‌هاوس‌های 150 متری از 15 میلیارد تومان شروع می‌شود. شرایط پرداخت شامل 30% پیش پرداخت، 40% طی مدت ساخت و 30% هنگام تحویل است. همچنین امکان اقساط بلندمدت نیز وجود دارد.'
    },
    {
      id: 1,
      question: 'چه انواع واحدهایی در دسترس است؟',
      answer: 'سه نوع واحد داریم: واحدهای 90 متری دو خوابه با سالن پذیرایی مجزا، واحدهای 120 متری سه خوابه با آشپزخانه اپن و اتاق مستر، و پنت‌هاوس‌های 150 متری با روف گاردن اختصاصی و 3 اتاق خواب. تمامی واحدها دارای پارکینگ اختصاصی و انباری هستند.'
    },
    {
      id: 2,
      question: 'زمان ساخت و تحویل چه زمانی است؟',
      answer: 'پروژه در حال حاضر در مرحله اسکلت است و طبق برنامه‌ریزی، تحویل واحدها در پاییز 1405 خواهد بود. با توجه به سابقه 20 ساله سازنده، تمامی پروژه‌های قبلی به موقع تحویل داده شده‌اند. ضمناً می‌توانید به صورت ماهانه از پیشرفت کار بازدید کنید.'
    },
    {
      id: 3,
      question: 'برای خرید چه مدارکی لازم است؟',
      answer: 'برای خرید به مدارک زیر نیاز دارید: کپی شناسنامه و کارت ملی خریدار و همسر، کپی سند مالکیت (در صورت داشتن ملک قبلی برای معاوضه)، اصل فیش حقوقی یا گواهی کسب (جهت بررسی توانایی پرداخت اقساط). پس از تکمیل مدارک، قرارداد رسمی در دفترخانه منعقد می‌شود.'
    },
    {
      id: 4,
      question: 'امکانات و تسهیلات ساختمان شامل چه مواردی است؟',
      answer: 'ساختمان دارای امکانات کامل شامل استخر سرپوشیده چهارفصل، باشگاه ورزشی مجهز، اسپا و سونا، روف گاردن، پارکینگ 3 طبقه زیرزمینی، خدمات کنسیرژ و نگهبانی 24 ساعته، سیستم هوشمند خانه، آسانسورهای اختصاصی، زمین بازی کودکان، سیستم انرژی پاک و اینترنت فیبر نوری پرسرعت است.'
    },
    {
      id: 5,
      question: 'آیا امکان بازدید از نمونه واحد وجود دارد؟',
      answer: 'بله، یک واحد نمونه 120 متری کاملاً دکور شده و آماده بازدید است. همچنین می‌توانید از سایت پروژه و روند ساخت بازدید کنید. برای هماهنگی بازدید با شماره تماس یا فرم درخواست مشاوره با ما در ارتباط باشید. بازدیدها از شنبه تا پنجشنبه ساعت 9 صبح تا 6 عصر امکان‌پذیر است.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-forest-green/10 text-forest-green rounded-full text-sm font-semibold mb-4">
              سوالات متداول
            </span>
            <h2 className="heading-secondary">
              پاسخ به
              <span className="gradient-text"> سوالات شما</span>
            </h2>
            <p className="text-warm-gray text-lg mt-4 leading-relaxed">
              پاسخ سوالات رایج درباره پروژه، قیمت‌ها و شرایط خرید
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-cream rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-right hover:bg-white transition-colors duration-300"
                >
                  <h3 className="text-lg font-bold text-charcoal flex-1">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    activeIndex === faq.id ? 'bg-forest-green' : ''
                  }`}>
                    {activeIndex === faq.id ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-forest-green" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    activeIndex === faq.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="border-r-4 border-gold pr-4">
                      <p className="text-warm-gray leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-cream to-white rounded-2xl p-8 border border-stone/30">
            <h3 className="text-2xl font-bold text-charcoal mb-3">
              سوال دیگری دارید؟
            </h3>
            <p className="text-warm-gray mb-6">
              تیم ما آماده پاسخگویی به تمام سوالات شماست
            </p>
            <a href="#contact" className="btn-primary inline-block">
              تماس با ما
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
