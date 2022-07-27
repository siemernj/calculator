const currentDisplay = document.querySelector('[data-current]');
const previousDisplay = document.querySelector('[data-previous]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const numberButtons = document.querySelectorAll('[data-number]');
const operandButtons = document.querySelectorAll('[data-operand]');
const equalButton = document.querySelector('[data-equals]');


numberButtons.forEach((button) => {
    button.addEventListener('click', updateDisplay)
});

operandButtons.forEach((button) => {
    button.addEventListener('click', chooseOperation)
});

allClearButton.addEventListener('click', allClear);

deleteButton.addEventListener('click', del);


function allClear () {
    currentDisplay.textContent = '0'
    previousDisplay.textContent = '0'
}

function del () {
    currentDisplay.splice(-1,1)

}

function chooseOperation (e) {
    const key = e.target
    const keyValue = key.textContent
    const displayValue = currentDisplay.textContent

    console.log(key)
}

function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}





function updateDisplay(e) {
const key = e.target
const keyValue = key.textContent
const displayValue = currentDisplay.textContent
    if (displayValue === '0') {
        currentDisplay.textContent = keyValue
    } else {
        currentDisplay.textContent = displayValue + keyValue
    }
}








