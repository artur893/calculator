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
            console.log(sum(a, b))
            return sum(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
    }
}

//CONNECTING BUTTONS TO SCREEN, HOLDING NUMBER

let holdingNumber = ""
const typed = document.querySelector(".typed")
const key = document.querySelectorAll(".key")

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

//ADDING OPERATORS, CATCHING NUMBER FOR EQUALATION

let operator
let numberToEqual
let result
const resultScreen = document.querySelector(".result")

key[3].addEventListener("click", function () {
    operator = "/"
    numberToEqual = holdingNumber
    holdingNumber = ""
    typed.textContent = holdingNumber
    resultScreen.textContent = (numberToEqual + " " + operator)
})
key[7].addEventListener("click", function () {
    operator = "*"
    numberToEqual = holdingNumber
    holdingNumber = ""
    typed.textContent = holdingNumber
    resultScreen.textContent = (numberToEqual + " " + operator)
})
key[11].addEventListener("click", function () {
    operator = "-"
    numberToEqual = holdingNumber
    holdingNumber = ""
    typed.textContent = holdingNumber
    resultScreen.textContent = (numberToEqual + " " + operator)
})
key[15].addEventListener("click", function () {
    operator = "+"
    numberToEqual = holdingNumber
    holdingNumber = ""
    typed.textContent = holdingNumber
    resultScreen.textContent = (numberToEqual + " " + operator)
})
key[14].addEventListener("click", function(){
    result = operate(operator, numberToEqual, holdingNumber)
    resultScreen.textContent = (result)
})

//FUNCTION CLEAR AND DELETE

const clear = document.querySelector(".clear")
const deleteNumber = document.querySelector(".delete")

clear.addEventListener("click", function(){
    operator = ""
    numberToEqual = ""
    holdingNumber = ""
    result = ""
    typed.textContent = holdingNumber
    resultScreen.textContent = (result)
})

deleteNumber.addEventListener("click", function(){
    length = holdingNumber.length
    deletedNumber = holdingNumber.slice(0, length - 1)
    holdingNumber = deletedNumber
    typed.textContent = holdingNumber
} )


console.log(key)