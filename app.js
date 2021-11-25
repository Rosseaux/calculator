
//display function
let display = document.querySelector(".display");
display.textContent = "TESTING";


//button input function
let buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        display.textContent = button.textContent;
    });
});
    

//operand switch statement


//clear function


//keypad input function?


//