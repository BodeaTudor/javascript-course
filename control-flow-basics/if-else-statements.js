const age = 25;

if (age > 20) {
    console.log('You are over 20 year old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if (ninjas.length > 3) {
    console.log("That's a lot of ninjas!");
}

const password = 'p@ss';

if (password.length >= 12) {
    console.log("That password is mighty strong!");
} else if (password.length >= 8) {
    console.log("The password is long enough..");
} else {
    console.log("The password is too short!");
}