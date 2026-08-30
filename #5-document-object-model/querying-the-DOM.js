// this line of code is reaching into the index.html document, it goes from top to bottom then it's grabbing the first
// p tag it comes across, and it ignores the rest
const paragraph = document.querySelector('p');
console.log(paragraph);

const error = document.querySelector('.error');
console.log(error);

const divError = document.querySelector('div.error');
console.log(divError);

// grabbing multiple elements
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[0]);
paragraphs.forEach(p => console.log(p));

const errors = document.querySelectorAll('.error');
console.log(errors);

// grabbing an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errorsByClassName = document.getElementsByClassName('error');
console.log(errorsByClassName);
console.log(errorsByClassName[0]);
// errorsByClassName.forEach(error => console.log(error)); // foreach is not working on HTML Collections

// get element by their tag name
const paragraphsByTagName = document.getElementsByTagName('p');
console.log(paragraphsByTagName)