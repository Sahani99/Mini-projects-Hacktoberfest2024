const GRIDSIDE = 600;
let sqperside = 16;

const sketchArea = document.querySelector("#sketch-area");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

function changeBackgroundColor() {
    this.style.backgroundColor = "black";
}

function createGridCells(sqperside) {
    removeGridCells();
    sketchArea.style.width = `${GRIDSIDE / sqperside * sqperside}px`;
    sketchArea.style.height = `${GRIDSIDE / sqperside * sqperside}px`;

    sketchArea.style.gridTemplateColumns = `repeat(${sqperside}, 1fr)`;
    sketchArea.style.gridTemplateRows = `repeat(${sqperside}, 1fr)`;

    for (let i = 0; i < sqperside * sqperside; i++) {
        const gridCell = document.createElement("div");
        gridCell.style.width = `${GRIDSIDE / sqperside}px`;
        gridCell.style.height = `${GRIDSIDE / sqperside}px`;

        gridCell.classList.add("cell");
        sketchArea.appendChild(gridCell);
        gridCell.addEventListener("mouseover", changeBackgroundColor);
    }
}

function removeGridCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}
createGridCells(sqperside);

slider.oninput = function () {
    sqperside = this.value;
    sliderValue.innerHTML = `${sqperside} x ${sqperside} (Resolution)`;
    createGridCells(sqperside); 
}
