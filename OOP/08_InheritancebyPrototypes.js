//object oriented programming

//prototypal inheritance(using constructor function)

// class declaration
class car{
  constructor(color,model){
    this.color=color;
    this.model=model;
  }  
}
car.prototype.startEngine=function(){
    console.log("this is start engine of car class");
  }
let honda = new car("red",2022);
console.log(honda);

//child class
let bike = function(color,model,engineCapacity){
  car.call(this,color,model);
  this.engineCapacity=engineCapacuty
}
bike.prototype= Object.create(car.prototype);

//not inherited
bike.prototype.ownbike = function(){
  console.log("this is own bike class method");
}
let bike1= new bike("green",2019,"2000cc");
let bike2= new bike("black",2017,"567zz");
console.log(bike1);
