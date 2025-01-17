let container = document.querySelector("div");
createGrid();

// creating the 16x16 square grid
function createGrid(squaresPerSide = 16) {
    for (let i = 0; i < squaresPerSide; i++) {
        createSquares(squaresPerSide);
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

// turn squares red on mouse hover
container.addEventListener("mouseover", (e) => {
    let target = e.target;

    if (target.classList.contains("square")) {
        target.classList.add("hovered");
    }
});

let changeGridBtn = document.querySelector("#changeGrid");
changeGridBtn.addEventListener("click", (e) => {
    removeGrid();

    let squaresPerSide = prompt("How many squares per side?", 16);
    createGrid(squaresPerSide);
});

function removeGrid() {
    container.innerHTML = "";
}