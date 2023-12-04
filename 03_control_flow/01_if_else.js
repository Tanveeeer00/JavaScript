/*
if (condition) {

}
*/

// <, >, <=, >=, ==, !=, ===, !==

if (true) {
  console.log("it will execute");
}

// if

const isUserloggedIn = true;
if (isUserloggedIn) {
  console.log("yes! user are logged in");
}
console.log("Execute");

// if else

const temperature = 45;
if (temperature === 40) {
  console.log("less than 40");
} else {
  console.log("temperature is greater than 40");
}
console.log("Excute");

// Scope concept

const score = 200;
if (score > 100) {
  let power = "fly";
  var ability = "wind";
  console.log(`User power: ${power} and ability : ${ability}`);
}
// console.log(power);   // the value of let and const are not leaking outside of scope.
console.log(ability); // the value of var is leaking outside the block of code.

// shortHand

const balance = 1000;
if (balance > 500) console.log("greater than 500"); // implicit or shorthand. js assume cruly bracket so there is no need to write {}

// if (balance > 500) console.log("greater than 500"), console.log("test2");   // it is shorthand too but it isn't readable and bad practice too

// else if

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

// && (and : all should be true) / ||(or : atleast 1 should be true)

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User logged in");
}
