//spread operator(unpacking of array elements)
let hotel={
  name:"hottell",
  loc: "street no xyz delhi",
  categories:["chinese","italian","english"],
  mainMenu:["foodA","foodB","foodC"],
  openinghours:{
    sunday:{open:"09:00am",close:"11:00pm"},
    monday:{open:"10:00am",close:"10:00pm"},
  }
}

let nums=[2,3,5,7];
console.log(...nums);

//usecase
let newArray=[9,10,...nums];
console.log(newArray,nums);

let updatemainMenu=[...hotel.mainMenu,"foodD","foodE"];
console.log(updatemainMenu);

//join 2 arrays
let joinedArray=[...nums,...newArray];
console.log(joinedArray);

//create shallow copy using spread operator
let copyArray=[...updatemainMenu];
copyArray[1]="updatedFood";
console.log(copyArray);
console.log(updatemainMenu);

//we can also use spread operator on strings
let passion = "programming";
console.log(...passion);
//same as
console.log('p','r','o','g','r','a','m','m','i','n','g');
