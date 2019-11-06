"use strict";

import { sum, divide, multiply } from "./lib/operators";

const firstInput = document.querySelector("[name=first]");
const secondInput = document.querySelector("[name=second]");
const result = document.querySelector("#result");

// Sum
const sumButton = document.querySelector(".sum");
sumButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = sum(firstNumber, secondNumber);
});

// Divide
const dividerButton = document.querySelector(".divide");
dividerButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = divide(firstNumber, secondNumber);
});

// Multiply

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = multiply(firstNumber, secondNumber);
});
