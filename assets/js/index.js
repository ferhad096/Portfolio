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