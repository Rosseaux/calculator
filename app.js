let firstNumber = "";
let secondNumber = "";
let display = document.querySelector(".display");
let secondDisplay = document.querySelector(".secondDisplay");
let result = "";

const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operand]");
const allClear = document.querySelector("[data-all-clear]");
const equals = document.querySelector("[data-equals]");

display.textContent = "";
secondDisplay.textContent = "";

//event listeners for input buttons
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        numberInput(number.textContent)
    });
});
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        operatorInput(operator.textContent)
    });
});
equals.addEventListener("click", () => {
    firstNumber = secondDisplay.textContent;
    secondNumber = display.textContent;
    calculate();
});
allClear.addEventListener("click", () => {
    clearDisplay();
});

//add numbers to display
function numberInput(number) {
    if (number === "0") display.textContent = "";
    display.textContent += number;
}

function operatorInput(operator) {
    if (secondDisplay.textContent === "") {
        secondDisplay.textContent = firstNumber + " " + operator;
        display.textContent = "";
    }

}

//clear function
function clearDisplay() {
    display.textContent = "";
    secondDisplay.textContent = "";
    firstNumber = "";
    secondNumber = "";
}

//calculator functions
function multiply(firstNumber,secondNumber) {
    return firstNumber * secondNumber;
}

function add(firstNumber,secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber,secondNumber) {
    return firstNumber - secondNumber;
}

function divide(firstNumber,secondNumber) {
    return firstNumber / secondNumber;
}

//operator switch statement to determine calculation
function calculate(oper, firstNumber, secondNumber) {
    switch (oper) {
        case "x":
            result = multiply(firstNumber,secondNumber);
        case "-":
            result = subtract(firstNumber,secondNumber);
        case "+":
            result = add(firstNumber,secondNumber);
        case "%":
            if (secondNumber === 0) return null;
            else result = divide(firstNumber,secondNumber);
        
    }
}