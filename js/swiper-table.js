// const swipersTable = document.querySelectorAll('.swiper--table');

// console.log(swipersTable.length);

// if (!swipersLeagues.length) {
//   console.error('class .swiper--table is not found');
// }

new Swiper('.swiper-table', {
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
});