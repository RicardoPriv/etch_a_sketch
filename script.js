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
    
}