

//  Mobile Slider for products //
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const items = document.querySelectorAll(".offers");
  let currentIndex = 0;

  // function to update slider display !
  function updateSlider() {
    items.forEach((cartElement) => (cartElement.style.display = "none"));
    items[currentIndex].style.display = "block";
  }

  // verify that screen is correct !
  function isMobile() {
    return window.matchMedia("(max-width: 786px)").matches;
  }

  // for the previous button !
  prevButton.addEventListener("click", function () {
    if (isMobile()) {
      // Verify that we are in mobile screen (mobile)
      if (currentIndex === 0) {
        currentIndex = items.length - 1;
      } else {
        currentIndex--;
      }
      updateSlider();
    }
  });

  // for the next button !
  nextButton.addEventListener("click", function () {
    if (isMobile()) {
      // Verify that we are in mobile screen again (mobile)
      if (currentIndex === items.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateSlider();
    }
  });

  // Initialize the slider if we are in mobile screen !
  if (isMobile()) {
    updateSlider();
  } else {
    items.forEach((cartElement) => (cartElement.style.display = "block"));
  }
});
//  Mobile Slider for products //
