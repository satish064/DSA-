// Find circumference and area of circle

let circleRadius = prompt('Enter the Surface radisu:')

let circleCircumference = (Math.PI * 2 * parseFloat(circleRadius)).toFixed(2)
let circleArea = (Math.PI * parseFloat(circleRadius) * parseFloat(circleRadius)
).toFixed(2)

console.log(`The area: ${circleArea} and circumference: ${circleCircumference} of the circle`);