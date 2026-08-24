let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators: +, -, *, /, **, %
console.log(10 / 5);

let remainder = radius % 3;
console.log('remainder: ', remainder);

let result = pi * radius ** 2;
console.log('circle area: ', result);

// order of operation - B I D M A S
//                    - Brackets Indices (**) Division Multiplication Addition Substraction

let orderOfOperation = 5 * (10 - 3) ** 2;
console.log('orderOfOperation: ', orderOfOperation);

let likes = 10;
// likes = likes + 1;
likes ++; // shorthand
console.log('likes:', likes);

likes += 10; // shorthand
console.log('likes: ', likes);

// NaN - Not a Number
console.log(5 / 'hello');
console.log(5 * 'world');

// concatenating numbers
let concatenate = 'the blog has ' + likes + ' likes';
console.log('concatenate: ', concatenate);