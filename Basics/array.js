const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray);
console.log(myArray[1]);

//second way to declare array

const myNewArray = new Array(1, 2, 3, 4, 5);
console.log(myNewArray);

const dcHeros = ["batman", "superman", "flash", "GL", "Arrow"];

dcHeros[dcHeros.length] = "wonder women";
dcHeros.push("joker");
console.log(dcHeros);
//
const lastHero = dcHeros.pop();
console.log(lastHero);
//
dcHeros.unshift("aquaman");
//
console.log(typeof dcHeros.toString());
console.log(dcHeros.toString());
//
console.log(dcHeros.join("-"));
//
console.log(dcHeros.slice(1, 3)); //stack : copy
//
console.log(dcHeros.splice(1, 3)); // heap : reference
//
const trial = ["hello", "morning", "night", "noon"];
trial.shift();
console.log(trial);
console.log(trial.shift());
