// sometimes you might want to store information that cannot be represented by a number.
// For example, the product for which we already have a price could sometimes be on sale and sometimes not.
// To store this kind of information we can use JavaScript Booleans, like so:

const isOnSale = true;

// The value true indicates that the product is on sale.
// Booleans can have only two values: true and false
// If the product is not on sale, we assign false:
// const isOnSale = false;

// Assign boolean to a variable
// Here, we declare the variable isTrue. But, it has no value yet. Assign a boolean value to it and run the code.

let isTrue;
isTrue = true;
console.log(isTrue);

// sometimes we want to work with other data types, such as numbers, in a Boolean context.
// Actually, every single value in JavaScript can be transformed to a boolean value.
// To do so, we can make use of the Boolean() function. Let's try it:
console.log(Boolean(100));
// true

// Here, we forced the value 100 to be converted to a Boolean, and the result is true.
// But, why does 100 become true? That's where the concepts of truthy and falsy come in.
// Every single value in JavaScript is considered either truthy or falsy. Truthy values result in the value true when coerced into a Boolean value. Falsy values result in the value false.
// All of the following values are falsy:

/*false
null
undefined
0
-0
NaN
An empty string ('')
*/
