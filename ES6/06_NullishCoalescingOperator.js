//nullish coalescing operator(??)
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
// for || operator
let numGuests =0;
let result =numGuests||10;
console.log(result);

//for nullish coalescing operator(??) only null and undefined are falsy value

let result2=numGuests?? 10;
console.log(result2);//0 is not nullish value

//it return first non nullish value
