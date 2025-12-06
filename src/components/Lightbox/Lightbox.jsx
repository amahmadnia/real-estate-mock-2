import { useEffect } from 'react';
import './Lightbox.css';

const Lightbox = ({ isOpen, onClose, images, currentIndex, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
        default:
          break;
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__overlay"></div>

      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox__close"
          onClick={onClose}
          aria-label="Close"
        >
          <i className="fas fa-times"></i>
        </button>

        {images.length > 1 && (
          <>
            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={onPrev}
              aria-label="Previous"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={onNext}
              aria-label="Next"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          </>
        )}

        <div className="lightbox__image-wrapper">
          <img
            src={currentImage.src || currentImage.image}
            alt={currentImage.alt || currentImage.title || ''}
            className="lightbox__image"
          />
        </div>

        {currentImage.title && (
          <div className="lightbox__info">
            <h3 className="lightbox__title">{currentImage.title}</h3>
            {currentImage.specs && (
              <div className="lightbox__specs">
                {currentImage.specs.map((spec, index) => (
                  <span key={index} className="lightbox__spec">
                    {spec}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="lightbox__counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
