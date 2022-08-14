"use strict";

//navbar

const menuToggle = document.querySelector(".mobile-menu");
const bxMenu = document.querySelector(".bx-menu");
const bxX = document.querySelector(".bx-x");
const navBar = document.querySelector(".navbar");

// open

bxMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-menu")) {
    navBar.classList.add("show-navbar");
    bxMenu.classList.add("hide-bx");
    bxX.classList.add("show-bx");
  }
});

// close

bxX.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-x")) {
    navBar.classList.remove("show-navbar");
    bxMenu.classList.remove("hide-bx");
    bxX.classList.remove("show-bx");
  }
});

// image slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
