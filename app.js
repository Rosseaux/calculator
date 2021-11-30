let firstNumber = "";
let secondNumber = "";
let calcOperator = "";
let display = document.querySelector(".display");
let secondDisplay = document.querySelector(".secondDisplay");
let result;

const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operand]");
const allClear = document.querySelector("[data-all-clear]");
const equals = document.querySelector("[data-equals]");

window.addEventListener("keydown", keyInput);

display.textContent = "";
secondDisplay.textContent = "";
secondDisplay.style.display = "none";

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
    execute();    
});

allClear.addEventListener("click", () => {
    clearDisplay();
});

//add numbers to display
function numberInput(number) {
    display.textContent += number;
}

//return the calculation to the display
function execute() {
    secondNumber = display.textContent;
    secondNumber = Number(secondNumber);
    display.textContent = round(calculate(calcOperator, firstNumber, secondNumber));
    secondDisplay.textContent = firstNumber + " " + calcOperator + " " + secondNumber;
}

//keyboard input
function keyInput(e) {
    if (e.key >= 0 && e.key <= 9) numberInput(e.key);
    if (e.key === "+") operatorInput("+");
    if (e.key === "*") operatorInput("x");
    if (e.key === "/") operatorInput("÷");
    if (e.key === "-") operatorInput("-");
    if (e.key === "=" || e.key === "Enter") execute();
    if (e.key === "c" || e.key === "Escape") clearDisplay();
}

//takes the operator and moves the first number to the second display
function operatorInput(operator) {
    if (secondDisplay.textContent === "") {
        calcOperator = operator;
        firstNumber = display.textContent;
        firstNumber = Number(firstNumber);
        secondDisplay.style.display = "block";      
        secondDisplay.textContent = firstNumber + " " + operator;
        display.textContent = "";
    }
}

//rounds the final number
function round(number) {
    return Math.round(number * 1000) / 1000;
}

//clear function
function clearDisplay() {
    display.textContent = "";
    secondDisplay.textContent = "";
    firstNumber = "";
    secondNumber = "";
    secondDisplay.style.display = "none";
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
        case "÷":
            if (b === 0) return null;
            else return divide(a,b);
    }
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