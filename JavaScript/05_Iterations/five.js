const coding=["js","py","cpp","js"]
//For-Each loop
//each value of array is get as parameter in the inner function
// coding.forEach(function(item){
//     console.log(item);
// })
//Arrow function
coding.forEach((item)=>{
    // console.log(item);
})

function printme(item){
    console.log(item);
}

// coding.forEach(printme)  // give only REFERENCE not ()

// ******** for each brings index and value with full array
coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})     


//Arrays kay andar objects

const myobj=[
    {
        lang:"js",
        file:"js"
    },
    {
        lang:"java",
        file:"j"
    },
    {
        lang:"py",
        file:"p"
    },
]

myobj.forEach((i)=>{
    console.log(i.lang);
})       