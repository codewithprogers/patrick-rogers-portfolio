const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});