let scrollBar = window.scrollY;
let nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  scrollBar = window.scrollY;

  if (scrollBar >= 300) {
    nav.classList.add("scrollBar");
  } else {
    nav.classList.remove("scrollBar");
  }
});
