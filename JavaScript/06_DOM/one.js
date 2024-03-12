const myul=document.querySelector('ul')

const myli=myul.querySelector('li')

const mygreen=myli.style.backgroundColor="green"

const templilist=document.querySelectorAll('li')

// templilist
// NodeList(3) [li, li, li]

templilist[0].style.background="green"
'green'
templilist[0].style.background="blue"

templilist.forEach((item)=>{
    item.style.background="aqua"
})

const lilist=document.getElementsByClassName('li-list')

const myarr=Array.from(lilist)

myarr.forEach((item)=>{
    item.style.color="magenta"
})