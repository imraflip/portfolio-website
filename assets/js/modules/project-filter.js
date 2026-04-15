export default function initProjectFilter() {
    const tabs = document.querySelectorAll('.tab-btn');
    if (tabs.length === 0) return;

    const cards = document.querySelectorAll('[data-category]');
    const projectsSection = document.getElementById('projects-section');
    const achievementsSection = document.getElementById('achievements-section');

    const hasVisibleChild = (section) =>
        section && [...section.querySelectorAll('[data-category]')].some(
            (c) => !c.classList.contains('hidden')
        );

    const applyFilter = (filter) => {
        cards.forEach((card) => {
            const categories = card.dataset.category.split(' ');
            const match = filter === 'all' || categories.includes(filter);
            card.classList.toggle('hidden', !match);
        });

        if (projectsSection) {
            projectsSection.style.display = hasVisibleChild(projectsSection) ? 'grid' : 'none';
        }
        if (achievementsSection) {
            achievementsSection.style.display = hasVisibleChild(achievementsSection) ? 'block' : 'none';
        }
    };

    tabs.forEach((btn) => {
        btn.addEventListener('click', () => {
            tabs.forEach((b) => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            applyFilter(btn.dataset.filter);
        });
    });
}
