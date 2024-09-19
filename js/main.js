let swiper = new Swiper(".hero__slider", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    allowTouchMove: true,
    autoHeight: true,
    pagination: {
        el: '.hero__slider-pagination',
        clickable: true
    },
    // navigation: {
    //     nextEl: ".button-next",
    //     prevEl: ".button-prev",
    // },
});   