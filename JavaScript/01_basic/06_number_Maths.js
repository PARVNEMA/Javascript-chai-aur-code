const score=100;

const balance=new Number(100)  // isse dedicately define kar sakte hai ki number he hoga

console.log(score);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));   //toFixed() converts a number to a string, rounded to a specified number of decimals: 

const othernum=23.58588;
console.log(othernum.toPrecision(2)); // precise value till the decimal inside the bracket and round off the others

const hundreds=10000000000; // problem in counting values
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++Maths++++++++++++

// console.log(Math); write this in console to see it as and objects and kays of its functions

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.4));  // rounds to more value 
// console.log(Math.floor(4.4));  // round to less value
// console.log(Math.min(4,5,8,6,3,1,8));
// console.log(Math.max(4,5,8,6,3,1,8));


console.log(Math.floor((Math.random()*10)+1));

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
// issay max-min se range mil jayegi and +1 karne se o vala case avoid hoga and plus min karne se min kay upar ki values he milegni
 // constant 
