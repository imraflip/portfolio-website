/* =========================
   FOOTER MODULE
   ========================= */

export const initFooter = () => {
    const yearElement = document.getElementById("current-year");

    // Only update if element exists
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
};

export default initFooter;
