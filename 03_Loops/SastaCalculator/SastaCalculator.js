// Exploring the problem of sasta calculator

let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let para = document.querySelector("#para");
// console.log(pareResult)
let sastaCalculator = () => {
  let pareResult = document.createElement("span");
  let operator = prompt("Enter your operator here..");
  let calculation;

  let num1 = Number(inp1.value);
  let num2 = Number(inp2.value);
  //   operator = parseInt(operator);

  if (isNaN(num1) || isNaN(num2) || operator == "" || operator == " ") {
    alert("Enter valid operator and input values");
    return;
  }

  switch (operator) {
    case "+":
      calculation = num1 + num2;
      break;
    case "-":
      calculation = num1 - num2;
      break;
    case "*":
      calculation = num1 * num2;
      break;

    default:
      alert("Plz enter a valid input and operator");
  }
  pareResult.textContent = calculation;
  para.appendChild(pareResult);
};
