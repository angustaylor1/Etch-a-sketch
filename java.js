

function buildRow() {
    for (i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.setAttribute("style", "height: 50px; width: 50ps;")
        const row = document.createElement("div")
        row.setAttribute("class", "row-container");
        row.appendChild(div)
    }
    return row
}

function buildGrid() {
    for (i = 0; i < 16; i++) {
        const newRow = buildRow()
        const container = document.querySelector("#container")
        container.appendChild(newRow)
    }
}

