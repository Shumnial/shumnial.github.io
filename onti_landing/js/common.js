'use strict';
(() => {
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav-item');

function showNav() {
  nav.classList.add('active');
}
function hideNav() {
  nav.classList.remove('active');
}

function onBurgerClick(e) {
  const burger = e.currentTarget;
  if (burger.classList.contains('active')) {
    burger.classList.remove('active');
    hideNav()
  } else {
    burger.classList.add('active');
    showNav();
  }
}

function onNavLinkClick() {
  burger.classList.remove('active');
  hideNav();
}

const featuresSlider = document.querySelector('.features-slider');
const swiper = new Swiper(featuresSlider, {
  loop: true,
  slidesPerView: 'auto',
  loopedSlides: 5,
  // watchSlidesVisibility: true,
  // watchSlidesProgress: true,
  spaceBetween: 10,
  speed: 4000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  }
});

burger.addEventListener('click', onBurgerClick);
navLinks.forEach(link => {
  link.addEventListener('click', onNavLinkClick);
});
})();
