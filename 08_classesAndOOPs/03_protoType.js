// javascript is a protoType behaviour. just like onion it has layer, will keep trying out to reach on answer, until it's reach to null

// let myName = "hitesh     ";
// let mychannel = "chai     ";

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
Object.prototype.luix = function () {
  console.log(
    `luix is present in all objects cause we set by default in object.`
  );
};

Array.prototype.heyLuix = function () {
  console.log(
    "Array properties set in only array, it cannot pass to anyone. haha"
  );
};
// heroPower.luix();
// myHeros.luix();

myHeros.heyLuix();
// heroPower.heyLuix(); // it does not have property.

// inheritance

const user = {
  name: "tanveer",
  email: "tanveer@example.com",
};
const teacher = {
  makeVideo: true,
};
const teachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUserName = "luix          ";

String.prototype.truelength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};

anotherUserName.truelength();
"Tanveer".truelength();
"JavaScript".truelength();
