// console.log(2>1); // boolean value true
// console.log(2>=1);// boolean value true

// console.log("2">1); // JS automatically converts string to number when compared
// console.log("02">1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// equality check(==) and comparisons (> < >= <=) work differently.
// Comparisons convert null to a number, treating it as 0.
// that's why null>=0 is true and null>0 is false

// ===
console.log("2" == 2); // true: The == operator checks for loose equality, meaning it performs type coercion before checking equality.
console.log("2" === 2); // false: The === operator checks for strict equality, meaning both the value and the type must be the same. 

