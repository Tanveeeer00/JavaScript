// map by default return value
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => {return num + 10;});

const newNums = myNumbers.map((num) => num + 10);
console.log(newNums); // both methods are same

//

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.map((item) => {
  return item;
});
console.log(values);

//  chaining
//  map chaining syntax : .map().map().filter...... // we can add as many as map and we can also add filter too

const chainingNum = myNumbers
  .map((chain) => chain * 10) // the output will pass to the another chain.
  .map((chain) => chain + 2)
  .filter((chain) => chain >= 30);
console.log(chainingNum);
