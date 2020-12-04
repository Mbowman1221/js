//if temp is less than 70, console.log "wear a jacket", if temp is not less than 70, console.log 'dont wear a jacket'

let temp= 75
if(temp<70){
    console.log('wear a jacket')
}else{
    console.log('dont wear a jacket')
}

Info: Start process (11:29:04 AM)
dont wear a jacket
Info: End process (11:29:04 AM)
//-----------------------------------

//bronze level

let name= 'not'
if (name='matt'){
  console.log('matt')  
}else {console.log('hello, what is your name')} //my example (did not work all the way) (should have been a '==' not '=')

//-----------------------------------------------------------------------------------------------------

//SILVER


if (name==matt){
console.log('hello, my name is', 'matt')
} else{
    console.log('hello, what is your name?')
}
//------------------------------------------------------------
if (name=='matt'){
    console.log('hello, my name is', name)
    } else{
        console.log('hello, what is your name?')
    }
    










/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/
//java always starts at 0 i.e. (var str = "HELLO WORLD"; var res = str.charAt(0);) 'H' is the 0
//BRONZE
let myName= 'm a t t t';
 //          0 2 4 6 8
//console.log(myName.charAt(2))


if (myName[0] == myName[0].toUpperCase ()) {
console.log(myName)
} else{console.log('hey, this is not written correctly')};

/*Info: Start process (1:45:55 PM)
hey, this is not written correctly
Info: End process (1:45:56 PM)*/
//-----------------------------------------------------------------------

//SILVER

 //          0 2 4 6 8
//console.log(myName.charAt(2))
console.log(myName.slice(1,3))

if (myName[0] == myName[0].toUpperCase ()) {
console.log(myName)
} else{console.log('hey, this is not written correctly')}

/*Info: Start process (1:45:23 PM)
 a
hey, this is not written correctly
Info: End process (1:45:24 PM)*/


if(myName[0] == myName[0].toUpperCase(0)) {
    console.log(myName.charAt(0)+myName.slice(1).toLowerCase());
} else{console.log(myName.charAt(0).toLocaleUpperCase() + myName.slice(1).toLocaleLowerCase())}

/*Info: Start process (2:14:55 PM)
hey, this is not written correctly
 a
hey, this is not written correctly
M a t t t
Info: End process (2:14:55 PM)*/
//--------------------------------------------------------------------------------------












/*Look up the format for an Else If statement
Set a variable of age and give it a number of your choice
Create an else if statement that checks the following:
If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
If the age is at least 18, console.log 'You can vote!'
If the age is at least 21, console.log 'You can drink!'
If the age is at least 25, console.log 'You can rent a car!


//'else if javascript'*/


let age =27
if (age<=25){
console.log('you are too young to do anything')}
if(age>=21){
    console.log('you can vote')
}
if (age>=18){
    console.log('you can drink')
}
if (age >=17){
    console.log('you can rent a car')
};


/*Info: Start process (2:49:55 PM)
you can vote
you can drink
you can rent a car
Info: End process (2:49:56 PM)*/


let age =25
if (age<=17){
console.log('you are too young to do anything')}
else if(age<=18){
    console.log('you can vote')
}
else if (age<=21){
    console.log('you can drink')
}
else if (age <=25){
    console.log('you can rent a car')
}

/*Info: Start process (3:02:24 PM)
you can rent a car
Info: End process (3:02:24 PM)*/
