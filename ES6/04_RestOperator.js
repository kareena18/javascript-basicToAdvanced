//rest pattern and parameter
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

//spread(...) operator it is present in the RHS of =
let nums=[2,3,4,5,6];
let newArray=[1,...nums];
console.log(newArray);

//syntax of REST(...) get elements and placed them into array use in LHS
let[a,b,...others]=nums;
console.log(others);

//objects
let {sunday,...weekDays}=hotel.openinghours;
console.log(sunday,weekDays);
