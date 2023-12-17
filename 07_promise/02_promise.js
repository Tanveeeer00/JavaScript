// new Promise(function(resole,reject){})   // syntax
// Promise().then().catch()

const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("promise consumed");
});

//

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 ");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 resolved");
});

//

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Luix", email: "example@gamil.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

//

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Tanveer", mail: "example@gmail.com" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

//

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error: ", error);
  })
  .finally(() => {
    console.log("finally data arrived");
  });

Promise.all([promiseOne, promiseThree, promiseFour, promiseFive]).then(
  (values) => {
    console.log(values);
  }
);
/*
// promise.all
// Promise.all(iterable)   // syntax

Parameters: An iterable (such as an Array) of promises.

// yes this is also available, kuch reading aap b kro.
*/
