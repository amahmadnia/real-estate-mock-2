export const property = {
  id: "3973",
  title: "خرید ویلا دوبلکس در چمستان با سند تک برگ ملک",
  description: `این ویلا در یکی از بهترین مناطق چمستان واقع شده است. دارای سند تک برگ ملک و موقعیت عالی برای سکونت یا سرمایه گذاری.

املاک دارای دو طبقه با معماری مدرن و فضای باز است. باغچه و محوطه سازی شده با درختان میوه. دسترسی آسان به تمامی امکانات رفاهی و تفریحی.

این ملک با نمای مدرن و استفاده از مصالح درجه یک ساخته شده است. دارای پارکینگ اختصاصی، انباری و فضای سبز قابل توجه می‌باشد. موقعیت ملک در منطقه‌ای آرام و با دسترسی عالی به مراکز خرید و رفاهی است.

برای بازدید حضوری و کسب اطلاعات بیشتر با ما تماس بگیرید.`,

  price: {
    amount: 5000000000,
    currency: "تومان",
    formatted: "5,000,000,000 تومان"
  },

  location: {
    city: "چمستان",
    district: "منطقه 1",
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
    landSize: 350,
    builtArea: 280,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "ویلا دوبلکس",
    yearBuilt: 1400,
    floors: 2,
    parking: 2,
    storage: true,
    elevator: false,
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
      { id: 4, name: "آسانسور", available: false, icon: "elevator" }
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
