//passing function as an argument ( higher order function example )
//callback function
let upperCase = function(str){
  return str.toUpperCase();
}
let lowerCase = function(str){
  return str.toLowerCase();
}
let transformer = function(str,fun){
  return fun(str);
}
console.log(transformer("heLLo progRAMMERS",upperCase));
console.log(transformer("karEeNa",lowerCase));
