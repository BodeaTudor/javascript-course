/*
    do-while syntax:
    do {
        code block
        incremental;
    } while (condition);

    The do while loop is used to execute the code inside the do block at least once even the condition is not met.
*/

let i = 5;

do {
    console.log('val of i is: ', i);
    i++;
} while (i < 5);