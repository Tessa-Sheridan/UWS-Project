"use strict";

//navbar

const menuToggle = document.querySelector(".mobile-menu");
const hambMenu = document.querySelector(".bx-menu");
const hambX = document.querySelector(".bx-x");
const navBar = document.querySelector(".navbar");

// open

hambMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-menu")) {
    navBar.classList.add("show-navbar");
    hambMenu.classList.add("hide-bx");
    hambX.classList.add("show-bx");
  }
});

// close

hambX.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-x")) {
    navBar.classList.remove("show-navbar");
    hambMenu.classList.remove("hide-bx");
    hambX.classList.remove("show-bx");
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
