// File: script.js
// Desc: This file shows how to manipulate strings and also how to write and read strings to/from .txt files
// Author: Keegan Hughes
// Date: 24/10/2025
// Modified: 24/10/2025

// Defines various strings and logs them out onto the console
let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "Keegan";
console.log("The string 'myString' has been created with the value: " + myString);
console.log("The string 'anotherString' has been created with the value: " + anotherString);
console.log("The string 'hello' has been created with the value: " + hello);
console.log("The string 'myName' has been created with the value: " + myName);

// Gets the string length and saves it as a variable before logging it out
let str = myString.length;
console.log("The length of the string 'myString' is " + str);

// Gets the first character of the string and saves it as a variable before logging it out
str = myString.charAt(0);
console.log("The first character of the string 'myString' is " + str);

// Gets the 11th character of the string and saves it as a variable before logging it out
str = myString.charAt(10);
console.log("The 11th character of the string 'myString' is " + str);

// Uses the slice function to get the "is a" from the string and saves it as a variable before logging it out
str = myString.slice(5, 9);
console.log("The output of the slice function is " + str);

// Uses the substring function to get "the" from the string and saves it as a variable before logging it out
str = anotherString.substring(6, 9);
console.log("The output of the substring function is " + str);

// Uses the toUpperCase function to get the string in all uppercase and saves it as a variable before logging it out
str = myName.toUpperCase();
console.log("The output of the uppercase function is " + str);

// Uses the toLowerCase function to get the string in all lowercase and saves it as a variable before logging it out
str = myName.toLowerCase();
console.log("The output of the lowercase function is " + str);

// Uses the concat function to add the myName string to the end of the hello string and saves it as a variable before logging it out
str = hello.concat(myName);
console.log("The output of the concat function is " + str);

// Uses the trim function to remove the white space from the beginning of the string and saves it as a variable before logging it out
str = anotherString.trim();
console.log("The output of the trim function is " + str);

// Uses the replace function to remove the "is a" from the string and put "" where it was, leaving an empty space, and then saves it as a variable before logging it out
str = myString.replace("is a", "");
console.log("The output of the replace function is " + str);

// Uses the split function to seperate the string into multiple strings based on the spaces to return them as an array and saves it as a variable before logging it out
str = myString.split(" ");
console.log("The output of the split function is " + str);

// An algorithm to save a string to a text file and download it to the user computer
function saveText(text) {
  // Saves the string to write to the file as a variable
  const stringVal = text;

  // Sets the string that will be the file name
  const fileName = "output.txt";
  // Creates a link element in the DOM
  const element = document.createElement('a');
  // Sets the contents of the file to the string variable set earlier
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(stringVal));
  // Sets the file name to the variable set earlier and makes it so the link element will download the file once clicked
  element.setAttribute('download', fileName);

  // Fakes a click on the link element to download the file to the user computer
  element.click();
};

// An algorithm to read a text file provided by the user
function readText() {
  // Gets the file provided by the user from the DOM and saves it as a variable
  const fileInput = document.getElementById('fileinput');
  const file = fileInput.files[0];

  // Opens and reads the file provided
  const reader = new FileReader();
  reader.onload = function(e) {
    // Gets the text content of the file and saves it as a variable
    const fileContent = e.target.result;

    // Logs out the contents of the variable
    console.log("Your text file contents are: " + fileContent);
  };

  // Reads the file
  reader.readAsText(file);
};

// Gets the save button from the DOM and saves it as a variable
const svButton = document.getElementById('save');
// Attaches the saveText() function to the save button in the DOM
svButton.addEventListener('click', function() { saveText(myString); });
// Gets the read button from the DOM and saves is as a variable
const rdButton = document.getElementById('read');
// Attaches the readText() function to the read button in the DOM
rdButton.addEventListener('click', function() { readText(); });