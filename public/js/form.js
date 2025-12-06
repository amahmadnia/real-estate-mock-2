/**
 * Form validation and submission
 * Handles contact form validation and submission
 */

class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
        
        // Real-time validation on blur
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
    }
    
    validateField(field) {
        const fieldName = field.name;
        const fieldValue = field.value.trim();
        const errorElement = document.getElementById(fieldName + '-error');
        
        let error = '';
        
        // Name validation
        if (fieldName === 'name') {
            if (!fieldValue) {
                error = 'لطفا نام خود را وارد کنید';
            } else if (fieldValue.length < 3) {
                error = 'نام باید حداقل ۳ حرف باشد';
            }
        }
        
        // Phone validation
        if (fieldName === 'phone') {
            if (!fieldValue) {
                error = 'لطفا شماره تماس خود را وارد کنید';
            } else if (!/^0\d{10}$/.test(fieldValue.replace(/\s/g, ''))) {
                error = 'شماره تماس معتبر نیست';
            }
        }
        
        // Email validation
        if (fieldName === 'email' && fieldValue) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(fieldValue)) {
                error = 'ایمیل معتبر نیست';
            }
        }
        
        // Message validation
        if (fieldName === 'message' && fieldValue) {
            if (fieldValue.length < 10) {
                error = 'پیام باید حداقل ۱۰ حرف باشد';
            } else if (fieldValue.length > 500) {
                error = 'پیام نباید بیشتر از ۵۰۰ حرف باشد';
            }
        }
        
        // Display error or clear it
        if (errorElement) {
            errorElement.textContent = error;
        }
        
        // Add/remove error class
        if (error) {
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
        
        return !error;
    }
    
    validateForm() {
        const requiredFields = this.form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    async handleSubmit() {
        // Validate form
        if (!this.validateForm()) {
            // Focus on first error
            const firstError = this.form.querySelector('.error');
            if (firstError) {
                firstError.focus();
            }
            return;
        }
        
        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitButton = this.form.querySelector('.form-submit');
        const buttonText = submitButton.querySelector('.button-text');
        const buttonLoader = submitButton.querySelector('.button-loader');
        
        submitButton.disabled = true;
        buttonText.style.display = 'none';
        buttonLoader.style.display = 'inline-block';
        
        // Simulate API call (since this is a static site)
        setTimeout(() => {
            // Log form data (for demo purposes)
            console.log('Form Data:', data);
            
            // Show success message
            const successMessage = document.getElementById('form-success');
            successMessage.style.display = 'flex';
            
            // Reset form
            setTimeout(() => {
                this.form.reset();
                successMessage.style.display = 'none';
                submitButton.disabled = false;
                buttonText.style.display = 'inline';
                buttonLoader.style.display = 'none';
            }, 3000);
        }, 1500);
    }
}

// Initialize form when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});
