"use strict";

var NavUl = document.querySelector("nav ul");
var NavLi = document.querySelectorAll("nav ul li");
var Hamburger = document.getElementById("hamburger");
var Cercles = document.querySelectorAll(".circle1");
var ChangementImg = document.querySelector(".img2 ");
var p = document.querySelector("p-js");
Hamburger.addEventListener("click", function () {
  NavUl.classList.toggle("NavUl");
  NavLi.forEach(function (li) {
    li.classList.toggle("NavLi");
  });
});
var count = -1;
var tableauTexte = [" \"ge has supercharged our team s workflow. The \n    naintain visibility on larger milestones at all times\n    keeps everyone motivated.\"", " \"We have been able to cancel so many other subscriptions\n    since using Manahe. There is no more cross-channel\n    confusion and everyone is much more focused.\"", " \"Manage ailows us to provide structure and pro <br />\n    keeps us organized and focused.I can't stop recording <br />\n    them toeveryone i talk to! \""];

function remove(number) {
  setTimeout(function () {
    Cercles[number].classList.remove("CircleStyle");
  }, 2000);
}

console.log(tableauTexte[1]);

function apres(number) {
  setTimeout(function () {
    Cercles[number].classList.add("CircleStyle");
    ChangementImg.innerHTML = "   <img src=\"./assets/images/avatar-".concat(number, ".png\" alt=\"avatar-Ali\"  />");
    p.innerHTML = "<p>".concat(tableauTexte[count], "</p>");
  }, 2000);
}

setInterval(function () {
  if (count == 3) {
    count = -1;
  }

  count = count + 1;
  remove(count);

  if (count == 0) {
    apres(1);
  }

  if (count == 1) {
    apres(2);
  }

  if (count == 2) {
    apres(3);
  }

  if (count == 3) {
    apres(0);
  }

  console.log(count);
}, 2000); // setInterval(() => {
//   count2++;
//   console.log(count);
//   Cercles[count].classList.remove("CircleStyle");
// }, 2600);d