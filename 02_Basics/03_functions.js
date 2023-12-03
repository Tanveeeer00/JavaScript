function sayMyName() {
  console.log("l");
  console.log("u");
  console.log("i");
  console.log("x");
}
sayMyName; // it's a reference (note: it won't execute)
// sayMyName(); // for execution we use parenthesis

//

// function addTwoNumbers(number1, number2) {
// it's a parameter
//   console.log(number1 + number2);
// }
// addTwoNumbers(3, 5);    // it's an arguments

//

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result; // nothing will be print after return
  return number1 + number2; // another way
}

// const result = addTwoNumbers(3, 5); // when we want to save result in variable then we use return keyword. we cannot store value in variable with console.log
// console.log("Result: ", result);

//

function loginUserMessage(username = "ken") {
  // ken is default value
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}
loginUserMessage("luix"); // it's executed but not print cause we never print
console.log(loginUserMessage("luix")); // if user did not pass anything then output will be undefined cause it's never been defined

//

function calculateCartPrice(val1, val2, ...num1) {
  // val1= 200, val2=600 and rest value in rest opeartor(...num1)
  return num1;
}
// console.log(calculateCartPrice(200)); // when we know how many arguments are going to pass
console.log(calculateCartPrice(200, 600, 422, 5132, 326, 456)); // when we don't know how many arguments are going to pass then we use rest operator. spread and rest operators are same but it's depends on condition to call. spread operator who spread. a rest operator who wrap up.

//

const user = {
  username: "luix",
  price: 123,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handleObject(user);
handleObject({
  // we can also pass direct object as an arugment to parameter
  username: "ren",
  price: 245,
});

const myNewArray = [200, 154, 654, 647];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 62, 302, 48, 658])); // we can also direct array in function
