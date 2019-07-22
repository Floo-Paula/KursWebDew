const arrow = document.querySelector('.arrow');
const navi = document.querySelector('nav');


arrow.addEventListener('click', function () {
    navi.classList.toggle('show');
    arrow.classList.toggle('show');
})