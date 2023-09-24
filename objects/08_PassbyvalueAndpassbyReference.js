//"object/arrays" how "reference" are passed to variable

let arr=[1,2,3,4,5,6];
let getRef = arr;

getRef[5]=7;
getRef.shift();

console.log("original array: ",arr);//also change
console.log("getRef array: ",getRef);
console.log("**********");

//pass by value
let getValue =[...arr];//... spread operator

getValue[4]=3;
getValue.shift();

console.log("original array: ",arr);
console.log("getRef array: ",getValue);
