let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@someemail.com',
    location: 'berlin',
    blogs: ['Why mac & cheese rules', '10 things to make with marmite'],
    login: function () {
        console.log('the user logged in');
    },
    logout: function () {
        console.log('the user logged out');
    },
    // another way of writing a function inside an object
    logBlogs() {
        console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => console.log(blog));
    },
    arrowFunction: () => {
        console.log(this);
    },
};

user.logBlogs();
console.log(this);

user.arrowFunction();