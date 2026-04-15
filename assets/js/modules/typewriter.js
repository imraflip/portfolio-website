export default function initTypewriter() {
    const target = document.getElementById('typed-text');
    if (!target) return;

    const cursor = document.querySelector('.typewriter-cursor');
    const text = 'Penetration Tester | Computer Science Student';
    const speed = 55;
    let i = 0;

    const tick = () => {
        if (i < text.length) {
            target.textContent += text.charAt(i++);
            setTimeout(tick, speed);
        } else if (cursor) {
            cursor.style.opacity = 1;
        }
    };

    setTimeout(tick, 400);
}
