// Burger menu
const burger = document.querySelector('.burger-menu');

function toggleMenu() {
    burger.classList.toggle('open');
}
burger.addEventListener('click', toggleMenu);