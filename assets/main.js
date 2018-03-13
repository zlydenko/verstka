(function() {
  const btn = document.querySelector(".scroll-to-top");
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

  btn.addEventListener("click", topFunction);
})();
