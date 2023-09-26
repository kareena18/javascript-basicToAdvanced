//object oriented programming

//constructor function and the "new" operator
//we can not use "arrow" function as constructor
//call 'constructor' function using "new" keyword

//1 new{object} created empty intially
//2 "this"={object}
//3 object linked to prototype
//4 function automatically return {object}

let car = function(color,model){
  //console.log(this);
  //instance properties
  this.color = color;
  this.model = model;
  //not a good practice
  this.login=function(){
    console.log('login method')
  }
}
let result = new car("black",2023);
let instance = new car("blue",2022);
console.log(result,instance);
console.log(instance instanceof car);
