import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', title: 'همه تصاویر' },
    { id: 'exterior', title: 'نمای خارجی' },
    { id: 'interior', title: 'فضای داخلی' },
    { id: 'amenities', title: 'امکانات' },
    { id: 'views', title: 'چشم‌اندازها' }
  ];

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      category: 'exterior',
      title: 'نمای اصلی ساختمان'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      category: 'interior',
      title: 'سالن پذیرایی'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      category: 'interior',
      title: 'اتاق خواب مستر'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      category: 'views',
      title: 'منظره از بالکن'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      category: 'exterior',
      title: 'نمای شب'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
      category: 'interior',
      title: 'آشپزخانه مدرن'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&q=80',
      category: 'amenities',
      title: 'استخر سرپوشیده'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
      category: 'amenities',
      title: 'روف گاردن'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80',
      category: 'views',
      title: 'منظره شهری'
    }
  ];

  const filteredImages = activeCategory === 'all'
    ? images
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }
    setSelectedImage(images[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
            گالری تصاویر
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            نگاهی به
            <span className="text-accent mr-2">زیبایی پروژه</span>
          </h2>
          <p className="text-secondary text-lg">
            تصاویر واقعی از نما، فضاها و امکانات ساختمان
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 border ${
                activeCategory === category.id
                  ? 'bg-primary border-primary text-white shadow-lg'
                  : 'bg-white border-gray-200 text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(image)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 right-0 left-0 p-6">
                  <h3 className="text-white text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
            aria-label="بستن"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
            aria-label="تصویر قبلی"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
            aria-label="تصویر بعدی"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="relative max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-bold text-center">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
