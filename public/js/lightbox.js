/**
 * Lightbox functionality
 * Handles image gallery and floor plan modal viewing
 */

class Lightbox {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.getElementById('lightbox-image');
        this.lightboxClose = document.getElementById('lightbox-close');
        this.lightboxPrev = document.getElementById('lightbox-prev');
        this.lightboxNext = document.getElementById('lightbox-next');
        this.lightboxCounter = document.getElementById('lightbox-counter');
        
        this.images = [];
        this.currentIndex = 0;
        
        this.init();
    }
    
    init() {
        // Gallery images
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.images = Array.from(galleryItems).map(img => ({
                    src: img.querySelector('img').src,
                    alt: img.querySelector('img').alt
                }));
                this.open(index);
            });
        });
        
        // Floor plan images
        const floorPlanCards = document.querySelectorAll('.floor-plan-card');
        floorPlanCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                this.images = Array.from(floorPlanCards).map(plan => ({
                    src: plan.querySelector('img').src,
                    alt: plan.querySelector('img').alt
                }));
                this.open(index);
            });
        });
        
        // Event listeners
        if (this.lightboxClose) {
            this.lightboxClose.addEventListener('click', () => this.close());
        }
        
        if (this.lightboxPrev) {
            this.lightboxPrev.addEventListener('click', () => this.prev());
        }
        
        if (this.lightboxNext) {
            this.lightboxNext.addEventListener('click', () => this.next());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;
            
            if (e.key === 'Escape') this.close();
            if (e.key === 'ArrowLeft') this.next();
            if (e.key === 'ArrowRight') this.prev();
        });
        
        // Close on background click
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.close();
            }
        });
    }
    
    open(index) {
        this.currentIndex = index;
        this.updateImage();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateImage();
    }
    
    updateImage() {
        const currentImage = this.images[this.currentIndex];
        this.lightboxImage.src = currentImage.src;
        this.lightboxImage.alt = currentImage.alt;
        
        if (this.lightboxCounter) {
            const counterText = (this.currentIndex + 1) + ' / ' + this.images.length;
            this.lightboxCounter.textContent = counterText;
        }
    }
}

// Initialize lightbox when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Lightbox();
});
