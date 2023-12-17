//ES6

// class user {
//   constructor(userName, email, password) {
//     // constructor keyword invoke when new keyword use.
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.userName.toUpperCase()}`;
//   }
// }

// const one = new user("Luix", "luix@gamil.com", 123);

// console.log(one);
// console.log(one.encryptPassword());
// console.log(one.changeUsername());

// behind the scene

function user(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

user.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
user.prototype.changeUsername = function () {
  return `${this.userName.toUpperCase()}`;
};
const one = new user("Luix", "luix@gamil.com", 123);
console.log(one);
console.log(one.encryptPassword());
console.log(one.changeUsername());
