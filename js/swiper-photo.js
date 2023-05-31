new Swiper('.swiper-photo', {
  enabled: true,
  slidesPerView: 1,
  spaceBetween: 140,
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // centeredSlides: true,
  scrollbar: {
    // el: '.swiper-scrollbar',
    // dragSize: 70,
    // draggable: true,
    // hide: true,
    // grid: {
    //   rows: 3,
    // },
    // mousewheel: {
    //   forceToAxis: true,
    // },
    },
  pagination: {
    el: '.swiper-pagination--photo',
    type: 'fraction',
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewPort: true,
    pageUpDown: false,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".swiper-photo",

  },
  // autoHeight: true,
  watchOverflow: true,
  // loop: true,
  // autoplay: {
  //   delay: 1000,
  //   pauseOnMouseEnter: true,
  //   stopOnLastSlide: true,
  // },
  
  setWrapperSize: true,
  // effect: 'coverflow',

  breakpoints: {
    // 640: {
    //   slidesPerView: 2,
    // },
    // 1024: {
    //   slidesPerView: 3,
    // },
    1260: {
      slidesPerView: 1,
    }
  },
});
