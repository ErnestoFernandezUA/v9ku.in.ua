const swipersLeagues = document.querySelectorAll('.swiper-leagues');

if (!swipersLeagues.length) {
  console.error('class .swiper-leagues is not found');
}

swipersLeagues.forEach(el => new Swiper(el, {
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