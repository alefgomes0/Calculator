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
  num1 = +num1;
  num2 = +num2;

  
  if(operator == "-") {
    return subtract(num1, num2);
  }
  else if(operator == "*") {
    return multiply(num1, num2);
  }
  else if(operator == "/") {
    return divide(num1, num2);
  }
  else {
    return sum(num1, num2);
  }
}

function clearDisplay() {
  bottomNumber.textContent = "";
  topNumber.textContent = "";
  firstNumbers = "";
  displayNumbers = "";
  operation = null;
  return 0;
} 

const clear = document.querySelector(".clear");
const topNumber = document.querySelector(".former-number");
const bottomNumber = document.querySelector(".current-number");
let displayNumbers = "";
const calculatorOperators = document.querySelectorAll(".operator");  
const buttons = document.querySelectorAll(".number");
const result = document.querySelector(".equals");

let firstNumbers;
let lastNumbers;
let operation = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    displayNumbers += button.textContent;
    bottomNumber.textContent = displayNumbers;
  })
})

calculatorOperators.forEach((sign) => {
  sign.addEventListener("click", () => {
    operation = sign.textContent;
    firstNumbers = displayNumbers;
    topNumber.textContent = `${displayNumbers} ${operation}`;
    bottomNumber.textContent = "";
    displayNumbers = "";
  })
})    

result.addEventListener("click", () => {
  if (operation != null) {
    topNumber.textContent = `${firstNumbers} ${operation} ${displayNumbers} ${"="}`;
    bottomNumber.textContent = operate(firstNumbers, displayNumbers, operation);
  }
})

clear.addEventListener("click", clearDisplay);