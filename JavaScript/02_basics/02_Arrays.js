const marvel_heros=["spiderman","thor","ironman"]
const dc_heros=["Batman","flash","superman"]

// marvel_heros.push(dc_heros);
 // as arrays koi bhi datatype le sakta hai ye ek array ko le lega;


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const heros=marvel_heros.concat(dc_heros);
console.log(heros); // concat returns new array

const allheros=[...marvel_heros,...dc_heros];
console.log(allheros); // spread (kanch ka gilaas spread ho gya girkay)  using spread multiple values are allowed

const newarr=[1,2,3,[4,5,6],[5,8,[8,5]],5,4];

const anothernewarr=newarr.flat(Infinity);
// console.log(anothernewarr)   // array kay andar array ko single array me convert kar dega

console.log(Array.isArray("naman"));
console.log(Array.from("naman")); // converts this to array
console.log(Array.from({name:"naman"}));  // we have to justify to either make keys arrays or values array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));