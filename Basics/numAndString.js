const firstName = "Tanveer";
const lastName = "Shaikh";

console.log(firstName + " " + lastName); // old javascript
console.log(`my firstname is ${firstName} and my lastname is ${lastName}`); // new way to assign in javascript

const username = new String("Tanveerdotcom");
console.log(username[0]);
console.log(username.length);
console.log(username.charAt(5));
console.log(username.substring(2, 7));

let email = "     tan@.com    ";
console.log(email);
console.log(email.trimStart());
console.log(email.trimEnd());
console.log(email.trim());
//
let emailTwo = "Tanveer@google.com";
console.log(emailTwo.replace("tanveer", "luix"));
console.log(emailTwo.includes("luix")); // answer in true or false
console.log(emailTwo.toUpperCase());
console.log(emailTwo.toLowerCase());

const num = new Number(5.5657875);
console.log(num.toFixed(2)); // return two digits after decimal
console.log(Number.MAX_VALUE);

console.log(Math.floor(Math.random() * 10));
//
const followers = 100000;
console.log(followers.toLocaleString());
console.log(followers.toPrecision(2));
console.log(followers.toExponential(4));
console.log(typeof num.toString());
