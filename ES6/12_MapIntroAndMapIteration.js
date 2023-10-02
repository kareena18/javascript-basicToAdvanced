//maps
//it is data structure which is used to map values into keys. in map the data type of key can be of "any"
//map is similar to object
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

let restaurantMap=new Map();

//adding values into the map
restaurantMap.set(name,"bombay hotel");
restaurantMap.set(1,"address1");
restaurantMap.set(2,"address2").set(true,"we are open today").set(false,"we are closed today");
console.log(restaurantMap);

//getting the value
console.log(restaurantMap.get(false));
//size
console.log(restaurantMap.size);
