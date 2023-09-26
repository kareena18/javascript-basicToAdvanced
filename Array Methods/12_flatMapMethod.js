//flatMap method

//it is the combination of the map() method followed by the first() method of depth 1

let cart=[{
  name:"mobile",
  qty:2,
  price:500
},{
  name:"tablet",
  qty:1,
  price:1000
}];
let newCart= cart.flatMap(item=>{
  if(item.name==="mobile"){
    return [item,{
            name: "screen protector",
      qty:1,
      price:0
    }]
  }
  else{
    return [item];
  }
})
console.log(newCart);
