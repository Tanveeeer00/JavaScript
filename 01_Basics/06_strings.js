const name = "Luix";
const repoCount = 10;

console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//

const firstName = "Tanveer";
const lastName = "Shaikh";

console.log(firstName + " " + lastName); // old javascript
console.log(`my firstname is ${firstName} and my lastname is ${lastName}`); // new way to assign in javascript

//
const gameName = new String("Luix-txs-cxom");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(4, 7);
console.log(newString);

const anotherString = gameName.slice(-8, 2);
console.log(anotherString);

const newStringOne = "       Luix         ";
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const url = "https://github.com%20Tanveeeer00";
console.log(url.replace("%20", "/"));

console.log(url.includes("check")); // answer in true or false

console.log(gameName.split("-"));
