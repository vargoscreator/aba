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
Fancybox.bind('[data-fancybox]', {
    Carousel : {
        infinite: false
    }
});  