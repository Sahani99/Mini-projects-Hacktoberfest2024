const GRIDSIDE = 600;
let sqperside = 16;

const sketchArea = document.querySelector("#sketch-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");
sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;


function changeBackgroundColor(){
    this.style.backgroundColor="black";
}


function createGridCells(sqperside){
    for(let i = 0; i < sqperside*sqperside;i++){
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(GRIDSIDE / sqperside) - 2}px`;
        gridCell.style.height = `${(GRIDSIDE / sqperside) - 2}px`;

        gridCell.classList.add("cell");


        sketchArea.appendChild(gridCell);
        gridCell.addEventListener("mouseover", changeBackgroundColor)
    }
}


createGridCells(16);

function removeGridCells(){
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild)
    }
}

slider.oninput = function() {
    sqperside = this.value;
    let txt = `${sqperside} x ${sqperside} (Resolution)`
    sliderValue.innerHTML=txt;
    removeGridCells();
    createGridCells(sqperside);
}