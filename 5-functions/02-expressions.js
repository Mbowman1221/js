// function expressions are stored inside a variable

let hello= function() { //an unaed function is known as an anonymous function. since the function is stored in a variable, we dont need to explicitly give the function a name
console.log('hi!')
}
hello(); //when calling a function expression, the name of the variable is what needs to be called, also needs to be invoked outside of the curly braces


/* 

    DIFFERENCES BETWEEN FUNCTION DECLARATIONS AND FUNCTION EXPRESSIONS

    -function declarations are hoisted
    -function expressions are not hoisted*/


    // declaration

    function decTest() {
        console.log('it worked and i was hoisted');
    }

    //expression
    let expTest= function(){
        console.log('did not work and i was not hoisted');
    }
    expTest();