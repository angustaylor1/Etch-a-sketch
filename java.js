

function buildGrid() {
    const rowContainer = document.createElement("div");
    rowContainer.setAttribute("style", "display: flex;")
    for (i = 0; i < 16; i++) {
        const rowDiv = document.createElement("div")
        rowDiv.setAttribute("style", "width: 100px; height: 100px;")
        rowContainer.appendChild(rowDiv)
    }
}

