/*

     PROPERTIES AND METHODS

     -in most cases, properties are qualities related to the data we're working with, and methods are actions we can perform on the data we are working with. using a method causes something to happen to the data, while using a property returns info about the data.*/


     // STRING PROPERTIES

     //LENGTH

     let myName = 'Matt'
     console.log(myName.length)

     // STRING METHODS

    let myDogsName= 'nana'
    console.log(myDogsName.toUpperCase)

    let home ='my home is indiana'
    console.log(home.includes('indiana'))

    //CHALLENGE: use google, find MDN documentation for string methods. research the string '.split()' method, and use and implement it to get an array back from a string.

    let sent= 'this sentence will be split into individual parts';
    console.log(sent.split('')) //splits at each individual character
    console.log(sent.split(' ')) //split at each space in the original string
    console.log(sent.split(',')) split at the comma




    EXAMPLE OF '.SPLIT' METHOD 
    const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]