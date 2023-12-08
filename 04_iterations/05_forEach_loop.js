//  arrays : for each loop
// for each by default injected in arrays. (eg. coding.length, coding.split, etc) check on prototypes for more....
// we write function in (). which is run array so it will take array as a parameter in it. we are calling callback so we do not write name in function.
// function syntax : () => {} , function (){}
const coding = ["js", "ruby", "java", "python", "cpp"];
coding.forEach(function (item) {
  //   console.log(item);
});

coding.forEach((val) => {
  //   console.log(val);
});

//  we make function at here and pass as a parameter to for each loop (note: we send reference not execution)
function printMe(item) {
  //   console.log(item);
}

coding.forEach(printMe);

// in for each function it takes other parameters too like index number, whole array access
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// object in array. we can access by there key or value
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
  console.log(item.languageFileName);
});
