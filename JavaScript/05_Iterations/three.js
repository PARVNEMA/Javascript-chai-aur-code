// for of loop

const arr=[1,2,3,4,5]
for (const i of arr) {
    // console.log(i);
}

let str="naman"
for (const i of str) {
    // console.log(i);
}

// maps 
// stores unique value and jiss order me enter hotay hai woh order maintained rheta hai

const map=new Map();
map.set("in","India")
map.set("us","Usa")
map.set("Fr","France")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,":-",value);
}

// the same structure does'nt work for objects