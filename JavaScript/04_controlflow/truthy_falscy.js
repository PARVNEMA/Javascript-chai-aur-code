// const email="n aman"
const email=""
if(email){
    console.log("got mail");
}
else{
    console.log("doesn't got");
}

//falsy values
 //values that are assumed to be false
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// all other values are truthy
// "0",'false'," ",[],{},function(){}

// const arr=[];
// if(arr.length===0){
//     console.log("empty array");
// }

const obj={}
if(Object.keys(obj).length===0){
    console.log("object is empty");
}

// nullis coalescing operator(??)
let val1;
// val1=5??10;
// val1 = null ?? 10;
// val1=undefined?? 11;
val1=undefined?? 11??11;

// ternary operator
// condition?true:false;



console.log(val1);