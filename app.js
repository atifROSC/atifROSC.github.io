"use strict";

// PARALLAX //

const parallax1 = document.querySelector(`.section-hero`);
const parallax2 = document.querySelector(".parallax-bg span");

const parallaxEffect = () => {
  let offset = window.pageYOffset;
  parallax1.style.backgroundPositionY = `${offset * 0.2}px`;
  // parallax2.style.backgroundPositionY = `${offset * 0.8}px`;
};

window.addEventListener("scroll", parallaxEffect);

////////////////////
// GENERAL MODALS //
////////////////////

const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-icon");
const body = document.querySelector("body");
const allModals = document.querySelectorAll(".modal");

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
//   body.style.overflowY = "scroll";
  body.style.overflowY = "overlay";
};

overlay.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

////////////////////////////
// PROCEDURE VIDEO MODALS //
////////////////////////////

const btnPacerVideo = document.querySelector(`.wire-video-card`);
const btnBoxVideo = document.querySelector(`.box-video-card`);
const btnAccessVideo = document.querySelector(`.access-video-card`);
const modalPacerVideo = document.querySelector(`.wire-video-container`);
const modalBoxVideo = document.querySelector(`.box-video-container`);
const modalAccessVideo = document.querySelector(`.access-video-container`);

const openPacerVideoHandler = () => {
  modalPacerVideo.classList.add("visible");
  openModal();
};
const openBoxVideoHandler = () => {
  modalBoxVideo.classList.add("visible");
  openModal();
};
const openAccessVideoHandler = () => {
  modalAccessVideo.classList.add("visible");
  openModal();
};

btnPacerVideo.addEventListener("click", openPacerVideoHandler);
btnBoxVideo.addEventListener("click", openBoxVideoHandler);
btnAccessVideo.addEventListener("click", openBoxVideoHandler);

//////////////////////
// GUIDELINE MODALS //
//////////////////////

const btnDkaFeaturedGuideline = document.querySelector(
  ".dka-featured-guideline"
);
const btnEtohFeaturedGuideline = document.querySelector(
  ".etoh-withdrawal-featured-guideline"
);
const btnAbxFeaturedGuideline = document.querySelector(
  ".empiric-abx-featured-guideline"
);

const dkaModal = document.querySelector(".dka-guideline-modal");
const etohModal = document.querySelector(".etoh-withdrawal-guideline-modal");
const abxModal = document.querySelector(".empiric-abx-guideline-modal");

const openDkaHandler = () => {
  dkaModal.classList.add("visible");
  openModal();
};

const openEtohHandler = () => {
  etohModal.classList.add("visible");
  openModal();
};

const openAbxHandler = () => {
  abxModal.classList.add("visible");
  openModal();
};

btnDkaFeaturedGuideline.addEventListener("click", openDkaHandler);
btnEtohFeaturedGuideline.addEventListener("click", openEtohHandler);
btnAbxFeaturedGuideline.addEventListener("click", openAbxHandler);
