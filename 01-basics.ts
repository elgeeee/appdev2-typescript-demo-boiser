console.log("Hello World!")

let userName: string = "Lorlyn Grace";
let userAge: number = 20;

userAge = 20

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b: number = 5): number {
    return a + b
}

console.log(add(10))
console.log(add(10, 6))