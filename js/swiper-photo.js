new Swiper('.swiper-photo', {
  enabled: true,
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 400,
  // height: 200,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // centeredSlides: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 70,
    // hide: true,
    // grid: {
    //   rows: 3,
    // },
    // mousewheel: {
    //   forceToAxis: true,
    // },
    },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1260: {
      slidesPerView: 1,
    }
  },
});
