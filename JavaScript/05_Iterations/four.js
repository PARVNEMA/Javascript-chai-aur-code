const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
// for in(keys)
for (const key in myobj) {
//    console.log(key);
}
// for in(values)
for (const key in myobj) {
//    console.log(myobj[key]);
}
// for in (Arrays)
const arr=[1,2,3,5,4];
for (const key in arr) {
    console.log(key,":=",arr[key]);
}

// map in not iterable by using forin loop
// const map=new Map();
// map.set("in","India")
// map.set("us","Usa")
// map.set("Fr","France")

// for (const key in map) {
//     console.log(key);
// }