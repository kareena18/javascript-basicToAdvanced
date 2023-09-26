//object oriented programming

//prototypal inheritance on built in objects(arrays)

let car = function(color,model){
  //instance properties
  this.color = color;
  this.model = model;
}

//method
car.prototype.startEngine = function(){
    console.log('this is the start engine method of the car');
  }

//we can also set property to prototype
car.prototype.company="honda";

let result = new car("black",2023);
let instance = new car("blue",2022);
console.log(result,instance);
console.log(instance instanceof car);

console.log(instance.__proto__.isPrototypeOf(instance));

//it is same as
console.log(car.prototype.isPrototypeOf(car));//car.prototype is prototype of all objects created through the constructor

let arr=[1,2,3,4,5,6,7];//[] is same as Array[]
console.log(arr.__proto__,Array.prototype);
console.log(arr.__proto__.__proto__);//chaining of prototype
console.log(Object.prototype);
