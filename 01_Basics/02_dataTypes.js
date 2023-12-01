("use strict"); // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser
console.log(3 + 3); // code readability should be high

// Primitive (STACK)
/*
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique


*/

const name = "Tanveer";
const id = 15;
const grade = 90.7;
let isLogged = true;
const iq = null;
let balance = undefined;
const logo = Symbol("avatar");
const stars = 7203651484623154265136n;
let state;

console.log(name, id, grade, isLogged, iq, balance, logo, stars, state);

// Reference (Non-primitive) - Objects (HEAP)

/*
Arrays
Objects
Functions

*/
const numbers = [1, 2, 3, 4, 5];
const heroes = ["superman", "batman", "flash", true, 123];

const userObject = {
  name: "hitesh",
  age: 20,
  isLoggedIn: true,
};

//function
const sayHello = function () {
  console.log("hitesh");
};

const registerAUser = function () {};
const loginUser = function () {};

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
