//enhanced object literals

//before ES6 vs after ES6
//we can use computed property name
let openinghours={
    sunday:{open:"09:00am",close:"11:00pm"},
    monday:{open:"10:00am",close:"10:00pm"},
    tuesday:{open:"8:00am",close:"9:00pm"},
}

let menuType="platinum";

let hotel={
  name:"hottell",
  loc: "street no xyz delhi",
  categories:["chinese","italian","english"],
  mainMenu:["foodA","foodB","foodC"],
  starterMenu:["specialfoodA","specialfoodB","specialfoodC"],
  openinghours,
  order(){
    
  },
  [menuType]:["Different food item......"],//menuType->platinum
}
console.log(hotel);
