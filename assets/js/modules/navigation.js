/* =========================
   NAVIGATION MODULE
   ========================= */

export const initNavigation = () => {
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('header');
    let lastScrollY = 0;
    let isScrolling = false;

    // Update active link based on current page
    const updateActiveLink = () => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        navLinks.forEach(link => {
            const href = link.getAttribute('href');

            // Handle root path
            if ((currentPage === '' || currentPage === '/') && href === 'index.html') {
                link.classList.add('active');
            } else if (href === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    // Smooth scroll behavior untuk same-page navigation
    const setupSmoothScroll = () => {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Jika hash link di halaman yang sama
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
    };

    // Subtle header shadow on scroll
    const setupHeaderAnimation = () => {
        window.addEventListener('scroll', () => {
            lastScrollY = window.scrollY;

            if (lastScrollY > 10) {
                header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
            } else {
                header.style.boxShadow = 'none';
            }
        }, { passive: true });
    };

    // Highlight active section on scroll (untuk pages dengan multiple sections)
    const setupScrollSpyEffect = () => {
        const sections = document.querySelectorAll('main section');
        if (sections.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -66%',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Get section ID or determine by position
                    const sectionType = entry.target.className;

                    // Optional: Add visual indicator
                    entry.target.style.opacity = '1';
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    };

    // Back to top button behavior (jika ada)
    const setupBackToTop = () => {
        const backLink = document.querySelector('.back-link');
        if (backLink) {
            backLink.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Smooth scroll jika hash link
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        }
    };

    // Mobile menu toggle
    const setupMobileMenu = () => {
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const navMenu = document.getElementById('nav-menu');

        if (hamburgerBtn && navMenu) {
            hamburgerBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburgerBtn.classList.toggle('active');
            });

            // Close menu saat link diklik
            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                });
            });
        }
    };

    // Initialize all
    updateActiveLink();
    setupSmoothScroll();
    setupHeaderAnimation();
    setupScrollSpyEffect();
    setupBackToTop();
    setupMobileMenu();

    // Re-check active link jika user klik browser back
    window.addEventListener('pageshow', updateActiveLink);
};

export default initNavigation;
