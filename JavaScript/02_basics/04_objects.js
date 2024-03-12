// const tinderuser=new Object()// singleton object

const tinderuser={};

tinderuser.id="123abc";
tinderuser.name="sammy";
tinderuser.isloggedin=false;

// console.log(tinderuser);

const regularuser={
     fullusername:{
      username:{
        firstname:"naman",
        lastname:"nema"
      }
    },
}
// console.log(regularuser.fullusername.username.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//1.
// const obj3=Object.assign({},obj1,obj2) // merging two objects
// agar{} nahi denge to saari value obj1 me jayegni varna {} isme jayegi  {}=>Empty Object

//2.
const obj3={...obj1,...obj2};

// console.log(obj3);


//when we use DATABASE
// we get Array of objects

const user=[
    {
        id:5991,
        email:"123@gmail.com"
    },
    {
        id:5995,
        email:"123@gmail.com"
    },
    {
        id:5995,
        email:"123@gmail.com"
    },
]

// console.log(user[0].id);


// IMPORTANT
// console.log(Object.keys(tinderuser)); // we get all the keys in the form of array
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('name'));


//  -------------------objects part 2----------------------

const course={
    courseinstructor:"naman",
    courseprice:999,
    coursename:"hindi js"
}

// way of asscessing the elements
// 1. 
// course.courseinstructor=""
// 2.(Most Used)
const{courseinstructor:instructor}=course;  // direct asscess an object element and can shorten an elment // destructuring
console.log(instructor);

// {api we fetch in the form of objects with key are laso instring form sometimes api are array of objects}

// use json formatter to study about the api
// json is not object it is same in all the languages
//api ccan contains mixture of objectes and arrays
