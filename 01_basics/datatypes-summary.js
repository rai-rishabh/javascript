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

