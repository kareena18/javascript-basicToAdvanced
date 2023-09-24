//Hoisting
//variables "declaration" are "hoisted" toward top of the scope

t=10;
console.log(t);
var t = 5;

//function declaration
test();
function test(){
  console.log("hello");
}

//not function expression and arrow function
//test1();
let test1= function(){
  console.log("test started");
}
test1();
