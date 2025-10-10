let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "Keegan";
console.log(myString);
console.log(anotherString);
console.log(hello);
console.log(myName);

let strLength = myString.length;
console.log(strLength);

let strChar = myString.charAt(0);
console.log(strChar);

strChar = myString.charAt(10);
console.log(strChar);

let sliced = myString.slice(5, 9);
console.log(sliced);

let substr = anotherString.substring(6, 9);
console.log(substr);

myName = myName.toUpperCase();
console.log(myName);
myName = myName.toLowerCase();
console.log(myName);