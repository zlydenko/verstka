(function() {
  const restaurantsSection = document.querySelector(".restaurants");
  const spinner = document.querySelector(".spinner");
  const footer = document.querySelector(".main-footer");

  window.addEventListener("load", function() {
    spinner.style.display = "none";
    spinner.style.visibility = "hidden";
    restaurantsSection.classList.add("visible-animate");
    restaurantsSection.style.display = "block";
    restaurantsSection.style.visibility = "visible";
    footer.classList.add("visible-animate");
    footer.style.display = "block";
    footer.style.visibility = "visible";
  });
})();
