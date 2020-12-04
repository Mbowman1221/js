//EQUAL
'3' == 3
console.log('3' == 3)
'Info: Start process (10:18:47 AM)
true
Info: End process (10:18:47 AM)'

/*
-coercion is the process of converting a value from one type to another
-in the example above, javascript assumes that we are trying to check if a number of 3 is equal to another number of 3, even though one of our values is a string 
*/

// STRICT EQUAL- THIS OVERRIDES JAVASCRIPT COERCION
console.log(3===3); //true
console.log('3' === 3) //false


//not equal
console.log('3' !=3); false //3 is equal to 3 in this example because of java coercion/ 3!=3 (says 3 is not equal to 3)

//STRICT EQUAL- this overrides java coercion
console.log(' !==4')
console.log(4!== 5)

//greater than
3> 2

//less than
2<3

//greater than or equal to
3>= 2

less than or equal to
2<3=

//and
2&&3

//or
2||3


