

function buildGrid() {
    const rowContainer = document.createElement("div");
    const grid = document.querySelector("#container")
    rowContainer.setAttribute("style", "display: flex;")
    for (i = 0; i < 16; i++) {
        const rowDiv = document.createElement("div")
        rowDiv.setAttribute("style", "min-width: 50px; min-height: 50px;")
        rowContainer.appendChild(rowDiv)
        grid.appendChild(rowContainer)
    }}


buildGrid()

