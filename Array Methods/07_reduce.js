//reduce method

//run reduce function for each array elements
//array.reduce(function(total,currentvalue),initialvalue)
//it return single value

//sum of all elements using reduce method
let num=[1,2,3,4,5,6,7,8,9];
let sum =num.reduce(function(total,currentvalue){
  return total+currentvalue;
},0);
console.log(sum);

//does not mutate the original array
