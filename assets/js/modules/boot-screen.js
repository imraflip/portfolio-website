const SEEN_KEY = 'boot-seen';

export default function initBootScreen() {
    const screen = document.getElementById('boot-screen');
    if (!screen) return;

    if (sessionStorage.getItem(SEEN_KEY)) {
        screen.remove();
        return;
    }

    const log = screen.querySelector('.boot-log');
    const bar = screen.querySelector('.boot-bar-fill');

    const lines = [
        'BIOS v1.0 — RAFLIP SYSTEMS',
        'Checking memory... 640K OK',
        'Loading SKILLS.DAT...',
        'Loading PROJECTS.DAT...',
        'Mounting /portfolio...',
        'All systems ready.',
    ];

    document.body.style.overflow = 'hidden';

    let i = 0;
    const interval = setInterval(() => {
        if (i < lines.length) {
            const span = document.createElement('div');
            span.textContent = `> ${lines[i]}`;
            log.appendChild(span);
            bar.style.width = `${((i + 1) / lines.length) * 100}%`;
            i++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                screen.classList.add('boot-done');
                document.body.style.overflow = '';
                sessionStorage.setItem(SEEN_KEY, '1');
                setTimeout(() => screen.remove(), 400);
            }, 300);
        }
    }, 350);

    screen.addEventListener('click', () => {
        clearInterval(interval);
        screen.classList.add('boot-done');
        document.body.style.overflow = '';
        sessionStorage.setItem(SEEN_KEY, '1');
        setTimeout(() => screen.remove(), 400);
    });
}
