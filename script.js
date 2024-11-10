

//  Mobile Slider for products //
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const items = document.querySelectorAll(".offers");
  let currentIndex = 0;

  // Fonction pour mettre à jour l'affichage du slider
  function updateSlider() {
    items.forEach((cartElement) => (cartElement.style.display = "none"));
    items[currentIndex].style.display = "block";
  }

  // Vérifie si l'écran est dans la plage de taille que tu souhaites
  function isMobile() {
    return window.matchMedia("(max-width: 786px)").matches;
  }

  // Clic sur le bouton précédent
  prevButton.addEventListener("click", function () {
    if (isMobile()) {
      // Vérifier si l'écran est petit (mobile)
      if (currentIndex === 0) {
        currentIndex = items.length - 1;
      } else {
        currentIndex--;
      }
      updateSlider();
    }
  });

  // Clic sur le bouton suivant
  nextButton.addEventListener("click", function () {
    if (isMobile()) {
      // Vérifier si l'écran est petit (mobile)
      if (currentIndex === items.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateSlider();
    }
  });

  // Initialisation du slider uniquement si l'écran est mobile
  if (isMobile()) {
    updateSlider();
  } else {
    items.forEach((cartElement) => (cartElement.style.display = "block"));
  }
});
//  Mobile Slider for products //
