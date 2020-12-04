/*

PARAMETERS

-parameters are placeholders for data that we pass into the function when the function is called

function hello(name){
    console.log('hello ${name}');
}

hello('matt')*/



//--------------------------------------------
// ticket= 'cheese pizza'
function zach(ticket){
    console.log(`i exchanged my ticket for a ${ticket}`)
}
zach('cheese pizza')

/*Info: Start process (4:22:13 PM)
i exchanged my ticket for a cheese pizza
Info: End process (4:22:14 PM)*/



//------------------------------------------

function counter(number) {
    console.log(number)
}

for (let i=0; i<=10; i++) {
    counter (i)
}
/*Info: Start process (4:30:15 PM)
0
1
2
3
4
5
6
7
8
9
10
Info: End process (4:30:15 PM)*/


//-----------------------------------------------------

function fullName(name){
    console.log(`matt`)
}
fullName('matt')
/*Info: Start process (4:39:01 PM)
matt
Info: End process (4:39:02 PM)*/
//prints name but doesnt have parameters

function fullName(fName, lName){
    //let myFullName = fName + ' ' + lName;
    let myFullName = `${fName} ${lName}`;
    console.log(`hello my name is ${myFullName}`)
}
fullName ('matt', 'bowman')