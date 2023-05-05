var buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener('click', function() {
    console.log('clicked');
  });
});

console.log(window.innerWidth);

const breakpointSlider = 1260; 
let swipersNav;
let swipersLeagues;

if (window.innerWidth < breakpointSlider) {
  const swipers = document.querySelectorAll('.swiper--nav');
  
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

  swipersLeagues = document.querySelectorAll('.swiper--leagues');

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
}

new Swiper('.swiper--table', {
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


