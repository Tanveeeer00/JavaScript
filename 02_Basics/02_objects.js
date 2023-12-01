// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const user = {
  username: "tanveeeer00",
  "first name": "Tanveer",
  [mySym]: "mykey1",
  email: "luix@gmail.com",
  age: 21,
  isAdmin: false,
  isLoggedIn: true,
  genre: ["rom", "action", "com"],
  address: {
    city: "mumbai",
    state: "maharashtra",
  },
};

// console.log(user);
const anotherUser = user;
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["first name"]);
// console.log(user[mySym]);
// console.log(user.genre[1]);
// console.log(user.address.state);
// console.log(user["address"]["state"]);

user.email = "tanveer@email.com";
Object.freeze(user);
user.email = "tanveer@google.com";
// console.log(user);
// console.log(anotherUser);

// console.log(delete user.isAdmin);
const userListFromDatabase = [{}, {}, {}];
// console.log(user.hasOwnProperty("genre"));
// console.log(Object.entries(user));

user.greeting = function () {
  // console.log("hello JavaScript user");
};

user.greetingTwo = function () {
  // console.log(`Hello js user , ${this.name}`);
};

// console.log(user.greeting());
// console.log(user.greetingTwo());

// another TRICK AND ADVANCE

// const instaUser = new Object()  // SINGLETON OBJECT
const instaUser = {}; // NON SINGLETON OBJECT

instaUser.id = "112354";
instaUser.name = "Luix";
instaUser.isLoggedIn = false;
// console.log(instaUser);

const premiumUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Luix",
      lastname: "Gamer",
    },
  },
};

// console.log(premiumUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2, obj4);

// const obj3 = { ...obj1, ...obj2, ...obj4 };

// console.log(obj3);

const allUser = [
  {
    id: 1,
    email: "yo@email.com",
  },
  {
    id: 2,
    email: "helloo@email.com",
  },
  {
    id: 3,
    email: "hey@email.com",
  },
];

// console.log(allUser[2].email);
// console.log(allUser);

// console.log(Object.keys(allUser));
// console.log(Object.values(allUser));
// console.log(Object.entries(allUser));

// console.log(allUser.hasOwnProperty("isLoogedIn"));

const repo = {
  repoName: "JavaSript",
  access: "public",
  owner: "Luix",
};

console.log(repo.owner); // for accessing an owner key we need to write this long.
const { owner } = repo; // destructing object
console.log(owner); // short hand
const { owner: creater } = repo; // customise key to access.
console.log(creater);

// API OBJECT

// {
// "name": "hitesh",
// "coursename": "js in hindi",
// "price": "free"
// }

// [
// {},
// {},
// {}
// ]
