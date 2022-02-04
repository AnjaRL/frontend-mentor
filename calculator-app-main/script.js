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
  //1. Know the button type
  //2. Decide whether to display the content : if number and if operator..., show them. Otherwise, act on it

  //Chceck if data-number or data-operator (one true thing at once)
  // if not, data-delete
  // if not, data-reset
  // else, data-output

  //Chceck if data-number or data-operator (one true thing at once) : TRUE
  // THEN : Display the content

  if (
    button.hasAttribute("data-number") ||
    button.hasAttribute("data-operator")
  ) {
    const currentOperand = button.textContent;
    if (button.hasAttribute("data-number")) {
      if (currentOperand === "0") {
        // if the displqy contains already 0, then don't do anything
        // else, display 0

        if (input.textContent !== "0") {
          input.textContent += 0;
        }
      } else if (currentOperand === ".") {
        // if the previous value is a dot, don't do anything
        // if the previous value is a number, dont'do anything
        // else, displqy the number
        const firstOperand = input.textContent[0];
        const lastOperand = input.textContent[input.textContent.length - 1];
        const containsADot = input;
        if (
          lastOperand !== "." ||
          (firstOperand === "." && parseInt(lastOperand) > 0)
        ) {
          input.textContent += ".";
        }
      } else {
        if (input.textContent.startsWith("0")) {
          input.textContent = currentOperand;
        } else {
          input.textContent += currentOperand;
        }
      }
    }
  }
}

buttons.forEach((oneButton) => {
  oneButton.addEventListener("click", displayItem);
});

//*once button-operator clicked then keep previous number
function calculate(e) {
  let sign = e.target.textContent;
  console.log(e.target.textContent);
  let previousOperand;

  currentOperand = previousOperand;
  console.log(previousOperand);

  if (sign === "+") {
    previousOperand += currentOperand;
  } else if (sign === "-") {
    previousOperand -= currentOperand;
  } else if (sign === "x") {
    previousOperand *= currentOperand;
  } else {
    previousOperand /= currentOperand;
  }
}
for (let j = 0; j < operator.length; j++) {
  operator[j].addEventListener("click", calculate);
}

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
// if user toggle to theme 3 then display theme 2
// if user toggle to theme 1 then display theme 1
