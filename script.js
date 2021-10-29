"use strict";

const modalBox = document.querySelectorAll(".modal-box");
const modalBoxAnchor = document.querySelectorAll(".modal-box-anchor");
const closeBoxBtn = document.querySelectorAll(".close-box");
const overlay = document.querySelector(".overlay");
const goUp = document.querySelector(".go-up");

// Sotore data from the clicked project
let clickedProject = "";

//Display clicked modal-box and overlay
modalBoxAnchor.forEach((box) =>
  box.addEventListener("click", function (e) {
    clickedProject = e.target.dataset.project;
    document.getElementById(clickedProject).classList.remove("hidden");
    overlay.classList.remove("hidden");
    history.pushState({ clickedProject }, ``, `./selected=${clickedProject}`);
    // window.scrollTo(0, 0);
  })
);

// Close box and overlay when clicked on X
const closeBox = function () {
  overlay.classList.add("hidden");
  modalBox.forEach((box) => box.classList.add("hidden"));
  history.pushState({}, ``, `./`);
};

// Close box and overlay when Esc is pressed
closeBoxBtn.forEach((btn) => btn.addEventListener("click", closeBox));
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeBox();
});

//go up on click
goUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("popstate", (e) => {
  const path = window.location.pathname;

  if (path.startsWith("/selected")) {
    history.pushState({}, ``, `./`);
  }
  closeBox();
});
