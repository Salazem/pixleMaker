let gitSize = document.getElementById("sizePicker");
let gitColor = document.getElementById("colorPicker");
let gitCanvas = document.getElementById("pixelCanvas");
let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;

function sizing() {
    gitSize.addEventListener("submit", function() {
        document.getElementById("pixelCanvas").innerHTML = "";
        let height = document.getElementById("inputHeight").value;
        let width = document.getElementById("inputWidth").value;
        makeGrid(height, width);
        let resetHeight = document.getElementById("inputHeight").value = "";
        let resetWidth = document.getElementById("inputWidth").value = "";
    });
}

function makeGrid(height, width) {
    for (let c = 1; c <= height; c++) {
        let addColumn = document.createElement("tr");
        gitCanvas.appendChild(addColumn);
        for (let r = 1; r <= width; r++) {
            let addCell = document.createElement("td");
            addColumn.appendChild(addCell);
            addCell.addEventListener("click", function() {
                addCell.style.backgroundColor = gitColor.value;
            });
        }
    }
}

sizing();
