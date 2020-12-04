//JSON OBJECTS

//JSON stands for javascript object notation
//the json syntax is derived from regular object syntax, but the json format is text only.
//JSON exists as a string. JSON data is what we receive when we fetch data from a server. since JSON data is text only, it needs to be converted to a native javascript object if we want to 




let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}


    console.log(Object.keys(spaceJam.toonSquad));
    console.log(Object.keys(spaceJam.toonSquad.duck));

    console.log(Object.keys(spaceJam.toonSquad));
    console.log(Object.keys(spaceJam.toonSquad.duck));



    // Object.keys() & Object.values()
let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad.duck));
console.log(Object.keys(spaceJam.toonSquad).toString()); // since Object.keys() is a method, we can chain other methods onto it
console.log(Object.values(spaceJam.nbaPlayers));
