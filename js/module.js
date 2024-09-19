let swiperReviews = new Swiper(".reviews__slider", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    allowTouchMove: true,
    autoHeight: true,
    pagination: {
        el: '.reviews__slider-pagination',
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
document.querySelectorAll('.questions__item-name').forEach(function(itemName) {
    itemName.addEventListener('click', function() {
        const parentItem = this.parentElement;
        if (parentItem.classList.contains('active')) {
            parentItem.classList.remove('active');
        } else {
            document.querySelectorAll('.questions__item').forEach(function(item) {
                item.classList.remove('active');
            });
            parentItem.classList.add('active');
        }
    });
});
