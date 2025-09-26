// Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

let principalAmount = prompt('Enter the principal amount:')

let rateOfInterest = prompt('Enter the rate of interest:')

let time = prompt('Enter the time in year:')


let compoundInterest = (parseInt(principalAmount*(Math.pow((1+(parseInt(rateOfInterest))/100),parseInt(time))))) - parseInt(principalAmount)

console.log(compoundInterest);