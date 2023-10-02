//Short circuiting (&&, ||)
let hotel={
  name:"hottell",
  loc: "street no xyz delhi",
  categories:["chinese","italian","english"],
  mainMenu:["foodA","foodB","foodC"],
  openinghours:{
    sunday:{open:"09:00am",close:"11:00pm"},
    monday:{open:"10:00am",close:"10:00pm"},tuesday:{open:"8:00am",close:"9:00pm"},
  }
}
//falsy value=> 0,false,null,undefined,''(empty string)

//AND(&&) operator (output true if all input true)
let result= 90 && "coders"&& 0;//not move towards next operand
console.log(result);//last value assigned

//OR(||) operator (output true if any given input true)
let result1=''|| "program"||90||0;
console.log(result1);//first value assigned
//as || operator find first output true. it simply return that true value and doesnot move towards next operands
