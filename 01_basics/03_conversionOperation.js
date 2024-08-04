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


// *****************Operations*****************
let value = 3
let negValue = -value
console.log(negValue) 

// console.log(2*2); //multiply
// console.log(2**3); // ** means power
// console.log(2%3); //remainder


// concatenation
let str1 = "Hello"
let str2 = " Rishabh"
let str3 = str1 + str2
console.log(str3);


console.log("1" + 2); //The + operator, when used with a string and a number, converts the number to a string and concatenates them. 
console.log(1 + "2"); //The + operator, when used with a string and a number, converts the number to a string and concatenates them. 
console.log("1" + 2 + 2); //The + operator works from left to right. "1" + 2 becomes "12", and then "12" + 2 becomes "122".
console.log(1 + 2 + "2"); //The + operator first adds 1 and 2, giving 3. Then, 3 + "2" converts the 3 to a string and concatenates it with "2", resulting in "32".


console.log(true); //true
console.log(+true); //1
console.log(+""); // 0

let num1, num2, num3
num1=num2=num3= 2+2

// x++ increment operator increments and returns the value before incrementing.
// ++x increment operator increments and returns the value after incrementing.
let gameCounter = 100
gameCounter++ // ++gameCounter  
console.log(gameCounter);

