//asynchronous javascript

//async code example

console.log(1);
console.log(2);
console.log(3);

//async code
setTimeout(()=>{
  console.log("callback")
},3000);//after 3 seconds

//is this code block the execution for 3seconds? no
console.log(4);
console.log(5);
