/*
 while loop syntax:
 while (condition) {
    code block
    incremental
 }
*/

let i = 0;
while (i < 5) {
    console.log('in loop: ', i);
    i++;
}

const names = ['shaun', 'mario', 'luigi'];
let j = 0;
while (j < names.length) {
    console.log(j, names[j]);
    j++;
}