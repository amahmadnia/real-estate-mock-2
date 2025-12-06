# برج آریانا - وبسایت برج ساحلی لوکس
# Ariyana Tower - Luxury Coastal Tower Website

یک وبسایت تک‌صفحه‌ای مدرن و لوکس برای معرفی پروژه برج ساحلی با طراحی RTL و قابلیت‌های پیشرفته.

A modern, luxury single-page website showcasing a coastal residential tower with RTL design and advanced features.

---

## 🌟 ویژگی‌ها / Features

### طراحی / Design
- ✨ طراحی مدرن و لوکس با تم دریایی
- 🎨 پالت رنگی حرفه‌ای با آبی اقیانوسی و طلایی
- 📱 طراحی کاملاً ریسپانسیو (Mobile-First)
- ⬅️ پشتیبانی کامل از RTL برای فارسی
- 🖼️ گالری تصاویر با Lightbox
- ✨ انیمیشن‌های smooth و لوکس

### بخش‌های صفحه / Sections
1. **هدر و منوی ناوبری** - Sticky Header با منوی موبایل
2. **Hero Section** - تصویر پس‌زمینه با کارت مشاور
3. **درباره پروژه** - معرفی کامل با مشخصات
4. **امکانات** - نمایش 6 امکانات با تصاویر زیبا
5. **پلان واحدها** - 12 پلان مختلف با Lightbox
6. **گالری** - 9 تصویر با قابلیت نمایش تمام‌صفحه
7. **فرم تماس** - با اعتبارسنجی کامل
8. **فوتر** - 4 ستونه با لینک‌ها و اطلاعات تماس

### قابلیت‌های فنی / Technical Features
- 🚀 Pure HTML/CSS/JavaScript (بدون فریمورک)
- ⚡ عملکرد بهینه و سرعت بالا
- ♿ Accessibility (WCAG 2.1 AA)
- 🔍 SEO Optimized
- 📐 8px Grid System
- 🎯 Modular Scale Typography (1.25)
- 🎨 CSS Custom Properties (Variables)
- 📱 Responsive Breakpoints: 320px, 576px, 768px, 992px, 1200px+

---

## 📁 ساختار پروژه / Project Structure

```
real-estate-mock-2/
├── index.html                 # صفحه اصلی
├── public/
│   ├── css/
│   │   ├── reset.css         # CSS Reset
│   │   ├── variables.css     # متغیرهای CSS
│   │   ├── main.css          # استایل‌های اصلی
│   │   └── responsive.css    # استایل‌های ریسپانسیو
│   ├── js/
│   │   ├── navigation.js     # منوی ناوبری
│   │   ├── lightbox.js       # لایت‌باکس گالری
│   │   ├── form.js           # اعتبارسنجی فرم
│   │   └── main.js           # قابلیت‌های عمومی
│   └── images/               # تصاویر پروژه
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 نصب و راه‌اندازی / Installation

### پیش‌نیازها / Prerequisites
- Node.js (نسخه 16 یا بالاتر)
- npm یا yarn

### مراحل نصب / Setup Steps

1. **کلون کردن یا دانلود پروژه**
```bash
git clone <repository-url>
cd real-estate-mock-2
```

2. **نصب وابستگی‌ها**
```bash
npm install
```

3. **اجرای سرور توسعه**
```bash
npm run dev
```

سایت در آدرس `http://localhost:5173` در دسترس خواهد بود.

4. **ساخت نسخه Production**
```bash
npm run build
```

فایل‌های نهایی در پوشه `dist/` ایجاد می‌شوند.

---

## 🎨 راهنمای سبک / Style Guide

### پالت رنگی / Color Palette

```css
/* Primary Colors */
--color-primary: #003D5C       /* Deep Ocean Blue */
--color-gold: #C89B3C           /* Rich Gold */
--color-emerald: #00543A        /* Coastal Green */

/* Neutrals */
--color-cream: #F8F6F0          /* Warm White */
--color-charcoal: #2C2C2C       /* Text Color */
```

### تایپوگرافی / Typography

**فونت اصلی:** Vazir (فارسی) / Vazir Font (Persian)

**مقیاس (Modular Scale 1.25):**
- H1: 4.768rem (76px)
- H2: 3.052rem (49px)
- H3: 2.441rem (39px)
- Body: 1rem (16px)

### فاصله‌گذاری / Spacing

**سیستم Grid 8px:**
```
1 = 8px
2 = 16px
3 = 24px
4 = 32px
6 = 48px
8 = 64px
10 = 80px
```

---

## 🔧 قابلیت‌های JavaScript / JavaScript Features

### 1. Navigation (navigation.js)
- Sticky header با تغییر ظاهر هنگام اسکرول
- منوی موبایل (Hamburger Menu)
- Smooth scroll به بخش‌ها
- Active state highlighting

### 2. Lightbox (lightbox.js)
- نمایش تمام‌صفحه تصاویر
- پیمایش با کیبورد (Arrow Keys, ESC)
- شمارنده تصاویر
- پشتیبانی از RTL

### 3. Form Validation (form.js)
- اعتبارسنجی Real-time
- الگوهای اعتبارسنجی ایرانی (شماره تلفن)
- نمایش خطاها به صورت inline
- حالت Loading برای دکمه ارسال

### 4. Animations (main.js)
- Scroll animations با Intersection Observer
- Lazy loading تصاویر
- Parallax effect (اختیاری)
- Card tilt effect (اختیاری)

---

## 📱 سازگاری / Browser Compatibility

| مرورگر | نسخه | پشتیبانی |
|--------|------|----------|
| Chrome | Latest 2 | ✅ Full |
| Firefox | Latest 2 | ✅ Full |
| Safari | Latest 2 | ✅ Full |
| Edge | Latest 2 | ✅ Full |
| Chrome Mobile | Latest | ✅ Full |
| Safari iOS | Latest 2 | ✅ Full |

---

## ♿ دسترسی‌پذیری / Accessibility

- ✅ WCAG 2.1 Level AA
- ✅ HTML معنایی (Semantic)
- ✅ Alt text برای همه تصاویر
- ✅ پیمایش کیبورد
- ✅ تضاد رنگی مناسب
- ✅ پشتیبانی از Screen Readers

---

## 🎯 بهینه‌سازی عملکرد / Performance Optimization

- ⚡ Lazy loading برای تصاویر
- 🗜️ CSS Minification در build
- 📦 JavaScript Modules
- 🖼️ تصاویر بهینه از Unsplash (با CDN)
- ⏱️ استفاده از CSS Transitions به جای Animations پرهزینه

---

## 📝 سفارشی‌سازی / Customization

### تغییر رنگ‌ها
فایل `public/css/variables.css` را ویرایش کنید:

```css
:root {
    --color-primary: #YOUR_COLOR;
    --color-gold: #YOUR_COLOR;
}
```

### تغییر محتوا
محتوای فارسی را در `index.html` ویرایش کنید.

### افزودن بخش جدید
1. HTML را در `index.html` اضافه کنید
2. استایل‌ها را در `public/css/main.css` اضافه کنید
3. منطق JavaScript را در فایل مناسب اضافه کنید

---

## 🐛 مشکلات شناخته شده / Known Issues

هیچ مشکل شناخته شده‌ای وجود ندارد.

---

## 📄 لایسنس / License

این پروژه یک نمونه (Mock) آموزشی است و برای اهداف نمایشی طراحی شده است.

---

## 👨‍💻 توسعه‌دهنده / Developer

ساخته شده با ❤️ برای نمایش مهارت‌های توسعه Front-End

---

## 📚 منابع / Resources

- **تصاویر:** [Unsplash](https://unsplash.com)
- **آیکون‌ها:** [Font Awesome](https://fontawesome.com)
- **فونت فارسی:** [Vazir Font](https://github.com/rastikerdar/vazir-font)
- **Placeholder Images:** [via.placeholder.com](https://via.placeholder.com)

---

## 🔮 بهبودهای آینده / Future Enhancements

- [ ] اضافه کردن PWA Support
- [ ] اتصال به Backend API واقعی
- [ ] افزودن Google Maps برای لوکیشن
- [ ] تور مجازی 360 درجه
- [ ] چند زبانه (فارسی/انگلیسی)
- [ ] Dark Mode
- [ ] بهینه‌سازی بیشتر تصاویر (WebP)

---

**نسخه:** 1.0.0  
**آخرین بروزرسانی:** دسامبر 2025

---

## دستورات npm / npm Scripts

```bash
# شروع سرور توسعه
npm run dev

# ساخت برای production
npm run build

# پیش‌نمایش build
npm run preview

# بررسی کدها (lint)
npm run lint
```

---

برای سوالات یا پیشنهادات، لطفاً یک Issue ایجاد کنید.

For questions or suggestions, please create an Issue.
