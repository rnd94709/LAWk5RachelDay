function Calculate(num1, num2) {
  let summedNumbers = num1 + num2
  return summedNumbers
  }

let firstNum = prompt("What's your first number?")
let secondNum = prompt("What's your second number?")

firstNum = parseInt(firstNum)
secondNum = parseInt(secondNum)

let summedNumber = Calculate(firstNum, secondNum)

console.log(`The sum of ${firstNum} and ${secondNum} is ${summedNumber}`)
