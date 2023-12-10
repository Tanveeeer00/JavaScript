// DOM : Document Object Model

console.log(window);

console.log(window.document);
console.log(document); // we can write directly document instead of window.document

console.dir(document); // for list or function of document we will use .dir instead of .log

console.log(baseURI);

console.log(document.links);
console.log(document.links[2]);

document.getElementById("heading1");
document.getElementById("heading1").innerHTML = "<h1>Luix</h1>";
