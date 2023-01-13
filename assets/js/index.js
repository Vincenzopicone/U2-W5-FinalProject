let scrollBar = window.scrollY;
let nav = document.querySelector("nav");
let button = document.querySelector(".buttonBGBlackNav");

window.addEventListener("scroll", function () {
  scrollBar = window.scrollY;

  if (scrollBar >= 300) {
    nav.classList.add("scrollBar");
    button.classList.add("scrollButton");
  } else {
    nav.classList.remove("scrollBar");
    button.classList.remove("scrollButton");
  }
});
