'use strict';

(() => {
const featuresSlider = document.querySelector('.features-slider');
const swiper = new Swiper(featuresSlider, {
  loop: true,
  slidesPerView: 'auto',
  loopedSlides: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  spaceBetween: 10,
  speed: 4000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  // breakpoints: {
  //   992: {
  //     slidesPerView: 'auto',
  //     spaceBetween: 10
  //   },
  //   768: {
  //     slidesPerView: 'auto',
  //   },
  //   480: {
  //     slidesPerView: 'auto',
  //   },
  // }
});
})();
