// ============================================
// SALONDEBONG TATTOOS - SCRIPTS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initNav();
    initBanner();
    initForm();
});

// ============================================
// NAVIGATION
// ============================================

function initNav() {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = nav.offsetHeight;
                const bannerHeight = document.querySelector('.promo-banner').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - bannerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// PROMO BANNER
// ============================================

function initBanner() {
    // Check if banner was closed before
    if (sessionStorage.getItem('bannerClosed')) {
        document.getElementById('promo-banner').style.display = 'none';
        document.querySelector('.nav').style.top = '0';
    }
}

function closeBanner() {
    const banner = document.getElementById('promo-banner');
    const nav = document.querySelector('.nav');
    
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(-100%)';
    
    setTimeout(() => {
        banner.style.display = 'none';
        nav.style.top = '0';
    }, 300);
    
    sessionStorage.setItem('bannerClosed', 'true');
}

// ============================================
// CONTACT FORM
// ============================================

function initForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // In production, this would send to a server or email
        // For now, we'll show a success message
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Gesendet! ✓';
        submitBtn.disabled = true;
        submitBtn.style.background = '#4CAF50';
        
        // Create WhatsApp link as fallback
        const name = data.name || '';
        const email = data.email || '';
        const location = data.location || '';
        const message = data.message || '';
        
        const whatsappMessage = encodeURIComponent(
            `Hallo! Kontakt über Website:\n\nName: ${name}\nE-Mail: ${email}\nStandort: ${location}\n\nNachricht:\n${message}`
        );
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            form.reset();
            
            // Optionally open WhatsApp
            if (confirm('Möchtest du die Nachricht auch per WhatsApp senden?')) {
                window.open(`https://wa.me/4915255474668?text=${whatsappMessage}`, '_blank');
            }
        }, 2000);
    });
}

// ============================================
// GALLERY (placeholder for future)
// ============================================

// Future: Lightbox functionality when real images are added
// function initGallery() { ... }