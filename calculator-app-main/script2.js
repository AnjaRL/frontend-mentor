// const listOfOperators = ["/", "*", "+", "-"].map((operator) => ({
//   operator,
//   indexes: "23+4-56/3"
//     .split("")
//     .map((character, index) => (character === operator ? index : -1))
//     .filter((n) => n >= 0),
// }));

// expr = "23+4-56/3".split(/([-,+,*,/])/g).map((elem) => {
//   if (["/", "*"].includes(elem)) {
//     return { [elem]: 1 };
//   } else if (["+", "-"].includes(elem)) {
//     return { [elem]: 2 };
//   }
//   return { [elem]: 3 };
// });

// console.log(expr.length);
// console.log(Object.keys(expr[0]));
// console.log(Object.keys(expr[0])[0]);

// let priorities = expr.map((obj) => Object.values(obj)[0]);

// console.log(priorities);

// let calcOperations = {
//   "+": (a, b) => parseFloat(a) + parseFloat(b),
//   "-": (a, b) => parseFloat(a) - parseFloat(b),
//   "*": (a, b) => parseFloat(a) * parseFloat(b),
//   "/": (a, b) => parseFloat(a) / parseFloat(b),
// };

// function calc(expr, priorities, k, i) {
//   let result = calcOperations[k](
//     Object.keys(expr[i - 1])[0],
//     Object.keys(expr[i + 1])[0]
//   );
//   expr[i] = { [result]: 3 }; // put result in place of the operator i.e: [{5: 3},{+,2},{8: 3}] => [{13: 3}]
//   expr.splice(i + 1, 1); // remove next number
//   expr.splice(i - 1, 1); // remove previous number
//   priorities[i] = 3;
//   priorities.splice(i + 1, 1);
//   priorities.splice(i - 1, 1);
// }

// let i = 0;
// while (expr.length > 1) {
//   console.log(i);
//   if (i >= expr.length) {
//     i = 0;
//   }
//   let k = Object.keys(expr[i])[0]; // either number or operator
//   let v = expr[i][k]; // priority
//   console.log("here:", k, v);
//   if (v === 1) {
//     // either / or *
//     calc(expr, priorities, k, i);
//     console.log(expr);
//   } else if (v === 2 && !priorities.includes(1)) {
//     // either + or - and all * or / done
//     calc(expr, priorities, k, i);
//     console.log(expr);
//   }
//   i++;
// }
