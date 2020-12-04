//CALLING FUNCTIONS

function hello() {
    console.log('hi');
}
hello()

//hello; nothing
//hello(); hi
//console.log(hello); //[function:hello]



function number(){
    console.log('1 2 3 4 5 6 7 8 9 10')
}
number()
//Info: Start process (3:41:06 PM)
//1 2 3 4 5 6 7 8 9 10
//Info: End process (3:41:07 PM)


// CHALLENGE: given the array, create a function that lists out the values individually. try using a for in or for of loop

let arr = ['this', 'is' ,'really', 'cool']
function wow(){
    for(let item of arr){
        console.log(item);
    }
}

wow()
/*Info: Start process (4:03:38 PM)
this
is
really
cool
Info: End process (4:03:38 PM)*/



