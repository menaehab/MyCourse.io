document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelector(".loader-container").style.display = "none";
  }, 1500);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    ScrollReveal().reveal(".top-effect", {
      duration: 1000,
      opacity: 0,
      distance: "50px",
      easing: "ease-in-out",
      origin: "top",
      delay: 200
    });
  }, 1200);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    ScrollReveal().reveal(".fade-effect", {
      duration: 1000,
      opacity: 0,
      distance: 0,
      easing: "ease-in-out",
      origin: "top",
      delay: 200
    });
  }, 1200);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    ScrollReveal().reveal(".left-effect", {
      duration: 1000,
      opacity: 0,
      distance: "80px",
      easing: "ease-out",
      origin: "left",
      delay: 200
    });
  }, 1200);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    ScrollReveal().reveal(".right-effect", {
      duration: 1000,
      opacity: 0,
      distance: "80px",
      easing: "ease-out",
      origin: "right",
      delay: 200
    });
  }, 1200);
});
