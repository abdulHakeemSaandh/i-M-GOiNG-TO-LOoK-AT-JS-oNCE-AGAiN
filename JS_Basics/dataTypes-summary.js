// Premitive

// 7 types: String, Number, Boolean, null,
//undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);//false
console.log(id == anotherId);//false

const bigNumber = 343280249329402094n;


// Reference (Non premitive)

// Array, Objects, Functions

const heroes = ['supraMan', 'flash', 'spoderMan'];
let myObj = {
    names: "Abdul Hakeem",
    country: "Pakistan"
}

console.log(typeof(anotherId));//symbol
