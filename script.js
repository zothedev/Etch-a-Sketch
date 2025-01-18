// todo:
// highlight current pen color by adding a thick border around the button
// layout buttons nicely
// add a clear button
// theme the website "fizz's sketchbook"

let container = document.querySelector(".gridContainer");
createGrid();
let pen = "rainbow";
let penOn = true;


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

let mainContainer = document.querySelector(".main");
mainContainer.addEventListener("mousedown", (e) => {
    if (e.button == 2) {
        console.log("inoff");
        penOn = false;
    }
});
mainContainer.addEventListener("mouseup", (e) => {
    if (e.button == 2) {
        console.log("inoff");
        penOn = true;
    }
});
// change square color on mouse hover
container.addEventListener("mouseover", (e) => {
    let target = e.target;
    // rainbow, red, blue, green, yellow, orange, purple, black, white


    if (target.classList.contains("square") && (penOn)) {
        if (pen == "rainbow") {
            target.style.backgroundColor =
                `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
        } else if (pen == "red") {
            target.style.backgroundColor = `red`;
        } else if (pen == "blue") {
            target.style.backgroundColor = `blue`;
        } else if (pen == "green") {
            target.style.backgroundColor = `green`;
        } else if (pen == "yellow") {
            target.style.backgroundColor = `yellow`;
        } else if (pen == "orange") {
            target.style.backgroundColor = `orange`;
        } else if (pen == "purple") {
            target.style.backgroundColor = `purple`;
        } else if (pen == "black") {
            target.style.backgroundColor = `black`;
        } else if (pen == "white") {
            target.style.backgroundColor = `white`;
        }

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

// clears the grid on button press
let clearGridButton = document.querySelector("#clearButton");
clearGridButton.addEventListener("click", () => {
    let squares = document.querySelectorAll(".square");
    for (let square of squares) {
        square.style.backgroundColor = "white";
    }
});

// returns a random number between 0 - 255 (inclusive)
function randomRGB() {
    return Math.floor(Math.random() * 256);
}

// change pen color
let header = document.querySelector(".header");
header.addEventListener("click", (e) => {
    let target = e.target;

    if (target.id === "rainbowButton") {
        pen = "rainbow";
    } else if (target.id === "redButton") {
        pen = "red";
    } else if (target.id === "blueButton") {
        pen = "blue";
    } else if (target.id === "greenButton") {
        pen = "green";
    } else if (target.id === "yellowButton") {
        pen = "yellow";
    } else if (target.id === "orangeButton") {
        pen = "orange";
    } else if (target.id === "purpleButton") {
        pen = "purple";
    } else if (target.id === "blackButton") {
        pen = "black";
    } else if (target.id === "whiteButton") {
        pen = "white";
    }
});