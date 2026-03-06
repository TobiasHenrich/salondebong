// ============================================
// SALONDEBONG TATTOOS - SCRIPTS
// ============================================

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close Banner
function closeBanner() {
    const banner = document.getElementById('aktion-banner');
    if (banner) {
        banner.style.display = 'none';
        // Store in localStorage so it doesn't show again
        localStorage.setItem('bannerClosed', 'true');
    }
}

// Check if banner was already closed
if (localStorage.getItem('bannerClosed') === 'true') {
    const banner = document.getElementById('aktion-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

// Smooth scroll for anchor links
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

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Wird gesendet...';
        submitBtn.disabled = true;
        
        try {
            // For now, just show success (in production, this would send to a server)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Success message
            contactForm.innerHTML = `
                <div class="form-success">
                    <span style="font-size: 3rem; display: block; margin-bottom: 20px;">✉️</span>
                    <h3>Nachricht gesendet!</h3>
                    <p style="color: var(--text-medium); margin-top: 10px;">
                        Vielen Dank für deine Nachricht! Ich melde mich schnellstmöglich bei dir.
                    </p>
                    <p style="color: var(--text-light); margin-top: 20px; font-size: 0.9rem;">
                        Du kannst mich auch direkt über WhatsApp oder Instagram DM erreichen.
                    </p>
                </div>
            `;
            
        } catch (error) {
            // Error handling
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            alert('Es gab einen Fehler beim Senden. Bitte versuche es erneut oder kontaktiere mich direkt über WhatsApp.');
        }
    });
}

// Gallery Lightbox (placeholder - for future implementation)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        // In production, this would open a lightbox
        console.log('Gallery item clicked - lightbox would open');
    });
});

// Nav background on scroll
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

console.log('Salondebong Tattoos - Website loaded 🤍');