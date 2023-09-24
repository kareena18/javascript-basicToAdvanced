//returning values ( how to return value from the function )

let ageCalculation = function(birthYear,currentYear=2023){
  let age = currentYear - birthYear;
  return age;
  console.log("doesn't executed");
}
let result = ageCalculation(2002);
console.log(result);
