let firstNumber = "";
let secondNumber = "";
let display = document.querySelector(".display");

const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operand]");
const allClear = document.querySelector("[data-all-clear]");
const equals = document.querySelector("[data-equals]");

display.textContent = "";

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
    firstNumber = display.textContent;
    display.textContent = operator + " ";
}

//clear function
function clearDisplay() {
    display.textContent = "";
    firstNumber = "";
    secondNumber = "";
}

//calculator functions
function multiply(a,b) {
    return a * b;
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a / b;
}

//operator switch statement to determine calculation
function calculate(oper, a, b) {
    switch (oper) {
        case "x":
            return multiply(a,b);
        case "-":
            return subtract(a,b);
        case "+":
            return add(a,b);
        case "%":
            if (b === 0) return null;
            else return divide(a,b);
    }
}