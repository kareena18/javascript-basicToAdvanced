//function
"use strict";
//call and apply method
//we can manually set the valur of "this" keyword using "call" and "apply"

let mainPlane ={
  airline:"Fly-India",
  iatacode:"FL",
  booking:[],
  book:function(flightNum,name){
    console.log(`${name} booked flight on ${this.airline} with flight number ${this.iatacode}${flightNum}`);
    this.booking.push({flight: `${this.airline}`,name: `${name}`,flightNum: `${this.iatacode}${flightNum}`});
  }
}

mainPlane.book(23,"Kareena Sahoo");
mainPlane.book(21,"Gourav Kumar Sahoo")
console.log(mainPlane.booking);
console.log(mainPlane);

//new airline launched for same group

let childPlane={
  airline:"child plane",
  iatacode: "CP",
  booking:[]
}

let book = mainPlane.book;
//*******book(665,"lurie");//book is a regular function

//this value is undefined at least in strict mode

//*******solution using "call" method
book.call(childPlane,669,"zacl");//arguments are not passed in the form of array
console.log(childPlane);
book.call(mainPlane,56,"kary");
console.log(mainPlane);

//apply method
book.apply(childPlane,[67,"lara"]);//arguments are passed in the form of array
console.log(childPlane);

//bind method
function greet(){
  console.log(`welcome ${this.firstname} ${this.lastname} to party`);
}
let user={
  firstname:"john",
  lastname:"paul"
}
let greets=greet.bind(user);
greets();
//greet();
