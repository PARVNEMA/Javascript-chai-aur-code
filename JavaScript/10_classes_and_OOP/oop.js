const user={
    username:"naman",
    logincount:8,
    signedin:true,

    getuserdetails:function(){
        // console.log("got userdetails");

        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getuserdetails());

function user1(username,logincount,isloggedin){
   this. username=username
   this. logincount=logincount
    this.isloggedin=isloggedin

    this.greeting=function(){
        console.log(this.username);
    }

    return this
}
const userone=user1("naman",11,true);
const user2= new user1("nema",12,true);

console.log(userone);
console.log(user2);
userone.greeting();