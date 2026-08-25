// logical operators - OR ||
//                   - AND &&
//                   - NOT !

const password = 'p@ss12';

if (password.length >= 12 && password.includes('@')) {
    console.log("That password is mighty strong!");
} else if (password.length >= 8 || password.includes('@') && password.length >= 5) {

    console.log("The password is long enough..");
} else {
    console.log("The password is too short!");
}

console.log(!true);
console.log(!false);

let user = false;
if (!user) {
    console.log('condition reversed');
}