// Variables for each button
let calculatorScreen = "";
const numberButtons = document.querySelectorAll("[data-number]"); 
const operator = document.querySelectorAll("[data-operation]");
const equalSign = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const plusMinus = document.getElementById("plus and minus");
const decimal = document.getElementById("decimal");
const calculatorScreen = document.getElementById("calculator-screen")

const calculator = new Calculator(calculatorScreen)

numberButtons.forEach(button => {
    button.addeventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operator.forEach(button => {
    button.addeventListener("click", () => {
        calculator.setOperation(operator.innerText)
        calculator.updateDisplay()
    })
})

// Display Screen
class Calculator {
    constructor(calculatorScreen) {
    this.calculatorScreen = calculatorScreen
    this.clear()
    }

}

function appendNumber(number) {
    if (calculatorScreen.textContent === '0' || shouldResetScreen)
      resetScreen()
    currentOperationScreen.textContent += number
}

function resetScreen() {
    calculatorScreen.textContent = ''
    shouldResetScreen = false
}

function clearDisplay() {
    this.calculatorScreen = "";
    this.operation = undefined;
}


// Operators

function addition() {
    return a + b;
}

function subtraction() {
    return a - b;
}

function multiplication() {
    return a * b;
}

function division() {
    return a / b;
}

function modulus() {
    return a % b;
}

function squareRoot() {
    return a * a;
}


function operate(a, b, operator) {
    switch(operator) {
        case "addition":
            return addition(a, b);
            break;
        case "subtraction":
            return subtraction(a, b);
            break;
        case "multiply":
            return multiplication(a, b);
            break;
        case "divide":
            return division(a, b);
            break;
        case "modulus":
            return modulus(a, b);
            break;
        case "squareRoot":
            return squareRoot(a, a);
            break;
    }
}
