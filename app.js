const toggle = document.querySelector("#toggle");

const mobileMenu = document.querySelector(".mobile-menu");

const closeBtn = document.querySelector(".close");
const navLinks = document.querySelectorAll(".mobile-menu .nav-link");
toggle.onclick = function () {
  mobileMenu.style.setProperty("width", "50%");
};
closeBtn.onclick = function () {
  mobileMenu.style.setProperty("width", "0%");
};

navLinks.forEach((navLink) => {
  navLink.onclick = function () {
    mobileMenu.style.setProperty("width", "0%");
  };
});
const scrollUpBtn = document.querySelector(".scroll-up");
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll > 50) {
    scrollUpBtn.style.setProperty("display", "block");
  } else {
    scrollUpBtn.style.setProperty("display", "none");
  }
});
