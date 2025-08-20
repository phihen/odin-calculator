let number1;
let operator;
let number2;

function add (numberA, numberB) {
    return numberA + numberB;
}

function subtract (numberA, numberB) {
    return numberA - numberB;
}

function multiply (numberA, numberB) {
    return numberA * numberB;
}

function divide (numberA, numberB) {
    return numberA / numberB;
}

function operate (numberA, numberB, operator) {

    if (operator === "+") {
        add(numberA, numberB);
    }

    if (operator === "-") {
        subtract(numberA, numberB);
    }

    if (operator === "*") {
        multiply(numberA, numberB);
    }

    if (operator === "/") {
        divide(numberA, numberB);
    }
}