let gridlines = 1;
let randomColors = false;
let RGB = "rgb(0, 0, 0)";

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

window.onload = function main() {
    console.log("hello world");

    let sketch = document.querySelector(".sketch");
    let grid = document.createElement("div");
    
    grid.id = "sketchpad";
    grid.style.border = "0";
    grid.style.width = "200px";
    grid.style.height = "200px";

    sketch.appendChild(grid);
    sketch.style.display = "flex";
    sketch.style.gap = "16px";
    sketch.style.justifyContent = "center";
    sketch.style.alignItems = "center";

    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.justifyContent = "space-between";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";

    gridDivide(grid, 10);
    
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
        if (gridlines == 1) {
            removeInnerBorders(grid);
            gridlines = 0;
        }
        else {
            addInnerBorders(grid);
            gridlines = 1;
        }
    })

    document.querySelector("#clear-grid").addEventListener("click", function() {
        clearGrid(grid);    
    })
}

