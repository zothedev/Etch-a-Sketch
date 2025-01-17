let container = document.querySelector("div");
createGrid();

// creating the 16x16 square grid
function createGrid(rows = 16) {
    for (let i = 0; i < rows; i++) {
        createSquares(rows);
    }
}

// create one row of  squares
function createSquares(squares = 16) {
    let rowContainer = document.createElement("div");
    rowContainer.classList.add("rowContainer")
    container.appendChild(rowContainer);

    for (let i = 0; i < squares; i++) {
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

