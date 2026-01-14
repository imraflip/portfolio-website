/* =========================
   TYPEWRITER EFFECT MODULE
   ========================= */

export const initTypewriter = () => {
    const text = "Penetration Tester | Computer Science Student";
    const target = document.getElementById("typed-text");
    const cursor = document.querySelector(".typewriter-cursor");

    // Only run on pages with typewriter element
    if (!target) return;

    let index = 0;
    const speed = 55; // milliseconds per character

    function typeText() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        } else if (cursor) {
            // Show cursor when typing complete
            cursor.style.opacity = 1;
        }
    }

    // Start typewriter after small delay
    setTimeout(typeText, 400);
};

export default initTypewriter;
