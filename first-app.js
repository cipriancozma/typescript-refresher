var userName = "ciprian";
var isMarried = true;
var age = 18;
// Union Types
var userId = 'abc1';
userId = 23;
var user;
user = {
    name: 'Ciprian',
    age: 20,
    isAdmin: true,
    id: 'abc'
};
// Array Types
var hobbies = ['Reading', 'Cooking', 'Sports'];
// Function Types
function add(a, b) {
    return a + b;
}
// Defining Function Types
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
var admin;
admin = {
    userName: 'Ciprian',
    permissions: ['reading']
};
var role;
role = 'admin';
// Type Guards
function performAction(action, role) {
    if (role === 'admin' && typeof action === 'string') {
        //...do something
    }
}
var textStorage = {
    storage: [],
    add: function (data) {
        console.log(data);
    }
};
