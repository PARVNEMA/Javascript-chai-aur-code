// when we make object with constructor woh singleton banega
// when we make object with literal woh  singleton nahi banega

// Object.create constructor way(singleton banega)

//literal way
const mysym=Symbol("mykey1");
const jsuser={
    name:"naman",
    age:19,
    "full name":"naman nema",
   [mysym]:"mykey1",
    isLoggedin:false,
    lastactive:[1,5,6,7,28]
}
// arrays are also key value pair bas unmhe keys kko badal nahi sakte hai

//Ways of asscesing the object
// console.log(jsuser.age);
// console.log(jsuser["age"]);
// // for asscessing the full name we have to only one wayy of asscessing that is bracket way we cannot user dot way
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);

// Another Datatype Symbol

//  to use symbol in objects first decleare it outside then user [] to decleare it inside the object

// to change value
jsuser.age=20;
// to FREEZE the Value 
// Object.freeze(jsuser);
// now the changes will not be implemented
// console.log(jsuser);

// FUNCTION DECELERATION
 jsuser.greetings=function(){
    console.log("hello JS user");
 }
 console.log(jsuser.greetings());
 console.log(jsuser.greetings); // if we write like this we only get referece of a function not the object

 jsuser.greetingstwo=function(){
    console.log(`hello JS user ${this.name}`);
 } 
 //THIS Usage
 // when we use this we get all the properties of current object
 console.log(jsuser.greetingstwo());

