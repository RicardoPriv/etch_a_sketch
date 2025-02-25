const DIMENSIONS = 10;

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
            
            console.log(gridChild.id);
            grid.appendChild(gridChild);
    }
}

function removeInnerBorders(grid, dimensionsOfGrid) {
    let borderStyle = "1px solid black";

    for (let i = 0; i < dimensionsOfGrid * dimensionsOfGrid; i++) {
        let cell = grid.children[i];
        cell.style.border = "0";

        if (i < dimensionsOfGrid) {
            cell.style.borderTop = borderStyle;
        }

        if (i % dimensionsOfGrid == 0) {
            cell.style.borderLeft = borderStyle;
        }

        if (i >= (dimensionsOfGrid * dimensionsOfGrid) - dimensionsOfGrid) {
            cell.style.borderBottom = borderStyle;
        }

        if ((i + 1) % dimensionsOfGrid == 0) {
            cell.style.borderRight = borderStyle;
        }
    }
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

    gridDivide(grid, DIMENSIONS);
    removeInnerBorders(grid, DIMENSIONS);
}