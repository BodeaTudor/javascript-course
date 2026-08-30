// set attributes that already exist
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.github.com');
link.innerText = "LINK TO GITHUB";

const mesg = document.querySelector('p');
console.log(mesg.getAttribute('class'));

mesg.setAttribute('class', 'success');
console.log(mesg.getAttribute('class'));

// set attributes that don't exist
mesg.setAttribute('style', 'color: green;');