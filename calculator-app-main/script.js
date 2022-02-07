// Calculator logic:

const operand = document.querySelectorAll("[data-number]");
const operator = document.querySelectorAll("[data-operator]");
const deleteBtn = document.querySelector("[data-delete]");
const resetBtn = document.querySelector("[data-reset]");
const outputBtn = document.querySelector("[data-output]");
const input = document.querySelector("[data-current-operand]");
// console.log(operand[2].textContent);

const buttons = document.querySelectorAll("[data-calculator] .btn");
console.log(buttons);
//

//*how to display number on a screen with a click ?

function displayItem(e) {
  const button = e.target;

  const firstOperand = input.textContent[0];

  // create a memory whatever variable I have in this, variable different reference
  // input is a reference directly linked to the output of the browser
  // the reference here is the input
  let lastOperand = input.textContent[input.textContent.length - 1];

  const currentOperand = button.textContent;

  const containsADot = input.textContent.includes(".");
  const containsAnOperator = ["+", "-", "x", "÷"].find((operator) => {
    return input.textContent.includes(operator);
  });
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
      if (currentOperand === "0") {
        // if the displqy contains already 0, then don't do anything
        // else, display 0

        if (input.textContent !== "0") {
          input.textContent += 0;
        }
      } else if (currentOperand === ".") {
        // if the display doesn't contain yet a dot, and it doesnot contain then add it (in this case, there is no operator)
        // if there's already an operator, where is the dot located ? (left or right side of the operator) ?
        const operatorsIndexes = ["+", "-", "x", "÷"].map((operator) => {
          return input.textContent.indexOf(operator);
        });
        const lastIndexOfADot = input.textContent.lastIndexOf(".");
        const maxIndexOfAnOperator = Math.max(...operatorsIndexes);

        if (
          (!containsADot && !containsAnOperator) ||
          maxIndexOfAnOperator > lastIndexOfADot
        ) {
          input.textContent += ".";
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
      // if current operand is an operator,

      if (
        // if lastOperand displayed is an operator, then replace it by the current Operand i.e : 2+ -> 2-
        lastOperand === "+" ||
        lastOperand === "-" ||
        lastOperand === "x" ||
        lastOperand === "÷"
      ) {
        console.log(input.textContent[input.textContent.length - 1]);
        input.textContent = input.textContent.slice(0, -1) + currentOperand;
      } else {
        // if lastOperand displayed is not an operator, then add the operator i.e : 2 -> 2 +
        input.textContent += currentOperand;
      }
    }
  }
}

buttons.forEach((oneButton) => {
  oneButton.addEventListener("click", displayItem);
});

//*once button-operator clicked then keep previous number
// function calculate(e) {
//   let sign = e.target.textContent;
//   console.log(e.target.textContent);
//   let previousOperand;

//   currentOperand = previousOperand;
//   console.log(previousOperand);

//   if (sign === "+") {
//     previousOperand += currentOperand;
//   } else if (sign === "-") {
//     previousOperand -= currentOperand;
//   } else if (sign === "x") {
//     previousOperand *= currentOperand;
//   } else {
//     previousOperand /= currentOperand;
//   }
// }
// for (let j = 0; j < operator.length; j++) {
//   operator[j].addEventListener("click", calculate);
// }

//*once new number number clicked, clear line and make operation
//*once button-output clicked, give result
//*

//* once button reset clicked, then clear operation, screen empty
function resetInput() {
  input.textContent = "0";
}

resetBtn.addEventListener("click", resetInput, displayItem);

//*once button C clicked, the last number is cleared (slice method)
function deleteInput() {
  if (input.textContent.length === 0 || input.textContent.length <= 1) {
    input.textContent = "0";
    //     console.log(input.textContent);
  } else {
    input.textContent = input.textContent.slice(0, -1);
    //     console.log(input.textContent);
  }
}
deleteBtn.addEventListener("click", deleteInput, displayItem);

// Theme settings :
// theme 1 by default
// local storage : when the user comes back into the calculator, display his last theme
// if user toggle to theme 2 then display theme 2
// if user toggle to theme 3 then display theme 3
// if user toggle to theme 1 then display theme 1
