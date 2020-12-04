/*
    SCOPE

    -scope is how a cpu keeps track of all the varibels we write in our code
    -globally scoped-- let name = "sPongeBoB"; let capName;
    -whenever we open up {} we create a new scope (local scope)
    -globally scoped variables are accessible anywhere in document
    -locally scoped variables are only accessible within their own piece of code

*/

let x=12;

function scope() {
    let x = 33
    console.log(x)
} //Info: Start process (1:55:44 PM)Info: End process (1:55:44 PM)

scope(); //calling the function by its name, followed by parens, 'invokes' or calls the function- telling it to run
console.log(x);
//Info: Start process (1:56:13 PM) 33, 12 Info: End process (1:56:14 PM)


//-------------------------------------------------------


let y=12;

function newScope() {
    y=33;
    console.log(y) 
}
newScope();
console.log(y)

/* VAR VS LET
-while var and let seem to operate the same, they have a lot of the same functionality (both allow us to declr=are and initialize variable) -they also behave differently from one another
-var is scoped to the nearest function body {}, and let is scoped to the nearest enclosing body*/

var x=12

function varTest (){
    var x=33
    if(1==1){
        var x=45
        console.log(x);
    }
    console.log(x);
}
varTest();
console.log(x);
/*Info: Start process (2:22:00 PM)
45
45
12
Info: End process (2:22:00 PM)*/