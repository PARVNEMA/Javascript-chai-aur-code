// function is a package where one code can be used again and again

function saymyname(){
    console.log("n");
    console.log("a");
    console.log("m");
    console.log("a");
    console.log("n");
}
// saymyname  function reference
// saymyname() // function calling

// function addnumbers(num1,num2){
    //     console.log(num1+num2);
    // }
 function addnumbers(num1,num2){
       return num1+num2;
       console.log("hitesh");  // unreachable code
    }

const result=addnumbers(5,3);
// console.log(result);
 // defaultvalue
function userlogin(username="sam"){
    if(!username ){
        console.log("please login");
        return;
    }
    return `${username} just logged in`
}
// console.log(userlogin("naman"));
// console.log(userlogin());

// ------------------ function 2-----------

// rest and spread operator(...)
// function addcart(...num1){ //rest operator
//     return num1;
// }
function addcart(val1,val2,...num1){ //rest operator
    return num1;
}
// console.log(addcart(200,100,66,202));
// rest operator khuli values ko bundle me pack kar deta hai

//PASSING OBJECTS IN FUNCTION
const user1={
    name:"naman",
    price:199
}
function user(anyobject){
    console.log(`username is ${anyobject.name}, price is ${anyobject.price}`);
}
// user(user1);
// user({
//     name:"parv",
//     price:299
// })

//passing ARRAY in function
const arr=[1,2,3,4,5,6];
function getsecond(arr){
    return arr[1];
}
// console.log(getsecond(arr));
// console.log(getsecond([100,200,300]));

