const searchForm = document.querySelector(".search-form");
const openBtn = document.querySelector(".header-icon-search");
const closeBtn = document.querySelector(".search-form-close");

window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  header.classList.toggle("sticty", window.scrollY > 0);
});

const toggleBtn = () => {
  searchForm.classList.toggle("active");
};

openBtn.addEventListener("click", () => {
  toggleBtn();
});

closeBtn.addEventListener("click", () => {
  toggleBtn();
});

const menu = document.querySelector(".nav-header");
const menuOpen = document.querySelector(".header-icon-sidebar");
const menuClose = document.querySelector(".nav-header-close");

const navMenu = () => {
  menu.classList.toggle("active2");
};
menuOpen.addEventListener("click", () => {
  navMenu();
});

menuClose.addEventListener("click", () => {
  navMenu();
});

var swiper = new Swiper(".container-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1200,
  });
});

AOS.init({
  offset: 150,
  duration: 700,
  delay: 5,
});
