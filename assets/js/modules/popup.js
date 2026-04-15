export default function initPopup() {
    const popup = document.getElementById('ui-popup');
    if (!popup) return;

    const close = () => popup.classList.remove('visible');

    setTimeout(() => popup.classList.add('visible'), 400);

    popup.querySelector('.ui-popup-close')?.addEventListener('click', close);
    popup.querySelector('.ui-popup-ok')?.addEventListener('click', close);
}
