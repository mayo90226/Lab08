//1

let num1 = 10;
let num2 = 5;

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;


console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);


//2
let firstName = "Chad";
let lastName = "Katz";

let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);

//3

let x = 5;
var y = 10;

console.log("x:", x);
console.log("y:", y);

x = 7;
y = 15;

console.log("x:", x);
console.log("y:", y);

//4


let counter = 0;

for (let i = 0; i < 5; i++) {
    counter++;
}

console.log("counter:", counter);

//5a

let num1String = prompt("Enter the first number:");
let num2String = prompt("Enter the second number:");

let inpNum1 = parseFloat(num1String);
let intNum2 = parseFloat(num2String);
let sum = inpNum1 + intNum2;

console.log("Sum:", sum);

//5b

let age = 25;
let ageString = age.toString() + " years old";
console.log("Age string:", ageString);