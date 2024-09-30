let swiperReviews = new Swiper(".our-teachers__slider", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    allowTouchMove: true,
    autoHeight: true,
    pagination: {
        el: '.our-teachers__slider-pagination',
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1000: {
            slidesPerView: 3
        }
    }
});

const videos = document.querySelectorAll('.videoContent');
const buttons = document.querySelectorAll('.video-btn');
buttons.forEach((button, index) => {
    const video = videos[index];
    button.addEventListener('click', function() {
        video.play();
        button.style.display = 'none';
    });
    video.addEventListener('play', function() {
        video.setAttribute('controls', 'true');
        button.style.display = 'none';
    });
    video.addEventListener('ended', function() {
        video.removeAttribute('controls');
        button.style.display = 'block';
    });
});