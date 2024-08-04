 const name = "Rishabh"
 const repoCount = 20
 console.log(name + " " + repoCount + " Value"); //concatenation but outdated

 //backticks (``)
 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 //Another way to declare strings: Using the new String("Rishabh Rai") syntax creates a String object, which has additional properties and methods because it's an object.

 //new String("Rishabh Rai") creates a new String object. This is different from a string primitive. In JavaScript, you can create strings using string literals or the String constructor.

 const gameName = new String("Rishabh Rai")
 console.log(gameName[0]); // R at 0 index
 console.log(gameName[9]); // a at 9th index
 console.log(gameName.__proto__); // gives object currently empty {} --It presents several security issues and footguns.This feature is no longer recommended
   


 //*****************Prototypes*****************
 console.log(gameName.length); // gives size
 console.log(gameName.toUpperCase()); // Uppercase
 console.log(gameName.charAt(3)); //pass index number and check character at that index
 console.log(gameName.indexOf("h"));

// find all indexes of a character in a string
 function findAllIndices(str, char) {
    const indices = [];
    let index = str.indexOf(char);
    
    while (index !== -1) {
      indices.push(index);
      index = str.indexOf(char, index + 1);
    }  
    return indices;
  }
  // Usage example
  const myName = "hijmokjnhbyugvtctfhnijmopljinhubgyvtfcdr";
  const searchChar = "h";
  const indices = findAllIndices(myName, searchChar);
  console.log(indices);



//**************Printing Substrings: it prints all character from a given range of indices*****************
const newString = gameName.substring(0, 4) //4 is excluded 
console.log(newString);

// *********SLICE: another method to find substring*******advantage- can give negative values(for reverse string)
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

//******TRIM method********
const newStringOne ="    Rishabh      "
console.log(newStringOne); // print with spaces
console.log(newStringOne.trim()); //extra spaces removed

//******REPLACE method********
const url = "http://rishabhrai.com/rishabh%20rai"   //%20 assigned in place of spaces by browser automatically 
console.log(url.replace('%20', '-'))

//ask questions using includes()
console.log(url.includes('rai')); // gives true means rai is present in url otherwise gives false


//*********SPLIT*********
console.log(gameName.split(' ')); //split based on spaces (Rishabh Rai) --->[ 'Rishabh', 'Rai' ] an array is formed splitting the terms