class user{
    constructor(username){
        this.username=username;
       
    }
  logme(){
    console.log(`username is ${this.username}`);
  }

  static createid(){
    return `123`
  }
}

const chai=user('chai');
// console.log(chai.createid()) gives and error