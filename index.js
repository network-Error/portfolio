// Burger menu

const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.wrapper-nav');

function toggleMenu() {
  hamburger.classList.toggle('open');
  navBar.classList.toggle('show');
}

hamburger.addEventListener('click', toggleMenu);


const portfolioBtnWinter = document.querySelector('.portfolio-btn.winter');
const portfolioBtnSpring = document.querySelector('.portfolio-btn.spring');
const portfolioBtnSummer = document.querySelector('.portfolio-btn.summer');
const portfolioBtnAutumn = document.querySelector('.portfolio-btn.autumn');
const imgOne = document.querySelector('.imgOne');
const imgTwo = document.querySelector('.imgTwo');
const imgThree = document.querySelector('.imgThree');
const imgFour = document.querySelector('.imgFour');
const imgFive = document.querySelector('.imgFive');
const imgSix = document.querySelector('.imgSix');

portfolioBtnWinter.addEventListener('click', () => {
  imgOne.src = './assets/img/img2.jpg';
  imgTwo.src = './assets/img/img1.jpg';
  imgThree.src = './assets/img/img4.jpg';
  imgFour.src = './assets/img/img3.jpg';
  imgFive.src = './assets/img/img6.jpg';
  imgSix.src = './assets/img/img5.jpg';
  portfolioBtnWinter.classList.add('active');
  portfolioBtnSpring.classList.remove('active');
  portfolioBtnSummer.classList.remove('active');
  portfolioBtnAutumn.classList.remove('active');
})

portfolioBtnSpring.addEventListener('click', () => {
  imgOne.src = './assets/img/img3.jpg';
  imgTwo.src = './assets/img/img1.jpg';
  imgThree.src = './assets/img/img2.jpg';
  imgFour.src = './assets/img/img6.jpg';
  imgFive.src = './assets/img/img4.jpg';
  imgSix.src = './assets/img/img5.jpg';
  portfolioBtnSpring.classList.add('active');
  portfolioBtnWinter.classList.remove('active');
  portfolioBtnSummer.classList.remove('active');
  portfolioBtnAutumn.classList.remove('active');
})

portfolioBtnSummer.addEventListener('click', () => {
  imgOne.src = './assets/img/img4.jpg';
  imgTwo.src = './assets/img/img3.jpg';
  imgThree.src = './assets/img/img1.jpg';
  imgFour.src = './assets/img/img5.jpg';
  imgFive.src = './assets/img/img6.jpg';
  imgSix.src = './assets/img/img2.jpg';
  portfolioBtnSummer.classList.add('active');
  portfolioBtnSpring.classList.remove('active');
  portfolioBtnWinter.classList.remove('active');
  portfolioBtnAutumn.classList.remove('active');
})

portfolioBtnAutumn.addEventListener('click', () => {
  imgOne.src = './assets/img/img1.jpg';
  imgTwo.src = './assets/img/img2.jpg';
  imgThree.src = './assets/img/img3.jpg';
  imgFour.src = './assets/img/img4.jpg';
  imgFive.src = './assets/img/img5.jpg';
  imgSix.src = './assets/img/img6.jpg';
  portfolioBtnAutumn.classList.add('active');
  portfolioBtnSummer.classList.remove('active');
  portfolioBtnSpring.classList.remove('active');
  portfolioBtnWinter.classList.remove('active');
})
