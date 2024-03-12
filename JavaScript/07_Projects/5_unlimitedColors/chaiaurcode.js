const randomcolor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}


let intervalid;
const startchangingcolor = function() {
  if(!intervalid){
    intervalid = setInterval(changedcolor, 1000);
  }
    function changedcolor() {
        document.body.style.backgroundColor = randomcolor();
        document.querySelector('h1').innerHTML="DISCO DIVANE .... "
    }
};

const stopchangingcolor = function() {
    clearInterval(intervalid);
    intervalid = null;
}
document.querySelector('#start').addEventListener('click', startchangingcolor);
document.querySelector('#stop').addEventListener('click', stopchangingcolor);
