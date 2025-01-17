let container = document.querySelector("div");
createGrid();

// creating the 16x16 square grid
function createGrid() {
    for (let i = 0; i < 16; i++) {
        create16Squares();
    }
}

// create one row of 16 squares
function create16Squares() {
    let rowContainer = document.createElement("div");
    rowContainer.classList.add("rowContainer")
    container.appendChild(rowContainer);

    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        rowContainer.appendChild(square);
    }
}


container.addEventListener("mouseover", (e) => {
    let target = e.target;

    if (target.classList.contains("square")) {
        target.classList.add("hovered");
    }
});
