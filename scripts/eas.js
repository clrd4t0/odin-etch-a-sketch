// All the querySelectors goes here
container = document.querySelector("#container");
createDivsButton = document.querySelector("#create-divs-btn");

// All eventListners goes here
createDivsButton.addEventListener("click", () => createCanvas());

function createCanvas() {
    let dimension;
    getInput:
    while(true) {
        dimension = prompt("Dimension?", "16");
        if (dimension !== NaN && dimension > 0 && dimension <= 100) {
            break getInput;
        } else {
            alert("Please input a number between 1 and 100.");
        }
    }
    container.textContent = "";
    let size = 70 / dimension;
    columnDimension = `width: ${size}vh`;
    rowDimension = `height: ${size}vh`;
    for (let j = 0; j < dimension; j++) {
        row = document.createElement("div");
        row.classList.add("row");
        row.style.cssText = rowDimension;
        for (let i = 0; i < dimension; i++) {
            column = document.createElement("div");
            column.classList.add("column");
            column.style.cssText = columnDimension;
            row.appendChild(column);
        }
        container.appendChild(row);
    }
    allDivs = document.querySelectorAll(".column");
    allDivs.forEach((div) => {
        div.addEventListener("mouseover", () => div.setAttribute("style", `background-color: aqua; ${columnDimension}`));
        div.addEventListener("click", () => div.setAttribute("style", `${columnDimension}`));
    })
}