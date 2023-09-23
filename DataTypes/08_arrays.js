//arrays
let dishes =["biryani","chat","gupchup"];

//access
console.log(dishes[1]);

//modify the array
dishes[1]="samosa";
console.log(dishes);

//array method

//join method
console.log(dishes.join("-"));

//indexOf
console.log(dishes.indexOf("gupchup"));

//concat method
let newdishes=["sweet-dish","rasgulla"];
console.log(dishes.concat(newdishes));
let updatedishes = dishes.concat(newdishes);

//length
console.log(dishes.length);
console.log(updatedishes.length);

//push method
console.log(updatedishes.push("chowmin"));//return new length of the array
console.log(updatedishes);

//pop method
console.log(dishes.pop());