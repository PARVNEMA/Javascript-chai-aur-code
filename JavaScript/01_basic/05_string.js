const name="naman"
const repocount=50;

console.log(name+repocount+"hello");
   //writing this type of things is bad
   // better syntax will be

   console.log(`My name is ${name},my repo count is ${repocount}`);
// another way of string decleration
   const gamename=new String("naman") // writing this in browser we are bale to get asscess to many function
   console.log(gamename[0]);
   console.log(gamename.__proto__);  // gives an  object with all properties we can apply for string // to see these proprties use browser

   console.log(gamename.length);
   console.log(gamename.toUpperCase());
   console.log(gamename.charAt(2));


   console.log(gamename.indexOf('n'));
   const newstring =gamename;
   console.log(newstring.substring(0,4));

   const anotherstring=newstring.slice(-4,2);  // can give negative value also
   console.log(anotherstring);

   const newstringone="      naman    ";  // used to trim spaces
   console.log(newstringone.trim());

   const url="https://namannemadc/%20gym"
   console.log(url.replace('%20','-'))
   console.log(url.includes("naman"));

   const a="ffsf_fvvv_rf"
   console.log(a.split('_')); 