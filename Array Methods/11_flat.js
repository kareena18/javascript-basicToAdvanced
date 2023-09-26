//flat method

//it create a new array with the elements of the subarrays concatenated into it
let arr=[1,2,4,5,[4,7,2,9,7,[6,8,9]]];
console.log(arr);
let result = arr.flat(2);//by default 1 value
console.log(result);//non mutating
