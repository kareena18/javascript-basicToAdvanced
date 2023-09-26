//filter method(used to perform filtration on array)

let gift=["watch","ring","chocolate","teddy bear","dress","flower","watch"];

//now you want to filter only watch and teddy bear gift
let filterArray = gift.filter(gift=>{
  if(gift=="watch"||gift=="teddy bear")
    return gift;
})
//it return new array
console.log(filterArray);
console.log(gift);

//length of the new array may not be equal to the original array
