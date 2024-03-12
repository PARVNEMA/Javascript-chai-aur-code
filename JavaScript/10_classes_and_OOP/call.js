function setusername(username){
    this.username=username;
}

function createusername(username,email,password){
    setusername.call(this,username) // explicit call

    this.password=password
    this.email=email
}

const chai=new createusername("chai","abc",123);
console.log(chai);