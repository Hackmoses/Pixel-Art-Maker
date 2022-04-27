// Select color input

// Select size input
const sizePicker = document.querySelector("#sizePicker");
const canvas = document.querySelector("#pixelCanvas")
const gridHeight = document.querySelector("#inputHeight");
const gridWidth = document.querySelector("#inputWidth");
const resetAll = document.querySelector("#reset_all");

// When size is submitted by the user, call makeGrid()

sizePicker.addEventListener("submit", function(e){
    e.preventDefault();
    clearCanvas()
    makeGrid()
})

function makeGrid() {

// Your code goes here!
    for (let i = 1; i < gridHeight.value; i++) {
        const row = document.createElement("tr");
        pixelCanvas.appendChild(row);
        for (let j= 1; j < gridWidth.value; j++) {
            const column = document.createElement("td");
            row.appendChild(column)
            column.addEventListener("mousedown", colorPickerChange)
        }
        
    }

};

// Calling a funcction to fill color to the selected clicked cell
function colorPickerChange(){
    const colorInput = document.querySelector("#colorPicker").value;
    this.style.backgroundColor = colorInput;
};

//Function to clear canvas after every grid size is chosen
function clearCanvas(){
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild)
    }
};

resetAll.addEventListener("click", function(e){
    e.preventDefault();
    gridHeight.value = "";
    gridWidth.value = "";
    document.querySelector("#colorPicker").value = "";
    clearCanvas();
})
