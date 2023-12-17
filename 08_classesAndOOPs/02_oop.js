// object literal
const user = {
  userName: "Luix",
  loginCount: "8",
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got User details from database");
    console.log(`${this.userName}`); // we let to know them from where we are taking, so we use"this"
    console.log(this);
  },
};
console.log(user.userName);
console.log(user.getUserDetails());
console.log(this);

// const promiseOne = new Promise(); // new keyword is a construct function, allow to create multiple instances
// const date = new Date();

function userone(userName, loginCount, isloggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isloggedIn = isloggedIn;
  this.greeting = function () {
    console.log(`welcome ${this.userName}`);
  };
  return this;
}

const userTestOne = new userone("luix", 12, true);
const userTestTwo = new userone("Tanveer", 15, true); // it will overwrite on userOne, so we use "new" keyword. it wil create empty object which is new instance.
// console.log(userTestOne);
// console.log(userTestTwo);
console.log(userTestOne.constructor);

/* 
step 1 : create new empty object or instance
step 2 : construction function will call cause of new keyword, now it will wrap up all arguments.
step 3 : this keyword inject all argument which is wrap in step 2
*/
