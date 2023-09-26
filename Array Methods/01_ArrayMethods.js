//working with arrays(simple methods)
let letters=["a","b","c","d","e"];

//reverse (mutate the original array)
let reverse=letters.reverse();
console.log(reverse);
console.log(letters);

//concat
let nums=[1,2,3,4,5,6,7];
let concated = nums.concat(letters);
console.log(...nums,...letters);
console.log(concated,nums);

//join
let joined = letters.join('-');
console.log(joined);
console.log(typeof joined);
