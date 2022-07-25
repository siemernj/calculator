const currentDisplay = document.querySelector('[data-current]');
const previousDisplay = document.querySelector('[data-previous]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const numberButtons = document.querySelectorAll('[data-number]');
const operandButtons = document.querySelectorAll('[data-operand]');
const equalButton = document.querySelector('[data-equals]');


function clear () {
    currentDisplay.textContent = '0'
    previousDisplay.textContent = '0'
}

function del () {

}

function chooseOperation () {

}

function addNumber () {

}

function updateDisplay () {

}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
       
    })    
});

operandButtons.forEach((button) => {
    button.addEventListener('click', () => {
     
    })    
});



console.log(clear())


