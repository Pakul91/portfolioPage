"use strict";

const projectBox = document.querySelectorAll(".project-box");
const projectListItem = document.querySelectorAll(".project-list-item");
const closeBoxBtn = document.querySelectorAll(".close-box");
const overlay = document.querySelector(".overlay");

// Sotore data from the clicked project
let clickedProject = "";

//Display clicked project-box and overlay
projectListItem.forEach((box) =>
  box.addEventListener("click", function (e) {
    clickedProject = e.target.dataset.project;
    document.getElementById(clickedProject).classList.remove("hidden");
    overlay.classList.remove("hidden");
    window.scrollTo(0, 0);
  })
);

// Close box and overlay when clicked on X
const closeBox = function () {
  overlay.classList.add("hidden");
  projectBox.forEach((box) => box.classList.add("hidden"));
};

// Close box and overlay when Esc is pressed
closeBoxBtn.forEach((btn) => btn.addEventListener("click", closeBox));
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeBox();
});
