import initInteractiveCards from './modules/interactive-cards.js';
import initNavigation from './modules/navigation.js';
import initTypewriter from './modules/typewriter.js';
import initPopup from './modules/popup.js';
import initFooter from './modules/footer.js';
import initProjectFilter from './modules/project-filter.js';
import initBootScreen from './modules/boot-screen.js';

document.addEventListener('DOMContentLoaded', () => {
    initBootScreen();
    initNavigation();
    initInteractiveCards();
    initTypewriter();
    initPopup();
    initFooter();
    initProjectFilter();
});
