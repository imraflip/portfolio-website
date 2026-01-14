/* =========================
   INTERACTIVE CARDS MODULE
   ========================= */

export const initInteractiveCards = () => {
    // Project cards - hover effects
    const projectCards = document.querySelectorAll('.project-card, .achievement-card');
    const skillTags = document.querySelectorAll('.skill-tag');

    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            // Tilt 3D effect on mouse move
            card.addEventListener('mousemove', function(e) {
                if (!this.style.transformStyle) {
                    this.style.transformStyle = 'preserve-3d';
                }
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                this.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    scale(1.02)
                    translateZ(10px)
                `;
            });

            card.addEventListener('mouseenter', function() {
                if (!this.dataset.hoverInit) {
                    this.style.transition = 'all 0.1s ease';
                    this.dataset.hoverInit = 'true';
                }
            });

            card.addEventListener('mouseleave', function() {
                this.style.transition = 'all 0.5s ease';
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateZ(0)';
            });

            // Add click hint animation
            card.addEventListener('click', function(e) {
                if (!this.href) return;
                this.style.transform = 'perspective(1000px) scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'perspective(1000px) scale(1)';
                }, 100);
            });
        });
    }

    // Skill tags - staggered entrance & interactive hover
    if (skillTags.length > 0) {
        skillTags.forEach((tag, index) => {
            // Set initial state
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(10px) scale(0.95)';

            // Stagger animation
            setTimeout(() => {
                tag.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0) scale(1)';
            }, index * 30);

            // Enhanced hover effect
            tag.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
                this.style.transform = 'scale(1.08) translateY(-3px) rotate(2deg)';
                this.style.letterSpacing = '1px';
            });

            tag.addEventListener('mouseleave', function() {
                this.style.transition = 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
                this.style.transform = 'scale(1) translateY(0) rotate(0deg)';
                this.style.letterSpacing = 'inherit';
            });
        });
    }
};

export default initInteractiveCards;
