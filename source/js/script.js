//nav-toggle close/open
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("nav-toggle__open");
  mainNav.classList.toggle("main-nav__open");
});
//nav-toggle close/open
