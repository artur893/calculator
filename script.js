//MATH FUNCTIONS

function sum(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case "+":
            return sum(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
    }
}

//CONNECTING BUTTONS TO SCREEN

let holdingNumber = ""
const typed = document.querySelector(".typed")
const key = document.querySelectorAll(".key")

console.log(key)
typed.textContent = holdingNumber

key[0].addEventListener("click", function () {
    holdingNumber = holdingNumber + "7"
    typed.textContent = holdingNumber
})
key[1].addEventListener("click", function () {
    holdingNumber = holdingNumber + "8"
    typed.textContent = holdingNumber
})
key[2].addEventListener("click", function () {
    holdingNumber = holdingNumber + "9"
    typed.textContent = holdingNumber
})
key[4].addEventListener("click", function () {
    holdingNumber = holdingNumber + "4"
    typed.textContent = holdingNumber
})
key[5].addEventListener("click", function () {
    holdingNumber = holdingNumber + "5"
    typed.textContent = holdingNumber
})
key[6].addEventListener("click", function () {
    holdingNumber = holdingNumber + "6"
    typed.textContent = holdingNumber
})
key[8].addEventListener("click", function () {
    holdingNumber = holdingNumber + "1"
    typed.textContent = holdingNumber
})
key[9].addEventListener("click", function () {
    holdingNumber = holdingNumber + "2"
    typed.textContent = holdingNumber
})
key[10].addEventListener("click", function () {
    holdingNumber = holdingNumber + "3"
    typed.textContent = holdingNumber
})
key[13].addEventListener("click", function () {
    holdingNumber = holdingNumber + "0"
    typed.textContent = holdingNumber
})
