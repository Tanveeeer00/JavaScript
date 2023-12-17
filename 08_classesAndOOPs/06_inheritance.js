class user {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}
const one = new teacher("Luix", "luix@gmail.com", "12223");
one.logMe();
one.addCourse();

const two = new user("Tanveer");
two.logMe();

// console.log(one === two);
console.log(one instanceof user);
console.log(two instanceof teacher);
