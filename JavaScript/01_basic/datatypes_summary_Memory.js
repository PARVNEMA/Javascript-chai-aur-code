 // primitve data types
// inko jab bhi banatay hai inki copy paas hoti hai hamesh
 // string,number,boolean,null,undefined,Symbol,bigInt

 //Refernece type these type of data types ka reference allocate kiya jaa sakta hai

 // Array, Objects ,Functions

 const id=Symbol('123');
 const aid=Symbol('123');

 console.log(id===aid); 


 //arrays objects functions
 const heros=["a","b","c"];
 let myobj={
    name:"naman",
    age:"19",
 }
 const myfunction=function(){
    console.log("hello Duniya");
 }

 // data type of null is object

//  -----------Memory--------------------------

// Stack(Primitive datatypes) , heap(non-primitive datatype)

let myytname="namannema.com"
let anothername=myytname;
anothername="chaiaurcode"
console.log(myytname);
console.log(anothername);

let userone={
   email:"namanenema@123",
   pass:"4567"
}
let usertwo=userone;
usertwo.email="parvnema@123"

// as non primitive data types are pass by reference it is changed
console.log(userone.email);