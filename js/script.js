var buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener('click', function() {
    console.log('clicked');
  });
});

console.log(window.innerWidth);

const breakpointSlider = 1260; 
let swipers;

if (window.innerWidth < breakpointSlider) {
  swipers = document.querySelectorAll('.swiper');
  
  swipers.forEach(el => new Swiper(el, {
    enabled: Boolean(window.innerWidth < 1260),
  slidesPerView: 'auto',
  spaceBetween: 0,
  speed: 400,
  // centeredSlides: Boolean(window.innerWidth > 1260),

  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 70,
    // hide: true,
  },
  }))
}

new Swiper('.swiper-table', {
  // enabled: Boolean(window.innerWidth < 1260),
  slidesPerView: 'auto',
  spaceBetween: 0,
  speed: 400,
  height: 200,
  // centeredSlides: Boolean(window.innerWidth > 1260),
  scrollbar: {
    el: '.swiper-scrollbar-table',
    dragSize: 70,
    // hide: true,
    // grid: {
    //   rows: 3,
    // },
    // mousewheel: {
    //   forceToAxis: true,
    // },
  },
  // breakpoints: {
  //   640: {
  //     slidesPerView: 10,
  //   },
  //   1024: {
  //     slidesPerView: 10,
  //   },
  // },
  },
);


