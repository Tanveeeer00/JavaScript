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

// another simple way without and complexity

// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);

// advanced with tricky question

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Luix"));
console.log(Array.from("Luix"));
console.log(Array.from({ name: "Luix" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
