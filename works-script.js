document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    const seeMoreBtn = document.querySelector('.see-more-btn');
    const worksGallery = document.querySelector('.works-gallery');

    let currentIndex = 0;

    function updateSliderPosition() {
        slider.style.transform = `translateX(${-currentIndex * (slides[0].clientWidth + 5)}px)`;
    }

    function updateActiveDot() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSliderPosition();
        updateActiveDot();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSliderPosition();
        updateActiveDot();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSliderPosition();
            updateActiveDot();
        });
    });

    // Show Works Gallery on "See More" button click
    seeMoreBtn.addEventListener('click', () => {
        worksGallery.style.display = 'block';
    });

    updateActiveDot();
});
