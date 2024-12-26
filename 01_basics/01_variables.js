// chapter1

const accountId = 18798 
let accountEmail = "ayushi@gmail.com"
var accountPassword = "1234"
accoutCity ="lucknow"
let abc; // return undefined

// accountId =2  // const can not me modified
// console.log(accountId)

accountEmail= "fft@gmail.com"
accountPassword = "35346"
accoutCity = "Delhi"
// console.table([accountId, accountEmail, accountPassword, accoutCity, abc])// give output in table
// var is not preffered

// chapter2 data types

"use strict"; // uses whole js code as newer version 
alert("hello") 
// number(2 to power of 53),
// BigInt
// string("")
//boolean (true or false)
// null (standalone value)
//undefined (value not assigned)
// symbol (unique)

//object


// console.log(typeof account);
// console.log(typeof undefined); // o/p undefined
console.log(typeof null); // o/p object

//chapter 3 conversions


// let score = "Hello"

// console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) // convert string to number
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// when we convert string to number
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// let isLoggedIn = "Ayushi"


// let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Ayushi" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " ayushi"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // 122 o/p
// console.log(1 + 2 + "2"); // 32 o/p

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); // 1 o/p
// console.log(+""); // 0 o/p

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


//Chapter 4 comparison

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // true
// console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// reason is that comparision convert null to a number treating it as 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === is strict check it checks data types strict

console.log("2" === 2);


// data types

//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false o/p because symbol gives unique valuse 

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// type of memeory
// stack(primitive), heap(non-primitive)






