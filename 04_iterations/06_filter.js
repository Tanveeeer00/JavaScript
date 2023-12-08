//  filter based on true false type of conditons
// filter by default return values
// it will give us error cause in for each it doesn't work like that, so we use filter instead.

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  //   console.log(item);
  // it won't return anything in values variable so we use return keyword
  return item;
});
// console.log(values)

//  different methed to return value.

const lang = [];
coding.forEach((langArr) => {
  lang.push(langArr);
});
// console.log(lang);

//

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = [];
myNums.forEach((item) => {
  if (item > 4) {
    newNums.push(item);
  }
});
// console.log(newNums);

// filter.
// note : add return keyword when you use {}.

const filNum = myNums.filter((item) => {
  return item > 4;
});

// console.log(filNum);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let genreBooks = books.filter((bk) => bk.genre === "History");
console.log("genre book", genreBooks);

let publishBooks = books.filter((bk) => {
  return bk.publish >= 1995;
});
console.log("publish year", publishBooks);

let userBooks = publishBooks && genreBooks;
console.log("User Filter", userBooks);
