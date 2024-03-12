const myarr=[0,1,2,3,"naman",true];
const arr=new Array(1,2,3,4);
// arrays in js are resizeable
// arrays in js are a mix of arraylist and array

arr.push(6);
arr.push(7);
arr.pop();
arr.unshift(5); // shifts all elements to the right and add num at beginning but it is bad if there are thousands of number in array
arr.shift()//removes the first element

// console.log(arr.includes(5));
// console.log(arr.indexOf(1));

const newarr=arr.join()  //bind the array and make it string
// console.log(arr);
// console.log(newarr);

const mya1=[1,2,3,4,5,6];

console.log(mya1.slice(1,3)); // prints the value of arrays from 1 to 2 and last is excluded
console.log(mya1);

console.log(mya1.splice(1,3)); // changes the value of original array takes out element from 1 to 3 (included) and our original array becomes the array left after splicing
console.log(mya1);