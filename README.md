# Real Estate Property Listing - Mock Website

A beautiful, fully responsive real estate property listing webpage built with React, Tailwind CSS, and Vite. This mock implementation showcases a professional real estate website with modern UI/UX design patterns, Persian language support, and RTL (Right-to-Left) layout.

## 🌟 Features

### Core Functionality
- **Responsive Design** - Fully responsive across mobile, tablet, and desktop devices
- **RTL Support** - Complete Right-to-Left layout for Persian language
- **Persian Fonts** - Beautiful Persian typography using Vazir and Estedad fonts
- **Image Gallery** - Interactive image slider with thumbnail navigation
- **Property Information** - Comprehensive property details and specifications
- **Contact Integration** - WhatsApp and phone call functionality
- **Related Properties** - Grid of similar property listings

### UI Components
- ✅ Sticky navigation bar with mobile hamburger menu
- ✅ Hero image gallery with smooth transitions
- ✅ Property title, price, and quick statistics
- ✅ Contact card with agent information
- ✅ Detailed specifications table
- ✅ Features and amenities grid with icons
- ✅ Property description section
- ✅ Related properties cards
- ✅ Multi-column footer with social links

### Design Highlights
- Modern gradient effects and shadows
- Smooth hover animations and transitions
- Glass morphism effects
- Professional color palette (Primary Blue #004B87)
- Persian number formatting
- Accessibility-compliant design

## 🚀 Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Fonts:** Vazir, Estedad (Persian fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
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

4. Open your browser and visit:
```
http://localhost:5173
```

## 🛠️ Build

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
real-estate-mock-2/
├── public/
│   └── images/          # Public images (placeholder)
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   └── Navbar.jsx
│   │   ├── Hero/
│   │   │   └── ImageGallery.jsx
│   │   ├── PropertyInfo/
│   │   │   ├── TitlePrice.jsx
│   │   │   ├── QuickStats.jsx
│   │   │   └── ContactCard.jsx
│   │   ├── Details/
│   │   │   ├── SpecsTable.jsx
│   │   │   ├── Features.jsx
│   │   │   └── Description.jsx
│   │   ├── RelatedProperties/
│   │   │   ├── PropertyCard.jsx
│   │   │   └── RelatedPropertiesGrid.jsx
│   │   └── Footer/
│   │       └── Footer.jsx
│   ├── data/
│   │   ├── propertyData.js
│   │   └── relatedProperties.js
│   ├── utils/
│   │   └── formatters.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎨 Design Features

### Color Palette
- **Primary Blue:** #004B87
- **Primary Light:** #0066CC
- **Success Green:** #22C55E
- **Accent Gold:** #D4AF37

### Responsive Breakpoints
- **Mobile:** 0-767px
- **Tablet:** 768-1023px
- **Desktop:** 1024px+

### Key Components

#### Navigation Bar
- Sticky header with blur effect
- Mobile hamburger menu with slide-in animation
- Responsive logo and menu items

#### Image Gallery
- Full-width responsive gallery
- Arrow navigation
- Thumbnail strip with active state
- Image counter overlay

#### Property Info
- Large, bold title with location badge
- Prominent price display with Persian digits
- Quick stats with colorful icons
- Sticky contact sidebar

#### Features Grid
- Categorized features (building, utilities, amenities, views)
- Visual indicators for available/unavailable features
- Icon-based design with Lucide React

#### Footer
- Multi-column layout
- Social media links
- Quick links and property types
- Contact information
- Copyright and legal links

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

## 📱 Mobile-First Approach

This project follows a mobile-first design philosophy:
- Touch-friendly 44x44px minimum touch targets
- Optimized mobile navigation
- Responsive typography using `clamp()`
- Adaptive layouts with CSS Grid and Flexbox

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- Alt text for all images
- WCAG AA color contrast compliance

## 🔧 Customization

### Modify Property Data
Edit `/src/data/propertyData.js` to change:
- Property details
- Images
- Specifications
- Features
- Agent information

### Add Related Properties
Edit `/src/data/relatedProperties.js` to add more property cards

### Change Colors
Update `/tailwind.config.js` in the `theme.extend.colors` section

### Modify Fonts
Change fonts in `/src/index.css` by importing different Persian fonts

## 📝 Mock Data

This is a **mock implementation** for showcase purposes. Features that are mock:
- Contact forms (UI only, no backend)
- WhatsApp integration (opens with pre-filled message)
- Phone calls (uses tel: protocol)
- Property listings (static mock data)
- Image URLs (from Unsplash)

## 🚧 Known Limitations

- No backend integration
- No database connectivity
- No user authentication
- No real payment processing
- Static mock data only
- No CMS integration

## 📄 License

This is a mock project for demonstration purposes.

## 👨‍💻 Development

To contribute or modify:

1. Follow the existing component structure
2. Use Tailwind utility classes for styling
3. Maintain RTL support in all new components
4. Test on multiple screen sizes
5. Ensure Persian number formatting is used

## 📞 Support

For questions or issues, please refer to the documentation or create an issue in the repository.

---

**Made with ❤️ using React + Vite + Tailwind CSS**
