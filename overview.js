`use strict`;

const btnTrauma = document.querySelector(`.trauma-info-card`);
const traumaModal = document.querySelector(`.trauma-center-modal`);
const allOverviewModals = document.querySelectorAll(`.about-us-modal`);

const openTraumaModal = () => {
  traumaModal.classList.add(`visible`);
  openModal();
};

const closeOverviewModal = () => {
  for (let each of allOverviewModals) {
    each.classList.remove("visible");
  }
  overlay.classList.remove("visible");
  btnClose.classList.remove("visible");
  body.style.overflowY = "scroll";
  body.style.overflow = "overlay";
};

btnTrauma.addEventListener(`click`, openTraumaModal);
overlay.addEventListener("click", closeOverviewModal);
btnClose.addEventListener("click", closeOverviewModal);
