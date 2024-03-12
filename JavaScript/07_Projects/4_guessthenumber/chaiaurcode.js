let randomnumber=parseInt(Math.random()*100 +1);

const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const guessslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const loworhigh=document.querySelector('.lowOrHi');
const startover=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevguess=[];
let numguess=1;
let playgame=true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userinput.value);
     validateguess(guess);
    })
}

function validateguess(guess){
//
if(isNaN(guess)){
alert('please enter a valid number');
}else if(guess < 1){
    alert('please entera number more than 1');
}else if(guess>100){
    alert('please enter a number less than 100');

}
else{
    prevguess.push(guess);
    if(numguess === 11){
        displayguess(guess)
        displaymessage(`game over .random number was ${randomnumber}`)
        endgame();
    }
    else{
       displayguess(guess) 
       checkguess(guess)
    }
}
}

function checkguess(guess){
 if(guess === randomnumber){
    displaymessage(` you guessed it right`)
    endgame();
 }
 else if(guess <randomnumber){
    displaymessage(` number is tooo low`)
 }
 else if(guess > randomnumber){
    displaymessage(` number is tooo high`)
 }
}

function displayguess(guess){
 userinput.value='';
 guessslot.innerHTML +=`${guess} ,`
 numguess++;
 remaining.innerHTML=`${11 - numguess}` 
}
function displaymessage(message){
  loworhigh.innerHTML=`<h2>${message }</h2>`
}

function newgame(){
 const newgamebtn= document.querySelector('#newgame')

 newgamebtn.addEventListener('click',function(e){
   randomnumber=parseInt(Math.random()*100 +1);
   prevguess=[];
   numguess=1;
   guessslot.innerHTML=''
   remaining.innerHTML=`{11-numguess}`;
   userinput.removeAttribute('disabled')
   startover.removeChild(p)
    playgame=true;
 })
}

function endgame(){
 userinput.value=''
 userinput.setAttribute('disabled','')
 p.classList.add('button')
 p.innerHTML=`<h2 id="newgame">Start new game</h2>`
 startover.appendChild(p)
 playgame=false;
 newgame();
}