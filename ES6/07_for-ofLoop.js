//for-of loop
let hotel={
  name:"hottell",
  loc: "street no xyz delhi",
  categories:["chinese","italian","english"],
  mainMenu:["foodA","foodB","foodC"],
  starterMenu:["specialfoodA","specialfoodB","specialfoodC"],
  openinghours:{
    sunday:{open:"09:00am",close:"11:00pm"},
    monday:{open:"10:00am",close:"10:00pm"},tuesday:{open:"8:00am",close:"9:00pm"},
  }
}

let menu=[...hotel.mainMenu,...hotel.starterMenu];
console.log(menu);

for(let ele of menu.entries())
  console.log(ele);

//if we want both index as well as value
for(let [i,item] of menu.entries())
  console.log(`${i+1}: ${item}`);
