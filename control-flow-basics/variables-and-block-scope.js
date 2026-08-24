// the variable is created in the root of the document and will have global scope, meaning that it can be accessed anywhere
// in the file
let age = 30;
// let age = 50; <- cannot have two variables with the same name in the same scope

if (true) {
    let age = 40; // local scope variable only accessible inside the code block
    let name = 'mario';
    console.log('inside first code block second age variable: ', age, name);

    if (true) {
        let age = 50;
        console.log('inside second code block: ', age); // the most recent defined value is being used
        var test = 'hello'; // the var keyword is ignoring the block scope and can be accessed outside of it
    }
}

console.log('outside code block: ', age, name, test);