/*
//types of TS
//function
const sum = (a: number, b: number) => {
    return a * b;
}

const res = sum(2,3)
console.log(res)

//array
let mixed = ['apple', 2, true, {}]
mixed.push({
    name: 'ashraf'
})

//object 
let person = {
    name: 'ashraf',
    age: 21,
    goodBoy: true,
}

person.country = 'BD'; //won't take country as it's not in the schema
*/


/*
//Explicit & Union Types

//normal variable
let str: string | number;

str = 'ashraf'
str = 21
str = true

//array
let a: (string | number)[] = [];

a.push('ashraf', 21, true)

//object 
let me: {
    name: string,
    age: number,
    adult: true,
} //for a specific structure

me = {
    name: 'ashraf', 
    age: 21,
    adult: true
}

let c: object

c = [1,2,3] //taken because array is a certain type of object
*/


/*
//Dynamic Type

let a: any[] = []

a.push('ashraf')
a.push(21)

let b:{
    name: any,
    age: any,
}

b = {
    name: 'ashraf',
    age: 21,
}
*/
