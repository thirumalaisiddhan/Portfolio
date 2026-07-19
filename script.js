document.addEventListener("DOMContentLoaded", () => {
    // =========================================================================
    // 1. EmailJS Contact Form Handler
    // =========================================================================
    emailjs.init("lTCVsuZoWg3iI5usd");

    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            emailjs.sendForm('service_r9hx52w', 'template_vqn7a4p', this)
                .then(() => {
                    alert('Message Sent Successfully!');
                    submitBtn.innerText = 'Send Message';
                    submitBtn.disabled = false;
                    contactForm.reset();
                }, () => {
                    alert('Oops! Sending failed. Please try again.');
                    submitBtn.innerText = 'Send Message';
                    submitBtn.disabled = false;
                });
        });
    }

    // =========================================================================
    // 2. Dynamic Typing Effect (Hero Section)
    // =========================================================================
    const textElement = document.querySelector('.change-content');
    const words = ['Software Engineer', 'Full Stack Developer', 'Problem Solver'];
    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function typeEffect() {
        if (!textElement) return;
        const currentWord = words[wordIndex];
        textElement.textContent = isDeleting 
            ? currentWord.substring(0, charIndex - 1) 
            : currentWord.substring(0, charIndex + 1);
            
        charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentWord.length) { 
            typeSpeed = 2000; 
            isDeleting = true; 
        } else if (isDeleting && charIndex === 0) { 
            isDeleting = false; 
            wordIndex = (wordIndex + 1) % words.length; 
            typeSpeed = 500; 
        }
        setTimeout(typeEffect, typeSpeed);
    }
    typeEffect();

    // =========================================================================
    // 3. Responsive Mobile Navigation Menu
    // =========================================================================
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.navLinks');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => { 
            navMenu.classList.toggle('active'); 
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // =========================================================================
    // 4. Dark/Light Theme Switching System
    // =========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('i');
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            themeIcon.className = document.body.classList.contains('dark-mode') 
                ? 'fas fa-sun' 
                : 'fas fa-moon';
        });
    }

    // =========================================================================
    // 5. Infinite Stagger Scroll Entry Engine (Intersection Observer Setup)
    // =========================================================================
    const revealElements = document.querySelectorAll('.reveal');
    
    // Target all grid and sequential block wrappers, including the new timeline container
    const grids = document.querySelectorAll('.skills-grid, .project-grid, .cert-grid, .edu-grid, .timeline-container');
    grids.forEach(grid => {
        const items = grid.querySelectorAll('.reveal');
        items.forEach((item, index) => {
            item.style.setProperty('--reveal-delay', index);
        });
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animate progress indicator bars inside education cards smoothly
                const progressBars = entry.target.querySelectorAll('.animate-bar');
                progressBars.forEach(bar => {
                    const targetWidth = bar.style.getPropertyValue('--target-width');
                    bar.style.transition = "width 1.8s cubic-bezier(0.25, 1, 0.5, 1)";
                    bar.style.width = targetWidth;
                });
            } else {
                // Reset reveal states when scrolling out of viewport to re-trigger seamlessly
                if (entry.target.closest('#home') === null) {
                    entry.target.classList.remove('active');
                    const progressBars = entry.target.querySelectorAll('.animate-bar');
                    progressBars.forEach(bar => {
                        bar.style.transition = "none";
                        bar.style.width = '0';
                    });
                }
            }
        });
    }, {
        threshold: 0.05, 
        rootMargin: "0px 0px -20px 0px"
    });

    revealElements.forEach(element => revealObserver.observe(element));

    // =========================================================================
    // 6. Lightbox Certificate Image Modal System
    // =========================================================================
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    
    document.querySelectorAll(".cert-img").forEach(img => {
        img.onclick = function() { 
            if (!modal || !modalImg) return;
            modal.style.display = "flex"; 
            setTimeout(() => modal.classList.add("show"), 10);
            modalImg.src = this.src; 
            captionText.innerHTML = this.alt;
        }
    });
    
    const closeModal = () => {
        if (!modal) return;
        modal.classList.remove("show");
        setTimeout(() => { modal.style.display = "none"; }, 400);
    };

    const closeBtn = document.querySelector(".close-modal");
    if (closeBtn) closeBtn.onclick = closeModal;
    
    window.onclick = (event) => { 
        if (event.target == modal) closeModal(); 
    };
});