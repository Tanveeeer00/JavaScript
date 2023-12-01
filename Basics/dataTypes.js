// Primitive (STACK)
/*
String
Number
Boolean
Null
Undefined
Symbol
BigInt

*/

const name = "Tanveer";
const id = 15;
const grade = 90.7;
let isLogged = true;
const iq = null;
let balance = undefined;
const logo = Symbol("avatar");
const stars = 7203651484623154265136n;

console.log(name, id, grade, isLogged, iq, balance, logo, stars);

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
