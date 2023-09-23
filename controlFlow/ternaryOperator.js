//ternary operator(?:)

let age =20;
let weight =70;
let result=age>20?"qualify":"fail";
console.log(result);

let result1= age>90?(weight>50?"age greater than 90 and weight greater than 50":"age greater than 90 and weight less than 50"):(weight>70?"age less than 90 and weight greater than 70":"age less than 90 and weight less than 70");
console.log(result1);