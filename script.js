// Change from querySelector to querySelectorAll
let numbers = document.querySelectorAll(".numBtn");
let operators = document.querySelectorAll(".operatorBtn");
let equal = document.querySelector(".equalsBtn");
let clear = document.querySelector(".clearBtn");

let display = document.querySelector("input");

let firstNumber = 0;
let secondNumber = 0;
let currentOperator = "";

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return sub(a, b);
    case "x":
      return mul(a, b);
    case "÷":
      return div(a, b);
    default:
      return "Invalid operator";
  }

  function add(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mul(a, b) {
    return a * b;
  }

  function div(a, b) {
    if (b === 0) {
      return "Can't divide by 0";
    } else {
      return a / b;
    }
  }
}
// Creates a Event Listener for each number button
numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    display.value += number.textContent;
    if (currentOperator === "") {
      if (firstNumber === 0) {
        firstNumber = number.textContent;
      } else {
        firstNumber += number.textContent;
      }
    } else {
      if (secondNumber === 0) {
        secondNumber = number.textContent;
      } else {
        secondNumber += number.textContent;
      }
    }
  });
});

// Creates a Event Listener for each operator button
operators.forEach(function (operator) {
  operator.addEventListener("click", function () {
    if (firstNumber !== 0 && currentOperator === "") {
      currentOperator = operator.textContent;
      display.value += operator.textContent;
    }
  });
});

// Creates a Event Listener for the equal button
equal.addEventListener("click", function () {
  if (firstNumber !== 0 && secondNumber !== 0) {
    display.value = operate(currentOperator, +firstNumber, +secondNumber);
    firstNumber = display.value;
    secondNumber = 0;
    currentOperator = "";
  }
});

// Creates a Event Listener for the clear button
clear.addEventListener("click", function () {
  display.value = "";
  firstNumber = 0;
  secondNumber = 0;
  currentOperator = "";
});
