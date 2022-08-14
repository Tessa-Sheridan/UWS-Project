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

//cards

$(document).ready(function () {
  $("div.card").click(function (e) {
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true;
    }

    if ($("div.cards").hasClass("showing")) {
      $("div.card.show").removeClass("show");

      if (isShowing) {
        $("div.cards").removeClass("showing");
        $("div.cards").removeClass("open");
      } else {
        $(this).addClass("show");
      }
    } else {
      $("div.cards").addClass("showing");
      $("div.cards").addClass("open");
      $(this).addClass("show");
    }
  });

  $(".card-actions").click(function (e) {
    e.stopPropagation();
  });
});

$(document).ready(function () {
  $("div.card2").click(function (e) {
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true;
    }

    if ($("div.cards2").hasClass("showing")) {
      $("div.card2.show").removeClass("show");

      if (isShowing) {
        $("div.cards2").removeClass("showing");
        $("div.cards2").removeClass("open");
      } else {
        $(this).addClass("show");
      }
    } else {
      $("div.cards2").addClass("showing");
      $("div.cards2").addClass("open");
      $(this).addClass("show");
    }
  });

  $(".card-actions").click(function (e) {
    e.stopPropagation();
  });
});
