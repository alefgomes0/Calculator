const clear = document.querySelector(".clear");
const topNumber = document.querySelector(".former-number");
const bottomNumber = document.querySelector(".current-number");
let displayNumbers = "";
const calculatorOperators = document.querySelectorAll(".operator");  
const buttons = document.querySelectorAll(".number");
const result = document.querySelector(".equals");


let firstNumbers;
let sequence = false;
let numberWithoutSign;
let operation = null;
let operationChecker = null;
let operationMade = null;
let resultOperation;


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
    if (num2 == 0) {
      setTimeout(clearDisplay, 1000);
    }
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
  operationChecker = null;
  operationMade = null;
  resultOperation = null;
  sequence = false;
} 

function showFirstResult(number0, sign, number1) {
  topNumber.textContent = `${number0} ${sign} ${number1} ${"="} `;
  resultOperation = operate(number0, number1, sign);
  bottomNumber.textContent = resultOperation;
}

function showOthersResults(i, signal, n) {
  topNumber.textContent = `${i} ${signal} ${n} ${"="} `;
  i = operate(resultOperation, n, signal);
  bottomNumber.textContent = i;
}

const clickEvent = new MouseEvent("click", {
  "view": window,
  "bubbles": true,
  "cancelable": false
});


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if(operationMade === true && operationChecker === null) {
      clearDisplay();
    }
    if (sequence === true) {
      bottomNumber.textContent = "";
      displayNumbers = "";
      sequence = false;
    }
    displayNumbers += button.textContent;
    bottomNumber.textContent = displayNumbers;
  })
})



calculatorOperators.forEach((sign) => {
  sign.addEventListener("click", () => {
    if (topNumber.textContent.includes(operation)
    && !topNumber.textContent.includes("=")
    && bottomNumber.textContent != "") {
      numberWithoutSign = String(topNumber.textContent.split(" ", 1));
      operation = operation.replace("\n", "").trim();
      resultOperation = operate(numberWithoutSign, bottomNumber.textContent, operation);
      bottomNumber.textContent = resultOperation;
      operation = sign.textContent;
      topNumber.textContent = `${resultOperation} ${operation}`;
      sequence = true;
    }
    
    else {
      operation = sign.textContent;
      firstNumbers = displayNumbers;
      topNumber.textContent = `${displayNumbers} ${operation} `;
      operationChecker = true;
      bottomNumber.textContent = "";
      displayNumbers = "";
    }

    if (operationMade === true) {
      topNumber.textContent = `${resultOperation} ${operation} `;
    }
    
  })
})    

result.addEventListener("click", () => {
  if (operationMade != true) {
    if (resultOperation === undefined) {
      resultOperation = firstNumbers;
    };
    showFirstResult(resultOperation, operation, displayNumbers);
  }
  else if (operationMade === true) {
    topNumber.textContent = `${resultOperation} ${operation} ${displayNumbers} ${"="} `;
    resultOperation = operate(resultOperation, displayNumbers, operation);
    bottomNumber.textContent = resultOperation;
  }
  
  if (resultOperation != null) {
    operationMade = true;
    operationChecker = null;
  }
})



clear.addEventListener("click", clearDisplay);