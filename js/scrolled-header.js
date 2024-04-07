document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  let isScrolled = false;

  window.onscroll = function () {
    const scrollThreshold = 150;
    const unscrollThreshold = 50;
    if (window.scrollY > scrollThreshold && !isScrolled) {
      header.classList.add("header--scrolled");
      isScrolled = true;
    } else if (window.scrollY < unscrollThreshold && isScrolled) {
      header.classList.remove("header--scrolled");
      isScrolled = false;
    }
  };
});
