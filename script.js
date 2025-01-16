createGrid();

// creating the 16x16 square grid
function createGrid() {
    for (let i = 0; i < 16; i++) {
        create16Squares();
    }
}

// create one row of 16 squares
function create16Squares() {
    let container = document.querySelector("div");
    let rowContainer = document.createElement("div");
    rowContainer.classList.add("rowContainer")
    container.appendChild(rowContainer);

    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        rowContainer.appendChild(square);
    }
}


