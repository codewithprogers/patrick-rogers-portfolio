const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

const header = document.querySelector(".hero");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const headerHeight = header.offsetHeight;
  const scrollAmount = window.scrollY;

  const progress = Math.min(scrollAmount / headerHeight, 1);

  navbar.style.setProperty("--nav-progress", progress);
});