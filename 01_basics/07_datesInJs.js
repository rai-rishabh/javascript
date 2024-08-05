// Temporal is just a proposal not approved
// Temporal: a global object that acts as a top-level namespaces(like Math), that brings a modern date/time to the ECMAScript language.
// easy to use APIs for date and time computations
// support for all time zones
// parse strictly specified string format

// we have already a date/time API

//**********Dates***********/

let myDate = new Date()
console.log(myDate);     //2024-08-05T18:10:50.932Z not readable
console.log(myDate.toString()); // change to string, Mon Aug 05 2024 18:13:47 GMT+0000 (Coordinated Universal Time), a little readable
console.log(myDate.toDateString()); // Mon Aug 05 2024
console.log(myDate.toISOString()); // 2024-08-05T18:14:46.430Z
console.log(myDate.toJSON()); // 2024-08-05T18:15:11.166Z
console.log(myDate.toLocaleDateString()); // 8/5/2024
console.log(myDate.toLocaleString()); // 8/5/2024, 6:16:33 PM
console.log(myDate.toLocaleTimeString()); // 6:17:21 PM


console.log(typeof myDate); // Date is an Object

// Specific date creation
let myCreatedDate1 = new Date(2023, 0, 23) // month is started from 0 in JS
console.log(myCreatedDate1.toLocaleDateString()); // 1/23/2023

let myCreatedDate2 = new Date("12-01-2024") //mm-dd-yy when dates given like this months start from 1
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); //1722883975264 milisec
console.log(myCreatedDate2.getTime()); // 1733011200000 milisec


console.log(Math.floor(Date.now()/1000)); // get time in Seconds
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // August but we get 7 as output. To solve this we can simply add 1 to getMonth()
console.log(newDate.getDay());


// `${newDate.getDay()} and the time is ${newDate.getMonth()}`

//customize
newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: ""
})