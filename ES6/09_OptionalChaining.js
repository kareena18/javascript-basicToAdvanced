//optional chaining(?.)
let openinghours={
    sunday:{open:"09:00am",close:"11:00pm"},
    monday:{open:"10:00am",close:"10:00pm"},
    tuesday:{open:"8:00am",close:"9:00pm"},
}
let hotel={
  name:"hottell",
  loc: "street no xyz delhi",
  categories:["chinese","italian","english"],
  mainMenu:["foodA","foodB","foodC"],
  starterMenu:["specialfoodA","specialfoodB","specialfoodC"],
  openinghours,
}

//let suppose we want to check this hotel open on saturday or not. if open then at what time
//console.log(hotel.openinghours.saturday.open);

//to avoid this error two method
//without optional chaining
if(hotel.openinghours && hotel.openinghours.saturday){
  console.log(hotel.openinghours.saturday.open);
}

//with optional chaining
console.log(hotel.openinghours?.saturday?.open);
//check properties value of the operator =>null or undefined
//return undefined
