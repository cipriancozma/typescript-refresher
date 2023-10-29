let userName: string = "ciprian";
let isMarried: boolean = true;
let age: number = 18;

// Union Types
let userId: string | number = 'abc1'
userId = 23;

// Object Types
interface User {
    name: string,
    age: number,
    isAdmin: boolean,
    id: string
}

let user: User;

user = {
    name: 'Ciprian',
    age: 20,
    isAdmin: true,
    id: 'abc'
}

// Array Types
let hobbies: string[] = ['Reading', 'Cooking', 'Sports']

// Function Types
function add(a: number, b: number): number {
    return a + b;
}

// Types
type AddFn = (a: number, b: number) => number

// Defining Function Types
function calculate(a: number, b: number, calcFn: AddFn) {
    calcFn(a, b)
}

