const gridContainer = document.querySelector(".grid-container");
let x = 100;
let y = 100;
let grid = { x, y };
const total = grid.x * grid.y;

document.addEventListener("DOMContentLoaded", makeGrid);

function makeGrid() {
  //makes the boxes
  for (let i = 0; i < total; i++) {
    const divBox = gridMaker("div", gridContainer);
  }
  gridContainer.style.setProperty(
    `grid-template-columns`,
    `repeat(${grid.x}, 1fr)`
  );
  gridContainer.addEventListener('mouseover', write)
}

function gridMaker(boxType, parent) {
  //
  const box = document.createElement("div");
  box.classList.add("grid-box");

  return parent.appendChild(box);
}

function write(e) {
  e.target.classList.add("grid-box-draw");
}
