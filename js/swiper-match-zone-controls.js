const swiperMatchZoneControls = document.querySelector('.swiper-match-zone-controls');

const slidesMatchZoneControls = swiperMatchZoneControls.querySelectorAll('.swiper-slide-match-zone-controls');
let totalWidthMatchZoneControls = 0;

for (let i = 0; i < slidesMatchZoneControls.length; i++) {
  const slide = slidesMatchZoneControls[i];

  // console.log(i, slide.offsetWidth, slide);
  
  totalWidthMatchZoneControls += slide.offsetWidth;
}

totalWidthMatchZoneControls += slidesMatchZoneControls.length * 10;

// console.log(window.innerWidth, 'totalWidthMatchZoneControls = ', totalWidthMatchZoneControls);

new Swiper(swiperMatchZoneControls, {
  enabled: Boolean(window.innerWidth < totalWidthMatchZoneControls),
  slidesPerView: 'auto',
  spaceBetween: 10,
  speed: 400,
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 70,
  },
});

if (window.innerWidth >= totalWidthMatchZoneControls) {
  console.log('style');
  const swiperWrapper = swiperMatchZoneControls.querySelector('.swiper-wrapper-match-zone-controls');
  console.log(swiperWrapper);

  swiperMatchZoneControls.style.display = 'flex';
  swiperMatchZoneControls.style.justifyContent = 'center';
  swiperMatchZoneControls.style.alignItems = 'center';
  swiperMatchZoneControls.style.gap = '10px';
  swiperWrapper.style.maxWidth = '1440px';
  swiperWrapper.style.width = 'fit-content';
  // swiperWrapper.style.backgroundColor = 'red';
  swiperWrapper.style.padding = '0 10px';
}