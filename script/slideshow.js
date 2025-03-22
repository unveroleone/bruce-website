document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    let autoSlideInterval = null;
    let autoSlideTimeout = null;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function changeSlide(direction) {
        showSlide(currentSlide + direction);
        resetAutoSlide();
    }

    slides.forEach(slide => {
        slide.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
        slide.querySelector('.next').addEventListener('click', () => changeSlide(1));
    });

    function startAutoSlide() {
        if (autoSlideInterval) return;
        autoSlideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 6000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
        clearTimeout(autoSlideTimeout);
        autoSlideTimeout = setTimeout(() => {
            startAutoSlide();
        }, 3000);
    }

    showSlide(currentSlide);
    resetAutoSlide();
});
