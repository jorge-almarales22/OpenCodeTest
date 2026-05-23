document.addEventListener('DOMContentLoaded', () => {
    // ScrollReveal
    ScrollReveal().reveal('.reveal', { 
        delay: 200, 
        distance: '50px', 
        origin: 'bottom', 
        duration: 1000, 
        easing: 'ease-out',
        interval: 200 
    });

    // Carrusel
    const slider = document.getElementById('imageSlider');
    function autoScroll() {
        if (!slider) return;
        const imgWidth = slider.querySelector('img').clientWidth;
        slider.scrollBy({ left: imgWidth, behavior: 'smooth' });
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }
    
    if (slider) {
        setInterval(autoScroll, 3000);
    }
});