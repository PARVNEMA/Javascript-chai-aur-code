function outer(){
 let username="naman"
//  console.log(secret);
 function inner(){
    console.log(username);
    let secret='abc123'
 }
 function innertwo(){
    console.log(username);
    // console.log(secret);
 }
 inner();

}
outer();