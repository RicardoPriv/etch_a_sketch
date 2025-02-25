window.onload = function main() {
    console.log("hello world");

    let sketch = document.querySelector(".sketch");
    let grid = document.createElement("div");
    
    grid.id = "sketchpad";
    grid.style.border = "2px solid black";
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
}