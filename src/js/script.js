/* This is a function that is listening for the DOM to be ready. */
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

const initApp = () => {
  model();
};

// querySelectorAll function
function qsAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// querySelector function
function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

const model = () => {
  const modal = qs("#modal");
  const openModal = qs("#openModal");
  const closeModal = qs("#closeModal");

  openModal.addEventListener("click", () => {
    modal.showModal();
  });

  closeModal.addEventListener("click", () => {
    modal.close();
  });
};
