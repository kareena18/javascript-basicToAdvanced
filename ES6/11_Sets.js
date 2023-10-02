//sets
//sets are just collection of unique values

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
//example
//let itemSet=new Set([1,5,6,7,8,9,1,2,1,2,4,3,7]);
let itemSet=new Set("programming");
console.log(itemSet);
console.log(itemSet.size);
console.log(itemSet.has(89));
itemSet.add(89);
itemSet.delete(89);
console.log(itemSet);

//set are also iterables
for(let item of itemSet){
  console.log(item);
}
