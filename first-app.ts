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

