/**
 * Main JavaScript functionality
 * Handles scroll animations, lazy loading, and other general features
 */

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-element');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger effect
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(el => observer.observe(el));
}

// Lazy loading images
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        return;
    }
    
    // Fallback for browsers that don't support native lazy loading
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Progressive image loading effect
function addImageLoadEffect() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
}

// Parallax effect for hero section (optional enhancement)
function initParallax() {
    const heroImage = document.querySelector('.hero__image');
    
    if (!heroImage) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (scrolled < window.innerHeight) {
            heroImage.style.transform = 'translateY(' + (scrolled * parallaxSpeed) + 'px)';
        }
    });
}

// Add hover tilt effect to cards (optional enhancement)
function initCardTilt() {
    const cards = document.querySelectorAll('.spec-card, .floor-plan-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initLazyLoading();
    addImageLoadEffect();
    
    // Optional enhancements - uncomment to enable
    // initParallax();
    // initCardTilt();
});

// Performance optimization: debounce scroll events
function debounce(func, wait = 20) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Log page load time for performance monitoring
window.addEventListener('load', () => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
});
