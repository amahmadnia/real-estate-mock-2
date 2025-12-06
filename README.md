# آرمان لوکس | Luxury Residential Buildings Website

A modern, luxury real estate website built with React, showcasing 5-7 floor residential buildings with Persian/Farsi content and RTL (right-to-left) layout.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-Latest-38B2AC)
![Vite](https://img.shields.io/badge/Vite-7.2.6-646CFF)

## 🌟 Features

### ✨ Complete Luxury Website
- **Header** - Sticky navigation with language switcher and mobile menu
- **Hero Section** - Full-screen hero with compelling CTA and stats
- **Specifications Grid** - 8 detailed property specifications with icons
- **Building Variants** - Interactive accordions showcasing 3 unit types
- **Amenities** - Grid of 12+ luxury amenities with hover effects
- **Gallery** - Image gallery with lightbox, categories, and navigation
- **Location** - Google Maps integration with nearby amenities
- **Investment CTA** - Contact form with benefits showcase
- **FAQ** - Expandable accordion with 6 common questions
- **Related Projects** - Showcase of 3 other projects
- **Footer** - Comprehensive footer with contact info and social links

### 🎨 Design Features
- **RTL Layout** - Full support for Persian/Farsi right-to-left text
- **Luxury Color Palette** - Forest green (#2C5F2D) and gold (#C9A961)
- **Persian Typography** - Vazirmatn font for beautiful Persian text
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Professional transitions and micro-interactions
- **Modern UI** - Clean, sophisticated luxury aesthetic

### 🛠️ Technical Stack
- **React 19.2.0** - Latest React with hooks
- **Vite 7.2.6** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icon set
- **Google Fonts** - Vazirmatn Persian font family

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
real-estate-mock-2/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Specifications.jsx
│   │   ├── BuildingVariants.jsx
│   │   ├── Amenities.jsx
│   │   ├── Gallery.jsx
│   │   ├── Location.jsx
│   │   ├── InvestmentCTA.jsx
│   │   ├── FAQ.jsx
│   │   ├── RelatedProjects.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎯 Key Components

### Header
- Sticky navigation with smooth scroll
- Language switcher (FA/EN)
- Mobile hamburger menu
- Search functionality

### Hero Section
- Full-screen background with overlay
- Compelling headline and description
- Dual CTA buttons
- Property stats showcase

### Specifications Grid
- 8 detailed specifications
- Icon-based design
- Hover animations
- Responsive grid layout

### Building Variants
- 3 unit types (90m², 120m², 150m²)
- Accordion functionality
- Dynamic image switching
- Feature lists with bullet points

### Amenities
- 12+ luxury amenities
- Icon grid layout
- Hover scale effects
- Responsive columns (1-4)

### Gallery
- Category filtering
- Lightbox modal
- Keyboard navigation
- Image transitions

### Location
- Google Maps embed
- Nearby amenities grid
- Transportation access
- Climate information

### Investment CTA
- Contact form
- Benefits showcase
- Success statistics
- Professional design

### FAQ
- 6 expandable questions
- Smooth accordion animation
- Icon indicators (+/-)
- Comprehensive answers

### Related Projects
- 3 project cards
- Status badges
- Hover effects
- Property details

### Footer
- Company information
- Quick links
- Recent projects
- Contact details
- Social media links

## 🎨 Design System

### Colors
```css
--forest-green: #2C5F2D    /* Primary brand color */
--deep-forest: #1a3a1b     /* Darker variant */
--sage-green: #7A9B7C      /* Secondary */
--gold: #C9A961            /* Accent/luxury */
--gold-dark: #B8954F       /* Darker gold */
--champagne: #F4E8D0       /* Light accent */
--ivory: #FEFCF8           /* Background */
--cream: #F8F6F2           /* Section backgrounds */
--stone: #E8E6E1           /* Borders */
--charcoal: #2D2D2D        /* Text */
--warm-gray: #6B6B6B       /* Secondary text */
```

### Typography
- **Font Family**: Vazirmatn (Persian), system fonts fallback
- **Heading Sizes**: 4xl to 6xl (responsive with clamp)
- **Body Text**: 16-18px base size
- **Line Height**: 1.6-1.8 for readability

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (up to 4 columns)

## ✨ Animations

- Fade in up on scroll
- Hover scale effects
- Smooth transitions (300-400ms)
- Accordion slide animations
- Image zoom on hover
- Button lift effects

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This is a mock project for demonstration purposes.

## 🚀 Deployment

The application can be deployed to any static hosting service:

```bash
# Build the project
npm run build

# The dist/ folder contains the production build
# Deploy the contents of dist/ to your hosting service
```

Recommended hosting platforms:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Customization

1. **Colors** - Update `tailwind.config.js` theme colors
2. **Content** - Modify component text in respective .jsx files
3. **Images** - Replace Unsplash URLs with your own images
4. **Fonts** - Change font in `src/index.css` import

## 📞 Contact

For questions or support regarding this mock project, please refer to the project requirements document.

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies**
