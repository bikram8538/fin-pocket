const swiper = new Swiper(".testimonialSwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    observer: true,
    observeParents: true,
  },
});
