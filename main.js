const gridContainer = document.querySelector(".grid-container");

let slider = document.getElementById("myRange");
let output = document.getElementById("gridSize");
output.innerHTML = slider.value;

// for displaying the current number
slider.oninput = function () {
  output.innerHTML = this.value;
  console.log(slider.value);
};

const total = slider.value * slider.value;

slider.oninput = function () {
  gridContainer.textContent = "";
  output.innerHTML = this.value;
  console.log(slider.value);
};

slider.addEventListener("input", makeGrid);

function makeGrid() {
  for (let i = 0; i < total; i++) {
    const divBox = gridMaker("div", gridContainer);
  }

  gridContainer.style.setProperty(
    `grid-template-columns`,
    `repeat(${slider.value}, 1fr)`
  );
  gridContainer.style.setProperty(
    `grid-template-rows`,
    `repeat(${slider.value}, 1fr)`
  );
  console.log(slider.value);
  gridContainer.addEventListener("mouseover", write);
}

function gridMaker(boxType, parent) {
  const box = document.createElement("div");
  box.classList.add("grid-box");

  return parent.appendChild(box);
}

function write(e) {
  e.target.classList.add("grid-box-draw");
}
