const coding=["js","py","cpp","js"]

coding.forEach((item)=>{
//   console.log(item);
  return item;
  // for each loop doesnot return anything undefined
})



const mynums=[1,2,3,4,5,6,7,8,9,10];

// const a=mynums.filter((nums)=> nums>4);

// another way
// const b =mynums.filter((nums)=> {
//    return nums>4;
// });
// console.log(a);
// console.log(b);

const mynewnums=[];
mynums.forEach((nums)=>{
    if(nums>4){
        mynewnums.push(nums);
    }
    // return mynewnums
})

// console.log(mynewnums);


let books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let mybooks=books.filter((bk)=>{
    return bk.genre==='History';
  })

  mybooks=books.filter((bk)=>{
    return bk.publish>=1999 && bk.genre==="History";
  })

  console.log(mybooks);
