// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'fadeIn 0.6s ease-out both';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards for animation on scroll
document.querySelectorAll('.product-card').forEach(card => {
    card.dataset.animation = 'slideUp 0.6s ease-out both';
    observer.observe(card);
});

// Observe info cards
document.querySelectorAll('.info-card').forEach(card => {
    card.dataset.animation = 'fadeIn 0.6s ease-out both';
    observer.observe(card);
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add floating animation to product icons on hover
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.product-icon');
        icon.style.animation = 'spin 0.6s ease-in-out';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.product-icon');
        setTimeout(() => {
            icon.style.animation = 'bounce 2s ease-in-out infinite';
        }, 600);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Form submission animation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        button.textContent = '送信中...';
        button.disabled = true;
        button.style.transform = 'scale(0.95)';
        
        // Simulate form submission
        setTimeout(() => {
            button.textContent = '送信完了！';
            button.style.background = var(--secondary-color);
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.style.transform = 'scale(1)';
                this.reset();
            }, 2000);
        }, 1500);
    });
}

// Add hover effect to navigation
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.letterSpacing = '1px';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.letterSpacing = '0px';
    });
});

// Add dynamic shadow on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Add loading animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add card flip effect on double-click
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('dblclick', function() {
        this.style.transform = 'rotateY(360deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 600);
    });
});
