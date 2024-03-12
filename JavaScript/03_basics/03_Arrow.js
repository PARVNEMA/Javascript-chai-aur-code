const user={
    username:"naman",
    price:99,

    welcome:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this); //prints the object/refers to current object
    }
}
// user.welcome();
// user.username="parv";
// user.welcome();

// console.log(this); //referes to global objects and returns empty
//but if same thing is written in browser console it will give window object (window is global object)


function chai(){
    let username="naman"
    console.log(this.username);
    console.log(this); // gives some values
}
// chai() // cannot use this inside function
// const samefun=function (){
//     let username="naman"
//     console.log(this.username);
// }
// samefun()


// +++++++++++++++++ARROW FUNCTION++++++++++++++++++++

const chai1=()=>{
    let username="naman"
    console.log(this.username);
    console.log(this); // gives an empty object
}
// chai1();

// const addtwo=(num1,num2)=>{
//   return num1+num2;
// }
// console.log(addtwo(5,7));

// same func as above
// const addtwo=(num1,num2)=> num1+num2

//IMPLICIT RETURN
const addtwo=(num1,num2)=> (num1+num2)
console.log(addtwo(5,7));

// parenthesis used to return keyword use karna padega
// bracket use to no return keyword

// RETURNNING Object
const obj=()=>({username:"naman"}) // brackets are compulsory
console.log(obj())


const arr=[1,2,3,4,5,6];
// arr.forEach(()=>{})
// arr.forEach(()=>({}))
// arr.forEach((){})
