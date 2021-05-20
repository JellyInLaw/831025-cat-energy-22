//nav-toggle close/open
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (document.documentElement.clientWidth < 750) {
  mainNav.classList.add("visually-hidden");
}

navToggle.classList.remove("display-no-js");

window.addEventListener("resize", function () {
  if (document.documentElement.clientWidth < 750) {
    mainNav.classList.add("visually-hidden");
  } else {
    mainNav.classList.remove("visually-hidden");
  }
});

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("nav-toggle__open");
  mainNav.classList.toggle("visually-hidden");
});
//nav-toggle close/open

//live-example-demonstration

const body = document.querySelector(".page__body");

if (body.classList.contains("page-index")) {
  const catFat = document.querySelector(".cat-fat");
  const catSkinny = document.querySelector(".cat-skinny");
  const beforeControl = document.querySelector(
    ".demonstration-controls__label-left"
  );
  const afterControl = document.querySelector(
    ".demonstration-controls__label-right"
  );

  afterControl.addEventListener("click", function () {
    catFat.classList.add("visually-hidden");
    catSkinny.classList.remove("visually-hidden");
  });

  beforeControl.addEventListener("click", function () {
    catFat.classList.remove("visually-hidden");
    catSkinny.classList.add("visually-hidden");
  });
}
//live-example-demonstration
