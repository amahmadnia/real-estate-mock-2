export const property = {
  id: "3973",
  title: "خرید ویلا دوبلکس در چمستان با سند تک برگ ملک",
  description: `این ویلا دوبلکس نوساز با طراحی مدرن و امکانات رفاهی عالی در شهرک بهار نارنج قرار دارد. با ۹۰۰ متر زمین و ۵۵۰ متر بنا، فضای بزرگی برای زندگی راحت و لوکس فراهم می‌کند. این ویلا شامل آسانسور، آلاچیق، شاهنشین، و آبنما است که به زیبایی‌های فضای خارجی افزوده است. موقعیت عالی این ویلا در شهرک ساحلی، شما را از زیبایی‌های دریای شمال بهره‌مند خواهد کرد. اگر به دنبال یک خانه لوکس و کامل با تمامی امکانات هستید، این ویلا گزینه‌ای مناسب برای شما خواهد بود.`,

  price: {
    amount: 5000000000,
    currency: "تومان",
    formatted: "5,000,000,000 تومان"
  },

  location: {
    city: "چمستان",
    province: "مازندران",
    district: "شهرک بهار نارنج",
    address: "چمستان، خیابان اصلی، کوچه گلستان",
    coordinates: { lat: 36.1234, lng: 51.5678 }
  },

  images: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200",
      alt: "نمای خارجی ویلا"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200",
      alt: "نمای داخلی - پذیرایی"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200",
      alt: "آشپزخانه مدرن"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800",
      thumbnail: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=200",
      alt: "اتاق خواب اصلی"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      thumbnail: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=200",
      alt: "حیاط و فضای سبز"
    }
  ],

  specifications: {
    landSize: 900,
    builtArea: 550,
    bedrooms: 4,
    bathrooms: 3,
    propertyType: "ویلا دوبلکس",
    yearBuilt: 1402,
    floors: 2,
    parking: 2,
    storage: true,
    elevator: true,
    documentType: "تک برگ",
    flooring: "سرامیک",
    heating: "پکیج",
    cooling: "اسپلیت",
    kitchen: "اپن"
  },

  features: {
    building: [
      { id: 1, name: "پارکینگ", available: true, icon: "parking" },
      { id: 2, name: "انباری", available: true, icon: "warehouse" },
      { id: 3, name: "بالکن", available: true, icon: "balcony" },
      { id: 4, name: "آسانسور", available: true, icon: "elevator" }
    ],
    utilities: [
      { id: 5, name: "گاز", available: true, icon: "flame" },
      { id: 6, name: "برق", available: true, icon: "zap" },
      { id: 7, name: "آب", available: true, icon: "droplet" },
      { id: 8, name: "تلفن", available: true, icon: "phone" },
      { id: 9, name: "اینترنت", available: true, icon: "wifi" }
    ],
    amenities: [
      { id: 10, name: "استخر", available: false, icon: "waves" },
      { id: 11, name: "سونا", available: false, icon: "wind" },
      { id: 12, name: "لابی", available: true, icon: "door-open" },
      { id: 13, name: "نگهبانی", available: true, icon: "shield" },
      { id: 14, name: "فضای سبز", available: true, icon: "trees" }
    ],
    views: [
      { id: 15, name: "ویو دریا", available: false, icon: "view" },
      { id: 16, name: "ویو کوه", available: true, icon: "mountain" },
      { id: 17, name: "نما مدرن", available: true, icon: "building" }
    ]
  },

  agent: {
    name: "احمد محمدی",
    phone: "09123456789",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
    whatsapp: "09123456789"
  },

  status: "available",
  badge: "جدید",
  createdAt: "1403/09/15",
  updatedAt: "1403/09/15"
};
