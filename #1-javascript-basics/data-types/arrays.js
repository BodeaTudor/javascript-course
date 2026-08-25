let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);

// getting a certain position in a string
console.log('value at position 1:', ninjas[1]);

// replacing a value at a certain position
ninjas[1] = 'ken';
console.log('array position 1:', ninjas[1]);

let ages = [20, 25, 30, 35];
console.log('array position 2:', ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

// array methods and properties
console.log('length:', ninjas.length);

let join = ninjas.join(',');
console.log('join:', join);

let indexOf = ninjas.indexOf('chun-li');
console.log('indexOf:', indexOf);

let concat = ninjas.concat(['ken', 'crystal']);
console.log('concat', concat);

// add a new value into the array
// push is a 'destructive' method
let push = ninjas.push('pushedValue');
console.log('array length after push:', push); // returns the length of the array
console.log('array values after push:', ninjas);

// destructive method
let pop = ninjas.pop(); // removes the end value
console.log('array value removed by pop:', pop); // return the value that was removed
console.log('array values after pop:', ninjas);
