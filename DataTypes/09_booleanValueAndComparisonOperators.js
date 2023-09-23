//boolean value and comparison operator

let booleanType = true;
let stringType = "true";

console.log(typeof booleanType, typeof stringType);

//method return boolean values
let email = "wowcoder@example.com";
let bool = email.includes("E");
console.log(bool);

//comparison operator always return boolean value
// == === !== !=
// > >=
// < <=
let points = 23;
console.log(points == "23");
console.log(points === "23");
console.log(points != 234);
console.log(points >= 5);