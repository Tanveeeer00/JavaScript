// const and let couldn't leak outside of block but var leak outside the block.
// var overwrite the value inside block but const and let don't mess with others code.
var c = 300;

// let a = 300;
if (true) {
  let a = 30;
  const b = 30;
  var c = 20;
  //   console.log("inner : ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

//

// example: 5 y.o boy can ask for candy from his daddy but daddy cannot ask for candy from his son.
// child function(func two) ask variable for parent function (func one)but parent function cannot ask for variable from child function.

function one() {
  const username = "luix";
  function two() {
    const website = "github";
    console.log(username);
  }
  //   console.log(website);
  two();
}
// one();

//

if (true) {
  const user = "luix";
  if (user === "luix") {
    const site = "github";
    console.log(user + site);
  }
  //   console.log(site);     // it cannot leak outside
}
// console.log(user);

//

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)); // it will execute even it's upper on func

function addone(num) {
  return num + 1;
}

// console.log(addTwo(5)); // it will throw error if we console upper on func (On this function syntax)
const addTwo = function (num) {
  return num + 2;
};
