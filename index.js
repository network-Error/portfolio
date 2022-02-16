// Burger menu

const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.wrapper-nav');

function toggleMenu() {
  hamburger.classList.toggle('open');
  navBar.classList.toggle('show');
}

hamburger.addEventListener('click', toggleMenu);
