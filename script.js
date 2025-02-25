let gridlines = true;
let randomColors = false;
let RGB = "rgb(0, 0, 0)";

function gridDelete(grid) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    grid.style.gridTemplateColumns = "";
    grid.style.gridTemplateRows = "";
}

function gridDivide(grid, dimensionsOfGrid) {
    if (dimensionsOfGrid > 100) {
        return -1;
    }

    grid.style.display = "grid";
    const cellSize = Math.floor(parseInt(grid.style.width) / dimensionsOfGrid);

    grid.style.gridTemplateColumns = `repeat(${dimensionsOfGrid}, ${cellSize}px)`;
    grid.style.gridTemplateRows = `repeat(${dimensionsOfGrid}, ${cellSize}px)`;

    for (let i = 0; i < dimensionsOfGrid * dimensionsOfGrid; i++) {
            let gridChild = document.createElement("div");
            gridChild.id = ("Cell" + i);
            gridChild.style.border = "1px solid black";
            gridChild.style.backgroundColor = "white";
            
            //console.log(gridChild.id);
            grid.appendChild(gridChild);
    }

    if (!gridlines) {
        removeInnerBorders(grid);
    }

    for (let i = 0; i < grid.children.length; i++) {
        grid.children[i].addEventListener("mouseover", function(e) {
            if (randomColors) {RGB = randomRGB();}
            e.target.style.backgroundColor = RGB;    
        })
    }
}

function removeInnerBorders(grid) {
    let borderStyle = "1px solid black";
    let dimensionOfGrid = grid.children.length;
    let sqrtDimension = Math.sqrt(dimensionOfGrid);

    for (let i = 0; i < dimensionOfGrid; i++) {
        let cell = grid.children[i];
        cell.style.border = "0";

        if (i < sqrtDimension) {
            cell.style.borderTop = borderStyle;
        }

        if (i % sqrtDimension == 0) {
            cell.style.borderLeft = borderStyle;
        }

        if (i >= dimensionOfGrid - sqrtDimension) {
            cell.style.borderBottom = borderStyle;
        }

        if ((i + 1) % sqrtDimension == 0) {
            cell.style.borderRight = borderStyle;
        }
    }
}

function addInnerBorders(grid) {
    for (let i = 0; i < grid.children.length; i++) {
        grid.children[i].style.border = "1px solid black";
    }
}

function clearGrid(grid) {
    for (let i = 0; i < grid.children.length; i++) {
        grid.children[i].style.backgroundColor = "white";
    }
}

function randomRGB() {
    let red = (Math.random() * 1000) % 255;
    let blue = (Math.random() * 1000) % 255;
    let green = (Math.random() * 1000) % 255;
    return "rgb(" + red + ", " + blue + ", " + green + ")"; 
}

function eraseColor() {
    randomColors = false;
    RGB = "rgb(255, 255, 255)";
}

window.onload = function main() {
    console.log("hello world");

    let sketch = document.querySelector(".sketch");
    let grid = document.createElement("div");
    
    grid.id = "sketchpad";
    grid.style.border = "0";
    grid.style.width = "400px";
    grid.style.height = "400px";

    sketch.appendChild(grid);
    sketch.style.display = "flex";
    sketch.style.gap = "64px";
    sketch.style.justifyContent = "center";
    sketch.style.alignItems = "center";

    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.justifyContent = "space-between";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";

    let slider = document.querySelector("#slider");
    let sliderValue = document.querySelector("#slider-value");

    gridDivide(grid, 10);

    slider.addEventListener("input", function () {
        let value = slider.value;
        sliderValue.innerText = `${value}x${value}`;
        gridDelete(grid);
        gridDivide(grid, value);
    })
    
    document.querySelector("#random-colors").addEventListener("click", function() {
        randomColors = true;    
    })

    document.querySelector("#black-button").addEventListener("click", function() {
        randomColors = false;
        RGB = "rgb(0, 0, 0)";
    })

    for (let i = 0; i < grid.children.length; i++) {
        grid.children[i].addEventListener("mouseover", function(e) {
            if (randomColors) {RGB = randomRGB();}
            e.target.style.backgroundColor = RGB;    
        })
    }

    document.querySelector("#gridlines").addEventListener("click", function() {
        if (gridlines) {
            removeInnerBorders(grid);
            gridlines = false;
        }
        else {
            addInnerBorders(grid);
            gridlines = true;
        }
    })

    document.querySelector("#eraser").addEventListener("click", function() {
        eraseColor();
    })

    document.querySelector("#clear-grid").addEventListener("click", function() {
        clearGrid(grid);    
    })
}

