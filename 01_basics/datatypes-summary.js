// // Primitive Datatype
// // 7 types: String, Number, Boolean, null, undefined, Symbol, Bigint


// JavaScript is a dynamically typed language.
// This means that the type of a variable is determined at runtime, based on the value it holds. You don't need to explicitly declare the type of a variable when you create it.
 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId); //false even values are given same but not equal


const bigNumber = 23456789034567n //bigint


// //Referenced or Non-Primitive type
// //Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // array and typeof- function
let myObject = {      // Object ii all values inside {} or can be store in variable and typeof-function
    name: "Rishabh",
    age: 23,
}

// function(){}
const myFunction = function(){
    console.log("Hello Rishabh");
}
console.log(typeof myFunction); // function type- function object


//++++++++++++++++++++++++++++++Memory++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory(Primitive Dataypes) get a copy of variable declared , 
// Heap Memory(Non-Primitive Datatypes) we get reference from heap of two or more variables declared



// Stack example
let myYoutubename = "Rishabh Rai"
let anotherName = myYoutubename
anotherName = "Mrinal"
console.log(myYoutubename)
console.log(anotherName)

// Heap Example: in stack 2 var initialized userOne and userTwo but have same reference in heap memory and any changes happen in Original Value
let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rairishabh871@gmail.com"

console.log(userOne.email); //rairishabh871@gmail.com
console.log(userTwo.email); //rairishabh871@gmail.com
