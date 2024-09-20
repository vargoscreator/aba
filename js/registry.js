const registryButtons = document.querySelectorAll('.registry__select-item');
const registryContents = document.querySelectorAll('.registry__content');

registryButtons.forEach(button => {
    button.addEventListener('click', () => {
        registryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const target = button.getAttribute('data-target');
        if (target === 'all') {
            registryContents.forEach(content => content.style.display = 'block');
        } else {
            registryContents.forEach(content => {
                if (content.getAttribute('data-content') === target) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        }
    });
});


const formElement = document.getElementById("registryForm");
const selectElement = document.getElementById("city");
formElement.addEventListener("reset", function() {
    selectElement.style.color = "rgba(40, 40, 40, 0.31)";
});
selectElement.addEventListener("change", function() {
    if (this.value === "") {
        this.style.color = "rgba(40, 40, 40, 0.31)";
    } else {
        this.style.color = "#282828";
    }
});