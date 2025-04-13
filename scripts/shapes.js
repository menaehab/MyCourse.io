document.addEventListener("DOMContentLoaded", () => {
  let dotGrids = document.querySelectorAll(".dot-grid");
  dotGrids.forEach((dotGrid) => {
    for (let i = 0; i < 77; i++) {
      dotGrid.innerHTML += '<div class="dot"></div>';
    }
  });
});
