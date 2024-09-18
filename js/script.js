document.addEventListener("DOMContentLoaded", function () {
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
    
    

    const body = document.querySelector('.body');
    const burger = document.querySelector('.header__burger');
    const headerMenuBg = document.querySelector('.header__menu-bg');
    const headerMenu = document.querySelector('.header__menu');
    burger.addEventListener('click', function() {
        headerOpened()
    });
    headerMenuBg.addEventListener('click', function() {
        headerOpened()
    });
    function headerOpened(){
        headerMenu.classList.toggle('active');
        burger.classList.toggle('active');
        if (headerMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }
    window.addEventListener('load', checkScreenWidth);
    window.addEventListener('resize', checkScreenWidth);
    function checkScreenWidth() {
        if (window.innerWidth > 940) {
            document.body.style.overflow = '';
            headerMenu.classList.remove('active');
            burger.classList.remove('active');
        }
    }
});
