document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".clients-swiper", {
    wrapperClass: "clients-wrapper",
    slideClass: "client-slide",

    slidesPerView: "auto",
    loop: true,
    loopAdditionalSlides: 20,
    speed: 8000,          // smooth marquee
    allowTouchMove: false,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
});
