// callback functions
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

// myFunc(function (value) {
//     console.log(value);
// });

// converted to arrow function
myFunc(value => console.log(value));


// foreach method
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// people.forEach((person, index) => console.log(index, person));

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);

// callback functions in action
const ul = document.querySelector('.people'); // get a reference to the 'ul'

let html = ``;

people.forEach(person => {
    // create HTML template
    html += `<li style="color: purple">${person}</li>`
})

console.log(html);
ul.innerHTML = html;