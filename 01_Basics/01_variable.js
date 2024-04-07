// Variables - let
// Constants - const

let userName = "Tanveer";
const email = "shaikhtanveer5205@gmail.com";
let password = "123";
password = "12345";

// console.log(userName);
// console.log(email);
// console.log(password);

// another solve

const accountId = 123546;
let accountEmail = "luix@gmail.com";
var vaccountPassword = "1532345";
let accountCity = "mumbai";
let accountState;

accountEmail = "l@gamil.com";
accountPassword = "254564";
accountCity = "chennai";

// accountId = 2 // not allowed

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// Reassign a value to a variable
// Assign a new value to the variable num. The code will not work the way it is. Find the mistake and fix it. Execute the corrected code.
let num = 1;
num = 2;
console.log(num);

// Assign a value to a variable
// Here, we declare the variable num. But, it has no value yet. Assign a value to it and run the code.

let num1;
num1 = 2;
console.log(num1);

// Assign the value of another variable
// Here, we have two variables numOne and numTwo. numOne already has a value. Assign numTwo the value of numOne and run the code.
let numberOne = 5;
let numberTwo = numberOne;
console.log(numberTwo);

// Create the missing variable
// Below, we attempt to assign the value of a variable named numOne to the variable numTwo. But, that variable has not been declared yet. Declare a variable named numOne

let numOne = 5;
let numTwo = numOne;
console.log(numTwo);

// create variables with const and look at the differences between let and const.
// The difference between the two is that you can not assign a new value to a variable that was created with const.
// You also cannot declare a const-variable without assigning a value to it directly. See what happens if you try anyway:
// const test;              // SyntaxError: Missing initializer in const declaration

// In this exercise we practice how to declare a new variable and how to assign it a number. The console.log() statement below attempts to log a variable named num.
// Declare a variable with this name and assign it a number of your choice. Run the code to see if the number is being logged.

const num3 = 5;
console.log("The value of num is: " + num3);
