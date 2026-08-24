// template strings
const title = 'Best reads of 2026';
const author = 'Mario';
const likes = 30;

// concatenation way
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log('concatenation: ', result);

// template strings (template literal) way
// a template string is created using the ` symbol
let tsResult = `The blog called ${title} by ${author} has ${likes} likes`;
console.log('template string: ', tsResult);

// creating HTML templates
let html = `
 <h2>${title}</h2>
 <p>${author}</p>
 <span> This blog has ${likes} likes</span>
`;

console.log(html);
