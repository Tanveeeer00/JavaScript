const score = 400;
console.log(score);

const num = new Number(5.5657875);
console.log(num);
console.log(num.toString().length);
console.log(num.toFixed(2)); // return two digits after decimal
console.log(Number.MAX_VALUE);

const otherNumber = 123.4532;
console.log(otherNumber.toPrecision(6)); // will display only as many numbers as you pass in arguments.

const followers = 100000;
console.log(followers.toLocaleString("en-IN"));
console.log(followers.toLocaleString());
console.log(followers.toExponential(4));
console.log(typeof num.toString());

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(6.4));
console.log(Math.floor(7.8));
console.log(Math.min(4, 5, 8, 4, 9, 7, 6, 2));
console.log(Math.max(4, 5, 8, 4, 9, 7, 6, 2));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
