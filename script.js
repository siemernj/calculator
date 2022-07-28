const buttons = document.querySelectorAll('button');
const current = document.querySelector('.current');
const previous = document.querySelector('.previous');
let currentValue = 0;
let previousValue = 0;
 
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id ==='number') {
            currentValue = Number(currentValue + button.innerText);
            current.innerText = currentValue;          
        }
        else if (button.id ==='operand') {
            currentValue = 0;
            operator = button.innerText
            previousValue = operations(previousValue, currentValue, operator);
            previous.innerText += current.innerText + `${button.innerText}`;
            current.innerText = currentValue;
            
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
            finalValue = operations(previousValue, currentValue, operator);
            current.innerText = finalValue;
            previous.innerText = null;
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


