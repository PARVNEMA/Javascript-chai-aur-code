const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})

promiseone.then(function(){
    console.log("promise consumed");
})

// another way
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 2 completed");
        resolve();
    },1000)
}).then(()=>{
    console.log("async 2 resolved");
})


// parameters in resolved 

const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"chai",email: "chaiexamplegmail.com"})
    },1000)
})

promisethree.then((user)=>{
console.log(user);
})


// chaining of .then() & reject usage
const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"namannema",email:"namannema0704@example.com"})
        }else{
            reject('error:something went wrong')
        }
    },1000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log('the promise is resolved or rejected');
})

const promisefive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript",email:"123@example.com"})
        }else{
            reject('error:js went wrong')
        }
    },1000)
})

// another way of consuming promise Async and Await
async function responsepromisefive(){
 try {
    const response=await promisefive
  console.log(response); 
 } catch (error) {
    console.log(error);
 }
}

responsepromisefive();


async function samplefunction(){
   try {
    const response=await fetch('https://dummyjson.com/products/1')

    const data= await response.json();
    console.log(data);
   } catch (error) {
    console.log(error);
   }

}

samplefunction();