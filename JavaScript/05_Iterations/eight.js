const mynum=[1,2,3]

const num=mynum.reduce((acc,currval)=>{

    console.log(`acc: ${acc} currval:${currval}`);
    return acc+currval;
},0);

// console.log(num);

const mycourse=[
    {
    itemname:"py",
    price:500
    },
    {
    itemname:"js",
    price:500
    },
    {
    itemname:"jy",
    price:500
    }
]

const pricetopay=mycourse.reduce((acc,item)=>{
    return acc+item.price
},0)

console.log(pricetopay);