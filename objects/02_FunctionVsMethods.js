//function vs method
let ageCalculate = function(birthYear){
  let age =2023-birthYear;
  console.log(`current age is ${age}`);
}
ageCalculate(2002);

//method - it is nothing but object property golding function as value
let person ={
  ageCalculate: function(birthyear=2000){
    let age = 2023 - birthyear;
    return age;
  }
}
console.log(`age is ${person.ageCalculate(1997)}`);
console.log(`age is ${person.ageCalculate()}`);
