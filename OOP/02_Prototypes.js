//object oriented programming

//prototype
//each object created by constructor function has ab access to all methods present inside that constructor prototype


let car = function(color,model){
  //console.log(this);
  //instance properties
  this.color = color;
  this.model = model;
  //not a good practice
  /*this.startEngine = function(){
    console.log('this is the start engine method of the car');
  }*/
}
console.log(car.prototype);
car.prototype.startEngine = function(){
    console.log('this is the start engine method of the car');
  }

//we can also set property to prototype
car.prototype.company="honda";

let result = new car("black",2023);
let instance = new car("blue",2022);
console.log(result,instance);
console.log(instance instanceof car);

instance.startEngine();
console.log(instance.__proto__);
