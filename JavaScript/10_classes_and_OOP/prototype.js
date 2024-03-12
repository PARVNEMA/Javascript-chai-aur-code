const heropower={
    thor:"hammer",
    spiderman:"sling",

    getspiderpower:function(){
        console.log(this.spiderman);
    }
}
Object.prototype.naman=function(){
    console.log('naman has all powers');
}
heropower.naman();

const myarr=["spiderman","superman"]

Array.prototype.heynaman=function(){
    console.log('hey naman');
}
myarr.heynaman();
// heropower.heynaman(); gives error as array prototype cannot be asscessd in lower heirarchy


const user={
    name:"naman",
    email:"1234"
}
const teacher={
    teach:true
}
teacher.__proto__=user
console.log(teacher.name);

// Object.setPrototypeOf(user,teacher);

const usera="naman   "
String.prototype.truelength=function(){
    console.log(`${this}`);
   
    console.log(`${this.trim().length}`);
}
usera.truelength();