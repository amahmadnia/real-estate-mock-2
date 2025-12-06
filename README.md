# برج ساحلی دریانور | Daryanoor Luxury Coastal Tower

A luxury beachfront residential tower marketing website built with React and Persian (Farsi) RTL support.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Overview

This is a comprehensive single-page marketing website for a luxury coastal residential tower project. The website showcases the property's features, amenities, floor plans, and provides contact functionality for potential buyers.

### Key Features

- ✨ **Luxury Design**: Modern, elegant UI with glassmorphism effects and smooth animations
- 🌐 **RTL Support**: Full Persian (Farsi) language support with proper Right-to-Left layout
- 📱 **Fully Responsive**: Works seamlessly on all devices from 320px to 4K displays
- 🎨 **Beautiful UI**: Premium color palette with ocean blues and gold accents
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds
- 🖼️ **Image Lightbox**: Custom lightbox component for floor plans and gallery
- 📝 **Form Validation**: Contact form with comprehensive client-side validation
- 🎭 **Smooth Animations**: Scroll-based animations using Intersection Observer
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🏗️ Project Structure

```
real-estate-mock-2/
├── src/
│   ├── components/
│   │   ├── About/           # Project overview and specifications
│   │   ├── Amenities/       # Luxury amenities showcase
│   │   ├── Contact/         # Contact form with validation
│   │   ├── FloorPlans/      # Unit floor plans with lightbox
│   │   ├── Footer/          # Footer with links and info
│   │   ├── Gallery/         # Image gallery with lightbox
│   │   ├── Header/          # Navigation and top bar
│   │   ├── Hero/            # Hero section with agent card
│   │   └── Lightbox/        # Reusable lightbox component
│   ├── App.jsx              # Main app component
│   ├── App.css              # App-specific styles
│   ├── index.css            # Global styles and variables
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies
└── vite.config.js           # Vite configuration
```

## 🎯 Sections

### 1. Header
- Fixed navigation with smooth scrolling
- Top bar with contact info and social links
- Mobile hamburger menu
- Active section highlighting

### 2. Hero Section
- Full-height hero with gradient overlay
- Call-to-action button
- Agent contact card with WhatsApp integration
- Responsive layout

### 3. About (Project Overview)
- Detailed project description
- Specifications grid (6 key specs)
- Location and accessibility information
- Professional imagery

### 4. Amenities
- 8 luxury amenities with descriptions
- Alternating image-text layout
- Hover effects and animations
- High-quality imagery

### 5. Floor Plans
- 12 different unit layouts
- Grid layout (4 columns on desktop)
- Clickable cards with lightbox view
- Detailed specifications for each unit

### 6. Gallery
- 9 professional images
- 3-column responsive grid
- Lightbox for full-screen viewing
- Smooth hover effects

### 7. Contact Form
- Form with validation
- Required fields: Name, Phone
- Optional fields: Email, Unit Type, Message
- Success/error states
- Contact information cards

### 8. Footer
- 4-column layout
- Quick links to all sections
- Services list
- Contact information
- Social media links
- Copyright information

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/amahmadnia/real-estate-mock-2.git
cd real-estate-mock-2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Color Palette

```css
/* Primary Colors - Ocean Blues */
--color-primary-dark: #001F3F;
--color-primary: #003D5C;
--color-primary-light: #0A5F89;

/* Accent Colors - Metallics */
--color-gold: #C89B3C;
--color-bronze: #B87333;
--color-emerald: #00543A;

/* Neutral Colors */
--color-cream: #F8F6F0;
--color-white: #FFFFFF;
--color-charcoal: #2C2C2C;
```

### Typography

- **Font Family**: Vazirmatn (Persian), with Tahoma and Arial fallbacks
- **Modular Scale**: 1.250 (Major Third)
- **Base Size**: 16px (1rem)

### Spacing

- **System**: 8px grid
- **Scale**: 8px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 128px, 160px

### Breakpoints

- **Mobile**: 576px and below
- **Tablet**: 768px to 991px
- **Desktop**: 992px and above

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **Font Awesome 6.5.1** - Icons
- **Google Fonts** - Vazirmatn Persian font

## 📱 Responsive Design

The website is fully responsive and tested on:

- **Desktop**: 1920px, 1440px, 1280px
- **Laptop**: 1024px
- **Tablet**: 768px, 991px
- **Mobile**: 576px, 414px, 375px, 320px

## ⚡ Performance

- **Fast Loading**: Optimized with Vite
- **Lazy Loading**: Images load as needed
- **Code Splitting**: Automatic with Vite
- **Optimized Images**: Compressed and modern formats
- **Smooth Animations**: GPU-accelerated transforms

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Development

### Code Style

- Component-based architecture
- Separate CSS modules for each component
- Custom hooks for reusable logic
- Semantic HTML5
- BEM-like CSS naming convention

### Key Components

**Lightbox Component**: Reusable modal for images and floor plans
- Keyboard navigation (Arrow keys, Escape)
- Touch support
- Image counter
- Previous/Next navigation

**Contact Form**: Full validation
- Persian phone number validation
- Email validation
- Error messages in Persian
- Loading and success states

### Animations

- Fade in on scroll using Intersection Observer
- Smooth scroll navigation
- Hover effects with transforms
- Staggered animations for lists

## 🚀 Deployment

The website can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 📞 Contact

For questions or support, please contact:
- **Email**: info@daryanoor.com
- **Phone**: ۰۹۱۲ ۳۴۵ ۶۷۸۹

## 🙏 Acknowledgments

- Design inspiration from luxury real estate websites
- Images from Unsplash
- Persian font from Google Fonts (Vazirmatn)
- Icons from Font Awesome

---

Made with ❤️ using React and Vite
