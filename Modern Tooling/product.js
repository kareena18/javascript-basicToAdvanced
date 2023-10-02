console.log("exporting modules");
export let order=function(buyer,item){
  console.log(`${buyer} order this ${item}`);
}

//multiple value
let laptopPrice =200000;
let quantity=20;
//export {laptopPrice,quantity as quant};

export default order;
