function Setusername(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  Setusername.call(this, username);

  this.email = email;
  this.password = password;
}

const user = new createUser("luix", "luix@email.com", 123);
console.log(user);
