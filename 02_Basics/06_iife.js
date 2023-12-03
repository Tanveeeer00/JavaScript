// Immediately Invoked Function Expressions (IIFE)

// we use iife cause we do not want to pollute our function by global scope variable and want to execute immediately

(function one() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("luix");

// ()()
// one()
// (one)() // wrap up function in parenthesis bracket
// ()();()()
