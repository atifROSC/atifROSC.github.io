/////////////////////////
// PASSWORD PROTECTION //
/////////////////////////

const formBoxModal = document.querySelector(".form-box");
const btnOpenModal = document.querySelector(".link-text");
const btnEntry = document.querySelector(`.btn`);
const passwordInput = document.getElementById(`password`);

const showFormBoxHandler = () => {
  formBoxModal.classList.add("visible");
};

const enterSiteHandler = () => {
  if (passwordInput.value == `password`) {
    return true;
  } else {
    alert(`Incorrect! Try again...`);
    return false;
  }
};

btnOpenModal.addEventListener(`click`, showFormBoxHandler);
