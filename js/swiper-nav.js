const swiperNav = document.querySelector('.swiper-nav');
const slidesNav = swiperNav.querySelectorAll('.swiper-slide-nav');
let totalWidthNav = 0;
for (let i = 0; i < slidesNav.length; i++) {
  const slide = slidesNav[i];
  totalWidthNav += slide.offsetWidth;
}
  
new Swiper(swiperNav, {
  // enabled: Boolean(window.innerWidth < totalWidth),
  slidesPerView: 'auto',
  spaceBetween: 0,
  speed: 400,
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 70,
  },
});

if (window.innerWidth >= totalWidthNav) {
  const swiper = document.querySelector('.swiper-wrapper-nav');
  swiper.style.display = 'flex';
  swiper.style.justifyContent = 'center';
}