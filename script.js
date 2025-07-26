// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add parallax effect to clouds
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const clouds = document.querySelectorAll('.clouds');
        
        clouds.forEach((cloud, index) => {
            const speed = 0.5 + (index * 0.2);
            cloud.style.transform = `translateX(${scrolled * speed}px)`;
        });
    });

    // Add hover effects to title characters
    const titleChars = document.querySelectorAll('.title-char');
    titleChars.forEach(char => {
        char.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.textShadow = '0 0 40px rgba(255, 215, 0, 1)';
        });
        
        char.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
        });
    });

    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.querySelector('.content').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Add floating animation to navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        item.classList.add('fade-in-up');
    });

    // Create additional floating elements
    createFloatingElements();
});

function createFloatingElements() {
    const header = document.querySelector('.hero-header');
    const elements = ['⚔️', '🏔️', '🌸', '🍂'];
    
    elements.forEach((element, index) => {
        const floatingEl = document.createElement('div');
        floatingEl.textContent = element;
        floatingEl.className = 'floating-element';
        floatingEl.style.cssText = `
            position: absolute;
            font-size: 1.5rem;
            opacity: 0.4;
            pointer-events: none;
            top: ${20 + (index * 20)}%;
            left: ${10 + (index * 20)}%;
            animation: floatRandom ${15 + (index * 5)}s infinite ease-in-out;
            animation-delay: ${-index * 3}s;
        `;
        header.appendChild(floatingEl);
    });
}

// Add CSS animation for floating elements
const style = document.createElement('style');
style.textContent = `
    .fade-in-up {
        animation: fadeInUp 1s ease-out forwards;
        opacity: 0;
    }
    
    @keyframes floatRandom {
        0%, 100% { 
            transform: translateX(0) translateY(0) rotate(0deg); 
        }
        25% { 
            transform: translateX(30px) translateY(-20px) rotate(90deg); 
        }
        50% { 
            transform: translateX(-20px) translateY(-40px) rotate(180deg); 
        }
        75% { 
            transform: translateX(40px) translateY(-10px) rotate(270deg); 
        }
    }
`;
document.head.appendChild(style);