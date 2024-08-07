// array: object- enables storing a collection of multiple items under a single variable name and has memebers for performing common array operations
// In JS, arrays are Resizable and can contain mix datatypes

// array-copy operations create Shallow copy(a copy whose properties share the same references as those of the source object) any change in copy will change in original array

//Array Declaration
const myArr = [0, 3, 2, 5, 4]
const myHeros = [ "Ironman", "Captain America"]
const myArr2 = new Array(1, 2, 3, 4, 5)

console.log(myArr[1]);


//Array Methods
myArr.push(6) // push(): adds 6 in the array and can add multiple numbers (6, 7, 8)
myArr.pop()   // pop(): removes the last element in the array
console.log(myArr);

myArr.unshift(9) // unshift(): adds 9 in start but this not good to use beacause it shifts the position of all next items
myArr.shift()    // shift(): removes the first element
console.log(myArr);

console.log(myArr.includes(11)); // gives false as there is no element 11
console.log(myArr.indexOf(11)); // -1 as qq is not in the array
console.log(myArr.indexOf(3)); // at 1st index


const newArr = myArr.join()
console.log(myArr);  //typeof-object [ 0, 3, 2, 5, 4 ]
console.log(newArr); //0,3,2,5,4 type changes to string


//slice, splice

console.log("A ", myArr); //A  [ 0, 3, 2, 5, 4 ]
const myn1 = myArr.slice(1, 3) //slice: 1,2 only 3 excluded and original array not changed in SLICE
console.log(myn1); //[ 3, 2 ] index 1 and 2 sliced from array
console.log("B ", myArr);  //B  [ 0, 3, 2, 5, 4 ]

const myn2 = myArr.splice(1, 3) // also slice the number but includes all index of a range (1,3- 1, 2 3 all printed)
console.log("C", myArr); // original array is changed in SPLICE(splice portion is removed)
console.log(myn2); //[ 3, 2, 5 ] 