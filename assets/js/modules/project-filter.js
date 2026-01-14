/* =========================
   PROJECT FILTER MODULE
   ========================= */

export default function initProjectFilter() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const projectsSection = document.getElementById('projects-section');
    const achievementsSection = document.getElementById('achievements-section');
    const projectCards = document.querySelectorAll('[data-category]');

    if (tabButtons.length === 0) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.dataset.filter;

            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Handle filter logic
            if (filterValue === 'achievement') {
                // Show only achievements
                if (projectsSection) projectsSection.style.display = 'none';
                if (achievementsSection) achievementsSection.style.display = 'block';
            } else if (filterValue === 'all') {
                // Show both projects and achievements
                if (projectsSection) projectsSection.style.display = 'grid';
                if (achievementsSection) achievementsSection.style.display = 'block';

                // Show all project cards
                if (projectCards.length > 0) {
                    projectCards.forEach(card => {
                        card.classList.remove('hidden');
                    });
                }
            } else {
                // Show only filtered projects
                if (projectsSection) projectsSection.style.display = 'grid';
                if (achievementsSection) achievementsSection.style.display = 'none';

                // Filter projects
                if (projectCards.length > 0) {
                    projectCards.forEach(card => {
                        const categories = card.dataset.category.split(' ');
                        const shouldShow = categories.includes(filterValue);

                        if (shouldShow) {
                            card.classList.remove('hidden');
                        } else {
                            card.classList.add('hidden');
                        }
                    });
                }
            }
        });
    });
}


