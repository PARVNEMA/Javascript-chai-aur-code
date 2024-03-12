// let score="22abc";
// let score=null;
let score=undefined;
// console.log(typeof score);

let converttonumber=Number(score)
// console.log(typeof converttonumber);
//still it tell it is a number and when we will print it will give Nan

//"33"=>33
// "33abc"=>Nan(not a number)
// true=>1;false=>0

let isloggedin=1
let converttoboolean=Boolean(isloggedin);
// console.log(converttoboolean);

//1=> true
//""=> false;
// "hitesh"=> true;

let sn=55;
let Stringnumber=String(sn);
// console.log(Stringnumber);
// console.log(typeof Stringnumber);

// *********************Operations***********************
let value=3;
let negvalue=-value;
// console.log(negvalue);

// and other operations are as it is +,-,/,*,%
// console.log(2**2);  2^2

// strings can also be added
// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2); // converted to string if string is first
// console.log(1+2+"2");// this type of code is not good dont't write

// console.log(2+3*5%5); // this type of code is not good dont't write

// console.log(+true);  // gives1
// console.log(+""); // gives 0  as operator converts everything to number

// let num1=num2=num3=2+2; // bad Readability
let g=100;
console.log(g++);
console.log(++g);