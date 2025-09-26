// Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)

let num1 = prompt('Enter the First Number:') 
let num2 = prompt('Enter the Second Number:') 

num1 = parseInt(num1) + parseInt(num2) 
num2 = parseInt(num1) - parseInt(num2) 
num1 = parseInt(num1) - parseInt(num2)

console.log(num1,num2);



