class user {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username : ${this.username}`);
  }
  static createId() {
    // static keyword cannot give their property to others
    return "123";
  }
}

// const one = new user("Luix");
// console.log(one);
// console.log(one.logMe());
// console.log(one.createId());

class Teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const two = new Teacher("Luix", "Luix@example.com");
console.log(two.createId());
