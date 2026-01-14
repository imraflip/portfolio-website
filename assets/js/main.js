/* =========================
   MAIN APPLICATION ENTRY POINT
   ========================= */

// Import all modules
import initInteractiveCards from './modules/interactive-cards.js';
import initNavigation from './modules/navigation.js';
import initTypewriter from './modules/typewriter.js';
import initPopup from './modules/popup.js';
import initFooter from './modules/footer.js';
import initStatsCounter from './modules/stats-counter.js';
import initProjectFilter from './modules/project-filter.js';

// Initialize all modules on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing Portfolio App...');

    // Initialize all modules
    initNavigation();
    initInteractiveCards();
    initTypewriter();
    initPopup();
    initFooter();
    initStatsCounter();
    initProjectFilter();

    console.log('✅ All modules loaded');
});
