class user{
    constructor(username){
        this.username=username;
       
    }
  logme(){
    console.log(`username is ${this.username}`);
  }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }

    addcourse(){
        console.log(`the new course added${this.username}`);
    }
}
const chai=new teacher("chai",'abc@gmail.com','123');
chai.addcourse();
const tea=new user("chai");
chai.addcourse();

