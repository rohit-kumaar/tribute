/* This is a function that is listening for the DOM to be ready. */
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

const initApp = () => {
  model();
  form();
  headerScroll();
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

const form = () => {
  const footerForm = qs("#footerForm");
  footerForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};

const headerScroll = () => {
  window.addEventListener("scroll", () => {
    const header = qs(".header");
    const windowScrollY = window.scrollY;
    console.log("windowScrollY", windowScrollY);
    const SCROLL_WIDTH = 770;
    if (windowScrollY < SCROLL_WIDTH) {
      header.classList.remove("active");
    } else {
      header.classList.add("active");
    }
  });
};
