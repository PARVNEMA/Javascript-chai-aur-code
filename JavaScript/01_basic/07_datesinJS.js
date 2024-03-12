// let newdate=new Date();
// console.log(newdate.toString());
// console.log(newdate.toDateString());
// console.log(newdate.toLocaleString());
// console.log(newdate.toLocaleTimeString());
// console.log(typeof newdate);

// let mycreateddate=new Date(2023,0,12);
// let mycreateddate=new Date(2023,0,12,6,2);
// console.log(mycreateddate.toString()); // dates start with 0 in js and this will give me the date which is wanted

// let mycreateddate=new Date("2023-01-14");
// let mycreateddate=new Date("01-12-1914");
// console.log(mycreateddate.toLocaleString());

// let mytimestamp=Date.now();
// console.log(mytimestamp);
// console.log(mycreateddate.getTime());

// console.log(Math.floor(Date.now()/1000)); // gets date in seconds

let newdate=new Date();

// console.log(newdate.getDate());
// console.log(newdate.getDay());
// console.log(newdate.getHours());
// console.log(newdate.getMonth()+1);  // month starts with 0

console.log(newdate.toLocaleString('default',{
    weekday:"long",
   }));  // it is the same we have written the only difference is it is more customizable
console.log(newdate.toLocaleString());



