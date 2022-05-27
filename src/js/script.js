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
    const SCROLL_WIDTH = 770;
    if (windowScrollY < SCROLL_WIDTH) {
      header.classList.remove("scrollEffect");
    } else {
      header.classList.add("scrollEffect");
    }
  });
};

$(".owl-carousel").owlCarousel({
  loop: false,
  items: 6,
  dots: false,
  margin: 10,
  nav: true,

  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    576: {
      items: 6,
      nav: true,
    },
  },
});
