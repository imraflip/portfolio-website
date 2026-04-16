export default function initInteractiveCards() {
    initSkillTagStagger();
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
