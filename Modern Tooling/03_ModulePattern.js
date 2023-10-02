//modern javascript module and tooling
//module pattern
//IIFE
let resultIIFE = (function(){
  let order=[];
  let addToCart=function(product,quantity){
    console.log(`${product} ordered ${quantity}`);
    order.push({product,quantity});
  }
  return{
    order,addToCart
  }
})()

resultIIFE.addToCart("burger",3);
resultIIFE.addToCart("biryani",1);
resultIIFE.addToCart("french fries",10);
console.log(resultIIFE);
