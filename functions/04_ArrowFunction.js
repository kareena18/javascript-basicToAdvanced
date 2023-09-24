//arrow function

//special form of function
//it allows us to write function more fast because no need to use function keyword, no need to use paranthesis() in case of single parameter, no need to use curly {} if single line code in function, no nedd to use return statement if single line code in function 

//function expression
let invitation = function(name){
  console.log(`${name} you are invited`);
}
invitation("coders");

//arrow function of above function
let invitations= name => `${name} you are invited`;
console.log(invitations("pihu"));
