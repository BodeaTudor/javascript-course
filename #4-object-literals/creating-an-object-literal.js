let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@someemail.com',
    location: 'berlin',
    blogs: ['Why mac & cheese rules', '10 things to make with marmite'],
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

// another way to access a property
console.log(user['name']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);