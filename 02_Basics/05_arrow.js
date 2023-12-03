// The `this` keyword in JavaScript is a special variable that refers to the current execution context of a function. The value of `this` is different depending on how the function is called.

// **Function Calls**
// When a function is called directly, the value of `this` is the global object. For example:

/*
function sayHello() {
  console.log(this); // Output: { window: Window }
}

sayHello();
*/

// **Method Calls**
// When a function is called as a method of an object, the value of `this` is the object that owns the method. For example:

/*
const person = {
  name: "John Doe",
  sayHello: function() {
    console.log(this.name); // Output: John Doe
  }
};

person.sayHello();
*/

// **Arrow Functions**
// Arrow functions do not have their own `this` binding. Instead, they inherit the `this` binding of their surrounding function. For example:

/*
const person = {
  name: "John Doe",
  sayHello: function() {
    const greet = () => {
      console.log(this.name); // Output: John Doe
    };
    greet();
  }
};

person.sayHello();
*/

// **Event Handlers**
// When a function is used as an event handler, the value of `this` is the element that triggered the event. For example:

/*
document.getElementById('button').addEventListener('click', function() {
  console.log(this); // Output: <button id="button">Click me</button>
});
;*/

// the value of `this` in JavaScript is determined by the call context of the function. It can refer to the global object, an object instance, or the element that triggered an event.

const user = {
  username: "luix",
  followers: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to site`);
  },
};

user.welcomeMessage();
user.username = "ren";
user.welcomeMessage();

console.log(this);

// function types() {
//   let username = "hitesh";
//   console.log(this.username);
// }
// types();

//

// const types = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
//  types()

//

const types = () => {
  let username = "hitesh";
  console.log(this);
};
types();

//

// const addTwo = (num1, num2) => {  // () => {} // in curly brtacket we need to use return keyword but in paranyhesis bracket we dont need to write return keyword.
//   return num1 + num2;
// };

//

// const addTwo = (num1, num2) => num1 + num2;      // () =>

//

// const addTwo = (num1, num2) => (num1 + num2);    // () => ()

//

// const addTwo = (num1, num2) => ({ username: "luix" });  //for pasing object we need parenthesis bracket.

console.log(addTwo(3, 4));
