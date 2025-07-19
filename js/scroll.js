/*
  scroll.js
  Handles scroll-based animations for Oz Steel Inc.
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Fade-in on Scroll using Intersection Observer ---
    
    const fadeElements = document.querySelectorAll('.fade-in-section');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stop observing the element once it has faded in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach the observer to each fade-in element
    fadeElements.forEach(el => {
        fadeInObserver.observe(el);
    });


    // --- Parallax Effect on Hero Background ---

    const parallaxBg = document.querySelector('.parallax-bg');

    // Respect user's motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleParallax = () => {
        if (parallaxBg && !motionQuery.matches) {
            const yOffset = window.scrollY;
            // Apply a subtle vertical shift (speed = 0.2)
            parallaxBg.style.transform = `translateY(${yOffset * 0.2}px)`;
        }
    };
    
    // Attach the scroll event listener only if motion is preferred
    if (!motionQuery.matches) {
         window.addEventListener('scroll', handleParallax);
    }
});