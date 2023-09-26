//map method

//create new array from original array by applying transformation function

let salary = [2000,5409,6543,3211,5456];
let newSalary=salary.map(salary=>{
  let increment=salary/2;
  return salary+increment;
})
console.log(newSalary);

//length of the new array is equal to the original array
