//data structure,string,operator

//destructuring of object
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
//let{name,loc,mainMenu}=hotel;
//console.log(name,loc,mainMenu);

//set customize name to object property
//let {name:hotelName,loc:hotelLocation,mainMenu:Menu}=hotel;
//console.log(hotelName,hotelLocation,Menu);

//setting default value
//let {name,mainMenu:newMenu=[],categores=[]}=hotel;
//console.log(name,newMenu,categores);

//destructuring nested objects
let{name,openinghours}=hotel;
console.log(name,openinghours);
let{sunday:{open,close}}=openinghours;
console.log(open,close);
