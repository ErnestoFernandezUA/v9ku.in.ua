const swiperMatches = document.querySelectorAll('.swiper-matches');

if (!swiperMatches.length) {
  console.error('class .swiper-matches is not found');
}

swiperMatches.forEach(el => new Swiper(el, {
  enabled: Boolean(window.innerWidth < breakpointSlider),
  slidesPerView: 'auto',
  spaceBetween: 5,
  speed: 1000,
  allowTouchMove: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 70,
    // hide: true,
  },

  on: {
    slideChange: function () {
      console.log('slide changed');
    },
  },
})); 