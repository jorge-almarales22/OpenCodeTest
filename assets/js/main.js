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

    // Swiper Carousel
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

