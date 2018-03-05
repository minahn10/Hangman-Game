var pokemon = [
    "pikachu";
    "charizard";
    "blaziken";
    "bulbasaur";
    "dragonite";
    "gyarados";
    "scyther";
];

var pokemon = pokemon[Math.floor(Math.random() * pokemon.length)];

var answerArray = [];
for (var i=0; i < pokemon.length; i++){
    answerArray(i) = "_";
}

console.log(answerArray)