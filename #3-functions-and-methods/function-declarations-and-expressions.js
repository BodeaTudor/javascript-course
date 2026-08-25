// function declaration

/* function syntax:
 function function_name() {
    code block
}
 */

/*function greet() {
    console.log('Hello World!');
}*/


// function expression
// the name of the function in this case is the name of variable
// this way of declaring a function is known as a function expression
// hoisting does not work with function expressions
const speak = function () {
    console.log('Good day!');
};

greet(); // invoking the function
greet();
greet();

speak();
speak();
speak();

// this function gets hoisted to the top
function greet() {
    console.log('Hello World!');
}