const User = {
  _email: "Luix@example.com",
  _password: "123abc",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const test = Object.create(User);
console.log(test.email);
// console.log(test._password);
