'use strict';

(() => {
const featuresSlider = document.querySelector('.features-slider');
const swiper = new Swiper(featuresSlider, {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
});
})();
