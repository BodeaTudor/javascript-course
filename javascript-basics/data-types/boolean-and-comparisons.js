// booleans & comparisons
console.log(true, false);
console.log('true', 'false'); // these are strings and are not the same as the booleans above

// method can return booleans
let email = 'luigi@marioworld.com';

let includes = email.includes('@');
console.log('includes \'@\': ' + includes);
includes = email.includes('!');
console.log('includes \'!\': ' + includes);

let names = ['mario', 'luigi', 'toad'];
console.log(names);

includes = names.includes('luigi');
console.log('includes \'luigi\': ' + includes);
includes = names.includes('bowser');
console.log('includes \'bowser\': ' + includes);


// comparison operators
let age = 25;
console.log('age:', age)
console.log('age == 25:', age == 25);
console.log('age == 30:', age == 30);
console.log('age != 30:', age != 30);
console.log('age > 20:', age > 20);
console.log('age < 20:', age < 20);
console.log('age <= 25:', age <= 25);
console.log('age >= 25:', age >= 25);

let name = 'mario';
console.log('mario == mario', name == 'mario');
console.log('mario == Mario', name == 'Mario');

// later letters in the alphabet are greater than earlier letters
console.log('mario > crystal', name > 'crystal');

// lowercase letters are grater than uppercase letters
console.log('mario > Mario', name > 'Mario');
console.log('mario > Crystal', name > 'Crystal');