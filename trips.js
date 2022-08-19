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

//slides

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
  showDivs1((slideIndex1 += n));
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex1 - 1].style.display = "block";
}

var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2((slideIndex2 += n));
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex2 - 1].style.display = "block";
}
