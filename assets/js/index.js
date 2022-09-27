// hamburger menu

const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileOverlay = document.querySelector(".header-overlay");
const mobileContent = document.querySelector(".mobile-content");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

mobileOverlay.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

//HEADER scroll

const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

const header = document.querySelector("header");

window.addEventListener("scroll", (event) => {
  const currentScroll = window.pageYOffset;
  console.log(scroll);
  if (scroll >= 100) header.classList.add("fixed");
  else header.classList.remove("fixed");

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
  }
  lastScroll = currentScroll;
});

// Swiper //
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
