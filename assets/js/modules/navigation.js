export default function initNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('header');

    const updateActiveLink = () => {
        const current = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            const isActive =
                href === current ||
                ((current === '' || current === '/') && href === 'index.html');
            link.classList.toggle('active', isActive);
        });
    };

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href.startsWith('#')) return;
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    if (header) {
        window.addEventListener('scroll', () => {
            header.style.boxShadow = window.scrollY > 10 ? '0 2px 8px rgba(0, 0, 0, 0.2)' : 'none';
        }, { passive: true });
    }

    const hamburger = document.getElementById('hamburger-btn');
    const menu = document.getElementById('nav-menu');
    if (hamburger && menu) {
        const setExpanded = (open) => {
            menu.classList.toggle('active', open);
            hamburger.classList.toggle('active', open);
            hamburger.setAttribute('aria-expanded', String(open));
        };

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            setExpanded(!menu.classList.contains('active'));
        });

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => setExpanded(false));
        });

        document.addEventListener('click', (e) => {
            if (menu.classList.contains('active') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
                setExpanded(false);
            }
        });
    }

    if (document.startViewTransition) {
        document.querySelectorAll('a[href]').forEach((link) => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || link.hasAttribute('download')) return;

            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.startViewTransition(() => {
                    window.location.href = href;
                });
            });
        });
    }

    updateActiveLink();
    window.addEventListener('pageshow', updateActiveLink);
}
