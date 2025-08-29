let number1;
let operator;
let number2;

let calculatorDisplay = document.querySelector(".calculator__output");
let operatorKeys = document.querySelectorAll(".calculator__key--operator");
let numberKeys = document.querySelectorAll(".calculator__key--number");
let enterKey = document.querySelector(".calculator__key--enter")
let clearKey = document.querySelector(".calculator__key--clear");

numberKeys.forEach((elem) => {
    elem.addEventListener("click", populateNumber);
});

function populateNumber(e) {
    let displayText = calculatorDisplay.textContent;

    if(displayText === "0") {
        calculatorDisplay.textContent = e.target.textContent;
    }
    else {
        calculatorDisplay.textContent += e.target.textContent;
    }
}

clearKey.addEventListener("click", (e) => {
    calculatorDisplay.textContent = "0";
});

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
        return add(numberA, numberB);
    }

    if (operator === "-") {
        return subtract(numberA, numberB);
    }

    if (operator === "*") {
        return multiply(numberA, numberB);
    }

    if (operator === "/") {
        return divide(numberA, numberB);
    }
}