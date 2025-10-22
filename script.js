// Enhanced pause on hover with smooth transition
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderTrack = document.querySelector('.slider-track');
    const trainerCards = document.querySelectorAll('.trainer-card');
    
    // Track touch/scroll state to prevent accidental clicks
    let isScrolling = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let scrollTimeout;
    
    // Pause animation on hover (desktop)
    sliderContainer.addEventListener('mouseenter', () => {
        sliderTrack.style.animationPlayState = 'paused';
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        sliderTrack.style.animationPlayState = 'running';
    });

    // Pause on individual card hover for better UX (desktop)
    trainerCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            sliderTrack.style.animationPlayState = 'paused';
        });
        
        card.addEventListener('mouseleave', () => {
            if (!sliderContainer.matches(':hover')) {
                sliderTrack.style.animationPlayState = 'running';
            }
        });
    });

    // Touch event handlers to detect scrolling vs clicking
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isScrolling = false;
    }, { passive: true });

    sliderContainer.addEventListener('touchmove', (e) => {
        if (!touchStartX || !touchStartY) return;
        
        const touchEndX = e.touches[0].clientX;
        const touchEndY = e.touches[0].clientY;
        
        const diffX = Math.abs(touchEndX - touchStartX);
        const diffY = Math.abs(touchEndY - touchStartY);
        
        // If user moved more than 10px, consider it scrolling
        if (diffX > 10 || diffY > 10) {
            isScrolling = true;
        }
        
        // Clear existing timeout
        clearTimeout(scrollTimeout);
        
        // Set timeout to reset scrolling state
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 100);
    }, { passive: true });

    sliderContainer.addEventListener('touchend', () => {
        // Reset after a short delay
        setTimeout(() => {
            isScrolling = false;
            touchStartX = 0;
            touchStartY = 0;
        }, 100);
    }, { passive: true });

    // Prevent click on cards if user was scrolling
    trainerCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (isScrolling) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }, { capture: true });
    });

    // Intersection Observer for performance
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sliderTrack.style.animationPlayState = 'running';
            } else {
                sliderTrack.style.animationPlayState = 'paused';
            }
        });
    }, observerOptions);

    observer.observe(sliderContainer);
});
