// Enhanced pause on hover with smooth transition
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderTrack = document.querySelector('.slider-track');
    
    // Pause animation on hover
    sliderContainer.addEventListener('mouseenter', () => {
        sliderTrack.style.animationPlayState = 'paused';
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        sliderTrack.style.animationPlayState = 'running';
    });

    // Optional: Pause on individual card hover for better UX
    const trainerCards = document.querySelectorAll('.trainer-card');
    
    trainerCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            sliderTrack.style.animationPlayState = 'paused';
        });
        
        card.addEventListener('mouseleave', () => {
            // Only resume if mouse is not over the container
            if (!sliderContainer.matches(':hover')) {
                sliderTrack.style.animationPlayState = 'running';
            }
        });
    });

    // Optional: Intersection Observer for performance
    // Pause animation when slider is not visible
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

    // Optional: Add click handler for trainer cards
    // You can customize this to open modals, navigate, etc.
    trainerCards.forEach(card => {
        card.addEventListener('click', () => {
            const trainerName = card.querySelector('.trainer-name').textContent;
            console.log(`Clicked on: ${trainerName}`);
            // Add your custom action here
        });
    });
});
