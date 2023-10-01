//destructuring the array
let hotel={
  name:"hottell",
  location: "street no xyz delhi",
  categories:["chinese","italian","english"],
}
//simple example
//without
let items=[2,3,5,6];
//let x=items[0];
//let y=items[1];
//let z=items[2];
//let p=items[3];
//console.log(x,y,z,p);

let[x,y,z,p]=items;
console.log(x,y,z,p);

//example 2
let[first, ,second]=hotel.categories;
console.log(first,second);

//switch the category(usecase)
//without destructuring
let temp=first;
first=second;
second=temp;
console.log(first,second);

[first,second]=[second,first];
console.log(first,second);

//destructuring of nested array
let nums=[2,3,[6,9]];
//let[a, ,b]=nums;
let[a, ,[b,c]]=nums;
console.log(a,b,c);
