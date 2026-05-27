/**
 * Portfolio JavaScript
 * Handles interactive functionality and dynamic behaviors
 * All sensitive information has been removed
 */

(function() {
    'use strict';

    // Smooth scroll with offset for fixed header
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        const headerOffset = 80;

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Update URL without jumping
                    history.pushState(null, null, targetId);
                }
            });
        });
    // Header scroll effect
    function initHeaderScrollEffect() {
        const header = document.querySelector('.topbar');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }
    }

    // Active navigation highlighting
    function initActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav a[href^="#"]');

        function highlightNav() {
            let current = '';
            const scrollPosition = window.pageYOffset + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', highlightNav);
        highlightNav(); // Initial call
    }

    // Intersection Observer for fade-in animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animation for multiple elements
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements that should animate in
        const animateElements = document.querySelectorAll('.timeline-item, .skill-group, .edu-card, .focus-item, .contact-link');
        animateElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.7s ease ${index * 0.05}s, transform 0.7s ease ${index * 0.05}s`;
            observer.observe(el);
        });
    }

    // Add parallax effect to hero section
    function initParallaxEffect() {
        const hero = document.querySelector('.hero-panel');
        const heroSide = document.querySelector('.hero-side');
        
        if (!hero || !heroSide) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            
            if (scrolled < 600) {
                hero.style.transform = `translateY(${rate}px)`;
                heroSide.style.transform = `translateY(${rate * 0.5}px)`;
            }
        });
    }

    // Add hover effect enhancement for cards
    function initCardInteractions() {
        const cards = document.querySelectorAll('.skill-group, .focus-item, .edu-card, .contact-link');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                this.style.setProperty('--mouse-x', `${x}px`);
                this.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }

    // Add animation class
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        .nav a.active {
            color: var(--accent) !important;
            background: rgba(94, 234, 212, 0.1) !important;
        }
    `;
    document.head.appendChild(style);

    // Keyboard navigation enhancement
    function initKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            // Escape key to close any modals or overlays (future enhancement)
            if (e.key === 'Escape') {
                // Placeholder for future modal functionality
            }
        });
    }

    // Copy email to clipboard (if contact form is not used)
    function initEmailCopy() {
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        
        emailLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const email = this.getAttribute('href').replace('mailto:', '');
                
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    e.preventDefault();
                    navigator.clipboard.writeText(email).then(() => {
                        showNotification('Email copied to clipboard!');
                    }).catch(() => {
                        // Fallback: let the default mailto: behavior work
                        window.location.href = this.getAttribute('href');
                    });
                }
            });
        });
    }

    // Simple notification system
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(135deg, var(--accent), var(--accent-strong));
            color: #081120;
            padding: 16px 24px;
            border-radius: 12px;
            font-weight: 600;
            box-shadow: 0 10px 30px rgba(56, 189, 248, 0.3);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Add notification animations
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(notificationStyle);

    // Performance: Lazy load images (for future use)
    function initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        } else {
            // Fallback for browsers that don't support lazy loading
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
        }
    }

    // Detect reduced motion preference
    function respectReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            document.documentElement.style.scrollBehavior = 'auto';
        }
    }

    // Initialize all features when DOM is ready
    function init() {
        initSmoothScroll();
        initActiveNav();
        initHeaderScrollEffect();
        initScrollAnimations();
        initParallaxEffect();
        initCardInteractions();
        initKeyboardNav();
        initEmailCopy();
        initLazyLoading();
        respectReducedMotion();

        // Log initialization (remove in production)
        console.log('Portfolio initialized with enhanced interactions');
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Pause any animations or videos when page is hidden
        } else {
            // Resume when page becomes visible
        }
    });

    // Expose utility functions for potential external use
    window.portfolioUtils = {
        showNotification: showNotification
    };

})();

// Made with Bob
