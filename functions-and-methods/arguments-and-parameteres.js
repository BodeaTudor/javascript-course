// when a value is received by a function it is named a parameter
// default values can be assigned to parameters
const speak = function (name = 'luigi', time = 'night') {
    console.log(`Good ${time} ${name}!`);
};

// when a value is passed to a function it is named an argument
speak('mario', 'morning');
speak();