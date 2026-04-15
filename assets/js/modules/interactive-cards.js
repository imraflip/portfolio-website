export default function initInteractiveCards() {
    initCardTilt();
    initSkillTagStagger();
}

function initCardTilt() {
    const canHover = window.matchMedia('(hover: hover)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reduceMotion) return;

    const cards = document.querySelectorAll('.project-card, .achievement-card');

    cards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const rotateX = (e.clientY - rect.top - rect.height / 2) / 10;
            const rotateY = (rect.width / 2 - (e.clientX - rect.left)) / 10;
            card.style.setProperty('--tilt-x', `${rotateX}deg`);
            card.style.setProperty('--tilt-y', `${rotateY}deg`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--tilt-x', '0deg');
            card.style.setProperty('--tilt-y', '0deg');
        });
    });
}

function initSkillTagStagger() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const tags = document.querySelectorAll('.skill-tag');
    tags.forEach((tag, i) => {
        tag.style.animationDelay = `${i * 30}ms`;
        tag.classList.add('skill-tag-enter');
    });
}
