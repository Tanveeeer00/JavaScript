class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password.toUpperCase()}addedhahhahaha`;
  }
  set password(value) {
    this._password = value;
  }
}

const luix = new user("Luix@example.com", "123abc");
console.log(luix.email);
console.log(luix.password);
