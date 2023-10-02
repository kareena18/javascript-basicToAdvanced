//looping objects(object_keys,value,entries)
//objects are non-iterables but indirectly we can... 
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

//keys(properties)
let properties=Object.keys(openinghours);
console.log(properties);
//we know how to loop over array

for(let key of properties){
  console.log(key);
}

//values
let values=Object.values(openinghours);
console.log(values);

for(let val of values){
  console.log(val);
}

//complete object
let entries=Object.entries(openinghours);
for(let [day,{open,close}] of entries){
  console.log(`on ${day} we open at ${open} and close at ${close}`)
}
