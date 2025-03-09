document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 15,
    breakpoints: {
      320: { slidesPerView: 3 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 5 },
      1440: { slidesPerView: 8 }
    }
  });
});
