// creating the 16x16 square grid
let container = document.querySelector("div");






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


create16Squares();
