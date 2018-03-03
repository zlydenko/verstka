(function() {
  const btn = document.querySelector(".scroll-to-top");
  const restaurantsSection = document.querySelector(".restaurants");
  const spinner = document.querySelector(".spinner");
  const startingPoint = 350;

  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > startingPoint ||
      document.documentElement.scrollTop > startingPoint
    ) {
      btn.style.display = "flex";
      btn.classList.add("visible-animate");
    } else {
      btn.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  window.addEventListener("load", function() {
    spinner.style.display = "none";
    spinner.style.visibility = "hidden";
    restaurantsSection.classList.add("visible-animate");
    restaurantsSection.style.display = "block";
    restaurantsSection.style.visibility = "visible";
  });
  btn.addEventListener("click", topFunction);
})();
