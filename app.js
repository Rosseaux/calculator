
//display function
let display = document.querySelector(".display");
display.textContent = "TESTING";



//operand switch statement


//clear function


//keypad input function?


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

function calculate(oper, a, b) {
    switch (oper) {
        case "X":
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