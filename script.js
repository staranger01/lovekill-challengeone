// Variables for each button
const buttons = document.querySelectorAll(".buttons-section > .button]"); 
const operator = document.querySelectorAll(".operator");
const equalSign = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const plusMinus = document.getElementById("plus and minus");
const decimal = document.getElementById("decimal");
const calculatorScreen = document.getElementById("calculator-screen")

// Display Screen

function displayValue(value) {
    calculatorScreen.textContent = calculatorScreen.textContent + value;
}

function getDisplayValue() {
    return calculatorScreen.textContent;
}

function clearDisplay() {
    calculatorScreen.textContent = "";
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

//function squareRoot() {
    
//}


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
    }
}
