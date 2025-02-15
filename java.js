function buildRow(rowNum) {
    const row = document.createElement("div")
    row.setAttribute("class", "row-container")
    const container = document.querySelector("#container")
    for (i = 0; i < rowNum; i++) {
        const div = document.createElement("div");
        div.setAttribute("style", "min-height: 30px; min-width: 30px;")
        div.setAttribute("class", "cell")
        row.appendChild(div)
        row.setAttribute("style", "display: flex;")
        container.appendChild(row)
    }
}

let row = 16
let column = 16

let grid = row * column

buildRow(grid)

