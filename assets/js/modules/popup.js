/* =========================
   POPUP EFFECT MODULE
   ========================= */

export const initPopup = () => {
    const popup = document.getElementById("ui-popup");
    
    // Only run on pages with popup element
    if (!popup) return;

    const closeBtn = popup.querySelector(".ui-popup-close");
    const okBtn = popup.querySelector(".ui-popup-ok");

    // Show popup after delay (prevents blank flash)
    setTimeout(() => {
        popup.classList.add("visible");
    }, 400);

    // Close popup function
    function closePopup() {
        popup.classList.remove("visible");
    }

    // Event listeners
    if (closeBtn) {
        closeBtn.addEventListener("click", closePopup);
    }

    if (okBtn) {
        okBtn.addEventListener("click", closePopup);
    }
};

export default initPopup;
