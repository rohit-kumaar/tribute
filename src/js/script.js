/* This is a function that is listening for the DOM to be ready. */
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

const initApp = () => {
  headerScroll();
  loadShowPage();
  form();
  videoPlay();
};

// querySelectorAll function
function qsAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// querySelector function
function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

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
    const SCROLL_HEIGHT = 500;
    if (windowScrollY < SCROLL_HEIGHT) {
      header.classList.remove("scrollEffect");
    } else {
      header.classList.add("scrollEffect");
    }
  });
};

const showPage = (page) => {
  qsAll("h2.slider__header").forEach((sliderHeader) => {
    sliderHeader.style.display = "none";
  });

  qs(`#${page}`).style.display = "block";
};

const loadShowPage = () => {
  qsAll(".slider__item").forEach((sliderItem) => {
    sliderItem.onclick = function () {
      showPage(this.dataset.page);
    };
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

const videoPlay = () => {
  const videoPlay = qs(".video-play");
  const video = qs(".use__video");

  videoPlay.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
};
