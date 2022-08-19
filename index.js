"use strict";

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
