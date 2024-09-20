document.querySelectorAll('.feedback__close, .contacts__btn').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.body').classList.toggle('no-scroll')
        document.querySelector('.feedback').classList.toggle('active')
    });
});