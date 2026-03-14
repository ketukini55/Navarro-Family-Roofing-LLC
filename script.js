 url=https://github.com/ketukini55/Navarro-Family-Roofing-LLC/blob/main/script.js
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

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.style.display = 'none';
        if (hamburger) hamburger.classList.remove('active');
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]')?.value || '';
        const email = contactForm.querySelector('input[type="email"]')?.value || '';
        const phone = contactForm.querySelector('input[type="tel"]')?.value || '';
        const message = contactForm.querySelector('textarea')?.value || '';
        
        if (name && email && phone && message) {
            alert('Thank you for your inquiry! We will contact you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    if (navbar) {
        if (window.pageYOffset > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        }
    }
});

// Emergency badge click to call
function callEmergency() {
    window.location.href = 'tel:+18046079500';
}

// Add animation to elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .gallery-item, .info-box, .feature').forEach(element => {
    observer.observe(element);
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

// Form validation
function validateForm(form) {
    const fields = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    fields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#DC2626';
        } else {
            field.style.borderColor = '#F9FAFB';
        }
    });
    
    return isValid;
}

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu close on link click
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (navMenu) navMenu.style.display = 'none';
        if (hamburger) hamburger.classList.remove('active');
    });
});

// Parallax effect on hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-container');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});
