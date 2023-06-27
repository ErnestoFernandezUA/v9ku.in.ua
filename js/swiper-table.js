const swipersTable = document.querySelector('.swiper-table');

if (!swipersTable) {
  console.error('class .swiper-table is not found');
} else {
  new Swiper('.swiper-table', {
    enabled: Boolean(window.innerWidth < 700),
    slidesPerView: 'auto',
    spaceBetween: 5,
    speed: 1000,
    allowTouchMove: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: 70,
    },
  
    on: {
      slideChange: function () {
        console.log('slide changed');
      },
    },
  });
}

if (window.innerWidth >= 700) {
  
}
