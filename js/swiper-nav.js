const swipers = document.querySelectorAll('.swiper-nav');
  
swipers.forEach(el => new Swiper(el, {
  enabled: Boolean(window.innerWidth < 1440),
  slidesPerView: 'auto',
  spaceBetween: 0,
  speed: 400,
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 70,
    // hide: true,
  },
}));
