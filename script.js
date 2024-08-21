const display = document.getElementById("display");
const onButton = document.getElementById("on-button");
let currentInput = "";
let lastInput = "";
let isOn = false;

// ON button
onButton.addEventListener("click", toggleCalculator);

function toggleCalculator() {
  isOn = !isOn;
  if (isOn) {
    display.textContent = "0";
  } else {
    display.textContent = ""; // Clear the display when turned off
    currentInput = "";
    lastInput = "";
  }
}

// All functions to check if calculator is on
function appendNumber(number) {
  if (isOn) {
    currentInput += number;
    updateDisplay();
  }
}

function appendOperator(operator) {
  if (isOn) {
    if (currentInput === "" && operator === "-") {
      currentInput = "-";
    } else if (currentInput !== "") {
      currentInput += operator;
    }
    updateDisplay();
  }
}

function appendDot() {
  if (isOn && !currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function clearDisplay() {
  if (isOn) {
    currentInput = "";
    lastInput = "";
    updateDisplay();
  }
}

function deleteLast() {
  if (isOn) {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  }
}

function calculateResult() {
  if (isOn) {
    try {
      lastInput = eval(currentInput.replace("×", "*").replace("÷", "/"));
      currentInput = String(lastInput);
      updateDisplay();
    } catch (error) {
      alert("Invalid input");
    }
  }
}

function calculateTrig(func) {
  if (isOn) {
    try {
      let value = parseFloat(currentInput);
      switch (func) {
        case "sin":
          currentInput = Math.sin((value * Math.PI) / 180).toString();
          break;
        case "cos":
          currentInput = Math.cos((value * Math.PI) / 180).toString();
          break;
        case "tan":
          currentInput = Math.tan((value * Math.PI) / 180).toString();
          break;
      }
      updateDisplay();
    } catch (error) {
      alert("Invalid input");
    }
  }
}

function calculateReciprocal() {
  if (isOn) {
    try {
      let value = parseFloat(currentInput);
      currentInput = (1 / value).toString();
      updateDisplay();
    } catch (error) {
      alert("Invalid input");
    }
  }
}

function calculateFactorial() {
  if (isOn) {
    try {
      let value = parseInt(currentInput);
      if (value < 0) {
        alert("Factorial is not defined for negative numbers");
        return;
      }
      currentInput = factorial(value).toString();
      updateDisplay();
    } catch (error) {
      alert("Invalid input");
    }
  }
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function calculateSquare() {
  if (isOn) {
    try {
      let value = parseFloat(currentInput);
      currentInput = Math.pow(value, 2).toString();
      updateDisplay();
    } catch (error) {
      alert("Invalid input");
    }
  }
}

function calculateSquareRoot() {
  if (isOn) {
    try {
      let value = parseFloat(currentInput);
      currentInput = Math.sqrt(value).toString();
      updateDisplay();
    } catch (error) {
      alert("Invalid input");
    }
  }
}

function calculateLog() {
  if (isOn) {
    try {
      let value = parseFloat(currentInput);
      currentInput = Math.log10(value).toString();
      updateDisplay();
    } catch (error) {
      alert("Invalid input");
    }
  }
}

function calculateLn() {
  if (isOn) {
    try {
      let value = parseFloat(currentInput);
      currentInput = Math.log(value).toString();
      updateDisplay();
    } catch (error) {
      alert("Invalid input");
    }
  }
}

function calculatePower() {
  if (isOn) {
    try {
      currentInput += "**";
      updateDisplay();
    } catch (error) {
      alert("Invalid input");
    }
  }
}

function updateDisplay() {
  display.textContent = currentInput || "0";
}
