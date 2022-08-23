const grid = document.getElementById('grid');
let gridSize;

function defaultGrid(){
    grid.innerHTML = ''; //clears previous grid
    gridSize = parseInt(16);
    
    grid.addEventListener('mousedown', (event) => {
         event.target.style.backgroundColor = 'black'; 
    })
        
    grid.style.backgroundColor = 'white';
    createGrid();

}
defaultGrid();


/*Checks if input value is between 2
and 100 and returns message if not*/
function checkInputValue(){
   
   /* less than 2 or greater than 100 or input value is not a number*/
    if (gridSize < 2 || gridSize > 100 || isNaN(gridSize) ){
        defaultGrid(); //shows default grid in no input value is entered;
        let wrongInputResponse = document.getElementById('wrongInputResponse'); //shows message asking to input a number between 2 and 100.
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
            grid.appendChild(gridSquare);
        }
    }

/*Clears current grid and updates grid size*/
function updateGridSize(){
  
    gridSize = parseInt(document.getElementById('userNumberInput').value);
    grid.innerHTML = ''; //clears previous grid
    checkInputValue();
}

/*Rainbow Color Grid*/
function createRainbowGridColors(){

     grid.addEventListener('mousedown', (event) => {

            const randomBetween = (min,max) => min + Math.floor(Math.random()*(max -min +1));
            const red = randomBetween(0, 255);
            const green = randomBetween(0, 255);
            const blue = randomBetween(0, 255);
            const rainbowColors = `rgb(${red}, ${blue}, ${green})`;

            event.target.style.backgroundColor = rainbowColors;
        })
}


/*Will show color picker choice on grid*/
function pickColor(){
   
    /*Mouse Over Event, When cursor scrolls over grid, 
    will change color of squares to color picker choice*/
        grid.addEventListener('mousedown',(event) => {
           
                let colorChoice = document.getElementById('colorPicker').value;
                event.target.style.backgroundColor = colorChoice;  
        })  
}

/*Clear Entire Grid Function*/
function clearEntireGrid(){
    
    /*Should clear specific square when clicked*/
     grid.childNodes.forEach((child) =>
     child.style.backgroundColor = 'white')

     grid.style.backgroundColor = 'white';
}


/*Erase Specific Square in Grid Function*/
function eraseGridSquare(){
    /*Should clear specific square when clicked*/
    grid.addEventListener('dblclick', (event) =>{
        event.target.style.backgroundColor = 'white'
    })
}


/*Declare Event Listeners*/
const updateGridSizeBtn = document.getElementById('updateGridSizeBtn');
const colorModeBtn = document.getElementById('colorModeBtn');
const colorPicker = document.getElementById('colorPicker');
const colorPickerValue = document.getElementById('colorPicker').value;
const rainbowModeBtn = document.getElementById('rainbowModeBtn');
const eraserModeBtn = document.getElementById('eraserModeBtn');
const clearGridModeBtn = document.getElementById('clearEntireGridModeBtn');
const resetGridSizeBtn = document.getElementById('resetGridSizeBtn');

/*Call Event Listeners*/
updateGridSizeBtn.addEventListener('click', updateGridSize); //update size of grid after grid change
rainbowModeBtn.addEventListener('click', createRainbowGridColors);//will create grid divs with randomized colors
eraserModeBtn.addEventListener('click', eraseGridSquare); //Erase specific grid square when clicked
clearGridModeBtn.addEventListener('click', clearEntireGrid); //Clears entire grid when clicked
resetGridSizeBtn.addEventListener('click', defaultGrid); //set grid to default grid size when clicked

colorModeBtn.addEventListener('click', () => {colorPicker.style.display = 'block';});//Shows color picker when color mode button mouse is hover over
window.addEventListener('mouseup', () => {colorPicker.style.display = 'none'}); //Hides color picker if user clicks outside of color picker
colorPicker.addEventListener('input', pickColor); //sets grid to color picker choice 

