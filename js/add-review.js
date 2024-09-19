document.querySelector('.addReview__form').addEventListener('submit', function(event) {
    event.preventDefault();


    // TEST
    document.querySelector('.addReview__send').classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
    // TEST

    // const formData = new FormData(this);
    // fetch('sent.php', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     document.querySelector('.addReview').classList.add('active');
    //     window.scrollTo({top: 0, behavior: 'smooth'});
    // })
    // .catch(error => {
    //     console.error('Ошибка:', error);
    // });
});
