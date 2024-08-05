const score = 400
console.log(score);
const balance = new Number(100) //defined in new object "Number()" it specify in output that it is a number. 100% it will be a number
console.log(balance);

console.log(balance.toString()); //type-string value-100
console.log(balance.toString().length); //toString() has length property
// console.log(balance.toString().concat);
console.log(balance.toFixed(2)); // gives decimal point


const otherNumber = 123.0966
console.log(otherNumber.toPrecision(3)); // toPrecision()- num range from 1-21 and it returns astring containing num represented either exponential or fixed point notation with specified num of digits

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // US-1,000,000 and en-IN-> 10,00,000


//************Maths************/
console.log(Math); //Math is already an object
console.log(Math.abs(-4)); //absolute value (-) to (+)
console.log(Math.round(4.3)); // gives round values
console.log(Math.ceil(9.1)); // gives upper value: 10
console.log(Math.floor(9.9)); // gives lower value: 9
console.log(Math.sqrt(25)); //square root: 5
console.log(Math.pow(2,3)); // power: 8
// console.log(Math.min(2, 5, 3, 6, 8, 10)); //gives min value
// console.log(Math.pow(2, 5, 3, 6, 8, 10)); //gives max value
