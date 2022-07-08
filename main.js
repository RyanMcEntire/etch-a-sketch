const gridContainer = document.querySelector(".grid-container");
let x = 80;
let y = 80;
let grid = { x, y };
const total = grid.x * grid.y;

document.addEventListener("DOMContentLoaded", makeGrid);

function makeGrid() {
  for (let i = 0; i < total; i++) {
    const html = ``;
    const divBox = gridMaker("div", gridContainer, html);
    console.log("div", gridContainer, html)
  }
  gridContainer.style.setProperty(
    `grid-template-columns`,
    `repeat(${grid.x}, 1fr)`
  );
}

function gridMaker(eleType, parent, html,) {
  const box = document.createElement("div");
  box.innerHTML = html;
  
  return parent.appendChild(box).className = "grid-box";
}
