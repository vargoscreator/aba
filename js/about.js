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