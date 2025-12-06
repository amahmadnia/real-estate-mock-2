/**
 * Navigation functionality
 * Handles sticky header, mobile menu, and smooth scrolling
 */

// Sticky header on scroll
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

if (navbarToggle) {
    navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : '';
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.navbar__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarToggle.classList.contains('active')) {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navbarMenu.classList.contains('active') && 
        !navbarMenu.contains(e.target) && 
        !navbarToggle.contains(e.target)) {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Smooth scroll to sections
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (!element) return;
    
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Add smooth scroll to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        if (target && target !== '#') {
            smoothScroll(target);
        }
    });
});

// Add smooth scroll to buttons with data-scroll-to attribute
document.querySelectorAll('[data-scroll-to]').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('data-scroll-to');
        if (target) {
            smoothScroll(target);
        }
    });
});

// Active section highlighting
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollPosition = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('navbar__link--active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('navbar__link--active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Scroll to top button
const scrollToTopButton = document.getElementById('scroll-to-top');

if (scrollToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });
    
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
