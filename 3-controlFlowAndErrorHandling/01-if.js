/*
-falsy value: a falsy value is a value that is considered false when encountered in a boolean context (boolean's are data type that can only be true or false)
-there are six cases of falsy values in java
1. false
2. zero
3. string ('', "", ``)
4. null
5. undefined
6. not a number (NaN)

-this means when java is expecting a boolean and is given one of these values, it will always evaluate to falsy
*/



let isOn= true

// read as, if the variable "isOn" is EQUAL to true, run the body
if (isOn==true){
    console.log('the light is on')
};

//------------------

//read as, if 'isOn' is true, run the body
if (isOn) {
    console.log('the light is still on')
};

//----------------------------

let isOff=false
// read as if 'isOff is EQUAL to false, run the body
if (isOff==false)
console.log('the light is off now')

Info: Start process (11:21:49 AM)
the light is off now
Info: End process (11:21:49 AM)

//----------------------------------------

let weather= 65

if (weather<70)
console.log('wear a jacket')

Info: Start process (11:21:23 AM)
wear a jacket
Info: End process (11:21:23 AM)