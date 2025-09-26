// Accept the length and width of a rectangle. Calculate & print the area and perimeter.

let length = prompt('Enter the length:')
let width = prompt('Enter the width:')

let area = length * width
let perimeter = 2*(parseInt(length) + parseInt(width))

console.log(`The Area of the rectangle is: ${area}`);
console.log(`The Perimeter of the rectangle is: ${perimeter}`);