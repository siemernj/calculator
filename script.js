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
        else if (button.id ==='operator') {
            chooseOperation()
        }
        else if (button.id ==='allClear') {
            allClear()
        }

    });
})

 function allClear() {
    currentValue = 0;
    current.innerText = 0
}
 



function chooseOperation(e) {

}



