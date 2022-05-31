////////////////////
// GENERAL MODALS //
////////////////////

const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-icon");
const body = document.querySelector("body");
const allModals = document.querySelectorAll(".modal");
const video = document.querySelectorAll(".video");

const openModal = () => {
  overlay.classList.add("visible");
  btnClose.classList.add("visible");
  body.style.overflow = "hidden";
};

const closeModal = () => {
  for (let each of allModals) {
    each.classList.remove("visible");
  }
  overlay.classList.remove("visible");
  btnClose.classList.remove("visible");
  body.style.overflowY = "scroll";
  body.style.overflow = "overlay";
};

overlay.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);
