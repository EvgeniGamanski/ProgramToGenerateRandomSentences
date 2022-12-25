let readLine=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout 
});

let names=["Michael","John","Robert","James"];

let places=["London","Chicago","New York","Rome"];

let verbs=["reads","sees","hears","drinks"];

let nouns=["a magazine","a plane","a motorcycle","orange juice"];

let adverbs=["carefully","patiently","slowly","thoughtfully"];

let details=["in the office","in school","near the city centre"];

function getRandom(array){
    let word=array[Math.floor(Math.random()*array.length)];
    return word;
}

let randomName=getRandom(names);
let randomPlace=getRandom(places);
let randomVerb=getRandom(verbs);
let randomNouns=getRandom(nouns);
let randomAdverb=getRandom(adverbs);
let randomDetails=getRandom(details);

let who=`${randomName} from ${randomPlace}`;
let action=`${randomAdverb} ${randomVerb} ${randomNouns}`;
let sentence=`${who} ${action} ${randomDetails}`;

console.log("This is your first random generated sentence: ");
console.log(sentence);

let recursiveAsyncReadLine=function(){  
    readLine.question("Click [Enter] to generate a new one. ", string =>{
        console.log(sentence);
    })
}