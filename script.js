// current status:
// - new grid works, but needs to be stretched to fill the space that a 16x16 grid takes up
// 768 x 768

let container = document.querySelector(".gridContainer");
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

    let squareSize = 768 / squares;

    for (let i = 0; i < squares; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        rowContainer.appendChild(square);
    }
}

// turn squares red on mouse hover
container.addEventListener("mouseover", (e) => {
    let target = e.target;

    if (target.classList.contains("square")) {
        target.style.backgroundColor = "red";
    }
});

// when user clicks change grid button, remove current grid and
// create a new grid when the entered amount of squares per side
let changeGridBtn = document.querySelector("#changeGrid");
changeGridBtn.addEventListener("click", () => {
    removeGrid();

    let squaresPerSide = prompt("How many squares per side?", 16);
    while (true) {

        if (squaresPerSide > 100) {
            alert("Sorry, we don't have enough hamster-power to support over 100 squares per side. Please try again!\n₍ᵔ•ᴗ•ᵔ₎");
            squaresPerSide = prompt("How many squares per side?", 16);
            continue;
        }
        break;
    }
    createGrid(squaresPerSide);
});

function removeGrid() {
    container.textContent = "";
}