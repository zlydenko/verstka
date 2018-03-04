(function() {
  const restaurantsSection = document.querySelector(".restaurants");
  const spinner = document.querySelector(".spinner");

  window.addEventListener("load", function() {
    spinner.style.display = "none";
    spinner.style.visibility = "hidden";
    restaurantsSection.classList.add("visible-animate");
    restaurantsSection.style.display = "block";
    restaurantsSection.style.visibility = "visible";
  });
})();
