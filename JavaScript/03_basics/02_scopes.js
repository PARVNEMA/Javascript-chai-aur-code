// var c=300;
let a=300;
{
    let a=1;
    const b=2;
    var c=30;
    console.log("Inner:",a);
    // blocked scope
}
//global scope
// console.log(a);
// console.log(b);

// console.log(c);s

// -----------------nested scope--------------------

function one(){
    const username="naman"
    function two(){
        const website="youtube";
        console.log(username);
    }
    // console.log(website); line by line excecution happens
    two();
}
one();
// child function can asscess the value of parent function
//ICE-CREAM CONCEPT

if(true){
    const username="naman";
    if(username==="naman"){
        const website="youtube"
        // console.log(username+website);
    }
//    gives error // console.log(website);
}
// console.log(username); gives error

// ++++++++++++++++++interesting+++++++++++++
// deceleration of functions
//1.
addone(5);
function addone(num1){
    return num1+1;
}

//2. also referred as expressions
// addtwo(5); this will give error as we are using var and it cannot be used before declearing it
const addtwo=function(num2){
    return num2+2;
}
console.log(addone(5),addtwo(5));

