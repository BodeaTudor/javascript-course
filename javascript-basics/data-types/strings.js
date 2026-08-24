// string
console.log('hello world!');

let email = 'mario@marioworld.com';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log("fullName: ", fullName);

// getting characters
console.log("position 0: ", fullName[0]); // get the character at the first position i.e. 0
console.log("position 3: ", fullName[3]);

// string length
console.log("length: ", fullName.length);

// string methods
console.log("toUpperCase: ", fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log("toLowerCase: ", result);

let index = email.indexOf('@');
console.log("indexOf: ", index);

// common string methods
let lastIndexOf = email.lastIndexOf('d');
console.log("lastIndexOf: ", lastIndexOf);

let slice = email.slice(0, 10);
console.log("slice: ", slice);

let substring = email.substring(4, 10);
console.log("substring: ", substring);

let replace = email.replace('m', 'w');
console.log("replace: ", replace);
