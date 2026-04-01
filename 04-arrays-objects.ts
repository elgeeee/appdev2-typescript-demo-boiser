let hobbies: string[] = ["Dancing", "Reading"];

// hobbies.push(8)

let userList: (string | number)[];
let userList2: Array<string | number>;

userList = ["Lorlyn Grace", "Lorlyn248", 12468];

console.log(userList);

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Lorlyn Grace",
    age: 20,
    hobbies: ["Dancing", "Reading"],
    role: {
        description: 'admin',
        id: 1
    }
}

// Must not null or undefined
let val: string = "Lorlyn Grace Boiser"

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 1,
    name: 'Lorlyn Grace'
    // isPartTimeInstructor: true
}