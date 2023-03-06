// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
export const swiper = new Swiper(".mySwiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  direction: "horizontal",
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
  },
});
