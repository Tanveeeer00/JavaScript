// Formula or method :
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// "InitialValue": ,0 after function is initial value, its initialize only once. we can initialize with any number but most of the time we put 0.
// "accumulator" : The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].
// "currentValue" : current value of array. The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].
// Exception : Thrown if the array contains no elements and initialValue is not provided.
//

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0); // in arrow function without {}. both are same.
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
