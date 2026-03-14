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

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
        hamburger.classList.remove('active');
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .gallery-item').forEach(element => {
    observer.observe(element);
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Create mailto link
        const mailtoLink = `mailto:contact@navarroroofing.com?subject=New Inquiry from ${name}&body=Name: ${name}%0DEmail: ${email}%0DPhone: ${phone}%0D%0DMessage: ${message}`;
        
        // You can also send via an API endpoint
        console.log('Form submitted:', { name, email, phone, message });
        
        // Clear form
        contactForm.reset();
        
        // Show success message
        alert('Thank you for your inquiry! We will contact you soon.');
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Add 24/7 indicator
document.addEventListener('DOMContentLoaded', () => {
    const emergencyBadge = document.createElement('div');
    emergencyBadge.className = 'emergency-badge';
    emergencyBadge.innerHTML = '<i class="fas fa-exclamation-circle"></i> 24/7 Emergency Service';
    
    const styles = `
        .emergency-badge {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(135deg, #D97706, #F59E0B);
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            font-weight: 600;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 999;
            animation: pulse 2s infinite;
            cursor: pointer;
        }
        
        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            }
            50% {
                box-shadow: 0 5px 30px rgba(217, 119, 6, 0.4);
            }
        }
        
        .emergency-badge:hover {
            transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
            .emergency-badge {
                padding: 12px 20px;
                font-size: 0.9rem;
                bottom: 20px;
                right: 20px;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    
    document.body.appendChild(emergencyBadge);
    
    emergencyBadge.addEventListener('click', () => {
        window.location.href = 'tel:+18046079500';
    });
});

// Animate counter numbers
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}