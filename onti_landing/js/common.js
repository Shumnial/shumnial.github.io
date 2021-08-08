(() => {
  window.addEventListener("load", function() {
  const featuresSlider = document.querySelector('.features-slider');

  new Swiper(featuresSlider, {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  });
});
})();
