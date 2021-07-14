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



/*
//function

const myFunc = (a: string,b: string, c: string = 'false') => {
    console.log(`hello ${a} ${b} ${c}`)
}

myFunc('ashraf', 'islam', 'true')

//info: ts return void instead of undefined. void stands for nothing. its quite like null
*/

/*
//Type Aliases 
type stringOrNumber = string | number
type userType = {name: string, age: number}

const userData = (id: stringOrNumber, user: userType) => {
    console.log(`id is ${id} user info is ${user}`)
}
*/

/*
//Function Signatures
let calculation: (x: number, y: number, z: string) => number;

calculation = (a: number, b: number, c: string) => {
    if(c === 'add'){
        return a+b
    }
    else{
        return a - b;
    }
}

const res = calculation(4,6, 'minus');

let userDetails: (id: string | number, userInfo: {name: string, age: number}) => void;

userDetails = (id: string | number, userInfo: {name: string, age: number}) => {}
*/



/*
//classes
class Player{
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string){
        this.name = n;
        this.age = a;
        this.country = c;
    }

    play(){
        console.log(`${this.name} is from ${this.country} is playing!!!`)
    }
}

const mashrafi = new Player('Mashrafi', 32, 'Bangladesh')
// console.log(mashrafi)
const sakib = new Player('Sakib', 31, 'Bangladesh')
sakib.age = 40;

//lets make an array now
const players: Player[] = [];

players.push(mashrafi)
players.push(sakib)
// console.log(players)
 */


/*
//Access Modifiers
class Player{
    constructor(
        private name: string,
        public age: number,
        readonly country: string,
    ){}

    play(){
        console.log(`${this.name} is from ${this.country} is playing!!!`)
    }
}

const mashrafi = new Player('Mashrafi', 32, 'Bangladesh')
// console.log(mashrafi)
const sakib = new Player('Sakib', 31, 'Bangladesh')

//lets make an array now
const players: Player[] = [];

players.push(mashrafi)
players.push(sakib)
// console.log(players)
*/


/*
//Module System
import { Player } from './classes/Player.js' //keep in mind: imported file format should be in js
const mashrafi = new Player('Mashrafi', 32, 'Bangladesh')
// console.log(mashrafi)
const sakib = new Player('Sakib', 31, 'Bangladesh')

//lets make an array now
const players: Player[] = [];

players.push(mashrafi)
players.push(sakib)
console.log(players)
*/



/*
//Interfaces 
//in case of object 
interface RectangleOption {
    width: number, 
    length: number
}

function drawRectangle(options: RectangleOption){
    let width = options.width;
    let length = options.length;
}

let rectangleValues = {
    width: 50,
    length: 30,
    height: 20,
};

drawRectangle(rectangleValues) //rectangleValues ia pass by reference

//in case of class 
import {Player} from "./classes/Player.js"
import { IsPlayer } from "./interfaces/IsPlayer.js";

const mashrafi = new Player('Mashrafi', 32, 'Bangladesh')
let sakib: IsPlayer

sakib = new Player('Sakib', 42, 'Bangladesh')

const players: IsPlayer[] = []
players.push(sakib)
*/


//Generics

//Enum Types 

//Tuples

