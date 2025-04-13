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

// Scroll to top button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}