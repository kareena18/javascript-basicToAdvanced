//function 

//function returning another function 
let compliment = function(msg){
  return function(name){
    console.log(`${msg} ${name}`);
  }
}
compliment("you are good coder")("kareena");

//second method
let complimented = compliment("you are nice");
complimented("carry");
//complimented is a higher order function 
