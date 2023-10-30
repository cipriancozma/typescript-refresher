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

// Merging Types
// type Admin = {
//     permissions: string[]
// }

// type AppUser = {
//     userName: string
// }

// type AppAdmin = Admin & AppUser;

interface Admin {
    permissions: string[]
}

interface AppUser {
    userName: string
}

interface AppAdmin extends Admin, AppUser {

}

let admin: AppAdmin;

admin = {
    userName: 'Ciprian',
    permissions: ['reading']
}

// Literal Types
type Role = 'admin' | 'user' | 'editor'
let role: Role

role = 'admin'

// Type Guards
function performAction(action: string | number, role: Role) {
    if(role === 'admin' && typeof action === 'string') {
        //...do something
    }
}

// Generic Types
type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void
}

const textStorage: DataStorage<string> = {
    storage: [],
    add: (data: string) => {
        console.log(data)
    }
}