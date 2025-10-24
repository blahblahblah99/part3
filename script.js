let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "Keegan";
console.log(myString);
console.log(anotherString);
console.log(hello);
console.log(myName);

let str = myString.length;
console.log(str);

str = myString.charAt(0);
console.log(str);

str = myString.charAt(10);
console.log(str);

str = myString.slice(5, 9);
console.log(str);

str = anotherString.substring(6, 9);
console.log(str);

str = myName.toUpperCase();
console.log(str);
str = myName.toLowerCase();
console.log(str);

str = hello.concat(myName);
console.log(str);

str = anotherString.trim();
console.log(str);

str = myString.replace("is a", "");
console.log(str);

str = myString.split(" ");
console.log(str);

function saveText(text) {
  const stringVal = text;

  const fileName = "output.txt";
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(stringVal));
  element.setAttribute('download', fileName);

  element.click();
};

function readText() {
  const fileInput = document.getElementById('fileinput');
  const file = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function(e) {
    const fileContent = e.target.result;

    console.log("Your text file contents are: " + fileContent);
  };

  reader.readAsText(file);
};

const svButton = document.getElementById('save');
svButton.addEventListener('click', function() { saveText(myString); });
const rdButton = document.getElementById('read');
rdButton.addEventListener('click', function() { readText(); });