// class user{
//     constructor(username,password,email){
//         this.username=username;
//         this.password=password;
//         this.email=email;

//     }
//     encryptpassword(){
//         return `${this.password}abc`
//     }
//     changename(){
//         return `${this.username}`
//     }

// }

// const chai=new user('chai','ab123',"12@gmail.com")
// console.log(chai.encryptpassword());


// behind the scene or another way

function user(username,password,email){
    this.username=username;
        this.password=password;
        this.email=email;
}

user.prototype.encryptpassword=function(){
    return `${this.password}abc`
}

user.prototype.changename=function(){
    return `${this.username}`
}


const tea=new user('tea','ab123',"12@gmail.com")
console.log(tea.encryptpassword());
console.log(tea.changename());