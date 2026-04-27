const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-options");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});