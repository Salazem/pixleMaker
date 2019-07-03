let gitSize = document.getElementById("sizePicker");
let gitColor = document.getElementById("colorPicker");
let gitCanvas = document.getElementById("pixelCanvas");
let inputHeight = document.getElementById("inputHeight");
let inputWidth = document.getElementById("inputWidth");

/* This function takes the value from the user,
assigns it to the height and width variables,
runs the makeGrid function and then reset every thing */
function sizing() {
    gitSize.addEventListener("submit", function() {
        document.getElementById("pixelCanvas").innerHTML = "";
        let height = inputHeight.value;
        let width = inputWidth.value;
        makeGrid(height, width);
        let height2 = inputHeight.value  = "";
        let width2 = inputWidth.value = "";
    });
}

/* This function create columns and rows then apply style 
(backgroundColor) to every indvidual cell */
function makeGrid(inputHeight, inputWidth) {
    for (let c = 1; c <= inputHeight; c++) {
        let addColumn = document.createElement("tr");
        gitCanvas.appendChild(addColumn);
        for (let r = 1; r <= inputWidth; r++) {
            let addCell = document.createElement("td");
            addColumn.appendChild(addCell);
            addCell.addEventListener("click", function() {
                addCell.style.backgroundColor = gitColor.value;
            });
        }
    }
}

sizing();
