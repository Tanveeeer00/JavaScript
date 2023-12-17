// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

const user = {
  username: "Luix",
  email: "Luix@EXAMPLE.COM",
  password: 15,

  isAvailable: function () {
    console.log("not available");
  },
};
console.log(Object.getOwnPropertyDescriptor(user, "username"));

Object.defineProperty(user, "username", {
  writeable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(user, "username"));

for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
