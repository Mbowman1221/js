/*

BOOLEAN
-a boolean has two possible values of either true or false

*/

let LightIsOn = true;
console.log(LightIsOn);


let LightIsOff;
console.log(LightIsOff);


/* 

NULL

-null is an empty value. think of it as an empty box; nothing is in it, but it exists as a space to fill

*/


let empty= null;
console.log(empty);


/* 

UNDEFINED

- no value is assigned to a variable, and it does not act as an empty container*/



let UNDEFINED= undefined;
console.log(undef);

let correct;
console.log(correct);





/*
NUMBERS

- numbers or intergers are literally just numbers, numbers do not need anything special when being written

*/


let degrees = 40;
console.log (degrees);



let precise = 123451234512345
console.log(precise)

let a= Number('999999999999999');
console.log(a);


/*
-strings are datatypes used to represent text and are either wrapped in single or double quotes

*/

let stringOne= "double quotes"
let stringTwo= 'single quotes'

console.log(stringOne, stringTwo)

let first = 1050+ 200;
let second = '1050' + '100'  //string concatenation- takes two string and combines them into one

console.log(first);
console.log(second);


console.log(typeof first); //number
console.log(typeof second); //string


let third = 1050 + '100'; //type coersion
console.log()



/*
OBJECT

-OBJECTS ALLOW US TO STORE MULTIPLE VALUES INSTEAD OF A SINGLE
-objects are denoted by {}

*/

let frodo= {
    race: 'hobbit',
    //key ; 'value'
    rings: 1,
    cloak : true
}
console.log(frodo)


/*

ARRAYS

-arrays are containers that hold a list of item
-array are denoted by []

*/


let burritos = ['large', 4, true]
console.log(burritos)
/*



Challenge:
Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode

Set each variable to its respective type.
console.log your whole address (with a space between variables).*/

let firstName= 'Matt';
let lastName= 'bowman';
let houseNumber= 4567;
let street= 'circle';
let city= 'indianapolis';
let state = 'in';
let zipcode= 46256;

console.log (firstName, lastName +',', houseNumber, street+',', zipcode)