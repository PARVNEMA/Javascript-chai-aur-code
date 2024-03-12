// if

if(2 !=="2"){
    console.log("excecuted");
}

// >,<,==,=,!=,==,===,<=,>=,!==
//if ,else if
// if(condition) console.log("test") implicit if
const loggedin=true;
const debitcar=true;
const loggedingoogle=true;
const email=true;

if(loggedin && debitcar){
    console.log("user can shop");
}
if(loggedingoogle || email){
    console.log("user  logged in");
}