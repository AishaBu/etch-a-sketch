const grid = document.getElementById('grid');
let gridSize;

/*Checks if input value is between 2
and 100 and returns message if not*/
function checkInputValue(){

   /* less than 2 or greater than 100*/
    if (gridSize < 2 || gridSize > 100){
       
        let wrongInputResponse = document.getElementById('wrongInputResponse');
        wrongInputResponse.style.display = 'block';
        wrongInputResponse.style.color = 'red';
    }
    else {
        wrongInputResponse.style.display = 'none';
        createGrid();
    }
}


 /*Creates grid after user inputs grid size*/
function createGrid(){
  
        /*Creates grids*/
        let gridArea = gridSize * gridSize;

        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

        for( i = 0; i < gridArea; i++){
            let gridSquare = document.createElement('div');
            gridSquare.setAttribute('id', 'gridSquare');
            grid.insertAdjacentElement('beforeend', gridSquare);
        }
    }

/*Clears current grid and updates grid size*/
function updateGridSize(){
    gridSize = parseInt(document.getElementById('userNumberInput').value);
    grid.innerHTML = ''; //clears previous 
    checkInputValue();
}

/*Declare Event Listeners*/
const updateGridSizeBtn = document.getElementById('updateGridSizeBtn');
const colorModeBtn = document.getElementById('colorModeBtn');
const colorPicker = document.getElementById('colorPicker');
const colorPickerValue = document.getElementById('colorPicker').value;

/*Call Event Listeners*/
updateGridSizeBtn.addEventListener('click', updateGridSize); //update size of grid after grid change

//Show color picker when color mode button is clicked
colorModeBtn.addEventListener('click', () => {colorPicker.style.display = 'block';})

//sets grid to color picker choice 
colorPicker.addEventListener('input', () =>{

    /*Mouse Over Event, When cursor scrolls over grid, 
    will change color of squares to color picker choice*/
    grid.addEventListener('mouseover',(event) => {
        let colorChoice = document.getElementById('colorPicker').value;
    event.target.style.backgroundColor = colorChoice;
    })

});

//Hides color picker when if user dismisses color picker
colorPicker.addEventListener('change', () => {colorPicker.style.display = 'none';})

