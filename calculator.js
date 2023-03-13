function sum(a, b) {
  return a + b;
}


function subtract(a, b) {
  return a - b;
}


function multiply(x, y) {
  return x * y;
}


function divide(x, y) {
  return x / y;
}


function operate(num1, num2, operator) {
  if (operator === "+") sum(num1, num2);
  else if(operator === "-") subtract(num1, num2);
  else if(operator === "*") multiply(num1, num2);
  else if(operator === "/") divide(num1, num2);
}

const display = document.querySelector(".display");
let displayNumbers = "";
const buttons = document.querySelectorAll(".number");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    displayNumbers += button.textContent;
    display.textContent = displayNumbers;
  })
})

let operation = "";
const calculatorOperators = document.querySelectorAll(".operator");
calculatorOperators.forEach((sign) => {
  sign.addEventListener("click", () => {
    operation = sign.textContent;
    display.textContent = displayNumbers + " " + operation;
  })
})


let numbersDisplay = "";
if (operation != "") {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      numbersDisplay = button.textContent;
      display.textContent = displayNumbers + " " + operation + " "+ numbersDisplay;
    })
  })  
}


