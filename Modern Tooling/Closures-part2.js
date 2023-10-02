//function
//closures
//closures doesnot make separate copy of outer variable
//it just reference them
let counter=function(){
  let count=0;
  let innerCounter=function(){
    return count=count+1;
  }
  return innerCounter;
}
let innerCount=counter();
console.log(innerCount());
console.log(innerCount());
console.log(innerCount());
