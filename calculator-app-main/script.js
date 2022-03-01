// Calculator logic:

const operand = document.querySelectorAll("[data-number]");
const operator = document.querySelectorAll("[data-operator]");
const deleteBtn = document.querySelector("[data-delete]");
const resetBtn = document.querySelector("[data-reset]");
const outputBtn = document.querySelector("[data-output]");
const input = document.querySelector("[data-current-operand]");
const buttons = document.querySelectorAll("[data-calculator] .btn");
const expression = input.textContent;
let alreadyComputed = false;

//*how to display number on a screen with a click ?

function displayItem(e) {
  const containsAnOperator = ["+", "-", "*", "÷"].find((operator) => {
    return input.textContent.includes(operator);
  });

  const button = e.target;

  let lastOperand = input.textContent[input.textContent.length - 1];

  // create a memory whatever variable I have in this, variable different reference
  // input is a reference directly linked to the output of the browser
  // the reference here is the input

  const currentOperand = button.textContent;

  const containsADot = input.textContent.includes(".");

  //1. Know the button type
  //2. Decide whether to display the content : if number and if operator..., show them. Otherwise, act on it

  //Check if data-number or data-operator (one true thing at once)
  // if not, data-delete
  // if not, data-reset
  // else, data-output

  //Check if data-number or data-operator (one true thing at once) : TRUE
  // THEN : Display the content

  if (
    button.hasAttribute("data-number") ||
    button.hasAttribute("data-operator")
  ) {
    if (button.hasAttribute("data-number")) {
      if (alreadyComputed && !containsAnOperator) {
        input.textContent = "";
        alreadyComputed = false;
      }
      if (currentOperand === "0") {
        // if the displqy contains already 0, then don't do anything
        // else, display 0

        if (input.textContent !== "0") {
          input.textContent += 0;
        }
      } else if (currentOperand === ".") {
        // if the display doesn't contain yet a dot, and it does not contain an operator then add it (in this case, there is no operator)
        // if there's already an operator, where is the dot located ? (left or right side of the operator) ?

        const operatorsIndexes = ["+", "-", "*", "÷"].map((operator) => {
          return input.textContent.indexOf(operator);
        });
        const lastIndexOfADot = input.textContent.lastIndexOf(".");
        const maxIndexOfAnOperator = Math.max(...operatorsIndexes);

        if (
          (!containsADot && !containsAnOperator) ||
          maxIndexOfAnOperator > lastIndexOfADot
        ) {
          if (["+", "-", "*", "÷"].includes(lastOperand)) {
            input.textContent += "0.";
          } else {
            input.textContent += ".";
          }
        }
      } else {
        // if the display starts with 0 and contains a dot, add the current operand  i.e : 0. -> 0.2
        // if the display doesn't start with 0, add the current operand i.e : 5 -> 52
        if (
          (input.textContent.startsWith("0") && containsADot) ||
          !input.textContent.startsWith("0")
        ) {
          input.textContent += currentOperand;
        } else {
          // if the display starts with 0, ONLY ; replace the 0 by the current operand i.e : 0 -> 1
          input.textContent = currentOperand;
        }
      }
    } else {
      // if current operand is an operator

      if (
        // if lastOperand displayed is an operator, then replace it by the current Operand i.e : 2+ -> 2-
        lastOperand === "+" ||
        lastOperand === "-" ||
        lastOperand === "*" ||
        lastOperand === "÷"
      ) {
        input.textContent = input.textContent.slice(0, -1) + currentOperand;
      } else {
        // if lastOperand displayed is not an operator, then add the operator i.e : 2 -> 2 +
        input.textContent += currentOperand;
      }
    }
  }
}

// function to splice elements in the array of the arithmetic expression

function spliceInArithExpress() {}

function calculate() {
  //   const listOfOperators = ["÷", "*", "+", "-"].map((operator) => ({
  //     operator,
  //     indexes: input.textContent
  //       .split(/([-,+,*,÷])/g)
  //       .map((character, index) => (character === operator ? index : -1))
  //       .filter((n) => n >= 0),
  //   }));

  // first, we split the expression (which is a string) with regex by keeping the delimiter, to get an array
  let arithExpr = input.textContent.split(/([-,+,*,÷])/g);

  // then, we loop through the array as long as the length of the arithmetic expression is greater than 1, in other words, the very last and only element remaining in the array is the result
  // we check what are the signs included in the arithmetic expression :
  // if there are a '*' or a '/', then we execute first those operations
  // otherwise, it will compute the addition and substraction

  // To calculate each operation :
  // we calculate with the operand before and after the sign
  // a. since we are in an array, we remove the operand (of the first operation computed) from the right (=> in order to not modify the order of the array) with .splice(i + 1, 1);
  // b. then we remove the operand of the left
  // c. finally, we replace the sign (of the current operation) by the result. That will be the operand for the next operation to be executed
  // after each sub-operation computed, we need to start the index from 0, to say that we need to go back at the start point in the the array, and it is also a way to prevent the inifinity loop

  // the very last element in the array is the result of the whole operation

  let result = 0;
  let i = 0;

  while (arithExpr.length > 1) {
    if (arithExpr.includes("*") || arithExpr.includes("÷")) {
      if (arithExpr[i] === "*") {
        result = parseFloat(arithExpr[i - 1]) * parseFloat(arithExpr[i + 1]);

        arithExpr.splice(i + 1, 1);

        arithExpr.splice(i - 1, 1);

        arithExpr.splice(i - 1, 1, result);

        i = 0;
      } else if (arithExpr[i] === "÷") {
        result = parseFloat(arithExpr[i - 1]) / parseFloat(arithExpr[i + 1]);

        arithExpr.splice(i + 1, 1);

        arithExpr.splice(i - 1, 1);

        arithExpr.splice(i - 1, 1, result);

        i = 0;
      }
    } else {
      if (arithExpr[i] === "+") {
        result = parseFloat(arithExpr[i - 1]) + parseFloat(arithExpr[i + 1]);

        arithExpr.splice(i + 1, 1);

        arithExpr.splice(i - 1, 1);

        arithExpr.splice(i - 1, 1, result);

        i = 0;
      } else if (arithExpr[i] === "-") {
        result = parseFloat(arithExpr[i - 1]) - parseFloat(arithExpr[i + 1]);

        arithExpr.splice(i + 1, 1);

        arithExpr.splice(i - 1, 1);

        arithExpr.splice(i - 1, 1, result);

        i = 0;
      }
    }
    i++;
  }

  input.textContent = result;
  alreadyComputed = true;
}

// When user clicks on RESET : it deletes everything
function resetInput() {
  input.textContent = "0";
}

// When user clicks on DEL :

// if the input displayed does not contain an operator :
// => AND if the input length is greater than 1
// => AND if the input is not already computed,
// THEN, it deletes the last element of the input

// if the input displayed does not contain an operator :
// => AND if the input length is greater than 1
// => AND if the input is already computed,
// THEN, it deletes everything

// if the input displayed does not contain an operator :
// => AND if the input length is less than 1
// THEN, it deletes everything

// if the input displayed contains an operator :
// THEN, it deletes the last element of the input

function deleteInput() {
  if (input.textContent.search(/[-,+,x,÷]/) == -1) {
    if (input.textContent.length > 1) {
      if (!alreadyComputed) {
        input.textContent = input.textContent.slice(0, -1);
      } else {
        resetInput();
      }
    } else {
      resetInput();
    }
  } else {
    input.textContent = input.textContent.slice(0, -1);
  }
}

buttons.forEach((oneButton) => {
  oneButton.addEventListener("click", displayItem);
});

outputBtn.addEventListener("click", calculate, displayItem);

resetBtn.addEventListener("click", resetInput, displayItem);

deleteBtn.addEventListener("click", deleteInput, displayItem);

// Theme settings :
// theme 1 by default
// local storage : when the user comes back into the calculator, display his last theme
// if user toggle to theme 2 then display theme 2
// if user toggle to theme 3 then display theme 3
// if user toggle to theme 1 then display theme 1
