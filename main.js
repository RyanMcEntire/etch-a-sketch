const gridContainer = document.querySelector(".grid-container");
let x = 4;
let y = 4;
let grid = { x, y };
const total = grid.x * grid.y;
document.addEventListener("DOMContentLoaded", makeGrid);
function makeGrid() {
  for (let i = 0; i < total; i++) {
    const html = `${i + 1}`;
    const divBox = gridMaker("div", gridContainer, html);
  }
  gridContainer.style.setProperty(
    `grid-template-columns`,
    `repeat(${grid.y},1fr)`
  );
}

function gridMaker(boxType, gridContainer, html) {
  const box = document.createElement("div");
  box.innerHTML = html;
  return gridContainer.appendChild(box);
}
