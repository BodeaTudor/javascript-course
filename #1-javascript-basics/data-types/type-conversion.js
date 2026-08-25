let score = '100';
console.log('typeof', typeof score);
console.log('\'100\' + 1 =', score + 1);

score = Number(score);
console.log('typeof', typeof score);
console.log('100 + 1 =', score + 1);

let stringToNumber = 'hello';
console.log(Number(stringToNumber));

let numberToString = 50;
console.log(String(numberToString));

let numberToBoolean = Boolean(100);
console.log(numberToBoolean, typeof numberToBoolean);

let stringToBoolean = Boolean('0');
console.log(stringToBoolean, typeof stringToBoolean);

let stringToBooleanF = Boolean('');
console.log(stringToBooleanF, typeof stringToBooleanF);