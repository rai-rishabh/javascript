// let score = 33
let score = "33" // string type
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) //Even if written in "" as string but it convert to as number
console.log(typeof valueInNumber);
console.log(valueInNumber)

// NaN => Not a Number "33abc" when printed it shows NaN however its type is number but value is NaN
// let score = null => gives output 0
// let score = undefined => NaN
// let score = "Rishabh" => NaN

let isLoggedIn = true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// let isLoggedIn = "Rishabh" -- true
// let isLoggedIn = "" -- false
// let isLoggedIn = 1 -- true
// let isLoggedIn = 0 -- false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
// 33 is converted to string type