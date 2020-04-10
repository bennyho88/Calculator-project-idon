
const screen = document.querySelector('#screen');

const value1 = 15;
const value2 = 2;

function add(value1, value2) {

    return value1 + value2;
}


function subtract(value1, value2) {


    return value1 - value2;
}


function multiply(value1, value2) {


    return value1 * value2;
}



function divide(value1, value2) {


    return value1 / value2;
}



function operate(op, value1, value2) {


    switch(op) {

        case '+':
            return add(value1, value2);
            break;
        case '-':
            return subtract(value1, value2);
            break;
        case '*':
            return multiply(value1, value2);
            break;
        case '/':
            return divide(value1, value2);
            break;
    }
}

console.log(operate('*', value1, value2));