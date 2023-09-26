//how to store complex data structure like array of objects

//ultimately in local storage date store in string format

let vehicle =[
  {company:"honda",model:"2009"},
  {company:"toyota",model:"2010"}
];
console.log(vehicle);

let stringOfVehicles = JSON.stringify(vehicle);
console.log(stringOfVehicles);

localStorage.setItem("vehicle",stringOfVehicles);
console.log(localStorage);

//get stord item again in object format
let storedData = localStorage.getItem("vehicle");
let objectFormat = JSON.parse(storedData);
console.log(objectFormat);
