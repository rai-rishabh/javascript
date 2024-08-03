const accountId = 4568656 //value cannot change in const
let accountEmail = "rairishabh871@gmail.com" // no scope({}) problem in using this and can be changed
var accountPassword = "1234" // scope problem when make changes in one var all others also change
accountCity = "Mau" //also saved to memory without using let and var but its not good to use in JS
let accountState; //undefined
// Prefer not to use var because of issue in block scope and functional scope
// accountId = 2 not allowed
accountEmail = "rrai@yotta.com"
accountCity = "Navi Mumbai"
accountPassword = "123456789"

console.log(accountId); //to print
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); // We get all the values in form of table


