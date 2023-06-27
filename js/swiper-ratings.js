const swiperRatings = document.querySelector('.swiper-ratings');
const slidesRatings = swiperRatings.querySelectorAll('.swiper-slide-ratings');
let totalWidthRatings = 0;

for (let i = 0; i < slidesRatings.length; i++) {
  const slide = slidesRatings[i];
  console.log(i, slide.offsetWidth, slide);
  totalWidthRatings += slide.offsetWidth;
}

totalWidthRatings += slidesRatings.length * 10;

console.log(window.innerWidth, 'totalWidthRatings = ', totalWidthRatings);

new Swiper(swiperRatings, {
  enabled: Boolean(window.innerWidth < totalWidthRatings),
  slidesPerView: 'auto',
  spaceBetween: 10,
  speed: 400,
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 70,
  },
});


if (window.innerWidth >= totalWidthRatings) {
  console.log('style');
  const swiperWrapper = swiperRatings.querySelector('.swiper-wrapper');
  swiperRatings.style.display = 'flex';
  swiperRatings.style.justifyContent = 'center';
  swiperRatings.style.alignItems = 'center';
  swiperWrapper.style.maxWidth = '1440px';
  swiperWrapper.style.width = 'fit-content';
  // swiperWrapper.style.backgroundColor = 'red';
}