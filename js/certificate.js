const form = document.querySelector('.check__form');
const checkResults = document.querySelector('.check__content');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkResults.classList.add('show');

    // const name = document.getElementById('name').value;  
    // if (name.trim() === '') {
    //   return;
    // }  
    // fetch('send.php', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ name })
    // })
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    //   return response.json();
    // })
    // .then(data => {
    //   sendedBlock.classList.add('show');
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
});

function updateContent() {
    document.querySelectorAll('.check__content-item').forEach((item) => {
        const h3Text = item.querySelector('h3').innerText;
        const dateRange = item.querySelectorAll('.check__content-descr p:not(.check__content-name)')[0].innerText;
        const certificationDate = item.querySelectorAll('.check__content-descr p:not(.check__content-name)')[1].innerText;
        const name = item.querySelectorAll('.check__content-descr p:not(.check__content-name)')[2].innerText;
        const certificateCheck = item.querySelectorAll('.check__content-descr p:not(.check__content-name)')[3]?.innerText;
       
        if (h3Text && dateRange && certificationDate && name && window.innerWidth < 768) {
            item.innerHTML = `
                <div class="check__content-descr">
                    <p class="check__content-name">Програма підвищення кваліфікації</p>
                    <h3>${h3Text}</h3>
                </div>
                <div class="check__content-descr">
                    <p class="check__content-name">Строки програми</p>
                    <p>${dateRange}</p>
                </div>
                <div class="check__content-descr">
                    <p class="check__content-name">Дата сертифікації</p>
                    <p>${certificationDate}</p>
                </div>
                <div class="check__content-descr">
                    <p class="check__content-name">ПІП</p>
                    <p>${name}</p>
                </div>
                <div class="check__content-descr">
                    <p class="check__content-name">Перевірити сертифікат</p>
                    <p>${certificateCheck}</p>
                </div>
            `;
        } else {
            item.innerHTML = `
                <div class="check__content-descr">
                    <h3>${h3Text}</h3>
                </div>
                <div class="check__content-descr">
                    <p>${dateRange}</p>
                </div>
                <div class="check__content-descr">
                    <p>${certificationDate}</p>
                </div>
                <div class="check__content-descr">
                    <p>${name}</p>
                </div>
                <div class="check__content-descr">
                    <p>${certificateCheck}</p>
                </div>
            `;
        }
    });
}

window.addEventListener('resize', updateContent);
window.addEventListener('load', updateContent);
