const buttons = document.querySelectorAll('button');
const current = document.querySelector('.current');
const previous = document.querySelector('.previous');
let currentValue = 0;
let previousValue = 0;
let finalValue = null;
let operator = null;

 
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id ==='number') {
            finalValue = null;
            currentValue = Number(currentValue + button.innerText);
            current.innerText = currentValue;          
        }
        else if (button.id ==='operand') {
            if ((operator !== null) && (curentValue === 0)) {
                currentValue = 0;
            } else if (operator === null) {
                previousValue = currentValue + finalValue;
                currentValue = 0;
                operator = button.innerText
                previous.innerText += current.innerText + `${button.innerText}`;
                current.innerText = currentValue;

            }else {
                currentValue = 0;
                operator = button.innerText
                previousValue = operations(previousValue, currentValue, operator);
                previous.innerText += current.innerText + `${button.innerText}`;
                current.innerText = currentValue;
            }
            
        }
        else if (button.id ==='allClear') {
            currentValue = 0;
            previousValue = 0;
            previous.innerText = 0;
            current.innerText = 0;
        }
        else if (button.id ==='delete') {
            currentValue = Number(currentValue.toString().slice(0,-1));
            current.innerText = currentValue;
        }
        else if (button.id ==='decimal') {
            currentValue.toString().includes('.') ? currentValue : currentValue += '.';
            current.innerText = currentValue;   
        }
        else if (button.id ==='equals') {
            if (operator === null) {
                currentValue;
            } else {
            finalValue = operations(previousValue, currentValue, operator);
            currentValue = 0;
            previousValue = 0;
            operator = null;
            current.innerText = finalValue;
            previous.innerText = null;
            }
        }
    });
})

function operations (a, b, operator) {
    switch(operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
    }
}


document.addEventListener('keydown', e => {
    buttons.forEach((button) => {
        if ((e.key === button.innerText)
        || ((e.key === 'Enter') && (button.innerText === '='))
        || ((e.key === 'Backspace') && (button.innerText === 'Del'))
        || ((e.key === 'Escape') && (button.innerText === 'AC'))
        || ((e.key === '*') && (button.innerText === '×'))
        || ((e.key === '/') && (button.innerText === '÷'))) {
                e.preventDefault();
                button.click();
        } 
    });
});5