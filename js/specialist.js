let swiper;

function initSwiper() {
    swiper = new Swiper(".specialist__slider", {
        loop: true,
        spaceBetween: 8,
        slidesPerView: 1,
        allowTouchMove: true,
        autoHeight: true,
        direction: 'horizontal',
        effect: 'slide',
        pagination: {
            el: '.specialist__slider-pagination',
            clickable: true
        },
        autoplay: {
            delay: 2000,
            reverseDirection: false,
            disableOnInteraction: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1000: {
                direction: 'vertical',
                slidesPerView: 2,
            },
        }
    });
}
initSwiper()
window.addEventListener('resize', () => {
    if (swiper) {
        swiper.destroy(true, true);
    }
    initSwiper();
});



document.querySelectorAll('.feedback__close, .specialist__message-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.body').classList.toggle('no-scroll')
        document.querySelector('.feedback').classList.toggle('active')
    });
});

Fancybox.bind('[data-fancybox]', {
    Carousel : {
        infinite: false
    }
});  