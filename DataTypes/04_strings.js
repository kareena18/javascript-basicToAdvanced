//strings
console.log("hello coders");

let firstName = "wow";
let lastName = "programmer";
console.log(firstName, lastName);

//string concatenation

//method 1 using + operator
let fullName = firstName + " " + lastName;
console.log(fullName);

//method 2 using template literals
let fullName1 = `i want to become ${firstName} ${lastName}`;
console.log(fullName1);

//getting string character
console.log(firstName[2]);

//strings methods

console.log(firstName.toUpperCase());
console.log(lastName.indexOf("m"));

//common strings method

let hobbies = '       coding reading running';
console.log(hobbies);

//trim method
let result = hobbies.trim();
console.log(result);

//indexOf
console.log(result.lastIndexOf("running"));//case sensitive

//includes method
console.log(result.includes("running"));

//slice method
let full = "wowprogrammer";
console.log(full.slice(0, 8));//excluding last one 0-7
let result1 = full.slice(0, 4);//0-3
//imp note doesnot mutate original string
console.log("original string: ", full);
console.log("extracted string: ", result1);

//split method
let favcolor = "brown black gray blue";
let arrcolor = favcolor.split(" ");
//string to array
console.log(arrcolor);

//javascript strings are immutable
let str = "hello";
str[0] = "p";
str[1] = "q";
//there will be no change in the string 
console.log(str);

str = str + "programmer";//new memory location is assigned but string doesnot modified
console.log(str);