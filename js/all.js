// swiper
var hexSwiper = new Swiper(".hex-swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var newSwiper = new Swiper(".new-swiper", {

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
});


$(window).scroll(function () {
  if ($(window).scrollTop() < ($(window).height() - 50)) {
    $('#go-top').fadeOut(350);
  } else {
    $('#go-top').fadeIn(350);
  }
});


$('#go-top').click(function () {
  $('html,body').animate({
    'scrollTop': '0'
  }, 200)
});

$('#skill').click(function () {
  $("html,body").animate({
    'scrollTop': $('.skill').offset().top
  }, 500);
});

$('#project').click(function () {
  $("html,body").animate({
    'scrollTop': $('.project').offset().top
  }, 800);
});

$('#illustrate').click(function () {
  $("html,body").animate({
    'scrollTop': $('.illustrate').offset().top
  }, 1000);
});

// aos
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

}); // date

