// Accept the three sides of triangle and calculate the area using Heron's formula

let side1 = prompt('Enter the side of the triangle:')
let side2 = prompt('Enter the side of the triangle:')
let side3 = prompt('Enter the side of the triangle:')

let semiPerimeter =(parseInt(side1)+parseInt(side2)+parseInt(side3))/2

let triangleArea = Math.sqrt(semiPerimeter*(semiPerimeter-parseInt(side1))*(semiPerimeter-parseInt(side2))*(semiPerimeter-parseInt(side3)))

console.log('Area of the triangle is: ',triangleArea.toFixed(2));