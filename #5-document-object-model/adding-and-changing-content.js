const para = document.querySelector('p');
console.log(para.innerText);
para.innerText = "HACKERMAN!";

const paras = document.querySelectorAll('p');
paras.forEach(p => {
    console.log(p.innerText);
    p.innerText += ' extra test :D';
});

let content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML = `<h2> THIS IS A NEW H2</h2>`;

const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => content.innerHTML += `<p>${person}</p>`);