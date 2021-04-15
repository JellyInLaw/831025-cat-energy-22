//nav-toggle close/open
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (document.documentElement.clientWidth < 768) {
  mainNav.classList.add("visually-hidden");
}

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("nav-toggle__open");
  mainNav.classList.toggle("visually-hidden");
});
//nav-toggle close/open
