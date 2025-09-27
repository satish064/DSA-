// Accept two numbers and print the greatest between them

let num1 = prompt('Enter the first number:')
let num2 = prompt('Enter the second number:')

let greaterNum = parseInt(num1) > parseInt(num2) ? num1 : num2

console.log('The greater number is:',greaterNum);