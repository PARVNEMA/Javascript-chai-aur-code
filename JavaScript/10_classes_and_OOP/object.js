function multiply5(num){ return num * 5};

console.log(multiply5(5));
console.log(multiply5.prototype);
console.log(multiply5.power);

function createuser(username,score){
 this.username=username;
 this.score=score;
}
createuser.prototype.increment=function(){
    this.score++;
}
createuser.prototype.printme=function(){
    console.log(this.score);
}
const chai=new createuser('chai',25)
const tea=createuser('tea',150);

chai.printme();
chai.increment();
chai.printme();