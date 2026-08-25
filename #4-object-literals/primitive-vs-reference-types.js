// primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`)

// reference values
const userOne = {name: 'mario', age: 30};
let userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 1000;
userOne.name = 'mario2';
console.log(userOne, userTwo);