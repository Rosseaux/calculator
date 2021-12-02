let firstNumber = "";
let secondNumber = "";
let calcOperator = "";
let display = document.querySelector(".display");
let secondDisplay = document.querySelector(".secondDisplay");
let result;
let readyToClear = false;
let infoBoxStatus = false;

const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operand]");
const allClear = document.querySelector("[data-all-clear]");
const equals = document.querySelector("[data-equals]");
const del = document.querySelector("[data-delete]");
const infoButton = document.querySelector(".infoButton");
const infoBox = document.querySelector(".infoBox");

display.textContent = "";
secondDisplay.textContent = "";
secondDisplay.style.display = "none";
infoBox.style.display = "none";

//event listeners for input buttons
window.addEventListener("keydown", keyInput);

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

del.addEventListener("click", () => {
    backspace();
});

infoButton.addEventListener("click", () => {
    infoShow();
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

//show/hide the info box
function infoShow() {
    if (infoBoxStatus === false) {
        infoBox.style.display = "block";
        infoBoxStatus = true;
    }
    else if (infoBoxStatus === true) {
        infoBox.style.display = "none";
        infoBoxStatus = false;
    }
}

//keyboard input
function keyInput(e) {
    if (e.key >= 0 && e.key <= 9 || e.key === ".") numberInput(e.key);
    if (e.key === "+") operatorInput("+");
    if (e.key === "*") operatorInput("x");
    if (e.key === "/") operatorInput("÷");
    if (e.key === "-") operatorInput("-");
    if (e.key === "=" || e.key === "Enter") execute();
    if (e.key === "c" || e.key === "Escape") clearDisplay();
    if (e.key === "Backspace") backspace();
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

//backspace/delete function
function backspace() {
    display.textContent = display.textContent.toString().slice(0, -1);
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