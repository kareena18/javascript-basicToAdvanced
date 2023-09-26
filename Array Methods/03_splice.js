//array methods

//splice method
//used to add new elements into the array
//array.splice(index,deletevalue,valueToAdd)
//return the deleted items in the form of the array

let num =[2,5,3,7,8,9,28,49];
let updated = num.splice(1,4,6,4);//it also update the original array
console.log(num);
console.log(updated);
