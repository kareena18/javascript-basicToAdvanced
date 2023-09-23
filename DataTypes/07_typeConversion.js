//type conversion 

let stringType = "54";
console.log(stringType, typeof stringType);

//number method
let numberType = Number(stringType);
console.log(numberType, typeof numberType);

//imp note: in numner method passing string must be of numeric values
let num = 5489;
console.log(num, typeof num);
//string method 
let str = String(num);
console.log(str, typeof str);

//boolean method true/false
let age = 32;
let booleanvalue = Boolean(age);
console.log(booleanvalue, typeof booleanvalue);
let booleanvalue1 = Boolean("");
console.log(booleanvalue1, typeof booleanvalue1);