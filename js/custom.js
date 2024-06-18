const barsBtn = document.querySelector("#btn-show-list");
const list = document.querySelector(".links");

//list show btn
barsBtn.addEventListener("click", function () {
  if (list.classList.contains("active-show")) {
    list.classList.remove("active-show");
  } else {
    list.classList.add("active-show");
  }
});

// swiper slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  autoplay: {
    delay: 2000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    780: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    781: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    991: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
