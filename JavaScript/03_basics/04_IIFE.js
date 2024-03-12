// IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function chai(){
    // named iife
    console.log("connected to db");
})();
 
//semicolon lagana na bhulay varna js ko pata nahi chalega usko end kaha karna hai to ussay dusra iife run nahi hoga

//()() first bracket for function definition and second bracket for calling the function 

// iife is used to remove problem of globle  scope variables pollution

((name)=>{
    console.log(name);
})("naman")

                           
