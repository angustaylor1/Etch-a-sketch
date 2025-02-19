function buildGrid(num) {
    if (parseInt(num) < 1 || parseInt(num) > 100) {
        prompt("Invalid Input. Input number between 1 and 100")
        getNumber()
    }

    grid = num * num


    for (i = 0; i < grid; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "cell");
        div.setAttribute("style", `height: ${800/num}px; width: ${800/num}px;`);
        gridContainer.appendChild(div);
    }
}

function getNumber() {
    let number = prompt("Enter new grid size:")
    return number
}


function defaultGrid(num) {
    buildGrid(num)
}

function randomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return (`rgba(${r}, ${g}, ${b})`)
}

const mainContainer = document.querySelector("#container")
const gridContainer = document.createElement("div");
gridContainer.setAttribute("style", "width: 800px; height: 800px; display: flex; flex-direction: column;")
gridContainer.setAttribute("class", "grid-container")
mainContainer.appendChild(gridContainer)
defaultGrid(16)
gridContainer.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = randomColor()
})


const buttonContainer = document.createElement("div")
buttonContainer.setAttribute("class", "button-container")
const newButton = document.createElement("button")
newButton.textContent = "Click me!"
buttonContainer.appendChild(newButton)
document.body.insertBefore(buttonContainer, mainContainer)


newButton.addEventListener("click", (e) => {
    document.querySelector(".grid-container").innerHTML = ""
    buildGrid(getNumber())
})

