document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 5000); // Cambio cada 5 segundos

    function updateCarousel() {
        const offset = -currentSlide * 100;
        document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    nextButton.addEventListener('click', function() {
        clearInterval(slideInterval); // Detener el intervalo al hacer click
        nextSlide();
        slideInterval = setInterval(nextSlide, 5000); // Reiniciar intervalo
    });

    prevButton.addEventListener('click', function() {
        clearInterval(slideInterval); // Detener el intervalo al hacer click
        prevSlide();
        slideInterval = setInterval(nextSlide, 5000); // Reiniciar intervalo
    });
});
